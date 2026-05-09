import React from 'react';

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      id: 1,
      color: 'light-purple',
      text: "One of my friends referred Plus and Minus for setting up accounts in my new factory. Punith is really good at giving accurate reports and is very supportive. Every month in the first week he sends us the MIS reports without fail. He explains the numbers in a very simple and easy way. The pricing is also very reasonable for the level of service and features offered. Overall, I highly recommend Plus & minus to anyone in need of a reliable and trustworthy accounting and tax filing service.",
      author: "MTK Multilayer Films"
    },
    {
      id: 2,
      color: 'light-green',
      text: "I would like to sincerely thank Mr. Punith for his exceptional support and guidance during the company registration process. His knowledge, professionalism, and attention to detail made the entire procedure smooth and stress-free.<br/><br/>He was always available to clarify doubts, ensured all documentation was completed accurately, and kept me informed at every stage. I truly appreciate his dedication and the quality of service he provided.<br/><br/>I highly recommend Punith to anyone looking for reliable assistance in company registration or related services. Excellent work!",
      author: "Purushotham S R<br/>Founder, SoulNutrii Private Limited"
    },
    {
      id: 3,
      color: 'light-blue',
      text: "Punith helped us form our partnership firm and get all the required licenses on time. He clearly explained all the options, guided me through the paperwork, and kept me updated at every step. Overall, I can confidently say that Plus and Minus feels like a friend when it comes to accounting, registrations, and tax matters. Thank you for your quick and accurate service.",
      author: "Kiran - Sunlight Inovtech"
    },
    {
      id: 4,
      color: 'light-orange',
      text: "Punith helped us with our Private Limited Company incorporation and other business licences very quickly. He explained everything in simple detail and created a proper structure and system for our business even before we started generating revenue. I highly recommend him for tax and other business-related services.",
      author: "Suresh Ningappa"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-content">
        <div className="testimonials-header">
          <h2>What's not to love about Plus and Minus?</h2>
          <p>When our clients achieve their goals, we're right there celebrating with them! Here's a glimpse of what they love about Plus and Minus.</p>
        </div>
        
        <div className="testimonials-grid">
          {/* First testimonial - full width */}
          <div className={`testimonial-card ${testimonialsData[0].color}`}>
            <p className="testimonial-text">"{testimonialsData[0].text}"</p>
            <p className="testimonial-author">- {testimonialsData[0].author}</p>
          </div>
          
          {/* Second testimonial - left position */}
          <div className={`testimonial-card ${testimonialsData[1].color}`}>
            <p className="testimonial-text" dangerouslySetInnerHTML={{__html: `"${testimonialsData[1].text}"`}}></p>
            <p className="testimonial-author" dangerouslySetInnerHTML={{__html: `- ${testimonialsData[1].author}`}}></p>
          </div>
          
          {/* Third testimonial - right position */}
          <div className={`testimonial-card ${testimonialsData[2].color}`}>
            <p className="testimonial-text">"{testimonialsData[2].text}"</p>
            <p className="testimonial-author">- {testimonialsData[2].author}</p>
          </div>
          
          {/* Fourth testimonial - below third */}
          <div className={`testimonial-card ${testimonialsData[3].color}`}>
            <p className="testimonial-text">"{testimonialsData[3].text}"</p>
            <p className="testimonial-author">- {testimonialsData[3].author}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
