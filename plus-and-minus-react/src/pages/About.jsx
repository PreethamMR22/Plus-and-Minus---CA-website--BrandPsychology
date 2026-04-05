import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './About.css';

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Precision',
      description: 'Every number matters. We treat your finances with the care and accuracy they deserve.'
    },
    {
      icon: '❤️',
      title: 'Human-first',
      description: 'We work with numbers but for people. Every client is a person with real goals and real challenges.'
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'Chartered Accountants with deep expertise. We set a high bar — for ourselves, and the results we deliver.'
    },
    {
      icon: '🔍',
      title: 'Transparency',
      description: 'Clear pricing, honest advice. No jargon, no surprises — just straightforward, trustworthy guidance.'
    }
  ];

  const team = [
    {
      photo: '👨‍💼',
      name: 'Punith Krishna',
      role: 'Managing Partner · Taxation Expert, FCA'
    },
    {
      photo: '👨‍💼',
      name: 'N Raghu Kumar',
      role: 'Certified Financial Planner (CFP)'
    },
    {
      photo: '👨‍💼',
      name: 'Shank K Vasudev',
      role: 'Mentor'
    },
    {
      photo: '👩‍💼',
      name: 'Harsha Swamy',
      role: 'Taxation Expert'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="section-content">
          <div className="section-tag">Who We Are</div>
          <h1>
            Innovation with<br />
            experience on<br />
            its side.
          </h1>
          <p>
            Plus And Minus Accountants & Advisers — where chartered expertise meets genuine human care. We work with numbers. But for people.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="two-col">
          <div>
            <div className="section-tag">Our Story</div>
            <h2 className="section-title">
              We created Plus And Minus to help you reach <span>financial freedom</span>
            </h2>
            <p className="section-sub">
              You only have one life, and it's often filled with long work days and stress about money. It doesn't have to be that way. The reality is, wealth is freedom.
            </p>
            <p className="section-sub">
              We created Plus And Minus to help you reach financial freedom — the moment you can stop working and start living your meaningful life without money stress.
            </p>
            <p className="section-sub">
              In an environment where anyone can call themselves an accountant, we stand apart. Our team of Chartered Accountants provides end-to-end strategic accounting in the Age of AI — with more transparency, better outcomes, and real trust.
            </p>
          </div>
          <div className="col-img">
            <div className="col-img-placeholder">📋</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="section-centered">
          <div className="section-tag">What Drives Us</div>
          <h2 className="section-title">Our Values</h2>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
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

      {/* Team */}
      <section className="section">
        <div className="section-centered">
          <div className="section-tag">Our People</div>
          <h2 className="section-title">Meet the Leadership Team</h2>
          <p className="section-sub">
            Experienced professionals dedicated to your success. Each member brings deep expertise and a genuine commitment to every client.
          </p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-photo">{member.photo}</div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="dark-section">
        <div className="section-centered">
          <h2>Ready to work with Plus And Minus?</h2>
          <p>Let's talk about how we can help you achieve your financial goals.</p>
          <Button to="/contact" variant="hero-primary" size="large">
            Get In Touch →
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

export default About;
