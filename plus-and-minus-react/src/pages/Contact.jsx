import { useState } from 'react';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="section-content">
          <div className="section-tag">Get In Touch</div>
          <h1>Let's Plus and Minus</h1>
          <p>Whether you have a question or need expert advice — we're here to help.</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-grid">
        <div className="contact-info">
          <h2>How to reach us</h2>
          <p>Connect with us via WhatsApp, email, or request a callback. Our team will get in touch quickly.</p>
          
          <div className="contact-item">
            <div className="contact-item-icon">📞</div>
            <div>
              <div className="contact-item-label">Call Us</div>
              <div className="contact-item-val">+91 7204403746</div>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-item-icon">✉️</div>
            <div>
              <div className="contact-item-label">Email Us</div>
              <div className="contact-item-val">support@plusandminus.in</div>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-item-icon">📍</div>
            <div>
              <div className="contact-item-label">Location</div>
              <div className="contact-item-val">Bengaluru</div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name <span>*</span></label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email <span>*</span></label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>Service of Interest</label>
              <select name="service" value={formData.service} onChange={handleChange}>
                <option>Select a service</option>
                <option>Personal Tax</option>
                <option>Corporate Tax</option>
                <option>Accounts & Business Advisory</option>
                <option>Audit</option>
                <option>Corporate Finance</option>
                <option>R&D Tax</option>
                <option>VAT</option>
                <option>Payroll</option>
                <option>Employment Tax</option>
                <option>Entrepreneurial Tax</option>
              </select>
            </div>
            
            
            <Button type="submit" variant="form" className="btn-form">
              Send Message
            </Button>
          </form>
          <div className="form-note">We respect your privacy. Your information is never shared.</div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
