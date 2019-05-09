import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Slider from '../components/imageSlider/Slider'
import Main from '../components/Main/Main'
import Lawyers from '../components/Lawyers/Lawyers'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Slider />
    <Main />
    <hr className='main-spacer'/>
    <Lawyers />
  </Layout>
)

export default IndexPage
