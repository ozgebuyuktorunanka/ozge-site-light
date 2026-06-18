import type { ContactInput } from '../i18n/types';
import { log } from './logger';

const BASE = import.meta.env.VITE_API_URL ?? '';

export interface ContactResult {
  ok: boolean;
  message: string;
}

export async function sendContact(input: ContactInput): Promise<ContactResult> {
  try {
    const res = await fetch(`${BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });

    const data = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      message?: string;
      error?: { message?: string };
    };

    if (!res.ok) {
      const reason = data?.error?.message ?? `Request failed (${res.status})`;
      log.error('Contact submission failed:', reason);
      throw new Error(reason);
    }

    return { ok: Boolean(data.ok), message: data.message ?? 'Sent' };
  } catch (err) {
    // Network errors (API asleep, offline, CORS) land here.
    log.error('Contact request error:', err);
    throw err instanceof Error ? err : new Error('Network error');
  }
}
