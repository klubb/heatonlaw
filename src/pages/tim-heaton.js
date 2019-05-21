import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './page-styles/profile.css'



const Tim = () => (
  <Layout>
    <SEO title="Tim" keywords={[`lawyer`, `Tim`, `heaton`]} />
    <div className="profile-container">
    

    
   
    <div className="profile-info">
       
    
        <div className='image-container'>

        <img align ='left' className="profile-img" src='https://mllj2j8xvfl0.i.optimole.com/w:260/h:260/q:90/rt:fill/g:ce/https://s20206.pcdn.co/wp-content/uploads/sites/74/2016/05/Unknown.jpeg' alt="" />
            
        <div className="profile-name borderr">
            <h1>Tim Heaton</h1>
            <h3>Civil Litigation Expert</h3>
            <h3>(801)-709-4117 &nbsp; &nbsp; info@yourdomain.com</h3>
        </div>

        <p >Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>

                   

                </div>
    </div>
    

    </div>
    


    

  </Layout>
)

export default Tim
