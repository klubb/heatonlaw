import React from 'react'
import { Link} from "gatsby"
import {StaticQuery, graphql} from 'gatsby'

const Recent = () => (
  <StaticQuery 
    query={
      graphql`
      query RecentBlogIndexQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                path
                title
                date(formatString: "MMM DD")
                author
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
      <div className="blog-right">
        <h1 className='blog-recent'>Recent Posts</h1>
        <br/>
        
    
      <div className='borderr'>


      {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
              

              <Link to= {post.node.frontmatter.path} ><h3 className=' blog-list'>{post.node.frontmatter.title}</h3></Link>
              
              
          </div>
      ))}
      </div>
    </div>
    )}
    />
)



export default Recent
