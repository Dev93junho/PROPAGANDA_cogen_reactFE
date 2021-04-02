import React from 'react';
import { MenuItems } from "./MenuItems";
import { FaBars } from 'react-icons/fa';
import './css/Header.css';




class Header extends React.Component{


    state = { clicked : false}
    handleClick = () => {
        this.setState({clicked: this.state.clicked})
    }

    render(){
        return (

            <nav className="NavbarItems">
                <div className="nav-left-menu">
                <FaBars size="24" />
                <a href="#/"><img src={process.env.PUBLIC_URL +"/logo.png"} alt="logo url" className="Logo" /> </a>

                </div>
 
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index} >
                                <a className={item.cName} href={item.url} >
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