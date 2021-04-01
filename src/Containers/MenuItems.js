import React from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";



export const MenuItems = [
    {
        icon: <BiSearchAlt2 size="24" color="#fff"/>,
        url: '#',

        cName: 'search'
    },
    {
        icon: <BsBell size="24" color="#fff"/>,
        url: '#',

        cName: 'bell'
    },    
    {
        icon: <FaRegUserCircle size="24" color="#fff"/>,
        url: '#',

        cName: 'user'
    }
]