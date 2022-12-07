import { h } from 'preact'

import { Helmet } from 'react-helmet'

import styles from './style.css'

const Commercecare = (props) => {
  return (
    <div class={styles['container']}>
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
      <header data-role="Header" class={styles['header']}>
        <img
          alt="logo"
          src="/assets/playground_assets/logo_white.svg"
          class={styles['image']}
        />
        <div class={styles['text']}>
          <a href="#introduction" class={styles['link']}>
            Introduction
          </a>
          <a href="#projects" class={styles['link1']}>
            <span>Projects</span>
            <br></br>
          </a>
          <a href="#about" class={styles['link2']}>
            <span>About</span>
            <br></br>
          </a>
          <a href="#contact" class={styles['link3']}>
            <span>Contact</span>
            <br></br>
          </a>
        </div>
      </header>
      <div class={styles['container1']}>
        <div class={styles['container2']}>
          <h1 class={styles['text07']}>
            <span>Commerce Care</span>
            <br></br>
          </h1>
        </div>
      </div>
      <img
        src="/assets/playground_assets/newcc-1100w.png"
        alt="image"
        class={styles['image1']}
      />
    </div>
  )
}

export default Commercecare
