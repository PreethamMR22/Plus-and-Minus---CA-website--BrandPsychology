import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import BeyondFiling from '../components/BeyondFiling';
import TaxOverpaySection from '../components/TaxOverpaySection';
import WhatYouGetSection from '../components/WhatYouGetSection';
import ImageContentSection from '../components/ImageContentSection';
import './IncomeTax.css';

const clientsData = [
  'Wipro',
  'Unilever',
  'TCS',
  'Oracle',
  'Mercedes-Benz',
  'DB Schenker',
  'Infosys',
  'IBM',
  'Honeywell',
  'Fidelity'
];

const categoryData = {
  salaried: {
    title: 'Salaried Employees',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overlayText: 'For Tax payers with a salary income from a single or multiple sources'
  },
  freelancer: {
    title: 'Freelancers & Consultants',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overlayText: 'Freelancers, consultants, doctors, lawyers, designers, and other independent professionals.'
  },
  trader: {
    title: 'Stock Market Traders',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overlayText: 'For taxpayers with capital gain from investments in stocks, Mutual funds, F&O, Crypto / VDA assets, etc.'
  },
  business: {
    title: 'Business Owners',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overlayText: ''
  },
  nri: {
    title: 'NRI Tax Filing',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overlayText: 'For Individuals with Foreign income or Foreign assets, or NRI (Non-Resident Indian) or (Resident-not-ordinarily resident)'
  }
};

const IncomeTax = () => {
  const [selectedCategory, setSelectedCategory] = useState('salaried');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="income-tax-page">
      {/* Hero Section */}
      <section className="income-tax-hero">
        <div className="income-tax-hero-content">
          <h1>Income Tax filing done<br />for you <span>easy</span><span>, </span><span>expert</span><span>, </span><br /><span>online</span><span>.</span></h1>
          <p>
            We file your ITR accurately and on time - salaried, freelancer, business, or NRI. 
            You pay only after we're done. Zero upfront.
          </p>
          <p>
            E-file your Income Tax Return (ITR) online quickly and affordably with expert support every step of the way.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              File Your Taxes Now
            </Link>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              WhatsApp Us Now
            </a>
          </div>
          <p className="pay-after-text"><span className="blue-bullet">•</span> Pay after you use</p>
        </div>
        
        <div className="income-tax-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Income Tax Services" 
          />
          <div className="image-overlay-card top-right">
            <p className="overlay-text"><span className="blue-bullet">•</span> Document is submitted</p>
          </div>
          <div className="image-overlay-card middle-right">
            <p className="overlay-text"><span className="blue-bullet">•</span> Ready to Approve</p>
          </div>
          <div className="image-overlay-card">
            <p className="overlay-text"><span className="blue-bullet">•</span> Your ITR is filed</p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="clients-header">
          <p className="clients-tag">Our clients work at top global companies</p>
        </div>
        <div className="clients-grid">
          {clientsData.map((client, index) => (
            <div key={index} className="client-item">
              <span className="client-name">{client}</span>
            </div>
          ))}
        </div>
      </section>

      {/* File ITR in 3 Easy Steps Section */}
      <section className="file-itr-steps">
        <div className="file-itr-steps-content">
          <h2>File your ITR in three easy steps</h2>
          <p className="subtitle">Pay only after you file. No upfront charges, no surprises.<br/>Just expert guidance at every step.</p>
          <div className="steps-container">
            <div className="step-card">
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '16px'}}>
                <div className="step-number">1</div>
                <h3>Get Started</h3>
              </div>
              <p>Connect with us via WhatsApp, email, or request a callback. Our team will guide you through sharing the necessary documents for a smooth ITR filing process.</p>
            </div>
            <div className="step-card">
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '16px'}}>
                <div className="step-number">2</div>
                <h3>Expert Review</h3>
              </div>
              <p>Our tax experts will review your details and prepare a clear tax computation. We'll compare both old and new tax regimes and suggest the option that saves the most.</p>
            </div>
            <div className="step-card">
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '16px'}}>
                <div className="step-number">3</div>
                <h3>Approve & File</h3>
              </div>
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
              src={categoryData[selectedCategory].image} 
              alt={categoryData[selectedCategory].title} 
              className="main-image"
            />
            <div className="image-overlay-text">
              <p>{categoryData[selectedCategory].overlayText}</p>
            </div>
          </div>
          
          <div className="category-buttons">
            <button 
              className={`category-btn ${selectedCategory === 'salaried' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('salaried')}
            >
              Salaried
            </button>
            <button 
              className={`category-btn ${selectedCategory === 'freelancer' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('freelancer')}
            >
              Freelancer
            </button>
            <button 
              className={`category-btn ${selectedCategory === 'trader' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('trader')}
            >
              Trader
            </button>
            <button 
              className={`category-btn ${selectedCategory === 'business' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('business')}
            >
              Business
            </button>
            <button 
              className={`category-btn ${selectedCategory === 'nri' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('nri')}
            >
              NRI Filing
            </button>
          </div>
        </div>
      </section>

      {/* Never Miss a Tax Deadline Section */}
      <section className="never-miss-deadline">
        <div className="never-miss-deadline-content">
          <h3 className="section-subtitle">Tax Deadlines</h3>
          <h2>Never Miss a <span className="blue-text">Tax Deadline</span>.</h2>
          <p className="subtitle" style={{fontSize: '20px', color: 'var(--dark)', fontWeight: '600', marginTop: '5px'}}>We help you file on time, every time.</p>
          
          <div className="deadline-content" style={{display: 'grid', gridTemplateColumns: '0.8fr 2fr', gap: '60px', alignItems: 'center'}}>
            <div className="deadline-image-section" style={{justifySelf: 'start'}}>
              <div className="deadline-image-container" style={{position: 'relative'}}>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Person relaxing with laptop" 
                  className="deadline-image"
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  width: '360px',
                  maxWidth: '90%'
                }}>
                  <h4 style={{margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600', color: 'var(--dark)'}}>Tax season, minus the stress</h4>
                  <p style={{margin: '0', fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.4'}}>We will file your taxes on time and accurately.</p>
                </div>
              </div>
            </div>
            
            <div className="deadline-cards-container" style={{backgroundColor: '#e8e8e8', padding: '30px', borderRadius: '16px', width: '100%', maxWidth: '1600px', margin: '0 auto', alignSelf: 'center'}}>
              <div className="deadline-cards" style={{gap: '40px', justifyContent: 'space-between'}}>
                <div className="deadline-card" style={{padding: '15px', maxWidth: '280px'}}>
                  <div className="card-header" style={{border: 'none', borderBottom: 'none', marginBottom: '8px'}}>
                    <h3 style={{fontSize: '18px', marginBottom: '0'}}>Individuals</h3>
                  </div>
                  <div className="card-details" style={{gap: '2px'}}>
                    <div className="detail-item" style={{padding: '2px 0', margin: '0', border: 'none'}}>
                      <span className="detail-label" style={{padding: '0', margin: '0', border: 'none', color: 'var(--green)', fontWeight: '600'}}>Deadline July 31st, 2026</span>
                    </div>
                    <div className="detail-item" style={{padding: '2px 0', margin: '0', border: 'none'}}>
                      <span className="detail-label" style={{padding: '0', margin: '0', border: 'none', fontSize: '12px'}}>ITR-1 / ITR-2</span>
                    </div>
                    <div className="detail-item" style={{padding: '2px 0', margin: '0', border: 'none'}}>
                      <span className="detail-label" style={{padding: '0', margin: '0', border: 'none', fontSize: '12px'}}>Salary / capital gains</span>
                    </div>
                    <div className="detail-item" style={{padding: '2px 0', margin: '0', border: 'none'}}>
                      <span className="detail-label" style={{padding: '0', margin: '0', border: 'none', fontSize: '12px'}}>No Business</span>
                    </div>
                  </div>
                </div>
                
                <div className="deadline-card" style={{padding: '15px', maxWidth: '280px'}}>
                  <div className="card-header" style={{border: 'none', borderBottom: 'none', marginBottom: '8px'}}>
                    <h3 style={{fontSize: '18px', marginBottom: '0'}}>Business / Professionals</h3>
                  </div>
                  <div className="card-details" style={{gap: '2px'}}>
                    <div className="detail-item" style={{padding: '2px 0', margin: '0', border: 'none'}}>
                      <span className="detail-label" style={{padding: '0', margin: '0', border: 'none', color: 'var(--green)', fontWeight: '600'}}>Deadline August 31st, 2026</span>
                    </div>
                    <div className="detail-item" style={{padding: '2px 0', margin: '0', border: 'none'}}>
                      <span className="detail-label" style={{padding: '0', margin: '0', border: 'none', fontSize: '12px'}}>ITR-3 / ITR-4</span>
                    </div>
                    <div className="detail-item" style={{padding: '2px 0', margin: '0', border: 'none'}}>
                      <span className="detail-label" style={{padding: '0', margin: '0', border: 'none', fontSize: '12px'}}>Freelancers, small business owners</span>
                    </div>
                    <div className="detail-item" style={{padding: '2px 0', margin: '0', border: 'none'}}>
                      <span className="detail-label" style={{padding: '0', margin: '0', border: 'none', fontSize: '12px'}}>No Audit</span>
                    </div>
                  </div>
                </div>
                
                <div className="deadline-card" style={{padding: '15px', maxWidth: '280px'}}>
                  <div className="card-header" style={{border: 'none', borderBottom: 'none', marginBottom: '8px'}}>
                    <h3 style={{fontSize: '18px', marginBottom: '0'}}>Partnership Firms / LLPs</h3>
                  </div>
                  <div className="card-details" style={{gap: '2px'}}>
                    <div className="detail-item" style={{padding: '2px 0', margin: '0', border: 'none'}}>
                      <span className="detail-label" style={{padding: '0', margin: '0', border: 'none', color: 'var(--green)', fontWeight: '600'}}>Deadline August 31st, 2026</span>
                    </div>
                    <div className="detail-item" style={{padding: '2px 0', margin: '0', border: 'none'}}>
                      <span className="detail-label" style={{padding: '0', margin: '0', border: 'none', fontSize: '12px'}}>ITR-5</span>
                    </div>
                    <div className="detail-item" style={{padding: '2px 0', margin: '0', border: 'none'}}>
                      <span className="detail-label" style={{padding: '0', margin: '0', border: 'none', fontSize: '12px'}}>Freelancers, small business owners</span>
                    </div>
                    <div className="detail-item" style={{padding: '2px 0', margin: '0', border: 'none'}}>
                      <span className="detail-label" style={{padding: '0', margin: '0', border: 'none', fontSize: '12px'}}>No Audit</span>
                    </div>
                  </div>
                </div>
                
                <div className="deadline-card" style={{padding: '15px', maxWidth: '280px'}}>
                  <div className="card-header" style={{border: 'none', borderBottom: 'none', marginBottom: '8px'}}>
                    <h3 style={{fontSize: '18px', marginBottom: '0'}}>Companies & Audit Cases</h3>
                  </div>
                  <div className="card-details" style={{gap: '2px'}}>
                    <div className="detail-item" style={{padding: '2px 0', margin: '0', border: 'none'}}>
                      <span className="detail-label" style={{padding: '0', margin: '0', border: 'none', color: 'var(--green)', fontWeight: '600'}}>Deadline October 31st, 2026</span>
                    </div>
                    <div className="detail-item" style={{padding: '2px 0', margin: '0', border: 'none'}}>
                      <span className="detail-label" style={{padding: '0', margin: '0', border: 'none', fontSize: '12px'}}>ITR-6</span>
                    </div>
                    <div className="detail-item" style={{padding: '2px 0', margin: '0', border: 'none'}}>
                      <span className="detail-label" style={{padding: '0', margin: '0', border: 'none', fontSize: '12px'}}>Private Limited companies</span>
                    </div>
                    <div className="detail-item" style={{padding: '2px 0', margin: '0', border: 'none'}}>
                      <span className="detail-label" style={{padding: '0', margin: '0', border: 'none', fontSize: '12px'}}>Tax Audit ( Section 44AB )</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missed ITR Filing Deadline Section */}
      <section className="missed-deadline-section">
        <div className="missed-deadline-content">
          <h2>Missed ITR Filing Deadline or Need to Correct Your Return?</h2>
          <div className="missed-deadline-cards">
            <div className="missed-deadline-card">
              <h3>Revised Return Filing</h3>
              <p><span style={{color: 'black'}}>Spotted an error in your ITR?</span><br />File a revised return by 31st December of the relevant assessment year to fix it and avoid issues.</p>
            </div>
            <div className="missed-deadline-card">
              <h3>Belated Return Filing</h3>
              <p><span style={{color: 'black'}}>Missed the 31st July ITR deadline?</span><br />You can still file a belated return by 31st December, but late fees may apply.</p>
            </div>
            <div className="missed-deadline-card">
              <h3>Updated Return Filing (ITR-U)</h3>
              <p><span style={{color: 'black'}}>Missed filing or need to fix your ITR?</span><br />You can file an updated return within four years - our experts will help you do it right.</p>
            </div>
          </div>
        </div>
      </section>

      <BeyondFiling />
      <TaxOverpaySection />
      <WhatYouGetSection />
      <ImageContentSection />

      {/* Ee Sala Strip Section */}
      <section className="ee-sala-strip">
        <div className="ee-sala-content">
          <p>Ee Sala - file without last minute panic. That's the plan.</p>
        </div>
      </section>
      
    </div>
  );
};

export default IncomeTax;
