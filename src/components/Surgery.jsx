import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Surgery.css";
import PriteshImage from "../assets/pritesh_high.png";
import MockupImage from "../assets/anatomy_study_mockup.png";

const ARTICLE_ITEMS = [
  {
    title: "INI-CET High Yield Questions for Surgery",
    desc: "Mastering the INI-CET demands a strategic approach to preparation, with ...",
    date: "Apr 09 2026",
    link: "#"
  },
  {
    title: "20 Must-Know Surgery Flashcards NEET PG 2026",
    desc: "Flashcard 1Necrotising FascitisClinical featuresIt is characterized by blackish...",
    date: "Jan 21 2026",
    link: "#"
  },
  {
    title: "Sutures: Types, Stitches, Techniques and Removal",
    desc: "Medical professionals including surgeons and physicians use sutures to seal...",
    date: "Dec 11 2025",
    link: "#"
  }
];

const DREAMER_DATA = {
  name: "Dr. Vaibhav",
  rank: "AIR 1 | NEET PG 2024",
  poster: "https://image.prepladder.com/content/vaibhav.webp",
  videoUrl: "https://image.prepladder.com/content/rank1-dr-vaibhav.mp4",
  quote: "PrepLadder Mock Tests helped me assess my strengths and weaknesses.",
  quoteIcon: "https://image.prepladder.com/content/qz1ZD1iIF3Uec2jUC5UJ1677482976.png",
  playIcon: "https://image.prepladder.com/content/XCDI7mvtwM55zFIgPqVL1677483407.png"
};

const TOPPERS_LIST = [
  {
    name: "Dr. Anjali",
    rank: "AIR 2 | NEET PG 2024",
    poster: "https://image.prepladder.com/content/neet-pg-rank-2-dr-anjali.webp",
    videoUrl: "https://image.prepladder.com/content/rank-2-Dr-anjali.mp4",
    playIcon: "https://image.prepladder.com/content/ATzKauN6i5yyO0LUKMpJ1660304128.svg"
  },
  {
    name: "Dr. Saikumar",
    rank: "AIR 3 | NEET PG 2024",
    poster: "https://image.prepladder.com/content/neet-pg-rank-3-dr-saikumar.webp",
    videoUrl: "https://image.prepladder.com/content/rank3-DR-Saikumar.mp4",
    playIcon: "https://image.prepladder.com/content/ATzKauN6i5yyO0LUKMpJ1660304128.svg"
  },
  {
    name: "Dr. Naisargee",
    rank: "AIR 4 | NEET PG 2024",
    poster: "https://image.prepladder.com/content/neet-pg-rank-4-dr-naisargee.webp",
    videoUrl: "https://image.prepladder.com/content/rank4-naisargee.mp4",
    playIcon: "https://image.prepladder.com/content/ATzKauN6i5yyO0LUKMpJ1660304128.svg"
  },
  {
    name: "Dr. Sharanu",
    rank: "AIR 9 | NEET PG 2024",
    poster: "https://image.prepladder.com/content/neet-pg-rank-9-dr-sharanu.webp",
    videoUrl: "https://image.prepladder.com/content/rank-9-sharanu.mp4",
    playIcon: "https://image.prepladder.com/content/ATzKauN6i5yyO0LUKMpJ1660304128.svg"
  }
];

const SubjectIcons = {
  anatomy: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#0D9488" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v17M12 7c-2.5-1.5-6-1.5-8 0a4.5 4.5 0 0 0 0 8c2 1.5 5.5 1.5 8 0" />
      <path d="M12 7c2.5-1.5 6-1.5 8 0a4.5 4.5 0 0 1 0 8c-2 1.5-5.5 1.5-8 0" />
      <path d="M12 5H9M12 11h3M12 17H9" />
    </svg>
  ),
  physiology: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#8B5CF6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="3" />
      <path d="M12 9v7M7 12h10M9 21h6" />
    </svg>
  ),
  pharmacology: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#F97316" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8" cy="8" r="1.5" fill="#F97316" />
      <circle cx="16" cy="8" r="1.5" fill="#F97316" />
      <circle cx="8" cy="16" r="1.5" fill="#F97316" />
      <circle cx="16" cy="16" r="1.5" fill="#F97316" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="12" y1="3" x2="12" y2="21" />
    </svg>
  ),
  biochemistry: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#D97706" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="20" y2="3" />
      <line x1="20" y1="21" x2="4" y2="3" />
      <line x1="6" y1="8" x2="18" y2="8" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="6" y1="16" x2="18" y2="16" />
    </svg>
  ),
  medicine: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#DB2777" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5L16.5 4.5M7.5 19.5L19.5 7.5" />
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  ),
  microbiology: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#2563EB" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  ),
  pathology: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#059669" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h8M10 6H6M14 6h4M12 18v-8M8 10h8" />
      <circle cx="16" cy="14" r="3" />
      <path d="M10 22h4" />
    </svg>
  ),
  spm: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#9333EA" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <circle cx="10" cy="7" r="1.5" fill="#9333EA" />
      <circle cx="14" cy="7" r="1.5" fill="#9333EA" />
      <circle cx="10" cy="17" r="1.5" fill="#9333EA" />
      <circle cx="14" cy="17" r="1.5" fill="#9333EA" />
    </svg>
  ),
  forensic: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#CA8A04" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="6" />
      <line x1="21" y1="21" x2="15" y2="15" />
      <line x1="7" y1="10" x2="13" y2="10" />
    </svg>
  ),
  dermatology: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#FA8C16" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.25z" />
    </svg>
  ),
  obg: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#EB2F96" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M12 11c-3.5 0-6 2.5-6 6v3h12v-3c0-3.5-2.5-6-6-6z" />
      <circle cx="12" cy="15" r="2" />
    </svg>
  ),
  surgery: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#1890FF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
    </svg>
  ),
  anaesthesia: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#13C2C2" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22l6-6M9 9l6 6M11 7l6 6" />
      <rect x="5" y="11" width="8" height="8" rx="1" transform="rotate(-45 9 15)" />
      <line x1="14" y1="4" x2="20" y2="10" />
      <line x1="18" y1="2" x2="22" y2="6" />
    </svg>
  ),
  radiology: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#722ED1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="6" y1="8" x2="18" y2="8" />
      <line x1="6" y1="12" x2="18" y2="12" />
      <line x1="6" y1="16" x2="18" y2="16" />
    </svg>
  ),
  orthopedics: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#FADB14" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 5a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3 3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zM16 11a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3 3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z" />
      <path d="M8 13v6M16 5v6" />
    </svg>
  ),
  pediatrics: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#EB2F96" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="6" />
      <path d="M12 4a3 3 0 0 0-3-3h6a3 3 0 0 0-3 3zM9 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM15 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      <path d="M9.5 13.5a3 3 0 0 0 5 0" />
    </svg>
  ),
  ophthalmology: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#1890FF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  ent: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#2F54EB" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 2a4 4 0 0 0-4 4v3a2 2 0 0 1-2 2h-1a3 3 0 0 0 0 6h1a2 2 0 0 1 2 2v3a4 4 0 0 0 4 4" />
      <circle cx="16" cy="10" r="2" />
    </svg>
  ),
  psychiatry: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#52C41A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M9 4c1-1 3-1 4 0s0 3-1 3" />
    </svg>
  )
};

const OTHER_SUBJECTS = [
  {
    id: "physiology",
    name: "Physiology",
    description: "Boost your Physiology Preparation with Dr. Soumen Manna and his over 12 years of experience.",
    iconName: "physiology",
    bgClass: "pl-subject-icon-bg--physiology",
    link: "/courses/medical-pg/physiology-preparation"
  },
  {
    id: "pharmacology",
    name: "Pharmacology",
    description: "Learn from Pharmacology pundit Dr. Ankit Kumar, with 12 years of experience.",
    iconName: "pharmacology",
    bgClass: "pl-subject-icon-bg--pharmacology",
    link: "/courses/medical-pg"
  },
  {
    id: "biochemistry",
    name: "Biochemistry",
    description: "Ace Biochem with Dr. C. Shanmugapriya, a master educator with 16 years of experience.",
    iconName: "biochemistry",
    bgClass: "pl-subject-icon-bg--biochemistry",
    link: "/courses/medical-pg"
  },
  {
    id: "medicine",
    name: "Medicine",
    description: "Get mentored by best-selling author and nationally acclaimed Medicine faculty, Dr. Deepak Marwah.",
    iconName: "medicine",
    bgClass: "pl-subject-icon-bg--medicine",
    link: "/courses/ss-medicine"
  },
  {
    id: "microbiology",
    name: "Microbiology",
    description: "Get in-depth subject knowledge with Dr. Preeti Sharma.",
    iconName: "microbiology",
    bgClass: "pl-subject-icon-bg--microbiology",
    link: "/courses/medical-pg/microbiology-preparation"
  },
  {
    id: "pathology",
    name: "Pathology",
    description: "Ace the syllabus with Patho Mage and gold medal winner, Dr. Preeti Sharma.",
    iconName: "pathology",
    bgClass: "pl-subject-icon-bg--pathology",
    link: "/courses/medical-pg/pathology-preparation"
  },
  {
    id: "spm",
    name: "Social And Preventive Medicine",
    description: "Score high with Dr. Neha Taneja, Edward Kennedy Memorial Award winner.",
    iconName: "spm",
    bgClass: "pl-subject-icon-bg--spm",
    link: "/courses/medical-pg/social-and-preventive-medicine-preparation"
  },
  {
    id: "forensic",
    name: "Forensic Medicine",
    description: "Make FMT simpler with Dr. Akhilesh Raj Jhamad, author of A Review of Forensic Medicine and Toxicology for PGMEE.",
    iconName: "forensic",
    bgClass: "pl-subject-icon-bg--forensic",
    link: "/courses/medical-pg"
  },
  {
    id: "dermatology",
    name: "Dermatology And Venereology",
    description: "Master Dermatology with a proven program developed by leading educator Dr. Khushbu Mahajan.",
    iconName: "dermatology",
    bgClass: "pl-subject-icon-bg--dermatology",
    link: "/courses/medical-pg/dermatology-preparation"
  },
  {
    id: "obg",
    name: "Obstetrics And Gynaecology",
    description: "Learn A to Z of Gynaecology with Dr. Shonali Chandra, a renowned professional with a stellar educational background, she is the ideal faculty to help you ace your Gynaecology & Obstetrics paper.",
    iconName: "obg",
    bgClass: "pl-subject-icon-bg--obg",
    link: "/courses/medical-pg/gynaecology-and-obstetrics-preparation"
  },
  {
    id: "anatomy",
    name: "Anatomy",
    description: "Master Anatomy with simple, effective, and engaging lectures.",
    iconName: "anatomy",
    bgClass: "pl-subject-icon-bg--anatomy",
    link: "/courses/medical-pg/anatomy-preparation"
  },
  {
    id: "anaesthesia",
    name: "Anaesthesia",
    description: "Learn and master the art of Anaesthesia with Dr. Mohammed Wajid Ali.",
    iconName: "anaesthesia",
    bgClass: "pl-subject-icon-bg--anaesthesia",
    link: "/courses/medical-pg/anaesthesia-preparation"
  },
  {
    id: "radiology",
    name: "Radiology",
    description: "Enrich your preparation with Dr. Nikita Nanwani, passionate educator and student-favourite for over 10 years.",
    iconName: "radiology",
    bgClass: "pl-subject-icon-bg--radiology",
    link: "/courses/radiology-residency"
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description: "Boost your preparation with practicing surgeon and national Orthopedics tutor, Dr. Jambukeshwaran.",
    iconName: "orthopedics",
    bgClass: "pl-subject-icon-bg--orthopedics",
    link: "/courses/medical-pg/orthopedics-preparation"
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description: "Become a pediatrics expert with Dr. Meenakshi Bothra, a highly qualified and leading subject expert.",
    iconName: "pediatrics",
    bgClass: "pl-subject-icon-bg--pediatrics",
    link: "/courses/ss-pediatrics"
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    description: "Elevate your preparation with one of the best teachers in the country, Dr. Manish Chhabra.",
    iconName: "ophthalmology",
    bgClass: "pl-subject-icon-bg--ophthalmology",
    link: "/courses/medical-pg/ophthalmology-preparation"
  },
  {
    id: "ent",
    name: "ENT",
    description: "Make ENT easier with professional surgeon and passionate Educator from Hyderabad, Dr. Vyshnavi Bommakanti.",
    iconName: "ent",
    bgClass: "pl-subject-icon-bg--ent",
    link: "/courses/medical-pg/ent-preparation"
  },
  {
    id: "psychiatry",
    name: "Psychiatry",
    description: "Learn from Dr. Ankit Goel, leading Delhi psychiatrist and mentor to thousands of Medical PG aspirants.",
    iconName: "psychiatry",
    bgClass: "pl-subject-icon-bg--psychiatry",
    link: "/courses/medical-pg/psychiatry-preparation"
  }
];

export default function Surgery() {
  const { courseSlug } = useParams();
  const [activeVideo, setActiveVideo] = useState(null);
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [showMoreImportance, setShowMoreImportance] = useState(false);

  return (
    <div className="pl-surgery-page">
      {/* Hero Section */}
      <section className="pl-surgery-hero">
        <div className="pl-surgery-container">
          <div className="pl-surgery-hero__row">
            {/* Left Content */}
            <div className="pl-surgery-hero__left">
              <span className="pl-surgery-hero__tagline">
                Curated by India's renowned surgeon - Dr. Pritesh Singh
              </span>
              <h1 className="pl-surgery-hero__heading">
                India's Best Surgery <br /> Online Course
              </h1>
              <p className="pl-surgery-hero__description">
                He is an internationally renowned teacher and the author of the bestselling book Surgery Essence.
              </p>
              
              <div className="pl-surgery-hero__action">
                <Link to={`/courses/${courseSlug || "medical-pg"}/plan`} className="pl-surgery-btn-enrol">
                  Enrol Now
                </Link>
              </div>

              {/* Stats Counters */}
              <div className="pl-surgery-hero__stats">
                <div className="pl-surgery-stat-item">
                  <div className="pl-surgery-stat-icon pl-surgery-stat-icon--green">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                  <div className="pl-surgery-stat-text">
                    <span className="pl-surgery-stat-num">5M+</span>
                    <span className="pl-surgery-stat-label">App Downloads</span>
                  </div>
                </div>

                <div className="pl-surgery-stat-item">
                  <div className="pl-surgery-stat-icon pl-surgery-stat-icon--orange">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3" fill="#F59E0B" />
                    </svg>
                  </div>
                  <div className="pl-surgery-stat-text">
                    <span className="pl-surgery-stat-num">600M+</span>
                    <span className="pl-surgery-stat-label">Video Lectures Watched</span>
                  </div>
                </div>

                <div className="pl-surgery-stat-item">
                  <div className="pl-surgery-stat-icon pl-surgery-stat-icon--purple">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#8B5CF6" />
                    </svg>
                  </div>
                  <div className="pl-surgery-stat-text">
                    <span className="pl-surgery-stat-num">96%</span>
                    <span className="pl-surgery-stat-label">NEET PG 2023 Strike Rate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="pl-surgery-hero__right">
              <div className="pl-surgery-hero__image-wrapper">
                <img
                  src={PriteshImage}
                  alt="Dr. Pritesh Singh"
                  className="pl-surgery-hero__faculty-img"
                />
                <div className="pl-surgery-hero__faculty-label">
                  <span>Dr Pritesh Singh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers / Features Section */}
      <section className="pl-surgery-features">
        <div className="pl-surgery-container">
          <div className="pl-surgery-features__header">
            <h2 className="pl-surgery-features__title">Let the Numbers Do the Talking</h2>
            <p className="pl-surgery-features__subtitle">
              Get the best-in-class & comprehensive study material to boost your Surgery preparation.
            </p>
          </div>

          <div className="pl-surgery-features__row">
            {/* Left Features list */}
            <div className="pl-surgery-features__left">
              <div className="pl-surgery-feature-card">
                <div className="pl-surgery-feature-card__icon pl-surgery-feature-card__icon--blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" fill="#3B82F6" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </div>
                <div className="pl-surgery-feature-card__content">
                  <h3 className="pl-surgery-feature-card__title">100+ Surgery Video Lectures</h3>
                  <p className="pl-surgery-feature-card__desc">
                    High-yield video lectures for conceptual understanding.
                  </p>
                </div>
              </div>

              <div className="pl-surgery-feature-card">
                <div className="pl-surgery-feature-card__icon pl-surgery-feature-card__icon--green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="pl-surgery-feature-card__content">
                  <h3 className="pl-surgery-feature-card__title">60+ Surgery Practice Questions</h3>
                  <p className="pl-surgery-feature-card__desc">
                    Questions for your continuous practice and evaluation.
                  </p>
                </div>
              </div>

              <div className="pl-surgery-feature-card">
                <div className="pl-surgery-feature-card__icon pl-surgery-feature-card__icon--orange">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .5 2.5 1.5 3.5.7.8 1.3 1.5 1.5 2.5" />
                    <line x1="9" y1="18" x2="15" y2="18" />
                    <line x1="10" y1="22" x2="14" y2="22" />
                  </svg>
                </div>
                <div className="pl-surgery-feature-card__content">
                  <h3 className="pl-surgery-feature-card__title">130+ Surgery Treasures</h3>
                  <p className="pl-surgery-feature-card__desc">
                    Easy-to-recall summaries in the form of flashcards.
                  </p>
                </div>
              </div>

              <div className="pl-surgery-feature-card">
                <div className="pl-surgery-feature-card__icon pl-surgery-feature-card__icon--purple">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                  </svg>
                </div>
                <div className="pl-surgery-feature-card__content">
                  <h3 className="pl-surgery-feature-card__title">460+ Surgery Concept Pages</h3>
                  <p className="pl-surgery-feature-card__desc">
                    Video lectures take-aways.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Mockup Visualization */}
            <div className="pl-surgery-features__right">
              <div className="pl-surgery-mockup-wrapper">
                <img
                  src={MockupImage}
                  alt="Anatomy Study Material Mockup"
                  className="pl-surgery-mockup-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Dreamers Say About Us */}
      <section className="pl-surgery-dreamers">
        <div className="pl-surgery-container">
          <h2 className="pl-surgery-section-title pl-surgery-section-title--centered">
            What Our Dreamers Say About Us
          </h2>
          <div className="pl-surgery-dreamers__card">
            <div className="pl-surgery-dreamers__row">
              {/* Left Column (Video/Thumbnail) */}
              <div className="pl-surgery-dreamers__left">
                <div className="pl-surgery-dreamer-video" onClick={() => setActiveVideo(DREAMER_DATA.videoUrl)}>
                  <img
                    src={DREAMER_DATA.poster}
                    alt={DREAMER_DATA.name}
                    className="pl-surgery-dreamer-img"
                  />
                  <div className="pl-surgery-dreamer-play-btn">
                    <img src={DREAMER_DATA.playIcon} alt="Play video" />
                  </div>
                </div>
              </div>

              {/* Right Column (Quote) */}
              <div className="pl-surgery-dreamers__right">
                <div className="pl-surgery-dreamer-quote-wrap">
                  <img src={DREAMER_DATA.quoteIcon} alt="Quote" className="pl-surgery-dreamer-quote-icon" />
                  <p className="pl-surgery-dreamer-quote-text">
                    {DREAMER_DATA.quote}
                  </p>
                  <div className="pl-surgery-dreamer-author">
                    <span className="pl-surgery-dreamer-author-name">{DREAMER_DATA.name}</span>
                    <span className="pl-surgery-dreamer-author-rank">{DREAMER_DATA.rank}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Toppers */}
      <section className="pl-surgery-toppers">
        <div className="pl-surgery-container">
          <h3 className="pl-surgery-toppers-heading">
            Meet Our Toppers
          </h3>
          <div className="pl-surgery-toppers__grid">
            {TOPPERS_LIST.map((topper, idx) => (
              <div key={idx} className="pl-surgery-topper-card">
                <div className="pl-surgery-topper-card__media" onClick={() => setActiveVideo(topper.videoUrl)}>
                  <img src={topper.poster} alt={topper.name} className="pl-surgery-topper-poster" />
                  <div className="pl-surgery-topper-play">
                    <img src={topper.playIcon} alt="Play" />
                  </div>
                </div>
                <div className="pl-surgery-topper-card__info">
                  <h4 className="pl-surgery-topper-name">{topper.name}</h4>
                  <p className="pl-surgery-topper-rank-text">{topper.rank}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pl-surgery-toppers__action">
            <a
              href="https://www.youtube.com/watch?v=bybs-n3XNZw&list=PLJY0wCIFC-Jjp92M_SPLMO5wNV_sX_M6d"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-surgery-toppers-more-link"
              title="Watch more success stories"
            >
              Watch more success stories
            </a>
          </div>
        </div>
      </section>

      {/* Explore other NEET PG Subjects */}
      <section className="pl-surgery-other-subjects">
        <div className="pl-surgery-container">
          <div className="pl-surgery-other-subjects__header">
            <h2 className="pl-surgery-other-subjects__title">Explore other NEET PG Subjects</h2>
            <p className="pl-surgery-other-subjects__subtitle">Get the Best Study Material for all the 19 subjects</p>
          </div>

          <div className="pl-surgery-other-subjects__grid">
            {OTHER_SUBJECTS.slice(0, showAllSubjects ? OTHER_SUBJECTS.length : 6).map((sub) => {
              const IconComp = SubjectIcons[sub.iconName];
              return (
                <Link to={sub.link} key={sub.id} className="pl-surgery-subject-card">
                  <div className={`pl-surgery-subject-card__icon-wrap ${sub.bgClass}`}>
                    <IconComp />
                  </div>
                  <div className="pl-surgery-subject-card__content">
                    <h3 className="pl-surgery-subject-card__name">{sub.name}</h3>
                    <p className="pl-surgery-subject-card__desc">{sub.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="pl-surgery-other-subjects__toggle">
            <button
              onClick={() => setShowAllSubjects(!showAllSubjects)}
              className="pl-surgery-other-subjects__toggle-btn"
            >
              {showAllSubjects ? "View fewer subjects" : "View all subjects"}
            </button>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="pl-surgery-articles">
        <div className="pl-surgery-container">
          <div className="pl-surgery-articles__header">
            <h2 className="pl-surgery-articles__title">Recent NEET PG Surgery Articles</h2>
            <p className="pl-surgery-articles__subtitle">Stay updated on everything related to NEET PG Surgery preparation</p>
          </div>
          <div className="pl-surgery-articles__grid">
            {ARTICLE_ITEMS.map((article, idx) => (
              <div key={idx} className="pl-surgery-article-card">
                <h3 className="pl-surgery-article-card__title">{article.title}</h3>
                <p className="pl-surgery-article-card__desc">{article.desc}</p>
                <div className="pl-surgery-article-card__footer">
                  <a href={article.link} className="pl-surgery-article-card__readmore">Read More</a>
                  <span className="pl-surgery-article-card__date">{article.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why is Surgery important? */}
      <section className="pl-surgery-importance">
        <div className="pl-surgery-container">
          <div className="pl-surgery-importance__card">
            <h2 className="pl-surgery-importance__title">Why is Surgery important?</h2>
            <div className="pl-surgery-importance__content">
              <p>
                Surgery is one such subject that is not only vast but is also one of the most important from the exam point of view. The subject demands time and regular revision as it makes a major portion of the NEET {showMoreImportance ? (
                  <span>
                    PG and other medical licensing exams. A strong foundation in Surgery is crucial for understanding clinical concepts, surgical pathology, and operative procedures. By mastering surgical anatomy, principles of wound healing, and pre- and post-operative management, aspirants can easily solve clinical scenario-based questions that are frequently asked in the exams.
                  </span>
                ) : null}
                <button
                  onClick={() => setShowMoreImportance(!showMoreImportance)}
                  className="pl-surgery-importance__readmore-btn"
                >
                  {showMoreImportance ? " Read less" : "Read more..."}
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Overlay Modal */}
      {activeVideo && (
        <div className="pl-surgery-video-modal" onClick={() => setActiveVideo(null)}>
          <div className="pl-surgery-video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="pl-surgery-video-modal-close" onClick={() => setActiveVideo(null)}>×</button>
            {activeVideo.endsWith(".mp4") ? (
              <video
                src={activeVideo}
                controls
                autoPlay
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={activeVideo}
                title="Topper Success Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

