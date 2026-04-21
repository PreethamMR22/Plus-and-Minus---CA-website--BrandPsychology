import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './Pricing.css';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      description: 'For salaried individuals',
      price: '₹1,499',
      period: 'per filing',
      features: [
        'Single ITR filing (Salary income)',
        'Old vs New regime comparison',
        'Form 16 assistance',
        'E-filing acknowledgement',
        'Email support',
        'Pay after filing'
      ]
    },
    {
      name: 'Professional',
      description: 'For complex income earners',
      price: '₹3,999',
      period: 'per filing',
      featured: true,
      badge: '⭐ Most Popular',
      features: [
        'Everything in Starter',
        'Multiple income streams',
        'Capital gains (stocks, MF, property)',
        'ESOP & RSU tax treatment',
        'HUF setup advisory',
        'Income structuring recommendation',
        'Priority phone support',
        'Post-filing support (30 days)'
      ]
    },
    {
      name: 'Business',
      description: 'For business owners & freelancers',
      price: '₹7,999',
      period: 'per year',
      features: [
        'Everything in Professional',
        'Business ITR (Proprietorship)',
        'Bookkeeping & P&L',
        'Advance tax calculations',
        'GST advisory',
        'Tax planning session',
        'Dedicated relationship manager',
        'Year-round support'
      ]
    }
  ];

  const addons = [
    { name: 'Tax Planning Session (1hr)', price: '₹999' },
    { name: 'Notice Response (HMRC/IT Dept)', price: '₹2,499' },
    { name: 'Capital Gains Advisory', price: '₹1,999' },
    { name: 'HUF Formation', price: '₹4,999' },
    { name: 'ESOP Tax Strategy', price: '₹2,999' },
    { name: 'NRI Tax Filing', price: '₹5,999' }
  ];

  const features = [
    {
      icon: '🔒',
      title: 'Pay After Filing',
      description: 'You only pay once your ITR has been successfully filed.'
    },
    {
      icon: '💬',
      title: 'No Hidden Charges',
      description: 'What you see is what you pay. Clear, transparent pricing always.'
    },
    {
      icon: '⚡',
      title: 'Expert Review',
      description: 'Every return is reviewed by a qualified CA before submission.'
    }
  ];

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="section-content">
          <div className="section-tag">Transparent Pricing</div>
          <h1>
            Simple, honest pricing. <span>Pay after you file.</span>
          </h1>
          <p>No surprises. No hidden fees. You only pay once we've filed your return.</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <div className="pricing-section-wrapper">
        <section className="section">
          <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
              <div className="pricing-name">{plan.name}</div>
              <div className="pricing-desc">{plan.description}</div>
              <div className="pricing-price">
                {plan.price}<small>{plan.period}</small>
              </div>
              <div className="pricing-period">
                {plan.name === 'Business' ? 'per year' : 'per filing'}
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Button 
                to="/contact" 
                className={`btn-pricing ${plan.featured ? 'featured' : ''}`}
                variant="pricing"
              >
                Get Started →
              </Button>
            </div>
          ))}
        </div>
        <p className="pricing-note">
          All prices exclusive of GST. Pay only after successful filing. Zero upfront charges.
        </p>
      </section>
      </div>

      {/* Add-ons */}
      <section className="section">
        <div className="section-centered">
          <h2>Add-on Services</h2>
          <p>Enhance your plan with targeted advisory services.</p>
        </div>
        <div className="addons-grid">
          {addons.map((addon, index) => (
            <div key={index} className="addon">
              <span className="addon-name">{addon.name}</span>
              <span className="addon-price">{addon.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="dark-section">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="section-centered">
          <Button to="/contact" variant="hero-primary" size="large">
            Talk to an Expert →
          </Button>
        </div>
      </section>

      {/* Green Section */}
      <section className="green-section">
        <div>
          <h2>Ready to take control of your finances?</h2>
          <p>Talk to our experts today. No obligation, just clarity.</p>
        </div>
        <Button variant="white-rounded" to="/contact">
          Let's Talk →
        </Button>
      </section>
    </div>
  );
};

export default Pricing;
