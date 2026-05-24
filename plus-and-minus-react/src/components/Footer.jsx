import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-brand-text">
            Let's Plus and Minus
          </div>
          <p>We work with numbers. But for people. Innovation with experience on its side — helping you achieve financial freedom in the age of AI.</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/plusandminus.in/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </div>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <Link to="/services/startup">Startup</Link>
          <Link to="/services/income-tax">Income tax filing</Link>
          <Link to="/services/gst">GST</Link>
          <Link to="/services/registrations">Registrations</Link>
          <Link to="/services/accounting">Accounting</Link>
        </div>


        <div className="footer-col">
          <h4>Contact Us</h4>
          <div className="footer-contact-item">
            <span><FontAwesomeIcon icon={faPhone} /></span>
            <span>+91 7204403746</span>
          </div>
          <div className="footer-contact-item">
            <span><FontAwesomeIcon icon={faEnvelope} /></span>
            <span>support@plusandminus.in</span>
          </div>
          <div className="footer-contact-item">
            <span><FontAwesomeIcon icon={faLocationDot} /></span>
            <span>Bengaluru</span>
          </div>
          <div className="footer-available-via">
            <p>Available via</p>
            <div className="available-via-buttons">
              <div className="available-via-button whatsapp" onClick={() => window.open('https://wa.me/917204403746', '_blank')}>
                <span>WhatsApp</span>
              </div>
              <div className="available-via-button email" onClick={() => window.open('mailto:support@plusandminus.in', '_blank')}>
                <span>Email</span>
              </div>
              <div className="available-via-button callback" onClick={() => window.open('tel:+917204403746', '_blank')}>
                <span>Call</span>
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
