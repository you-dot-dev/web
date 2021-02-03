import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Articles = ({data}) => {

  const articles = data.allMarkdownRemark.nodes;
  console.log("articles:", articles);
  console.log("allImageSharp:", data.allImageSharp);

  const listOfArticles = articles
  .filter( (article) => { return article.frontmatter.video_url == null } )
  .map( (article) => {

    let [articleImage] = data.allImageSharp.nodes.filter( (image) => {
      return article.frontmatter.image == image.fluid.originalName
    });

    const displayDate = new Date(article.frontmatter.date).toDateString();

    return (
      <div className="article-link">
        <div className="article-img" style={{
          background: `url(${articleImage.fluid.originalImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}></div>
        <h1><a href={article.frontmatter.slug}>{article.frontmatter.title}</a></h1>
        <p>{displayDate}</p>
        <p>{article.excerpt}</p>
        <p>{article.frontmatter.author}</p>
      </div>
    );
  });

  return (
  <Layout>
    <SEO title="Page two" />
    <div className="article-header">
      <h1>All Articles</h1>
      <p>An extensive and comprehensive list of articles by the author. <br/> Subscribe to view 100+ in-depth collections on all topics regarding software architecure and applications.</p>
      <h2 class="divider line one-line" contenteditable>&lt; / &gt;</h2>
    </div>  
    <div className="article-list">
      {listOfArticles}
    </div>
  </Layout>
  )
}

export default Articles

export const query = graphql`
query Articles {
  allMarkdownRemark(sort: {fields: frontmatter___date}) {
    nodes {
      frontmatter {
        title
        slug
        date
        author
        image
        video_url
      }
      excerpt
    }
  }
  allImageSharp {
    nodes {
      fluid {
        originalImg
        originalName
      }
    }
  }
}
`
