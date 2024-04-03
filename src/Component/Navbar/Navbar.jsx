import React, { useState } from 'react';
import './Navbar.css'; // Import CSS file for styling
import logo from '../../images.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="footer-content">
  <div className="logo">
    <img src={logo} alt="Logo" />
  </div>
    <div className="subscription">
      <button className="subscribe-btn">Subscribe</button>
    </div>
    <div className="Sponsor">
      <button className="Sponsor-btn">Sponsor Us</button>
    </div>
</div>
      <button className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li className="current"><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
