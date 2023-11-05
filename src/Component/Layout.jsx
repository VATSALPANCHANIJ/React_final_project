import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Loader from "./Loader";

const Layout = () => {
 
  return (
    <div className="sweet-loading">

     
        <>
          <Header />
          <main style={{ minHeight: '100vh' }}>
            <Outlet /> {/* This is where child components will be rendered */}
          </main>
          <Footer />
        </>
      
    </div>
  );
};

export default Layout;
