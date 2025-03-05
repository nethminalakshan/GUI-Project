import React from "react";
import "./about.css"; // Updated CSS file
import Bgphoto from "../assets/images/herobg.png";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img className="bg-photo" src={Bgphoto} alt="Background" />
        <div className="hero-text">
          <h1>About Us</h1>
          <p>Your journey, our priority.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h1 className="content-heading">About Us</h1>
        <div className="content-text">
          <p>
            Depot-Go is a cutting-edge online bus ticket booking platform designed to revolutionize public transportation in Sri Lanka. Our mission is to provide a seamless, efficient, and convenient travel experience for passengers.
          </p>
          <p>
            The traditional bus ticketing system in Sri Lanka relies on manual processes, leading to inefficiencies. Depot-Go bridges this gap by introducing a hassle-free digital platform that allows users to book seats, check schedules, and access travel information—all in just a few clicks.
          </p>
          <p>
            With the rising demand for public transport and tourism, a modernized transport system is essential. Depot-Go makes bus travel in Sri Lanka more accessible and reliable.
          </p>
          <p>
            At Depot-Go, we believe an efficient transport system is the backbone of a country’s progress. Our platform is committed to transforming Sri Lanka’s public transport, ensuring that every journey is smoother, faster, and more convenient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;