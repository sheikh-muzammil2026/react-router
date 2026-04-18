import React from 'react';
import Navbar from '../Componenet/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componenet/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayout;