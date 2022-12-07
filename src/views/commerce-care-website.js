import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './commerce-care-website.css'

const CommerceCareWebsite = (props) => {
  return (
    <div className="commerce-care-website-container">
      <Helmet>
        <title>Commerce-Care-Website - Amar Aličič - UI/UX Designer</title>
        <meta
          name="description"
          content="I am Amar Aličič a UI/UX Designer from Bosnia and Herzegovina and I am looking to improve my skills each day. Looking foward to work in IT Industry. "
        />
        <meta
          property="og:title"
          content="Commerce-Care-Website - Amar Aličič - UI/UX Designer"
        />
        <meta
          property="og:description"
          content="I am Amar Aličič a UI/UX Designer from Bosnia and Herzegovina and I am looking to improve my skills each day. Looking foward to work in IT Industry. "
        />
      </Helmet>
      <header data-role="Header" className="commerce-care-website-header">
        <img
          alt="logo"
          src="/playground_assets/logo_white.svg"
          className="commerce-care-website-image"
        />
        <div className="commerce-care-website-text">
          <Link to="/" className="commerce-care-website-navlink">
            Introduction
          </Link>
          <a href="#projects" className="commerce-care-website-link">
            <span>Projects</span>
            <br></br>
          </a>
          <a href="#about" className="commerce-care-website-link1">
            <span>About</span>
            <br></br>
          </a>
          <a href="#contact" className="commerce-care-website-link2">
            <span>Contact</span>
            <br></br>
          </a>
        </div>
      </header>
      <div className="commerce-care-website-container1">
        <div className="commerce-care-website-container2">
          <h1 className="commerce-care-website-text07">
            <span>Commerce Care</span>
            <br></br>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default CommerceCareWebsite
