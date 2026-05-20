import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations';

const LANGUAGE_KEY = 'freegenero-language';
const supportedLanguages = ['en', 'ka'];

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  const storedLanguage = window.localStorage.getItem(LANGUAGE_KEY);
  return supportedLanguages.includes(storedLanguage) ? storedLanguage : 'en';
};

const getTranslation = (language, key) => {
  const value = key.split('.').reduce((current, part) => current?.[part], translations[language]);
  return typeof value === 'string' ? value : key;
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage) => {
        if (supportedLanguages.includes(nextLanguage)) {
          setLanguage(nextLanguage);
        }
      },
      t: (key) => getTranslation(language, key),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
