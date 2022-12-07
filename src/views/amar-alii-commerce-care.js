import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './amar-alii-commerce-care.css'

const AmarAliiCommerceCare = (props) => {
  return (
    <div className="amar-alii-commerce-care-container">
      <Helmet>
        <title>Amar-Alii-Commerce-Care - Amar Aličič - UI/UX Designer</title>
        <meta
          name="description"
          content="I am Amar Aličič a UI/UX Designer from Bosnia and Herzegovina and I am looking to improve my skills each day. Looking foward to work in IT Industry. "
        />
        <meta
          property="og:title"
          content="Amar-Alii-Commerce-Care - Amar Aličič - UI/UX Designer"
        />
        <meta
          property="og:description"
          content="I am Amar Aličič a UI/UX Designer from Bosnia and Herzegovina and I am looking to improve my skills each day. Looking foward to work in IT Industry. "
        />
      </Helmet>
      <header data-role="Header" className="amar-alii-commerce-care-header">
        <img
          alt="logo"
          src="/playground_assets/logo_white.svg"
          className="amar-alii-commerce-care-image"
        />
        <div className="amar-alii-commerce-care-text">
          <Link to="/" className="amar-alii-commerce-care-navlink">
            Introduction
          </Link>
          <a href="#projects" className="amar-alii-commerce-care-link">
            <span>Projects</span>
            <br></br>
          </a>
          <a href="#about" className="amar-alii-commerce-care-link1">
            <span>About</span>
            <br></br>
          </a>
          <a href="#contact" className="amar-alii-commerce-care-link2">
            <span>Contact</span>
            <br></br>
          </a>
        </div>
      </header>
      <div className="amar-alii-commerce-care-container1">
        <div className="amar-alii-commerce-care-container2">
          <h1 className="amar-alii-commerce-care-text07">
            <span>Commerce Care</span>
            <br></br>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default AmarAliiCommerceCare
