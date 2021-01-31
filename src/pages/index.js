import React from "react"

import youDevLogo from "../images/you-dev-logo.png"
import "../components/layout.css";
import SEO from "../components/seo"

const IndexPage = () => (
  <div className="coming-soon">
    <SEO title="Home" />
    <img src={youDevLogo} alt="You.Dev logo" />
    <h2>coming soon!</h2>
    <p>Fun and fast full-stack training for engineers of all levels.</p>
  </div>
)

export default IndexPage
