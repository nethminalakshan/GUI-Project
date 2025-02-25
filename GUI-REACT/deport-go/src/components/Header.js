import React, { useEffect } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import logo from '../assets/images/2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope, faRightToBracket, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  // Toggle the "scrolled" class on body when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="headerbar" id="id1">
      <Link to="/"><img className="logo1" src={logo} alt="Logo" /></Link>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
            <p>House</p>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>About Us</p>
          </Link>
        </li>
        <li>
          <a href="/faqs">
            <FontAwesomeIcon icon={faRightToBracket} />
            <p>FAQs</p>
          </a>
        </li>
        <li>
          <a href="/contact">
            <FontAwesomeIcon icon={faUserPlus} />
            <p>Contact</p>
          </a>
        </li>
      </ul>
      <button className="signin-btn">
        <FontAwesomeIcon icon={faSignInAlt} />
        <span>Sign In</span>
      </button>
    </nav>
  );
}
