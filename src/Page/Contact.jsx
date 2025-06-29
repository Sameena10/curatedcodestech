import React from 'react';
import './Contact.css';

const ContactUs = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact us</h2>

      <div className="contact-wrapper">
        <form className="contact-form">
          <h3 className="form-heading">Contact Us</h3>
          <input type="text" placeholder="Name*" required />
          <input type="tel" placeholder="Phone*" required />
          <input type="email" placeholder="Email*" required />
          <textarea placeholder="Message" rows="5"></textarea>
          <button type="submit" className="form-button">Send</button>
        </form>
        <div className="contact-info">
          <h4 className="info-title">Feel free to connect</h4>
          <p className="info-desc">Contact us during normal business hours.</p>
          <a
            href="https://wa.me/919238738348"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
    src="https://img.icons8.com/ios-filled/20/25D366/whatsapp.png"
    alt="WhatsApp"
  />
            Message us on WhatsApp
          </a>
          <div className="company-info">
            <h5>Curated Codes Technologies Pvt Ltd</h5>
            <p>info@curatedcodes.in</p>
            <p>+91 9238783848</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
