import { h } from 'preact'

import { Helmet } from 'react-helmet'

import projectStyles from '../../global-style.module.css'
import styles from './style.css'

const Introduction = (props) => {
  return (
    <div id="intro" class={styles['container']}>
      <Helmet>
        <title>Amar Aličič - UI/UX Designer</title>
        <meta
          name="description"
          content="I am Amar Aličič a UI/UX Designer from Bosnia and Herzegovina and I am looking to improve my skills each day. Looking foward to work in IT Industry. "
        />
        <meta property="og:title" content="Amar Aličič - UI/UX Designer" />
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
          <a href="#projects" class={styles['link01']}>
            <span>Projects</span>
            <br></br>
          </a>
          <a href="#about" class={styles['link02']}>
            <span>About</span>
            <br></br>
          </a>
          <a href="#contact" class={styles['link03']}>
            <span>Contact</span>
            <br></br>
          </a>
        </div>
      </header>
      <div id="introduction" class={styles['hero']}>
        <div class={styles['container1']}>
          <div class={styles['container2']}>
            <div class={styles['container3']}>
              <h1 class={styles['text07']}>Hi There! 👋🏻</h1>
              <h1 class={styles['text08']}>
                <span class={styles['text09']}>I create and design mobile</span>
                <br class={styles['text10']}></br>
                <span class={styles['text11']}>applications.</span>
                <br></br>
              </h1>
              <span class={styles['text13']}>
                <span class={styles['text14']}>
                  I&apos;m a UX/UI designer with a passion to create great new
                  designs and user experiences.
                </span>
                <br></br>
              </span>
              <div class={styles['tools-i-use']}>
                <h1 class={styles['text16']}>TOOLS I USE</h1>
                <div class={styles['tools']}>
                  <img
                    alt="image"
                    src="/assets/playground_assets/icons8-figma.svg"
                    class={styles['image01']}
                  />
                  <img
                    alt="image"
                    src="/assets/playground_assets/icons8-sketch.svg"
                    class={styles['image02']}
                  />
                  <img
                    alt="image"
                    src="/assets/playground_assets/icons8-adobe-illustrator%20%5B1%5D.svg"
                    class={styles['image03']}
                  />
                  <img
                    alt="image"
                    src="/assets/playground_assets/icons8-adobe-photoshop.svg"
                    class={styles['image04']}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/assets/playground_assets/hero-base-dark-1500w.png"
          class={styles['image05']}
        />
      </div>
      <a href="#projects" class={styles['link04']}>
        <div class={styles['explore-my-projects']}>
          <span class={styles['text17']}>
            <span class={styles['text18']}>Explore my projects</span>
            <br></br>
          </span>
          <img
            alt="image"
            src="/assets/playground_assets/arrow.svg"
            class={styles['image06']}
          />
        </div>
      </a>
      <div class={styles['projects-divider']}>
        <h1 class={styles['text20']}>PROJECTS</h1>
        <div class={styles['line']}></div>
      </div>
      <div class={styles['container4']}>
        <span class={styles['text21']}>
          <span>
            Check out some of my designs that I have done or am working right
            now. Please note that some 
          </span>
          <br></br>
          <span>of the designs are work in progress.</span>
          <br></br>
        </span>
      </div>
      <div class={styles['projects']}>
        <div id="projects" class={styles['projects-with-names']}>
          <div class={styles['project']}>
            <a
              href="https://www.figma.com/community/file/1144574049134194464"
              target="_blank"
              rel="noreferrer noopener"
              class={styles['link05']}
            >
              <img
                alt="image"
                src="/assets/playground_assets/thumbnail.svg"
                class={styles['image07']}
              />
            </a>
            <a
              href="https://www.figma.com/community/file/1144574049134194464"
              target="_blank"
              rel="noreferrer noopener"
              class={styles['link06']}
            >
              <h1 class={styles['text26']}>Real Estate Application</h1>
            </a>
            <a
              href="https://www.figma.com/community/file/1144574049134194464"
              target="_blank"
              rel="noreferrer noopener"
              class={styles['link07']}
            >
              <h1 class={styles['text27']}>Glive</h1>
            </a>
          </div>
          <div class={styles['project1']}>
            <img
              alt="image"
              src="/assets/playground_assets/crushyframe.svg"
              class={styles['image08']}
            />
            <h1 class={styles['text28']}>
              <span>Dating Application</span>
              <br></br>
            </h1>
            <h1 class={styles['text31']}>Crushy</h1>
          </div>
          <div class={styles['project2']}>
            <img
              alt="image"
              src="/assets/playground_assets/newcc-1200w.png"
              class={styles['image09']}
            />
            <h1 class={styles['text32']}>
              <span>E-Commerce Company</span>
              <br></br>
            </h1>
            <h1 class={styles['text35']}>
              <span>Commerce Care</span>
              <br></br>
            </h1>
          </div>
        </div>
      </div>
      <div class={styles['about-divider']}>
        <h1 class={styles['text38']}>ABOUT</h1>
        <div class={styles['line1']}></div>
      </div>
      <div class={styles['about-me']}>
        <div id="about" class={styles['container5']}>
          <img
            alt="image"
            src="/assets/playground_assets/microsoftteams-image2-500h.png"
            class={styles['image10']}
          />
          <div class={styles['text39']}>
            <h1 class={styles['text40']}>WHO AM I</h1>
            <span class={styles['text41']}>
              <span>
                My name is Amar Aličič. I am 26 years old, I live in Zenica,
                Bosnia and Herzegovina, and I am 
              </span>
              <span>self-taught Graphics and UI/UX Designer.</span>
              <br class={styles['text44']}></br>
              <br class={styles['text45']}></br>
              <span>
                I have multiple years of experience working with many designing
                and 3D modeling tools. 
              </span>
              <br></br>
              <br></br>
              <span>
                Currently I work as a freelance UX/UI Designer on Upwork but in
                past I worked at Commercecare.ai and Rokpay.ba
              </span>
              <span class={styles['text50']}>
                . I am
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                specialized in creating mobile application designs but I have
                decent skill in web design as well.
              </span>
              <br class={styles['text52']}></br>
              <br class={styles['text53']}></br>
              <span>
                UI/UX Design started for me as a hobby and it turned to passion.
                Now I am working on perfecting those skills, and learning more
                each day .
              </span>
              <br></br>
              <span>
                Also I have a decent skill of understanding of HTML, CSS, and
                JavaScipt.
              </span>
              <span class={styles['text57']}> </span>
              <br class={styles['text58']}></br>
              <br class={styles['text59']}></br>
              <br class={styles['text60']}></br>
              <br></br>
              <br class={styles['text62']}></br>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div class={styles['contact-divider']}>
        <h1 class={styles['heading']}>CONTACT</h1>
        <div class={styles['line2']}></div>
      </div>
      <div id="contact" class={styles['contact']}>
        <div class={styles['text64']}>
          <h1 class={styles['text65']}>
            <span class={styles['text66']}>
              Do not hesitate to contact me through the form here
            </span>
            <br class={styles['text67']}></br>
            <span class={styles['text68']}> or by direct email</span>
            <br class={styles['text69']}></br>
            <span class={styles['text70']}> on</span>
            <span class={styles['text71']}>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="mailto:amar@amaralicic.com?subject=Contact"
              class={styles['link08']}
            >
              amar@amaralicic.com
            </a>
            <span class={styles['text72']}>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span class={styles['text73']}>regardless of the subject.</span>
          </h1>
        </div>
        <div class={styles['form']}>
          <label class={styles['text74']}>
            <span>Full Name</span>
            <span class={styles['text76']}>*</span>
          </label>
          <input
            type="text"
            id="from_name"
            required
            placeholder="John Doe"
            autoComplete="name"
            class={` ${styles['textinput']} ${projectStyles['input']} `}
          />
          <label class={styles['text77']}>
            <span>Email Address</span>
            <span class={styles['text79']}>*</span>
          </label>
          <input
            type="email"
            id="reply_to"
            name="email"
            pattern=".+@gmail.com"
            required
            placeholder="amar@amaralicic.com"
            autoComplete="name"
            class={` ${styles['textinput1']} ${projectStyles['input']} `}
          />
          <label class={styles['text80']}>
            <span>Leave a Message</span>
            <span class={styles['text82']}>*</span>
          </label>
          <textarea
            cols="50"
            name="message"
            rows="7"
            placeholder="Hi ! I would like to work with you..."
            class={` ${styles['textarea']} ${projectStyles['textarea']} `}
          ></textarea>
          <div class={styles['explore-my-projects1']}>
            <span
              id="submit"
              class={` ${projectStyles['button']} ${projectStyles['submit']} `}
            >
              <span class={styles['text84']}>Send it</span>
              <br></br>
            </span>
            <img
              alt="image"
              src="/assets/playground_assets/arrow.svg"
              class={styles['image11']}
            />
          </div>
        </div>
      </div>
      <div class={styles['footer']}>
        <a
          href="https://www.linkedin.com/in/amaralicic/"
          target="_blank"
          rel="noreferrer noopener"
          class={styles['link09']}
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/xoamarxo/"
          target="_blank"
          rel="noreferrer noopener"
          class={styles['link10']}
        >
          Instagram
        </a>
        <span class={styles['text86']}>© Amar Aličić</span>
      </div>
    </div>
  )
}

export default Introduction
