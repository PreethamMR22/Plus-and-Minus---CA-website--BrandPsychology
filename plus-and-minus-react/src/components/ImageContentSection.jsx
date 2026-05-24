import React from 'react';
import Button from './Button';
import './ImageContentSection.css';

const ImageContentSection = () => {
  return (
    <section className="image-content-section">
      <div className="image-content-container">
        <div className="content-left">
          <h2 className="main-title">July 31 is coming.<br />Are you <span className="blue-text">ready?</span></h2>
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
            src="/images/income-tax/6.png" 
            alt="Tax planning consultation" 
            className="section-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageContentSection;
