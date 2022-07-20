import React from "react";
import Footer from "./Footer";
import PageHeader from "./Page/PageHeader";

const Layout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <PageHeader />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
