import React, {useState, showSidebar} from 'react';
import "./css/sidebar.css";
import { FaBars } from "react-icons/fa";



const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
    <div className="sidebar">
         <FaBars onClick={showSidebar} />
         
    </div>
    );
}

export default Sidebar;