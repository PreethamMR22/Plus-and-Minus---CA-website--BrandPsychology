import React from 'react';
import Button from './Button';
import './ImageContentSection.css';

const ImageContentSection = () => {
  return (
    <section className="image-content-section">
      <div className="image-content-container">
        <div className="content-left">
          <h2 className="main-title">July 31 is coming.<br />Are you ready?</h2>
          <p className="subtitle">We provide a dedicated team with decades of experience, ensuring every filing on your tax calendar is done right and on time</p>
          <div className="button-group">
            <Button 
              to="/contact" 
              variant="primary"
            >
              File ITR Now
            </Button>
            <a 
              href="tel:+919876543210" 
              className="btn secondary medium secondary-button"
            >
              Whatsapp us now
            </a>
          </div>
        </div>
        <div className="image-right">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="Tax planning consultation" 
            className="section-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageContentSection;
