import React from 'react';
import { NavLink } from 'react-router';

const MyNavLinks = ({to, text}) => {
    return (
        <li><NavLink
         to={to}
         className={({isActive})=> `${isActive && 'text-purple-500 underline' }`}
         >{text}</NavLink></li>
    );
};

export default MyNavLinks;