import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './introduction.css'

const Introduction = (props) => {
  return (
    <div id="intro" className="introduction-container">
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
      <header data-role="Header" className="introduction-header">
        <img
          alt="logo"
          src="/playground_assets/logo_white.svg"
          className="introduction-image"
        />
        <div className="introduction-nav">
          <NavigationLinks
            text="Introduction"
            text1="Projects"
            text2="About"
            text3="Contact"
            rootClassName="rootClassName17"
          ></NavigationLinks>
        </div>
        <div data-type="BurgerMenu" className="introduction-burger-menu">
          <svg viewBox="0 0 1024 1024" className="introduction-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className="introduction-mobile-menu">
          <div className="introduction-nav1">
            <div className="introduction-container01">
              <img
                alt="image"
                src="/playground_assets/logo_white.svg"
                className="introduction-image01"
              />
              <div
                data-type="CloseMobileMenu"
                className="introduction-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="introduction-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName18"></NavigationLinks>
          </div>
        </div>
      </header>
      <div className="introduction-hero">
        <div className="introduction-container02">
          <div className="introduction-container03">
            <div className="introduction-container04">
              <div className="introduction-container05">
                <div className="introduction-container06">
                  <div className="introduction-container07">
                    <div className="introduction-container08">
                      <div className="introduction-container09">
                        <div className="introduction-container10">
                          <div className="introduction-container11">
                            <h1 className="introduction-text">Hi There! 👋🏻</h1>
                            <h1 className="introduction-text01">
                              <span>I create and design mobile</span>
                              <br></br>
                              <span>applications.</span>
                              <br></br>
                            </h1>
                            <span className="introduction-text06">
                              <span className="introduction-text07">
                                I&apos;m a UI/UX designer with a passion to
                                create great new designs and user experiences
                              </span>
                              <br></br>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="introduction-explore-my-projects">
            <span className="introduction-text09">
              <span className="introduction-text10">Explore my projects</span>
              <br></br>
            </span>
            <img
              alt="image"
              src="/playground_assets/arrow.svg"
              className="introduction-image02"
            />
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/hero-base-dark-1500w.png"
          className="introduction-image03"
        />
      </div>
      <div className="introduction-divider">
        <h1 className="introduction-text12">PROJECTS</h1>
        <div className="introduction-line"></div>
      </div>
      <div className="introduction-container12">
        <span className="introduction-text13">
          <span>
            Check out some of my designs that I have done or am working right
            now. Please note that some 
          </span>
          <br></br>
          <span>of the designs are under work.</span>
          <br></br>
        </span>
      </div>
      <div className="introduction-projects">
        <div className="introduction-projects-with-names">
          <div className="introduction-project">
            <img
              alt="image"
              src="/playground_assets/thumbnail.svg"
              className="introduction-image04"
            />
            <h1 className="introduction-text18">Real Estate Application</h1>
            <h1 className="introduction-text19">Glive</h1>
          </div>
          <div className="introduction-project1">
            <img
              alt="image"
              src="/playground_assets/untitled-1-1200w.png"
              className="introduction-image05"
            />
            <h1 className="introduction-text20">Workout Application</h1>
            <h1 className="introduction-text21">Praction</h1>
          </div>
        </div>
      </div>
      <div className="introduction-about-divider">
        <h1 className="introduction-text22">ABOUT</h1>
        <div className="introduction-container13">
          <div className="introduction-line1"></div>
        </div>
      </div>
      <div className="introduction-about-me">
        <div className="introduction-container14">
          <img
            alt="image"
            src="/playground_assets/avatar-800w.png"
            className="introduction-image06"
          />
          <div className="introduction-text23">
            <h1 className="introduction-text24">WHO AM I</h1>
            <span className="introduction-text25">
              <span>
                My name is Amar Aličič. I am 26 years old, I live in Zenica,
                Bosnia and Herzegovina, and I am 
              </span>
              <span>self-taught Graphics and UI/UX Designer.</span>
              <br className="introduction-text28"></br>
              <br className="introduction-text29"></br>
              <span>
                I have multiple years of experience working with many designing
                and 3D modeling tools. 
              </span>
              <br></br>
              <br></br>
              <span>
                My current focus is on UI/UX Design and I am working as an
                Intern at Commercecare.ai where I am mainly working on creating
                marketing graphics. I also work on one of their products called
                Rokpay.ba
              </span>
              <br className="introduction-text34"></br>
              <br className="introduction-text35"></br>
              <span>
                UI/UX Design started for me as a hobby and it turned to passion.
                Now I am working on perfecting those skills, and learning more
                each day in my internship .
              </span>
              <br></br>
              <span>
                Also I have a decent skill of understanding of HTML, CSS, and
                JavaScipt.
              </span>
              <span className="introduction-text39"> </span>
              <br className="introduction-text40"></br>
              <br className="introduction-text41"></br>
              <br className="introduction-text42"></br>
              <br></br>
              <br className="introduction-text44"></br>
              <br></br>
            </span>
            <h1 className="introduction-text46">TOOLS I USE</h1>
          </div>
        </div>
        <div className="introduction-avatar"></div>
      </div>
      <div className="introduction-tools">
        <img
          alt="image"
          src="/playground_assets/icons8-figma.svg"
          className="introduction-image07"
        />
        <img
          alt="image"
          src="/playground_assets/icons8-sketch.svg"
          className="introduction-image08"
        />
        <img
          alt="image"
          src="/playground_assets/icons8-adobe-illustrator%20%5B1%5D.svg"
          className="introduction-image09"
        />
        <img
          alt="image"
          src="/playground_assets/icons8-adobe-photoshop.svg"
          className="introduction-image10"
        />
      </div>
      <div className="introduction-contact-divider">
        <h1 className="introduction-heading">CONTACT</h1>
        <div className="introduction-line2"></div>
      </div>
      <div className="introduction-contact">
        <div className="introduction-text47">
          <h1 className="introduction-text48">
            <span className="introduction-text49">
              Do not hesitate to contact me through the form here or by direct
              email
            </span>
            <br className="introduction-text50"></br>
            <span className="introduction-text51"> on</span>
            <span className="introduction-text52">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://mailto:amar@amaralicic.com"
              target="_blank"
              rel="noreferrer noopener"
              className="introduction-link"
            >
              amar@amaralicic.com
            </a>
            <span className="introduction-text53">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="introduction-text54">
              regardless of the subject.
            </span>
          </h1>
        </div>
        <div className="introduction-form">
          <label className="introduction-text55">
            <span>Full Name</span>
            <span className="introduction-text57">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="John Doe"
            autoComplete="name"
            className="introduction-textinput input"
          />
          <label className="introduction-text58">
            <span>Email Address</span>
            <span className="introduction-text60">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            pattern=".+@gmail.com"
            required
            placeholder="amar@amaralicic.com"
            autoComplete="name"
            className="introduction-textinput1 input"
          />
          <label className="introduction-text61">
            <span>Leave a Message</span>
            <span className="introduction-text63">*</span>
          </label>
          <textarea
            cols="50"
            name="message"
            rows="7"
            placeholder="Hi ! I would like to work with you..."
            className="introduction-textarea textarea"
          ></textarea>
          <div className="introduction-explore-my-projects1">
            <span className="introduction-text64">
              <span className="introduction-text65">Send it</span>
              <br></br>
            </span>
            <img
              alt="image"
              src="/playground_assets/arrow.svg"
              className="introduction-image11"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
