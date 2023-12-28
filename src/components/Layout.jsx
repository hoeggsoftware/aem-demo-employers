import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const layoutStyle = {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    minHeight: "100vh",
  };

  return (
    <div style={layoutStyle}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
