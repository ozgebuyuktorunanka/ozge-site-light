import pino from 'pino';
import { env } from './env';

const level = env.LOG_LEVEL ?? (env.NODE_ENV === 'production' ? 'info' : 'debug');

export const logger = pino({
  level,
  base: { service: 'ozge-api' },
  // In production we emit JSON (best for Render's log viewer / log drains).
  // In development we pretty-print for readability.
  transport:
    env.NODE_ENV === 'development'
      ? { target: 'pino-pretty', options: { colorize: true, translateTime: 'HH:MM:ss' } }
      : undefined,
});

/** Redact an email for logs: jane@acme.com -> j***@acme.com */
export function maskEmail(email: string): string {
  const [user, domain] = email.split('@');
  if (!user || !domain) return '***';
  return `${user[0]}***@${domain}`;
}
