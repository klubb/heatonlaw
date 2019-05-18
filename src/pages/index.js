import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"
import Slider from '../components/imageSlider/Slider'
import Main from '../components/Main/Main'
import Lawyers from '../components/Lawyers/Lawyers'
import Blogs from '../components/Blogs/Blogs'



const IndexPage = () => (
  <Layout>
    
    <SEO title="Home" keywords={[`heaton law group`, `heaton`, `law firm`]} />
    <Slider />
    <Main />
    <hr className='main-spacer'/>
    <Lawyers />
    <hr className='main-spacer'/>
    <Blogs />
    <hr className='main-spacer' />
    
  </Layout>
)

export default IndexPage
