import React from 'react'

import { Helmet } from 'react-helmet'

import './commercecare.css'

const Commercecare = (props) => {
  return (
    <div className="commercecare-container">
      <Helmet>
        <title>commercecare - Amar Aličič - UI/UX Designer</title>
        <meta
          name="description"
          content="I am Amar Aličič a UI/UX Designer from Bosnia and Herzegovina and I am looking to improve my skills each day. Looking foward to work in IT Industry. "
        />
        <meta
          property="og:title"
          content="commercecare - Amar Aličič - UI/UX Designer"
        />
        <meta
          property="og:description"
          content="I am Amar Aličič a UI/UX Designer from Bosnia and Herzegovina and I am looking to improve my skills each day. Looking foward to work in IT Industry. "
        />
      </Helmet>
      <header data-role="Header" className="commercecare-header">
        <img
          alt="logo"
          src="/playground_assets/logo_white.svg"
          className="commercecare-image"
        />
        <div className="commercecare-text">
          <a href="#introduction" className="commercecare-link">
            Introduction
          </a>
          <a href="#projects" className="commercecare-link1">
            <span>Projects</span>
            <br></br>
          </a>
          <a href="#about" className="commercecare-link2">
            <span>About</span>
            <br></br>
          </a>
          <a href="#contact" className="commercecare-link3">
            <span>Contact</span>
            <br></br>
          </a>
        </div>
      </header>
      <div className="commercecare-container1">
        <div className="commercecare-container2">
          <h1 className="commercecare-text07">
            <span>Commerce Care</span>
            <br></br>
          </h1>
        </div>
      </div>
      <img
        src="/playground_assets/newcc-1100w.png"
        alt="image"
        className="commercecare-image1"
      />
    </div>
  )
}

export default Commercecare
