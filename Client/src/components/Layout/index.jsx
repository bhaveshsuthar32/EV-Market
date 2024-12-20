import React from "react";
import Header from "../../pages/admin/layouts/Header";
import Sidebar from "../../pages/admin/layouts/Sidebar";

const Layout = ({ children }) => {
  return (
    
      <div className="flex-1">
        <Header />
        <Sidebar />
        <main className="px-4 sm:ml-64">{children}</main>
      </div>
  );
};

export default Layout;
