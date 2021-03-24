import React, {Component} from 'react';
import { FaBars } from 'react-icons/fa'
import "./css/sidebar.css";


class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <FaBars size="24" />
            </div>
        )
    }
}

export default Sidebar;