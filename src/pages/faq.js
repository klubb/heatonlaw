import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./page-styles/faq.css"
import Faqs from '../components/Faq/Faqs'

const Faq = () => (
  <Layout>
    <SEO title="FAQ" />
    <Faqs />
    
    
  </Layout>
)

export default Faq



