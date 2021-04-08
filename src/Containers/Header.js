import React, { useState } from 'react';
import { MenuItems } from "./MenuItems";
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarItems } from './SidebarItems';
import './css/Header.css';
import './css/Sidebar.css';


function Header(){


    const [toggle, setToggle] = useState(false);
    const showToggle = () => setToggle(!toggle);

        return (
            <nav className="NavbarItems">
                <div className="nav-left-menu">
                    <Link to='#' className="BtnToggleSidebar">
                        <FaBars  onClick={showToggle} />
                    </Link>
                    <a href="#/"><img src={process.env.PUBLIC_URL +"/logo.png"} alt="logo url" className="Logo" /> </a>
                    <div className={toggle ? 'sidebar active' : 'sidebar'}>
                    {SidebarItems.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                        )
                    })}                        
                    </div>
                </div>
                
                <ul className={toggle ? 'nav-menu active' : 'nav-menu'} onClick={showToggle}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index} className={item.cName} >
                                <Link to={item.url} >
                                <span>{item.icon}</span>
                                </Link>
                            </li>                            
                        )
                    })}
                </ul>
            </nav>
        );

}

export default Header;