import { h } from 'preact'

import PropTypes from 'prop-types'

import styles from './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav class={` ${styles['nav']} ${styles[props.rootClassName]} `}>
      <span class={styles['text']}>{props.text}</span>
      <span class={styles['text1']}>{props.text1}</span>
      <span class={styles['text2']}>{props.text2}</span>
      <span class={styles['text3']}>{props.text3}</span>
      <span class={styles['text4']}>{props.text4}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text1: 'Features',
  text3: 'Team',
  text4: 'Blog',
  text: 'About',
  rootClassName: '',
  text2: 'Pricing',
}

NavigationLinks.propTypes = {
  text1: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks
