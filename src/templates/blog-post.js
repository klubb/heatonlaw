import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import './blog-post.css'
import { FaUser, FaRegClock } from "react-icons/fa";
import Recent from '../components/Recent-list/Recent'

export default function Template({data}, props) {
  const post = data.markdownRemark

  return (
      <Layout>


<div className='blog-container'>
    
    <div className='border-right post-container'>



    <div className='post' key={post.id}>
        <div className='borderr blog-heading'>

        <h1 className='blog-title'>{post.frontmatter.title}</h1>
        <div className='blogsmall'>

        <small className='blog-date'><FaUser className='icons blog-icon' />{post.frontmatter.author}</small> <small className='blog-date'><FaRegClock className='icons blog-icon' /> {post.frontmatter.date}</small>
        </div>
        </div>
        <img className='blog-image' src={post.frontmatter.image} alt=""/>
        <br/><br/>
        <div className='blog-message' dangerouslySetInnerHTML={{ __html: post.html }} />
        
        
    <Link to='/blog' className='hvr-underline-reveal readmore blog-readmore'>More Blogs...</Link>
        <hr className='hrspacer' />
    </div>


    </div>
    
        
    <Recent />
    
</div>
    
      </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      
      frontmatter {
        path
        title
        author
        date(formatString: "MMMM DD")
        image
      }
    }
  }
`