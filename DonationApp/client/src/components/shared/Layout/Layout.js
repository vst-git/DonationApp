import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../../../styles/Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <div className="header"></div>
      <Header />
      <div className="row g-0">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">{children}</div>
      </div>
    </>
  );
};

export default Layout;
