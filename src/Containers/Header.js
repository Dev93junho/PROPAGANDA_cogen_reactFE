import React, { Component } from 'react';
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
                <Sidebar />
                <h1 className="Logo">Co-Generative Note</h1>

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