import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Front.css";

import bg1 from "../images/one.png";
import bg2 from "../images/two.png";
import bg3 from "../images/three.png";
import logo from "../images/curated codes.png";

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow left-arrow" onClick={onClick}>
    <FaChevronLeft />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow right-arrow" onClick={onClick}>
    <FaChevronRight />
  </div>
);

const slides = [
  {
    image: bg1,
    headingMain: "INNOVATING",
    headingSub: "THE FUTURE",
    subheading: "Delivering technology solutions for tomorrow’s world.",
  },
  {
    image: bg2,
    headingMain: "BUILDING",
    headingSub: "SMART SOLUTIONS",
    subheading: "We design intelligent platforms that drive growth.",
  },
  {
    image: bg3,
    headingMain: "EMPOWERING",
    headingSub: "DIGITAL SUCCESS",
    subheading: "Partnering with you to scale your business effectively.",
  },
];

const Front = () => {
  const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        arrows: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: false,
      },
    },
  ],
};


  return (
    <div className="front-wrapper">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="slide">
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-overlay">
                {/* ✅ Logo added here */}
                {/* <img src={logo} alt="Logo" className="slide-logo" /> */}
                <div className="logo-wrapper">
  <img src={logo} alt="Curated Codes" className="logo-img" />
</div>

                <div className="slide-content">
                  <h1>
                    <span className="heading-main">{slide.headingMain}</span>{" "}
                    <span className="heading-sub">{slide.headingSub}</span>
                  </h1>
                  <p className="slide-subtext">{slide.subheading}</p>
                  <button className="slide-button">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Front;
