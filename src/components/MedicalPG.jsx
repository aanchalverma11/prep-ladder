import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./MedicalPG.css";
import medicalFacultyGroup from "../assets/medical_faculty_group.png";

// --- Collapsible FAQ items for courses ---
const FAQ_ITEMS = [
  {
    q: "What’s new in Version XI?",
    a: "Version XI is a complete upgrade focused on high-yield learning and faster recall. It includes: 280+ Hours of entirely new Rapid Revision videos (English & Hinglish), 50+ Hrs of Integrated Essentials for system-wise learning, 20 Hrs of Real cadaver dissection videos, a revamped QBank with 5000+ new questions on missing topics + topper review, Printed Summary Charts for last-minute revision, and SPARK – an intelligent spaced-repetition flashcard system."
  },
  {
    q: "When will Version XI content go LIVE?",
    a: "Version XI content goes live on 12th April 2026."
  },
  {
    q: "What is the pre-booking offer, and till what date is it available?",
    a: "Prebooking starts on 23rd February and is available till 28th February."
  },
  {
    q: "What will I get till 12th April?",
    a: "Until launch, you will have access to existing Version X content. You will be able to see demo videos of all the new assets in your current version."
  },
  {
    q: "Who should buy Version XI?",
    a: "Version XI is ideal for NEET PG, INI-CET, and FMGE aspirants who want a more retention-focused, exam-aligned prep system."
  },
  {
    q: "Why should I switch from Version X to Version XI?",
    a: "Version X helped you cover content. Version XI helps that content convert into recall. You get all-new Rapid Revision (not reused), PYQ-tagged learning to prioritise what repeats, integrated system-wise understanding to reduce overlap, smarter recall tools, and a QBank aligned to the current exam pattern. If your goal is better accuracy and rank improvement, Version XI is the upgrade."
  },
  {
    q: "Will my progress be maintained if I switch to Version XI?",
    a: "Yes. There will be an option to switch between versions. Your progress and analytics will be retained in your current version."
  },
  {
    q: "Will I get access to live classes with Version XI?",
    a: "Version XI is primarily a recorded, high-yield learning ecosystem. LIVE classes (RESOLVE) are available via the Super ELITE Plan as an add-on."
  },
  {
    q: "What has changed in the main videos?",
    a: "There are 10% changes made to main videos. Accordingly we have updated the hard copy notes. These videos were freshly recorded in version X so major updates are not done."
  },
  {
    q: "When will I get notes for Version XI?",
    a: "We will inform you when the booking starts for the same. We will start the dispatch in second week of April (tentatively)."
  },
  {
    q: "When will I get notes for Rapid Revision?",
    a: "We will inform you when the booking starts for the same. We will start the dispatch in fourth week of April (tentatively)."
  }
];


// --- Testimonials of toppers ---
const TOPPERS_DATA = [
  {
    name: "Dr. Harsh",
    rank: "Rank 26 | INI-CET '26",
    img: "https://image.prepladder.com/content/mRwq49Ucg1W1WVmxRzTc1781250947.jpg",
    quote: "PrepLadder’s QBank trained me to approach questions conceptually, not mechanically. It helped me build speed, accuracy, and confidence for INI-CET.",
    videoUrl: "https://www.youtube.com/embed/H4ilcwCXrc0?si=sJfCjcv2G31WzYIM"
  },
  {
    name: "Dr. Sanjay",
    rank: "Rank 7 | NEET PG '25",
    img: "https://image.prepladder.com/content/Dp8hZHxH9qtVgKNDiP6j1756117162.png",
    quote: "I used to get more negatives in PrepLadder GTs, but analyzing them helped me sharpen my approach. That’s what gave me the edge in the real exam.",
    videoUrl: "https://www.youtube.com/embed/AVeHxDAg91g?si=bjvEeQr1ytVp_ChT"
  },
  {
    name: "Dr. Nishid",
    rank: "Rank 11 | NEET PG '25",
    img: "https://image.prepladder.com/content/7KFR6U8nfLBwS0rg1k8q1756117248.png",
    quote: "PrepLadder’s QBank, using bookmarks and highlights to quickly revise weak areas. I gave GTs regularly, emphasizing that consistency is key: “Don’t fear low scores in GTs. They are learning experiences, not the final result. Even toppers begin with low scores.”",
    videoUrl: "https://www.youtube.com/embed/FFZLlZC7h1s?si=CbrBEFd3EH8AHx__"
  },
  {
    name: "Dr. Sahed",
    rank: "Rank 13 | NEET PG '25",
    img: "https://image.prepladder.com/content/RCjj1b9ypS2FCXt8k8C71756117398.png",
    quote: "Every single Medicine question in NEET PG was from your Medicine notes, Sir. I didn’t get a single one wrong. Calling PrepLadder’s QBank aligned with real exam questions",
    videoUrl: "https://www.youtube.com/embed/lqaZz4Vw-CM?si=e0Suxr8A7WfjqFvM"
  },
  {
    name: "Dr. Sakshi",
    rank: "Rank 21 | NEET PG '25",
    img: "https://image.prepladder.com/content/YmXFyDlrXVVkCg1JORrw1756117524.png",
    quote: "Credits to Dr. Preeti Sharma for Patho & Micro mnemonics, and Dr. Ankit Kumar for simplifying Pharma with Medicine.",
    videoUrl: "https://www.youtube.com/embed/Vy0wXN8ai_8?si=aY3ES8rW5JiwpXEd"
  }
];

// --- High-fidelity Features Data for "What's New in Version XI" ---
const FEATURES_DATA = [
  {
    tag: "NEW",
    title: "Rapid Revision",
    subtitle: "280 hours of exam-oriented videos",
    parentClass: "rapid",
    colorClass: "green-theme",
    mockup: "https://image.prepladder.com/content/dnwztYsu0hj1bZIEvUhX1778656695.webp",
    list: [
      { text: "Mapped with PYQs from NEET PG, FMGE, INI-CET" },
      { text: "Tagged with error files, highlighting common mistakes" },
      { text: "Aligned with current exam patterns and trends" },
      { text: "Helps you revise faster and focus on high-yield topics" }
    ]
  },
  {
    tag: "NEWLY REVISED",
    title: "Integrated Essentials",
    subtitle: "50 hours of system-wise learning ",
    parentClass: "integrated",
    colorClass: "blue-theme",
    mockup: "https://image.prepladder.com/content/oEmwRolampLJMfADvOY71778656726.webp",
    list: [
      { text: "Covers overlapping topics in one integrated flow", icon: "https://image.prepladder.com/content/7B95OvEwrYRzqeWrvMS41771574039.svg" },
      { text: "Eliminates unnecessary repetition across multiple subjects", icon: "https://image.prepladder.com/content/7B95OvEwrYRzqeWrvMS41771574039.svg" },
      { text: "Reduces mental load during study sessions", icon: "https://image.prepladder.com/content/7B95OvEwrYRzqeWrvMS41771574039.svg" },
      { text: "Builds connected understanding for clinical MCQs", icon: "https://image.prepladder.com/content/7B95OvEwrYRzqeWrvMS41771574039.svg" }
    ]
  },
  {
    tag: "INTRODUCING",
    title: "Dissection Videos",
    subtitle: "20 hours of real cadaver dissections",
    parentClass: "dessection",
    colorClass: "amber-theme",
    mockup: "https://image.prepladder.com/content/xMCvJ9yq0VD1aetOHOiy1778656793.webp",
    list: [
      { text: "Real structures shown exactly as in the human body", icon: "https://image.prepladder.com/content/KtUqUowF5wAjD4jDgQQW1771574165.svg" },
      { text: "Makes anatomy visual and three-dimensional", icon: "https://image.prepladder.com/content/KtUqUowF5wAjD4jDgQQW1771574165.svg" },
      { text: "Improves cross-section and applied anatomy recall", icon: "https://image.prepladder.com/content/KtUqUowF5wAjD4jDgQQW1771574165.svg" },
      { text: "Reduces confusion between similar-looking structures", icon: "https://image.prepladder.com/content/KtUqUowF5wAjD4jDgQQW1771574165.svg" }
    ]
  },
  {
    tag: "OFFLINE",
    title: "Printed Summary Charts",
    subtitle: "High-yield revision in one-page topics",
    parentClass: "flashcard",
    colorClass: "cyan-theme",
    mockup: "https://image.prepladder.com/content/EQMU714xBL6BEYvVtBdN1778656815.webp",
    list: [
      { text: "Summarises key points into exam-focused flash pages", icon: "https://image.prepladder.com/content/u5pwQ9Q9dPxdTObQOMsh1771574238.svg" },
      { text: "Made for quick revision anytime, anywhere", icon: "https://image.prepladder.com/content/u5pwQ9Q9dPxdTObQOMsh1771574238.svg" },
      { text: "No extra content, only repeatedly asked concepts", icon: "https://image.prepladder.com/content/u5pwQ9Q9dPxdTObQOMsh1771574238.svg" },
      { text: "Helps boost recall with minimal reading time", icon: "https://image.prepladder.com/content/u5pwQ9Q9dPxdTObQOMsh1771574238.svg" }
    ]
  },
  {
    tag: "NEWLY REVISED",
    title: "Revamped QBank",
    subtitle: "18,500 exam-aligned MCQs",
    parentClass: "revamped",
    colorClass: "indigo-theme",
    mockup: "https://image.prepladder.com/content/iYsyxQPziZp7ris3Zosu1778656840.webp",
    list: [
      { text: "New 5,000 questions aligned to the latest exam framing", icon: "https://image.prepladder.com/content/QVLQcxziRHG6HUo68mXP1771574280.svg" },
      { text: "Updated to match current difficulty and patterns", icon: "https://image.prepladder.com/content/QVLQcxziRHG6HUo68mXP1771574280.svg" },
      { text: "Reviewed with inputs from recent toppers", icon: "https://image.prepladder.com/content/QVLQcxziRHG6HUo68mXP1771574280.svg" },
      { text: "Improved UX/UI for seamless experience", icon: "https://image.prepladder.com/content/QVLQcxziRHG6HUo68mXP1771574280.svg" }
    ]
  },
  {
    tag: "ONLINE",
    title: "SPARK",
    subtitle: "Smart digital flashcards for active recall",
    parentClass: "spark",
    colorClass: "orange-theme",
    mockup: "https://image.prepladder.com/content/BgYHps0tCDzVNeWGM9HA1778656871.webp",
    list: [
      { text: "Tracks what you remember and what you forget", icon: "https://image.prepladder.com/content/8NLXYWp0WFaTStBhj5TJ1771574319.svg" },
      { text: "Uses repeated recall to strengthen long-term memory", icon: "https://image.prepladder.com/content/8NLXYWp0WFaTStBhj5TJ1771574319.svg" },
      { text: "Highlights weak areas and prevents over-revision", icon: "https://image.prepladder.com/content/8NLXYWp0WFaTStBhj5TJ1771574319.svg" },
      { text: "Makes revision personalized, faster, and more efficient.", icon: "https://image.prepladder.com/content/8NLXYWp0WFaTStBhj5TJ1771574319.svg" }
    ]
  }
];

function SparkCardDeck() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState("");

  const cards = [
    { q: "Which nerve innervates the diaphragm?", a: "Phrenic Nerve (C3, C4, C5)" },
    { q: "What is the most common cause of community-acquired pneumonia?", a: "Streptococcus pneumoniae" },
    { q: "Which vitamin deficiency causes megaloblastic anemia?", a: "Vitamin B12 or Vitamin B9 (Folate)" },
    { q: "What is the drug of choice for anaphylactic shock?", a: "Epinephrine (Adrenaline)" },
    { q: "Which tumor marker is associated with ovarian cancer?", a: "CA-125" }
  ];

  const handleNext = (difficulty) => {
    if (transitioning) return;
    setSwipeDirection(difficulty);
    setTransitioning(true);
    setTimeout(() => {
      setIsFlipped(false);
      setCurrentIdx((prev) => (prev + 1) % cards.length);
      setTransitioning(false);
      setSwipeDirection("");
    }, 450);
  };

  const handleFlip = (e) => {
    // Avoid flipping when clicking the buttons
    if (e.target.closest(".pl-spark-float-btn")) return;
    if (transitioning) return;
    setIsFlipped(!isFlipped);
  };

  const currentCard = cards[currentIdx];

  return (
    <div className="pl-spark-deck">
      {/* 1/20 Counter */}
      <div className="pl-spark-counter">
        {currentIdx + 1}/{cards.length}
      </div>

      <div className="pl-spark-stack-container">
        {/* Background shadow cards for deck depth */}
        <div className="pl-spark-card-shadow card-shadow-2"></div>
        <div className="pl-spark-card-shadow card-shadow-1"></div>

        {/* The interactive main card */}
        <div 
          className={`pl-spark-card ${isFlipped ? "flipped" : ""} ${transitioning ? `transitioning swipe-${swipeDirection}` : ""}`}
          onClick={handleFlip}
        >
          <div className="pl-spark-card-inner">
            {/* Front of card (Question) */}
            <div className="pl-spark-card-front">
              <div className="pl-spark-card-content">
                <p className="pl-spark-question">{currentCard.q}</p>
              </div>
              <div className="pl-spark-card-footer">Tap to flip the card</div>
            </div>

            {/* Back of card (Answer) */}
            <div className="pl-spark-card-back">
              <div className="pl-spark-card-content">
                <p className="pl-spark-answer">{currentCard.a}</p>
              </div>
              <div className="pl-spark-card-footer">Tap to see question</div>
            </div>
          </div>
        </div>

        {/* Floating buttons around the card */}
        <button className="pl-spark-float-btn hard" onClick={() => handleNext("hard")}>
          Hard
        </button>
        <button className="pl-spark-float-btn again" onClick={() => handleNext("again")}>
          Again
        </button>
        <button className="pl-spark-float-btn easy" onClick={() => handleNext("easy")}>
          Easy
        </button>
        <button className="pl-spark-float-btn good" onClick={() => handleNext("good")}>
          Good
        </button>
      </div>
    </div>
  );
}

export default function MedicalPG({ course = "Medical PG", onViewChange }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [topperIndex, setTopperIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    // Each card container has padding/gap, so calculate active index dynamically
    const cardWidth = container.querySelector(".pl-topper-card-wrapper")?.offsetWidth || container.offsetWidth;
    const activeIdx = Math.round(scrollLeft / cardWidth);
    if (activeIdx >= 0 && activeIdx < TOPPERS_DATA.length) {
      setTopperIndex(activeIdx);
    }
  };

  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.querySelector(".pl-topper-card-wrapper")?.offsetWidth || container.offsetWidth;
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
      // Snap to closest card
      const cardWidth = container.querySelector(".pl-topper-card-wrapper")?.offsetWidth || container.offsetWidth;
      const index = Math.round(container.scrollLeft / cardWidth);
      scrollToCard(index);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Dynamic content details based on active course context
  const getCourseText = () => {
    if (course === "FMGE") {
      return {
        tag: "FMGE 2026",
        title: "Your FMGE Preparation, Simpler & Stronger!",
        desc: "FMGE preparation comes with an overwhelming pressure, a vast syllabus, and limited time. That’s exactly why we built Version XI to make concepts stick."
      };
    }
    return {
      tag: "NEET PG 2026",
      title: "Make it Stick with Version XI",
      desc: "NEET PG/INI-CET preparation comes with an overwhelming pressure, a vast syllabus, and limited time. That’s exactly why we built Version XI to make concepts stick."
    };
  };

  const courseDetails = getCourseText();
  const heroFacultyImage = "https://image.prepladder.com/content/5rCnV7u7H5Au6mkt4dl31778656280.webp";

  return (
    <div className="pl-coursepage page-wrapper">
      {/* Announcement Strip */}
      <div className="pl-announcement-strip">
        <div className="pl-announcement-container content-container">
          <p className="pl-announcement-text">
            Resolve {course} Lap 2 starts on 20th June! <a href="#" className="pl-announcement-btn">Enrol Now</a>
          </p>
        </div>
      </div>

      {/* Hero / Banner Section */}
      <section className="pl-course-hero">
        <div className="pl-hero-watermark">XI</div>
        <div className="pl-course-hero__container content-container">
          <div className="pl-hero-tag">
            <span className="pl-hero-tag-dot"></span>
            {courseDetails.tag}
          </div>
          <h1 className="pl-hero-title">
            {course === "Medical PG" ? (
              <>India's Best NEET PG<br />Preparation Courses</>
            ) : (
              courseDetails.title
            )}
          </h1>
          <p className="pl-hero-description">
            {courseDetails.desc}
          </p>
          <div className="pl-hero-actions">
            <Link to="/courses/medical-pg/plan" className="pl-btn-primary">
              Enrol Now
            </Link>
            <a href="#whats-new" className="pl-btn-secondary">
              Know more
            </a>
          </div>
        </div>
        <div className="pl-hero-faculty-wrapper">
          <img
            src={heroFacultyImage}
            alt="PrepLadder Faculty Group"
            className="pl-hero-faculty-img"
          />
        </div>
      </section>

      {/* Trust Metrics / Counters section */}
      <section className="pl-metrics-section">
        <div className="pl-metrics-container content-container">
          <h2 className="pl-metrics-title">
            Trusted by <span>1M+ Learners</span>
          </h2>
          <div className="pl-metrics-grid">
            <div className="pl-metric-box">
              <div className="pl-metric-icon-wrapper blue">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#007BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.8 2.3A7.5 7.5 0 0 0 12 9.5a7.5 7.5 0 0 0 7.2-7.2" />
                  <path d="M12 9.5V18" />
                  <path d="M19 18a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
                  <path d="M20 2H4" />
                </svg>
              </div>
              <h3 className="pl-metric-number">5 Lakh+</h3>
              <p className="pl-metric-label">Future Doctors</p>
            </div>

            <div className="pl-metric-box">
              <div className="pl-metric-icon-wrapper orange">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="pl-metric-number">18</h3>
              <p className="pl-metric-label">Top Educators</p>
            </div>

            <div className="pl-metric-box">
              <div className="pl-metric-icon-wrapper green">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="pl-metric-number">97%</h3>
              <p className="pl-metric-label">Strike Rate in 2026</p>
            </div>

            <div className="pl-metric-box">
              <div className="pl-metric-icon-wrapper amber">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="pl-metric-number">4.9</h3>
              <p className="pl-metric-label">Rated by Learners</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's New in Version XI */}
      <section id="whats-new" className="pl-whatsnew-section">
        <div className="pl-whatsnew-container content-container">
          <div className="pl-section-header">
            <h2>What’s New in <span>Version XI</span></h2>
            <p>
              Step into a completely reimagined prep experience, built to help you learn faster and retain longer.
            </p>
          </div>

          <div className="pl-features-list">
            {FEATURES_DATA.map((feat, index) => {
              const isReverse = index % 2 !== 0;
              return (
                <div
                  key={index}
                  className={`pl-feature-block ${feat.colorClass} ${feat.parentClass || ""} ${isReverse ? "reverse" : ""}`}
                  style={{ zIndex: index + 1 }}
                >
                  <div className="pl-feature-text">
                    <span className="pl-feat-tag">{feat.tag}</span>
                    <h3 className="pl-feat-category">{feat.title}</h3>
                    <h4 className="pl-feat-title">{feat.subtitle}</h4>
                    <ul className="pl-feat-bullets">
                      {feat.list.map((item, bulletIdx) => (
                        <li key={bulletIdx} className="pl-feat-bullet-item">
                          <span className="pl-bullet-icon-wrapper">
                            {item.icon ? (
                              <img src={item.icon} alt="bullet icon" className="pl-bullet-custom-icon" />
                            ) : (
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="#E6F4EA"/>
                                <path d="M6 10l3 3 5-5" stroke="#137333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </span>
                          <span className="pl-bullet-text">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pl-feature-media">
                    {feat.parentClass === "spark" ? (
                      <SparkCardDeck />
                    ) : (
                      <img src={feat.mockup} alt={feat.title} className="pl-feature-mockup-img" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Adaptive Learning / Additional Tools */}
      <section className="pl-adaptive-section">
        <div className="pl-adaptive-container content-container">
          <div className="pl-section-header">
            <h2>Additional Tools, <span>Adaptive Learning</span></h2>
          </div>

          <div className="pl-adaptive-grid">
            <div className="pl-adaptive-card">
              <div className="pl-adaptive-card-header">
                <img alt="Test & Explanation" src="https://image.prepladder.com/content/o5GoFYskhUohVgCdFOwu1774950998.svg" className="pl-adaptive-icon" />
                <h3>Test & Explanation</h3>
              </div>
              <p>
                Test your prep and fix mistakes instantly with same-day expert explanations.
              </p>
              <div className="pl-adaptive-action">
                <a href="#" className="pl-card-link-btn">Know more</a>
              </div>
            </div>

            <div className="pl-adaptive-card">
              <div className="pl-adaptive-card-header">
                <img alt="Version XI Notes" src="https://image.prepladder.com/content/wpjosltm1FnBzSUH5PQv1776164569.svg" className="pl-adaptive-icon" />
                <h3>Version XI Notes</h3>
              </div>
              <p>
                Version XI Notes are built to make revision faster, sharper, and easier to retain.
              </p>
              <div className="pl-adaptive-action">
                <a href="#" className="pl-card-link-btn">Know more</a>
              </div>
            </div>

            <div className="pl-adaptive-card">
              <div className="pl-adaptive-card-header">
                <img alt="Prof Edge" src="https://image.prepladder.com/content/wwrtxi4fOaLdDxNA47A41774952412.svg" className="pl-adaptive-icon" />
                <h3>Prof Edge</h3>
              </div>
              <p>
                Master your Prof with a university exam-aligned syllabus from top educators.
              </p>
              <div className="pl-adaptive-action">
                <a href="#" className="pl-card-link-btn">Know more</a>
              </div>
            </div>
          </div>

          {/* Time to Make it Stick Callout Banner */}
          <div className="pl-stick-banner">
            <div className="pl-stick-content">
              <h3>TIME TO MAKE IT <span>STICK</span></h3>
              <p>Version XI is built for serious aspirants who want clarity, structure, and an edge.</p>
              <div className="pl-stick-actions">
                <button className="pl-btn-counsel" onClick={() => alert("Connecting with our counseling team...")}>
                  Talk to our Counsellor
                </button>
                <a href="#" className="pl-btn-viewplans">
                  View Plans
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why PrepLadder section */}
      <section className="pl-whyprepladder-section">
        <div className="pl-why-container content-container">
          <h2 className="pl-why-title">Why This is the Only <br /><span>{course === "Medical PG" ? "NEET PG Prep" : `${course} Prep`} You Need!</span></h2>
          <div className="pl-why-grid">
            <div className="pl-why-card">
              <img src="https://image.prepladder.com/content/sU5n7dZskSsmiwDlrIRJ1775469528.svg" alt="Revise Smarter" className="pl-why-card-icon" />
              <h3 className="pl-why-card-title">Revise Smarter, Not Longer</h3>
              <p>
                Streamline your prep with focused video lectures mapped to past NEET PG/FMGE/INICET questions. Highlighting common pitfalls and high-yield topics, it helps you retain more while cutting down unnecessary study time.
              </p>
            </div>

            <div className="pl-why-card">
              <img src="https://image.prepladder.com/content/3rbMeMMxZGljQFnMbM6S1775469612.svg" alt="Connect the Dots" className="pl-why-card-icon" />
              <h3 className="pl-why-card-title">Connect the Dots</h3>
              <p>
                Integrated essentials bring overlapping concepts together so you see the bigger picture. Reduce repetition, lighten your mental load, and strengthen your understanding for those tricky clinical questions.
              </p>
            </div>

            <div className="pl-why-card">
              <img src="https://image.prepladder.com/content/CNljyjdTJAkvNleuenHj1775469661.svg" alt="Anatomy" className="pl-why-card-icon" />
              <h3 className="pl-why-card-title">Anatomy That Stays With You</h3>
              <p>
                Watch real cadaver dissections to make anatomy concrete. Recognize structures instantly, improve cross-section recall, and never get confused between similar-looking parts again.
              </p>
            </div>

            <div className="pl-why-card">
              <img src="https://image.prepladder.com/content/7qFirPd1tiQemVpmKeqW1775469710.svg" alt="High-Yield Insights" className="pl-why-card-icon" />
              <h3 className="pl-why-card-title">High-Yield Insights at a Glance</h3>
              <p>
                Quick, one-page printed summaries condense only what really matters. Perfect for fast revisions anywhere, they make remembering repeatedly tested concepts effortless.
              </p>
            </div>

            <div className="pl-why-card">
              <img src="https://image.prepladder.com/content/cKv03xiCTZc3893NlJaB1775469763.svg" alt="Practice" className="pl-why-card-icon" />
              <h3 className="pl-why-card-title">Practice That Prepares You for Anything</h3>
              <p>
                Our fully revamped QBank covers every type of question. With 18,500 questions reflecting current trends, it helps you sharpen accuracy, speed, and confidence under pressure.
              </p>
            </div>

            <div className="pl-why-card">
              <img src="https://image.prepladder.com/content/TgFemhD0klFoOWS54aov1775469808.svg" alt="Full-Length Tests" className="pl-why-card-icon" />
              <h3 className="pl-why-card-title">Full-Length Tests for Exam Simulation</h3>
              <p>
                Our test series simulates the real exam environment, helping you assess your preparation and refine your strategy. With full-length tests, you can evaluate your performance across all subjects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="pl-testimonials-section">
        <div className="pl-test-container content-container">
          <div className="pl-test-header">
            <img src="https://image.prepladder.com/content/J2JSh88NHPRjztiabgZB1775910318.png" className="pl-test-medal" alt="Medal" />
            <h2>How They Made It: <span>Toppers’ Journeys</span></h2>
            <p>Hear from the toppers, their real success stories of turning their dreams into reality!</p>
          </div>

          <div className="pl-carousel-scroll-container" ref={scrollRef} onScroll={handleScroll} onMouseDown={handleMouseDown}>
            {TOPPERS_DATA.map((topper, idx) => (
              <div key={idx} className="pl-topper-card-wrapper">
                <div className="pl-topper-card">
                  <div className="pl-topper-card__avatar" onClick={() => setActiveVideo(topper.videoUrl)}>
                    <img src={topper.img} alt={topper.name} />
                    <div className="pl-play-badge">
                      <span>▶</span>
                    </div>
                  </div>
                  <div className="pl-topper-card__content">
                    <span className="pl-quote-icon">“</span>
                    <p className="pl-topper-quote">{topper.quote}</p>
                    <div className="pl-topper-meta">
                      <h4>{topper.name}</h4>
                      <span>{topper.rank}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pl-carousel-dots">
            {TOPPERS_DATA.map((_, idx) => (
              <button
                key={idx}
                className={`pl-carousel-dot ${topperIndex === idx ? "active" : ""}`}
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to topper ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Video Overlay Modal */}
        {activeVideo && (
          <div className="pl-video-modal" onClick={() => setActiveVideo(null)}>
            <div className="pl-video-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="pl-video-modal-close" onClick={() => setActiveVideo(null)}>×</button>
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

      {/* FAQs Section */}
      <section className="pl-faqs-accordion-section">
        <div className="pl-faq-container content-container">
          <h2 className="pl-faq-title">Frequently Asked Questions</h2>
          <div className="pl-faq-accordion">
            {(showAllFaqs ? FAQ_ITEMS : FAQ_ITEMS.slice(0, 3)).map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`pl-faq-item ${isOpen ? "open" : ""}`}>
                  <button className="pl-faq-question-btn" onClick={() => toggleFaq(index)}>
                    <span>{faq.q}</span>
                    <span className="pl-faq-icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div className="pl-faq-answer-container">
                    <div 
                      className="pl-faq-answer-content"
                      dangerouslySetInnerHTML={{ __html: faq.a }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* See More Toggle Button */}
          {FAQ_ITEMS.length > 3 && (
            <div className="pl-faq-see-more-container">
              <button 
                className={`pl-btn-see-more ${showAllFaqs ? "expanded" : ""}`}
                onClick={() => setShowAllFaqs(!showAllFaqs)}
              >
                <span>{showAllFaqs ? "See less" : "See more"}</span>
                <img 
                  src="https://image.prepladder.com/content/zQApxahMIaoX9zMM6JSB1767783147.png" 
                  alt="arrow"
                  className="pl-faq-see-more-arrow"
                />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Faculty Arc Banner */}
      <section className="pl-bottom-faculty-section">
        <div className="pl-bottom-faculty-container content-container">
          <div className="pl-bottom-faculty-logo-wrapper">
            <img
              src="https://image.prepladder.com/content/Rq9ZUTIm9UtuRtbfjl4v1771564310.png"
              alt="PrepLadder Version XI Faculty"
              className="pl-bottom-faculty-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
