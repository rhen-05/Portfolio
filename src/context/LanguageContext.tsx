import React, { createContext, useContext, useState, useEffect } from 'react';
import { idLocale, LocaleTranslations } from '@/locales/id';
import { enLocale } from '@/locales/en';

type Language = 'id' | 'en';

interface ILanguageContext {
  language: Language;
  t: LocaleTranslations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<ILanguageContext | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('porto_lang');
    if (saved === 'id' || saved === 'en') return saved;
    return 'id'; // Default as required
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('porto_lang', lang);
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = language === 'id' ? idLocale : enLocale;

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): ILanguageContext => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
