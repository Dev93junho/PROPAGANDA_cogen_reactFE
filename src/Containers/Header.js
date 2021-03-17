import React, { Container } from 'react';
import './css/index.css'
import "bootstrap/dist/css"

class Header extends Container{
    render(){
        return (
            <div id="navbar-wrap">
                <div id="NavsideToggle"><Link href="#"><i class="fa fa-bars" aria-hidden="true"></i></Link></div>
                <div id="logo"><Link href="#">PROPAGANDA</Link></div>
                <div id="right-nav">
                    <Link href="#" class="icon" class="col-4"><i class="fa fa-search" aria-hidden="true"></i></Link>
                    <Link href="#" class="icon" type="button"><i class="fa fa-bell-o" aria-hidden="true" class="btn-alert" onclick="newPopupToggle()"></i></Link>
                    <Link href="#" class="user" onclick="userInfoToggle()"><i class="fa fa-user-circle" aria-hidden="true"></i></Link>
                </div>
            </div>
        );
    }
}



export default Header;