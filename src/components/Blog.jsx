import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Blog.css";

import fac1 from "../assets/fac_1.jpg"; // Meenakshi Bothra
import fac2 from "../assets/fac_2.jpg"; // Deepak Marwah
import fac3 from "../assets/fac_3.jpg"; // Shonali Chandra
import fac4 from "../assets/fac_4.jpg"; // Pritesh Singh
import fac5 from "../assets/fac_5.jpg"; // Mohammed Azam
import article1 from "../assets/article_1.png";
import article2 from "../assets/article_2.png";
import article3 from "../assets/article_3.png";

const TESTIMONIALS = [
  {
    quote: "I used to get more negatives in PrepLadder GTs, but analyzing them helped me sharpen my approach. Thats what gave me the edge in the real exam.",
    name: "Dr. Sanjay",
    rank: "Rank 7 | NEET PG '25",
    img: "https://image.prepladder.com/content/Dp8hZHxH9qtVgKNDiP6j1756117162.png"
  },
  {
    quote: "PrepLadder QBank, using bookmarks and highlights to quickly revise weak areas. I gave GTs regularly, emphasizing that consistency is key: Do not fear low scores in GTs. They are learning experiences, not the final result. Even toppers begin with low scores.",
    name: "Dr. Nishid",
    rank: "Rank 11 | NEET PG '25",
    img: "https://image.prepladder.com/content/7KFR6U8nfLBwS0rg1k8q1756117248.png"
  },
  {
    quote: "Every single Medicine question in NEET PG was from your Medicine notes, Sir. I did not get a single one wrong. Calling PrepLadder QBank aligned with real exam questions.",
    name: "Dr. Sahed",
    rank: "Rank 13 | NEET PG '25",
    img: "https://image.prepladder.com/content/RCjj1b9ypS2FCXt8k8C71756117398.png"
  },
  {
    quote: "PrepLadder Rapid Revision and especially video solutions in GTs: A 2-minute video explanation clarified concepts better than pages of text.",
    name: "Dr. Jyotiprakash",
    rank: "Rank 15 | NEET PG '25",
    img: "https://image.prepladder.com/content/tqbIHz8WsI4AoFFsuMJW1748262733.png"
  }
];

const GUIDE_ITEMS = [
  {
    title: "Exam Pattern",
    desc: "Subject, Questions, Marks - everything you need to know",
    url: "https://www.prepladder.com/neet-pg-study-material/exam-pattern/neet-pg-marks-distribution-latest-exam-pattern"
  },
  {
    title: "Syllabus",
    desc: "Everything you need to study for NEET-PG"
  },
  {
    title: "Exam Eligibility",
    desc: "Who can appear for the NEET-PG exam"
  },
  {
    title: "Preparation Strategy",
    desc: "Find out how to ace NEET-PG"
  },
  {
    title: "Previous Years Papers",
    desc: "Find out how to prepare for the future"
  }
];

const LATEST_ARTICLES = [
  {
    tag: "NEET PG",
    title: "2-Month Preparation Strategy for NEET PG 2026: How to Turn Fear Into Focus",
    snippet: "Two months before NEET PG 2026, most candidates aren't lacking in books, notes, ...",
    date: "Jun 23 2026",
    image: article1
  },
  {
    tag: "High Yield",
    title: "High Yield Pathology Topics for PG 2026: Most Asked Concepts & Important Questions",
    snippet: "A 55-year-old man who smokes a lot has a cough and coughs up blood for three ...",
    date: "Jun 15 2026",
    image: article2
  },
  {
    tag: "Mock Test",
    title: "How to Analyze Your NEET PG Mock Test Score, Rank, Mistakes, and Weak Subjects?",
    snippet: "Most NEET PG aspirants take mock tests. Not many are aware of the method ...",
    date: "Jun 10 2026",
    image: article3
  }
];

const FAQ_ITEMS = [
  {
    q: "What is NEET PG ?",
    a: "NEET PG (National Eligibility cum Entrance Test for Post-Graduation) is a single-window competitive entrance examination for admission to MD/MS and PG Diploma courses in medical institutions across India."
  },
  {
    q: "Is NEET PG tough ?",
    a: "Yes, NEET PG is considered one of the toughest competitive exams in India due to the vast syllabus (19 subjects) and high competition. However, with consistent preparation, proper strategy, and high-yield resources like PrepLadder, success is highly achievable."
  },
  {
    q: "How to prepare for NEET PG ?",
    a: "Start by understanding the syllabus and exam pattern. Focus on building strong concepts, practicing high-yield QBank questions, revising regularly, and taking Mock Tests (GTs) to identify and improve on your weak areas."
  },
  {
    q: "How many attempts for NEET PG ?",
    a: "Currently, there is no restriction on the number of attempts for the NEET PG exam. Candidates can attempt it as many times as needed to secure their desired rank, provided they meet the eligibility criteria."
  },
  {
    q: "How to crack NEET PG in first attempt ?",
    a: "Focus on concept clarity from the beginning of your internship or final year. Use structured video lectures, make concise revision notes, practice active recall with QBanks, and analyze Mock Tests consistently."
  },
  {
    q: "How many questions in NEET PG ?",
    a: "The NEET PG exam consists of 200 multiple-choice questions (MCQs) to be answered in 3 hours and 30 minutes. Each correct answer awards 4 marks, while a wrong answer results in a deduction of 1 mark."
  },
  {
    q: "Which is the best medical PG preparation app ?",
    a: "PrepLadder is widely recognized as one of the best preparation apps, featuring the 'Dream Team' faculty, highly structured video lectures, a high-yield QBank, and detailed Grand Test analytics."
  },
  {
    q: "How to prepare for NEET PG in 6 months ?",
    a: "A 6-month plan requires a highly focused approach: 3-4 months for first-pass reading and QBank practice, followed by 2 revision cycles and regular Grand Tests to build exam-day speed and accuracy."
  }
];

const FACULTIES = [
  {
    name: "Dr. Deepak Marwah",
    exp: "17+ Years of Exp",
    dept: "Medicine",
    avatar: fac2
  },
  {
    name: "Dr. Pritesh Singh",
    exp: "17+ Years of Exp",
    dept: "Surgery",
    avatar: fac4
  },
  {
    name: "Dr. Mohammed Azam",
    exp: "12+ Years of Exp",
    dept: "Anatomy",
    avatar: fac5
  },
  {
    name: "Dr. Meenakshi Bothra",
    exp: "Pediatrics",
    dept: "Pediatrics",
    avatar: fac1
  },
  {
    name: "Dr. Shonali Chandra",
    exp: "Gynaecology & Obstetrics",
    dept: "Gynaecology & Obstetrics",
    avatar: fac3
  }
];

const SUBJECTS = [
  {
    name: "Anatomy",
    desc: "Master Anatomy with simple, highly-effective, and engaging lectures.",
    color: "#E6F0FF",
    iconColor: "#007BFF",
    icon: "💀"
  },
  {
    name: "Physiology",
    desc: "Learn from Dr. Soumen Manna, author of the Review of Physiology.",
    color: "#FFFBEB",
    iconColor: "#F59E0B",
    icon: "🫁"
  },
  {
    name: "Biochemistry",
    desc: "Ace Biochem with Dr C Shanmugapriya, a master educator with 16 years of experience.",
    color: "#FDF2F8",
    iconColor: "#EC4899",
    icon: "🧬"
  },
  {
    name: "Pharmacology",
    desc: "Learn Pharmacology from Dr. Ankit Kumar with 12 years of experience.",
    color: "#ECFDF5",
    iconColor: "#10B981",
    icon: "💊"
  },
  {
    name: "Medicine",
    desc: "Get mentored by best-selling author and nationally acclaimed Medicine faculty, Dr. Deepak Marwah.",
    color: "#F5F3FF",
    iconColor: "#8B5CF6",
    icon: "🩺"
  },
  {
    name: "Microbiology",
    desc: "Get in-depth subject knowledge with Dr. Preeti Sharma.",
    color: "#FFF1F2",
    iconColor: "#F43F5E",
    icon: "🧫"
  },
  {
    name: "Pathology",
    desc: "Ace the syllabus with Patho Mage and gold medal winner, Dr. Preeti Sharma.",
    color: "#EFF6FF",
    iconColor: "#3B82F6",
    icon: "🔬"
  },
  {
    name: "Social and Preventive Medicine",
    desc: "Score high with Dr. Neha Taneja, Edward Kennedy Memorial Award winner.",
    color: "#EEF2F6",
    iconColor: "#4B5563",
    icon: "🏘️"
  },
  {
    name: "Forensic Medicine",
    desc: "Make FMT simpler with Dr Akhilesh Raj Jhamad, author of A Review of Forensic Medicine and Toxicology for PGMEE.",
    color: "#F0FDFA",
    iconColor: "#0D9488",
    icon: "🔍"
  },
  {
    name: "Dermatology and Venereology",
    desc: "Master Dermatology with a proven program developed by leading educator Dr. Khushbu Mahajan.",
    color: "#FFF7ED",
    iconColor: "#EA580C",
    icon: "🧴"
  },
  {
    name: "Obstetrics and Gynaecology",
    desc: "Learn AtoZ of Gynaecology with Dr. Shonali Chandra, MS, Senior Resident from Maulana Azad Medical College.",
    color: "#FAF5FF",
    iconColor: "#A855F7",
    icon: "👶"
  },
  {
    name: "Surgery",
    desc: "Complete Surgery syllabus with renowned educator and author of Surgery Essence, Dr. Pritesh Singh.",
    color: "#ECFDF5",
    iconColor: "#059669",
    icon: "🔪"
  },
  {
    name: "Anaesthesia",
    desc: "Learn and master the art of Anesthesia with Dr. Mohammed Wajid Ali.",
    color: "#F8FAFC",
    iconColor: "#64748B",
    icon: "💤"
  },
  {
    name: "Radiology",
    desc: "Enrich your preparation with Dr. Nikita Nanwani, passionate educator for over 10 years.",
    color: "#E6F0FF",
    iconColor: "#3B82F6",
    icon: "🩻"
  },
  {
    name: "Orthopedics",
    desc: "Boost your preparation with national level Orthopedics tutor, Dr. Jambukeswaran.",
    color: "#FFFDF2",
    iconColor: "#D97706",
    icon: "🦴"
  },
  {
    name: "Pediatrics",
    desc: "Become a pediatrics expert with Dr Meenakshi Bothra, a highly qualified leading subject expert.",
    color: "#EFF6FF",
    iconColor: "#2563EB",
    icon: "🧸"
  },
  {
    name: "Ophthalmology",
    desc: "Get the best-in-class & comprehensive study material to boost your Ophthalmology preparation.",
    color: "#ECFDF5",
    iconColor: "#10B981",
    icon: "👁️"
  },
  {
    name: "ENT",
    desc: "Make ENT easier with professional surgeon and passionate Educator Dr. Vyshnavi Bommakanti.",
    color: "#FFF5F5",
    iconColor: "#EF4444",
    icon: "👂"
  },
  {
    name: "Psychiatry",
    desc: "Learn from Dr. Ankit Goel, leading Delhi psychiatrist and mentor to thousands.",
    color: "#F3F4F6",
    iconColor: "#374151",
    icon: "🧠"
  }
];

export default function Blog() {
  const navigate = useNavigate();
  const { courseSlug } = useParams();
  const currentCourseSlug = courseSlug || "medical-pg";

  const [studyDropdownOpen, setStudyDropdownOpen] = useState(false);
  const [guideDropdownOpen, setGuideDropdownOpen] = useState(false);
  const [currentSuccessIndex, setCurrentSuccessIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleViewAllFaculty = () => {
    navigate("/courses/medical-pg/faculty");
  };

  return (
    <div className="pl-blog-page page-wrapper">
      {/* Banner */}
      <section className="pl-blog-banner">
        <div className="pl-blog-dropdowns">
          <div className="pl-blog-dropdown-wrapper">
            <button 
              className="pl-blog-dropdown-btn"
              onClick={() => setStudyDropdownOpen(!studyDropdownOpen)}
            >
              Study Material
              <svg 
                width="10" 
                height="6" 
                viewBox="0 0 10 6" 
                fill="none"
                style={{ 
                  transform: studyDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease" 
                }}
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {studyDropdownOpen && (
              <div className="pl-blog-dropdown-menu">
                <a href={`/courses/${currentCourseSlug}/anatomy-preparation`} className="pl-blog-dropdown-item">Anatomy</a>
                <a href={`/courses/${currentCourseSlug}/physiology-preparation`} className="pl-blog-dropdown-item">Physiology</a>
                <a href={`/courses/${currentCourseSlug}/biochemistry`} className="pl-blog-dropdown-item">Biochemistry</a>
                <a href={`/courses/${currentCourseSlug}/microbiology-preparation`} className="pl-blog-dropdown-item">Microbiology</a>
                <a href={`/courses/${currentCourseSlug}/pathology-preparation`} className="pl-blog-dropdown-item">Pathology</a>
              </div>
            )}
          </div>
          <div className="pl-blog-dropdown-wrapper">
            <button 
              className="pl-blog-dropdown-btn"
              onClick={() => setGuideDropdownOpen(!guideDropdownOpen)}
            >
              Exam Guide
              <svg 
                width="10" 
                height="6" 
                viewBox="0 0 10 6" 
                fill="none"
                style={{ 
                  transform: guideDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease" 
                }}
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {guideDropdownOpen && (
              <div className="pl-blog-dropdown-menu">
                <a href="#exam-guide-section" className="pl-blog-dropdown-item" onClick={(e) => { e.preventDefault(); setGuideDropdownOpen(false); document.getElementById("exam-guide-section")?.scrollIntoView({ behavior: "smooth" }); }}>Exam Pattern</a>
                <a href="#exam-guide-section" className="pl-blog-dropdown-item" onClick={(e) => { e.preventDefault(); setGuideDropdownOpen(false); document.getElementById("exam-guide-section")?.scrollIntoView({ behavior: "smooth" }); }}>Syllabus</a>
                <a href="#exam-guide-section" className="pl-blog-dropdown-item" onClick={(e) => { e.preventDefault(); setGuideDropdownOpen(false); document.getElementById("exam-guide-section")?.scrollIntoView({ behavior: "smooth" }); }}>Exam Eligibility</a>
              </div>
            )}
          </div>
        </div>
        
        <h1 className="pl-blog-banner-title">Ultimate NEET-PG Exam Study Material</h1>
        <p className="pl-blog-banner-subtitle">Proven Effective Content with 96% Strike Rate</p>
      </section>

      {/* Pill tag container */}
      <div className="pl-blog-pill-tag-container">
        <span className="pl-blog-pill-tag">NEET PG Preparation</span>
      </div>

      {/* Top Faculty Section */}
      <section className="pl-blog-faculty-section">
        <h2 className="pl-blog-section-title">Meet our Top NEET-PG Faculty</h2>
        <p className="pl-blog-section-subtitle">Learn from the Dream Team with over 100+ years of cumulative experience</p>
        
        <div className="pl-blog-faculty-grid">
          {FACULTIES.map((fac, idx) => (
            <div className="pl-blog-faculty-card" key={idx}>
              <div className="pl-blog-faculty-avatar-container">
                <img src={fac.avatar} alt={fac.name} className="pl-blog-faculty-avatar" />
              </div>
              <h3 className="pl-blog-faculty-name">{fac.name}</h3>
              <span className="pl-blog-faculty-exp">{fac.exp}</span>
              <p className="pl-blog-faculty-dept">{fac.dept}</p>
            </div>
          ))}
        </div>

        {/* VIEW ALL triggers redirection to Faculty page */}
        <button className="pl-blog-view-all-btn" onClick={handleViewAllFaculty}>
          VIEW ALL
        </button>
      </section>

      {/* Ad Banner Card 1 */}
      <section className="pl-blog-ad-banner">
        <div className="pl-blog-ad-card">
          <div className="pl-blog-ad-content">
            <div className="pl-blog-ad-badge">
              <span className="pl-blog-ad-badge-title">RESOLVE</span>
              <span className="pl-blog-ad-badge-sub">NEET PG LAP 2</span>
            </div>
            <h2 className="pl-blog-ad-title">Is The Comeback Plan.</h2>
            <p className="pl-blog-ad-subtitle">40 Days Of High-Yield Revision For NEET PG 2026</p>
          </div>
          
          {/* Action button */}
          <a href="#" className="pl-blog-ad-btn">Enrol Now</a>

          {/* Right side faculty group overlay image */}
          <div className="pl-blog-ad-right-image-container">
            <img src="/src/assets/medical_faculty_group.png" alt="Faculty Dream Team" className="pl-blog-ad-faculty-image" />
          </div>
        </div>
      </section>

      {/* Subject-Wise High Yield Topics */}
      <section className="pl-blog-subject-section">
        <h2 className="pl-blog-section-title" style={{ textAlign: "left" }}>Subject Wise High Yield Topics for NEET-PG</h2>
        <p className="pl-blog-section-subtitle" style={{ textAlign: "left", marginBottom: "2rem" }}>Stay up to date on what's happening in the NEET-PG Exam</p>
        
        <div className="pl-blog-subject-grid">
          {SUBJECTS.map((sub, idx) => (
            <a href="#" className="pl-blog-subject-card" key={idx} onClick={(e) => e.preventDefault()}>
              <div className="pl-blog-subject-icon-box" style={{ backgroundColor: sub.color, color: sub.iconColor, fontSize: "1.5rem" }}>
                {sub.icon}
              </div>
              <div className="pl-blog-subject-details">
                <h3 className="pl-blog-subject-name">{sub.name}</h3>
                <p className="pl-blog-subject-desc">{sub.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Ad Banner Card 2 (Repeated) */}
      <section className="pl-blog-ad-banner">
        <div className="pl-blog-ad-card">
          <div className="pl-blog-ad-content">
            <div className="pl-blog-ad-badge">
              <span className="pl-blog-ad-badge-title">RESOLVE</span>
              <span className="pl-blog-ad-badge-sub">NEET PG LAP 2</span>
            </div>
            <h2 className="pl-blog-ad-title">Is The Comeback Plan.</h2>
            <p className="pl-blog-ad-subtitle">40 Days Of High-Yield Revision For NEET PG 2026</p>
          </div>
          
          {/* Action button */}
          <a href="#" className="pl-blog-ad-btn">Enrol Now</a>

          {/* Right side faculty group overlay image */}
          <div className="pl-blog-ad-right-image-container">
            <img src="/src/assets/medical_faculty_group.png" alt="Faculty Dream Team" className="pl-blog-ad-faculty-image" />
          </div>
        </div>
      </section>

      {/* Success Stories Testimonials Slider */}
      <section className="pl-blog-success-section">
        <div className="pl-blog-success-header">
          <div className="pl-blog-success-title-wrapper">
            <h2 className="pl-blog-section-title">Our Success Stories</h2>
            <p className="pl-blog-section-subtitle" style={{ marginBottom: 0 }}>Why our study resources have helped learners achieve their dream?</p>
          </div>
          <div className="pl-blog-success-controls">
            <button 
              className="pl-blog-control-btn"
              onClick={() => setCurrentSuccessIndex(prev => Math.max(0, prev - 1))}
              style={{ opacity: currentSuccessIndex === 0 ? 0.4 : 1, cursor: currentSuccessIndex === 0 ? "not-allowed" : "pointer" }}
            >
              ←
            </button>
            <button 
              className="pl-blog-control-btn"
              onClick={() => setCurrentSuccessIndex(prev => Math.min(TESTIMONIALS.length - 2, prev + 1))}
              style={{ opacity: currentSuccessIndex >= TESTIMONIALS.length - 2 ? 0.4 : 1, cursor: currentSuccessIndex >= TESTIMONIALS.length - 2 ? "not-allowed" : "pointer" }}
            >
              →
            </button>
          </div>
        </div>

        <div className="pl-blog-success-slider-outer">
          <div 
            className="pl-blog-success-slider-inner" 
            style={{ transform: `translateX(-${currentSuccessIndex * 50}%)` }}
          >
            {TESTIMONIALS.map((t, idx) => (
              <div className="pl-blog-success-card" key={idx}>
                <blockquote className="pl-blog-success-quote">“{t.quote}”</blockquote>
                <div className="pl-blog-success-footer">
                  <div className="pl-blog-success-blue-line"></div>
                  <div className="pl-blog-success-author">
                    <div className="pl-blog-success-avatar">
                      <img src={t.img} alt={t.name} />
                    </div>
                    <div className="pl-blog-success-meta">
                      <h4 className="pl-blog-success-name">{t.name}</h4>
                      <span className="pl-blog-success-rank">{t.rank}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Guide Resource Cards */}
      <section className="pl-blog-guide-section" id="exam-guide-section">
        <h2 className="pl-blog-section-title" style={{ textAlign: "left" }}>Exam Guide</h2>
        <p className="pl-blog-section-subtitle" style={{ textAlign: "left", marginBottom: "2rem" }}>Access all the resources you need to ace NEET-PG Preparation</p>
        
        <div className="pl-blog-guide-grid">
          {GUIDE_ITEMS.map((g, idx) => (
            <a 
              href={g.url || "#"} 
              target={g.url ? "_blank" : undefined} 
              rel={g.url ? "noopener noreferrer" : undefined}
              className="pl-blog-guide-card" 
              key={idx} 
              onClick={g.url ? undefined : (e => e.preventDefault())}
            >
              <h3 className="pl-blog-guide-title">{g.title}</h3>
              <p className="pl-blog-guide-desc">{g.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="pl-blog-articles-section">
        <h2 className="pl-blog-section-title" style={{ textAlign: "left" }}>Latest Articles</h2>
        <div className="pl-blog-articles-grid">
          {LATEST_ARTICLES.map((article, idx) => (
            <a
              href="#"
              className="pl-blog-article-card"
              key={idx}
              onClick={(e) => e.preventDefault()}
            >
              <div className="pl-blog-article-image-box">
                <img
                  src={article.image}
                  alt={article.title}
                  className="pl-blog-article-img"
                />
              </div>
              <div className="pl-blog-article-content">
                <span className="pl-blog-article-tag">{article.tag}</span>
                <h3 className="pl-blog-article-title">{article.title}</h3>
                <p className="pl-blog-article-snippet">{article.snippet}</p>
                <div className="pl-blog-article-footer">
                  <span className="pl-blog-article-readmore">Read more...</span>
                  <span className="pl-blog-article-date">{article.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pl-blog-faq-section">
        <div className="pl-blog-faq-inner">
          <div className="pl-blog-faq-sidebar">
            <div className="pl-blog-faq-icon-box">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 10C17.85 10 8 18.51 8 29C8 32.88 9.49 36.46 12.03 39.33C11.14 42.45 9.11 45.23 6.15 46.84C5.76 47.05 5.6 47.51 5.8 47.9C5.95 48.19 6.26 48.33 6.57 48.33C7.02 48.33 9.82 48.06 13.57 45.62C19.02 47.12 25.35 48 30 48C42.15 48 52 39.49 52 29C52 18.51 42.15 10 30 10Z" fill="#3b82f6" />
                <path opacity="0.5" d="M38 18C28.28 18 20.4 24.81 20.4 33.2C20.4 36.3 21.59 39.17 23.63 41.46C22.92 43.96 21.3 46.18 18.93 47.47C18.62 47.64 18.49 48.01 18.65 48.32C18.77 48.55 19.02 48.66 19.27 48.66C19.63 48.66 21.87 48.45 24.86 46.5C29.23 47.7 34.29 48.4 38 48.4C47.72 48.4 55.6 41.59 55.6 33.2C55.6 24.81 47.72 18 38 18Z" fill="#3b82f6" />
              </svg>
            </div>
            <div>
              <p className="pl-blog-faq-section-label">Frequently asked question</p>
            </div>
          </div>
          <div className="pl-blog-faq-list">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={`pl-blog-faq-wrapper ${isOpen ? "open" : ""}`}>
                  <button className="pl-blog-faq-item" type="button" onClick={() => toggleFaq(idx)}>
                    <span>{faq.q}</span>
                    <span className="pl-blog-faq-arrow">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <div className="pl-blog-faq-answer-container">
                    <p className="pl-blog-faq-answer">{faq.a}</p>
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
