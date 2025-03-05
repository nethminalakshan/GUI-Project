import React from "react";
import "./about.css"; // Updated CSS file
import Bgphoto from "../assets/images/herobg.png";

const AboutUs = () => {
  return (
    <div className="hero-container">
      <img className="bg-photo" src={Bgphoto} alt="Background" />
      <div className="overlay"></div> {/* Dark overlay for contrast */}
      <div className="about-us-container">
        <h1 className="about-us-title">About <span>Us</span></h1>
        <div className="about-us-content">
          <p>
            <span className="highlight">Depot-Go</span> is a <b>cutting-edge</b> online bus ticket booking platform
            designed to <b>revolutionize public transportation</b> in Sri Lanka. Our mission is to provide a 
            <span className="highlight">seamless</span>, <span className="highlight">efficient</span>, and <span className="highlight">convenient</span> 
            travel experience for passengers.
          </p>
          <p>
            The traditional bus ticketing system in Sri Lanka relies on <b>manual processes</b>, leading to 
            inefficiencies. <span className="highlight">Depot-Go</span> bridges this gap by introducing a 
            <b>hassle-free digital platform</b> that allows users to <u>book seats, check schedules,</u> 
            and access travel information—all in just a few clicks.
          </p>
          <p>
            With the <b>rising demand</b> for public transport and tourism, a <span className="highlight">modernized transport system</span> is essential. 
            <span className="highlight">Depot-Go</span> makes bus travel in Sri Lanka more <b>accessible</b> and <b>reliable</b>.
          </p>
          <p>
            <i>At <span className="highlight">Depot-Go</span>, we believe an efficient transport system is the backbone of a country’s progress.</i>  
            Our platform is committed to <b>transforming Sri Lanka’s public transport</b>, ensuring that 
            every journey is <span className="highlight">smoother</span>, <span className="highlight">faster</span>, and <span className="highlight">more convenient</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
