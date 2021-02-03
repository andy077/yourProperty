import React from 'react';
import {NavLink} from 'react-router-dom';
import menuToggle from './menuToggle';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {

    return (
        <>
            <div className='nav_main'>
                <div className='nav_div'>
                    <div className='logo_div'>
                    <NavLink exact to='/'><img src={require('../images/estateLogo.png')} alt='logo' /></NavLink>
                    </div>
                    <div className='menu_div'>
                        <div className='nav' id='navId'>
                            <ul>
                                <li><NavLink exact to='/' className='active_class'>Home</NavLink></li>
                                <li><NavLink exact to='/buy' className='active_class'>Buy</NavLink></li>
                                <li><NavLink exact to='/sell' className='active_class'>Sell</NavLink></li>
                                <li><NavLink to='#' className='active_class'>Financing</NavLink></li>
                                <li><NavLink to='#' className='active_class'>Testimonials</NavLink></li>
                                <li><NavLink exact to ='#contact' className='active_class'>Contact Us</NavLink></li>
                                <li><NavLink to='#' className='active_class'>Blog</NavLink></li>
                            </ul>
                        </div>
                        <div className='menuBar' id='menuclick' onClick={menuToggle}>
                            <MenuIcon className='menuIcon' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;