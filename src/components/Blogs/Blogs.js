import React from "react"
import { Link} from "gatsby"
import {StaticQuery, graphql} from 'gatsby'
import './blogs.css'

const Blogs = () => (
  
    
    
    <StaticQuery 
    query={
        graphql`
  query BlogsIndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 3) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "MMM DD")
            image 
            }
            excerpt(pruneLength: 380)
          }
          
          
        }
      }
  }
`
    }

    render={data => (
        <div className='blogs-container'>
        <h1 className='lawyerheading'>Recent News</h1>
            <div className='blogs-main'>


        {data.allMarkdownRemark.edges.map(post => (
            <div className='blogs-post' key={post.node.id}>
                <Link to={post.node.frontmatter.path}><div>
                    <div className='news-header'>
                    <div className='news-date news-icon'>
                    
                    <span>{post.node.frontmatter.date}</span>
                    </div>
                    <h1 className='news-title'>{post.node.frontmatter.title}</h1>
                    </div>
                <img className='blogs-image' src={post.node.frontmatter.image} alt=""/>
                <p className='news-p borderr'>{post.node.excerpt} <br/> <Link to={post.node.frontmatter.path} className='hvr-underline-reveal readmore blog-readmore'>Read More...</Link></p>
                
                </div></Link>
            </div>
        ))}
            </div>
            
        </div>
        
    )}


  
/>
)






export default Blogs

