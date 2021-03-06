import React, { Component } from "react"
import "./Lawyers.css"
import { Link } from "gatsby"

export default class Lawyers extends Component {
  render() {
    return (
            <div>
      <div className="lawyer-container">
        <div className="lawyer-text">
        <div className='rightside'>

          <h1 className='lawyerheading'>Why Choose Heaton Law?</h1>
          <p className='whychoose border-right'>Dreamcatcher godard kogi sartorial, vinyl poutine wayfarers tbh art party health goth echo park fashion axe kitsch farm-to-table. Chicharrones distillery literally authentic air Dreamcatd kogi sartorial, vinyl poutine wayfarers tbh art party health goth echo park fashion axe kitsch farm-to-table. Chicharrones distillery literally authentic air plant. Dreamcatcher godard kogi sartorial, vinyl poutine wayfarers tbh art party health goth echo park fashion axe kitsch farm-to-table. Chicharrones distillery literally authentic air plant. <br/><br/> Dreamcatcher godard kogi sartorial, vinyl poutine wayfarers tbh art party health goth echo park fashion axe kitsch farm-to-table. Chicharrones distillery literally authentic air plant.Dreamcatcher godard kogi sartorial, vinyl poutine wayfarers tbh art party health goth echo park fashion axe kitsch farm-to-table. Chicharrones distillerythentic air plant.Dreamcatcher godard kogi sartorial, vinyl poutine wayfarers tbh art party health goth echo park fashion axe kitsch farm-to-table. Chicharrones distillery literally authentic air plant. </p>

         
          

        </div>
        {/* <hr className='main-spacer'/> */}
          <div className="lawyerheading">
            <h1>Our Expert Team</h1>
          </div>

          <div className="lawyerflex">
          
            <div className="lawyer-info-container">
              <div className="portrait">
                <img className="portrait" src='https://mllj2j8xvfl0.i.optimole.com/w:260/h:260/q:90/rt:fill/g:ce/https://s20206.pcdn.co/wp-content/uploads/sites/74/2016/05/Unknown-3.jpeg' alt="" />
              </div>
              <div className="lawyer-info">

                
                <span className="lawyername">Daniel Heaton</span>
                <p className="lawyerpractice italic">Criminal Law Expert</p>
                  

                <Link to='/daniel-heaton'><button className="profilebtn hvr-shutter-out-horizontal">Let's Talk</button></Link>
                
              </div>
            </div>

            <div className="lawyer-info-container">
              <div >
                <img className="portrait" src='https://mllj2j8xvfl0.i.optimole.com/w:260/h:260/q:90/rt:fill/g:ce/https://s20206.pcdn.co/wp-content/uploads/sites/74/2016/05/Unknown.jpeg' alt="" />
              </div>
              <div className="lawyer-info">

                
                <span className="lawyername">Tim Heaton</span>
                <span className="lawyerpractice italic">Civil Litigation Expert</span>
                  

                  <Link to='/tim-heaton'><button className="profilebtn hvr-shutter-out-horizontal">Let's Talk</button></Link>
                
              </div>
            </div>

            <div className="lawyer-info-container">
              <div >
                <img className="portrait" src='https://mllj2j8xvfl0.i.optimole.com/w:260/h:260/q:90/rt:fill/g:ce/https://s20206.pcdn.co/wp-content/uploads/sites/74/2016/05/Unknown-1.jpeg' alt="" />
              </div>
              <div className="lawyer-info">

                
                <span className="lawyername">Kaleb Manley</span>
                <span className="lawyerpractice italic">Divorce Expert</span>
                  

                  <button className="profilebtn hvr-shutter-out-horizontal">Let's Talk</button>
                
              </div>
            </div>
          </div>
          
        </div>

        
      </div>
      <div className="ctabanner">
        <h1 className='ctaeval'>Get a free evaluation of your case. Contact us now at (801)-709-4117</h1>
      </div>
      </div>
    )
  }
}
