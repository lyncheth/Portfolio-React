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
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="introduction-image1"
              />
              <div
                data-type="CloseMobileMenu"
                className="introduction-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="introduction-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName18"></NavigationLinks>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="introduction-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="introduction-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="introduction-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
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
              className="introduction-image2"
            />
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/hero-base-dark-1500w.png"
          className="introduction-image3"
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
              className="introduction-image4"
            />
            <h1 className="introduction-text18">Real Estate Application</h1>
            <h1 className="introduction-text19">Glive</h1>
          </div>
          <div className="introduction-project1">
            <img
              alt="image"
              src="/playground_assets/untitled-1-400w.png"
              className="introduction-image5"
            />
            <h1 className="introduction-text20">Workout Application</h1>
            <h1 className="introduction-text21">Praction</h1>
          </div>
        </div>
      </div>
      <div className="introduction-about-divider">
        <h1 className="introduction-text22">ABOUT</h1>
        <div className="introduction-line1"></div>
      </div>
      <div className="introduction-about-me">
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
              My current focus is on UI/UX Design and I am working as an Intern
              at Commercecare.ai where I am mainly working on creating marketing
              graphics. I also work on one of their products called Rokpay.ba
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
        </div>
        <div className="introduction-avatar">
          <img
            alt="image"
            src="/playground_assets/avatar-500h.png"
            className="introduction-image6"
          />
        </div>
      </div>
      <div className="introduction-contact-divider">
        <h1 className="introduction-heading">CONTACT</h1>
        <div className="introduction-line2"></div>
      </div>
      <div className="introduction-contact">
        <div className="introduction-text46">
          <h1 className="introduction-text47">
            <span className="introduction-text48">
              Do not hesitate to contact me through the form here or by direct
              email
            </span>
            <br className="introduction-text49"></br>
            <span className="introduction-text50"> on</span>
            <span className="introduction-text51">
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
            <span className="introduction-text52">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="introduction-text53">
              regardless of the subject.
            </span>
          </h1>
        </div>
        <div className="introduction-form">
          <label className="introduction-text54">
            <span>Full Name</span>
            <span className="introduction-text56">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="John Doe"
            autoComplete="name"
            className="introduction-textinput input"
          />
          <label className="introduction-text57">
            <span>Email Address</span>
            <span className="introduction-text59">*</span>
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
          <label className="introduction-text60">
            <span>Leave a Message</span>
            <span className="introduction-text62">*</span>
          </label>
          <textarea
            cols="50"
            name="message"
            rows="7"
            placeholder="Hi ! I would like to work with you..."
            className="introduction-textarea textarea"
          ></textarea>
          <div className="introduction-explore-my-projects1">
            <span className="introduction-text63">
              <span className="introduction-text64">Send it</span>
              <br></br>
            </span>
            <img
              alt="image"
              src="/playground_assets/arrow.svg"
              className="introduction-image7"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
