import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img_logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="Smart Yugam Academy Logo" />
      </div>
      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', marginBottom: '.5rem' }}>
        Smart Yugam Academy
      </p>
      <p>Beyond Book Education</p>
      <p style={{ marginTop: '.5rem' }}>
        <a href="tel:+918248553958">+91 824 855 3958</a> | <a href="mailto:smartyugamacademy@gmail.com">smartyugamacademy@gmail.com</a>
      </p>
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/hall-of-fame">Hall of Fame</Link>
        <Link to="/programs">For Schools</Link>
        <Link to="/events">Events</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer-copy">
        <p>© 2026 Smart Yugam Academy. ISO 9001:2015 Certified. Chennai & Coimbatore.</p>
      </div>

      <style jsx>{`
        footer { background: #0d0d1a; color: rgba(255,255,255,0.8); padding: 50px 5% 20px; text-align: center; }
        .footer-logo { margin-bottom: 1rem; }
        .footer-logo img { height: 80px; filter: none; opacity: 1; }
        footer p { font-size: .85rem; margin-bottom: .5rem; }
        footer a { color: var(--gold); text-decoration: none; }
        .footer-links { display: flex; justify-content: center; gap: 2rem; margin: 1.5rem 0; flex-wrap: wrap; }
        .footer-links a { color: rgba(255,255,255,0.9); text-decoration: none; font-size: .82rem; transition: .2s; }
        .footer-links a:hover { color: var(--gold); }
        .footer-copy { border-top: 1px solid rgba(255,255,255,0.08); margin-top: 2rem; padding-top: 1.5rem; font-size: .78rem; opacity: .5; }
      `}</style>
    </footer>
  );
};

export default Footer;
