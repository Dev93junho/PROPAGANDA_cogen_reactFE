import React, { useState } from 'react';
import { MenuItems } from "./MenuItems";
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import './css/Header.css';
import { SidebarItems } from './SidebarItems';
import './css/Sidebar.css';


function Header (){

    const [sideToggle, setSidebar, ModToggle, setModal] = useState(false)
    const showSidebar = () => setSidebar(!sideToggle)
    const showModal = () => setModal(!ModToggle)

        return (
            <nav className="NavbarItems">
                <div className="nav-left-menu">
                <Link to='#' className="BtnToggleSidebar" onClick={showSidebar}>
                    <FaBars />
                </Link>
                    <div className={sideToggle ? 'sidebar active' : 'sidebar'}>
                        <Link to='#' className="BtnToggleSidebar">
                            <AiOutlineCloseSquare />
                        </Link>
                    </div>
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
                <a href="#/"><img src={process.env.PUBLIC_URL +"/logo.png"} alt="logo url" className="Logo" /> </a>

                
                <ul className={ModToggle ? 'nav-menu active' : 'nav-menu'} onClick={showModal}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index} >
                                <a className={item.cName} href={item.url} >
                                {item.icon}
                                </a>
                            </li>                            
                        )
                    })}
                </ul>
            </nav>
        );

}

export default Header;