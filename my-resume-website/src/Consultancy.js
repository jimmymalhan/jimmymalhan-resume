import React from 'react';
import './Consultancy.css';

const Consultancy = () => {
  return (
    <div className="consultancy-container">
      <h2 className="section-title">Consultancy Services</h2>
      <p className="section-description">
        Leverage my expertise to enhance your projects.
      </p>
      <div className="consultancy-card">
        <div className="consultancy-card-inner">
          <h3 className="consultancy-title">Software Architecture</h3>
          <p className="consultancy-description">
            Craft robust and scalable software architectures tailored to your
            project's needs.
          </p>
        </div>
      </div>
      <div className="consultancy-card">
        <div className="consultancy-card-inner">
          <h3 className="consultancy-title">Microservices</h3>
          <p className="consultancy-description">
            Design and implement microservices-based solutions for improved
            flexibility and scalability.
          </p>
        </div>
      </div>
      <div className="consultancy-card">
        <div className="consultancy-card-inner">
          <h3 className="consultancy-title">Infrastructure Migration</h3>
          <p className="consultancy-description">
            Seamlessly migrate your infrastructure to modern platforms for
            enhanced performance and cost-efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consultancy;
