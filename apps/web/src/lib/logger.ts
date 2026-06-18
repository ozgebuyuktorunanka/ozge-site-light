/**
 * Minimal client-side logger. Keeps a consistent, greppable prefix so errors
 * are easy to find in the browser console / in any error-tracking tool later.
 */
const PREFIX = '[ozge-site]';

export const log = {
  info: (msg: string, ...rest: unknown[]) => console.info(`${PREFIX} ${msg}`, ...rest),
  warn: (msg: string, ...rest: unknown[]) => console.warn(`${PREFIX} ${msg}`, ...rest),
  error: (msg: string, ...rest: unknown[]) => console.error(`${PREFIX} ${msg}`, ...rest),
};
