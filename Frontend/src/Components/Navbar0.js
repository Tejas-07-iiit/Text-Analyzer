import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from './Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont, faSun, faMoon, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

function Navbar0(props) {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDark = props.mode === 'dark';

  return (
    <nav className={`navbar-custom ${isDark ? 'nav-dark' : 'nav-light'}`}>
      <div className="container d-flex align-items-center justify-content-between py-2">
        {/* Brand Logo */}
        <Link className="navbar-brand-custom d-flex align-items-center gap-2" to="/">
          <div className="brand-icon-box">
            <FontAwesomeIcon icon={faFont} />
          </div>
          <span className="brand-name">Text<span className="brand-accent">Analyzer</span></span>
        </Link>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <div className="nav-links-container">
            <ul className="nav-list d-flex align-items-center mb-0 list-unstyled gap-2">
              <li>
                <Link
                  className={`nav-link-custom ${location.pathname === '/' ? 'active' : ''}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link-custom ${location.pathname === '/about' ? 'active' : ''}`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link-custom ${location.pathname === '/contact' ? 'active' : ''}`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link-custom spark-link ${location.pathname === '/textspark' ? 'active' : ''}`}
                  to="/textspark"
                >
                  <FontAwesomeIcon icon={faWandMagicSparkles} className="me-1 text-warning" />
                  TextSpark
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Actions & Theme Toggle */}
        <div className="d-flex align-items-center gap-3">
          {/* Theme Switch Button */}
          <button
            onClick={props.modechange}
            className={`theme-toggle-btn ${isDark ? 'btn-dark-mode' : 'btn-light-mode'}`}
            title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="theme-icon" />
            <span className="theme-text d-none d-sm-inline ms-2">
              {isDark ? 'Light' : 'Dark'}
            </span>
          </button>

          {/* Mobile Dropdown */}
          {isMobile && <Dropdown isDark={isDark} />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar0;