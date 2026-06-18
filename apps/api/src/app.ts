import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import pinoHttp from 'pino-http';
import { nanoid } from 'nanoid';
import { env } from './env';
import { logger } from './logger';
import { healthRouter } from './modules/health/health.routes';
import { contactRouter } from './modules/contact/contact.routes';
import { notFound } from './middleware/notFound';
import { errorHandler } from './middleware/errorHandler';

export function createApp() {
  const app = express();

  // Behind a reverse proxy (nginx / Render / Vercel) in production.
  app.set('trust proxy', 1);

  app.use(helmet());
  app.use(
    cors({
      origin: env.CORS_ORIGIN.split(',').map((o) => o.trim()),
      credentials: true,
    }),
  );
  app.use(express.json({ limit: '10kb' }));

  // Request logging with a short id on every request, so you can trace a single
  // request through the logs (visible in Render's "Logs" tab).
  app.use(
    pinoHttp({
      logger,
      genReqId: (req, res) => {
        const existing = req.headers['x-request-id'];
        const id = (Array.isArray(existing) ? existing[0] : existing) ?? nanoid(10);
        res.setHeader('x-request-id', id);
        return id;
      },
    }),
  );

  app.use('/api/health', healthRouter);
  app.use('/api/contact', contactRouter);

  app.use(notFound);
  app.use(errorHandler);

  return app;
}
