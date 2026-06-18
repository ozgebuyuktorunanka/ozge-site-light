import { Router, Request } from 'express';
import { prisma } from '../../prisma';
import { logger } from '../../logger';

export const healthRouter = Router();

healthRouter.get('/', async (req: Request, res, next) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', db: 'up', uptime: process.uptime() });
  } catch (err) {
    logger.error(
      { reqId: (req as Request & { id?: string }).id, err },
      'Health check failed — database unreachable',
    );
    next(err);
  }
});
