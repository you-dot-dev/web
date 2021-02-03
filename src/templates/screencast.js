import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Template = ({data}) => {

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;


  const displayDate = new Date(frontmatter.date).toDateString();

  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{displayDate}</h2>
          <h3>{frontmatter.author}</h3>
          <iframe width="560" height="315" src={frontmatter.video_url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Template;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
        video_url
      }
    }
  }
`