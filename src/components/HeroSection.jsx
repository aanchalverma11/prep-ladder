import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing custom plain CSS

/**
 * HeroSection Component
 * Renders the main marketing message of the landing page, incorporating
 * headings, call to action buttons, app store links, and decorative illustrations.
 */
export default function HeroSection() {
  return (
    <section className="cloned-hero">
      {/* Decorative Left/Right medical illustrations */}
      <img
        src="https://image.prepladder.com/content/Phjew8JTF7MKbCzScrpp1674451660.webp"
        alt="Abstract medical illustrations decoration"
        className="decor-illustration decor-left"
      />
      <img
        src="https://image.prepladder.com/content/98g93DyiEaTeb11ke0mG1674451705.webp"
        alt="Doctor illustration decoration"
        className="decor-illustration decor-right"
      />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 hero-content-center">
            
            {/* Promo badge at the top */}
            <Link to="/courses/medical-pg/plan" className="grab-plan-badge">
              Grab SS 3.0 ELITE Plan Now
            </Link>

            {/* Main Heading */}
            <h1 className="hero-main-heading">
              Ace Your <span className="hero-heading-highlight">NEET SS Surgery</span> Preparation with PrepLadder Dream Team
            </h1>

            {/* Subtext explanation paragraph */}
            <p className="hero-paragraph">
              Experience simplified learning with engaging video lectures, high-yield QBank, Notes & much more.
            </p>

            {/* Principal CTA button */}
            <div>
              <Link to="/courses/medical-pg/plan" className="btn-enrol-cta">
                Enrol now
              </Link>
            </div>

            {/* App Store download links */}
            <div className="store-links-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.prepladder.learningapp"
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge"
                aria-label="Download from Google Play Store"
              >
                <img
                  src="https://image.prepladder.com/content/T7i9PWQC4QLR3YBHLMPI1638965792.svg"
                  alt="Google Play Store Badge"
                />
              </a>
              <a
                href="https://itunes.apple.com/us/app/prepladder/id1622337839"
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge"
                aria-label="Download from Apple App Store"
              >
                <img
                  src="https://image.prepladder.com/content/J43trce1ZMqvIfqRe2zA1638965764.svg"
                  alt="Apple App Store Badge"
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
