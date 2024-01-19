import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [selectedLang, setSelectedLang] = useState('ENGLISH');

  const handleLangChange = (lang) => {
    setSelectedLang(lang);
  };

  return (
    <LanguageContext.Provider value={{ selectedLang, handleLangChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
      throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
  };



export { LanguageProvider, useLanguage };
