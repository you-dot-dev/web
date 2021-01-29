import React from "react"

import "../components/layout.scss";
import SEO from "../components/seo"
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="parallax">
      <h1>HELLO FROM ANGELIKA</h1>
    </div>
    <div className="coming-soon">
    <h2>coming soon!</h2>
    <p>Fun and fast full-stack training for engineers of all levels.</p>
    </div>
  </Layout>
)

export default IndexPage
