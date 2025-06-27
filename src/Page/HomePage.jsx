import React from 'react';
import './HomePage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRobot, FaChartBar, FaTools,FaShieldAlt,FaMobileAlt } from "react-icons/fa";
import reactlogo from "../images/react.svg";
import dotnetlogo from "../images/dotnet.svg";
import pythonlogo from "../images/python.svg";
import angularlogo from "../images/angular.svg";
import androidlogo from "../images/android.svg";
import ioslogo from "../images/ios.svg";
import Front from './Front';
import Benefit from './Benefit';
import Quote from './Quote';
import Contact from './Contact';



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
  title: "Cyber Security",
    description:
      "We offer cybersecurity solutions tailored for OSINT environments. Our services protect your data sources, tools, and analyst workflows from cyber threats—ensuring secure and reliable intelligence gathering.",
    features: [
      "Threat detection",
      "Secure data pipelines",
      "Environment hardening",
      "Privacy-focused systems",
    ],
    icon: <FaShieldAlt />,
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Our AI and Machine Learning solutions enhance OSINT capabilities by automating data analysis and uncovering hidden patterns. Our expert team builds intelligent systems that support faster, smarter investigations.",
    features: [
      "Predictive threat detection",
      "Entity recognition and linking",
      "Custom ML models for data enrichment",
    ],
    icon: <FaRobot />,
  },
  {
    title: "Big Data Services",
    description:
      "Our big data analytics services empower OSINT operations with deeper insights and faster intelligence gathering. Our experienced team helps organizations harness vast amounts of open-source data—transforming it into actionable intelligence. From startegy and data integration to analytics and visualization, we use a dat-driven approach to uncover hidden patterns, detect threats, and support smarter, real-time decision making in investigations",
    icon: <FaChartBar />,
  },
  {
    title: "Data Analytics",
    description:"Data Analytics solutions the turn raw data into actionable insights.Our experts help you analyze trends, optimize performence and make smarter decisions. Our offering include:",
    features: [
      "Data visualization",
      "Predictive analytics",
      "Real-time data processing",
    ], 
    icon: <FaChartBar />, 
  },
  {
    title: "DevOps Automation",
    description:
      "Our application maintenance services provide businesses with the support they need to keep their digital products running smoothly. From bug fixing and optimization to security upgrades and new feature development.",
    icon: <FaTools />,
  },
  {
  title: "App Development",
  description:
 "Our mobile app developent services deliver cutting-edge solution for bussiness looking to increase their reach and engagement with customers. Our team of expert develpers creates high-performence apps for ios and android platfors that are user friendly and feature rich",
  features: [
    "iOS and Android app development",
    "Cross platform app development",
    "Mobile app consultation",
    "Application testing",
  ],
  icon: <FaMobileAlt />,
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
      title: "Ideation and Brainstorming",
      description:
        "Brainstorming ideas that solve a particular problem faced by target users",
    },
    {
      title: "Requirements and Expectations",
      description:
        "Interacting with stakeholders and users to collect requirements and set expectations",
    },
    {
      title: "Designing and Prototyping",
      description:
        "Creating the architecture and prototype of the software system and its elements",
    },
    {
      title: "Development and Testing",
      description:
        "Building the software using the latest technology and doing regressive testing",
    },
    {
      title: "Deployment and Training",
      description:
        "Preparing the software to run in a specific environment and train your team to use it",
    },
    {
      title: "SAT and Support",
      description:
        "Conducting (SAT) System Acceptance Test and providing support as per SLA",
    },
  ];

  return (
    <>
   <Front />
    <section>
      <div className="basics-section">
      <h2 className="section-title">Basics we follow in curated ways</h2>
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
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
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
    {/* <section className="contact-section">
      <h2 className="contact-title">Contact us</h2>
      <div className="underline"></div>
      <div className="contact-content">
        <div className="contact-form">
          <h3>Contact us</h3>
          <form>
            <input type="text" placeholder="Name*" required />
            <input type="tel" placeholder="Phone*" required />
            <input type="email" placeholder="Email*" required />
            <textarea rows="5" placeholder="Message"></textarea>
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Feel free to connect</h3>
          <p>Contact us during normal business hours.</p>
          <a
            href="https://wa.me/919238738348"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" />
            Message us on WhatsApp
          </a>
          <div className="company-info">
            <h4>Curated Codes Technologies</h4>
            <p>info@curatedcodes.in</p>
            <p>+91 9238738348</p>
          </div>
        </div>
      </div>
    </section> */}
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
