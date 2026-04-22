import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';
import Modal from '../components/Modal';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', ''
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Get environment variables
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      // Validate environment variables
      if (!publicKey || !serviceId || !templateId) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        to_email: 'support@plusandminus.in', // Your receiving email
        message: `New contact form submission from Plus and Minus website.\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}`
      };

      // Send email
      const response = await emailjs.send(serviceId, templateId, templateParams);
      
      if (response.status === 200) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setShowModal(true);
    }
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
            
            
            <Button 
              type="submit" 
              variant="form" 
              className="btn-form"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
          
          <div className="form-note">We respect your privacy. Your information is never shared.</div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={submitStatus === 'success' ? 'Message Sent Successfully!' : 'Message Not Sent'}
        type={submitStatus === 'success' ? 'success' : 'error'}
      >
        {submitStatus === 'success' ? (
          <p>
            Thank you for contacting us! Your message has been sent successfully and we'll get back to you soon.
            If you have any urgent questions, feel free to call us directly at +91 7204403746.
          </p>
        ) : (
          <p>
            Oops! Something went wrong while sending your message. Please try again or contact us directly at 
            <a href="mailto:support@plusandminus.in" style={{ color: 'var(--green)', textDecoration: 'none' }}>
              {' '}support@plusandminus.in
            </a>
            {' '}or call us at +91 7204403746.
          </p>
        )}
      </Modal>

    </div>
  );
};

export default Contact;
