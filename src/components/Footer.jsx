import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              Sage<span>conz</span>
            </Link>
            <p>Premium educational solutions and tailored corporate training for the modern world.</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/sectors">Sectors</Link></li>
              <li><Link to="/clients">Clients</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: info@sageconz.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sageconz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
