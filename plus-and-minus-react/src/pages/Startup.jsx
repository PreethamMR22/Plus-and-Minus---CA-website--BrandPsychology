import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './Startup.css';
import './Startup-CompanyTypes.css';
import './Startup-FAQ.css';

const Startup = () => {
  const [selectedType, setSelectedType] = useState('PLC');
  const [selectedEntity, setSelectedEntity] = useState('private');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const entityData = {
    private: {
      name: 'Private Limited Company registration',
      services: [
        'Advisory on structure of entity',
        'Company name reservation - Form Spice+ A',
        '(1 application with resubmission)',
        'Filing of E-forms with the Registrar of Companies (ROC)',
        'Digital Signature Certificates (2 DSC applications)',
        'Finalising of Memorandum of Association (MOA) & Articles of Association (AOA)',
        'Follow-up until issue of Certificate of Incorporation',
        'PAN Application',
        'TAN Application'
      ],
      idealFor: [
        'Small businesses that intend to expand',
        'Startups looking to raise funds',
        'Businesses interested in implementing Employee Stock Option Plans (ESOPs)'
      ]
    },
    onePerson: {
      name: 'One Person Company registration',
      services: [
        'Advisory on structure of entity',
        'Company name reservation - Form Spice+ A',
        '(1 application with resubmission)',
        'Filing of E-forms with the Registrar of Companies (ROC)',
        'Director Identification Numbers ( DIN )',
        'Digital Signature Certificates',
        'Finalising of Memorandum of Association (MOA) & Articles of Association (AOA)',
        'Follow-up until issue of Certificate of Incorporation',
        'PAN Application',
        'TAN Application'
      ],
      idealFor: [
        'Solo founder looking for a formal business structure',
        'Solo founder interested in converting to a Private Limited Company',
        'to raise funds/ to issue stock options in the future'
      ]
    },
    llp: {
      name: 'Limited Liability Partnership',
      services: [
        'Advisory on structure of entity',
        'LLP name reservation - RUN (1 application with resubmission)',
        'Filing of E-form Fill Up with the Registrar of Companies (ROC)',
        'Designated Partner Identification Numbers',
        'Digital Signature Certificates',
        'Follow-up until issue of Certificate of Incorporation',
        'PAN Application',
        'TAN Application',
        'Excludes LLP agreement and Form 3 filing',
        'Excludes Government Fees & Stamp duty'
      ],
      idealFor: [
        'Business partners who want to create a formal legal structure',
        'Business partners interested in converting to a Private',
        'Limited Company to raise funds/ to issue stock options in the future'
      ]
    }
  };

  const companyTypes = {
    PLC: {
      title: 'Private Limited Company',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      content: 'A Private Limited Company is a business entity held by private stakeholders. It offers limited liability protection to its shareholders and is ideal for businesses looking to raise funds from investors. This structure provides credibility, separate legal existence, and easier transfer of ownership.',
      features: [
        { text: 'Limited liability protection for owners', type: 'check' },
        { text: 'Easy to raise funds from investors', type: 'check' },
        { text: 'Separate legal entity', type: 'check' }
      ],
      excludedFeatures: [
        { text: 'Better credibility with clients & investors', type: 'cross' },
        { text: 'More compliance and filings', type: 'cross' },
        { text: 'Higher setup and maintenance cost', type: 'cross' },
        { text: 'Mandatory audit (in most cases)', type: 'cross' }
      ]
    },
    OPC: {
      title: 'One Person Company',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      content: 'A One Person Company (OPC) is designed for solo entrepreneurs who want to run a business with full control while enjoying the benefits of a corporate structure. It provides limited liability and a separate legal identity, making it a great option for individuals starting their business journey with simplicity and structure.',
      features: [
        { text: 'Single owner with full control', type: 'check' },
        { text: 'Limited liability protection', type: 'check' },
        { text: 'Separate legal entity', type: 'check' },
        { text: 'Less compliance compared to Pvt Ltd', type: 'check' }
      ],
      excludedFeatures: [
        { text: 'Only one shareholder allowed', type: 'cross' },
        { text: 'Limited funding options', type: 'cross' },
        { text: 'Mandatory conversion after certain limits', type: 'cross' }
      ]
    },
    LLP: {
      title: 'Limited Liability Partnership',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      content: 'A Limited Liability Partnership (LLP) combines the flexibility of a traditional partnership with the benefits of limited liability. It is well-suited for professionals, service providers, and small businesses who want a simple structure with fewer compliance requirements while protecting personal assets.',
      features: [
        { text: 'Limited liability for partners', type: 'check' },
        { text: 'Less compliance than Private Limited', type: 'check' },
        { text: 'No minimum capital requirement', type: 'check' },
        { text: 'Flexible management structure', type: 'check' }
      ],
      excludedFeatures: [
        { text: 'Difficult to raise external funding', type: 'cross' },
        { text: 'No equity/share issuance', type: 'cross' },
        { text: 'Less preferred by investors', type: 'cross' }
      ]
    }
  };

  return (
    <div className="startup-page">
      {/* Hero Section */}
      <section className="startup-hero">
        <div className="startup-hero-content">
          <h1>Give your idea <span>Wings</span></h1>
          <p>
            Company registration in India doesn't have to be a hassle. Let us handle
            registration process for you online so you can focus on your business.
            Your big idea deserves a bold execution.
          </p>
                    <div className="startup-hero-buttons">
            <Link to="/contact" className="btn btn-start-business">
              Start my business {'->'}
            </Link>
            <a 
              href="https://wa.me/917204403746" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-talk-expert"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
        <div className="startup-hero-image">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Startup Registration" />
          <div className="image-overlay-card">
            <p className="overlay-title">PLUS & MINUS</p>
            <p className="overlay-text">Your company has been successfully Registered.</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="startup-content-section">
        <h3 className="content-section-title">Dream It. File It. Build It.</h3>
        <div className="startup-content-grid">
          <div className="startup-content-left">
            <p>
              Choose the right business structure for your startup. We help you
              register different types of legal entities in India with complete
              documentation support.
            </p>
            <div className="entity-buttons">
              <button 
                className={`entity-option ${selectedEntity === 'private' ? 'active' : ''}`}
                onClick={() => setSelectedEntity('private')}
              >
                Private Limited Company registration
              </button>
              <button 
                className={`entity-option ${selectedEntity === 'onePerson' ? 'active' : ''}`}
                onClick={() => setSelectedEntity('onePerson')}
              >
                One Person Company registration
              </button>
              <button 
                className={`entity-option ${selectedEntity === 'llp' ? 'active' : ''}`}
                onClick={() => setSelectedEntity('llp')}
              >
                Limited Liability Partnership
              </button>
            </div>
            <div className="ideal-for-section">
              <h4>Ideal for</h4>
              <ul className="ideal-for-list">
                {entityData[selectedEntity].idealFor.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="startup-content-right">
            <div className="services-card">
              <h3>Services Included</h3>
              <ul className="services-list">
                {entityData[selectedEntity].services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-start-business">
                Start my business {'->'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      {/* Company Type Selection Section */}
      <section className="company-selection-section">
        <div className="company-selection-container">
          <h2 className="selection-title">Private Limited, LLP or OPC? We'll Help You Decide.</h2>
          
          <div className="company-type-buttons">
            <button 
              className={`type-button ${selectedType === 'PLC' ? 'active' : ''}`}
              onClick={() => setSelectedType('PLC')}
            >
              PLC
            </button>
            <button 
              className={`type-button ${selectedType === 'OPC' ? 'active' : ''}`}
              onClick={() => setSelectedType('OPC')}
            >
              OPC
            </button>
            <button 
              className={`type-button ${selectedType === 'LLP' ? 'active' : ''}`}
              onClick={() => setSelectedType('LLP')}
            >
              LLP
            </button>
          </div>

          <div className="company-content">
            <div className="content-left">
              <img 
                src={companyTypes[selectedType].image} 
                alt={companyTypes[selectedType].title}
                className="company-image"
              />
            </div>
            <div className="content-right">
              <h3>{companyTypes[selectedType].title}</h3>
              <p className="company-description">
                {companyTypes[selectedType].content}
              </p>
              <ul className="company-features">
                {companyTypes[selectedType].features.map((feature, index) => (
                  <li key={index} className={`feature-item ${feature.type}`}>
                    <span className="feature-icon">
                      {feature.type === 'check' ? '✓' : '×'}
                    </span>
                    <span className="feature-text">{feature.text}</span>
                  </li>
                ))}
              </ul>
              {companyTypes[selectedType].excludedFeatures && (
                <ul className="company-features excluded-features">
                  {companyTypes[selectedType].excludedFeatures.map((feature, index) => (
                    <li key={index} className={`feature-item ${feature.type}`}>
                      <span className="feature-icon">
                        {feature.type === 'check' ? '✓' : '×'}
                      </span>
                      <span className="feature-text">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              )}
              <Link to="/contact" className="btn btn-start-business">
                Get Started {'->'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Idea to Entity Section */}
      <section className="idea-to-entity-section">
        <h2>From Idea to Entity in just a few steps</h2>
        <div className="idea-to-entity-content">
          <div className="idea-to-entity-steps">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-text">
                <h3>Name reservation of the entity</h3>
                <p>An application for name reservation will be made to the Ministry of Corporate Affairs (MCA)</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-text">
                <h3>Digital Signature DSC application</h3>
                <p>A Digital Signature Certificate (DSC) will be created for the proposed directors/partners</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-text">
                <h3>Finalisation of MoA and AoA</h3>
                <p>Your Account Manager will draft the Memorandum of Association and Articles of Association</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-text">
                <h3>Submission of forms with the RoC</h3>
                <p>Your Account Manager will prepare and certify the business incorporation forms</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">5</div>
              <div className="step-text">
                <h3>Issuance of Certificate of Incorporation</h3>
                <p>Upon approval of the forms by the MCA, a Certificate of Incorporation will be issued</p>
              </div>
            </div>
          </div>
          <div className="idea-to-entity-image">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Business professional" />
          </div>
        </div>
              </section>

      {/* Learn Before You Incorporate Section */}
      <section className="learn-incorporate-section">
        <h2>Learn before you incorporate</h2>
        <p className="subtitle">Foundational guides for every founder setting up an Indian company.</p>
        
        <div className="incorporate-cards-container">
          <div className="incorporate-card">
            <h3>Setting up a Private Limited Company (PLC) in India : A comprehensive guide</h3>
            <p>A private limited company is the most flexible and credible structure of businesses. It is a type of structure wherein investors can be separate and the people managing the company that is directors can be different.</p>
          </div>
          
          <div className="incorporate-card">
            <h3>Setting up a Limited Liability Partnership (LLP) in India : A comprehensive guide</h3>
            <p>A Limited Liability Partnership (LLP) is a partnership in which some or all partners have limited liabilities. It therefore can exhibit elements of a partnership firm and a private limited company, where the business is carried out in a corporate framework, guided by terms of the mutually adopted partnership deed.</p>
          </div>
          
          <div className="incorporate-card">
            <h3>Annual return of a Limited Liability Partnership (LLP) - Form 11</h3>
            <p>Form 11 is an annual return required for Limited Liability Partnerships (LLPs) in India, to be filed with the Registrar of Companies (RoC) via the Ministry of Corporate Affairs (MCA) website.</p>
          </div>
        </div>
      </section>

      {/* Start Your Dream Business Section */}
      <section className="dream-business-section">
        <div className="dream-business-content">
          <div className="dream-business-text-content">
            <h2>Start your dream business with Plus & Minus</h2>
            <p>From idea to incorporation, we guide you through every step. Our expert team ensures your business journey starts smoothly and successfully.</p>
            <Link to="/contact" className="btn btn-start-business">
              Start my business {'->'}
            </Link>
            <p className="dream-business-bottom-text">Join thousands of entrepreneurs who trust us with their business registration needs</p>
          </div>
          <div className="dream-business-image-content">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Business professionals collaborating"
            />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs-section">
        <div className="faqs-container">
          <h2>What founders ask before incorporating</h2>
          <h3>Everything you need to know about company registration</h3>
          <div className="faqs-list">
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(0)}>
                <span>What is the minimum requirement to register a Pvt Ltd company?</span>
                <span className={`faq-toggle ${expandedFAQ === 0 ? 'expanded' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${expandedFAQ === 0 ? 'expanded' : ''}`}>
                You need a minimum of 2 Directors (at least one must be an Indian resident), 2 Shareholders (can be the same as Directors), a registered office address in India, and a minimum authorised capital of ¥1,00,000 (recommended). There is no mandatory paid-up capital requirement.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(1)}>
                <span>How long does the registration process take?</span>
                <span className={`faq-toggle ${expandedFAQ === 1 ? 'expanded' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${expandedFAQ === 1 ? 'expanded' : ''}`}>
                The entire process takes approximately 7-10 working days from the date of document submission. This includes DSC (1-2 days), name approval (1-3 days), and SPICe+ Part B filing (3-5 days).
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(2)}>
                <span>What is the difference between Pvt Ltd, LLP, and OPC?</span>
                <span className={`faq-toggle ${expandedFAQ === 2 ? 'expanded' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${expandedFAQ === 2 ? 'expanded' : ''}`}>
                Pvt Ltd requires minimum 2 Directors and is best for startups seeking funding. LLP offers flexibility with no minimum capital and is suitable for professional firms. OPC is for solo entrepreneurs with limited liability. Pvt Ltd can issue shares and attract equity investors; LLP and OPC cannot.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(3)}>
                <span>Can NRIs or foreign nationals be Directors in a Pvt Ltd?</span>
                <span className={`faq-toggle ${expandedFAQ === 3 ? 'expanded' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${expandedFAQ === 3 ? 'expanded' : ''}`}>
                Yes, NRIs and foreign nationals can be Directors and Shareholders. However, at least one Director must be an Indian resident (stayed in India for 182+ days in the preceding calendar year). Foreign directors need a valid passport, and FDI norms may apply.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(4)}>
                <span>What happens if I don't file annual compliances?</span>
                <span className={`faq-toggle ${expandedFAQ === 4 ? 'expanded' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${expandedFAQ === 4 ? 'expanded' : ''}`}>
                Non-compliance results in heavy penalties: ¥100/day for late filing of AOC-4 and MGT-7A, ¥5,000 penalty for missed DIR-3 KYC, and potential disqualification of Directors under Section 164(2). Continued non-filing can lead to the company being struck off by the RoC.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(5)}>
                <span>What is the minimum requirement to register an LLP?</span>
                <span className={`faq-toggle ${expandedFAQ === 5 ? 'expanded' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${expandedFAQ === 5 ? 'expanded' : ''}`}>
                You need a minimum of 2 Designated Partners (at least one must be an Indian resident), a registered office address in India, and a valid DSC for each Designated Partner. There is no minimum capital requirement.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(6)}>
                <span>Is it possible to incorporate 2 companies over a single physical place?</span>
                <span className={`faq-toggle ${expandedFAQ === 6 ? 'expanded' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${expandedFAQ === 6 ? 'expanded' : ''}`}>
                Yes, you can incorporate two or more companies at the same address.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(7)}>
                <span>What is the difference between LLP and Private Limited Company?</span>
                <span className={`faq-toggle ${expandedFAQ === 7 ? 'expanded' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${expandedFAQ === 7 ? 'expanded' : ''}`}>
                LLP has fewer compliances, no minimum capital, and no mandatory audit (below thresholds). However, it cannot issue shares or raise equity funding. A Pvt Ltd can issue shares, attract VC/PE investment, and has higher credibility but comes with more compliance requirements.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(8)}>
                <span>Can an LLP be converted to a Pvt Ltd company?</span>
                <span className={`faq-toggle ${expandedFAQ === 8 ? 'expanded' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${expandedFAQ === 8 ? 'expanded' : ''}`}>
                Yes. An LLP can be converted to a Private Limited Company under Section 366 of the Companies Act, 2013. This is commonly done when the business grows and needs equity funding.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(9)}>
                <span>Who can register an OPC in India?</span>
                <span className={`faq-toggle ${expandedFAQ === 9 ? 'expanded' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${expandedFAQ === 9 ? 'expanded' : ''}`}>
                Any Indian citizen who is also a resident in India can incorporate an OPC. NRIs and foreign nationals are not eligible. The person must be a natural person (not a company or LLP).
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(10)}>
                <span>What is the difference between OPC and Sole Proprietorship?</span>
                <span className={`faq-toggle ${expandedFAQ === 10 ? 'expanded' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${expandedFAQ === 10 ? 'expanded' : ''}`}>
                OPC offers limited liability and separate legal entity status, while in sole proprietorship there is no distinction between owner and business. OPC has more credibility, can have a bank account in the company name, and can raise funds more easily.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Startup;
