import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Language } from '../utils/loadPageTranslations';
import { loadPageTranslations } from '../utils/loadPageTranslations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  page: string;
  setPage: (page: string) => void;
  loading: boolean;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
  page: '',
  setPage: () => {},
  loading: false,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [page, setPage] = useState<string>('Index');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    Promise.all([
      loadPageTranslations('Layout', language),
      loadPageTranslations(page, language),
    ])
      .then(([layoutTranslations, pageTranslations]) => {
          console.log('LAYOUT TRANSLATIONS:', layoutTranslations);
          console.log('PAGE TRANSLATIONS:', pageTranslations);
        if (!mounted) return;

        setTranslations({
          ...layoutTranslations,
          ...pageTranslations,
        });
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [page, language]);

  const t = (key: string) => translations[key] ?? key;

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, page, setPage, loading }}
    >
      {children}
    </LanguageContext.Provider>
  );
};