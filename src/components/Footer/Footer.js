import React, { Component } from 'react';
import './Footer.css'
import { Link } from "gatsby"

class Footer extends Component {
    
    render() { 
        return ( 
            <div className='footer-container'>
            


                    <div className='footer-info'>
                        <span className='contact-header'>Contact</span>
                        <div className='contact-container borderr'>

                        <span className='contact-info'>New York -- 2 St. Lorem Ipsum</span>
                        <span className='contact-info'>office@themeisle.com</span>
                        <span className='contact-info'>(+4) 0746123456</span>
                        </div>
                        
                    </div>

                    <div className='footer-info'>
                    
                    <h1 className='contact-header'>Sitemap</h1>

                    
                        <div className='contact-container borderr'>
                        


                        <Link to ='/'><span className='contact-info'>Home</span></Link>
                      
                        

                        <Link to ='/expert-team'><span className='contact-info'>Our Expert Team</span></Link>
                        
                      
                        <Link to ='/practice-areas'><span className='contact-info'>Practice Areas</span></Link>
                      
                        <Link to ='/practice-areas'><span className='contact-info'>Practice Areas</span></Link>
                            
                        <Link to ='/practice-areas'><span className='contact-info'>Practice Areas</span></Link>
                        
                        
                       
                       


                        </div>
                    </div>

                    <div className='footer-info'>
                    <span className='contact-header'>Recent Posts</span>
                    <div className="contact-container borderr">
                    
                    <span className='contact-info'>Post 1</span>
                    <span className='contact-info'>Post 2 </span>
                    
                    <span className='contact-info'>Post 3</span>
                    </div>
                    </div>
            
            </div>
         );
    }
}
 
export default Footer;