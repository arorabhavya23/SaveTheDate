import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!showNavbar) return null;

  return (
    <nav className="navbar custom-navbar fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand nav-names" href="#">D &amp; B</a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon">&#9776;</span>
        </button>
        <ul className={`navbar-nav ms-auto flex-row gap-3 nav-links${menuOpen ? ' open' : ''}`}>
          <li className="nav-item">
            <a className="nav-link" href="#groom-bride" onClick={() => setMenuOpen(false)}>Groom &amp; Bride</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#our-story" onClick={() => setMenuOpen(false)}>Our Story</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#when-where" onClick={() => setMenuOpen(false)}>When &amp; Where</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#rsvp" onClick={() => setMenuOpen(false)}>RSVP</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
