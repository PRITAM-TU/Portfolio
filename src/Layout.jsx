// Layout.jsx
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

function Layout() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  // Initial loading simulation (remove if using actual loading states)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    },1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      {isLoading || navigation.state === 'loading' ? (
        <Loading />
      ) : (
        <main className="min-h-[calc(100vh-120px)]">
          <Outlet />
        </main>
      )}
      <Footer />
    </>
  );
}

export default Layout;