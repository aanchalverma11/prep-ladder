import React, { useState, useRef } from "react";
import "./SS_pediatrics.css";

const TOPPERS_DATA = [
  {
    name: "Dr. Pankaj",
    rank: "Rank 4  | Pediatrics",
    quote: "PrepLadder was the cornerstone for my preparation. I started with the video lectures and the QBank.",
    videoUrl: "https://www.youtube.com/embed/Wi0xD4FZdMc?si=9KXxQGdUIzRpggRn",
    img: "https://image.prepladder.com/content/bGlbJWVbHi4QaJxGmJEv1748255627.png"
  },
  {
    name: "Dr. Hiba",
    rank: "Rank 5  | Pediatrics",
    quote: "My seniors suggested PrepLadder for NEET SS. I started Dr. Sandeep Sharma’s lectures—and never looked back.",
    videoUrl: "https://www.youtube.com/embed/PqWhEmjWQe0?si=Red4WiWXUGcq2NV",
    img: "https://image.prepladder.com/content/KZQv4rwqPDXDQyDgbWiN1748255666.jpg"
  },
  {
    name: "Dr. Nikesh",
    rank: "Rank 8  | Pediatrics",
    quote: "While watching Dr. Sandeep Sharma’s videos on the PrepLadder app, I made my notes and added from Nelson’s if needed.",
    videoUrl: "https://www.youtube.com/embed/9xPkOIfUCQA?si=catfQihsEzBB2bJf",
    img: "https://image.prepladder.com/content/y7bHfuXmQdFsJhJXdiPT1748255702.jpg"
  },
  {
    name: "Dr. Yaseena",
    rank: "Rank 11  | Pediatrics",
    quote: "Started PrepLadder’s subject-wise and grand tests 40 days before the exam. Loved the PrepLadder notes—they helped with my theory exams too.",
    videoUrl: "https://www.youtube.com/embed/mWcbU2THqMY?si=GEbjw2ScWlM6WPPu",
    img: "https://image.prepladder.com/content/feORRgWu9KdmlIYp9YFr1748255740.jpg"
  }
];

export default function SS_pediatrics() {
  const [topperIndex, setTopperIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.querySelector(".ss-topper-card-wrapper")?.offsetWidth || container.offsetWidth;
    const activeIdx = Math.round(scrollLeft / cardWidth);
    if (activeIdx >= 0 && activeIdx < TOPPERS_DATA.length) {
      setTopperIndex(activeIdx);
    }
  };

  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.querySelector(".ss-topper-card-wrapper")?.offsetWidth || container.offsetWidth;
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });
    setTopperIndex(index);
  };

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    container.classList.add("dragging");
    const startX = e.pageX - container.offsetLeft;
    const scrollLeft = container.scrollLeft;

    const handleMouseMove = (moveEvent) => {
      const x = moveEvent.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      container.classList.remove("dragging");
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      const cardWidth = container.querySelector(".ss-topper-card-wrapper")?.offsetWidth || container.offsetWidth;
      const index = Math.round(container.scrollLeft / cardWidth);
      scrollToCard(index);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="ss-pediatrics-page">
      {/* Hero Banner Section */}
      <section className="ss-pediatrics-hero position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column (Text Content) */}
            <div className="col-12 col-lg-6 ss-hero-text-col text-start">
              <span className="ss-hero-badge-pill">
                NEET SS 2025
              </span>
              <h1 className="ss-hero-heading-main">
                Your all-in-one solution for <span>NEET SS Pediatrics</span> prep
              </h1>
              <p className="ss-hero-description-text">
                Master SS Pediatrics with PrepLadder’s comprehensive video lectures, concise notes, Rapid Revision sessions, and expert guidance by <strong>Dr. Sandeep Sharma</strong> - all aligned with <strong>Nelson’s 22nd Edition.</strong>
              </p>
              <div className="ss-hero-cta-wrapper">
                <button className="ss-hero-enroll-btn">
                  Enrol Now
                </button>
              </div>
            </div>

            {/* Right Column (Image) */}
            <div className="col-12 col-lg-6 ss-hero-image-col text-end position-relative">
              <div className="ss-hero-doctor-wrapper">
                <img
                  src="https://image.prepladder.com/content/f7wbfhhb1c7ulVcpC1H01748236715.png"
                  alt="Dr. Sandeep Sharma"
                  className="ss-hero-doctor-img"
                />
                <span className="ss-doctor-name-tag">Dr. Sandeep Sharma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      

      {/* Feature 1 (Conceptual Video Lectures) */}
      <section className="ss-feature-section-row">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-start">
              <div className="ss-feature-text-block">
                <h2 className="ss-feature-item-heading">Conceptual Video Lectures</h2>
                <p className="ss-feature-item-desc">
                  Introducing 20+ hours of exam-focused updates based on Nelson’s 22nd edition. Combine this with 210+ hours of conceptual video lectures by Dr. Sandeep Sharma, and master the entire NEET SS Pediatrics syllabus with ease.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center">
              <div className="ss-feature-media-block">
                <img 
                  src="https://image.prepladder.com/content/z5kDdhqC4E6q9Bwm03qR1748262659.png" 
                  alt="Conceptual Video Lectures" 
                  className="ss-feature-item-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid (Notes, QBank, Treasures, Performance) */}
      <section className="ss-feature-section-row ss-pediatrics-two-col">
        <div className="container">
          <div className="row g-4">
            {/* Concise Notes For Quick Revision */}
            <div className="col-12 col-md-6">
              <div className="ss-pediatrics-card">
                <div className="ss-pediatrics-card-content">
                  <h2 className="ss-pediatrics-card-title">Concise Notes For Quick Revision</h2>
                  <p className="ss-pediatrics-card-desc">
                    Concise Notes aligned with conceptual video lectures with high quality images for quick revision.
                  </p>
                </div>
                <div className="ss-pediatrics-media-wrapper">
                  <img 
                    src="https://image.prepladder.com/content/AhBeDrp6xuDxFKmFoJOs1748262712.png" 
                    alt="Concise Notes" 
                    className="ss-pediatrics-media-img img-fluid"
                  />
                </div>
              </div>
            </div>

            {/* High Yield QBank */}
            <div className="col-12 col-md-6">
              <div className="ss-pediatrics-card">
                <div className="ss-pediatrics-card-content">
                  <h2 className="ss-pediatrics-card-title">High Yield QBank</h2>
                  <p className="ss-pediatrics-card-desc">
                    Strengthen your NEET SS Pediatrics exam preparation with the help of 4500+ exam-oriented MCQs based on previous years topics.
                  </p>
                </div>
                <div className="ss-pediatrics-media-wrapper">
                  <img 
                    src="https://image.prepladder.com/content/tqbIHz8WsI4AoFFsuMJW1748262733.png" 
                    alt="High Yield QBank" 
                    className="ss-pediatrics-media-img img-fluid"
                  />
                </div>
              </div>
            </div>

            {/* Access Essential Treasures */}
            <div className="col-12 col-md-6">
              <div className="ss-pediatrics-card">
                <div className="ss-pediatrics-card-content">
                  <h2 className="ss-pediatrics-card-title">Access Essential Treasures</h2>
                  <p className="ss-pediatrics-card-desc">
                    Benefit from 500+ treasures, condensed summary of topics for your quick last-minute revisions.
                  </p>
                </div>
                <div className="ss-pediatrics-media-wrapper">
                  <img 
                    src="https://image.prepladder.com/content/U1YIsDu9dAvh3GmZG68y1748262777.png" 
                    alt="Access Essential Treasures" 
                    className="ss-pediatrics-media-img img-fluid"
                  />
                </div>
              </div>
            </div>

            {/* Detailed Performance Analysis */}
            <div className="col-12 col-md-6">
              <div className="ss-pediatrics-card">
                <div className="ss-pediatrics-card-content">
                  <h2 className="ss-pediatrics-card-title">Detailed Performance Analysis</h2>
                  <p className="ss-pediatrics-card-desc">
                    Track your progress, identify areas for improvement, and ensure you're fully prepared for the exam with comprehensive performance insights.
                  </p>
                </div>
                <div className="ss-pediatrics-media-wrapper">
                  <img 
                    src="https://image.prepladder.com/content/DQTdIFcrF2QqDQpJocIe1748262808.png" 
                    alt="Detailed Performance Analysis" 
                    className="ss-pediatrics-media-img img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rapid Revision Section */}
      <section className="ss-pediatrics-rapid-section">
        <div className="container">
          <div className="ss-pediatrics-rapid-banner">
            <div className="row align-items-center">
              {/* Left Content */}
              <div className="col-12 col-md-7 text-start ss-rapid-content-col">
                <h3 className="ss-rapid-title">Rapid Revision</h3>
                <h4 className="ss-rapid-subtitle">NEET SS Pediatrics</h4>
                
                <ul className="ss-rapid-checklist">
                  <li>
                    <span className="ss-rapid-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#E6F4EA"/>
                        <path d="M6 10l3 3 5-5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="ss-rapid-check-text">High-yield, concise video lectures to power your final revision - all in just <strong>35+ hours.</strong></span>
                  </li>
                  <li>
                    <span className="ss-rapid-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#E6F4EA"/>
                        <path d="M6 10l3 3 5-5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="ss-rapid-check-text"><strong>FREE</strong> for Premium Learners.</span>
                  </li>
                </ul>
                
                <button className="ss-rapid-cta-btn">Access with SS ELITE Plan</button>
              </div>

              {/* Right Logo/Badge */}
              <div className="col-12 col-md-5 text-center ss-rapid-logo-col">
                <div className="ss-rapid-badge-box">
                  <div className="ss-rapid-badge-title">RAPID</div>
                  <div className="ss-rapid-badge-main">REVISION</div>
                  <div className="ss-rapid-badge-divider">
                    <span>NEET SS PEDIATRICS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toppers Journeys Section */}
      <section className="ss-testimonials-section">
        <div className="ss-test-container">
          <div className="ss-test-header">
            <img src="https://image.prepladder.com/content/J2JSh88NHPRjztiabgZB1775910318.png" className="ss-test-medal" alt="Medal" />
            <h2>How They Made It: <span>Toppers’ Journeys</span></h2>
            <p>Hear from the toppers, their real success stories of turning their dreams into reality!</p>
          </div>

          <div className="ss-carousel-scroll-container" ref={scrollRef} onScroll={handleScroll} onMouseDown={handleMouseDown}>
            {TOPPERS_DATA.map((topper, idx) => (
              <div key={idx} className="ss-topper-card-wrapper">
                <div className="ss-topper-card">
                  <div className="ss-topper-card__avatar" onClick={() => setActiveVideo(topper.videoUrl)}>
                    <img src={topper.img} alt={topper.name} />
                    <div className="ss-play-badge">
                      <span>▶</span>
                    </div>
                  </div>
                  <div className="ss-topper-card__content">
                    <span className="ss-quote-icon">“</span>
                    <p className="ss-topper-quote">{topper.quote}</p>
                    <div className="ss-topper-meta">
                      <h4>{topper.name}</h4>
                      <span>{topper.rank}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ss-carousel-dots">
            {TOPPERS_DATA.map((_, idx) => (
              <button
                key={idx}
                className={`ss-carousel-dot ${topperIndex === idx ? "active" : ""}`}
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to topper ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Video Overlay Modal */}
        {activeVideo && (
          <div className="ss-video-modal" onClick={() => setActiveVideo(null)}>
            <div className="ss-video-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="ss-video-modal-close" onClick={() => setActiveVideo(null)}>×</button>
              <iframe
                width="100%"
                height="100%"
                src={activeVideo}
                title="Topper Success Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section>

      {/* Subscription Plans Section */}
      <section className="ss-plans-card-section">
        <div className="container">
          <div className="ss-plan-card-large">
            <div className="row align-items-center">
              {/* Left Column (Illustration) */}
              <div className="col-12 col-md-5 text-center ss-plan-image-col">
                <img 
                  src="https://image.prepladder.com/content/ggzCIutx4dBhdSYQbCJW1748241536.png" 
                  alt="Climbing ladder to success illustration" 
                  className="ss-plan-large-img img-fluid"
                />
              </div>
              
              {/* Right Column (Plan Details) */}
              <div className="col-12 col-md-7 text-start ss-plan-details-col">
                <span className="ss-plan-badge-pill">MOST POPULAR</span>
                <h2 className="ss-plan-large-title">SS 3.0 Pediatrics ELITE Plan</h2>
                <p className="ss-plan-large-subtitle">Prepare with PrepLadder & nail your exam like a pro</p>
                
                <ul className="ss-plan-features-list-clean">
                  <li>
                    <span className="ss-plan-check-icon">✓</span>
                    <span>230+ Hours of conceptual video lectures by Dr. Sandeep Sharma</span>
                  </li>
                  <li>
                    <span className="ss-plan-check-icon">✓</span>
                    <span>20+ Hours of exam-focused updates based on Nelson's 22nd Edition</span>
                  </li>
                  <li>
                    <span className="ss-plan-check-icon">✓</span>
                    <span>4500+ exam-oriented MCQs based on previous years topics</span>
                  </li>
                  <li>
                    <span className="ss-plan-check-icon">✓</span>
                    <span>500+ treasures (condensed summaries)</span>
                  </li>
                  <li>
                    <span className="ss-plan-check-icon">✓</span>
                    <span>Concise notes aligned with video lectures (soft and hard copy)</span>
                  </li>
                  <li>
                    <span className="ss-plan-check-icon">✓</span>
                    <span>Full length tests & Detailed Performance Analysis</span>
                  </li>
                  <li>
                    <span className="ss-plan-check-icon">✓</span>
                    <span>Hard copy notes included (for 6 months and above) - T&C applied.</span>
                  </li>
                </ul>
                
                <div className="ss-plan-cta-wrapper">
                  <button className="ss-plan-enroll-large-btn">Enrol now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
