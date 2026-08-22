import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faHome, faInfoCircle, faEnvelope, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Dropdown = ({ isDark }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown-mobile-container" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="dropdown-trigger-btn"
        aria-label="Toggle mobile menu"
      >
        <FontAwesomeIcon icon={open ? faXmark : faBars} size="lg" />
      </button>

      {open && (
        <div className={`dropdown-mobile-menu ${isDark ? 'menu-dark' : 'menu-light'}`}>
          <Link
            onClick={() => setOpen(false)}
            className={`dropdown-mobile-item ${location.pathname === '/' ? 'active' : ''}`}
            to="/"
          >
            <FontAwesomeIcon icon={faHome} className="me-2" /> Home
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className={`dropdown-mobile-item ${location.pathname === '/about' ? 'active' : ''}`}
            to="/about"
          >
            <FontAwesomeIcon icon={faInfoCircle} className="me-2" /> About
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className={`dropdown-mobile-item ${location.pathname === '/contact' ? 'active' : ''}`}
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Contact
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className={`dropdown-mobile-item ${location.pathname === '/textspark' ? 'active' : ''}`}
            to="/textspark"
          >
            <FontAwesomeIcon icon={faWandMagicSparkles} className="me-2 text-warning" /> TextSpark
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;