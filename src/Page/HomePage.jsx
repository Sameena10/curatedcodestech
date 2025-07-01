import React from 'react';
import './HomePage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImage from '../images/few.png';
import Contact from './Contact.jsx';
import {
  FaSearch,
  FaUserSecret,
  FaMapMarkedAlt,
  FaProjectDiagram,
  FaMicroscope,
  FaShieldAlt
} from "react-icons/fa";

const HomePage = () => {
  const industries = [
    { name: "Law Enforcement", color: "#000000", textColor: "#fff" },
    { name: "Cyber Security", color: "#e6b422", textColor: "#fff" },
    { name: "OSINT", color: "#c48455", textColor: "#fff" },
    { name: "Telecom", color: "#4c5c57", textColor: "#fff" },
    { name: "Defence", color: "#4a2b23", textColor: "#fff" },
  ];
  const services = [
    {
      title: "Open Source Intelligence",
      description:
        "We provide OSINT tools to gather public data securely from platforms like social media, news, and the dark web. Our platform uses sentiment analysis, NLP, and real-time alerts to support investigations and threat detection.",
      features: [
        "Social media monitoring",
        "Web scraping & aggregation",
        "Sentiment & keyword analysis",
        "Custom dashboards",
      ],
      icon: <FaSearch size={100} color="#002244" />,
    },
    {
      title: "Lawful Interception",
      description:
        "Our solution enables agencies to monitor communications legally in real-time with encrypted storage, detailed logs, and support for VoIP, mobile, and messaging apps.",
      features: [
        "Real-time interception",
        "Secure data delivery",
        "Compliance with regulations",
        "Multi-channel support",
      ],
      icon: <FaUserSecret size={100} color="#002244" />,
    },
    {
      title: "Location-Based Services",
      description:
        "Track people, vehicles, and assets with real-time maps, geo-fencing, and alert systems. Integrates GPS, satellite, and mobile signal data for reliable insights.",
      features: [
        "Geo-fencing & alerts",
        "Live tracking integration",
        "Mapping & route analysis",
      ],
      icon: <FaMapMarkedAlt size={100} color="#002244" />,
    },
    {
      title: "Fusion Centre",
      description:
        "Our platform merges intelligence from different sources into one dashboard, enabling real-time threat analysis, link detection, and secure data sharing across departments.",
      features: [
        "Data fusion architecture",
        "Real-time threat feeds",
        "Customizable access controls",
      ],
      icon: <FaProjectDiagram size={100} color="#002244" />,
    },
    {
      title: "Digital Forensics",
      description:
        "Recover and analyze digital evidence from phones, hard drives, and cloud platforms. Ensure secure handling with full chain-of-custody support for legal use.",
      features: [
        "Disk & mobile forensics",
        "Chain-of-custody logging",
        "Data recovery tools",
      ],
      icon: <FaMicroscope size={100} color="#002244" />,
    },
    {
      title: "Cyber Security",
      description:
        "Protect critical systems with real-time threat detection, endpoint protection, and AI-based insights. Built for both enterprise and national defense environments.",
      features: [
        "Threat detection & response",
        "Secure communication pipelines",
        "Vulnerability assessments",
        "Endpoint protection",
      ],
      icon: <FaShieldAlt size={100} color="#002244" />,
    },
  ];

  const basics = [
    {
      title: "Data-Driven Decision Making",
      description:
        "Leveraging data to support informed, evidence-based decisions in investigations and operations.",
    },
    {
      title: "Technology Integration into Workflows",
      description:
        "Embedding IT solutions into daily law enforcement processes without disrupting critical operations.",
    },
    {
      title: "Automation of Routine Investigative Tasks",
      description:
        "Identifying and automating repetitive tasks to enhance focus on complex investigative work.",
    },
    {
      title: "Collaboration-Centric Development",
      description:
        "Building secure platforms that promote real-time, inter-agency communication and teamwork.",
    },
    {
      title: "Proactive Threat Monitoring",
      description:
        "Implementing systems to detect early signs of criminal activity across digital and physical spaces.",
    },
    {
      title: "Scalable and Adaptive Solutions",
      description:
        "Designing solutions that evolve with law enforcement needs and adapt to emerging challenges.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };


  return (
    <>
      <section>
        <div className="hero-banner">
          <h2 className="hero-heading">
            Operational Intelligence Starts Here
          </h2>
          <img src={bannerImage} alt="Curated Codes Banner" className="banner-image" />
        </div>
        <h2 className="heros-heading">
            AI-powered Intelligence Solutions for Every Critical Situation
          </h2>
      </section>
      <section>
        <div className="basics-section">
          <h2 className="section-title">Approaches we take to empower law enforcement</h2>
          <div className="basics-grid">
            {basics.map((item, index) => (
              <div key={index} className="basics-item">
                <h3 className="basics-title">{item.title}</h3>
                <p className="basics-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="industries-section">
          <h2 className="industries-title">Industries we serve</h2>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="industry-circle"
                style={{
                  backgroundColor: industry.color,
                  color: industry.textColor,
                }}
              >
                {industry.name}
              </div>
            ))}
          </div>
          <div className="industries-slider">
            <Slider {...settings}>
              {industries.map((industry, index) => (
                <div key={index}>
                  <div
                    className="industry-circle"
                    style={{
                      backgroundColor: industry.color,
                      color: industry.textColor,
                      margin: "0 auto",
                    }}
                  >
                    {industry.name}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section className="services-section">
        <h2 className="section-header">Products we offer</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div className={`service-row ${index % 2 === 1 ? 'reverse' : ''}`} key={index}>
              <div className="service-image-container">
                <div className="icon-square-box">
                  {service.icon}
                </div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="about-section">
        <h2 className="about-title">About us</h2>
        <div className="about-content">
          <div className="about-box">
            <h3>Company</h3>
            <p>
              Curated Codes is a digital engineering firm empowering law enforcement agencies with AI-driven tools and secure platforms. We help accelerate investigations, enhance intelligence gathering, and support national security through data-driven insights and real-time collaboration.
            </p>
          </div>
          <div className="about-box">
            <h3>People</h3>
            <p>
              We are a team of industry experts with deep, cross-domain experience in cutting-edge technologies. Every solution we build is precisely curated to meet the unique operational and security needs of law enforcement and intelligence agencies.
            </p>
          </div>
        </div>
      </section>
      <Contact />
      <footer className="footer">
        <div className="social-icons">
          <a href="https://www.facebook.com/curatedcodes" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/posts/curated-codes-technologies_mernfullstack-itacademy-careerlauncher-activity-7274404527087190017-lsw_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZWvO8Bg0ggwsc2pFdMvHiXLVsim0-juag" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://x.com/Curatedcodes_in" aria-label="X"><i className="fab fa-x-twitter"></i></a>
          <a href="https://www.youtube.com/channel/UC-g0Fa_E4bhwQF9SJ0-dDlg" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2025 Curated Codes - All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
};
export default HomePage;
