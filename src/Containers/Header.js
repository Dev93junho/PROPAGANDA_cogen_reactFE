import React, { useState } from 'react'; //useState is React Hook
// import { MenuItems } from "./MenuItems";
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarItems } from './SidebarItems';
import { BiSearchAlt2 } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { BiGhost } from "react-icons/bi";
import Fab from "@material-ui/core/Fab";
import { BsPencilSquare } from "react-icons/bs";
import './css/Header.css';
import './css/Sidebar.css';
import './css/Modal.css';

function SideToggle () {
    const [toggle, setToggle] = useState(false);
    const showToggle = () => setToggle(!toggle);
    return (
        <>
        <Link to='#' className="BtnToggleSidebar">
            <FaBars onClick={showToggle} />
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
            <>
            <Link to='#'><BiSearchAlt2 size="24"/></Link>
            <Link to='#'><BsBell size="24" onClick={showDrop} /></Link>
            <Link to='#'><BiGhost size="24" onClick={showDrop} /></Link>

          <div className={drop ? 'dropmenu active' : 'dropmenu'}>
                아 킹받네 왜 안되지
            </div>
            </>

    )
}




class Header extends React.Component{

    render(){
        return (
            <>
            <nav className="NavbarItems">
                {/* left side menus : sidebar and Go to Home */}
                <div className="nav-left-menu">
                    <SideToggle />
                    <a href="#/"><img src={process.env.PUBLIC_URL +"/logo.png"} alt="logo url" className="Logo" /> </a>
                </div>
                <div className="nav-menu">
                    <DropDownToggle />
                </div>
            </nav>
            {/* Go to FAB button  */}
            
            <Fab
                role="fabMode" 
                color="primary"
                aria-label="add"
                style={{top: "50%", left: "85%", position: "fixed", overflow: "hidden"}}> 
                <BsPencilSquare size="18px" />
            </Fab>

            </>
        );
    }
}

export default Header;