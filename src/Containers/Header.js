import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"
import  Sidebar  from "./Sidebar";
import { Link } from 'react-router-dom';
import './css/Header.css';

class Header extends Component{

    state = { clicked : false}

    handleClick = () => {
        this.setState({clicked: this.state.clicked})
    }

    render(){
        return (
            <nav className="NavbarItems">
                <Sidebar />
                <a><h1 className="Logo">Co-Generative Note</h1></a>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.icon}
                                </a>
                            </li>                            
                        )
                    })}
                </ul>
            </nav>
        );
    }
}



export default Header;