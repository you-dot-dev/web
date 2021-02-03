import React from "react"

import "../components/layout.scss";
import SEO from "../components/seo"
import Layout from '../components/layout'
import TypeWriterEffect from 'react-typewriter-effect';
import LightBulb from '../images/lightbulb.svg'
import Infrastructure from '../images/infrastructure.svg'
import Design from '../images/design.svg'


const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    <div className="parallax">
      <div className="home-page-header">
      <div className="typewriter">
      <h1 className='typewriter-header'>FUN AND FAST FULL-STACK <br/> TRAINING FOR </h1>
      <TypeWriterEffect
        className="typewriter"
        textStyle={{
          color: '#fff',
          fontWeight: 1000,
          fontSize: '5em',
        }}
        startDelay={2000}
        cursorColor="#fff"
        multiText={[
         'Beginners',
         'Developers',
         'Designers',
         'Engineers'
        ]}
        nextTextDelay={2000}
        typeSpeed={50}
        loop={true}
      />
      </div>
      <h1 className="logo-header">You.Dev</h1>
   </div>
    </div>

    <div className="coming-soon">
    <h2>coming soon!</h2>
    <p style={{color:'rgb(32,209,126)'}}>Fun and fast full-stack training for engineers of all levels.</p>
    </div>

    <section className="flat-icons">
        <div>
          <img src={LightBulb} alt="lightbulb"/>
          <div className="homepage-paragraph">
            <p>Loads of free articles for engineers of all levels. From cheat-sheets to walk-throughs, grab quick reference for the  issue at hand. </p>
          </div>
        </div>
        <div>
          <img src={Infrastructure} alt="lightbulb"/>
          <div className="homepage-paragraph">
            <p>Hours of high-quality screen casts. Topics covered: softare developement, software architecture, how to read documentation, infrastructure, security, error-handling/ debugging. </p>
          </div>
        </div>
        <div>
          <img src={Design} alt="lightbulb"/>
          <div className="homepage-paragraph">
            <p>Easily track your progress with a skill map. See everything you've learned so far and how the topics relate to each other.</p>
          </div>
        </div>
       </section>
  </Layout>
)

export default IndexPage
