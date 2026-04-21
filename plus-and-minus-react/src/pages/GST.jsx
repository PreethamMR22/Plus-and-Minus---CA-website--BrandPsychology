import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './GST.css';

const GST = () => {
  return (
    <div className="gst-page">
      {/* Hero Section */}
      <section className="gst-hero">
        <div className="gst-hero-content">
          <h1>GST Compliance, <span>Simplified</span></h1>
          <p>
            Complete GST support, from registration to monthly and annual filings. 
            Avoid penalties, claim the right ITC, and run your business without compliance worries.
          </p>
          <div className="gst-hero-features">
            <div className="feature-item">
              <span className="feature-text">100% Compliance</span>
            </div>
            <div className="feature-item">
              <span className="feature-text">On-Time Filing</span>
            </div>
            <div className="feature-item">
              <span className="feature-text">GST Expert Support</span>
            </div>
          </div>
          <div className="gst-hero-buttons">
            <Link to="/contact" className="btn-talk-expert">
              Talk to an Expert
            </Link>
          </div>
        </div>
        <div className="gst-hero-image">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="GST Professional" />
        </div>
      </section>

      {/* GST Solutions Section */}
      <section className="gst-solutions-section">
        <h2>Your End-to-End GST Solution</h2>
        <p className="gst-solutions-subtitle">
          We provide a comprehensive suite of services to cover your entire GST journey.
        </p>

        <div className="gst-cards-container">
          {/* GST Registration Card */}
          <div className="gst-card">
            <h3>GST Registration</h3>
            <div className="services-included">
              <h4>Services Included</h4>
              <ul>
                <li>GST Registration Support</li>
                <li>GST Certificate</li>
                <li>Dedicated Accountant</li>
                <li>GSTR-1 Monthly Filing</li>
                <li>GSTR-3B Monthly Filing</li>
              </ul>
            </div>
          </div>

          {/* GST Monthly Filing Card */}
          <div className="gst-card">
            <h3>GST Monthly Filing</h3>
            <div className="services-included">
              <h4>Services Included</h4>
              <ul>
                <li>GSTR-1 Monthly Filing</li>
                <li>GSTR-3B Monthly Filing</li>
                <li>Dedicated Accountant</li>
                <li>Input Tax Credit Optimization</li>
                <li>Compliance Monitoring</li>
              </ul>
            </div>
          </div>

          {/* GST Annual Return Filing Card */}
          <div className="gst-card">
            <h3>GST Annual Return Filing</h3>
            <div className="services-included">
              <h4>Services Included</h4>
              <ul>
                <li>GSTR-9 Annual Return</li>
                <li>GSTR-9C Reconciliation</li>
                <li>Dedicated Accountant</li>
                <li>Financial Data Analysis</li>
                <li>Annual Compliance Review</li>
              </ul>
            </div>
          </div>

          {/* GST LUT Form Filing Card */}
          <div className="gst-card">
            <h3>GST LUT form filing</h3>
            <div className="services-included">
              <h4>Services Included</h4>
              <ul>
                <li>LUT Application Filing</li>
                <li>Export Documentation</li>
                <li>Dedicated Accountant</li>
                <li>Bond Filing Support</li>
                <li>Compliance Verification</li>
              </ul>
            </div>
          </div>

          {/* GST Amendment Card */}
          <div className="gst-card">
            <h3>GST Amendment</h3>
            <div className="services-included">
              <h4>Services Included</h4>
              <ul>
                <li>Core Business Details Amendment</li>
                <li>Business Addition/Deletion</li>
                <li>Dedicated Accountant</li>
                <li>Document Preparation</li>
                <li>Application Filing</li>
              </ul>
            </div>
          </div>

          {/* GST Revocation Card */}
          <div className="gst-card">
            <h3>GST Revocation</h3>
            <div className="services-included">
              <h4>Services Included</h4>
              <ul>
                <li>Revocation Application Filing</li>
                <li>Notice Response Support</li>
                <li>Dedicated Accountant</li>
                <li>Documentation Assistance</li>
                <li>Follow-up with Authorities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GST;
