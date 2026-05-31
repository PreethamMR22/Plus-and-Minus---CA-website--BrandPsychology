import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faLightbulb, faHandsClapping, faHandHoldingHeart, faPuzzlePiece, faCrosshairs, faClipboardList, faStar, faChevronLeft, faChevronRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './About.css';
import peopleGrid from '../assets/people-grid-new.png';
import vidhanaSoudha from '../assets/vidhana-soudha.png';
import punithImage from '/images/team/Punith K.png';
import sowjanyaImage from '/images/team/Sowjanya.png';
import harshaImage from '/images/team/Harsha.png';
import harshaComplianceImage from '/images/team/Harsha Compliance.png';
import raghuImage from '/images/team/Raghu.png';
import vasuImage from '/images/team/Vasu.png';
import deepakImage from '/images/team/Deepak .png';

const About = () => {
  const values = [
    {
      title: 'Lift each other up',
      description: 'We succeed as one team by recognizing, inspiring, and motivating each other.',
      icon: faHandsClapping
    },
    {
      title: 'Champion our customers',
      description: 'Our customers are at the center of everything we do.',
      icon: faHandHoldingHeart
    },
    {
      title: 'See the whole picture',
      description: "We're curious and collaborative, always connecting the dots to create seamless experiences.",
      icon: faPuzzlePiece
    },
    {
      title: 'Focus on results',
      description: 'We take ownership of our goals and strive for excellence through innovation and accountability.',
      icon: faCrosshairs
    },
    {
      title: 'Keep it simple',
      description: 'We value clear, direct, and inclusive communication to build trust and understanding.',
      icon: faClipboardList
    }
  ];

  const team = [
    {
      name: 'Punith Krishna',
      role: 'Taxation Expert',
      photo: punithImage
    },
    {
      name: 'C S Sowjanya Prakash',
      role: 'Company Secretary',
      photo: sowjanyaImage
    },
    {
      name: 'Harsha Swamy',
      role: 'Accounting and Bookkeeping Expert',
      photo: harshaImage
    },
    {
      name: 'Harsha Ganesh',
      role: 'Compliance Expert',
      photo: harshaComplianceImage
    },
    {
      name: 'N Raghu Kumar, CFP',
      role: 'Certified Financial Planner and SEBI Registered Investment Advisor',
      photo: raghuImage
    },
    {
      name: 'Shank K Vasudev',
      role: 'Mentor and Startup Advisor, Founder and CEO of Plan a wedding and phundo',
      photo: vasuImage
    },
    {
      name: 'Deepak Anniyappa',
      role: 'Mentor and Advisor, IIM Alumni, Founder of NxVoy Trips',
      photo: deepakImage
    }
  ];

  const testimonials = [
    {
      stars: 5,
      text: "Huge shoutout to Punit at Plus and Minus for his help with our overdue tax filings. My wife and I were worried about the missed assessment years, but Punit guided us through every step with clarity and patience. His services are professional yet very affordably priced.\n\nI'm so impressed that I've moved my tax business away from my previous CA to work with him exclusively moving forward. 5 stars!",
      author: "Raghu K"
    },
    {
      stars: 5,
      text: "We have been working with Punith for ITR filing for the last 5 years. Recently when we started a business he guided us and completed the entire process in just 3 days.\n\nNo matter how many questions I asked he always replied properly without any delay. His approach is very friendly and professional. He genuinely cares about clients and makes sure everything is handled well. Highly recommended",
      author: "SPORTIQ"
    },
    {
      stars: 5,
      text: "I was recently introduced to Punith by my financial planner, and the experience with his services has been seamless and excellent.\n\nHe efficiently handled the process for our company registration and tax compliance. The attention to detail and prompt service is remarkable. Truly a trustworthy partner for all financial needs.",
      author: "Ananya R"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-fresh">
        <div className="container">
          <div className="hero-content-wrapper">
            <h1 className="hero-title fade-up">
              <span className="hero-title-line">Namma Bengaluru.</span> <span className="hero-title-line blue-text">Namma Startups.</span> <span className="hero-title-line">Namma Taxpayers</span>
            </h1>

            <div className="namma-story-section fade-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="sub-heading">Namma Story</h2>

              <div className="story-content">
                <p>Plus & Minus was built in Namma Bengaluru for the people building businesses every day.</p>
                <p>We started in 2020 with a simple goal - to help small and mid-sized businesses handle accounting, taxes, payroll, and compliance without stress or confusion.</p>
                <p>As Bengaluru's startup and business culture grew, we grew alongside it - supporting hundreds of businesses with reliable systems, honest guidance, and responsive support.</p>
                <p>Today, we continue to be a local finance partner that understands your business, picks up the phone when you call, and helps you grow with confidence.</p>
                <p>Every client we serve is a Bengaluru business we believe in. When you grow, we grow. That is why we show up like your financial partner - not just a service provider.</p>
              </div>
            </div>

            <div className="people-gallery fade-up" style={{ animationDelay: '0.4s' }}>
              <img src={peopleGrid} alt="Our Community in Bengaluru" className="gallery-img" />
            </div>

            <div className="stats-section fade-up" style={{ animationDelay: '0.6s' }}>
              <p className="stats-intro">Each number is backed by years of focused tax expertise and real outcomes.</p>
              <div className="stats-grid-box">
                <div className="stat-card">
                  <h3 className="stat-number">500+</h3>
                  <p className="stat-label">Happy Client</p>
                </div>
                <div className="stat-card">
                  <h3 className="stat-number">10+</h3>
                  <p className="stat-label">Team of Experts</p>
                </div>
                <div className="stat-card">
                  <h3 className="stat-number">98%</h3>
                  <p className="stat-label">Repeat Engagement</p>
                </div>
                <div className="stat-card">
                  <h3 className="stat-number">100%</h3>
                  <p className="stat-label">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section section-padding">
        <div className="container">
          <h2 className="section-title-large">
            Built in Bengaluru. <span className="blue-text">For Bengaluru.</span>
          </h2>
          <div className="mission-vision-spacing-mobile"></div>
          <div className="mission-vision-grid">
            <div className="mission-vision-cards">
              <div className="mission-card fade-up">
                <div className="card-header">
                  <span className="card-icon"><FontAwesomeIcon icon={faBullseye} /></span>
                  <h3>Namma Mission</h3>
                </div>
                <p>To give every Bengaluru business - startup or small, solo or team - the financial clarity and peace of mind they deserve through simple, transparent, and trustworthy tax, accounting, and compliance support.</p>
              </div>
              <div className="vision-card fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="card-header">
                  <span className="card-icon"><FontAwesomeIcon icon={faLightbulb} /></span>
                  <h3>Namma Vision</h3>
                </div>
                <p>To build a Bengaluru and Karnataka business ecosystem where startups, professionals, and small businesses can grow without fear or confusion around taxes, accounting, and compliance.</p>
              </div>
            </div>
            <div className="mission-vision-image fade-up" style={{ animationDelay: '0.4s' }}>
              <img src={vidhanaSoudha} alt="Vidhana Soudha Bengaluru" className="landmark-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section-padding">
        <div className="container">
          <div className="section-header-centered">
            <h2 className="section-title-large">Namma <span className="blue-text">Values</span></h2>
            <p className="section-subtitle">We move fast, think big, and lift each other up - because<br />when we win together, our customers do too.</p>
          </div>
          <div className="values-cards-grid">
            {values.map((v, i) => (
              <div key={i} className="value-item-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="value-icon-circle"><FontAwesomeIcon icon={v.icon} /></div>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section-fresh section-padding">
        <div className="container">
          <div className="section-header-centered">
            <h2 className="section-title-large">Namma <span className="blue-text">Team</span></h2>
            <p className="section-subtitle">Your trusted team for everything from daily operations to long-term planning.</p>
          </div>
          <div className="team-grid-fresh">
            {team.map((m, i) => (
              <div key={i} className="team-member-card-fresh fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="member-photo-wrapper">
                  <img src={m.photo} alt={m.name} className="member-photo" />
                </div>
                <div className="member-info-fresh">
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section-fresh section-padding">
        <div className="container">
          <h2 className="testimonials-title fade-up">What our <span className="blue-text">customers</span> say</h2>
          <p className="testimonials-subtitle fade-up">Here's a glimpse of what they love about Plus and Minus.</p>
          <div className="testimonials-grid-fresh">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card-fresh fade-up" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stars">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <FontAwesomeIcon icon={faStar} key={i} />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-author">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-fresh section-padding">
        <div className="container">
          <div className="cta-content-fresh fade-up">
            <h2 className="cta-greeting">Swagata</h2>
            <h1 className="cta-heading">Let's make this simple.</h1>
            <p className="cta-description">
              Drop us a WhatsApp. Tell us what's on your mind. We'll take it from there like we have for 500+ folks across Bengaluru.
            </p>
            <div className="cta-buttons-fresh">
              <a href="tel:+919876543210" className="btn-primary cta-btn">
                <FontAwesomeIcon icon={faPhone} />
                <span>Talk to an Expert</span>
              </a>
              <a href="https://wa.me/919876543210" className="btn-secondary cta-btn">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>WhatsApp us now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
