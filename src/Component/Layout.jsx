import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '85vh' }}>
        <Outlet /> {/* This is where child components will be rendered */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
