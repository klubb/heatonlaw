import React from "react"
import CriminalLaw from '../components/Criminal/CriminalLaw'
import Layout from "../components/layout"
import SEO from "../components/seo"



const Criminal = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
   <CriminalLaw />
    
  </Layout>
)

export default Criminal
