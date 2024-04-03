// Footer.js
import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        Footer Logo
      </div>
      <div className="footer-text">
        <p>
          Zlet Ai is a free online platform that offers a diverse range of tools for personal, professional, and business needs. From PDF tools to image manipulators, calculators, AI generative content, video enhancements, developer tools.
        </p>
        <p>
          Follow Us
        </p>
        <div className="primary-menu">
          <p>Primary Menu</p>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
        <div className="secondary-menu">
          <p>Secondary Menu</p>
          <ul>
            <li>Blog</li>
            <li>Sitemap</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Developed By Zlet AI With ❤️ from 🇮🇳 | © 2024 Zlet AI. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
