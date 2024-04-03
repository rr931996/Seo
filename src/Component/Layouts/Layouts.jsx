import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
const Layout = () => {
    return (
        <div style={{ display: 'flex', height:'100vh' }}>
            <Navbar />
            <Outlet />
            
        </div>
    );
};

export default Layout;
