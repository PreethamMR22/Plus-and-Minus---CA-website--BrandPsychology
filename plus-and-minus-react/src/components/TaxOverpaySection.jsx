import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './TaxOverpaySection.css';

const TaxOverpaySection = () => {
  const taxIssuesData = [
    {
      color: 'yellow',
      title: 'Advance Tax Calculation',
      description: 'Advance tax planning made simple - calculate, pay on time, and avoid interest under Sections 234B and 234C.'
    },
    {
      color: 'pink',
      title: 'Rental income',
      description: 'Understand how rental income is taxed between joint owners and what expenses you can legally claim as deductions.'
    },
    {
      color: 'blue',
      title: 'Capital Gains Tax',
      description: 'Sold shares, property, or crypto? We help you declare it right and pay only what\'s required.'
    },
    {
      color: 'purple',
      title: 'Tax Regime Selection',
      description: 'Old or New Regime, Still unsure which saves more? We help you select the tax regime that actually reduces your tax.'
    },
    {
      color: 'light-green',
      title: 'Tax Saving on Salary Income',
      description: 'We help you reduce your taxes and increase your take-home salary.'
    },
    {
      color: 'orange',
      title: 'Foreign income',
      description: 'Living abroad but earning in India? We help you understand your tax liability and ensure proper compliance in India'
    }
  ];

  return (
    <section className="tax-overpay-section">
      <div className="tax-overpay-content">
        <div className="tax-overpay-left">
          <div className="section-tag">THE PROBLEM</div>
          <h2 className="section-title" style={{color:'black'}}>Overpaying your <span style={{color: 'rgb(19, 64, 191)'}}>taxes?</span> Let's fix that!</h2>
          <p className="section-sub">
            Beyond Filing : Tax Planning & Advisory Services, Reduce your tax liabilities by strategically planning your taxes.
          </p>
          
          
          <a 
            href="tel:+919876543210" 
            className="btn primary medium talk-to-advisor-btn"
            style={{maxWidth: '200px', display: 'inline-block', textAlign: 'center', textDecoration: 'none', padding: '15px 30px', borderRadius: '8px'}}
          >
            Talk to Advisor
          </a>
        </div>
        
        <div className="tax-overpay-right">
          <div className="tax-overpay-grid">
            {taxIssuesData.map((issue, index) => (
              <div key={index} className={`tax-issue-card ${issue.color}`}>
                <h4>{issue.title}</h4>
                <p>{issue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxOverpaySection;
