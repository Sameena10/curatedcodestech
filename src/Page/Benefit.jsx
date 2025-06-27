import React from 'react';
import './Benefit.css';
import { FaBrain, FaDraftingCompass, FaRocket } from 'react-icons/fa';

const Benefit = () => {
  return (
    <section className="apart-section">
      <h2 className="section-title">WHAT MAKES US UNIQUE?</h2>
      {/* <p className="subtitle">Our Core Strengths</p> */}
      <div className="subtitle-wrapper">
  <p className="subtitle">Our Core Strengths</p>
</div>
      <div className="apart-cards">
        <div className="apart-card">
          <FaBrain className="apart-icon" />
          <h3>INNOVATION-FIRST MINDSET</h3>
          <p>
            We prioritize cutting-edge thinking and continuous experimentation to craft forward-looking solutions for complex business needs.
          </p>
        </div>
        <div className="apart-card">
          <FaDraftingCompass className="apart-icon" />
          <h3>USER-CENTRIC DESIGN</h3>
          <p>
            Every product we build starts with the user in mind — intuitive interfaces, smart interactions, and meaningful experiences drive our designs.
          </p>
        </div>
        <div className="apart-card">
          <FaRocket className="apart-icon" />
          <h3>AGILE DELIVERY & SCALE</h3>
          <p>
            Our agile frameworks ensure fast delivery, adaptability, and smooth scaling — enabling clients to move from prototype to production with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
