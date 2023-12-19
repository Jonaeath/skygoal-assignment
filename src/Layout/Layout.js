import React from 'react';
import Navbar from '../Component/ShareFile/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/ShareFile/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;