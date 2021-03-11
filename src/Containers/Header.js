import React, { Container } from 'react';
import { Link } from 'react-router-dom'
import '../index.css'

class Navbar extends Container{
    render(){
        const [sidebar, setSidebar] = useState(false)
        const showSidebar = () => setSidebar(!sidebar);

        return (

            <div className='Navbar'>
                <Link to='#' className='menu-bars'></Link>

            </div>

          
 
        );
    }
}



export default Navbar;