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
        loop={true}
        nextTextDelay={500}
        typeSpeed={30}
      />
      </div>
      <h1 className="logo-header">You.Dev</h1>
   </div>
    </div>

    <div className="coming-soon">
    <h2>coming soon!</h2>
    <p>Fun and fast full-stack training for engineers of all levels.</p>
    </div>

    <section className="flat-icons">
        <div>
          <img src={LightBulb} alt="lightbulb"/>
          <div className="homepage-paragraph">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dicta beatae veritatis eius quo corrupti deserunt exercitationem qui ad repellendus.</p>
          </div>
        </div>
        <div>
          <img src={Infrastructure} alt="lightbulb"/>
          <div className="homepage-paragraph">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dicta beatae veritatis eius quo corrupti deserunt exercitationem qui ad repellendus.</p>
          </div>
        </div>
        <div>
          <img src={Design} alt="lightbulb"/>
          <div className="homepage-paragraph">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dicta beatae veritatis eius quo corrupti deserunt exercitationem qui ad repellendus.</p>
          </div>
        </div>
       </section>
  </Layout>
)

export default IndexPage
