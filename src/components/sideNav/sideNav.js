import React, { Component } from "react"
import "./sideNav.css"
import { Link } from "gatsby"


export default class SideNav extends Component {
  render() {
    return (
        <div className="blog-right">
        <h1 className='blog-recent'>Pages</h1>
        <br/>
        
    
      <div className='borderr'>
      <Link to= '/' ><h3 className=' blog-list'>Home</h3></Link>
      <Link to= '/expert-team' ><h3 className=' blog-list'>Our Expert Team</h3></Link>
      <Link to= '/practice-areas' ><h3 className=' blog-list'>Practice Areas</h3></Link>
      <Link to= '/contact' ><h3 className=' blog-list'>Contact</h3></Link>
      <Link to= '/blog' ><h3 className=' blog-list'>Blog</h3></Link>

      
      </div>
    </div>
    )
  }
}
