import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link to="/" className="nav-logo">
        <div className="nav-logo-icon">
          <span>±</span>
        </div>
        <div className="nav-logo-text">
          Plus <span>&</span> Minus
          <small>ACCOUNTANTS & ADVISERS</small>
        </div>
      </Link>
      
      <div className="nav-links">
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
          Home
        </Link>
        <div className="nav-dropdown">
          <button className="nav-link" id="nav-services">
            Services ▾
          </button>
          <div className="nav-dropdown-menu">
            <Link to="/services/startup" className="nav-dropdown-item">Startup</Link>
            <Link to="/services/income-tax" className="nav-dropdown-item">Income tax filing</Link>
            <Link to="/services/gst" className="nav-dropdown-item">GST</Link>
            <Link to="/services/registrations" className="nav-dropdown-item">Registrations</Link>
            <Link to="/services/accounting" className="nav-dropdown-item">Accounting</Link>
            <div className="nav-dropdown-spacer"></div>
            <div className="nav-dropdown-spacer"></div>
            <div className="nav-dropdown-spacer"></div>
            <div className="nav-dropdown-spacer"></div>
            <div className="nav-dropdown-spacer"></div>
            <div className="nav-dropdown-spacer"></div>
          </div>
        </div>
        <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
          About
        </Link>
        <Link to="/learn" className={`nav-link ${isActive('/learn') ? 'active' : ''}`}>
          Learn
        </Link>
        <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
          Contact
        </Link>
      </div>
      
      <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className="nav-actions">
        <Link to="/contact" className="btn-primary">Get Started</Link>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <div className="mobile-nav-dropdown">
            <div className="mobile-nav-link">Services</div>
            <div className="mobile-nav-submenu">
              <Link to="/services/startup" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>Startup</Link>
              <Link to="/services/income-tax" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>Income tax filing</Link>
              <Link to="/services/gst" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>GST</Link>
              <Link to="/services/registrations" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>Registrations</Link>
              <Link to="/services/accounting" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>Accounting</Link>
            </div>
          </div>
          <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/learn" className={`mobile-nav-link ${isActive('/learn') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            Learn
          </Link>
          <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
          <div className="mobile-nav-actions">
            <Link to="/contact" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
