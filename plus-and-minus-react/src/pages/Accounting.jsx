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
          <h1 className="animate-slide-up" data-animate="slide-up" style={{animationDelay: '0.2s'}}>
            You didn't start a startup <br /> to do <span style={{color: 'var(--green)'}}>Accounting.</span> <br /> <span style={{color: 'var(--green)'}}>But we did.</span>
          </h1>
          <p className="animate-fade-in" data-animate="fade-in" style={{animationDelay: '0.4s', color: 'var(--darker)'}}>
            Accounting for startups and small businesses, done right. <br /> We keep your books clean every month. 
            You get one clear report. And peace of mind.
          </p>
          <div className="hero-btns animate-slide-up" data-animate="slide-up" style={{animationDelay: '0.6s'}}>
            <Button to="/contact" variant="hero-primary" size="large">
              Talk to an Expert →
            </Button>
            <Button onClick={() => window.open('https://wa.me/917204403746?text=Hi! I would like to know more about your accounting services.', '_blank')} variant="hero-outline" size="large">
              WhatsApp Us Now
            </Button>
          </div>
          <div className="hero-stats animate-fade-in" data-animate="fade-in" style={{animationDelay: '0.8s'}}>
            <span>150+ Google Reviews</span>
            <span className="bullet">•</span>
            <span>Serving Bengaluru since 2020</span>
            <span className="bullet">•</span>
            <span>500+ clients</span>
          </div>
        </div>
        
        <div className="accounting-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Accounting professional" 
          />
          <div className="financial-summary-card">
            <div className="card-header">
              <span className="month">January 2026</span>
            </div>
            <div className="financial-metrics">
              <div className="metric-item">
                <div className="metric-label-group">
                  <span className="color-square revenue"></span>
                  <span className="metric-label">Revenue</span>
                </div>
                <span className="metric-value">₹9,46,000</span>
              </div>
              <div className="metric-item">
                <div className="metric-label-group">
                  <span className="color-square expense"></span>
                  <span className="metric-label">Expense</span>
                </div>
                <span className="metric-value">₹5,96,780</span>
              </div>
              <div className="metric-item">
                <div className="metric-label-group">
                  <span className="color-square profit"></span>
                  <span className="metric-label">Net Profit</span>
                </div>
                <span className="metric-value">₹3,49,220</span>
              </div>
            </div>
          </div>
          <div className="speech-bubble">
            <div className="bubble-content">
              <span className="bubble-brand">PLUS & MINUS</span>
              <span className="bubble-text">Your monthly financial statements are ready.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tailor Made Services Section */}
      <section className="tailor-made-services">
        <div className="tailor-made-content">
          <h2 style={{fontSize: 'clamp(28px, 3.5vw, 40px)', textAlign: 'center'}}>Everything your books need. <br /><span style={{color: 'var(--green)'}}>Every month.</span></h2>
          <p className="subtitle" style={{ color: 'black', fontSize: '15px' }}>Accurate books, timely taxes, crisp reports.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                 <FontAwesomeIcon icon={faPeopleRoof} />
              </div>
              <h3>Accounting & <br />Bookkeeping Services</h3>
              <p style={{color: 'black'}}>Clean books, closed monthly. Know exactly where your money stands.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faBullseye} />
               
              </div>
              <h3>GST Filing & Monthly<br />Reconciliation</h3>
              <p style={{color: 'black'}}>Filed on time, ITC maximised. No penalties, no stress.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                 <FontAwesomeIcon icon={faUserTag} />
              </div>
              <h3>TDS Filing</h3>
              <p style={{color: 'black'}}>Seamless, on-time, penalty-proof. We've got it covered.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faHandshake} />
               
              </div>
              <h3>Monthly MIS Report</h3>
              <p style={{color: 'black'}}>Revenue, expenses, profit - delivered by the 1st. In plain language.</p>
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
        <div className="process-content">
          <div className="process-image">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Simple Process" 
            />
          </div>
          <div className="process-steps">
            <h2>Simple Process. Powerful Results</h2>
            <p className="subtitle">Streamline your finances with a structured approach. Each phase enhances clarity and control, building a strong foundation for long-term financial success</p>
            
            <div className="step">
              <h3>Setup</h3>
              <p>We start by understanding your business, current setup, and requirements. Our team will guide you through sharing the necessary documents and set up your accounting, compliance, and systems properly - so everything is structured from day one.</p>
            </div>
            
            <div className="step">
              <h3>Manage</h3>
              <p>Once everything is set up, we take care of your day-to-day accounting, bookkeeping, and tax compliance. From maintaining accurate records to handling GST, TDS, and filings, we ensure everything runs smoothly without you having to follow up.</p>
            </div>
            
            <div className="step">
              <h3>Grow</h3>
              <p>With your finances in order, we go beyond compliance. We provide regular reports, insights, and guidance to help you understand your numbers better, save taxes, and make smarter business decisions as you grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process Section */}
      <section className="why-choose-section">
        <div className="why-choose-content">
          <h2>Simple Process. Powerful Results</h2>
          <p className="subtitle">Streamline your finances with a structured approach. Each phase enhances clarity <br />and control, building a strong foundation for long-term financial success</p>
          
          <div className="why-choose-columns">
            <div className="why-column">
              <h3>Setup (Day 1-15)</h3>
              <ul>
                <li>Understanding Your Business</li>
                <li>We start by understanding your business, current setup, and challenges to identify what needs to be done.</li>
                <li>Document & Data Collection</li>
                <li>Our team will guide you in sharing the required documents and access, making the process smooth and hassle-free</li>
                <li>Accounting & System Setup</li>
                <li>We set up your accounting structure, tools, and compliance systems so everything is organized from day one.</li>
                <li>Start Operations</li>
                <li>Once everything is ready, we start managing your accounts and ensure a smooth transition.</li>
              </ul>
            </div>
            
            <div className="why-column">
              <h3>Manage (Day 15-60)</h3>
              <ul>
                <li>Bookkeeping & Reconciliation</li>
                <li>We maintain your books regularly and ensure all transactions are recorded accurately.</li>
                <li>Tax Filing & Compliance</li>
                <li>We handle GST, TDS, and other compliance filings on time, so you don't have to worry about deadlines.</li>
                <li>Monthly Reports & Insights</li>
                <li>You receive clear financial reports that help you understand your business performance.</li>
              </ul>
            </div>
            
            <div className="why-column">
              <h3>Grow (Ongoing)</h3>
              <ul>
                <li>Financial Review</li>
                <li>We regularly review your financials to identify areas of improvement and growth.</li>
                <li>Tax Planning & Optimization</li>
                <li>We help you save taxes legally and improve overall financial efficiency.</li>
                <li>Business Support & Scaling</li>
                <li>As your business grows, we support you with better systems, insights, and decision-making.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="final-cta-content">
          <div className="final-cta-left">
            <h2>Ready to take control of your finances?</h2>
            <p>Talk to our experts today. No obligation, just clarity.</p>
          </div>
          <div className="final-cta-right">
            <Button to="/contact" variant="light" className="lets-talk-button">
              Let's Talk →
            </Button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Accounting;
