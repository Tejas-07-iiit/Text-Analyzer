import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFont,
  faEnvelope,
  faChartPie,
  faUserGraduate,
  faPenFancy,
  faShieldHalved,
  faBolt,
  faWandMagicSparkles,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';

const About = (props) => {
  const isDark = props.mode === 'dark';

  return (
    <div className={`about-page-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <div className="container py-4">
        {/* Hero Section */}
        <div className="about-hero text-center mb-5">
          <span className="badge-pill mb-2">
            <FontAwesomeIcon icon={faWandMagicSparkles} className="me-2 text-warning" /> About Text Analyzer
          </span>
          <h1 className="display-5 fw-bold mb-3">
            Simple, Fast & Powerful Text Analysis Platform
          </h1>
          <p className="hero-description mx-auto text-muted">
            Text Analyzer is a free online platform built to help you transform, analyze, and extract value from your text effortlessly with zero registration required.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <h3 className="section-title fw-bold mb-4 text-center">Core Capabilities</h3>
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className={`card feature-card glass-card h-100 p-4 ${isDark ? 'card-dark' : 'card-light'}`}>
              <div className="feature-icon-box mb-3 icon-purple">
                <FontAwesomeIcon icon={faFont} size="lg" />
              </div>
              <h4 className="fw-bold mb-2">Text Transformation</h4>
              <p className="text-muted small">
                Convert text instantly to UPPERCASE, lowercase, or Pascal Case. Clean extra white spaces with a single click.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className={`card feature-card glass-card h-100 p-4 ${isDark ? 'card-dark' : 'card-light'}`}>
              <div className="feature-icon-box mb-3 icon-blue">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </div>
              <h4 className="fw-bold mb-2">Smart Email Extraction</h4>
              <p className="text-muted small">
                Automatically detect all email addresses embedded inside large bodies of text, copy them, or export to PDF.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className={`card feature-card glass-card h-100 p-4 ${isDark ? 'card-dark' : 'card-light'}`}>
              <div className="feature-icon-box mb-3 icon-emerald">
                <FontAwesomeIcon icon={faChartPie} size="lg" />
              </div>
              <h4 className="fw-bold mb-2">Analytics & Export</h4>
              <p className="text-muted small">
                Get word counts, character statistics with and without spaces, and export text summaries directly to Excel or PDF.
              </p>
            </div>
          </div>
        </div>

        {/* Target Audience Section */}
        <div className={`card glass-card p-4 p-md-5 mb-5 ${isDark ? 'card-dark' : 'card-light'}`}>
          <h3 className="fw-bold mb-4 text-center">Built For Everyone</h3>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="audience-item">
                <div className="audience-icon mx-auto mb-3">
                  <FontAwesomeIcon icon={faUserGraduate} size="xl" />
                </div>
                <h5 className="fw-bold">Students & Researchers</h5>
                <p className="text-muted small">Quickly verify word count limits and format assignments with precision.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="audience-item">
                <div className="audience-icon mx-auto mb-3">
                  <FontAwesomeIcon icon={faPenFancy} size="xl" />
                </div>
                <h5 className="fw-bold">Writers & Editors</h5>
                <p className="text-muted small">Polish articles, clean up messy draft formatting, and structure content.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="audience-item">
                <div className="audience-icon mx-auto mb-3">
                  <FontAwesomeIcon icon={faBolt} size="xl" />
                </div>
                <h5 className="fw-bold">Data Professionals</h5>
                <p className="text-muted small">Scrape and extract email address lists from raw documents in seconds.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy & Guarantee Banner */}
        <div className={`card glass-card privacy-card p-4 ${isDark ? 'card-dark' : 'card-light'}`}>
          <div className="d-flex flex-column flex-md-row align-items-center gap-4">
            <div className="privacy-shield-icon">
              <FontAwesomeIcon icon={faShieldHalved} size="2xl" className="text-success" />
            </div>
            <div>
              <h4 className="fw-bold mb-2 d-flex align-items-center gap-2">
                100% Client-Side Privacy Guarantee
              </h4>
              <p className="text-muted mb-0 small">
                Your privacy is paramount. All text processing happens directly in your browser — we do NOT save, store, or share any text you paste into our tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
