import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
  const servicesData = [
    {
      icon: '📊',
      title: 'Accounts & Business Advisory',
      description: 'Making sense of your numbers for individuals and businesses.',
      linkTo: '/services/accounts'
    },
    {
      icon: '🛡️',
      title: 'Audit',
      description: 'Independent, thorough audits to ensure compliance.',
      linkTo: '/services/audit'
    },
    {
      icon: '🏛️',
      title: 'Corporate Finance',
      description: 'Mergers, acquisitions, and financial structuring.',
      linkTo: '/services/corporate-finance'
    },
    {
      icon: '📄',
      title: 'Corporate Tax',
      description: 'Strategic tax planning to minimise liabilities.',
      linkTo: '/services/corporate-tax'
    },
    {
      icon: '📈',
      title: 'Personal Tax',
      description: 'Personal tax services for individuals, families, and HNWIs.',
      linkTo: '/services/personal-tax'
    },
    {
      icon: '🔬',
      title: 'R&D Tax',
      description: 'Maximise your R&D tax credits and reliefs.',
      linkTo: '/services/rd-tax'
    }
  ];

  const insightsData = [
    {
      icon: '💼',
      tag: 'Corporate Tax',
      title: 'VAT on company cars: Hire Purchase vs Finance Lease'
    },
    {
      icon: '📊',
      tag: 'Personal Tax',
      title: 'Old vs New Tax Regime: Which saves you more in 2026?'
    },
    {
      icon: '🏠',
      tag: 'Tax Planning',
      title: 'HUF setup: Is it right for your family?'
    }
  ];

  const taxIssuesData = [
    {
      icon: '💡',
      title: 'No Tax Strategy',
      description: 'Without a plan, you pay maximum tax every year without realising it.'
    },
    {
      icon: '📋',
      title: 'Missing Deductions',
      description: 'HUF, 80C, NPS, capital gains — most deductions go unclaimed.'
    },
    {
      icon: '⚡',
      title: 'Wrong Regime',
      description: 'Old vs New regime — most people pick the wrong one and lose thousands.'
    },
    {
      icon: '🔒',
      title: 'No Expert Review',
      description: 'A CA review can save you 10x what it costs. Every single year.'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content fade-up">
          <div className="hero-tag">Chartered Accountants & Advisers</div>
          <h1>
            Plus And Minus<br />
            <span>Accountants</span><br />
            & Advisers
          </h1>
          <p>
            The only firm you'll ever need. We unite expertise and technology so you can outthink, outpace and outperform.
          </p>
          <div className="hero-btns">
            <Button to="/contact" variant="hero-primary" size="large">
              Get Started →
            </Button>
            <Button to="/services" variant="hero-outline" size="large">
              Our Services
            </Button>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-val">500+</div>
              <div className="hero-stat-label">Happy Clients</div>
            </div>
            <div>
              <div className="hero-stat-val">10+</div>
              <div className="hero-stat-label">Expert Advisers</div>
            </div>
            <div>
              <div className="hero-stat-val">98%</div>
              <div className="hero-stat-label">Repeat Engagement</div>
            </div>
            <div>
              <div className="hero-stat-val">100%</div>
              <div className="hero-stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Plus & Minus */}
      <section className="section">
        <div className="two-col">
          <div>
            <div className="section-tag">Why Plus & Minus</div>
            <h2 className="section-title">
              We're experts. <span>Let us help you.</span>
            </h2>
            <p className="section-sub">
              With a proven track record spanning 10+ years, we bring chartered expertise and genuine human care to every client relationship. We work with numbers. But for people.
            </p>
            <Button to="/about" variant="primary" style={{marginTop: '8px'}}>
              Learn More →
            </Button>
          </div>
          <div className="col-img">
            <div className="col-img-placeholder">👩‍💼</div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stat-item">
          <div className="stat-val">500+</div>
          <div className="stat-label">Happy Clients</div>
        </div>
        <div className="stat-item">
          <div className="stat-val">10+</div>
          <div className="stat-label">Expert Advisers</div>
        </div>
        <div className="stat-item">
          <div className="stat-val">98%</div>
          <div className="stat-label">Repeat Engagement</div>
        </div>
        <div className="stat-item">
          <div className="stat-val">100%</div>
          <div className="stat-label">Satisfaction Rate</div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section">
        <div className="section-tag">What We Do</div>
        <h2 className="section-title">Our Services</h2>
        <p className="section-sub">
          Comprehensive accounting and advisory services built around your specific needs.
        </p>
        <div className="cards-grid">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              linkText="Learn more"
              linkTo={service.linkTo}
            />
          ))}
        </div>
        <div style={{marginTop: '32px'}}>
          <Button to="/services" variant="primary">
            View All Services →
          </Button>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="dark-section">
        <div className="dark-section-content">
          <div>
            <div className="section-tag">Your Wealth</div>
            <h2 className="section-title">
              You only have one life.<br />
              <span>Wealth is freedom.</span>
            </h2>
            <p className="dark-section-sub">
              The moment you stop working and start living your meaningful life without money stress starts now. Let us help you get there.
            </p>
            <div className="hero-btns">
              <Button to="/contact" variant="hero-primary" size="large">
                Get Started →
              </Button>
              <Button to="/about" variant="hero-outline" size="large">
                Our Story
              </Button>
            </div>
          </div>
          <div className="dark-section-img">💰</div>
        </div>
      </section>

      {/* File ITR Steps */}
      <section className="section">
        <div className="section-centered">
          <div className="section-tag">Simple Process</div>
          <h2 className="section-title">File your ITR in three easy steps</h2>
          <p className="section-sub">
            From data to done — we handle everything so you don't have to.
          </p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <h3>Share Your Documents</h3>
            <p>Send us your Form 16, bank statements and investment details securely.</p>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <h3>We Prepare Your Filing</h3>
            <p>Our CA reviews your details, optimises your returns and prepares your ITR.</p>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <h3>You Review & File</h3>
            <p>Review, approve and we file your return. You get the acknowledgement instantly.</p>
          </div>
        </div>
        <div className="section-centered">
          <Button to="/pricing" variant="primary">
            See Our Pricing →
          </Button>
        </div>
      </section>

      {/* Tax Planning Section */}
      <section className="dark-section">
        <div className="dark-section-content reverse">
          <div className="dark-section-img">🌐</div>
          <div>
            <div className="section-tag">Advisory</div>
            <h2 className="section-title">
              Tax Planning & <span>Advisory Services</span>
            </h2>
            <ul className="advisory-list">
              <li>✓ &nbsp;Personal Planning</li>
              <li>✓ &nbsp;Tax Free Expert</li>
              <li>✓ &nbsp;Business Advisory</li>
            </ul>
            <Button to="/contact" variant="hero-primary" size="large">
              Learn More →
            </Button>
          </div>
        </div>
      </section>

      {/* Why Smart Earners Overpay */}
      <section className="section">
        <div className="section-centered">
          <div className="section-tag">Insights</div>
          <h2 className="section-title">Why even smart earners overpay taxes</h2>
          <p className="section-sub">
            Most people don't know what they're missing. Let's change that.
          </p>
        </div>
        <div className="cards-grid">
          {taxIssuesData.map((issue, index) => (
            <Card
              key={index}
              icon={issue.icon}
              title={issue.title}
              description={issue.description}
            />
          ))}
        </div>
      </section>

      {/* Tech Section */}
      <section className="tech-section">
        <div className="tech-content">
          <div className="tech-img">🤖</div>
          <div>
            <div className="section-tag">Technology</div>
            <h2 className="section-title">
              We unite expertise and tech so you can <span>outthink, outpace and outperform</span>
            </h2>
            <p className="tech-sub">
              Our platform combines deep chartered expertise with modern technology to deliver outcomes that no single approach can match.
            </p>
            <div className="tech-features">
              <div className="tech-feature">
                <p className="tech-feature-title">AI-Assisted Analysis</p>
                <p className="tech-feature-desc">Smarter insights, faster</p>
              </div>
              <div className="tech-feature">
                <p className="tech-feature-title">Secure Document Portal</p>
                <p className="tech-feature-desc">Bank-level security</p>
              </div>
              <div className="tech-feature">
                <p className="tech-feature-title">Real-time Reporting</p>
                <p className="tech-feature-desc">Always up to date</p>
              </div>
              <div className="tech-feature">
                <p className="tech-feature-title">Expert CA Review</p>
                <p className="tech-feature-desc">Human oversight always</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section">
        <div className="insights-header">
          <div>
            <div className="section-tag">Blog</div>
            <h2 className="section-title">Insights & Updates</h2>
          </div>
          <Button variant="outline">View All →</Button>
        </div>
        <div className="insights-grid">
          {insightsData.map((insight, index) => (
            <div key={index} className="insight-card">
              <div className="insight-img">{insight.icon}</div>
              <div className="insight-content">
                <div className="insight-tag">{insight.tag}</div>
                <h3>{insight.title}</h3>
                <div className="insight-read">Read More →</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section">
        <div className="two-col">
          <div>
            <h2 className="bottom-cta-title">
              In this increasingly regulated and legislation-heavy world, we know more is needed.
            </h2>
            <p className="section-sub">
              Plus And Minus is your strategic partner — not just your accountant. Real advice. Real outcomes. Real trust.
            </p>
            <Button to="/contact" variant="primary" style={{marginTop: '20px'}}>
              Get In Touch →
            </Button>
          </div>
          <div className="col-img">
            <div className="col-img-placeholder">🤝</div>
          </div>
        </div>
      </section>

      {/* Final Dark Strip */}
      <section className="dark-section final-cta">
        <div className="final-cta-content">
          <h2>
            Plus And Minus is all about you. Your future starts here.
          </h2>
          <p>
            We work with numbers. But it should never mean that you be one. We want to hear from you.
          </p>
          <Button to="/contact" variant="hero-primary" size="large">
            Get In Touch →
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
