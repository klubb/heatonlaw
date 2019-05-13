import React, {Component} from 'react';
import Layout from "../layout"
import './main.css'
import { Link } from "gatsby"
import { FaBalanceScale, FaCarCrash, FaUsers, FaFileContract, FaCopyright, FaUserInjured, FaBusinessTime, FaGavel} from "react-icons/fa";



 export default class Main extends Component {
    render () {
        return (
                <div>
            <div className="maincontainer">
            <h1 className='mainheader'>We are the best law firm based in Utah County </h1>
            <hr className='main-spacer2'/>
               <div className='text-container'>
               
                    
                        <div className="blockcontainer">
                        <div className='blocktop'>

                        <h1 className='blockheader'>Criminal Law</h1>
                        {/* <i className="fas fa-balance-scale fa-2x icon"></i> */}
                        <FaBalanceScale className = 'fa-2x icon' />
                        
                        </div>
                        <p className='info borderr'>Dreamcatcher godard kogi sartorial, vinyl poutine wayfarers tbh art party health goth echo park fashion axe kitsch farm-to-table. Chicharrones distillery literally authentic air plant. <br/><Link className='hvr-underline-reveal readmore ' to="/criminal/">Read more...</Link></p>
                        </div>
                    
                        <div className="blockcontainer">
                        <div className='blocktop'>

                        <h1 className='blockheader'>Civil Litigation</h1>
                        <FaGavel className = 'fa-2x icon' />
                        
                        </div>
                        <p className='info borderr'>Dreamcatcher godard kogi sartorial, vinyl poutine wayfarers tbh art party health goth echo park fashion axe kitsch farm-to-table. Chicharrones distillery literally authentic air plant. <br/><Link className='hvr-underline-reveal readmore ' to="/litigation/">Read more...</Link> </p>
                        </div>
                        
                        <div className="blockcontainer">
                        <div className='blocktop'>

                        <h1 className='blockheader'>Personal Injury</h1>
                        <FaUserInjured className = 'fa-2x icon' />
                        
                        </div>
                        <p className='info borderr'>Dreamcatcher godard kogi sartorial, vinyl poutine wayfarers tbh art party health goth echo park fashion axe kitsch farm-to-table. Chicharrones distillery literally authentic air plant.<br/><Link className='hvr-underline-reveal readmore ' to="/injury/">Read more...</Link> </p>
                        </div>

                        <div className="blockcontainer">
                        <div className='blocktop'>

                        <h1 className='blockheader'>Auto Accidents</h1>
                        <FaCarCrash className = 'fa-2x icon' />
                        
                        </div>
                        <p className='info borderr'>Dreamcatcher godard kogi sartorial, vinyl poutine wayfarers tbh art party health goth echo park fashion axe kitsch farm-to-table. Chicharrones distillery literally authentic air plant. <br/><Link className='hvr-underline-reveal readmore ' to="/auto-accident/">Read more...</Link> </p>
                        </div>
                                

                        {/* <div className="blockcontainer">
                        <div className='blocktop'>

                        <h1 className='blockheader'>Family Law</h1>
                        <FaUsers className = 'fa-2x icon' />
                        
                        </div>
                        <p className='info borderr'>Dreamcatcher godard kogi sartorial, vinyl poutine wayfarers tbh art party health goth echo park fashion axe kitsch farm-to-table. Chicharrones distillery literally authentic air plant. <br/><Link className='hvr-underline-reveal readmore ' to="/criminal/">Read more...</Link> </p>
                        </div>
                    
                        <div className="blockcontainer">
                        <div className='blocktop'>

                        <h1 className='blockheader'>Contracts</h1>
                        <FaFileContract className = 'fa-2x icon' />
                        
                        </div>
                        <p className='info borderr'>Dreamcatcher godard kogi sartorial, vinyl poutine wayfarers tbh art party health goth echo park fashion axe kitsch farm-to-table. Chicharrones distillery literally authentic air plant. <br/><Link className='hvr-underline-reveal readmore ' to="/criminal/">Read more...</Link> </p>
                        </div>

                        <div className="blockcontainer">
                        <div className='blocktop'>

                        <h1 className='blockheader'>Copyrights</h1>
                        <FaCopyright className = 'fa-2x icon' />
                        
                        </div>
                        <p className='info borderr'>Dreamcatcher godard kogi sartorial, vinyl poutine wayfarers tbh art party health goth echo park fashion axe kitsch farm-to-table. Chicharrones distillery literally authentic air plant. <br/><Link className='hvr-underline-reveal readmore ' to="/criminal/">Read more...</Link> </p>
                        </div>

                        <div className="blockcontainer">
                        <div className='blocktop'>

                        <h1 className='blockheader'>Business</h1>
                        <FaBusinessTime className = 'fa-2x icon' />
                        
                        </div>
                        <p className='info borderr'>Dreamcatcher godard kogi sartorial, vinyl poutine wayfarers tbh art party health goth echo park fashion axe kitsch farm-to-table. Chicharrones distillery literally authentic air plant. <br/><Link className='hvr-underline-reveal readmore ' to="/criminal/">Read more...</Link> </p>
                        </div> */}

                        

                        
               </div>

                
            </div>
               
            </div>
        )
    }
}