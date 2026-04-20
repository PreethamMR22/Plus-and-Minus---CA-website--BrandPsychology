import React from 'react';
import { Link } from 'react-router-dom';
import './BeyondFiling.css';

const BeyondFiling = () => {
  return (
    <section className="beyond-filing">
      <div className="beyond-filing-content">
        <div className="section-tag">BEYOND FILING</div>
        <h2 className="section-title">Tax Planning & Advisory Services</h2>
        <p className="section-sub">
          Reduce your tax liabilities by strategically planning your taxes, Good tax planning ensures all your financial goals work together smoothly, boosting your long-term savings.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">{'\u26a1'}</div>
            <h3>Highly Optimised</h3>
            <p>We help you file your ITR right way \u2014 maximising your income and claiming every possible deduction.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">{'\ud83d\udcb0'}</div>
            <h3>Transparent Pricing</h3>
            <p>No surprises \u2014 just clear, upfront pricing so you know exactly what you're paying for.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">{'\ud83d\udcca'}</div>
            <h3>Post-Filing Support</h3>
            <p>Reports and support for all things ITR even after filing. Keep your finances organised all year, every year.</p>
          </div>
        </div>
        
        <div className="action-buttons">
          <Link to="/pricing" className="btn btn-primary">
            View Pricing
          </Link>
          <Link to="/services" className="btn btn-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BeyondFiling;
