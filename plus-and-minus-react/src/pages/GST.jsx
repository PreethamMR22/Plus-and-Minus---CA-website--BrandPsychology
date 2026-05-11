import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './GST.css';

const GST = () => {
  return (
    <div className="gst-page">
      {/* Hero Section */}
      <section className="hero gst-hero">
        <div className="hero-content">
          <h1>GST Compliance,<br /><span>Simplified.</span></h1>
          <p>
            Complete GST support, from registration to monthly and<br />
            annual filings. We handle your GST end to end. Zero<br />
            penalties. Every time.
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-text">3-7 day registration</span>
            </div>
            <div className="feature-item">
              <span className="feature-text">GST Expert Support</span>
            </div>
            <div className="feature-item">
              <span className="feature-text">On-Time Filing</span>
            </div>
            <div className="feature-item">
              <span className="feature-text">100% Compliance</span>
            </div>
          </div>
          <div className="hero-btns">
            <Button to="/contact" variant="hero-primary" size="large">
              Talk to an Expert  {' ->'}
            </Button>
            <Button onClick={() => window.open('https://wa.me/917204403746', '_blank')} variant="hero-outline" size="large">
              WhatsApp Us Now 
            </Button>
          </div>
          <div className="hero-stats">
            <span>150+ Google Reviews</span>
            <span className="bullet">•</span>
            <span>Serving Bengaluru since 2020</span>
            <span className="bullet">•</span>
            <span>500+ clients</span>
          </div>
        </div>
        
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="GST Professional" 
          />
        </div>
      </section>

      {/* GST Solutions Section */}
      <section className="gst-solutions-section">
        <h2>Your End-to-End GST Solution</h2>
        <p className="gst-solutions-subtitle">
          Everything you need for hassle-free GST registration and ongoing tax compliance management.
        </p>

        <div className="gst-cards-container">
          {/* GST Registration Card */}
          <div className="gst-card">
            <h3>GST Registration</h3>
            <p>Get your GSTIN quickly. We manage the entire application.</p>
          </div>

          {/* GST Monthly Filing Card */}
          <div className="gst-card">
            <h3>GST Monthly Filing</h3>
            <p>Filed on time, every month. You never miss a deadline.</p>
          </div>

          {/* GST Annual Return Filing Card */}
          <div className="gst-card">
            <h3>GST Annual Return Filing</h3>
            <p>Year-end data matched, reviewed and filed correctly.</p>
          </div>

          {/* GST Advisory Card */}
          <div className="gst-card">
            <h3>GST Advisory</h3>
            <p>Claim every rupee of ITC you're owed. Reduce your tax outflow.</p>
          </div>

          {/* GST LUT Form Filing Card */}
          <div className="gst-card">
            <h3>GST LUT form filing</h3>
            <p>Export without paying IGST. We file your LUT end to end.</p>
          </div>

          {/* GST Amendment Card */}
          <div className="gst-card">
            <h3>GST Amendment</h3>
            <p>Address, partners, directors changed? We update your registration.</p>
          </div>
        </div>
        
        <div className="gst-solutions-cta">
          <Button to="/contact" variant="hero-primary" size="large">
            Talk to an Expert →
          </Button>
        </div>
      </section>

      {/* GST Business Types Section */}
      <section className="gst-business-types">
        <h2>We handle GST for every kind of business.</h2>
        <div className="business-type-cards">
          <div className="business-type-card" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}>
            <div className="business-type-content">
              <h3>Startups</h3>
              <p>Set up compliance from day one. Scale without surprises.</p>
            </div>
          </div>
          <div className="business-type-card" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}>
            <div className="business-type-content">
              <h3>Real Estate</h3>
              <p>GST in real estate is complex. We make it simple.</p>
            </div>
          </div>
          <div className="business-type-card" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}>
            <div className="business-type-content">
              <h3>E Commerce</h3>
              <p>Multiple platforms, constant reconciliation - we bring clarity.</p>
            </div>
          </div>
          <div className="business-type-card" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}>
            <div className="business-type-content">
              <h3>Exports</h3>
              <p>LUT, filings, refunds - handled. Export without GST stress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* We Take It Off Your Plate Section */}
      <section className="take-off-plate-section">
        <div className="take-off-plate-header">
          <h2>We take it off your plate. Completely.</h2>
        </div>
        <div className="take-off-plate-container">
          <div className="take-off-plate-left">
            <div className="take-off-plate-cards">
              <div className="take-off-plate-card">
                <h3>We get you registered or take over your existing GST</h3>
                <p>Share your details. We handle registration or pick up where you left off.</p>
              </div>
              <div className="take-off-plate-card">
                <h3>We file every month. You do nothing.</h3>
                <p>GSTR-1 and 3B filed on time, every month. ITC reconciled and maximised.</p>
              </div>
              <div className="take-off-plate-card">
                <h3>You get zero notices. Zero penalties.</h3>
                <p>Annual returns filed, amendments handled, LUT managed - all of it, covered.</p>
              </div>
            </div>
          </div>
          <div className="take-off-plate-right">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Professional barista" 
            />
          </div>
        </div>
      </section>

      {/* Why Plus & Minus Section */}
      <section className="why-plus-minus-section">
        <div className="why-plus-minus-container">
          <h2>Why Plus & Minus</h2>
          <div className="why-plus-minus-cards">
            <div className="why-plus-minus-card">
              <h3>You never miss a deadline.</h3>
              <p>We file before the due date. Always. No chasing, no reminders needed from your side.</p>
            </div>
            <div className="why-plus-minus-card">
              <h3>You keep every rupee of ITC.</h3>
              <p>We reconcile your purchases and claim every Input Tax Credit you're legally entitled to.</p>
            </div>
            <div className="why-plus-minus-card">
              <h3>You're never alone with a notice.</h3>
              <p>Got a GST notice? We handle it. Amendments, clarifications, follow-ups - all on us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-gst-section">
        <div className="contact-us-gst-container">
          <div className="contact-us-gst-content">
            <h2>Got a GST notice? <br /> Behind on filings?</h2>
            <p>Call us right now. We'll sort it out.</p>
            <Link to="/contact" className="contact-us-gst-button">
              Contact Us
            </Link>
          </div>
          <div className="contact-us-gst-image">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Professional working" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GST;
