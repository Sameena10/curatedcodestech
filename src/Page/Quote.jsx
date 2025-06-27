import React from 'react';
import Slider from 'react-slick';
import './Quote.css';
import bgImage from '../images/four.png';

const Quote = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  const quotes = [
    "In the face of failure, we listen, reflect, and adapt. We rise stronger — bolder, sharper, and more resilient — turning setbacks into stepping stones with speed and purpose.",
    "Every obstacle fuels our growth. We learn, iterate, and evolve — pushing boundaries with clarity, creativity, and relentless energy to thrive through change."
  ];

  return (
    <div className="quote-slider-container">
      <Slider {...settings}>
        {quotes.map((quote, index) => (
          <div key={index} className="slide">
            <img src={bgImage} alt="Background" className="slide-image" />
            <div className="quote-overlay">
              <p className="quote-text">{quote}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Quote;
