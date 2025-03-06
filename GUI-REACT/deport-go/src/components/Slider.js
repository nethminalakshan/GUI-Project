import React, { useEffect, useRef } from "react";
import "./Slider.css";
import heroBg from '../assets/images/hero-bg.png';
import smileyPeople from '../assets/images/full-shot-smiley-people-sitting-baggage.png';

export default function TravelSlider() {
  const sliderRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    };

    // Animate slider section
    const sliderObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          sliderObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Animate images section
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          imageObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sliderRef.current) sliderObserver.observe(sliderRef.current);
    if (imagesRef.current) imageObserver.observe(imagesRef.current);

  }, []);

  return (
    <div className="slider-wrapper">
      {/* Main Slider Section */}
      <div className="lidis" ref={sliderRef}>
        <div className="slider-container">
          <p className="tto">Travel To</p>
          <div className="slider">
            <div className="slide-track">
              <span>Jaffna</span>
              <span>Batticaloa</span>
              <span>Ampara</span>
              <span>Trincomalee</span>
              <span>Mannar</span>
              <span>Hatton</span>
              <span>Badulla</span>
              <span>Matara</span>
              <span>Anuradhapura</span>
              <span>Polonnaruwa</span>
              <span>Hambantota</span>
              <span>Kilinochchi</span>
              <span>Vavuniya</span>
              <span>Mullaitivu</span>
              <span>Gampaha</span>
              <span>Kalutara</span>
              <span>Galle</span>
              <span>Matale</span>
              <span>Nuwara Eliya</span>
              <span>Moneragala</span>
              <span>Kegalle</span>
              <span>Ratnapura</span>
              <span>Kurunegala</span>
              <span>Puttalam</span>
              <span>Colombo</span>
            </div>
          </div>
        </div>
        
      </div>
      <button className="book-now">Book Now</button>
      

      {/* Images Section */}
      <div className="images-section" ref={imagesRef}>
        <img className="svgback" src={heroBg} alt="Background SVG" />
        <img className="photo1" src={smileyPeople} alt="Smiley People" />
      </div>
    </div>
  );
}
