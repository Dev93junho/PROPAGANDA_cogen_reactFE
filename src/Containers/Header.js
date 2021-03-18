import React, { Container } from 'react';
import { MenuItems } from "./MenuItems"
import './css/Header.css'

class Header extends Container{
    state = { clicked : false}


    render(){
        return (
            <nav className="NavbarItems">
                <div className="Sidebar"><i class="fa fa-bars" aria-hidden="true"></i></div>
                <h1 className="Logo"><i className="./css/icon/logo.png"></i></h1>
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
            // <div id="navbar-wrap">
            //     <div id="NavsideToggle"><a href="#"><i class="fa fa-bars" aria-hidden="true"></i></a></div>
            //     <div id="logo"><a href="#">PROPAGANDA</a></div>
            //     <div id="right-nav">
            //         <a href="#" class="icon" class="col-4"><i class="fa fa-search" aria-hidden="true"></i></a>
            //         <a href="#" class="icon" type="button"><i class="fa fa-bell-o" aria-hidden="true" class="btn-alert" onclick="newPopupToggle()"></i></a>
            //         <a href="#" class="user" onclick="userInfoToggle()"><i class="fa fa-user-circle" aria-hidden="true"></i></a>
            //     </div>
            // </div>
        );
    }
}



export default Header;