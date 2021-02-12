import React from "react"

import "../components/layout.scss";
import SEO from "../components/seo"
import Layout from '../components/layout'
import TypeWriterEffect from 'react-typewriter-effect';
import youDevLogo from '../../assets/you-dev-logo-white.png'
import youDevIcon1 from '../../assets/articles-icon.png'
import youDevIcon2 from '../../assets/screencasts-icon.png'
import youDevIcon3 from '../../assets/skillmap.png'
import Angelika from '../images/angelika.jpeg'
import Paul from '../images/paul.jpg';
import PageTransition from 'gatsby-plugin-page-transitions';


const IndexPage = () => (

  <Layout>
    <PageTransition>
    <SEO title="Home" />
    <div className="parallax">
      <div className="home-page-header">
      <div className="typewriter">
      <h1 className='typewriter-header'>FUN AND FAST FULL-STACK <br/> TRAINING FOR </h1>
      <TypeWriterEffect
        className="typewriter"
        textStyle={{
          color: '#fff',
          fontFamily: 'Nunito',
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
      <img src={youDevLogo} className="homepage-logo" alt="logo"/>
   </div>
    </div>

    <div className="coming-soon">
    <h2>ready to get started?</h2>
    <p style={{color:'rgb(32,209,126)'}}>Fun and fast full-stack training for engineers of all levels.</p>
    </div>
    <h2 className="divider line one-line">&lt; / &gt;</h2>

    <section className="flat-icons">
        <div className="border">
          <img src={youDevIcon1} alt="lightbulb"/>
          <div className="homepage-paragraph">
            <p>Loads of free articles for engineers of all levels. From cheat-sheets to walk-throughs, grab quick reference for the  issue at hand. </p>
          </div>
        </div>
        <div className="border">
          <img src={youDevIcon2} alt="lightbulb"/>
          <div className="homepage-paragraph">
            <p>Hours of high-quality screen casts. Topics covered: softare development, software architecture, how to read documentation, infrastructure, security, error-handling/ debugging. </p>
          </div>
        </div>
        <div className="border">
          <img src={youDevIcon3} alt="lightbulb"/>
          <div className="homepage-paragraph">
            <p>Easily track your progress with a skill map. See everything you've learned so far and how the topics relate to each other.</p>
          </div>
        </div>

       </section>
        <div className="team">
          <h1 data-sal="slide-up"  data-sal-delay="300">meet the team!</h1>
          <p>two hardworking engineers hoping to change the learning process around software development</p>
          
          <h2 className="divider line one-line">&lt; / &gt;</h2>


          <div className="paul">
            <div className="team-image">
          <h2>hello im paul</h2>
          <img src={Paul} alt="paul"/>
          </div>
          <div className="description">
          <p>Paul has been deeply involved in computing for almost 30 years, from learning computer science fundamentals from Steve Wozniak in 1993, to working as a software engineer at a Fortune 500 company today. He enjoys problem solving, coffee, and the great outdoors. Paul also taught computer science and mathematics for 10 years to hundreds of students in Los Gatos, CA.</p>
          </div>
          </div>

          <div className="paul">
            <div className="description">
          <p>im the web developer behind this site</p>
          </div>
            <div className="team-image">
          <h2>hello im angelika</h2>
            <img src={Angelika} alt="angelika"/></div>
          </div>
          </div>
          <h2 className="divider line one-line">&lt; / &gt;</h2>

          <h1>What you get when you sign up!</h1>
        </PageTransition>
  </Layout>
)

export default IndexPage
