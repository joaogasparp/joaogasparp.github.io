import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 md:pt-28 lg:pt-32">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
