import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF, faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Social Media */}
        <div className="footer-logo">
          <h2>DeportGo</h2>
          <p>To AnyWhere</p>
          <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faBehance} /></a>

          </div>
        </div>

        {/* Build and Sell Sections */}
        <div className="footer-links">
          <div>
            <h3>BUILD</h3>
            <ul>
              <li><a href="#">Web Design & Development</a></li>
              <li><a href="#">E-Commerce</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">Customized Software Developments</a></li>
              <li><a href="#">Cloud & Hosting</a></li>
              <li><a href="#">Maintenance & Support</a></li>
            </ul>
          </div>
          <div>
            <h3>SELL</h3>
            <ul>
              <li><a href="#">SEO</a></li>
              <li><a href="#">Social Media Marketing</a></li>
              <li><a href="#">PPC</a></li>
              <li><a href="#">Data Analytics</a></li>
              <li><a href="#">Google Display Ads</a></li>
              <li><a href="#">Content Development</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>CONTACT US</h3>
          <p><i className="fas fa-map-marker-alt"></i> No.75/18, D.I. Pathirage Mawatha, Nugegoda, Sri Lanka.</p>
          <p><i className="fas fa-phone"></i> (+94) 77 88 456 00 (Sales Hotline)</p>
          <p><i className="fas fa-phone"></i> (+94) 11 2 80 22 80 (Finance & HR)</p>
          <p><i className="fas fa-phone"></i> (+94) 11 2 80 12 22 (Support)</p>
          <p><i className="fas fa-envelope"></i> sales@weblankan.com</p>
        </div>

        {/* Support Tools */}
        <div className="footer-support">
          <h3>SUPPORT TOOLS</h3>
          <div className="support-icons">
            <a href="#"><img src="thunderbird.png" alt="Thunderbird" /></a>
            <a href="#"><img src="teamviewer.png" alt="TeamViewer" /></a>
            <a href="#"><img src="anydesk.png" alt="AnyDesk" /></a>
          </div>
          <img className="dmca" src="dmca-protected.png" alt="DMCA Protected" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>Copyright 2025 - Web Lankan (Pvt) Ltd. All Rights Reserved.</p>
        <div className="bottom-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Our Clients</a>
          <a href="#">Careers</a>
          <a href="#">Quality Policy</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
