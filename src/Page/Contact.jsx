import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const validate = () => {
    const { name, phone, email } = formData;
    const phoneRegex = /^[0-9]{10,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      toast.error('Name is required');
      return false;
    }
    if (!phoneRegex.test(phone)) {
      toast.error('Enter a valid phone number (10–15 digits)');
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error('Enter a valid email address');
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success('Message sent successfully!');
      console.log('Submitted:', formData);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }
  };

  return (
    <section className="contact-section">
      <ToastContainer position="top-center" autoClose={3000} />

      <h2 className="contact-title">Contact us</h2>

      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h3 className="form-heading">Contact Us</h3>

          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="form-button">Send</button>
        </form>

        <div className="contact-info">
          <h4 className="info-title">Feel free to connect</h4>
          <p className="info-desc">Contact us during normal business hours.</p>
          <a
            href="https://wa.me/918962132605"
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
            <h5>Curated Codes Technologies Pvt. Ltd.</h5>
            <p>info@curatedcodes.in</p>
            <p>+91 8962132605</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
