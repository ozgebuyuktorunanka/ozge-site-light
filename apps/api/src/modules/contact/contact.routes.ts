import { Router, Request } from 'express';
import rateLimit from 'express-rate-limit';
import { contactSchema } from './contact.schema';
import { saveContactMessage } from './contact.service';
import { logger, maskEmail } from '../../logger';

export const contactRouter = Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: { message: 'Too many messages — please try again later.' } },
});

contactRouter.post('/', limiter, async (req: Request, res, next) => {
  const reqId = (req as Request & { id?: string }).id;
  try {
    const data = contactSchema.parse(req.body);

    // Honeypot tripped: act successful, store nothing.
    if (data.company) {
      logger.warn({ reqId, ip: req.ip }, 'Contact honeypot tripped — ignoring');
      return res
        .status(201)
        .json({ ok: true, message: 'Thanks — your message has been received.' });
    }

    const saved = await saveContactMessage(data, {
      ip: req.ip,
      userAgent: req.get('user-agent') ?? undefined,
    });

    logger.info(
      { reqId, id: saved.id, email: maskEmail(data.email), locale: data.locale },
      'Contact message stored',
    );

    return res
      .status(201)
      .json({ ok: true, message: 'Thanks — your message has been received.' });
  } catch (err) {
    // Validation errors are turned into 400 by the central error handler;
    // anything else is logged there too. We just forward it.
    return next(err);
  }
});
