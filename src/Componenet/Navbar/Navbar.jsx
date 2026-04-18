import React from 'react';
import { NavLink } from 'react-router';
import MyNavLinks from './MyNavLinks';

const links = [
    {
        path: '/',
        text: 'Home'
    },
    {
        path: '/Apps',
        text: 'Apps'
    },
    {
        path: '/installed',
        text: 'installed'
        
    },
    {
        path: '/Dashboard',
        text: 'Dashboard'
    }
    // ,
    // {
    //     path: '/appsDetails',
    //     text: 'Details'
    // }
];
const Navbar = () => {
    return (
        <div className="navbar-container shadow-md mb-4">
            <div className='container  mx-auto flex justify-between items-center p-2'>
            <h2>logo</h2>
            <ul className="flex gap-2">
                {
                    links.map((link, index)=> (<MyNavLinks key={index} to={link.path} text={link.text}></MyNavLinks>))
                }

                {/* <MyNavLinks to={links.path} >{links.text}</MyNavLinks> */}
                {/* <NavLink to={}>Home</NavLink>
                <NavLink to='installed'>Installed</NavLink>
                <NavLink to='Apps'>Apps</NavLink>
                <NavLink to='Dashboard'>Dashboard</NavLink> */}
            </ul>
            <button className="btn btn-primary">Contribute</button>
        </div>
        </div>
    );
};

export default Navbar;