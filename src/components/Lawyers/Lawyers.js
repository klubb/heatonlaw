import React, { Component } from "react"
import "./Lawyers.css"
import { Link } from "gatsby"
import Portrait from './portrait.jpg'

export default class Lawyers extends Component {
  render() {
    return (
            <div>
      <div className="lawyer-container">
        <div className="lawyer-text">
        <div className='rightside'>

          <h1 className='lawyerheading'>Why Choose Heaton Law?</h1>
          <p className='whychoose border-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem nisi accusantium quibusdam voluptates dolore soluta in expedita officiis quisquam asperiores suscipit reiciendis rerum, ducimus est consequuntur corporis minus magni corporis minus magni corporis minus magnicorporis minus magni accusantium quibusdam voluptates dolore soluta in accusantium quibusdam voluptates dolore soluta in.</p>

        </div>
        {/* <hr className='main-spacer'/> */}
          <div className="lawyerheading">
            <h1>Our Expert Team</h1>
          </div>

          <div className="lawyerflex">
            <div className="lawyer-info-container">
              <div className="portrait">
                <img src={Portrait} alt="" />
              </div>
              <div className="lawyer-info">
                <span className="lawyername">John Doe</span>

                <div className="borderr lawyercolumn">
                <span className="lawyerpractice">Criminal Law Expert</span>
                  <span className="lawyerpractice">20 years experience representing criminal law cases</span>

                  <button className="profilebtn hvr-shutter-out-horizontal">Let's Talk</button>
                </div>
              </div>
            </div>

            <div className="lawyer-info-container">
              <div className="portrait">
                <img src={Portrait} alt="" />
              </div>
              <div className="lawyer-info">
                <span className="lawyername">John Doe</span>

                <div className="borderr lawyercolumn">
                <span className="lawyerpractice">Civil Litigation Expert</span>
                  <span className="lawyerpractice">20 years experience representing civil litigation cases</span>

                  <button className="profilebtn hvr-shutter-out-horizontal">Let's Talk</button>
                </div>
              </div>
            </div>

            <div className="lawyer-info-container">
              <div className="portrait">
                <img src={Portrait} alt="" />
              </div>
              <div className="lawyer-info">
                <span className="lawyername">John Doe</span>

                <div className="borderr lawyercolumn">
                <span className="lawyerpractice">Divorce Expert</span>
                  <span className="lawyerpractice">20 years experience representing divorce cases</span>

                  <button className="profilebtn hvr-shutter-out-horizontal">Let's Talk</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        
      </div>
      {/* <div className="ctabanner">
        <h1 className='ctaeval'>Get a free evaluation of your case. Contact us now (801)-709-4117</h1>
      </div> */}
      </div>
    )
  }
}
