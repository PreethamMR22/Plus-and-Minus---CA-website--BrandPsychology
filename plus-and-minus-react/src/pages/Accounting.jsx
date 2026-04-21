import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './Accounting.css';

const Accounting = () => {
  return (
    <div className="accounting-page">
      {/* Hero Section */}
      <section className="accounting-hero">
        <div className="accounting-hero-content">
          <div className="hero-tag">Accounting Services</div>
          <h1>You didn't start a startup to do Accounting. But we did.</h1>
          <p>
            Professional accounting services for startups and small businesses. 
            Focus on growing your business while we handle your numbers with precision and care.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Talk to an Expert
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get Free Consultation
            </Link>
          </div>
          
          <div className="hero-features">
            <div className="hero-feature">
              <span className="hero-feature-icon">®</span>
              <span>Expert Accountants</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">®</span>
              <span>Real-time Financial Insights</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">®</span>
              <span>100% Compliance Guaranteed</span>
            </div>
          </div>
        </div>
        
        <div className="accounting-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Accounting professional" 
          />
          <div className="financial-summary-card">
            <div className="card-header">
              <span className="month">January 2026</span>
            </div>
            <div className="financial-metrics">
              <div className="metric-item">
                <div className="metric-label-group">
                  <span className="color-square revenue"></span>
                  <span className="metric-label">Revenue</span>
                </div>
                <span className="metric-value">₹9,46,000</span>
              </div>
              <div className="metric-item">
                <div className="metric-label-group">
                  <span className="color-square expense"></span>
                  <span className="metric-label">Expense</span>
                </div>
                <span className="metric-value">₹5,96,780</span>
              </div>
              <div className="metric-item">
                <div className="metric-label-group">
                  <span className="color-square profit"></span>
                  <span className="metric-label">Net Profit</span>
                </div>
                <span className="metric-value">₹3,49,220</span>
              </div>
            </div>
          </div>
        </div>
        <div className="speech-bubble">
          <div className="bubble-content">
            <span className="bubble-brand">PLUS & MINUS</span>
            <span className="bubble-text">Your monthly financial statements are ready.</span>
          </div>
        </div>
      </section>

      {/* Tailor Made Services Section */}
      <section className="tailor-made-services">
        <div className="tailor-made-content">
          <h2>Tailor Made Services To Control <br />Your Finance Team</h2>
          <p className="subtitle">Accurate books, timely taxes, crisp reports.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <span>�</span>
              </div>
              <h3>Accounting & Bookkeeping Services</h3>
              <p>We keep your books clean and your mind clear. Say goodbye to the stress of balancing the numbers.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <span>📋</span>
              </div>
              <h3>GST Filing & Monthly Reconciliation</h3>
              <p>Stay on the right side of compliance with hassle-free GST filing and reconciliation - no headaches, just results.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <span>📝</span>
              </div>
              <h3>TDS Filing</h3>
              <p>TDS filing that's seamless, stress-free, and penalty-proof. We've got it covered.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <span>📈</span>
              </div>
              <h3>Monthly MIS Report</h3>
              <p>Get sharp, actionable insights every month. Our MIS reports cut through the noise to show you what matters.</p>
            </div>
          </div>
          
          <div className="cta-button">
            <Link to="/contact" className="btn btn-primary">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Process Section */}
      <section className="process-section">
        <div className="process-content">
          <div className="process-image">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Simple Process" 
            />
          </div>
          <div className="process-steps">
            <h2>Simple Process. Powerful Results</h2>
            <p className="subtitle">Streamline your finances with a structured approach. Each phase enhances clarity and control, building a strong foundation for long-term financial success</p>
            
            <div className="step">
              <h3>Setup</h3>
              <p>We start by understanding your business, current setup, and requirements. Our team will guide you through sharing the necessary documents and set up your accounting, compliance, and systems properly - so everything is structured from day one.</p>
            </div>
            
            <div className="step">
              <h3>Manage</h3>
              <p>Once everything is set up, we take care of your day-to-day accounting, bookkeeping, and tax compliance. From maintaining accurate records to handling GST, TDS, and filings, we ensure everything runs smoothly without you having to follow up.</p>
            </div>
            
            <div className="step">
              <h3>Grow</h3>
              <p>With your finances in order, we go beyond compliance. We provide regular reports, insights, and guidance to help you understand your numbers better, save taxes, and make smarter business decisions as you grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process Section */}
      <section className="why-choose-section">
        <div className="why-choose-content">
          <h2>Simple Process. Powerful Results</h2>
          <p className="subtitle">Streamline your finances with a structured approach. Each phase enhances clarity <br />and control, building a strong foundation for long-term financial success</p>
          
          <div className="why-choose-columns">
            <div className="why-column">
              <h3>Setup (Day 1-15)</h3>
              <ul>
                <li>Understanding Your Business</li>
                <li>We start by understanding your business, current setup, and challenges to identify what needs to be done.</li>
                <li>Document & Data Collection</li>
                <li>Our team will guide you in sharing the required documents and access, making the process smooth and hassle-free</li>
                <li>Accounting & System Setup</li>
                <li>We set up your accounting structure, tools, and compliance systems so everything is organized from day one.</li>
                <li>Start Operations</li>
                <li>Once everything is ready, we start managing your accounts and ensure a smooth transition.</li>
              </ul>
            </div>
            
            <div className="why-column">
              <h3>Manage (Day 15-60)</h3>
              <ul>
                <li>Bookkeeping & Reconciliation</li>
                <li>We maintain your books regularly and ensure all transactions are recorded accurately.</li>
                <li>Tax Filing & Compliance</li>
                <li>We handle GST, TDS, and other compliance filings on time, so you don't have to worry about deadlines.</li>
                <li>Monthly Reports & Insights</li>
                <li>You receive clear financial reports that help you understand your business performance.</li>
              </ul>
            </div>
            
            <div className="why-column">
              <h3>Grow (Ongoing)</h3>
              <ul>
                <li>Financial Review</li>
                <li>We regularly review your financials to identify areas of improvement and growth.</li>
                <li>Tax Planning & Optimization</li>
                <li>We help you save taxes legally and improve overall financial efficiency.</li>
                <li>Business Support & Scaling</li>
                <li>As your business grows, we support you with better systems, insights, and decision-making.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="final-cta-content">
          <div className="final-cta-left">
            <h2>Ready to take control of your finances?</h2>
            <p>Talk to our experts today. No obligation, just clarity.</p>
          </div>
          <div className="final-cta-right">
            <Button to="/contact" variant="light" className="lets-talk-button">
              Let's Talk →
            </Button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Accounting;
