import React from 'react'

import { Helmet } from 'react-helmet'

import './projects.css'

const Projects = (props) => {
  return (
    <div id="projects" className="projects-container">
      <Helmet>
        <title>Projects - Portfolio</title>
        <meta property="og:title" content="Projects - Portfolio" />
      </Helmet>
      <div className="projects-container1">
        <img
          alt="image"
          src="/playground_assets/logo_white.svg"
          className="projects-image"
        />
        <div className="projects-container2">
          <span className="projects-introduction">Introduction</span>
          <span className="projects-projects">Projects</span>
          <span className="projects-about">About</span>
          <span className="projects-contact">Contact</span>
        </div>
      </div>
      <span className="projects-text">TESSSST</span>
    </div>
  )
}

export default Projects
