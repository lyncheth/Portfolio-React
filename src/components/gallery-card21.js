import { h } from 'preact'

import PropTypes from 'prop-types'

import styles from './gallery-card21.css'

const GalleryCard21 = (props) => {
  return (
    <div class={` ${styles['gallery-card']} ${styles[props.rootClassName]} `}>
      <div class={styles['container']}>
        <div class={styles['container1']}>
          <h2 class={styles['text']}>{props.title}</h2>
          <span class={styles['text1']}>{props.description}</span>
          <span class={styles['text2']}>SHOW MORE</span>
        </div>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        class={styles['image']}
      />
    </div>
  )
}

GalleryCard21.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&h=1000',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  title: 'Project Title',
}

GalleryCard21.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default GalleryCard21
