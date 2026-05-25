import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './Learn.css';

const Learn = () => {
  const [expandedBlogs, setExpandedBlogs] = useState({});

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

  const openWhatsApp = () => {
    const phoneNumber = '917204403746';
    const message = encodeURIComponent('Hi! I would like to learn more about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const toggleBlogExpansion = (index) => {
    setExpandedBlogs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="learn-page">
      {/* Hero Section */}
      <section className="learn-hero">
        <div className="learn-hero-content">
          <h1>
            <span><span style={{ color: 'var(--text)' }}>Learn</span> <span style={{ color: 'var(--green-bright)' }}>Accounting</span> <span style={{ color: 'var(--text)' }}>& Tax</span></span>
          </h1>
          <p>
            Master the fundamentals of accounting, taxation, and business compliance. 
            Our comprehensive guides and resources help you understand complex financial concepts with ease.
          </p>
          <div className="hero-btns">
            <Button to="/contact" variant="hero-primary" size="large">
              Start Learning  {' ->'}
            </Button>
            <Button onClick={openWhatsApp} variant="hero-outline" size="large">
              Get Expert Help
            </Button>
          </div>
          <div className="hero-stats">
            <span>Expert-Led Content</span>
            <span className="bullet">•</span>
            <span>Practical Guides</span>
            <span className="bullet">•</span>
            <span>Free Resources</span>
          </div>
        </div>

        <div className="learn-hero-image">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
            alt="Learning Accounting and Tax"
          />
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="blog-header">
          <div className="blog-header-left">
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
            <div key={index} className="blog-card">
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

export default Learn;
