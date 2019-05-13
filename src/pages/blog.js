import React from "react"
import { Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../templates/blog.css'
import { FaUser, FaRegClock } from "react-icons/fa";
import { graphql } from 'gatsby'
import Recent from '../components/Recent-list/Recent'


const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className='blog-container'>
    
            <div className='border-right post-container'>


        {data.allMarkdownRemark.edges.map(post => (
            <div className='post' key={post.node.id}>
                <img className='blog-image' src={post.node.frontmatter.image} alt=""/>
                <div className='borderr'>

                <h1 className='blog-title'>{post.node.frontmatter.title}</h1>
                <div className='blogsmall'>

                <small className='blog-date'><FaUser className='icons' />{post.node.frontmatter.author}</small> <small className='blog-date'><FaRegClock className='icons' /> {post.node.frontmatter.date}</small>
                </div>
                </div>
                <br/><br/>
                <p className='blog-message'>{post.node.excerpt}</p>
                
                <Link to={post.node.frontmatter.path} className='hvr-underline-reveal readmore blog-readmore'>Read More...</Link>
                {/* <br/><br/> */}
                <hr className='hrspacer' />
            </div>
        ))}
        
            </div>
        
        <Recent />
        
        
    </div>


  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "MMMM DD")
            author
            image 
            }
            excerpt(pruneLength: 380)
          }
          
          
        }
      }
  }
`


export default BlogPage

