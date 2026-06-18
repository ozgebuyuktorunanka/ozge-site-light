import { createApp } from './app';
import { env } from './env';
import { logger } from './logger';
import { prisma } from './prisma';

const app = createApp();

const server = app.listen(env.PORT, () => {
  logger.info(
    { port: env.PORT, env: env.NODE_ENV, corsOrigin: env.CORS_ORIGIN },
    '🚀 API ready',
  );
});

async function shutdown(signal: string) {
  logger.info({ signal }, 'Shutting down gracefully');
  server.close(async () => {
    try {
      await prisma.$disconnect();
    } catch (err) {
      logger.error({ err }, 'Error during prisma disconnect');
    }
    process.exit(0);
  });
  // Force-exit if the server refuses to close in time.
  setTimeout(() => process.exit(1), 10_000).unref();
}

(['SIGINT', 'SIGTERM'] as const).forEach((sig) =>
  process.on(sig, () => void shutdown(sig)),
);

// Last-resort safety nets — log loudly instead of crashing silently.
process.on('unhandledRejection', (reason) => {
  logger.error({ reason }, 'Unhandled promise rejection');
});
process.on('uncaughtException', (err) => {
  logger.fatal({ err }, 'Uncaught exception — exiting');
  process.exit(1);
});
