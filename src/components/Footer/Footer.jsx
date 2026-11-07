import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer reveal-on-scroll reveal-fade-up">
      <div className="container footer-grid">
        {/* Brand Summary */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-circle">K</span>
            <span className="footer-logo-text">Kalam Seva Samithi</span>
          </Link>
          <p className="footer-description">
            Serving humanity through compassion, education, and community service. Beginning its journey in 2015 and officially registered in 2016, APJ Abdul Kalam Seva Samithi is dedicated to promoting Dr. Kalam's vision for youth, literacy, and community care.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-col">
          <h3 className="footer-col-title">Quick Links</h3>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/founder">The Founder</Link></li>
            <li><Link to="/initiatives">Our Initiatives</Link></li>
            <li><Link to="/gallery">Photo Gallery</Link></li>
            <li><Link to="/awards">Awards & Honors</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
            <li><a href="https://wa.me/919876543210?text=Hello%21%20I%20would%20like%20to%20support%20APJ%20Abdul%20Kalam%20Seva%20Samithi.%20Could%20you%20please%20guide%20me%20on%20how%20I%20can%20contribute%3F" target="_blank" rel="noopener noreferrer">Donate Support</a></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact-col">
          <h3 className="footer-col-title">Contact Info</h3>
          <ul className="footer-contact-list">
            <li>
              <Phone size={16} className="contact-icon" />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li>
              <Mail size={16} className="contact-icon" />
              <a href="mailto:contact@kalamsevasamithi.org" className="break-word">contact@kalamsevasamithi.org</a>
            </li>
            <li>
              <MapPin size={16} className="contact-icon shrink-0" />
              <span>Kalam Bhavan, Main Road, Andhra Pradesh, India</span>
            </li>
          </ul>
        </div>

        {/* Map Embed */}
        <div className="footer-map-col">
          <h3 className="footer-col-title">Find Us</h3>
          <div className="footer-map-container">
            <iframe 
              title="APJ Abdul Kalam Seva Samithi Map Location" 
              src="https://www.openstreetmap.org/export/embed.html?bbox=80.6%2C16.5%2C80.7%2C16.6&layer=mapnik" 
              className="footer-map-iframe"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>© 2016 - {currentYear} APJ Abdul Kalam Seva Samithi. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Inspired by Dr. A.P.J. Abdul Kalam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
