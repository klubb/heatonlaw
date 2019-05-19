import React, {Component} from 'react';
import './slider.css'
import {Link} from 'gatsby'
import { FaMapMarkerAlt, FaBalanceScale } from "react-icons/fa";

 export default class Slider extends Component {
    render () {
        return (
            <div>
               <div className="mainslide">
                    <div className="slide-text">
                        <h1 className='slideheading'>Experts in everything legal.</h1>
                        <br/><br/>
                        <p className='slideinfo'>Our team of expert attorneys and consultants will be glad to provide the necessary legal assistance.</p>
                        <br/><br/>
                        <div className="cta-buttons">
                        
                        <Link activeClassName="active" to='/expert-team'><button className='slidebtn '>Our Expert Team</button></Link>
                       
                        

                        <Link activeClassName="active" to='/contact'><button className='slidebtn '>Free Consultation</button></Link>
                        </div>
                        

                    </div>
               </div>
                
            </div>
        )
    }
}