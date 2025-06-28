import React from 'react';
import './HomePage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reactlogo from "../images/react.svg";
import dotnetlogo from "../images/dotnet.svg";
import pythonlogo from "../images/python.svg";
import angularlogo from "../images/angular.svg";
import androidlogo from "../images/android.svg";
import ioslogo from "../images/ios.svg";
import bannerImage from '../images/curr.png';
import Benefit from './Benefit';
import Quote from './Quote';
import Contact from './Contact';
import cybersecurity from '../images/CC.png';
import dataanalytics from '../images/DA.png';
import devops from '../images/devOps.png';
import ai from '../images/AI.png';




const HomePage = () => {
  const industries = [
  { name: "Law Enforcement", color: "#000000", textColor: "#fff" },
  { name: "Cyber Security", color: "#e6b422", textColor: "#fff" },
  { name: "OSINT", color: "#c48455", textColor: "#fff" },
  { name: "Telecom", color: "#4c5c57", textColor: "#fff" },
  { name: "Defence", color: "#4a2b23", textColor: "#fff" },
];

const techLogos = [
  { name: "React", file: reactlogo },
  { name: ".NET", file: dotnetlogo },
  { name: "Python", file: pythonlogo },
  { name: "Angular", file: angularlogo },
  { name: "Android", file: androidlogo },
  {name: "iOS", file: ioslogo },
];
const logoSettings = {
  infinite: true,
  speed: 3000,                
  autoplay: true,
  autoplaySpeed: 0,           
  cssEase: "linear",          
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,        
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};


const services = [
  {
    title: "Open Source Intelligence",
    description:
      "We offer OSINT solutions tailored for secure and scalable intelligence gathering. Extract actionable insights from public data sources to support investigations and decision-making.",
    features: [
      "Social media monitoring",
      "Web scraping & aggregation",
      "Sentiment & keyword analysis",
      "Custom dashboards",
    ],
    image: cybersecurity, 
  },
  {
    title: "Lawful Interception",
    description:
      "Our platform enables lawful interception of communication channels for authorized agencies, ensuring legal compliance, transparency, and security in intelligence workflows.",
    features: [
      "Real-time interception",
      "Secure data delivery",
      "Compliance with regulations",
      "Multi-channel support",
    ],
    image: dataanalytics,
  },
  {
    title: "Location-Based Services",
    description:
      "Track, analyze, and respond to location data in real-time. Our solutions support surveillance, emergency response, and geospatial intelligence for actionable insights.",
    features: [
      "Geo-fencing & alerts",
      "Live tracking integration",
      "Mapping & route analysis",
    ],
    image: devops,
  },
  {
    title: "Fusion Centre",
    description:
      "Unify data from multiple sources in a centralized intelligence platform. Our fusion solutions support collaborative workflows and real-time situational awareness.",
    features: [
      "Data fusion architecture",
      "Real-time threat feeds",
      "Customizable access controls",
    ],
    image: dataanalytics,
  },
  {
    title: "Digital Forensics",
    description:
      "Delivering advanced digital forensics capabilities to support legal and criminal investigations. From device analysis to evidence preservation and reporting.",
    features: [
      "Disk & mobile forensics",
      "Chain-of-custody logging",
      "Data recovery tools",
    ],
    image: ai,
  },
  {
    title: "Cyber Security",
    description:
      "We protect digital infrastructure through comprehensive cybersecurity strategies, tools, and monitoring designed for sensitive intelligence environments.",
    features: [
      "Threat detection & response",
      "Secure communication pipelines",
      "Vulnerability assessments",
      "Endpoint protection",
    ],
    image: cybersecurity,
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


  return (
    <>
  <section className="hero-container">
      <div className="hero-left">
        {/* <p className="hero-subtext">Open Source / Data / Intelligence</p> */}
        <h1 className="hero-heading">
          <span className="highlight">AI</span> powered <br />
          intelligence for <br />
          every critical situations<span className="dot">.</span>
        </h1>
      </div>
      <div className="hero-right">
        <img src={bannerImage} alt="Dashboard" className="hero-image" />
      </div>
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

      {/* Grid for large screens */}
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
  <h2 className="services-title">Products we offer</h2>
  <div className="services-container">
    {services.map((service, index) => (
      <div className={`service-row ${index % 2 === 1 ? 'reverse' : ''}`} key={index}>
        <div className="service-image-container">
          <img src={service.image} alt={service.title} className="service-image" />
        </div>
        <div className="service-content">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          {service.features && (
            <ul>
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          )}
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
            Curated Codes is a digital engineering company focused on delivering curated services and products
            to help businesses achieve their transformation goals. We are enabling them to drive unmatched
            innovation and growth.
          </p>
        </div>
        <div className="about-box">
          <h3>People</h3>
          <p>
            We are a team of industry experts having diversified experience in a variety of the latest technologies.
            We ensure that every line of code we write is curated for the specific business need of our customers.
          </p>
        </div>
      </div>
    </section>
    <section className="tech-section">
  <h2>Technologies we work with</h2>
  <Slider {...logoSettings} className="tech-slider">
    {techLogos.map((tech, index) => (
      <div key={index} className="tech-logo-slide">
        <img src={tech.file} alt={tech.name} />
      </div>
    ))}
  </Slider>
</section>
<Benefit />
<Quote/>
<Contact />
    <footer className="footer">
      <div className="social-icons">
        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        <a href="" aria-label="X"><i className="fab fa-x-twitter"></i></a>
        <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 Curated Codes - All Rights Reserved.</p>
      </div>
    </footer>
</>
  )
};
export default HomePage;
