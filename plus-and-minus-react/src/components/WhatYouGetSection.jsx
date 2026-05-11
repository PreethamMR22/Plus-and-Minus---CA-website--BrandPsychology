import React from 'react';
import Button from './Button';
import './WhatYouGetSection.css';

const WhatYouGetSection = () => {
  const features = [
    {
      title: 'Personalized tax planning strategy for higher savings',
      items: [
        'Tips beyond 80C',
        'Advance tax obligations',
        'Salary exemption ideas & many more'
      ]
    },
    {
      title: 'Out-of-the-box tips for better financial planning',
      items: [
        'HRA optimisation ideas',
        'Capital Gains harvesting hacks',
        '50/30/20 budgeting rule & many more'
      ]
    },
    {
      title: 'Best-in-class investment tips to build wealth',
      items: [
        'Ideas on how to beat inflation',
        'Retirement planning tips',
        'NPS, PPF, ELSS and other investment suggestions'
      ]
    }
  ];

  return (
    <section className="what-you-get-section">
      <div className="what-you-get-content">
        <div className="section-header">
          <h2 className="section-title">Here's what you get</h2>
          <p className="section-subtitle">Not just saving taxes, you get a lot more for your future too</p>
        </div>
        
        <div className="features-content">
          {features.map((feature, index) => (
            <div key={index} className="feature-section">
              <h3 className="feature-title">{feature.title}</h3>
              <ul className="feature-list">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="feature-item">
                    <span className="checkmark">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="cta-section">
          <div className="cta-content">
            <div className="cta-text">
              <h3 className="cta-title">Feeling Struck with your tax savings?</h3>
              <p className="cta-subtitle">A Smart tax plan can help you pay less tax and save more of your money.</p>
            </div>
            <a 
              href="tel:+919876543210" 
              className="btn primary medium cta-button"
              style={{display: 'inline-block', textAlign: 'center', textDecoration: 'none'}}
            >
              Talk to a Advisor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
