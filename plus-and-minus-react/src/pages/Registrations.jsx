import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './Registrations.css';

const Registrations = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="registrations-page">
      {/* Hero Section */}
      <section className="hero registrations-hero">
        <div className="hero-content">
          <h1>Running a <span>business legally </span><br className="desktop-only-br" />shouldn't be this hard.</h1>
          <p>
            From FSSAI to Trademark, PF to Startup India - we handle every<br className="desktop-only-br" />
            registration and licence your business needs. One team. Zero<br className="desktop-only-br" />
            running around
          </p>
          <div className="hero-btns">
            <Button to="/contact" variant="hero-primary" size="large">
              Talk to an Expert  {' ->'}
            </Button>
            <Button onClick={() => window.open('https://wa.me/917204403746', '_blank')} variant="hero-outline" size="large">
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
        
        <div className="hero-image">
          <img 
            src="/images/registration/Hero Section_Reg.png" 
            alt="Business Registration Professional" 
          />
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview-section">
        <div className="section-header">
          <span className="section-tag">ALL SERVICES</span>
          <h2>Registrations & <span>Licences</span></h2>
          <p>Everything your business needs to operate legally — handled end to end</p>
        </div>

        <div className="services-grid">
          {/* Card 1: FSSAI */}
          <div className="service-card">
            <div className="card-badge badge-green">FSSAI</div>
            <h3>FSSAI Food License</h3>
            <p className="card-desc">
              Selling or serving food without a licence is illegal — no matter how small your business is.
            </p>
            <div className="card-divider"></div>
            <div className="card-get">
              <strong>What you get:</strong> FSSAI registration or licence obtained. Operate your food business with zero compliance risk.
            </div>
            <div className="card-footer">
              <a href="https://wa.me/917204403746" target="_blank" rel="noopener noreferrer" className="wa-link">WhatsApp Us</a>
              <div className="timeline-badge">1–3 days</div>
            </div>
          </div>

          {/* Card 2: IEC */}
          <div className="service-card">
            <div className="card-badge badge-blue">IEC</div>
            <h3>IEC — Import / Export Code</h3>
            <p className="card-desc">
              No import or export is legally allowed without an IEC. One code. Lifetime validity.
            </p>
            <div className="card-divider"></div>
            <div className="card-get">
              <strong>What you get:</strong> IEC registered with DGFT. Start importing or exporting from India immediately.
            </div>
            <div className="card-footer">
              <a href="https://wa.me/917204403746" target="_blank" rel="noopener noreferrer" className="wa-link">WhatsApp Us</a>
              <div className="timeline-badge">Same day</div>
            </div>
          </div>

          {/* Card 3: TM */}
          <div className="service-card">
            <div className="card-badge badge-orange">TM</div>
            <h3>Trademark Registration</h3>
            <p className="card-desc">
              Anyone can copy your brand name or logo if it's not trademarked. Once it's gone, it's gone.
            </p>
            <div className="card-divider"></div>
            <div className="card-get">
              <strong>What you get:</strong> Trademark filed with IP India. Your brand name and logo - legally protected.
            </div>
            <div className="card-footer">
              <a href="https://wa.me/917204403746" target="_blank" rel="noopener noreferrer" className="wa-link">WhatsApp Us</a>
              <div className="timeline-badge">12–18 months</div>
            </div>
          </div>

          {/* Card 4: PF */}
          <div className="service-card">
            <div className="card-badge badge-grey">PF</div>
            <h3>PF Registration</h3>
            <p className="card-desc">
              Employing 20 or more people? PF registration is mandatory. Non-compliance attracts heavy penalties.
            </p>
            <div className="card-divider"></div>
            <div className="card-get">
              <strong>What you get:</strong> EPF registration done. Your employees' retirement contributions are protected and compliant.
            </div>
            <div className="card-footer">
              <a href="https://wa.me/917204403746" target="_blank" rel="noopener noreferrer" className="wa-link">WhatsApp Us</a>
              <div className="timeline-badge">3–7 days</div>
            </div>
          </div>

          {/* Card 5: ESIC */}
          <div className="service-card">
            <div className="card-badge badge-pink">ESIC</div>
            <h3>ESIC Registration</h3>
            <p className="card-desc">
              Your employees deserve health and insurance coverage. ESIC is mandatory once you cross 10 employees.
            </p>
            <div className="card-divider"></div>
            <div className="card-get">
              <strong>What you get:</strong> ESIC registered. Your team gets medical, maternity, and disability benefits — fully compliant.
            </div>
            <div className="card-footer">
              <a href="https://wa.me/917204403746" target="_blank" rel="noopener noreferrer" className="wa-link">WhatsApp Us</a>
              <div className="timeline-badge">3–7 days</div>
            </div>
          </div>

          {/* Card 6: UR */}
          <div className="service-card">
            <div className="card-badge badge-cyan">UR</div>
            <h3>Udyam Registration</h3>
            <p className="card-desc">
              Missing out on MSME subsidies, priority lending, and government tenders because you're not registered?
            </p>
            <div className="card-divider"></div>
            <div className="card-get">
              <strong>What you get:</strong> Udyam certificate in hand. Unlock MSME benefits, lower interest rates, and government schemes.
            </div>
            <div className="card-footer">
              <a href="https://wa.me/917204403746" target="_blank" rel="noopener noreferrer" className="wa-link">WhatsApp Us</a>
              <div className="timeline-badge">Same day</div>
            </div>
          </div>

          {/* Card 7: PT */}
          <div className="service-card">
            <div className="card-badge badge-cyan">PT</div>
            <h3>Professional Tax</h3>
            <p className="card-desc">
              Employing staff in Karnataka? Professional Tax registration and monthly filing is mandatory for every employer.
            </p>
            <div className="card-divider"></div>
            <div className="card-get">
              <strong>What you get:</strong> PT registration done and filings handled. Zero penalties, full compliance.
            </div>
            <div className="card-footer">
              <a href="https://wa.me/917204403746" target="_blank" rel="noopener noreferrer" className="wa-link">WhatsApp Us</a>
              <div className="timeline-badge">Same day</div>
            </div>
          </div>

          {/* Card 8: S&E */}
          <div className="service-card">
            <div className="card-badge badge-purple">S&E</div>
            <h3>Shops & Establishment</h3>
            <p className="card-desc">
              Running a shop, office, or any commercial space without this licence? You're operating illegally.
            </p>
            <div className="card-divider"></div>
            <div className="card-get">
              <strong>What you get:</strong> Shops Act registration done. Operate your business premises with full legal backing.
            </div>
            <div className="card-footer">
              <a href="https://wa.me/917204403746" target="_blank" rel="noopener noreferrer" className="wa-link">WhatsApp Us</a>
              <div className="timeline-badge">1–3 days</div>
            </div>
          </div>

          {/* Card 9: SI */}
          <div className="service-card">
            <div className="card-badge badge-green-light">SI</div>
            <h3>Startup India — DPIIT</h3>
            <p className="card-desc">
              Building a startup and not DPIIT recognised? You're leaving tax benefits, funding, and government perks on the table.
            </p>
            <div className="card-divider"></div>
            <div className="card-get">
              <strong>What you get:</strong> DPIIT recognition secured. Access 3-year tax holiday, fast-track patent filing, and funding support.
            </div>
            <div className="card-footer">
              <a href="https://wa.me/917204403746" target="_blank" rel="noopener noreferrer" className="wa-link">WhatsApp Us</a>
              <div className="timeline-badge">Same day</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="audience-section">
        <div className="section-header">
          <span className="section-tag">WHO THIS IS FOR</span>
          <h2>Every kind of business needs <span>to be legal.</span></h2>
          <p>Whether you're just starting out or already running - there's always a registration you need to sort.</p>
        </div>

        <div className="audience-container">
          {/* Left Text Column */}
          <div className="audience-column audience-text-left">
            <div className="audience-box">
              <h3>New founders</h3>
              <p>
                Just starting? Udyam, Shops Act,<br className="desktop-only-br" />
                and Startup India recognition are<br className="desktop-only-br" />
                your first three steps. We'll guide<br className="desktop-only-br" />
                you on what's needed.
              </p>
            </div>
            <div className="audience-box">
              <h3>Food businesses</h3>
              <p>
                Cloud kitchen, restaurant,<br className="desktop-only-br" />
                bakery, or home cook - FSSAI is<br className="desktop-only-br" />
                non-negotiable. Get registered<br className="desktop-only-br" />
                before you start selling.
              </p>
            </div>
          </div>

          {/* Center Image Gallery */}
          <div className="audience-gallery">
            <img 
              src="/images/registration/5 (1).png" 
              alt="Business professional" 
              className="gallery-single-image"
            />
          </div>

          {/* Right Text Column */}
          <div className="audience-column audience-text-right">
            <div className="audience-box">
              <h3>Growing teams</h3>
              <p>
                Hired your 10th employee?<br className="desktop-only-br" />
                PF and ESIC become mandatory.<br className="desktop-only-br" />
                Don't wait for a notice - get<br className="desktop-only-br" />
                registered today.
              </p>
            </div>
            <div className="audience-box">
              <h3>Exporters & importers</h3>
              <p>
                Want to sell internationally or<br className="desktop-only-br" />
                source from abroad? IEC is your<br className="desktop-only-br" />
                first step - one-time registration,<br className="desktop-only-br" />
                valid for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-header">
          <span className="section-tag">HOW IT WORKS</span>
          <h2>Simple. <span>Every time.</span></h2>
          <p>You share your details. We handle everything else — documents, filings, follow-ups, and approvals.</p>
        </div>

        <div className="how-it-works-container">
          <div className="how-it-works-left">
            <div className="step-card">
              <div className="step-header">
                <div className="step-number">1</div>
                <h3>Tell us what you need</h3>
              </div>
              <p>WhatsApp us or fill the form. Tell us which registration you need - or just describe your situation and we will advise you on exactly what's required.</p>
            </div>
            <div className="step-card">
              <div className="step-header">
                <div className="step-number">2</div>
                <h3>We collect and prepare</h3>
              </div>
              <p>We tell you exactly which documents are needed - no guesswork. We review, prepare, and organise everything for a smooth application.</p>
            </div>
            <div className="step-card">
              <div className="step-header">
                <div className="step-number">3</div>
                <h3>We file and follow up</h3>
              </div>
              <p>We submit your application and follow up with the relevant authority until approval. You receive your certificate and we stay available for any questions after.</p>
            </div>
          </div>
          <div className="how-it-works-right">
            <img 
              src="/images/registration/6 (1).png" 
              alt="Professional at work" 
            />
          </div>
        </div>
      </section>

      <section className="faqs-section">
        <div className="faqs-container">
          <span className="section-tag">FAQ</span>
          <h2>Questions we hear <span>often.</span></h2>
          <p className="faq-subtitle">If your question isn't here - just WhatsApp us. We will answer in minutes.</p>
          
          <div className="faqs-list">
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(0)}>
                <span>DO I need all these registrations?</span>
                <div className={`faq-toggle ${expandedFAQ === 0 ? 'expanded' : ''}`}>
                  <span className="faq-icon">+</span>
                </div>
              </div>
              <div className={`faq-answer ${expandedFAQ === 0 ? 'expanded' : ''}`}>
                No - it depends on your business type, location, and size. WhatsApp us with a brief description of your business and we'll tell you exactly which ones apply to you. Takes 5 minutes.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(1)}>
                <span>What documents do I need to share?</span>
                <div className={`faq-toggle ${expandedFAQ === 1 ? 'expanded' : ''}`}>
                  <span className="faq-icon">+</span>
                </div>
              </div>
              <div className={`faq-answer ${expandedFAQ === 1 ? 'expanded' : ''}`}>
                It varies by registration. For most, you'll need your PAN, Aadhaar, business address proof, and bank details. We'll send you a precise checklist for whichever registration you need - no guesswork.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(2)}>
                <span>What if my application gets rejected?</span>
                <div className={`faq-toggle ${expandedFAQ === 2 ? 'expanded' : ''}`}>
                  <span className="faq-icon">+</span>
                </div>
              </div>
              <div className={`faq-answer ${expandedFAQ === 2 ? 'expanded' : ''}`}>
                We review all documents carefully before submitting to minimise this risk. If a rejection does happen, we analyse the reason and refile at no additional charge for errors on our side.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(3)}>
                <span>Are there government fees on top of your charges?</span>
                <div className={`faq-toggle ${expandedFAQ === 3 ? 'expanded' : ''}`}>
                  <span className="faq-icon">+</span>
                </div>
              </div>
              <div className={`faq-answer ${expandedFAQ === 3 ? 'expanded' : ''}`}>
                Yes - government fees are separate and passed through at actuals. We'll tell you the exact government fee for your registration before we start, so there are no surprises.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(4)}>
                <span>Can I get multiple done together?</span>
                <div className={`faq-toggle ${expandedFAQ === 4 ? 'expanded' : ''}`}>
                  <span className="faq-icon">+</span>
                </div>
              </div>
              <div className={`faq-answer ${expandedFAQ === 4 ? 'expanded' : ''}`}>
                Absolutely. Many clients come to us needing 3–4 registrations at once. We handle them in parallel so you're not waiting for one to finish before starting the next.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(5)}>
                <span>I already have some registrations but need help with renewals. Can you help?</span>
                <div className={`faq-toggle ${expandedFAQ === 5 ? 'expanded' : ''}`}>
                  <span className="faq-icon">+</span>
                </div>
              </div>
              <div className={`faq-answer ${expandedFAQ === 5 ? 'expanded' : ''}`}>
                Yes. We handle renewals, amendments, and compliance for existing registrations too - not just new ones. Just WhatsApp us with what you have and what you need.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy Section */}
      <section className="consultancy-section">
        <div className="consultancy-container">
          <div className="consultancy-left">
            <h2>Not sure where<br className="desktop-only-br" /><span> to start?</span></h2>
            <p>
              Tell us about your business in one WhatsApp message.<br className="desktop-only-br" />
              We will tell you exactly which registrations you need - free,<br className="desktop-only-br" />
              in minutes, no commitment.
            </p>
            <div className="consultancy-btns">
              <Button to="/contact" variant="primary" size="large">
                <i className="fas fa-phone-alt"></i> Talk to an Expert
              </Button>
              <Button 
                onClick={() => window.open('https://wa.me/917204403746', '_blank')} 
                variant="primary" 
                size="large"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid black',
                  color: 'black'
                }}
              >
                <i className="fab fa-whatsapp"></i> WhatsApp us now
              </Button>
            </div>
          </div>
          <div className="consultancy-right">
            <img 
              src="/images/registration/Hero Section_Reg.png" 
              alt="Professional consultancy" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registrations;
