/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


import Header from "./header"
import Footer from './footer';
import "./layout.scss"
import "./horizontal-rule.scss"
import './signinRegister.scss'
import './article.scss'
import './account-info.scss'
import './manage.scss'
import './account.scss'
import './footer.scss'

const {
  STRIPE_KEY
} = process.env;

const stripePromise = loadStripe(STRIPE_KEY);


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Elements stripe={stripePromise}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer/>
    </Elements>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
