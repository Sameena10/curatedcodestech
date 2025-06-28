import React from 'react';
import './Contact.css';
import { FaUserTie } from 'react-icons/fa';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';


const Contact = () => {
  return (
    <>
      <section className="work-together-section">
        <div className="work-content">
          <FaUserTie className="work-icon" />
          <h2>LET’S WORK TOGETHER</h2>
          <button className="work-button">CONTACT US</button>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Column */}
          <div className="contact-info">
            <FaEnvelope className="contact-icon" />
            <h2><strong>CURATED</strong></h2>
            <h3>CODES</h3>
            <ul>
              <li>Indore</li>
            </ul>
            <p className="email">info@curatedcodes.in</p>
            <p className="schedule">
              <strong>Daily Schedule:</strong><br />
              <em>Mon–Sat: 10:00 A.M.–20:00 P.M.</em>
            </p>

            <a
              href="https://wa.me/919238738348"
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="whatsapp-icon" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right Column */}
          <div className="contact-form">
            <h2>JUST ASK US ANYTHING!</h2>
            <p className="form-subtitle">Let us know how we can help you:</p>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Name" required />
              <input type="tel" placeholder="Phone Number" />
              <textarea rows="4" placeholder="Type your message here.." required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
