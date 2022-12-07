import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card22.css'

const GalleryCard22 = (props) => {
  return (
    <div className={`gallery-card22-gallery-card ${props.rootClassName} `}>
      <div className="gallery-card22-container">
        <div className="gallery-card22-container1">
          <h2 className="gallery-card22-text">{props.title}</h2>
          <span className="gallery-card22-text1">{props.description}</span>
          <span className="gallery-card22-text2">SHOW MORE</span>
        </div>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card22-image"
      />
    </div>
  )
}

GalleryCard22.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&h=1000',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  title: 'Project Title',
}

GalleryCard22.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default GalleryCard22
