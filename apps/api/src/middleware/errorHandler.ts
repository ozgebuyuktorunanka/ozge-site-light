import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { logger } from '../logger';

// Express recognises error handlers by their 4-argument signature.
export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) {
  const reqId = (req as Request & { id?: string }).id;

  if (err instanceof ZodError) {
    logger.warn(
      { reqId, path: req.path, issues: err.flatten().fieldErrors },
      'Validation failed',
    );
    return res.status(400).json({
      error: { message: 'Validation failed', details: err.flatten().fieldErrors },
    });
  }

  logger.error(
    { reqId, path: req.path, method: req.method, err },
    'Unhandled error',
  );
  return res.status(500).json({ error: { message: 'Internal server error' } });
}
