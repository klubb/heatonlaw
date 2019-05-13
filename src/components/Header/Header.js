import React, {Component} from 'react';
import './header.css'
import logo from './heaton-law.png'
import { Link } from "gatsby"
import { FaPhone, FaClock } from "react-icons/fa";



const activeStyles = {
        color: 'red'
}

 export default class Header extends Component {
    render () {
        return (
            <div>
                <div className='blackheader'>
                {/* <h1>heatonlawgroup@gmail.com</h1> */}
                
                
                

                
              
                
                

                <h1>  Our office hours are 6AM - 5PM. Mon-Fri.</h1>
                <div className='divspacer'></div>
                <div className="spacer"></div>
                <div className='phone'>
                <FaPhone /> <h1> (801) -709-4117</h1>
                </div>
                
                
                
                
                
                

                </div>
            <div className = 'navbarContainer'>
            <div>
                    <Link to="/"><img className = 'logo' src={logo} alt=""/></Link>
            </div>
            
                    <ul className = 'navLinks'>
            <div class="dropdown  ">
                    <Link activeClassName='active' to= "/"><span className="dropbtn hvr-fade">Home</span></Link>
                    
            </div>
                    <div class="dropdown">
                    <Link activeClassName='active' to='/expert-team'><span  className="dropbtn hvr-fade">Our Expert Team</span></Link>
                    
            </div>


            <div class="dropdown">
                    <Link activeClassName='active' to = '/page-2/'><span class="dropbtn hvr-fade">Practice Areas</span></Link>
                    <div class="dropdown-content">
                    <Link activeClassName='active' to="/criminal">Criminal</Link>
                    <Link partiallyActive={true} activeClassName='active' to ="/litigation">Litigation</Link>
                    <Link activeClassName='active' to="/injury">Personal injury</Link>
                    <Link activeClassName='active' to="/auto-accident">Auto Accident</Link>
                    </div>
            </div>

            <div class="dropdown">
            <Link partiallyActive={true} activeClassName='active' to="/contact">Contact</Link>
                    
            </div>

            <div class="dropdown">
            <Link partiallyActive={true} activeClassName='active' to="/blog">Blog</Link>
                    
            </div>
            
                        
                        
                    </ul>
                
            </div>
            </div>
        )
    }
}