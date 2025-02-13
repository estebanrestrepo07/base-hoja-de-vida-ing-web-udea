import React from 'react';
import { Outlet } from 'react-router-dom';
// import Footer from '../components/Footer';
import Navbar from 'components/Navbar';

const PublicLayout = () => (
  <div className='flex flex-col'>
    <Navbar />
    <div className='h-full'>
      <Outlet />
    </div>
    {/* <Footer /> */}
  </div>
);

export default PublicLayout;
