import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Physiology.css";

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
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#0EA5E9" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v17M12 7c-2.5-1.5-6-1.5-8 0a4.5 4.5 0 0 0 0 8c2 1.5 5.5 1.5 8 0" />
      <path d="M12 7c2.5-1.5 6-1.5 8 0a4.5 4.5 0 0 1 0 8c-2 1.5-5.5 1.5-8 0" />
      <path d="M12 5H9M12 11h3M12 17H9" />
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
    id: "anatomy",
    name: "Anatomy",
    description: "Learn Anatomy with Dr. Mohammed Azam, featuring 12+ years of experience.",
    iconName: "anatomy",
    bgClass: "pl-subject-icon-bg--anatomy",
    link: "/courses/medical-pg/anatomy-preparation"
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
    id: "surgery",
    name: "Surgery",
    description: "Complete Surgery syllabus with renowned educator and author of Surgery Essence, Dr. Pritesh Singh.",
    iconName: "surgery",
    bgClass: "pl-subject-icon-bg--surgery",
    link: "/courses/medical-pg/surgery-preparation"
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

export default function Physiology() {
  const { courseSlug } = useParams();
  const [activeVideo, setActiveVideo] = useState(null);
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [showMoreImportance, setShowMoreImportance] = useState(false);

  return (
    <div className="pl-physiology-page">
      {/* Hero Section */}
      <section className="pl-physiology-hero">
        <div className="pl-physiology-container">
          <div className="pl-physiology-hero__row">
            {/* Left Content */}
            <div className="pl-physiology-hero__left">
              <span className="pl-physiology-hero__tagline">
                Curated by the Phenomenal faculty - Dr. Soumen Manna
              </span>
              <h1 className="pl-physiology-hero__heading">
                India's Best Physiology <br />
                Online Course
              </h1>
              <p className="pl-physiology-hero__description">
                He is an author and a veteran faculty of Physiology with over 12 years of experience.
              </p>
              
              <div className="pl-physiology-hero__action">
                <Link to={`/courses/${courseSlug || "medical-pg"}/plan`} className="pl-physiology-btn-enrol">
                  Enrol Now
                </Link>
              </div>

              {/* Stats Counters */}
              <div className="pl-physiology-hero__stats">
                <div className="pl-physiology-stat-item">
                  <div className="pl-physiology-stat-icon pl-physiology-stat-icon--green">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                  <div className="pl-physiology-stat-text">
                    <span className="pl-physiology-stat-num">5M+</span>
                    <span className="pl-physiology-stat-label">App Downloads</span>
                  </div>
                </div>

                <div className="pl-physiology-stat-item">
                  <div className="pl-physiology-stat-icon pl-physiology-stat-icon--orange">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3" fill="#F59E0B" />
                    </svg>
                  </div>
                  <div className="pl-physiology-stat-text">
                    <span className="pl-physiology-stat-num">600M+</span>
                    <span className="pl-physiology-stat-label">Hours Videos Watched</span>
                  </div>
                </div>

                <div className="pl-physiology-stat-item">
                  <div className="pl-physiology-stat-icon pl-physiology-stat-icon--purple">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#8B5CF6" />
                    </svg>
                  </div>
                  <div className="pl-physiology-stat-text">
                    <span className="pl-physiology-stat-num">96%</span>
                    <span className="pl-physiology-stat-label">NEET-PG 2023 Strike Rate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="pl-physiology-hero__right">
              <div className="pl-physiology-hero__image-wrapper">
                <img
                  src="https://image.prepladder.com/content/qskMYRYiOyUtZWU3Om5P1744870969.png"
                  alt="Dr. Soumen Manna"
                  className="pl-physiology-hero__faculty-img"
                />
                <div className="pl-physiology-hero__faculty-label">
                  <span>Dr.Soumen Manna</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Dreamers Say About Us */}
      <section className="pl-physiology-dreamers">
        <div className="pl-physiology-container">
          <h2 className="pl-physiology-section-title pl-physiology-section-title--centered">
            What Our Dreamers Say About Us
          </h2>
          <div className="pl-physiology-dreamers__card">
            <div className="pl-physiology-dreamers__row">
              {/* Left Column (Video/Thumbnail) */}
              <div className="pl-physiology-dreamers__left">
                <div className="pl-physiology-dreamer-video" onClick={() => setActiveVideo(DREAMER_DATA.videoUrl)}>
                  <img
                    src={DREAMER_DATA.poster}
                    alt={DREAMER_DATA.name}
                    className="pl-physiology-dreamer-img"
                  />
                  <div className="pl-physiology-dreamer-play-btn">
                    <img src={DREAMER_DATA.playIcon} alt="Play video" />
                  </div>
                </div>
              </div>

              {/* Right Column (Quote) */}
              <div className="pl-physiology-dreamers__right">
                <div className="pl-physiology-dreamer-quote-wrap">
                  <img src={DREAMER_DATA.quoteIcon} alt="Quote" className="pl-physiology-dreamer-quote-icon" />
                  <p className="pl-physiology-dreamer-quote-text">
                    {DREAMER_DATA.quote}
                  </p>
                  <div className="pl-physiology-dreamer-author">
                    <span className="pl-physiology-dreamer-author-name">{DREAMER_DATA.name}</span>
                    <span className="pl-physiology-dreamer-author-rank">{DREAMER_DATA.rank}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Toppers */}
      <section className="pl-physiology-toppers">
        <div className="pl-physiology-container">
          <h3 className="pl-physiology-toppers-heading">
            Meet Our Toppers
          </h3>
          <div className="pl-physiology-toppers__grid">
            {TOPPERS_LIST.map((topper, idx) => (
              <div key={idx} className="pl-physiology-topper-card">
                <div className="pl-physiology-topper-card__media" onClick={() => setActiveVideo(topper.videoUrl)}>
                  <img src={topper.poster} alt={topper.name} className="pl-physiology-topper-poster" />
                  <div className="pl-physiology-topper-play">
                    <img src={topper.playIcon} alt="Play" />
                  </div>
                </div>
                <div className="pl-physiology-topper-card__info">
                  <h4 className="pl-physiology-topper-name">{topper.name}</h4>
                  <p className="pl-physiology-topper-rank-text">{topper.rank}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pl-physiology-toppers__action">
            <a
              href="https://www.youtube.com/watch?v=bybs-n3XNZw&list=PLJY0wCIFC-Jjp92M_SPLMO5wNV_sX_M6d"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-physiology-toppers-more-link"
              title="Watch more success stories"
            >
              Watch more success stories
            </a>
          </div>
        </div>
      </section>

      {/* Explore other NEET PG Subjects */}
      <section className="pl-physiology-other-subjects">
        <div className="pl-physiology-container">
          <div className="pl-physiology-other-subjects__header">
            <h2 className="pl-physiology-other-subjects__title">Explore other NEET PG Subjects</h2>
            <p className="pl-physiology-other-subjects__subtitle">Get the Best Study Material for all the 19 subjects</p>
          </div>

          <div className="pl-physiology-other-subjects__grid">
            {OTHER_SUBJECTS.slice(0, showAllSubjects ? OTHER_SUBJECTS.length : 6).map((sub) => {
              const IconComp = SubjectIcons[sub.iconName];
              return (
                <Link to={sub.link} key={sub.id} className="pl-physiology-subject-card">
                  <div className={`pl-physiology-subject-card__icon-wrap ${sub.bgClass}`}>
                    <IconComp />
                  </div>
                  <div className="pl-physiology-subject-card__content">
                    <h3 className="pl-physiology-subject-card__name">{sub.name}</h3>
                    <p className="pl-physiology-subject-card__desc">{sub.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="pl-physiology-other-subjects__toggle">
            <button
              onClick={() => setShowAllSubjects(!showAllSubjects)}
              className="pl-physiology-other-subjects__toggle-btn"
            >
              {showAllSubjects ? "View fewer subjects" : "View all subjects"}
            </button>
          </div>
        </div>
      </section>

      {/* Why is Physiology important? */}
      <section className="pl-physiology-importance">
        <div className="pl-physiology-container">
          <div className="pl-physiology-importance__card">
            <h2 className="pl-physiology-importance__title">Why is Physiology important?</h2>
            <div className="pl-physiology-importance__content">
              <p>
                Physiology is one such subject that is not only vast but is also one of the most important from the exam point of view. The subject demands time and regular revision as it makes a major portion of the NEET {showMoreImportance ? (
                  <span>
                    PG and other medical licensing exams. A strong foundation in Physiology is crucial for understanding clinical subjects like Medicine, Pediatrics, Anesthesia, and Pharmacology. By mastering the physiological systems, regulations, and compensatory mechanisms, aspirants can easily solve clinical scenario-based questions that are frequently asked in the exams.
                  </span>
                ) : null}
                <button
                  onClick={() => setShowMoreImportance(!showMoreImportance)}
                  className="pl-physiology-importance__readmore-btn"
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
        <div className="pl-physiology-video-modal" onClick={() => setActiveVideo(null)}>
          <div className="pl-physiology-video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="pl-physiology-video-modal-close" onClick={() => setActiveVideo(null)}>×</button>
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

