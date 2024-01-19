import React from 'react';
import '../styles/globals.css';
import { LanguageProvider } from '@/components/LanguageContext';

function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default App;