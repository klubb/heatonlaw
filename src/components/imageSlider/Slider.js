import React, {Component} from 'react';
import './slider.css'
import {Link} from 'gatsby'


 export default class Slider extends Component {
    render () {
        return (
            <div>
               <div className="mainslide">
                    <div className="slide-text">
                        <h1 className='slideheading'>Experts in everything legal</h1>
                        <br/><br/>
                        <p className='slideinfo'>Our team of expert attorneys and consultants will be glad to provide the necessary legal assistance.</p>
                        <br/><br/>
                        <Link to='/contact/'><button className='slidebtn hvr-shutter-out-horizontal'>Request a free consultation</button></Link>

                    </div>
               </div>
                
            </div>
        )
    }
}