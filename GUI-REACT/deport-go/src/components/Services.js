import React from 'react';
import './Services.css';
import locationPin from '../assets/images/3/location-pin-unscreen.gif';
import tickets from '../assets/images/3/tickets.gif';
import radar from '../assets/images/3/radar-unscreen.gif';
import faq from '../assets/images/3/faq-unscreen.gif';

const Services = () => {
    return (
        <div className="services-section" id="services-section">
            <p className="services-title">We Offer Best Services</p>
            <div className="services-grid">
                <div className="service-card">
                    <img src={locationPin} alt="More Choices" />
                    <h3>More Choices</h3>
                    <p>We offer a wide range of options across all routes, allowing you to choose the bus that best suits your needs.</p>
                </div>
                <div className="service-card">
                    <img src={tickets} alt="Best Price" />
                    <h3>Best Price</h3>
                    <p>We consistently provide the best bus ticket prices in the market.</p>
                </div>
                <div className="service-card">
                    <img src={radar} alt="Journey Maps" />
                    <h3>Journey Maps</h3>
                    <p>We provide you with Google Maps links for both your boarding and destination locations.</p>
                </div>
                <div className="service-card">
                    <img src={faq} alt="Customer Support" />
                    <h3>Customer Support</h3>
                    <p>We are dedicated to making your journey more enjoyable.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
