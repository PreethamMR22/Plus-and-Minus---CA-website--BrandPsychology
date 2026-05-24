import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faLightbulb, faHandsClapping, faHandHoldingHeart, faPuzzlePiece, faCrosshairs, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import './About.css';
import peopleGrid from '../assets/people-grid-new.png';
import vidhanaSoudha from '../assets/vidhana-soudha.png';
import teamPlaceholder from '../assets/team-placeholder.png';

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
      photo: teamPlaceholder
    },
    {
      name: 'C S Sowjanya Prakash',
      role: 'Company Secretary',
      photo: teamPlaceholder
    },
    {
      name: 'Harsha Swamy',
      role: 'Accounting and Bookkeeping Expert',
      photo: teamPlaceholder
    },
    {
      name: 'Harsha Ganesh',
      role: 'Compliance Expert',
      photo: teamPlaceholder
    },
    {
      name: 'N Raghu Kumar, CFP',
      role: 'Certified Financial Planner and SEBI Registered Investment Advisor',
      photo: teamPlaceholder
    },
    {
      name: 'Shank K Vasudev',
      role: 'Mentor and Startup Advisor, Founder and CEO of Plan a wedding and phundo',
      photo: teamPlaceholder
    },
    {
      name: 'Deepak Anniyappa',
      role: 'Mentor and Advisor, IIM Alumni, Founder of NxVoy Trips',
      photo: teamPlaceholder
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-fresh">
        <div className="container">
          <div className="hero-content-wrapper">
            <h1 className="hero-title fade-up">
              Namma Bengaluru. <span className="blue-text">Namma Startups.</span> Namma Taxpayers
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
    </div>
  );
};

export default About;
