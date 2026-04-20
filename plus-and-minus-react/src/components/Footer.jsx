import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="nav-logo">
            <div className="nav-logo-icon">
              <span>±</span>
            </div>
            <div className="nav-logo-text" style={{color: 'var(--white)'}}>
              Plus & Minus
              <small style={{color: 'rgba(255,255,255,0.4)'}}>ACCOUNTANTS & ADVISERS</small>
            </div>
          </Link>
          <p>We work with numbers. But for people. Innovation with experience on its side — helping you achieve financial freedom in the age of AI.</p>
          <div className="footer-socials">
            <div className="social-btn">in</div>
            <div className="social-btn">𝕏</div>
            <div className="social-btn">f</div>
            <div className="social-btn">📷</div>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Our Services</h4>
          <Link to="/services/accounts">Accounts & Business Advisory</Link>
          <Link to="/services/audit">Audit</Link>
          <Link to="/services/corporporate-finance">Corporate Finance</Link>
          <Link to="/services/corporate-tax">Corporate Tax</Link>
          <Link to="/services/employment-tax">Employment Tax</Link>
        </div>
        
        <div className="footer-col">
          <h4>More Services</h4>
          <Link to="/services/entrepreneurial-tax">Entrepreneurial Tax</Link>
          <Link to="/services/payroll">Payroll</Link>
          <Link to="/services/personal-tax">Personal Tax</Link>
          <Link to="/services/rd-tax">R&D Tax</Link>
          <Link to="/services/vat">VAT</Link>
          <Link to="/about">About Us</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/careers">Careers</Link>
        </div>
        
        <div className="footer-col">
          <h4>Contact Us</h4>
          <div className="footer-contact-item">
            <span>✉️</span>
            <span>hello@yearend.in</span>
          </div>
          <div className="footer-contact-item">
            <span>📞</span>
            <span>+91 98765 43210</span>
          </div>
          <div className="footer-contact-item">
            <span>📍</span>
            <span>Mumbai | Bangalore | Delhi NCR</span>
          </div>
          <div className="footer-available-via">
            <p>Available via</p>
            <div className="available-via-buttons">
              <div className="available-via-button whatsapp">
                <span>WhatsApp</span>
              </div>
              <div className="available-via-button email">
                <span>Email</span>
              </div>
              <div className="available-via-button callback">
                <span>Callback</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 Plus And Minus Accountants & Advisers. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
