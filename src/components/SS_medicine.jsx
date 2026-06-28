import React from "react";
import SS_med_1 from "../assets/SS_med_1.png";
import "./SS_medicine.css";

export default function SS_medicine() {
  return (
    <div className="ss-medicine-page">
      <section className="ss-medicine-hero position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column (Text Content) */}
            <div className="col-12 col-lg-6 ss-hero-text-col text-start">
              <span className="ss-hero-badge-pill">
                NEET SS 2025
              </span>
              <h1 className="ss-hero-heading-main">
                Master <span>NEET SS Medicine</span><br />with shortcut to Harrison's 21st Edition
              </h1>
              <p className="ss-hero-description-text">
                Crack NEET SS Medicine with expert-led video lectures, high-yield notes, and strategic guidance from <strong>Dr. Rajesh Gubba & Dr. Deepak Marwah</strong>-everything aligned with Harrison's 21st Edition for smarter, faster prep.
              </p>
              <div className="ss-hero-cta-wrapper">
                <button className="ss-hero-enroll-btn">
                  Enrol Now
                </button>
              </div>
            </div>

            {/* Right Column (Image) */}
            <div className="col-12 col-lg-6 ss-hero-image-col text-end">
              <img
                src={SS_med_1}
                alt="Dr. Rajesh Gubba & Dr. Deepak Marwah"
                className="ss-hero-doctors-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ss-metrics-section">
        <div className="container text-center">
          <h2 className="ss-metrics-title">
            Trusted by <span>1M+ Learners</span>
          </h2>
          <div className="row justify-content-center mt-4">
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <div className="ss-metric-box">
                <h3>5 Lakh+</h3>
                <p>Future Doctors</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <div className="ss-metric-box">
                <h3>18</h3>
                <p>Top Educators</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <div className="ss-metric-box">
                <h3>97%</h3>
                <p>Strike Rate in 2026</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="ss-metric-box">
                <h3>4.9</h3>
                <p>Rated by Learners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conceptual Video Lectures Based on Harrison's 21st Edition */}
      <section className="ss-feature-section">
        <div className="container">
          <div className="ss-card ss-conceptual-card">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 ss-card-text">
                <h2 className="ss-feature-heading">
                  Conceptual Video Lectures Based on Harrison's 21st Edition
                </h2>
                <p className="ss-feature-desc">
                  Gain access to 500+ hours of in-depth video lectures that
                  simplify complex concepts, help you master clinical reasoning,
                  all aligned with Harrison's 21st edition.
                </p>
              </div>
              <div className="col-12 col-md-6 ss-card-media-col">
                <div className="ss-media-wrapper">
                  <img 
                    src="https://image.prepladder.com/content/UUtbc8ShP0ksqRwYpOAh1750311937.png" 
                    alt="Conceptual Video Lectures" 
                    className="ss-feature-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High Yield QBank & Access Essential Treasures */}
      <div className="ss-feature-section ss-two-col-section">
        <div className="container">
          <div className="row">
            {/* High Yield QBank */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <div className="ss-card ss-qbank-card">
                <h2 className="ss-feature-heading">High Yield QBank</h2>
                <p className="ss-feature-desc">
                  Boost your NEET SS Medicine prep with 7000+ carefully curated
                  MCQs focused on high-impact topics and previous exam patterns.
                </p>
                <div className="ss-media-wrapper ss-bottom-align">
                  <img 
                    src="https://image.prepladder.com/content/N5phOTfWk6Gi8GJot3IR1750316016.png" 
                    alt="High Yield QBank" 
                    className="ss-feature-img"
                  />
                </div>
              </div>
            </div>

            {/* Access Essential Treasures */}
            <div className="col-12 col-md-6">
              <div className="ss-card ss-treasures-card">
                <h2 className="ss-feature-heading">Access Essential Treasures</h2>
                <p className="ss-feature-desc">
                  Leverage 700+ Treasures, a brief summary of the topics for
                  your quick last-minute revisions.
                </p>
                <div className="ss-media-wrapper ss-bottom-align">
                  <img 
                    src="https://image.prepladder.com/content/thSTicvxNOky0YlxTkgB1750670092.png" 
                    alt="Access Essential Treasures" 
                    className="ss-feature-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* In-depth Performance Analysis */}
      <div className="ss-feature-section">
        <div className="container">
          <div className="ss-card ss-analysis-card">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 ss-card-media-col order-2 order-md-1">
                <div className="ss-media-wrapper">
                  <img 
                    src="https://image.prepladder.com/content/FaaPKkWdQvTyYNjqxtBn1750316086.png" 
                    alt="In-depth Performance Analysis" 
                    className="ss-feature-img"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 ss-card-text order-1 order-md-2 mb-4 mb-md-0">
                <h2 className="ss-feature-heading">In-depth Performance Analysis</h2>
                <p className="ss-feature-desc">
                  Monitor your performance, pinpoint weak areas, and stay exam-ready
                  with detailed insights and progress tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RAPID Revision Banner */}
      <div className="ss-feature-section ss-rapid-revision-section">
        <div className="container">
          <div className="ss-rapid-card-wrapper">
            <a href="/courses/ss-medicine/rapid-revision" className="ss-rapid-card-link">
              <img 
                src="https://image.prepladder.com/content/App Banner Medicine.jpg" 
                alt="RAPID Revision NEET SS Medicine" 
                className="ss-rapid-banner-img"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Toppers' Journeys Section */}
      <ToppersJourneys />

      {/* Subscription Plans Section */}
      <SubscriptionPlans />
    </div>
  );
}

// --- Static Toppers Section ---
function ToppersJourneys() {
  const firstTopper = {
    name: "Dr. Jayant",
    rank: "Rank 17 | NEET SS 2025",
    quote: "I started with PrepLadder's video lectures before diving into Harrison's. This helped me have a strong foundation of concepts.",
    videoLink: "https://www.youtube.com/embed/uXbWQB1WaDs?si=In0H7nvpOxj9qZMv",
    videoPoster: "https://image.prepladder.com/content/zqFq2Gv5bGzRYtvCdUG51750682917.jpeg"
  };

  return (
    <div className="ss-feature-section ss-toppers-section">
      <div className="container">
        <div className="ss-toppers-header text-center">
          <div className="ss-toppers-badge">🏆</div>
          <h2 className="ss-toppers-title">How They Made It: Toppers' Journeys</h2>
          <p className="ss-toppers-subtitle">
            Hear from the toppers, their real success stories of turning their dreams into reality!
          </p>
        </div>

        <div className="ss-topper-carousel-wrapper position-relative">
          <div className="ss-topper-quote-card">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 mb-4 mb-md-0">
                <div className="ss-topper-video-thumbnail">
                  <img 
                    src={firstTopper.videoPoster} 
                    alt={`${firstTopper.name} Topper Story`} 
                    className="ss-topper-img"
                  />
                  <div className="ss-play-overlay-btn" onClick={() => window.open(firstTopper.videoLink, '_blank')}>▶</div>
                </div>
              </div>
              <div className="col-12 col-md-7">
                <div className="ss-topper-quote-content">
                  <span className="ss-quote-icon">“</span>
                  <p className="ss-topper-quote-text">
                    {firstTopper.quote}
                  </p>
                  
                  <div className="ss-topper-author">
                    <h5>{firstTopper.name}</h5>
                    <span>{firstTopper.rank}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Stateful Subscription Plans Slider Component ---
function SubscriptionPlans() {
  const scrollRef = React.useRef(null);
  const [scrollProgress, setScrollProgress] = React.useState(0); // 0 to 100

  const PLANS_DATA = [
    {
      type: "elite",
      icon: "⭐",
      title: "SS 4.0 Medicine ELITE Plan",
      themeClass: "ss-elite-plan",
      checkClass: "gold",
      features: [
        "500+ hours of comprehensive content based on Harrison's 21st Edition covering all high-yield topics",
        "150 hours of high yield content that covers all PYQs",
        "50 hours of MCQ based discussions.",
        "NEET SS pattern based questions aligned with the latest pattern",
        "700+ summary charts for last-minute revision",
        "12+ mock tests for real-time exam experience",
        "Hard copy notes included (for 6 months and above) - T&C applied."
      ]
    },
    {
      type: "notes",
      icon: "📚",
      title: "Notes 4.0 (Upgraded)",
      themeClass: "ss-notes-plan",
      checkClass: "teal",
      features: [
        "Full NEET SS Medicine notes (based 100% on Harrison 21e)",
        "Clinical flowcharts, high-yield tables, and revision blueprints",
        "Educator notes + insider hacks per system",
        "Bonus #1: Top 100 Harrison images for NEET SS",
        "Bonus #2: 14-day Ultra Revision Plan",
        "Bonus #3: MCQ mapping PDF with topic crosslinks"
      ]
    },
    {
      type: "pro",
      icon: "💠",
      title: "NEET SS Medicine Pro Plan",
      themeClass: "ss-pro-plan",
      checkClass: "blue",
      features: [
        "7000+ clinical-based MCQs covering all systems",
        "Pattern-matched format—180 single-best-answer MCQs",
        "40% Core MD medicine | 60% Super-specialty reasoning",
        "12+ Full-length mock tests",
        "700+ Treasures"
      ]
    }
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const progress = (scrollLeft / maxScroll) * 100;
    setScrollProgress(progress);
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    const scrollAmount = direction === "left" ? -clientWidth * 0.85 : clientWidth * 0.85;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  React.useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      // initial progress check
      handleScroll();
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="ss-feature-section ss-plans-section">
      <div className="container position-relative">
        {/* Navigation Arrows */}
        {scrollProgress > 5 && (
          <button 
            className="ss-carousel-arrow left" 
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            ‹
          </button>
        )}
        {scrollProgress < 95 && (
          <button 
            className="ss-carousel-arrow right" 
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            ›
          </button>
        )}

        <div className="ss-plans-carousel-viewport" ref={scrollRef}>
          <div className="ss-plans-carousel-track">
            {PLANS_DATA.map((plan, idx) => (
              <div key={idx} className="ss-plan-card-wrapper">
                <div className={`ss-plan-card ${plan.themeClass}`}>
                  <div className="ss-plan-header">
                    <div className="ss-plan-badge-icon">{plan.icon}</div>
                    <div className="ss-plan-title-wrapper">
                      <h3>{plan.title}</h3>
                    </div>
                    <span className="ss-plan-login-prompt">Login now to view the best prices</span>
                  </div>
                  <div className="ss-plan-body">
                    <span className="ss-plan-section-title">WHAT YOU'LL GET</span>
                    <ul className="ss-plan-features">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx}>
                          <span className={`ss-check-icon ${plan.checkClass}`}>✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="ss-plan-action-btn">Signup / Login</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator Bar */}
        <div className="ss-plans-indicator-bar-wrapper">
          <div className="ss-plans-indicator-bar">
            <div 
              className="ss-plans-indicator-progress" 
              style={{ left: `${(scrollProgress / 100) * 60}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}