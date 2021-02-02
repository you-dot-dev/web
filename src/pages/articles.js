import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Articles = ({data}) => {

  const articles = data.allMarkdownRemark.nodes;
  console.log("articles:", articles);
  console.log("allImageSharp:", data.allImageSharp);

  const listOfArticles = articles.map( (article) => {

    let [articleImage] = data.allImageSharp.nodes.filter( (image) => {
      return article.frontmatter.image == image.fluid.originalName
    });

    console.log(articleImage)

    return (
      <div className="article-link">
        <h1><a href={article.frontmatter.slug}>{article.frontmatter.title}</a></h1>
        <p>{article.frontmatter.date}</p>
        <p className="article-img" style={{
          background: `url(${articleImage.fluid.originalImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}></p>
        <p>{article.excerpt}</p>
        <p>{article.frontmatter.author}</p>
      </div>
    );
  });

  return (
  <Layout>
    <SEO title="Page two" />
    <h1 className="x-large text-center text-dark my-2">All Articles</h1>
    <p className=" text-center my-2">An extensive and comprehensive list of articles by the author. Subscribe to view 100+ in-depth collections on all topics regarding software architecure and applications.</p>

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
