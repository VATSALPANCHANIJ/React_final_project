import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Loader from "./Loader";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate an asynchronous action (e.g., fetching data from an API)
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="sweet-loading" style={{ backgroundColor: loading ? '#F5AB1E' : '#FFFFFF', minHeight: '100vh' }}>

      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main style={{ minHeight: '85vh' }}>
            <Outlet /> {/* This is where child components will be rendered */}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
