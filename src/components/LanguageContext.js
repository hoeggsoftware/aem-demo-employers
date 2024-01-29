import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const storedLang =
    typeof window !== "undefined" ? localStorage.getItem("selectedLang") : null;
  const [selectedLang, setSelectedLang] = useState(storedLang || "en");

  const handleLangChange = (lang) => {
    localStorage.setItem("selectedLang", lang);
    setSelectedLang(lang);
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("selectedLang");
    if (storedLang) {
      setSelectedLang(storedLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ selectedLang, handleLangChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { LanguageProvider, useLanguage };
