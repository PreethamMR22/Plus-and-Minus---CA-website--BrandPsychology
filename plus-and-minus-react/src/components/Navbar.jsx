import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

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
        <div className="nav-dropdown">
          <button className="nav-link" id="nav-services">
            Our Services ▾
          </button>
          <div className="nav-dropdown-menu">
            <Link to="/services" className="nav-dropdown-item">All Services</Link>
            <Link to="/services/accounts" className="nav-dropdown-item">Accounts & Business Advisory</Link>
            <Link to="/services/audit" className="nav-dropdown-item">Audit</Link>
            <Link to="/services/corporate-finance" className="nav-dropdown-item">Corporate Finance</Link>
            <Link to="/services/corporporate-tax" className="nav-dropdown-item">Corporate Tax</Link>
            <Link to="/services/employment-tax" className="nav-dropdown-item">Employment Tax</Link>
            <Link to="/services/entrepreneurial-tax" className="nav-dropdown-item">Entrepreneurial Tax</Link>
            <Link to="/services/payroll" className="nav-dropdown-item">Payroll</Link>
            <Link to="/services/personal-tax" className="nav-dropdown-item">Personal Tax</Link>
            <Link to="/services/rd-tax" className="nav-dropdown-item">R&D Tax</Link>
            <Link to="/services/vat" className="nav-dropdown-item">VAT</Link>
          </div>
        </div>
        <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
          About Us
        </Link>
        <Link to="/pricing" className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}>
          Pricing
        </Link>
        <Link to="/careers" className={`nav-link ${isActive('/careers') ? 'active' : ''}`}>
          Careers
        </Link>
      </div>
      
      <div className="nav-actions">
        <Link to="/contact" className="btn-outline">Let's Talk</Link>
        <Link to="/contact" className="btn-primary">Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbar;
