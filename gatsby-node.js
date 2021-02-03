/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const articleTemplate = require.resolve(`./src/templates/article.js`)
  const screencastTemplate = require.resolve(`./src/templates/screencast.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
              video_url
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    
    if (node.frontmatter.video_url) {
      createPage({
        path: node.frontmatter.slug,
        component: screencastTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
          videoUrl: node.frontmatter.video_url
        },
      })
    } else {
      createPage({
        path: node.frontmatter.slug,
        component: articleTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    }

    
  })
}