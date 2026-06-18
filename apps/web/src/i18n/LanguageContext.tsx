import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import type { Dict, Locale } from './types';
import { dictionaries, detectInitialLocale, persistLocale } from './index';

interface LanguageValue {
  locale: Locale;
  t: Dict;
  setLocale: (l: Locale) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  // Resolve the real initial locale on the client after mount.
  useEffect(() => {
    setLocaleState(detectInitialLocale());
  }, []);

  // Keep <html lang> in sync for accessibility and SEO.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LanguageValue>(() => {
    const setLocale = (l: Locale) => {
      persistLocale(l);
      setLocaleState(l);
    };
    return {
      locale,
      t: dictionaries[locale],
      setLocale,
      toggle: () => setLocale(locale === 'tr' ? 'en' : 'tr'),
    };
  }, [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider');
  return ctx;
}
