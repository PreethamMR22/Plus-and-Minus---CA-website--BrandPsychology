import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
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
      icon: '',
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
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      category: 'LLP',
      title: 'Setting up a Limited Liability Partnership (LLP) in India : A comprehensive guide',
      description: 'A Limited Liability Partnership (LLP) is a partnership in which some or all partners have limited liabilities. It therefore can exhibit elements of a partnership firm and a private limited company, where the business is carried out in a corporate framework, guided by terms of the mutually adopted partnership deed.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      category: 'LLP- Form 11',
      title: 'Annual return of a Limited Liability Partnership (LLP) - Form 11',
      description: 'Form 11 is an annual return required for Limited Liability Partnerships (LLPs) in India, to be filed with the Registrar of Companies (RoC) via the Ministry of Corporate Affairs (MCA) website.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
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
          <div className="hero-tag animate-fade-in" data-animate="fade-in">Plus And Minus Accountants & Advisers</div>
          <h1 className="animate-slide-up" data-animate="slide-up" style={{animationDelay: '0.2s'}}>
            One team for all your<br />
            <span>accounting <span style={{color: 'white'}}>and</span> Tax needs</span>
          </h1>
          <p className="animate-fade-in" data-animate="fade-in" style={{animationDelay: '0.4s'}}>
            We provide quality Accounting, payroll and tax services to startups and small businesses.
          </p>
          <div className="hero-btns animate-slide-up" data-animate="slide-up" style={{animationDelay: '0.6s'}}>
            <Button to="/contact" variant="hero-primary" size="large">
              Get Started  {' ->'}
            </Button>
            <Button onClick={openWhatsApp} variant="hero-outline" size="large">
              Let's Talk 
            </Button>
          </div>

          
          <div className="hero-stats-box" ref={heroStatsRef}>
            <div className="hero-stat-item">
              <div className="hero-stat-number">{clientsCounter.count}+</div>
              <div className="hero-stat-label">Happy Clients</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">{teamCounter.count}+</div>
              <div className="hero-stat-label">Team of Experts</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">{engagementCounter.count}%</div>
              <div className="hero-stat-label">Repeat Engagement</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">{satisfactionCounter.count}%</div>
              <div className="hero-stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Plus & Minus */}
      <section className="section section-expanded">
        <div className="two-col">
          <div className="animate-slide-left" data-animate="slide-left">
            <div className="section-tag">Why Plus & Minus</div>
            <h2 className="section-title">
              Who we are
            </h2>
            <p className="section-sub">
             A modern accounting and tax firm providing full service to Startups and small businesses. 

We believe that entrepreneurs are society's problem solvers. They see opportunities in complexities and drive us towards progress. Plus and Minus is the advisor, guide, and facilitator to every entrepreneur looking to start and manage a business in India. 

We are the first point of contact for startups whom we handhold from the day they start their business and at every step of the way throughout their entrepreneurship journey.

We work with Individuals, Professionals, startups and small businesses, ranging from two founders to hundred-person teams.
            </p>
            <Link to="/about" className="section-link">
              See how we can help →
            </Link>
          </div>
          <div className="col-img animate-slide-right" data-animate="slide-right">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Professional receptionist" className="col-img-content" />
          </div>
        </div>
      </section>

      
      {/* Our Services */}
      <section id="services" className="services-section">
        <div className="section-tag animate-fade-in" data-animate="fade-in">What We Do</div>
        <h2 className="section-title animate-slide-up" data-animate="slide-up">Bunch of things we can do for you</h2>
        <p className="section-sub animate-fade-in" data-animate="fade-in">
          Comprehensive accounting and tax services tailored to your needs.
        </p>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card animate-scale-up" data-animate="scale-up" style={{animationDelay: `${index * 0.1}s`}}>
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
        <div className="services-cta">
          <Button to="/services" variant="primary">
            Explore Services →
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-content">
    
          <h2 className="section-title animate-slide-up" data-animate="slide-up">
            We know you're busy growing your business. So,<br />
            <span>we keep it simple with 4 easy steps.</span>
          </h2>
          <div className="mission-steps">
            <div className="mission-step animate-scale-up" data-animate="scale-up" style={{animationDelay: '0.1s'}}>
              <div className="step-content">
                <h3>1. Consultation</h3>
                <p>Share your requirements with our experts for a free consultation.</p>
              </div>
            </div>
            <div className="mission-step animate-scale-up" data-animate="scale-up" style={{animationDelay: '0.2s'}}>
              <div className="step-content">
                <h3>2. Documentation</h3>
                <p>We help prepare and review all necessary documents.</p>
              </div>
            </div>
            <div className="mission-step animate-scale-up" data-animate="scale-up" style={{animationDelay: '0.3s'}}>
              <div className="step-content">
                <h3>3. Application</h3>
                <p>We submit your application and follow up with authorities.</p>
              </div>
            </div>
            <div className="mission-step animate-scale-up" data-animate="scale-up" style={{animationDelay: '0.4s'}}>
              <div className="step-content">
                <h3>4. Approval</h3>
                <p>Receive your certificate/license with our ongoing support.</p>
              </div>
            </div>
          </div>
          <div className="mission-buttons animate-slide-up" data-animate="slide-up" style={{animationDelay: '0.5s'}}>
            <Button to="/contact" variant="hero-primary" size="large">
              Start Your Journey →
            </Button>
            <Button to="/about" variant="hero-outline" size="large">
              Our Story
            </Button>
          </div>
        </div>
      </section>

      

      {/* Startup Finance Experts Section */}
      <section className="startup-finance-experts-section">
        <div className="startup-finance-experts-content">
          <div className="startup-finance-card animate-slide-left" data-animate="slide-left">
            <h2>Startup Finance Experts</h2>
            <p>
              Whether you're bootstrapping or backed by venture capital, we support startups at
              every stage of growth. From bookkeeping and tax compliance to Audit, we take care
              of your financial operations so you can focus on building and scaling your
              business.
            </p>
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
          <div className="section-tag animate-fade-in" data-animate="fade-in">Why we're Different</div>
          <h2 className="section-title animate-slide-up" data-animate="slide-up">
            Faster, Cheaper, Easier is Possible With<br />
            <span>One Platform</span>
          </h2>
          <p className="section-sub animate-fade-in" data-animate="fade-in">
            When your Incorporation, taxes, and accounting are all managed separately, you lose time and money. 
            We bring everything together, so you can focus on what matters.
          </p>
          
          <div className="why-different-grid">
            <div className="why-different-card animate-scale-up" data-animate="scale-up" style={{animationDelay: '0.1s'}}>
              <h3>We Guide You at Every Step</h3>
              <p>Expert guidance from start to finish, ensuring you make the right decisions for your business.</p>
            </div>
            <div className="why-different-card animate-scale-up" data-animate="scale-up" style={{animationDelay: '0.2s'}}>
              <h3>No More Running Around</h3>
              <p>Everything you need in one place. No more coordinating between multiple service providers.</p>
            </div>
            <div className="why-different-card animate-scale-up" data-animate="scale-up" style={{animationDelay: '0.3s'}}>
              <h3>Save More, Stress Less</h3>
              <p>Cost-effective solutions that reduce your expenses while providing comprehensive services.</p>
            </div>
            <div className="why-different-card animate-scale-up" data-animate="scale-up" style={{animationDelay: '0.4s'}}>
              <h3>Trusted Tools & Partners</h3>
              <p>Industry-leading technology and partnerships that ensure reliability and accuracy.</p>
            </div>
          </div>
          
          <div className="guarantee-section animate-scale-up" data-animate="scale-up">
            <h2 className="guarantee-title">Flawless Company Formation or Your Money Back</h2>
            <p className="guarantee-sub">
              Your business deserves a perfect start.<br />
              If there's any error from our side, we'll refund the relevant amount - no questions asked.
            </p>
          </div>
        </div>
      </section>

      
      {/* Technology Section */}
      <section className="technology-section">
        <div className="technology-content">
          <div className="technology-left animate-slide-left" data-animate="slide-left">
            <div className="technology-image-container">
              <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Technology" className="technology-main-image" />
            </div>
            <div className="technology-tag">Competitive edge through <br /> <b>AI + Deep Expertise</b></div>
          </div>
          <div className="technology-right animate-slide-right" data-animate="slide-right">
            <div className="section-tag">THE PLUS AND MINUS ADVANTAGE</div>
            <h2 className="section-title">
              We unite expertise <br /> and tech so you can <br /> <span className="highlight-green">outthink, outpace and <br /> outperform</span>
            </h2>
            <p className="section-sub">
              AI, climate change and geopolitical shifts are reconfiguring global economy. We bring the sharpest minds in tax and finance. Deep expertise that industries are built on. And we roll up our sleeves to deliver results — alongside you, start to finish.
            </p>
            <div className="technology-features-grid">
              <div className="feature-card animate-scale-up" data-animate="scale-up" style={{animationDelay: '0.1s'}}>
                <h3>AI-Tailored Advice</h3>
                <p>We know how your business works so you can put AI to work for your business</p>
              </div>
              <div className="feature-card animate-scale-up" data-animate="scale-up" style={{animationDelay: '0.2s'}}>
                <h3>Industry-Leading Expertise</h3>
                <p>Deep sector knowledge so you can make decisions your future can stand on</p>
              </div>
              <div className="feature-card animate-scale-up" data-animate="scale-up" style={{animationDelay: '0.3s'}}>
                <h3>Strategic Alliances</h3>
                <p>We work with tech's titans and trailblazers so you can think like a startup</p>
              </div>
              <div className="feature-card animate-scale-up" data-animate="scale-up" style={{animationDelay: '0.4s'}}>
                <h3>Sustainability Built In</h3>
                <p>We enhance strategy with sustainability to strengthen your resilience and returns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="clients-section">
        <div className="clients-header animate-fade-in" data-animate="fade-in">
          <p className="clients-tag">Our clients work at top global companies</p>
        </div>
        <div className="clients-grid">
          {clientsData.map((client, index) => (
            <div key={index} className="client-item animate-scale-up" data-animate="scale-up" style={{animationDelay: `${index * 0.05}s`}}>
              <span className="client-name">{client}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="blog-header">
          <div className="blog-header-left animate-slide-left" data-animate="slide-left">
            <div className="section-tag">Latest</div>
            <h2 className="section-title">Read our Blog</h2>
            <p className="section-sub">
              Our articles help you manage your business in India with ease. From GST and income tax to registrations and compliance, 
              we provide simple guides, checklists, and clear explanations to keep you on track.
            </p>
          </div>
          <div className="blog-header-right animate-slide-right" data-animate="slide-right">
            <Link to="/blog" className="blog-view-all-link">
              View All →
            </Link>
          </div>
        </div>
        <div className="blog-grid">
          {blogData.map((blog, index) => (
            <div key={index} className="blog-card animate-scale-up" data-animate="scale-up" style={{animationDelay: `${index * 0.1}s`}}>
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

      
      
      {/* Final Dark Strip */}
      <section className="final-cta">
        <div className="final-cta-content animate-slide-up" data-animate="slide-up">
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

export default Home;
