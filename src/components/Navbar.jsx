import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showNavbar) return null;

  return (
    <nav className="navbar custom-navbar fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand nav-names" href="#">D &amp; B</a>
        <ul className="navbar-nav ms-auto flex-row gap-3">
          <li className="nav-item">
            <a className="nav-link" href="#groom-bride">Groom &amp; Bride</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#our-story">Our Story</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#when-where">When &amp; Where</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#rsvp">RSVP</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#gallery">Gallery</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
