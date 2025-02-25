import React, { useEffect, useRef } from 'react';
import './Hero.css';
import footerBg from "../assets/images/footer_bg.png";

export default function Hero() {
  const heroTextRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroTextRef.current) {
      observer.observe(heroTextRef.current);
    }
  }, []);

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text" ref={heroTextRef}>
          <p className="subheading">Best Destinations Around the World</p>
          <h1 className="main-heading">
            Explore with Ease, <br />
            Travel in Comfort, and <br />
            Create Lasting Memories
          </h1>
        </div>
      </div>
      <div className="footer-image">
        <img src={footerBg} alt="Footer Background" />
      </div>
    </div>
  );
}
