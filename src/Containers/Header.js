import React, { Container } from 'react';
import './css/index.css'

class Header extends Container{
    render(){
        return (
                <div id="navbar-wrap">
                    <a href="#" class="col-1"><i class="fa fa-bars" aria-hidden="true" onclick="toggleMenu"></i></a>
                    <span id="brand"><a href="#">PROPAGANDA</a></span>

                    <span id="right-nav" class="col-2">
                        <object><a href="#" class="icon" class="col-2"><i class="fa fa-search" aria-hidden="true"></i></a></object>
                        <object><a href="#" class="icon" type="button"><i class="fa fa-bell-o" aria-hidden="true" class="btn-alert" onclick="newPopupToggle()"></i></a>
                        </object>
  
                    <a href="#" class="user" onclick="userInfoToggle()"><i class="fa fa-user-circle" aria-hidden="true"></i></a>
                    </span>
                </div>
            );
    }
}



export default Header;