import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof, faBullseye, faHandshake, faUserTag } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';
import Card from '../components/Card';
import TestimonialsSection from '../components/TestimonialsSection';
import './Home.css';

const useCounter = (end, duration = 2000, startOnView = false) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startOnView) {
      hasStarted.current = true;
      const startTime = Date.now();
      const endValue = typeof end === 'string' ? parseInt(end) : end;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);

        setCount(Math.floor(progress * endValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [end, duration, startOnView]);

  const startCounting = () => {
    if (!hasStarted.current && startOnView) {
      hasStarted.current = true;
      const startTime = Date.now();
      const endValue = typeof end === 'string' ? parseInt(end) : end;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);

        setCount(Math.floor(progress * endValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  };

  return { count, ref: countRef, startCounting };
};

const Home = () => {
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [visibleSections, setVisibleSections] = useState(new Set());
  const heroStatsRef = useRef(null);
  const hasAnimated = useRef(false);
  const observerRefs = useRef(new Map());

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '917204403746'; // Business WhatsApp number
    const message = encodeURIComponent('Hi! I would like to know more about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const toggleBlogExpansion = (index) => {
    setExpandedBlogs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Initialize counters with different durations to reach target at same time
  const clientsCounter = useCounter(500, 2500, true);
  const teamCounter = useCounter(10, 2500, true);
  const engagementCounter = useCounter(98, 2500, true);
  const satisfactionCounter = useCounter(100, 2500, true);

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

  const getAnimationClass = (animationType, delay = 0) => {
    return `animate-${animationType} ${visibleSections.size > 0 ? 'animated' : ''}`;
  };

  // Intersection observer to start animation when stats are visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            clientsCounter.startCounting();
            teamCounter.startCounting();
            engagementCounter.startCounting();
            satisfactionCounter.startCounting();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroStatsRef.current) {
      observer.observe(heroStatsRef.current);
    }

    return () => {
      if (heroStatsRef.current) {
        observer.unobserve(heroStatsRef.current);
      }
    };
  }, [clientsCounter, teamCounter, engagementCounter, satisfactionCounter]);

  const servicesData = [
    {
      icon: <FontAwesomeIcon icon={faPeopleRoof} />,
      title: 'Startup',
      description: 'Complete business setup \nassistance',
      services: ['Private Limited Company', 'Limited Liability Partnership', 'One Person Company', 'Partnership Firm', 'Prorietorship']
    },
    {
      icon: <FontAwesomeIcon icon={faBullseye} />,
      title: 'Tax Filing',
      description: 'Expert tax services for individuals and businesses',
      services: ['Individual tax Filing', 'Business tax Filing', 'Corporate tax returns', 'Tax Audit', 'Notice management']
    },
    {
      icon: <FontAwesomeIcon icon={faHandshake} />,
      title: 'Accounting Services',
      description: 'Comprehensive financial record management',
      services: ['Day to day Bookkeeping ', 'Monthly financial statements', 'Expense tracking', 'Invoicing and payments', 'TDS Filing']
    },
    {
      icon: <FontAwesomeIcon icon={faUserTag} />,
      title: 'GST',
      description: 'Complete GST registration, filing, and compliance.',
      services: ['GST Registration', 'GST Revocation and Amendment', 'GST Letter of Undertaking', 'GST Monthly filing', 'GST Annual Filing']
    }
  ];

  const clientsData = [
    'Wipro',
    'Unilever',
    'TCS',
    'Oracle',
    'Mercedes-Benz',
    'DB Schenker',
    'Infosys',
    'IBM',
    'Honeywell',
    'Fidelity'
  ];

  const blogData = [
    {
      category: 'PLC',
      title: 'Setting up a Private Limited Company (PLC) in India : A comprehensive guide',
      description: 'A private limited company is the most flexible and credible structure of businesses. It is a type of structure wherein investors can be separate and the people managing the company that is directors can be different.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
    },
    {
      category: 'LLP',
      title: 'Setting up a Limited Liability Partnership (LLP) in India : A comprehensive guide',
      description: 'A Limited Liability Partnership (LLP) is a partnership in which some or all partners have limited liabilities. It therefore can exhibit elements of a partnership firm and a private limited company, where the business is carried out in a corporate framework, guided by terms of the mutually adopted partnership deed.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80'
    },
    {
      category: 'LLP- Form 11',
      title: 'Annual return of a Limited Liability Partnership (LLP) - Form 11',
      description: 'Form 11 is an annual return required for Limited Liability Partnerships (LLPs) in India, to be filed with the Registrar of Companies (RoC) via the Ministry of Corporate Affairs (MCA) website.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80'
    }
  ];

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
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span><span style={{ color: 'var(--text)' }}>One team for all your</span> accounting <span style={{ color: 'var(--green-bright)' }}>and</span> tax <span style={{ color: 'var(--text)' }}>needs</span></span>
          </h1>
          <p>
            Namma Bengaluru's accounting, compliance and tax services designed for professionals, startups and small businesses, so
            you can focus on what matters most.
          </p>
          <div className="hero-btns">
            <Button to="/contact" variant="hero-primary" size="large">
              Get Started  {' ->'}
            </Button>
            <Button onClick={openWhatsApp} variant="hero-outline" size="large">
              Let's Talk
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

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
            alt="Accounting and Tax Services"
          />
        </div>
      </section>

      {/* Why Plus & Minus */}
      <section className="section section-expanded">
        <div className="two-col">
          <div className="animate-slide-left" data-animate="slide-left">
            <h2 className="section-title" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'black' }}>
              Who we are
            </h2>
          </div>
          <div className="col-content animate-slide-right" data-animate="slide-right">
            <p className="section-sub" style={{ marginBottom: '0px' }}>
              A modern accounting and tax firm providing full service to Startups and small businesses.<br /><br />
              We believe that entrepreneurs are society's problem solvers. They see opportunities in complexities and drive us towards progress. Plus and Minus is the advisor, guide, and facilitator to every entrepreneur looking to start and manage a business in India.<br /><br />
              We are the first point of contact for startups whom we handhold from the day they start their business and at every step of the way throughout their entrepreneurship journey.<br /><br />
              We work with Individuals, Professionals, startups and small businesses, ranging from two founders to hundred-person teams.
            </p>
          </div>
        </div>
      </section>


      {/* Our Services */}
      <section id="services" className="services-section">
        <h2 className="section-title">Everything in one place.</h2>
        <p className="section-sub">
          Everything you need to launch, operate, and grow your business, in one place.
        </p>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < service.description.split('\n').length - 1 && <br />}
                </span>
              ))}</p>
              <ul className="service-list">
                {service.services.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="services-cta">
          <Button to="/contact" variant="primary">
            Explore Services →
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-content">

          <h2 className="section-title animate-slide-up" data-animate="slide-up" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
            We know you're busy growing your business.<br />
            <span>So, we keep it simple with <span style={{ color: 'black' }}>4</span> easy steps.</span>
          </h2>
          <div className="mission-steps">
            <div className="mission-step animate-scale-up" data-animate="scale-up" style={{ animationDelay: '0.1s' }}>
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Consultation</h3>
                <p>Share your requirements with our experts for a free consultation.</p>
              </div>
            </div>
            <div className="mission-step animate-scale-up" data-animate="scale-up" style={{ animationDelay: '0.2s' }}>
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Documentation</h3>
                <p>We help prepare and review all necessary documents.</p>
              </div>
            </div>
            <div className="mission-step animate-scale-up" data-animate="scale-up" style={{ animationDelay: '0.3s' }}>
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Application</h3>
                <p>We submit your application and follow up with authorities.</p>
              </div>
            </div>
            <div className="mission-step animate-scale-up" data-animate="scale-up" style={{ animationDelay: '0.4s' }}>
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Approval</h3>
                <p>Receive your certificate/license with our ongoing support.</p>
              </div>
            </div>
          </div>
          <div className="mission-buttons animate-slide-up" data-animate="slide-up" style={{ animationDelay: '0.5s' }}>
            <Button to="/contact" variant="hero-primary" size="large">
              Start Your Journey →
            </Button>
          </div>
        </div>
      </section>



      {/* Startup Finance Experts Section */}
      <section className="startup-finance-experts-section">
        <div className="startup-finance-experts-content">
          <div className="startup-finance-card animate-slide-left" data-animate="slide-left">
            <h2>Startup Finance<br /><span>Experts</span></h2>
            <p>
              Whether you're bootstrapping or backed by venture capital, we support startups at every stage of growth. From bookkeeping and tax compliance to Audit, we take care of your financial operations so you can focus on building and scaling your business.
            </p>
            <div className="startup-finance-cta">
              <Button onClick={() => window.open('tel:917204403746', '_self')} variant="primary" size="large">
                Talk to an Expert →
              </Button>
            </div>
          </div>
          <div className="who-we-work-with animate-slide-right" data-animate="slide-right">
            <h2>Who We Work With</h2>
            <ul>
              <li>Startups</li>
              <li>Small Businesses</li>
              <li>Professionals</li>
              <li>Creative Agencies</li>
              <li>Food Industry</li>
              <li>Real Estate</li>
              <li>Hospitality</li>
              <li>Consumer Goods & Retail</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why we're Different Section */}
      <section className="why-different-section">
        <div className="section-content">
          <div className="section-tag animate-fade-in" data-animate="fade-in" style={{ color: 'white' }}>Why we're Different</div>
          <h2 className="section-title animate-slide-up" data-animate="slide-up" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
            <span style={{ color: 'black' }}>Faster, Cheaper, Easier</span> is Possible With <span style={{ color: '#1a1a1a' }}>One Platform</span>
          </h2>
          <p className="section-sub animate-fade-in" data-animate="fade-in" style={{ maxWidth: '800px', marginBottom: '40px' }}>
            When your Incorporation, taxes, and accounting are all managed separately, you lose time and money. We bring everything together, so you can focus on what matters.
          </p>

          <div className="why-different-grid">
            <div className="why-different-card animate-scale-up" data-animate="scale-up" style={{ animationDelay: '0.1s' }}>
              <h3>One team. No juggling.</h3>
              <p style={{ fontSize: '13px' }}>Starting a business can be confusing, especially for the first time. We guide you step by step so you always know what to do next.</p>
            </div>
            <div className="why-different-card animate-scale-up" data-animate="scale-up" style={{ animationDelay: '0.2s' }}>
              <h3>No More Running Around</h3>
              <p style={{ fontSize: '13px' }}>No need to deal with different people for tax, accounts, and compliance. We handle everything in one place.</p>
            </div>
            <div className="why-different-card animate-scale-up" data-animate="scale-up" style={{ animationDelay: '0.3s' }}>
              <h3>Save More, Stress Less</h3>
              <p style={{ fontSize: '13px' }}>Hiring separate experts is costly. With PLUS & MINUS, you get all services in one place - simple and cost-effective.</p>
            </div>
            <div className="why-different-card animate-scale-up" data-animate="scale-up" style={{ animationDelay: '0.4s' }}>
              <h3>Trusted Tools & Partners</h3>
              <p style={{ fontSize: '13px' }}>We work with reliable accounting software and systems so your data is always accurate, organised, and accessible</p>
            </div>
          </div>

          <div className="guarantee-section animate-scale-up" data-animate="scale-up" style={{ marginTop: '-40px', padding: '35px 50px' }}>
            <h2 className="guarantee-title">Flawless Company Formation or Your Money Back</h2>
            <p className="guarantee-sub">
              Your business deserves a perfect start.<br />
              If there's any error from our side, we will refund the relevant amount. No questions asked.
            </p>
          </div>
        </div>
      </section>




      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blog Section */}
      <section className="blog-section">
        <div className="blog-header">
          <div className="blog-header-left animate-slide-left" data-animate="slide-left">
            <div className="section-tag">Latest</div>
            <h2 className="section-title" style={{ color: 'black' }}>Read our Blog</h2>
            <p className="section-sub">
              Our articles help you manage your business in India with ease. From GST and income tax to registrations and compliance,
              we provide simple guides, checklists, and clear explanations to keep you on track.
            </p>
          </div>
        </div>
        <div className="blog-grid">
          {blogData.map((blog, index) => (
            <div key={index} className="blog-card animate-scale-up" data-animate="scale-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="blog-image-container">
                <img src={blog.image} alt={blog.title} className="blog-image" />
              </div>
              <div className="blog-category">{blog.category}</div>
              <h3 className="blog-title">{blog.title}</h3>
              <p className={`blog-description ${expandedBlogs[index] ? 'expanded' : ''}`}>
                {blog.description}
              </p>
              <div className="blog-read-more">
                <button
                  onClick={() => toggleBlogExpansion(index)}
                  className="blog-read-more-link"
                >
                  {expandedBlogs[index] ? 'Read less ←' : 'Read more →'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default Home;
