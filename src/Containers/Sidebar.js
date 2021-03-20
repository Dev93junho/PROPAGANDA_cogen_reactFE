import React, { Component,useState,showSidebar } from 'react';
import { FaBars } from "react-icons/fa";
import "./css/sidebar.css"



class Sidebar extends Component {
    render(){
        const Sidebar = () => {
            const [sidebar, setSidebar] =  React.useState(false);
            const showSidebar = () => setSidebar(!sidebar);
        }
        return(
            <div className="sidebar">
                <FaBars onClick={showSidebar} />

            </div>
        );
    }
}

export default Sidebar;