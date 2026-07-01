import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import './Home.css';

/**
 * Home Component
 * Coordinates the full SS Surgery landing page by compiling the Navbar,
 * the HeroSection, and standardizing overall styling.
 */
export default function Home() {
  return (
    <div className="home-page">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Header Section */}
      <HeroSection />

      {/* Additional landing page sections can be placed here */}
    </div>
  );
}
