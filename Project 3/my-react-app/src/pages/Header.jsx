import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header(){
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <nav>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>

        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link></li>
          <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
        </ul>
        <div className="logo" onClick={handleLogoClick}>
          <img src="src/images/Cat_logo_v2.png" alt="Logo" />
        </div>
      </nav>
    </>
  );
}

export default Header;
