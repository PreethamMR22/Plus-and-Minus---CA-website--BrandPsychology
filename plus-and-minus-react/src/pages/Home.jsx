import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
  const servicesData = [
    {
      icon: '�',
      title: 'Startup',
      description: 'Complete business setup assistance',
      services: ['Private Limited Company', 'Limited Liability Partnership', 'One Person Company', 'Partnership Firm', 'Proprietorship']
    },
    {
      icon: '💰',
      title: 'Income Tax',
      description: 'Expert tax services for individuals and businesses',
      services: ['Individual tax Filing', 'Business tax Filing', 'Corporate tax returns', 'Tax Audit', 'Notice management']
    },
    {
      icon: '�',
      title: 'Accounting Services',
      description: 'Comprehensive financial record management',
      services: ['Bookkeeping services', 'Monthly financial statements', 'Expense tracking', 'Invoicing and payments', 'TDS Filing']
    },
    {
      icon: '🧾',
      title: 'Goods and Service tax - GST',
      description: 'Comprehensive financial record management',
      services: ['GST Registration', 'GST Revocation and Amendment', 'GST Letter of Undertaking', 'GST Monthly filing', 'GST Annual Filing']
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
              Start Your Journey →
            </Button>
            <Button to="/services" variant="hero-outline" size="large">
              Explore Our Services
            </Button>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <span className="hero-feature-icon">✓</span>
              <span>500+ Happy Clients</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">★</span>
              <span>100% Satisfaction</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">§</span>
              <span>ICAI Registered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Plus & Minus */}
      <section className="section section-expanded">
        <div className="two-col">
          <div>
            <div className="section-tag">Why Plus & Minus</div>
            <h2 className="section-title">
              We're experts. <span>Let us help you.</span>
            </h2>
            <p className="section-sub">
              We bring clarity, brevity, and human insight to our work with you. At Plus And Minus Accountants and Advisers, we work with numbers - but for people. Our chartered accountants provide end-to-end strategic accounting with reliable, professional guidance to help achieve business success. <br />In a world where anyone can call themselves an accountant, we stand apart through deep expertise, transparent pricing, and genuine care for your financial wellbeing -in the Age of Al, 2026-2028 and beyond.
            </p>
            <Link to="/about" className="section-link">
              See how we can help →
            </Link>
          </div>
          <div className="col-img">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Professional receptionist" className="col-img-content" />
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
          <div className="stat-label">Team of Experts</div>
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
      <section className="services-section">
        <div className="section-tag">What We Do</div>
        <h2 className="section-title">Bunch of things we can do for you</h2>
        <p className="section-sub">
          Comprehensive accounting and tax services tailored to your needs.
        </p>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-list">
                {service.services.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-content">
          <div className="section-tag">OUR MISSION</div>
          <h2 className="section-title">
            You only have one life.<br />
            <span>Wealth is freedom.</span>
          </h2>
          <p className="section-sub">
            It's often filled with long work days and stress about money. It doesn't have to be that way. We created Plus And Minus to help you reach financial freedom — the moment when you can stop working and start living your meaningful life without money stress.
            <br /><br />
            Plus And Minus is your friendly guide so you can pay less in taxes (the legal way!) and put your money in the right places. Money stuff can feel hard, but we're here to help you along the way.
          </p>
          <div className="mission-buttons">
            <Button to="/contact" variant="hero-primary" size="large">
              Start Your Journey →
            </Button>
            <Button to="/about" variant="hero-outline" size="large">
              Our Story
            </Button>
          </div>
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
                  <p>We help you file your ITR the right way — maximising your income and claiming every possible deduction.</p>
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
