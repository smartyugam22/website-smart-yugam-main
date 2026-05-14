import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/img_logo.png';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerBooking = (program = '') => {
    window.dispatchEvent(new CustomEvent('open-booking', { detail: { program } }));
  };

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Hall of Fame', path: '/hall-of-fame' },
    { name: 'Events', path: '/events' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`header-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Smart Yugam Academy" />
          <div className="nav-logo-text">
            Smart Yugam Academy
            <span>ISO 9001:2015 Certified</span>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="nav-links-desktop">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <div className="nav-actions">
          <button onClick={() => triggerBooking()} className="nav-cta">
            Book Free Demo
            <ArrowRight size={16} />
          </button>
          
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="nav-links-mobile">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button onClick={() => { setIsOpen(false); triggerBooking(); }} className="mobile-cta">
                  Book Free Demo
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .header-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 10000;
          height: 90px; transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          display: flex; align-items: center;
        }
        .header-nav.scrolled {
          height: 80px;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
        }
        .nav-container {
          width: 90%; max-width: 1400px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
        }
        
        .nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .nav-logo img { height: 44px; width: auto; transition: .3s; }
        .header-nav.scrolled .nav-logo img { height: 38px; }
        .nav-logo-text { font-family: 'Playfair Display', serif; font-size: 0.9rem; font-weight: 800; color: var(--maroon); line-height: 1.1; }
        .nav-logo-text span { display: block; font-size: 0.45rem; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 750; color: var(--gold); letter-spacing: 1.2px; margin-top: 2px; text-transform: uppercase; }
        
        .nav-links-desktop { display: flex; gap: 1.8rem; list-style: none; margin: 0 1.5rem; }
        .nav-links-desktop a { 
          text-decoration: none; 
          color: var(--maroon); 
          font-weight: 750; 
          font-size: 0.9rem; 
          transition: 0.3s; 
          padding: 0.5rem 0;
          position: relative;
          white-space: nowrap;
        }
        .nav-links-desktop a::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px;
          background: var(--maroon); transition: 0.3s;
        }
        .nav-links-desktop a:hover, .nav-links-desktop a.active { color: var(--maroon); }
        .nav-links-desktop a.active::after { width: 100%; }
        
        .nav-actions { display: flex; align-items: center; gap: 1.5rem; }
        .nav-cta { 
          background: var(--gold); 
          color: var(--maroon) !important; padding: 0.8rem 1.6rem; border-radius: 50px; 
          text-decoration: none; font-weight: 850; 
          font-size: 0.8rem; transition: 0.4s; display: flex; align-items: center; gap: 0.6rem;
          box-shadow: 0 8px 25px rgba(245,180,0,0.25);
          border: 2px solid var(--maroon);
        }
        .nav-cta:hover { 
          background: var(--maroon); 
          color: var(--gold) !important; 
          transform: translateY(-2px); 
          box-shadow: 0 12px 30px rgba(139,28,61,0.35); 
        }
        
        .hamburger { display: none; background: none; border: none; color: var(--maroon); cursor: pointer; padding: 5px; }
        
        .mobile-menu {
          position: absolute; top: 100%; left: 0; right: 0; 
          background: white; padding: 2rem 5%; border-bottom: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }
        .nav-links-mobile { list-style: none; display: flex; flex-direction: column; gap: 1.5rem; }
        .nav-links-mobile a { 
          text-decoration: none; color: var(--text); 
          font-weight: 800; font-size: 1.2rem; display: block;
          transition: 0.3s;
        }
        .nav-links-mobile a.active { color: var(--maroon); padding-left: 10px; border-left: 4px solid var(--maroon); }
        .mobile-cta { 
          background: var(--gold); color: var(--maroon); padding: 0.8rem; 
          border-radius: 12px; text-align: center; margin-top: 1rem;
          font-weight: 850; font-size: 0.95rem;
        }

        @media(max-width: 1024px) {
          .hamburger { display: block; }
          .nav-logo-text { font-size: 0.8rem; }
        }
      `}</style>
    </nav>
  );
};

export default Header;