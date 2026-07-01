import React, { useState } from "react";
import "./Radiology_residency.css";

const FAQ_ITEMS = [
  {
    q: "What is the course content and duration?",
    a: "This course is divided into 3 major parts:<ul><li>Systemic and General Radiology</li><li>Radiology Physics</li><li>Conventional Radiology</li></ul>And, the complete duration of the course will be around 170+ hours."
  },
  {
    q: "Who should join this course?",
    a: "The comprehensive study course encompassed the entire syllabus taught during 3 years of Radiology residency. It is beneficial for first-, second-, and third-year residents, practicing radiologists, and students preparing for FRCR/EDiR as it offers thorough syllabus coverage. It can also be used to create content for journal clubs and seminars."
  },
  {
    q: "Which books are the course based on?",
    a: "The course is designed based on prominent textbooks, including Grainger & Allison’s Diagnostic Radiology- 7th Edition, Textbook of Radiology and Imaging by David Sutton- 7th Edition, Osborn’s Brain: Imaging, Pathology and Anatomy- 2nd Edition, Diagnostic Ultrasound by Carol M Rumack- 5th edition, High-resolution CT of lung: 5th edition by W. Richard Webb."
  }
];

export default function Radiology_residency() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="radiology-residency-page">
      {/* Announcement Strip */}
      <div className="rad-announcement-strip">
        <div className="container text-center">
          <p className="rad-announcement-text">
            Ease your residency prep with the <strong>Radiology Residency Course</strong> . <a href="/courses/radiology-residency/plan" className="rad-announcement-btn">Enrol Now</a>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="rad-hero position-relative overflow-hidden">
        {/* Decorative background illustrations */}
        <img 
          src="https://image.prepladder.com/content/Phjew8JTF7MKbCzScrpp1674451660.webp" 
          alt="left illustration" 
          className="rad-hero-decor-left"
        />
        <img 
          src="https://image.prepladder.com/content/98g93DyiEaTeb11ke0mG1674451705.webp" 
          alt="right doctor illustration" 
          className="rad-hero-decor-right"
        />
        
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column (Text Content) */}
            <div className="col-12 col-lg-7 rad-hero-text-col text-start">
              <h1 className="rad-hero-heading-main">
                Your <span>Radiology Residency Companion -</span> From Day One to Done
              </h1>
              <p className="rad-hero-description-text">
                Residency is tough-we make it easier. With tools that think like a radiologist and guidance you can trust, this is your go-to companion, built by experts.
              </p>
              <div className="rad-hero-cta-wrapper">
                <a href="/courses/radiology-residency/plan" className="rad-hero-enroll-btn">
                  Enrol Now
                </a>
              </div>
            </div>

            {/* Right Column (Doctor Image) */}
            <div className="col-12 col-lg-5 rad-hero-image-col text-end position-relative">
              <div className="rad-hero-doctor-wrapper">
                <img
                  src="https://image.prepladder.com/content/N0A6jZ1Q7wEaKqqV50351752643725.png"
                  alt="Dr. Abhishek Jha"
                  className="rad-hero-doctor-img"
                />
                <span className="rad-doctor-name-tag">Dr. Abhishek Jha</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Conceptual Video Lectures Section */}
      <section className="rad-feature-section-row">
        <div className="container">
          <div className="rad-section-header text-center">
            <img src="https://image.prepladder.com/content/AsZmnPTY4e5QcBWlCgox1752645084.png" alt="Icon" className="rad-section-title-icon" />
            <h2 className="rad-feature-item-heading">Video Lectures for Concept Clarity</h2>
          </div>
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-12 col-md-6 text-start">
              <div className="rad-feature-text-block">
                <ul className="rad-bullets-list blue-bullets">
                  <li>
                    <span className="rad-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" width="10" height="10">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="rad-bullet-text">
                      <strong>170+ hours of expert-led Conceptual Video Lectures</strong>
                      <p>Bite-sized, accessible content that fits between cases</p>
                    </div>
                  </li>
                  <li>
                    <span className="rad-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" width="10" height="10">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="rad-bullet-text">
                      <strong>Bridge theory into practice</strong>
                      <p>Understand what you're seeing, not just what to memorize</p>
                    </div>
                  </li>
                  <li>
                    <span className="rad-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" width="10" height="10">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="rad-bullet-text">
                      <strong>Adapted from standard textbooks</strong>
                      <p>Includes references from renowned resources like <strong>David Sutton</strong> and more-so you’re always aligned with the gold standard.</p>
                    </div>
                  </li>
                  <li>
                    <span className="rad-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" width="10" height="10">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="rad-bullet-text">
                      <strong>Built to strengthen your foundation</strong>
                      <p>Perfect for residents who want to master core concepts and develop strong clinical reasoning skills</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Right Image */}
            <div className="col-12 col-md-6 text-center">
              <div className="rad-feature-media-block">
                <img 
                  src="https://image.prepladder.com/content/e2xHweKvN7duSyxWSIsl1752645381.png" 
                  alt="Video Lectures Mockup" 
                  className="rad-feature-item-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Notes Section */}
      <section className="rad-feature-section-row alternate-bg">
        <div className="container">
          <div className="rad-section-header text-center">
            <img src="https://image.prepladder.com/content/tzQ0AxQXWZZuLsvEQwrd1752646445.svg" alt="Icon" className="rad-section-title-icon" />
            <h2 className="rad-feature-item-heading">Notes that think like a Radiologist</h2>
          </div>
          <div className="row align-items-center flex-row-reverse">
            {/* Right Content */}
            <div className="col-12 col-md-6 text-start">
              <div className="rad-feature-text-block">
                <ul className="rad-bullets-list green-bullets">
                  <li>
                    <span className="rad-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" width="10" height="10">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="rad-bullet-text">
                      <strong>Most topics are completable in under 15 minutes</strong>
                      <p>Perfect for between cases or quick breaks</p>
                    </div>
                  </li>
                  <li>
                    <span className="rad-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" width="10" height="10">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="rad-bullet-text">
                      <strong>Integrated visuals</strong>
                      <p>Annotated scans, diagrams, and interactive 3D models to simplify complex topics</p>
                    </div>
                  </li>
                  <li>
                    <span className="rad-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" width="10" height="10">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="rad-bullet-text">
                      <strong>Clinically contextualized content</strong>
                      <p>That mirrors how you think during real cases</p>
                    </div>
                  </li>
                  <li>
                    <span className="rad-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" width="10" height="10">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="rad-bullet-text">
                      <strong>Modular and searchable</strong>
                      <p>So you always know what to study next</p>
                    </div>
                  </li>
                  <li>
                    <span className="rad-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" width="10" height="10">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="rad-bullet-text">
                      <strong>Exam focused + practice-ready</strong>
                      <p>Supports both exams and reporting room decisions</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Left Image */}
            <div className="col-12 col-md-6 text-center">
              <div className="rad-feature-media-block">
                <img 
                  src="https://image.prepladder.com/content/F5jloAwJNgvy4eQliZaV1752646502.png" 
                  alt="Notes Mockup" 
                  className="rad-feature-item-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. High-yield QBank Section */}
      <section className="rad-feature-section-row">
        <div className="container">
          <div className="rad-section-header text-center">
            <img src="https://image.prepladder.com/content/aCJEdcGPbYVZSE6robS91752646279.svg" alt="Icon" className="rad-section-title-icon" />
            <h2 className="rad-feature-item-heading">High-yield QBank (Coming Soon)</h2>
          </div>
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-12 col-md-6 text-start">
              <div className="rad-feature-text-block">
                <ul className="rad-bullets-list blue-bullets">
                  <li>
                    <span className="rad-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" width="10" height="10">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="rad-bullet-text">
                      <strong>Clinical scenario focus</strong>
                      <p>Train your brain to think like a specialist with real-world clinical vignettes.</p>
                    </div>
                  </li>
                  <li>
                    <span className="rad-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" width="10" height="10">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="rad-bullet-text">
                      <strong>Image-based questions</strong>
                      <p>Understand why findings matter, not just how to spot them</p>
                    </div>
                  </li>
                  <li>
                    <span className="rad-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" width="10" height="10">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="rad-bullet-text">
                      <strong>Detailed solutions</strong>
                      <p>Get crystal-clear explanations with every answer to reinforce core concepts.</p>
                    </div>
                  </li>
                  <li>
                    <span className="rad-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" width="10" height="10">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="rad-bullet-text">
                      <strong>Designed for real exam prep</strong>
                      <p>Structured to match the latest exam pattern and challenge your reasoning, not just your memory.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Right Image */}
            <div className="col-12 col-md-6 text-center">
              <div className="rad-feature-media-block">
                <img 
                  src="https://image.prepladder.com/content/iYiPoMujR6u5kT7F8Mip1752646330.png" 
                  alt="QBank Mockup" 
                  className="rad-feature-item-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Download Section */}
      <section className="rad-download-section">
        <div className="container">
          <div className="rad-download-banner">
            <div className="row align-items-center">
              {/* Left Column */}
              <div className="col-12 col-md-7 text-start rad-download-content-col">
                <h3 className="rad-download-title">Anytime, Anywhere Access to Quality Content</h3>
                <p className="rad-download-desc">
                  Prepare for Radiology Residency with top-tier study materials accessible anytime on iOS, Android, or Laptop.
                </p>
                <div className="rad-download-btn-row">
                  <a href="/courses/radiology-residency/plan" className="rad-download-cta-btn">Avail FREE Access</a>
                </div>
                <div className="rad-app-stores-row">
                  <a href="https://play.google.com/store/apps/details?id=com.prepladder.learningapp" target="_blank" rel="noopener noreferrer">
                    <img src="https://image.prepladder.com/content/lPU9vb0ejHpGK1psrFuY1752643873.png" alt="Google Play Store" />
                  </a>
                  <a href="https://itunes.apple.com/us/app/prepladder/id1622337839" target="_blank" rel="noopener noreferrer">
                    <img src="https://image.prepladder.com/content/csu1MSFv3KCVGkCk4Teu1752643895.png" alt="Apple App Store" />
                  </a>
                </div>
              </div>
              {/* Right Column */}
              <div className="col-12 col-md-5 text-center rad-download-img-col">
                <img 
                  src="https://image.prepladder.com/content/c0QXHZqryUggxS3ZEnr51752648760.png" 
                  alt="App Mockup illustration" 
                  className="rad-download-banner-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <section className="rad-faqs-accordion-section">
        <div className="rad-faq-container">
          <div className="rad-faq-header-block text-center">
            <img src="https://image.prepladder.com/content/jxPqGg9hp1N2j5fRBW6s1752644077.png" alt="FAQ Icon" className="rad-faq-top-icon" />
            <h2 className="rad-faq-title">Frequently asked questions</h2>
          </div>
          
          <div className="rad-faq-accordion">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`rad-faq-item ${isOpen ? "open" : ""}`}>
                  <button className="rad-faq-question-btn" onClick={() => toggleFaq(index)}>
                    <span>{faq.q}</span>
                    <span className="rad-faq-icon-dot"></span>
                  </button>
                  <div className="rad-faq-answer-container">
                    <div 
                      className="rad-faq-answer-content"
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
