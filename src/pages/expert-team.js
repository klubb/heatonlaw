import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './page-styles/about.css'
import {Link} from 'gatsby';

const Litigation = () => (
  <Layout>
    <SEO title="Our Expert Team" keywords={[`expert`, `team`, `heaton law`]} />
    <div className='about-image'>
        <div className='about-text'> 
          <h1 className='form-header'>About Us</h1>
          <h2 className='form-subheader'>We are a trusted and highly regarded global law firm specialising in corporate law services.</h2>
        </div>
    </div>
      <div className='about-container'>


    <div className='about-info'>
        <p className='about-p'>We are a trusted and highly regarded global law firm specialising in corporate law services. We were first established in London in 1913, and have continued to grow and adapt every year since, now with six offices located around the world.</p>
        <div>
          <h1 className='about-h1'>Our Lawyers</h1>
          <p className='about-p'>Our lawyers and staff are the best in the industry. We are highly qualified, experienced and trained regularly to ensure that we offer the best services to our clients. We advise clients on a wide range of corporate issues and commercial dealings both at national and international levels.</p>
        </div>
        <div>
          <h1 className='about-h1'>Our Clients</h1>
          <p className='about-p'>Our clients are among the biggest and most ambitious global companies in the world. They operate in various industries and trust us to handle their most significant dealings, projects and disputes. They expect high quality service and the best possible results, and know that we deliver every time.</p>
          <div className="practice-areas-container">
          <h1 className='about-h1'>Our Areas of Expertise:</h1>
          <ul>
            <li className='list-item'>Criminal Law</li>
            <li className='list-item'>Auto Accidents</li>
            <li className='list-item'>Personal Injury</li>
            <li className='list-item'>Litigation</li>
            <li className='list-item'>Divorce</li>
          </ul>
        </div>
        </div>
        
        
        <div className="buttons-container">
        <Link to='/practice-areas'><button className='aboutbtn hvr-shutter-out-horizontal'>Practice Areas</button></Link>
        <Link to='/contact'><button className='aboutbtn hvr-shutter-out-horizontal'>Get in touch today</button></Link>
        </div>
    </div>
      </div>
    
    
    
  </Layout>
)

export default Litigation
