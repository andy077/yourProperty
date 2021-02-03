import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

const Footer = () => {

    const currDate = new Date().getFullYear();

    return (
        <>
            <div className='footer_main' id='contact'>
                <div className='footer_div'>
                    <div className='footer_row'>
                        <div className='footer_col'>
                            <h3>Company</h3>
                            <ul>
                                <li>About Us</li>
                                <li>Our Services</li>
                                <li>Contacts</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className='footer_col'>
                            <h3>Contact</h3>
                            <p><span>contact@yourproperty.com</span></p>
                            <p>+91 800 603 3045</p>
                            <div className='social_icons'>
                                <a><TwitterIcon /></a>
                                <a><FacebookIcon /></a>
                                <a><InstagramIcon /></a>
                                <a><PinterestIcon /></a>
                            </div>

                        </div>
                        <div className='footer_col'>
                            <h3>Address</h3>
                            <p>A-17 Birlasoft</p>
                            <p>Sector 63 Noida</p>
                            <p>Uttar Pradesh</p>
                            <p>201307</p>
                        </div>
                    </div>
                    <div className='copyright_div'>
                        <p>YourProperty Copyright © {currDate} | All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;