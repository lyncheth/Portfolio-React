import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

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
        <div className="introduction-text">
          <a href="#introduction" className="introduction-link">
            Introduction
          </a>
          <a href="#projects" className="introduction-link01">
            <span>Projects</span>
            <br></br>
          </a>
          <a href="#about" className="introduction-link02">
            <span>About</span>
            <br></br>
          </a>
          <a href="#contact" className="introduction-link03">
            <span>Contact</span>
            <br></br>
          </a>
        </div>
      </header>
      <div id="introduction" className="introduction-hero">
        <div className="introduction-container1">
          <div className="introduction-container2">
            <div className="introduction-container3">
              <h1 className="introduction-text07">Hi There! 👋🏻</h1>
              <h1 className="introduction-text08">
                <span className="introduction-text09">
                  I create and design mobile
                </span>
                <br className="introduction-text10"></br>
                <span className="introduction-text11">applications.</span>
                <br></br>
              </h1>
              <span className="introduction-text13">
                <span className="introduction-text14">
                  I&apos;m a UX/UI designer with a passion to create great new
                  designs and user experiences.
                </span>
                <br></br>
              </span>
              <div className="introduction-tools-i-use">
                <h1 className="introduction-text16">TOOLS I USE</h1>
                <div className="introduction-tools">
                  <img
                    alt="image"
                    src="/playground_assets/icons8-figma.svg"
                    className="introduction-image01"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/icons8-sketch.svg"
                    className="introduction-image02"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/icons8-adobe-illustrator%20%5B1%5D.svg"
                    className="introduction-image03"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/icons8-adobe-photoshop.svg"
                    className="introduction-image04"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/hero-base-dark-1500w.png"
          className="introduction-image05"
        />
      </div>
      <a href="#projects" className="introduction-link04">
        <div className="introduction-explore-my-projects">
          <span className="introduction-text17">
            <span className="introduction-text18">Explore my projects</span>
            <br></br>
          </span>
          <img
            alt="image"
            src="/playground_assets/arrow.svg"
            className="introduction-image06"
          />
        </div>
      </a>
      <div className="introduction-projects-divider">
        <h1 className="introduction-text20">PROJECTS</h1>
        <div className="introduction-line"></div>
      </div>
      <div className="introduction-container4">
        <span className="introduction-text21">
          <span>
            Check out some of my designs that I have done or am working right
            now. Please note that some 
          </span>
          <br></br>
          <span>of the designs are work in progress.</span>
          <br></br>
        </span>
      </div>
      <div className="introduction-projects">
        <div id="projects" className="introduction-projects-with-names">
          <div className="introduction-project">
            <a
              href="https://www.figma.com/community/file/1144574049134194464"
              target="_blank"
              rel="noreferrer noopener"
              className="introduction-link05"
            >
              <img
                alt="image"
                src="/playground_assets/thumbnail.svg"
                className="introduction-image07"
              />
            </a>
            <a
              href="https://www.figma.com/community/file/1144574049134194464"
              target="_blank"
              rel="noreferrer noopener"
              className="introduction-link06"
            >
              <h1 className="introduction-text26">Real Estate Application</h1>
            </a>
            <a
              href="https://www.figma.com/community/file/1144574049134194464"
              target="_blank"
              rel="noreferrer noopener"
              className="introduction-link07"
            >
              <h1 className="introduction-text27">Glive</h1>
            </a>
          </div>
          <div className="introduction-project1">
            <img
              alt="image"
              src="/playground_assets/crushyframe.svg"
              className="introduction-image08"
            />
            <h1 className="introduction-text28">
              <span>Dating Application</span>
              <br></br>
            </h1>
            <h1 className="introduction-text31">Crushy</h1>
          </div>
          <div className="introduction-project2">
            <Link to="/commercecare" className="introduction-navlink">
              <img
                alt="image"
                src="/playground_assets/newcc-1200w.png"
                className="introduction-image09"
              />
            </Link>
            <Link to="/commercecare" className="introduction-navlink1">
              <h1 className="introduction-text32">
                <span>E-Commerce Company</span>
                <br></br>
              </h1>
            </Link>
            <Link to="/commercecare" className="introduction-navlink2">
              <h1 className="introduction-text35">
                <span>Commerce Care</span>
                <br></br>
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="introduction-about-divider">
        <h1 className="introduction-text38">ABOUT</h1>
        <div className="introduction-line1"></div>
      </div>
      <div className="introduction-about-me">
        <div id="about" className="introduction-container5">
          <img
            alt="image"
            src="/playground_assets/microsoftteams-image2-500h.png"
            className="introduction-image10"
          />
          <div className="introduction-text39">
            <h1 className="introduction-text40">WHO AM I</h1>
            <span className="introduction-text41">
              <span>
                My name is Amar Aličić. I am 26 years old, I live in Zenica,
                Bosnia and Herzegovina, and I am 
              </span>
              <span>self-taught Graphics and UI/UX Designer.</span>
              <br className="introduction-text44"></br>
              <br className="introduction-text45"></br>
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
              <span className="introduction-text50">
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
              <br className="introduction-text52"></br>
              <br className="introduction-text53"></br>
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
              <span className="introduction-text57"> </span>
              <br className="introduction-text58"></br>
              <br className="introduction-text59"></br>
              <br className="introduction-text60"></br>
              <br></br>
              <br className="introduction-text62"></br>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="introduction-contact-divider">
        <h1 className="introduction-heading">CONTACT</h1>
        <div className="introduction-line2"></div>
      </div>
      <div id="contact" className="introduction-contact">
        <div className="introduction-text64">
          <h1 className="introduction-text65">
            <span className="introduction-text66">
              Do not hesitate to contact me through the form here
            </span>
            <br className="introduction-text67"></br>
            <span className="introduction-text68"> or by direct email</span>
            <br className="introduction-text69"></br>
            <span className="introduction-text70"> on</span>
            <span className="introduction-text71">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="mailto:amar@amaralicic.com?subject=Contact"
              className="introduction-link08"
            >
              amar@amaralicic.com
            </a>
            <span className="introduction-text72">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="introduction-text73">
              regardless of the subject.
            </span>
          </h1>
        </div>
        <div className="introduction-form">
          <label className="introduction-text74">
            <span>Full Name</span>
            <span className="introduction-text76">*</span>
          </label>
          <input
            type="text"
            id="from_name"
            required
            placeholder="John Doe"
            autoComplete="name"
            className="introduction-textinput input"
          />
          <label className="introduction-text77">
            <span>Email Address</span>
            <span className="introduction-text79">*</span>
          </label>
          <input
            type="email"
            id="reply_to"
            name="email"
            pattern=".+@gmail.com"
            required
            placeholder="amar@amaralicic.com"
            autoComplete="name"
            className="introduction-textinput1 input"
          />
          <label className="introduction-text80">
            <span>Leave a Message</span>
            <span className="introduction-text82">*</span>
          </label>
          <textarea
            cols="50"
            name="message"
            rows="7"
            placeholder="Hi ! I would like to work with you..."
            className="introduction-textarea textarea"
          ></textarea>
          <div className="introduction-explore-my-projects1">
            <span id="submit" className="button submit">
              <span className="introduction-text84">Send it</span>
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
      <div className="introduction-footer">
        <a
          href="https://www.linkedin.com/in/amaralicic/"
          target="_blank"
          rel="noreferrer noopener"
          className="introduction-link09"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/xoamarxo/"
          target="_blank"
          rel="noreferrer noopener"
          className="introduction-link10"
        >
          Instagram
        </a>
        <span className="introduction-text86">© Amar Aličić</span>
      </div>
    </div>
  )
}

export default Introduction
