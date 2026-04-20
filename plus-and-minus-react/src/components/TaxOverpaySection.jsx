import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './TaxOverpaySection.css';

const TaxOverpaySection = () => {
  const taxIssuesData = [
    {
      color: 'yellow',
      title: 'No Tax Strategy',
      description: 'Without a plan, you pay maximum tax every year without realising it.'
    },
    {
      color: 'pink',
      title: 'Missing Deductions',
      description: 'HUF, 80C, NPS, capital gains — most deductions go unclaimed.'
    },
    {
      color: 'blue',
      title: 'Wrong Regime',
      description: 'Old vs New regime — most people pick the wrong one and lose thousands.'
    },
    {
      color: 'purple',
      title: 'No Expert Review',
      description: 'A CA review can save you 10x what it costs. Every single year.'
    },
    {
      color: 'light-green',
      title: 'Bad Investments',
      description: 'Tax-inefficient investments drain your wealth silently.'
    },
    {
      color: 'orange',
      title: 'Late Planning',
      description: 'Waiting until March means losing months of tax-saving opportunities.'
    }
  ];

  return (
    <section className="tax-overpay-section">
      <div className="tax-overpay-content">
        <div className="tax-overpay-left">
          <div className="section-tag">THE PROBLEM</div>
          <h2 className="section-title">Why even smart earners <span className="highlight">overpay taxes</span></h2>
          <p className="section-sub">
            Each year, thousands of high-earning professionals pay more tax than they legally need to. The reason? Lack of strategy, not lack of income. Each number is backed by years of focused tax expertise and real outcomes.
          </p>
          
          <div className="tax-overpay-cta">
            <h3>Overpaying your taxes? Let's fix that!</h3>
            <p>Tax planning is a smart way to reduce the taxes you pay. It helps you use exemptions, deductions, and benefits to lower your tax bill effectively.</p>
          </div>

          <Link to="/services/tax-planning" className="tax-planning-link">
            Explore Tax Planning Services →
          </Link>
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
