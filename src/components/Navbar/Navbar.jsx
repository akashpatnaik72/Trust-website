import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import Button from '../Shared/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Founder', path: '/founder' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Awards', path: '/awards' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Contact', path: '/contact' }
  ];

  const isSolid = location.pathname !== '/' || isScrolled;

  return (
    <nav className={`navbar ${isSolid ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo-link" aria-label="APJ Abdul Kalam Seva Samithi Home">
          <div className="navbar-logo-circle">K</div>
          <div className="navbar-logo-text">
            <span className="logo-title">Kalam Seva Samithi</span>
            <span className="logo-subtitle">APJ Abdul Kalam Seva Samithi</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="navbar-desktop-links">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`navbar-link ${isActive ? 'navbar-link-active' : ''}`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <a href="https://wa.me/919876543210?text=Hello%21%20I%20would%20like%20to%20support%20APJ%20Abdul%20Kalam%20Seva%20Samithi.%20Could%20you%20please%20guide%20me%20on%20how%20I%20can%20contribute%3F" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="btn-sm" icon={<Heart size={14} fill="currentColor" />}>
              Donate
            </Button>
          </a>
        </div>

        {/* Hamburger Mobile Toggle */}
        <button 
          className="navbar-mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="navbar-mobile-menu">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`navbar-mobile-link ${isActive ? 'navbar-mobile-link-active' : ''}`}
              >
                {link.name}
              </Link>
            );
          })}
          <div style={{ padding: '16px 20px' }}>
            <a href="https://wa.me/919876543210?text=Hello%21%20I%20would%20like%20to%20support%20APJ%20Abdul%20Kalam%20Seva%20Samithi.%20Could%20you%20please%20guide%20me%20on%20how%20I%20can%20contribute%3F" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%' }}>
              <Button variant="primary" className="btn-full" style={{ width: '100%' }} icon={<Heart size={16} fill="currentColor" />}>
                Donate
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
