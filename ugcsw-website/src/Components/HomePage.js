// React component for the homepage
import React from "react";
import "../CSS/HomePage.css"; // Import the CSS file
import Events from "./Events";
import Hero from "./Hero";
import MainLayout from "./MainLayout";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import Header from "./Header";

// The main component for the homepage
const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Hero />
      <Events />
      <Footer />
    </div>
   
  );
};

export default HomePage;
