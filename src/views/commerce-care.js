import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './commerce-care.css'

const CommerceCare = (props) => {
  return (
    <div className="commerce-care-container">
      <Helmet>
        <title>Web Design - Commercecare</title>
        <meta
          name="description"
          content="I am Amar Aličič a UI/UX Designer from Bosnia and Herzegovina and I am looking to improve my skills each day. Looking foward to work in IT Industry. "
        />
        <meta property="og:title" content="Web Design - Commercecare" />
        <meta
          property="og:description"
          content="I am Amar Aličič a UI/UX Designer from Bosnia and Herzegovina and I am looking to improve my skills each day. Looking foward to work in IT Industry. "
        />
      </Helmet>
      <header data-role="Header" className="commerce-care-header">
        <Link to="/commercecare" className="commerce-care-navlink">
          <img
            alt="logo"
            src="/playground_assets/logo_white.svg"
            className="commerce-care-image"
          />
        </Link>
        <div className="commerce-care-text">
          <Link to="/" className="commerce-care-navlink1">
            Introduction
          </Link>
          <a href="#projects" className="commerce-care-link">
            <span>Projects</span>
            <br></br>
          </a>
          <a href="#about" className="commerce-care-link1">
            <span>About</span>
            <br></br>
          </a>
          <a href="#contact" className="commerce-care-link2">
            <span>Contact</span>
            <br></br>
          </a>
        </div>
      </header>
      <div className="commerce-care-container1">
        <div className="commerce-care-container2">
          <h1 className="commerce-care-text07">
            <span>Commerce Care</span>
            <br></br>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default CommerceCare
