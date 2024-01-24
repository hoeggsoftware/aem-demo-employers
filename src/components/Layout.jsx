import React, { useState } from "react";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import dynamic from "next/dynamic";
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

  const initialLang = selectedLang || "ENGLISH";
  const NoSSR = dynamic(() => import('./Navbar'), { ssr: false })

  return (
    <LanguageProvider>
      <div style={layoutStyle}>
        <NoSSR initialState={{ selectedLang: initialLang, handleLangChange }} />
        {children}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
