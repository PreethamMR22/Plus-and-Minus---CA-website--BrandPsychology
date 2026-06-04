import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof, faBullseye, faHandshake, faUserTag } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';
import './Accounting.css';

const Accounting = () => {
  const observerRefs = useRef(new Map());

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el) => {
      observer.observe(el);
      observerRefs.current.set(el, observer);
    });

    return () => {
      observerRefs.current.forEach((obs, el) => {
        obs.unobserve(el);
      });
    };
  }, []);
  return (
    <div className="accounting-page">
      {/* Hero Section */}
      <section className="accounting-hero">
        <div className="accounting-hero-content">
          <h1>
            You didn't start a startup <br /> to do <span style={{ color: 'var(--green)' }}>Accounting.</span> <br /> <span style={{ color: 'var(--green)' }}>But we did.</span>
          </h1>
          <p style={{ color: 'var(--darker)' }}>
            Accounting for startups and small businesses, done right. <br /> We keep your books clean every month.
            You get one clear report. And peace of mind.
          </p>
          <div className="hero-btns">
            <Button to="/contact" variant="hero-primary" size="large">
              Talk to an Expert →
            </Button>
            <Button onClick={() => window.open('https://wa.me/917204403746?text=Hi! I would like to know more about your accounting services.', '_blank')} variant="hero-outline" size="large">
              WhatsApp Us Now
            </Button>
          </div>
          <div className="hero-stats">
            <span>150+ Google Reviews</span>
            <span className="bullet">•</span>
            <span>Serving Bengaluru since 2020</span>
            <span className="bullet">•</span>
            <span>500+ clients</span>
          </div>
        </div>

        <div className="accounting-hero-image">
          <img
            src="/images/accounting/hero.png"
            alt="Accounting professional"
          />
        </div>
      </section>

      {/* Tailor Made Services Section */}
      <section className="tailor-made-services">
        <div className="tailor-made-content">
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', textAlign: 'center' }}>Everything your books need. <br /><span style={{ color: 'var(--green)' }}>Every month.</span></h2>
          <p className="subtitle" style={{ color: 'black', fontSize: '15px' }}>Accurate books, timely taxes, crisp reports.</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faPeopleRoof} />
              </div>
              <h3>Accounting & <br />Bookkeeping Services</h3>
              <p style={{ color: 'black' }}>Clean books, closed monthly. Know exactly where your money stands.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faBullseye} />

              </div>
              <h3>GST Filing & Monthly<br />Reconciliation</h3>
              <p style={{ color: 'black' }}>Filed on time, ITC maximised. No penalties, no stress.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faUserTag} />
              </div>
              <h3>TDS Filing</h3>
              <p style={{ color: 'black' }}>Seamless, on-time, penalty-proof. We've got it covered.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faHandshake} />

              </div>
              <h3>Monthly MIS Report</h3>
              <p style={{ color: 'black' }}>Revenue, expenses, profit - delivered by the 1st. In plain language.</p>
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
        <div className="process-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: '16px', color: 'var(--darker)' }}>Simple Process<span style={{ color: 'rgb(19, 64, 191)' }}>. Powerful Results</span></h2>
          <p className="subtitle" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', color: 'var(--gray)', lineHeight: '1.6' }}>
            Streamline your finances with a structured approach.
          </p>
        </div>
        <div className="process-content" style={{ alignItems: 'center' }}>
          <div className="process-image" style={{ position: 'sticky', top: '100px', overflow: 'hidden' }}>
            <img
              src="/images/accounting/PLUS AND MINUS (14).png"
              alt="Simple Process"
              style={{ borderRadius: '16px', width: '100%', height: '420px', objectFit: 'cover', display: 'block', transform: 'scale(1.1)', transformOrigin: 'center' }}
            />
          </div>
          <div className="process-steps" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="step" style={{ margin: 0 }}>
              <h3>Setup</h3>
              <p>We get your books in order. We understand your business, set up your accounting system properly from day one.</p>
            </div>

            <div className="step" style={{ margin: 0 }}>
              <h3>Manage</h3>
              <p>We run it every month. Bookkeeping, GST, TDS, filings - handled. You never have to follow up with us.</p>
            </div>

            <div className="step" style={{ margin: 0 }}>
              <h3>Grow</h3>
              <p>We give you insights, not just numbers. Monthly MIS, tax-saving tips, and financial clarity to make smarter decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Pricing Banner Section */}
      <section className="pricing-banner-section">
        <div className="pricing-banner">
          <div className="banner-left">
            <h2>
              Fixed monthly<br />pricing.
            </h2>
            <p>
              Know exactly what to expect every month.<br />
              No surprises, just clear and transparent service.
            </p>
          </div>
          <div className="banner-right">
            <div className="banner-feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l3 3 5-6" />
              </svg>
              <span>No hourly billing. Simple fixed pricing.</span>
            </div>
            <div className="banner-feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l3 3 5-6" />
              </svg>
              <span>No hidden Fees. What you see is what you pay.</span>
            </div>
            <div className="banner-feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l3 3 5-6" />
              </svg>
              <span>Full support from our dedicated team is always included.</span>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="whats-included-section">
        <div className="whats-included-content">
          <h2 className="whats-included-title">What's included<span style={{ color: 'rgb(19, 64, 191)' }}>.</span></h2>
          <div className="whats-included-grid">

            <div className="included-card">
              <div className="included-number">1</div>
              <h3 className="included-card-title">Monthly close</h3>
              <p className="included-card-text">Your accounts are updated and finalized on time every month with accurate reports and proper accounting.</p>
            </div>

            <div className="included-card">
              <div className="included-number">2</div>
              <h3 className="included-card-title">Bank & credit card reconciliation</h3>
              <p className="included-card-text">Transactions are checked and matched regularly to avoid mistakes and maintain accurate accounts.</p>
            </div>

            <div className="included-card">
              <div className="included-number">3</div>
              <h3 className="included-card-title">Journal entries & adjustments</h3>
              <p className="included-card-text">Accruals, reclassifications, and adjusting entries recorded accurately so your books reflect the full picture.</p>
            </div>

            <div className="included-card">
              <div className="included-number">4</div>
              <h3 className="included-card-title">Payroll Management</h3>
              <p className="included-card-text">Accurate salary processing, payslips, PF, ESI, and payroll compliance handled on time by our dedicated support team.</p>
            </div>

            <div className="included-card">
              <div className="included-number">5</div>
              <h3 className="included-card-title">Financial statements</h3>
              <p className="included-card-text">Profit & Loss, Balance Sheet, TDS, GST working, and other financial reports prepared and reviewed by our team.</p>
            </div>

            <div className="included-card">
              <div className="included-number">6</div>
              <h3 className="included-card-title">Dedicated accounting team</h3>
              <p className="included-card-text">A dedicated team that understands your business. Consistent, reliable, and always reachable.</p>
            </div>

          </div>
        </div>
      </section>
      {/* Target Audience Section */}
      <section className="target-audience-section">
        <div className="target-audience-content">
          <h2 className="target-audience-title">
            From day one <span style={{ color: 'rgb(19, 64, 191)' }}>founder to growing team</span><br />
            we have got you.
          </h2>
          <div className="target-audience-grid">

            <div className="audience-card">
              <div className="audience-image-wrapper">
                <img src="/images/accounting/4.png" alt="Solo Founder" />
              </div>
              <h3 className="audience-card-title">Solo Founders</h3>
              <p className="audience-card-text">
                Starting alone doesn't mean doing everything alone. We support you from day one with accounting, tax compliance, and clear guidance, so you can focus on building your business with confidence.
              </p>
            </div>

            <div className="audience-card">
              <div className="audience-image-wrapper">
                <img src="/images/accounting/5.png" alt="Small Businesses" />
              </div>
              <h3 className="audience-card-title">Small businesses</h3>
              <p className="audience-card-text">
                As your business grows, so do your financial responsibilities. We handle your accounting, tax filings, and compliance, giving you the clarity and control you need to make better business decisions.
              </p>
            </div>

            <div className="audience-card">
              <div className="audience-image-wrapper">
                <img src="/images/accounting/6.png" alt="Ecommerce" />
              </div>
              <h3 className="audience-card-title">Ecommerce</h3>
              <p className="audience-card-text">
                Selling on Amazon, Flipkart, or Meesho? We simplify your ecommerce accounting, manage GST and reconciliations, and keep your finances in control - so you can focus on scaling your business.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* Accounting for Startups Section */}
      <section className="startups-simplified-section">
        <div className="startups-content-wrapper">
          <div className="startups-text-side">
            <h2>
              <span style={{ whiteSpace: 'nowrap' }}>Accounting for Startups,</span><br />
              <span style={{ color: 'rgb(19, 64, 191)' }}>Simplified.</span>
            </h2>
            <p>
              Our finance experts handle your books so you can<br />
              focus on your business
            </p>
            <Button to="/contact" variant="primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Talk to an Expert
            </Button>
          </div>
          <div className="startups-image-side">
            <div className="startups-image-container">
              <img src="/images/accounting/simple-process.png" alt="Accounting Simplified" />
            </div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default Accounting;
