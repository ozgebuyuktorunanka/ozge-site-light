import type { Dict, Locale } from './types';
import { en } from './en';
import { tr } from './tr';

export const dictionaries: Record<Locale, Dict> = { en, tr };

export const LOCALES: Locale[] = ['tr', 'en'];

const STORAGE_KEY = 'ozge.locale';

/** Pick an initial language: saved choice → browser language → English. */
export function detectInitialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'tr' || saved === 'en') return saved;
  } catch {
    // localStorage may be unavailable (private mode); fall through.
  }
  const nav = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : 'en';
  return nav.startsWith('tr') ? 'tr' : 'en';
}

export function persistLocale(locale: Locale): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Ignore storage failures — the choice still applies for this session.
  }
}

export type { Dict, Locale };
