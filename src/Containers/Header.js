import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { MenuItems } from "./MenuItems";
import  Sidebar  from "./Sidebar";
import './css/Header.css';

class Header extends Component{
    state = { clicked : false}

    handleClick = () => {
        this.setState({clicked: this.state.clicked})
    }
    render(){
        return (
            <nav className="NavbarItems">
                <div className="sidebar-icon" onClick={this.handleClick}><Sidebar />
                <i className={this.state.clicked ? 'fas fa-times' : 'fa fa-bars' }></i>
                </div>
                
                <h1 className="Logo">Co-Generative Note</h1>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
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