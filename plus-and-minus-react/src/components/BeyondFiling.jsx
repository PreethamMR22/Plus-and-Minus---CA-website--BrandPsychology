import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './BeyondFiling.css';

const BeyondFiling = () => {
  return (
    <section className="tax-planning-section">
      <div className="tax-planning-content">
        <div className="tax-planning-left">
          <div className="section-tag">BEYOND FILING</div>
            <h2 className="section-title">
              Tax Planning & <span>Advisory Services</span>
            </h2>
            <p className="section-sub">
              Reduce your tax liabilities by strategically planning your taxes, Good tax planning ensures all your financial goals work together smoothly, boosting your long-term savings.
            </p>
            
            <div className="tax-features">
              <div className="tax-feature">
                <div className="tax-feature-icon">⚡</div>
                <div className="tax-feature-content">
                  <h4>Highly Optimised</h4>
                  <p>We help you file your ITR right way — maximising your income and claiming every possible deduction.</p>
                </div>
              </div>
              
              <div className="tax-feature">
                <div className="tax-feature-icon">💰</div>
                <div className="tax-feature-content">
                  <h4>Transparent Pricing</h4>
                  <p>No surprises — just clear, upfront pricing so you know exactly what you're paying for.</p>
                </div>
              </div>
              
              <div className="tax-feature">
                <div className="tax-feature-icon">📊</div>
                <div className="tax-feature-content">
                  <h4>Post-Filing Support</h4>
                  <p>Reports and support for all things ITR even after filing. Keep your finances organised all year, every year.</p>
                </div>
              </div>
            </div>
            
            <div className="tax-buttons">
              <Button to="/pricing" variant="hero-primary" size="large">
                View Pricing
              </Button>
              <Button to="/services/tax-planning" variant="hero-outline" size="large">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="tax-planning-right">
            <div className="tax-image">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Tax planning" />
            </div>
            
            <div className="tax-callout">
              <h4>Never Miss a Tax Deadline</h4>
              <p>We keep you on track so you file on time, every time.</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default BeyondFiling;
