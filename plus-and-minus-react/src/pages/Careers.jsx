import Button from '../components/Button';
import './Careers.css';

const Careers = () => {
  const benefits = [
    {
      icon: '📚',
      title: 'Study Support',
      description: 'Full funding and study leave for ACA, ACCA, ATT and CTA qualifications.'
    },
    {
      icon: '🏠',
      title: 'Flexible Working',
      description: 'Hybrid working arrangements and flexibility to support your lifestyle.'
    },
    {
      icon: '💰',
      title: 'Competitive Pay',
      description: 'Market-leading salaries with annual reviews and performance bonuses.'
    },
    {
      icon: '📈',
      title: 'Career Growth',
      description: 'Clear pathways to Manager, Director and Partner. We grow together.'
    },
    {
      icon: '❤️',
      title: 'Health & Wellbeing',
      description: 'Comprehensive health insurance and mental wellbeing programmes.'
    },
    {
      icon: '🎉',
      title: 'Team Culture',
      description: 'Regular team events, social activities and an inclusive environment.'
    }
  ];

  const jobs = [
    {
      title: 'Senior Tax Manager – Personal Tax',
      description: 'Lead a portfolio of high-net-worth personal tax clients, advising on complex tax matters including non-domicile planning, trusts and estate planning.',
      tags: ['📍 Mumbai', 'Full-time', 'Senior']
    },
    {
      title: 'Corporate Tax Adviser',
      description: 'Join our growing corporate tax team advising listed companies, PE-backed businesses and SMEs on all aspects of corporate tax compliance and planning.',
      tags: ['📍 Bangalore', 'Full-time', 'Mid-level']
    },
    {
      title: 'R&D Tax Specialist',
      description: 'Help innovative businesses across tech, biotech and manufacturing claim R&D tax relief. You\'ll prepare claims, liaise with HMRC and support clients through enquiries.',
      tags: ['📍 Remote / Delhi NCR', 'Full-time', 'Mid-level']
    },
    {
      title: 'Management Accountant',
      description: 'Prepare monthly management accounts, cash flow reports and KPI dashboards for a portfolio of growing businesses. Xero experience preferred.',
      tags: ['📍 Mumbai', 'Full-time', 'Junior-Mid']
    },
    {
      title: 'Payroll Administrator',
      description: 'Process payroll for a diverse client base. Experience with payroll software and strong attention to detail required.',
      tags: ['📍 Bangalore', 'Full-time', 'Junior']
    },
    {
      title: 'Graduate Tax Trainee (ACA/ACCA)',
      description: 'Start your career in tax with a firm that invests in your development. Full study support for ACA or ACCA qualifications provided.',
      tags: ['📍 Mumbai / Bangalore', 'Full-time', 'Graduate']
    }
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="section-content">
          <div className="section-tag">Careers at Plus And Minus</div>
          <h1>
            Plus And Minus is all about you.<br />
            <span>Your future starts here.</span>
          </h1>
          <p>
            At Plus And Minus, we work with numbers. But it should never mean that you be one. Whether you're just starting out or an experienced professional — we want to hear from you.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="section-centered">
          <h2>Why join Plus And Minus?</h2>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jobs Section */}
      <section className="section">
        <div className="section-centered">
          <div className="section-tag">Open Positions</div>
          <h2>Current Opportunities</h2>
        </div>
        <div className="jobs-list">
          {jobs.map((job, index) => (
            <div key={index} className="job-item">
              <div>
                <div className="job-title">{job.title}</div>
                <div className="job-desc">{job.description}</div>
                <div className="job-tags">
                  {job.tags.map((tag, idx) => (
                    <span key={idx} className="job-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="job-apply">Apply →</div>
            </div>
          ))}
        </div>
      </section>

      {/* No Role Section */}
      <section className="no-role">
        <h2>Don't see the right role?</h2>
        <p>We're always looking for exceptional talent. Send us your CV and we'll keep you in mind.</p>
        <Button variant="white-rounded">
          Send Us Your CV →
        </Button>
      </section>

      {/* Green Section */}
      <section className="green-section">
        <div>
          <h2>Ready to take control of your finances?</h2>
          <p>Talk to our experts today. No obligation, just clarity.</p>
        </div>
        <Button variant="white-rounded">
          Let's Talk →
        </Button>
      </section>
    </div>
  );
};

export default Careers;
