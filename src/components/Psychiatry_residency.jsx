import React, { useState } from "react";
import "./Psychiatry_residency.css";

const FAQ_ITEMS = [
  {
    q: "What is course content and duration?",
    a: "The course is divided into multiple high-yield modules covering General Psychiatry, Neuropsychiatry, Child & Adolescent Psychiatry, Psychotherapy, Psychopharmacology, and Recent Advances. With comprehensive hours of video lectures, it provides in-depth conceptual clarity."
  },
  {
    q: "Who should join this course?",
    a: "Whether you're a 1st-year, 2nd-year, or 3rd-year resident, this course is tailored to cover the entire three-year residency syllabus. Additionally, it can be utilized for creating content for journal clubs, case presentations, and seminars."
  },
  {
    q: "Which books are the course based on?",
    a: "The course is designed based on prominent textbooks like Kaplan & Sadock's Comprehensive Textbook of Psychiatry, Stahl's Essential Psychopharmacology, and other standard reference materials for MD/DNB preparation."
  }
];

export default function Psychiatry_residency() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="psychiatry-residency-page">
      {/* Announcement Strip */}
      <div className="psych-announcement-strip">
        <div className="container text-center">
          <p className="psych-announcement-text">
            Psychiatry Residency Notes are ready for dispatch <a href="/courses/psychiatry-residency/plan" className="psych-announcement-btn">Order Now</a>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="psych-hero position-relative overflow-hidden">
        {/* Decorative background illustrations */}
        <img 
          src="https://image.prepladder.com/content/Phjew8JTF7MKbCzScrpp1674451660.webp" 
          alt="left illustration" 
          className="psych-hero-decor-left"
        />
        <img 
          src="https://image.prepladder.com/content/98g93DyiEaTeb11ke0mG1674451705.webp" 
          alt="right doctor illustration" 
          className="psych-hero-decor-right"
        />
        
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-8 psych-hero-content-center">
              <h1 className="psych-hero-heading">
                Your Ultimate Solution for <span>Psychiatry Residency</span> Preparation
              </h1>
              <p className="psych-hero-desc">
                Curated by India's top psychiatry faculty to help you become exam-ready.
              </p>
              <div className="psych-hero-action-row">
                <a href="/courses/psychiatry-residency/plan" className="psych-hero-btn">Enrol now</a>
              </div>
              <div className="psych-hero-badges-row">
                <a href="https://play.google.com/store/apps/details?id=com.prepladder.learningapp" target="_blank" rel="noopener noreferrer">
                  <img src="https://image.prepladder.com/content/T7i9PWQC4QLR3YBHLMPI1638965792.svg" alt="Google Play Store" />
                </a>
                <a href="https://itunes.apple.com/us/app/prepladder/id1622337839" target="_blank" rel="noopener noreferrer">
                  <img src="https://image.prepladder.com/content/J43trce1ZMqvIfqRe2zA1638965764.svg" alt="Apple App Store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Conceptual Video Lectures Section */}
      <section className="psych-feature-section-row">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-12 col-md-6 text-start">
              <div className="psych-feature-text-block">
                <h2 className="psych-feature-item-heading">Conceptual Video Lectures</h2>
                <p className="psych-feature-item-desc">
                  Simplify key psychiatry concepts through our 100+ hours of comprehensive video lectures by India's top Psychiatry faculty and develop a strong foundation.
                </p>
              </div>
            </div>
            {/* Right Image */}
            <div className="col-12 col-md-6 text-center">
              <div className="psych-feature-media-block">
                <img 
                  src="https://image.prepladder.com/content/psychiatry-residency-comprehensive-video-lectures.webp" 
                  alt="Conceptual Video Lectures for Psychiatry Residency" 
                  className="psych-feature-item-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Concise Notes Section */}
      <section className="psych-feature-section-row alternate-bg">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            {/* Right Content */}
            <div className="col-12 col-md-6 text-start">
              <div className="psych-feature-text-block">
                <h2 className="psych-feature-item-heading">Concise Notes for Psychiatry Residency</h2>
                <p className="psych-feature-item-desc">
                  Access clinically oriented and concise subject-wise Psychiatry Residency notes featuring high-quality images for more immersive learning.
                </p>
              </div>
            </div>
            {/* Left Image */}
            <div className="col-12 col-md-6 text-center">
              <div className="psych-feature-media-block">
                <img 
                  src="https://image.prepladder.com/content/NoV9F6MhTtff19VSLlAO1716469311.webp" 
                  alt="Concise Notes for Psychiatry Residency" 
                  className="psych-feature-item-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Residency ELITE Plan Section */}
      <section className="psych-plans-card-section">
        <div className="container">
          <div className="psych-plan-card-large">
            <div className="row align-items-center">
              {/* Left Column (Illustration) */}
              <div className="col-12 col-md-5 text-center psych-plan-image-col">
                <img 
                  src="https://image.prepladder.com/content/xroWMVX8Mx5i2P0W5pPt1682679355.svg" 
                  alt="Climbing ladder to success" 
                  className="psych-plan-large-img img-fluid"
                />
              </div>
              
              {/* Right Column (Plan Details) */}
              <div className="col-12 col-md-7 text-start psych-plan-details-col">
                <span className="psych-plan-badge-pill">MOST POPULAR</span>
                <h2 className="psych-plan-large-title">Residency ELITE Plan</h2>
                <p className="psych-plan-large-subtitle">Prepare with PrepLadder & nail your exam like a pro</p>
                
                <ul className="psych-plan-features-list-clean">
                  <li>
                    <span className="psych-plan-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="12" height="12">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>100 Hours of conceptual video lectures</span>
                  </li>
                  <li>
                    <span className="psych-plan-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="12" height="12">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>Exam-focused topics</span>
                  </li>
                  <li>
                    <span className="psych-plan-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="12" height="12">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>Concise notes aligned with video lectures</span>
                  </li>
                  <li>
                    <span className="psych-plan-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="12" height="12">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>Hard copy notes included</span>
                  </li>
                </ul>
                
                <div className="psych-plan-cta-wrapper">
                  <button className="psych-plan-enroll-large-btn">Enrol now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet Faculty Section */}
      <section className="psych-faculty-section text-center">
        <div className="container">
          <h2 className="psych-faculty-section-title">Meet Our Psychiatry Residency Faculty</h2>
          
          <div className="psych-faculty-card-wrapper">
            <img 
              src="https://image.prepladder.com/content/C5uKb1nOaONjkB4aZU8Z1704264295.png" 
              alt="Introducing Dr. Ankit Goyal - Faculty for Psychiatry" 
              className="psych-faculty-large-card-img img-fluid"
            />
          </div>

          <p className="psych-faculty-desc-below">
            Learn from Dr. Ankit Goel, a leading psychiatrist, and simplify your residency journey with his knowledge and experience.<br />
            Dr. Ankit Goel is here to guide you at every step of the preparation, enabling you to run the course well and ace the exams with confidence.
          </p>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <section className="psych-faqs-accordion-section">
        <div className="psych-faq-container text-center">
          <div className="psych-faq-icon-bubble">
            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" className="psych-chat-icon">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
            </svg>
          </div>
          <h2 className="psych-faq-title">Frequently asked questions</h2>
          
          <div className="psych-faq-accordion">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`psych-faq-item ${isOpen ? "open" : ""}`}>
                  <button className="psych-faq-question-btn" onClick={() => toggleFaq(index)}>
                    <span>{faq.q}</span>
                    <span className="psych-faq-icon-dot"></span>
                  </button>
                  <div className="psych-faq-answer-container">
                    <div 
                      className="psych-faq-answer-content"
                      dangerouslySetInnerHTML={{ __html: faq.a }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
