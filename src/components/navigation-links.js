import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        {props.text}
      </Link>
      <span className="navigation-links-text">{props.text1}</span>
      <span className="navigation-links-text1">{props.text2}</span>
      <span className="navigation-links-text2">{props.text3}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text: 'Introduction',
  rootClassName: '',
  text1: 'Projects',
  text3: 'Contact',
  text2: 'About',
}

NavigationLinks.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks
