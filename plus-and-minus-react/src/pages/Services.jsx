import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      icon: '📊',
      title: 'Accounts & Business Advisory',
      description: 'Making sense of your numbers for individuals and businesses.',
      features: ['Management accounts', 'Bookkeeping', 'Business planning', 'Cash flow forecasting'],
      linkTo: '/services/accounts'
    },
    {
      icon: '🛡️',
      title: 'Audit',
      description: 'Independent, thorough audits to ensure compliance.',
      features: ['Statutory audit', 'Internal audit', 'Due diligence', 'Risk assessment'],
      linkTo: '/services/audit'
    },
    {
      icon: '🏛️',
      title: 'Corporate Finance',
      description: 'Mergers, acquisitions, and financial structuring.',
      features: ['M&A advisory', 'Fundraising', 'Valuations', 'Financial modelling'],
      linkTo: '/services/corporate-finance'
    },
    {
      icon: '📄',
      title: 'Corporate Tax',
      description: 'Strategic corporate tax planning to minimise liabilities.',
      features: ['CT returns', 'Tax planning', 'Group restructuring', 'Transfer pricing'],
      linkTo: '/services/corporate-tax'
    },
    {
      icon: '👥',
      title: 'Employment Tax',
      description: 'Navigating complex employment taxes — benefits, PAYE, NIC.',
      features: ['PAYE compliance', 'Benefits in kind', 'NIC optimisation', 'Settlement agreements'],
      linkTo: '/services/employment-tax'
    },
    {
      icon: '⚡',
      title: 'Entrepreneurial Tax',
      description: 'Specialist advice for founders and owner-managers.',
      features: ['SEIS/EIS', 'EMI options', 'Business disposal', 'Succession planning'],
      linkTo: '/services/entrepreneurial-tax'
    },
    {
      icon: '💳',
      title: 'Payroll',
      description: 'Accurate, timely payroll processing with full compliance.',
      features: ['Monthly payroll', 'Auto enrolment', 'P11D processing', 'Real-time reporting'],
      linkTo: '/services/payroll'
    },
    {
      icon: '📈',
      title: 'Personal Tax',
      description: 'Personal tax services for individuals, families, and HNWIs.',
      features: ['Self-assessment', 'Capital gains', 'Inheritance tax', 'Non-dom advice'],
      linkTo: '/services/personal-tax'
    },
    {
      icon: '🔬',
      title: 'R&D Tax',
      description: 'Maximise your R&D tax credits and reliefs.',
      features: ['R&D claims', 'HMRC enquiries', 'RDEC scheme', 'SME relief'],
      linkTo: '/services/rd-tax'
    },
    {
      icon: '💲',
      title: 'VAT',
      description: 'VAT registration, returns, planning, and dispute resolution.',
      features: ['VAT returns', 'Registration', 'Partial exemption', 'International VAT'],
      linkTo: '/services/vat'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="section-content">
          <div className="section-tag">What We Do</div>
          <h1>Our Services</h1>
          <p>
            Comprehensive accounting and advisory services built around your specific needs. From personal tax to corporate finance — we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Link to={service.linkTo} className="card-link">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="dark-section">
        <div className="section-centered">
          <h2>Not sure which service you need?</h2>
          <p>Let's talk. Our advisers will help you identify the right approach for your situation.</p>
          <Button to="/contact" variant="hero-primary" size="large">
            Book a Free Consultation →
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

export default Services;
