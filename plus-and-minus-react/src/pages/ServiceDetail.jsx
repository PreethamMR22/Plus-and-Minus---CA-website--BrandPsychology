import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import Button from '../components/Button';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services[serviceId];

  if (!service) {
    return (
      <div className="service-detail-page">
        <div className="section-content">
          <h1>Service Not Found</h1>
          <p>The service you're looking for doesn't exist.</p>
          <Button to="/services">Back to Services</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="section-content">
          <div className="service-hero-content">
            <Link to="/services" className="service-hero-tag">
              ← Our Services
            </Link>
            <div className="service-hero-icon">{service.icon}</div>
            <h1>{service.title}</h1>
            <p>{service.sub}</p>
            <Button to="/contact" variant="hero-primary" size="large">
              Let's Talk →
            </Button>
          </div>
          <div className="service-hero-img">{service.icon}</div>
        </div>
      </section>

      {/* Service Content */}
      <section className="service-content">
        <div className="service-overview">
          <div className="service-overview-tag">Overview</div>
          <h2>About this service</h2>
          {service.overview.split('\n\n').map((paragraph, index) => (
            <p key={index} className="overview-paragraph">{paragraph}</p>
          ))}
        </div>
        <div className="capabilities">
          <div className="service-overview-tag">What We Can Do For You</div>
          <h2>Our capabilities</h2>
          <ul>
            {service.caps.map((capability, index) => (
              <li key={index}>{capability}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Insights Section */}
      <section className="section">
        <div className="section-content">
          <h2>Relevant Guidance & Insights</h2>
          <div className="insights-grid">
            {service.insights.map((insight, index) => (
              <div key={index} className="insight-card">
                <div className="insight-tag">{insight.tag}</div>
                <h3>{insight.title}</h3>
                <div className="insight-read">Read more →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="section-content">
          <h2>{service.cta}</h2>
          <p>Let's talk. Our specialists are ready to help.</p>
          <div className="service-cta-btns">
            <Button to="/contact" variant="white">
              Let's Talk →
            </Button>
            <Button to="/services" variant="white-outline">
              View All Services
            </Button>
          </div>
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

export default ServiceDetail;
