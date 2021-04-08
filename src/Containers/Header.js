import React, { useState} from 'react'; //useState is React Hook
import { MenuItems } from "./MenuItems";
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarItems } from './SidebarItems';
import './css/Header.css';
import './css/Sidebar.css';

function SideToggle () {
    const [toggle, setToggle] = useState(false);
    const showToggle = () => setToggle(!toggle);
    return (
        <>
        <Link to='#' className="BtnToggleSidebar">
        <  FaBars  onClick={showToggle} />
        </Link>

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
    </>
    )
}

function DropDownToggle () {
    const [drop, setDrop] = useState(false);
    const showDrop = () => setDrop(!drop);
    return (
        <div className={drop ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.url} onClick={showDrop}>
                            {item.icon}
                        </Link>
                    </li>
                )
            })}
        </div>
    )
}


class Header extends React.Component{
    render(){
        return (
            <nav className="NavbarItems">
                {/* left side menus : sidebar and Go to Home */}
                <div className="nav-left-menu">
                    <SideToggle />
                    <a href="#/"><img src={process.env.PUBLIC_URL +"/logo.png"} alt="logo url" className="Logo" /> </a>
                </div>

                <div style={{alignItems: "center"}}>
                    <DropDownToggle />
                </div>
            </nav>
        );
    }
}

export default Header;