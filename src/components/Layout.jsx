import React, { useState } from "react";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, pageProps }) => {
  const [selectedLang, setSelectedLang] = useState("ENGLISH");

  const handleLangChange = (lang) => {
    setSelectedLang(lang);
  };
  const layoutStyle = {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    minHeight: "100vh",
  };

  return (
    <LanguageProvider>
      <div style={layoutStyle}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
