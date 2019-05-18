import React, { Component } from 'react';
import './Footer.css'
import { Link } from "gatsby"
import Recent from '../Recent-list/Recent'
import SideNav from '../sideNav/sideNav'
import Logo from '../Header/heaton-law.png'

class Footer extends Component {
    
    render() { 
        return ( 
            <div className='footer-container'>
                <img className='footer-logo' src={Logo} alt=""/>
                <Recent />
                &nbsp; &nbsp; &nbsp; &nbsp; 
                <SideNav />

            
            </div>
         );
    }
}
 
export default Footer;