import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './Startup.css';
import './Startup-CompanyTypes.css';
import './Startup-FAQ.css';

const Startup = () => {
  const [selectedType, setSelectedType] = useState('PLC');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const companyTypes = {
    PLC: {
      title: 'Private Limited Company',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      content: 'A Private Limited Company is a business entity held by private stakeholders. It offers limited liability protection to its shareholders and is ideal for businesses looking to raise funds from investors. This structure provides credibility, separate legal existence, and easier transfer of ownership.',
      features: [
        { text: 'Limited liability protection for owners', type: 'check' },
        { text: 'Easy to raise funds from investors', type: 'check' },
        { text: 'Separate legal entity', type: 'check' },
        { text: 'Better credibility with clients & investors', type: 'check' }
      ],
      excludedFeatures: [
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
          <p>
            Say goodbye to stress and hello to your new business. We handle your
            company registration, documentation, and compliance - so you can focus
            on building your business.
          </p>
          <div className="startup-hero-buttons">
            <Link to="/contact" className="btn btn-start-business">
              Start my business
            </Link>
            <Link to="/contact" className="btn btn-talk-expert">
              Talk to an Expert
            </Link>
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
        <div className="startup-content-grid">
          <div className="startup-content-left">
            <h3>Select type of legal entity</h3>
            <p>
              Choose the right business structure for your startup. We help you
              register different types of legal entities in India with complete
              documentation support.
            </p>
            <div className="entity-buttons">
              <div className="entity-option">
                Private Limited Company registration
              </div>
              <div className="entity-option">
                One Person Company registration
              </div>
              <div className="entity-option">
                Limited Liability Partnership
              </div>
            </div>
            <div className="ideal-for-section">
              <h4>Ideal for</h4>
              <ul className="ideal-for-list">
                <li>Small businesses that intend to expand</li>
                <li>Startups looking to raise funds</li>
                <li>Businesses interested in implementing Employee Stock Option Plans (ESOPs)</li>
              </ul>
            </div>
          </div>
          <div className="startup-content-right">
            <div className="services-card">
              <h3>Services Included</h3>
              <ul className="services-list">
                <li>Company Registration with ROC</li>
                <li>PAN & TAN Application</li>
                <li>GST Registration</li>
                <li>Professional Tax Advisory</li>
                <li>Annual Compliance Filing</li>
                <li>Legal Documentation Support</li>
              </ul>
              <Link to="/contact" className="btn btn-start-business">
                Start my business
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Types Section */}
      <section className="company-types-section">
        <div className="company-types-grid">
          <div className="company-type-card">
            <h2>One person company</h2>
            <div className="services-card">
              <h3>Services Included</h3>
              <ul className="services-list">
                <li>Advisory on structure of entity</li>
                <li>Company name reservation - Form Spice+ A (1 application with resubmission)</li>
                <li>Filing of E-forms with the Registrar of Companies (ROC)</li>
                <li>Director Identification Numbers (DIN)</li>
                <li>Digital Signature Certificates</li>
                <li>Finalising of Memorandum of Association (MOA) & Articles of Association (AOA)</li>
                <li>Follow-up until issue of Certificate of Incorporation</li>
                <li>PAN Application</li>
                <li>TAN Application</li>
              </ul>
              <Link to="/contact" className="btn btn-start-business">
                Start my business
              </Link>
            </div>
            <div className="ideal-for-section">
              <h4>Ideal for</h4>
              <ul className="ideal-for-list">
                <li>Solo founder looking for a formal business structure</li>
                <li>Solo founder interested in converting to a Private Limited Company to raise funds/ to issue stock options in the future</li>
              </ul>
            </div>
          </div>

          <div className="company-type-card">
            <h2>Limited Liability Partnership</h2>
            <div className="services-card">
              <h3>Services Included</h3>
              <ul className="services-list">
                <li>Advisory on structure of entity</li>
                <li>Partnership name reservation - Form RUN-1 (1 application with resubmission)</li>
                <li>Filing of E-forms with the Registrar of Companies (ROC)</li>
                <li>Partner Identification Numbers (PIN)</li>
                <li>Digital Signature Certificates</li>
                <li>Finalising of Partnership Deed</li>
                <li>Follow-up until issue of Certificate of Incorporation</li>
                <li>PAN Application</li>
                <li>TAN Application</li>
              </ul>
              <Link to="/contact" className="btn btn-start-business">
                Start my business
              </Link>
            </div>
            <div className="ideal-for-section">
              <h4>Ideal for</h4>
              <ul className="ideal-for-list">
                <li>Professional services firms</li>
                <li>Small to medium businesses looking for limited liability</li>
                <li>Businesses with multiple partners wanting formal structure</li>
              </ul>
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
                      {feature.type === 'check' ? '×' : '×'}
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
                        {feature.type === 'check' ? '×' : '×'}
                      </span>
                      <span className="feature-text">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              )}
              <Link to="/contact" className="btn btn-start-business">
                Get Started
              </Link>
            </div>
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
              Start my business
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
