import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Template = ({data}) => {

  console.log("data?", data);

  const { markdownRemark, allImageSharp } = data;
  const { html, frontmatter } = markdownRemark;

  const [ articleImage ] = allImageSharp.nodes.filter( (node) => {
    return node.fluid.originalName === frontmatter.image;
  });

  const displayDate = new Date(frontmatter.date).toDateString();


  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h4>{displayDate}</h4>
          <img src={articleImage.fluid.originalImg} alt="article image"/>
          <h4>{frontmatter.author}</h4>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <i class="fa fa-thumbs-up helpful"></i>
        <i class="fa fa-comments helpful" aria-hidden="true"></i>
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
