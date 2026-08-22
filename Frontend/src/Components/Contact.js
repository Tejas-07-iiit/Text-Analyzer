import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faPaperPlane, faUser, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Contact = (props) => {
  const isDark = props.mode === 'dark';

  return (
    <div className={`contact-page-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <div className="container py-4">
        {/* Header Section */}
        <div className="contact-header text-center mb-5">
          <span className="badge-pill mb-2">
            <FontAwesomeIcon icon={faCommentDots} className="me-2" /> Connect With Us
          </span>
          <h2 className="display-6 fw-bold">Get In Touch & Share Feedback</h2>
          <p className="contact-subtitle mx-auto">
            You are welcome to submit your review, suggest improvements to this site, or ask any questions.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Form Column */}
          <div className="col-lg-6">
            <div className={`card contact-card glass-card h-100 p-4 ${isDark ? 'card-dark' : 'card-light'}`}>
              <h3 className="card-title fw-bold mb-4 d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faPaperPlane} className="text-primary-accent" />
                Send a Message
              </h3>
              <form action="https://formspree.io/f/xnjnowob" method="POST">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Name</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    name="Name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control custom-input"
                    name="Email"
                    id="exampleInputEmail1"
                    placeholder="name@example.com"
                    required
                  />
                  <div className="form-text mt-1 text-muted">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Query or Review
                  </label>
                  <textarea
                    name="query"
                    className="form-control custom-input"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Write your feedback or inquiry here..."
                    required
                  ></textarea>
                </div>

                <button type="submit" name="Button" className="btn btn-gradient-primary w-100 py-2 fs-6 fw-semibold">
                  <FontAwesomeIcon icon={faPaperPlane} className="me-2" /> Submit Message
                </button>
              </form>
            </div>
          </div>

          {/* Info Column */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4 h-100">
              {/* About Card */}
              <div className={`card contact-card glass-card p-4 ${isDark ? 'card-dark' : 'card-light'}`}>
                <h3 className="card-title fw-bold mb-3 d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faUser} className="text-primary-accent" />
                  About The Creator
                </h3>
                <p className="owner-bio mb-0">
                  Hi, I'm <strong>Tejas Ambaliya</strong>, creator of Text Analyzer.
                  I built this tool to help you edit, transform, and analyze text quickly and effortlessly.
                  My goal is to make text processing simple and accessible for everyone.
                </p>
              </div>

              {/* Connected Links Card */}
              <div className={`card contact-card glass-card p-4 flex-grow-1 ${isDark ? 'card-dark' : 'card-light'}`}>
                <h3 className="card-title fw-bold mb-4">Stay Connected</h3>
                
                <div className="contact-links-list d-flex flex-column gap-3">
                  {/* Email */}
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXFBkDZlLVPnHFRDDcDPNHrgxQcMXTpLmRFpKSBBWBkkCqTwsfKHnsqmBTptTPSsprCZB"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-item-link"
                  >
                    <div className="icon-wrapper email-bg">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="link-text">
                      <span className="link-label">Email</span>
                      <span className="link-val">tejas23106@gmail.com</span>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Tejas-07-iiit"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-item-link"
                  >
                    <div className="icon-wrapper github-bg">
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <div className="link-text">
                      <span className="link-label">GitHub</span>
                      <span className="link-val">https://github.com/Tejas-07-iiit</span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/tejas-ambaliya-72a807324/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-item-link"
                  >
                    <div className="icon-wrapper linkedin-bg">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                    <div className="link-text">
                      <span className="link-label">LinkedIn</span>
                      <span className="link-val">https://www.linkedin.com</span>
                    </div>
                  </a>

                  {/* Portfolio Website (Contact icon changed to faGlobe) */}
                  <a
                    href="https://tejasambaliya.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-item-link"
                  >
                    <div className="icon-wrapper globe-bg">
                      <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <div className="link-text">
                      <span className="link-label">Portfolio Website</span>
                      <span className="link-val">https://tejasambaliya.me/</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;