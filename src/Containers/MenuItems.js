import React from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { BiGhost } from "react-icons/bi";



export const MenuItems = [
    {
        icon: <BiSearchAlt2 size="24"  />,
        url: '#',
        cName: 'search'
    },
    {
        icon: <BsBell size="24" />,
        url: '#',
        cName: 'bell'
    },    
    {
        icon: <BiGhost size="24"/>,
        url: '#',
        cName: 'user'
    }
]