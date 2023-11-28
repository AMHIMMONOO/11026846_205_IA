// HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/HeroSection.css';
import jrk from '../logo/Pain4.png';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Your Trusted Partner in Computer Science Education</h1>
        <p>Explore the world of possibilities with our innovative programs and dedicated faculty.</p>
        <Link to='/programs'>
          <button>Discover Programs</button>
        </Link>
      </div>
      <div className="hero-image">
        {/* Replace the URL with the actual image URL for your department */}
        <img src={jrk} alt="Computer Science Department" />
      </div>
    </div>
  );
};

export default HeroSection;
