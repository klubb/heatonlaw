/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import "./layout.css"
import favicon from './Header/heaton-law.png'
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
       <Helmet link={[{ rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon}` }]} />
        <Header siteTitle={data.site.siteMetadata.title} />
       {children}
       {/* <Footer /> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
