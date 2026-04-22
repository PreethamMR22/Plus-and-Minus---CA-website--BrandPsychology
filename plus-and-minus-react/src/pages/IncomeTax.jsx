import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import BeyondFiling from '../components/BeyondFiling';
import TaxOverpaySection from '../components/TaxOverpaySection';
import './IncomeTax.css';

const IncomeTax = () => {
  return (
    <div className="income-tax-page">
      {/* Hero Section */}
      <section className="income-tax-hero">
        <div className="income-tax-hero-content">
          <div className="hero-tag">Income Tax Services</div>
          <h1>Income Tax <span>Filing</span> Done for You</h1>
          <h2><span>Easy</span> - <span style={{color: 'var(--white)'}}>Expert</span> - <span>Online</span></h2>
          <p>
            Whether you are a salaried employee, freelancer, business owner, or have multiple incomes, filing your ITR on time is important to follow India's tax laws and avoid penalties.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              File Your Taxes Now
            </Link>
          </div>
          
          <div className="hero-features">
            <div className="hero-feature">
              <span className="hero-feature-icon">✓</span>
              <span>Maximum Tax Savings</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">✓</span>
              <span>Expert CA Guidance</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">✓</span>
              <span>100% Compliance Assured</span>
            </div>
          </div>
        </div>
        
        <div className="income-tax-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Income Tax Services" 
          />
          <div className="image-overlay-card">
            <p className="overlay-title">TAX SAVINGS</p>
            <p className="overlay-text">Save up to ₹50,000 with expert tax planning</p>
          </div>
        </div>
      </section>

      {/* File ITR in 3 Easy Steps Section */}
      <section className="file-itr-steps">
        <div className="file-itr-steps-content">
          <h2>File your ITR in three easy steps</h2>
          <p className="subtitle">Pay only after you file. No upfront charges, no surprises.<br/>Just expert guidance at every step.</p>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Get Started</h3>
              <p>Connect with us via WhatsApp, email, or request a callback. Our team will guide you through sharing the necessary documents for a smooth ITR filing process.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Expert Review</h3>
              <p>Our tax experts will review your details and prepare a clear tax computation. We'll compare both old and new tax regimes and suggest the option that saves the most.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Approve & File</h3>
              <p>Once you approve the tax computation, our experts will file your ITR and provide the acknowledgment. Pay only after filing. Done!</p>
            </div>
          </div>
          <Link to="/contact" className="btn btn-primary">
            File ITR now
          </Link>
        </div>
      </section>

      {/* Who Needs to File ITR Section */}
      <section className="who-needs-to-file">
        <div className="who-needs-to-file-content">
          <h2>Who Needs to File an ITR?</h2>
          <p className="description">
            Whether you're a salaried individual, a freelancer, or a small business owner, our experts are here to guide you through every step of the tax filing process.
          </p>
          
          <div className="main-image-container">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Tax professional working" 
              className="main-image"
            />
            <div className="image-overlay-text">
              <p>For Tax payers with a salary income from a single or multiple sources</p>
            </div>
          </div>
          
          <div className="category-buttons">
            <button className="category-btn active">Salaried</button>
            <button className="category-btn">Freelancer</button>
            <button className="category-btn">Trader</button>
            <button className="category-btn">Business</button>
            <button className="category-btn">NRI Filing</button>
          </div>
        </div>
      </section>

      {/* Never Miss a Tax Deadline Section */}
      <section className="never-miss-deadline">
        <div className="never-miss-deadline-content">
          <h2>Never Miss a Tax Deadline.</h2>
          <p className="subtitle">We help you file on time, every time.</p>
          
          <div className="deadline-content">
            <div className="deadline-image-section">
              <div className="deadline-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Person relaxing with laptop" 
                  className="deadline-image"
                />
                <div className="deadline-image-overlay">
                  <h4>Say goodbye to tax season stress.</h4>
                  <p>We will file your taxes on time and accurately.</p>
                </div>
              </div>
            </div>
            
            <div className="deadline-cards">
              <div className="deadline-card">
                <div className="card-header">
                  <h3>Individuals</h3>
                  <div className="deadline-date">
                    <span className="date-label">Deadline</span>
                    <span className="date-value">July 31st, 2026</span>
                  </div>
                </div>
                <div className="card-details">
                  <div className="detail-item">
                    <span className="detail-label">ITR-1 / ITR-2</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Salary / capital gains</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">No Business</span>
                  </div>
                </div>
              </div>
              
              <div className="deadline-card">
                <div className="card-header">
                  <h3>Business / Professionals</h3>
                  <div className="deadline-date">
                    <span className="date-label">Deadline</span>
                    <span className="date-value">August 31st, 2026</span>
                  </div>
                </div>
                <div className="card-details">
                  <div className="detail-item">
                    <span className="detail-label">ITR-3 / ITR-4</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Freelancers, small business owners</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">No Audit</span>
                  </div>
                </div>
              </div>
              
              <div className="deadline-card">
                <div className="card-header">
                  <h3>Partnership Firms / LLPs</h3>
                  <div className="deadline-date">
                    <span className="date-label">Deadline</span>
                    <span className="date-value">August 31st, 2026</span>
                  </div>
                </div>
                <div className="card-details">
                  <div className="detail-item">
                    <span className="detail-label">ITR-5</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Freelancers, small business owners</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">No Audit</span>
                  </div>
                </div>
              </div>
              
              <div className="deadline-card">
                <div className="card-header">
                  <h3>Companies & Audit Cases</h3>
                  <div className="deadline-date">
                    <span className="date-label">Deadline</span>
                    <span className="date-value">October 31st, 2026</span>
                  </div>
                </div>
                <div className="card-details">
                  <div className="detail-item">
                    <span className="detail-label">ITR-6</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Private Limited companies</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Tax Audit ( Section 44AB )</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <BeyondFiling />
      <TaxOverpaySection />
      
    </div>
  );
};

export default IncomeTax;
