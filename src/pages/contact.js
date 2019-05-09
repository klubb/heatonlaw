import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/Form/Form.css'
import Form from '../components/Form/Form'

const Contact = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
              <Form />
    
  </Layout>
)

export default Contact