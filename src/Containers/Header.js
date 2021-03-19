import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import  Sidebar  from "./Sidebar";
import './css/Header.css';

class Header extends Component{
    state = { clicked : false}
    render(){
        return (
            <nav className="NavbarItems">
                <div className="sidebar-icon"><Sidebar /><i class="fa fa-bars" aria-hidden="true"></i></div>
                
                <h1 className="Logo">Co-Generative Note</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>


                </div>
                <ul>
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