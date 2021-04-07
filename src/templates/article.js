import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Template = ({data}) => {

  const { markdownRemark, allImageSharp } = data;
  const { html, frontmatter } = markdownRemark;

  const [ articleImage ] = allImageSharp.nodes.filter( (node) => {
    return node.fluid.originalName === frontmatter.image;
  });

  const displayDate = new Date(frontmatter.date).toDateString();


  return (
    <Layout>
      <div className="blog-post-container">

        <div className="article-card" style={{backgroundImage: `url(${articleImage.fluid.originalImg})`,backgroundSize: `cover` }}>
          <div className="article-card-title">
            <h1>{frontmatter.title}</h1>
          </div>
          <div className="article-card-content">
            <h4>{frontmatter.author}</h4>
            <h4>{displayDate}</h4>
            <p><i class="fa fa-clock"></i>{frontmatter.time_to_read} minute read</p>
          </div>
        </div>

        <div className="blog-post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

      </div>{/* blog-post-container */}

      <div className="links blog-post-container">
        <div className="comment">
        <i class="fa fa-thumbs-up helpful"></i>
        <i class="fa fa-comments helpful" aria-hidden="true"></i>
        </div>
        <div className="next">
          <i class="fa fa-long-arrow-right helpful" aria-hidden="true">
            </i>
        </div>
      </div>
    </Layout>
  )
}

export default Template;

export const query = graphql`
query ($slug: String!) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
      author
      image
    }
  }
  allImageSharp {
    nodes {
      id
      fluid {
        originalName
        originalImg
      }
    }
  }
}
`
