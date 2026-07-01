import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

// --- Subject Icon Components ---
const AnatomyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v17M12 7c-2.5-1.5-6-1.5-8 0a4.5 4.5 0 0 0 0 8c2 1.5 5.5 1.5 8 0" />
    <path d="M12 7c2.5-1.5 6-1.5 8 0a4.5 4.5 0 0 1 0 8c-2 1.5-5.5 1.5-8 0" />
    <path d="M12 5H9M12 11h3M12 17H9" />
  </svg>
);

const PhysiologyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="4" r="2" />
    <path d="M5 9c2-1 5-2 7-2s5 1 7 2" />
    <path d="M12 7v7M9 22v-6c0-1.5 1.5-2 3-2s3 .5 3 2v6" />
  </svg>
);

const BiochemistryIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 10.5c0-4.5 15-4.5 15 0s-15 4.5-15 9" />
    <path d="M19.5 10.5c0-4.5-15-4.5-15 0s15 4.5 15 9" />
    <line x1="6" y1="8" x2="18" y2="8" />
    <line x1="4.5" y1="13.5" x2="19.5" y2="13.5" />
    <line x1="7" y1="18" x2="17" y2="18" />
  </svg>
);

const MicrobiologyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c1.7 0 3 1.3 3 3 0 1.2-.7 2.2-1.7 2.7.9.5 1.7 1.4 1.7 2.5 0 1-.5 1.8-1.3 2.3.8.5 1.3 1.4 1.3 2.5 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-1.1.5-2 1.3-2.5-.8-.5-1.3-1.3-1.3-2.3 0-1.1.8-2 1.7-2.5C9.7 7.2 9 6.2 9 5c0-1.7 1.3-3 3-3Z" />
    <circle cx="12" cy="8" r="0.5" fill="#2563EB" />
    <circle cx="11" cy="13" r="0.5" fill="#2563EB" />
    <circle cx="13" cy="16" r="0.5" fill="#2563EB" />
  </svg>
);

const PathologyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="12" r="4" />
    <circle cx="16" cy="12" r="3" />
    <path d="M12 8a5.5 5.5 0 0 1 2.5 4" />
  </svg>
);

const PharmacologyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="5" width="14" height="14" rx="7" transform="rotate(45 12 12)" />
    <line x1="8.5" y1="15.5" x2="15.5" y2="8.5" />
  </svg>
);

const ForensicMedicineIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="5" />
    <line x1="21" y1="21" x2="15.5" y2="15.5" />
  </svg>
);

const PsmIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <line x1="9" y1="8" x2="9.01" y2="8" />
    <line x1="15" y1="8" x2="15.01" y2="8" />
    <line x1="9" y1="12" x2="9.01" y2="12" />
    <line x1="15" y1="12" x2="15.01" y2="12" />
    <line x1="9" y1="16" x2="9.01" y2="16" />
    <line x1="15" y1="16" x2="15.01" y2="16" />
  </svg>
);

const EntIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 14a5 5 0 0 1-8 0V9a5 5 0 1 1 10 0v5Z" />
    <path d="M8 9a1.5 1.5 0 1 0-3 0 1.5 1.5 0 1 0 3 0ZM16 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0ZM12 14v5" />
  </svg>
);

const OphthalmologyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const GynObsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    <path d="M12 7c-2 0-3.5 1.5-3.5 3.5 0 3 3.5 5.5 3.5 6.5 0-1 3.5-3.5 3.5-6.5C15.5 8.5 14 7 12 7Z" />
  </svg>
);

const PediatricsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 10h6v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V10ZM10 6h4v4h-4V6ZM12 2v4" />
  </svg>
);

const SurgeryIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="18" r="3" />
    <path d="M14.5 14.5L20 4M9.5 14.5L4 4" />
  </svg>
);

const MedicineIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const RadiologyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 7v10M12 7v10M17 7v10M7 12h10" />
  </svg>
);

const AnaesthesiaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 0-10 10c0 4.5 3 8 7 9.5V17a3 3 0 0 1 6 0v4.5c4-1.5 7-5 7-9.5A10 10 0 0 0 12 2Z" />
  </svg>
);

const OrthopedicsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M7 8h10M7 16h10" />
    <circle cx="12" cy="12" r="2" fill="#F97316" />
  </svg>
);

const PsychiatryIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const DermatologyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);
const BiochemIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2v7.31M14 9.31V2M8.5 2h7M10 9.31l-3 4.5A2 2 0 0 0 8.66 17h6.68a2 2 0 0 0 1.66-3.19l-3-4.5" />
    <line x1="8.5" y1="2" x2="15.5" y2="2" />
  </svg>
);

export default function Navbar({ currentCourse = "Medical PG" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProf, setActiveProf] = useState(null);
  const currentCourseSlug = currentCourse.toLowerCase().replace(/ /g, "-");

  const subjectsByProf = {
    1: [
      { name: "Anatomy", icon: <AnatomyIcon />, path: `/courses/${currentCourseSlug}/anatomy-preparation` },
      { name: "Physiology", icon: <PhysiologyIcon />, path: `/courses/${currentCourseSlug}/physiology-preparation` },
      { name: "Biochemistry", icon: <BiochemIcon />, path: `/courses/${currentCourseSlug}/biochemistry` },
    ],
    2: [
      { name: "Microbiology", icon: <MicrobiologyIcon />, path: `/courses/${currentCourseSlug}/microbiology-preparation` },
      { name: "Pathology", icon: <PathologyIcon />, path: `/courses/${currentCourseSlug}/pathology-preparation` },
    ],
    3: [
      { name: "Forensic Medicine", icon: <ForensicMedicineIcon />, path: `/courses/${currentCourseSlug}/forensic-medicine-preparation` },
      { name: "PSM", icon: <PsmIcon />, path: `/courses/${currentCourseSlug}/social-and-preventive-medicine-preparation` },
      { name: "ENT", icon: <EntIcon />, path: `/courses/${currentCourseSlug}/ent-preparation` },
      { name: "Ophthalmology", icon: <OphthalmologyIcon />, path: `/courses/${currentCourseSlug}/ophthalmology-preparation` },
    ],
    4: [
      { name: "Gynecology & Obstetrics", icon: <GynObsIcon />, path: `/courses/${currentCourseSlug}/gynaecology-and-obstetrics-preparation` },
      { name: "Pediatrics", icon: <PediatricsIcon />, path: "/courses/ss-pediatrics" },
      { name: "Surgery", icon: <SurgeryIcon />, path: `/courses/${currentCourseSlug}/surgery-preparation` },
      { name: "Medicine", icon: <MedicineIcon />, path: "/courses/ss-medicine" },
      { name: "Radiology", icon: <RadiologyIcon />, path: "/courses/radiology-residency" },
      { name: "Anaesthesia", icon: <AnaesthesiaIcon />, path: `/courses/${currentCourseSlug}/anaesthesia-preparation` },
      { name: "Orthopedics", icon: <OrthopedicsIcon />, path: `/courses/${currentCourseSlug}/orthopedics-preparation` },
      { name: "Psychiatry", icon: <PsychiatryIcon />, path: `/courses/${currentCourseSlug}/psychiatry-preparation` },
      { name: "Dermatology", icon: <DermatologyIcon />, path: `/courses/${currentCourseSlug}/dermatology-preparation` },
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`pl-header ${scrolled ? "pl-header--scrolled" : ""}`}>
      <nav className="pl-navbar content-container">
        {/* Left Side: Logo & Course Switcher */}
        <div className="pl-navbar__left">
          <Link to="/courses/medical-pg" className="pl-logo" aria-label="PrepLadder Home">
            {/* Blue custom logo icon */}
            <div className="pl-logo__icon">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
              >
                <rect width="40" height="40" rx="8" fill="#007BFF" />
                <path
                  d="M12 28V12H20C23.3137 12 26 14.6863 26 18C26 21.3137 23.3137 24 20 24H16V28H12ZM16 20H20C21.1046 20 22 19.1046 22 18C22 16.8954 21.1046 16 20 16H16V20Z"
                  fill="white"
                />
                <line x1="16" y1="18" x2="22" y2="18" stroke="white" strokeWidth="2" />
                <line x1="16" y1="21" x2="20" y2="21" stroke="white" strokeWidth="2" />
                <line x1="16" y1="24" x2="20" y2="24" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <span className="pl-logo__text">
              Prep<span className="pl-logo__accent">Ladder</span>
            </span>
          </Link>

          {/* Vertical Separator */}
          <div className="pl-divider"></div>

          {/* Course Dropdown Selector */}
          <div className="pl-course-selector">
            <button className="pl-course-btn">
              {currentCourse}
              <svg
                className="pl-arrow-icon"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="pl-course-dropdown">
              <ul className="pl-course-list">
                <li className={`pl-course-item ${currentCourse === "Medical PG" ? "active-course" : ""}`}>
                  <Link to="/courses/medical-pg">Medical PG</Link>
                </li>
                <li className={`pl-course-item ${currentCourse === "FMGE" ? "active-course" : ""}`}>
                  <Link to="/courses/fmge">FMGE</Link>
                </li>
                <li className={`pl-course-item has-sub ${currentCourse.startsWith("SS ") ? "active-course" : ""}`}>
                  <div className="pl-course-item-trigger">
                    <span>Super Speciality</span>
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L5 5L1 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {/* Nested Submenu */}
                  <div className="pl-course-submenu">
                    <ul className="pl-submenu-list">
                      <li className="pl-submenu-item">
                        <Link to="/courses/ss-medicine">SS Medicine</Link>
                      </li>
                      <li className="pl-submenu-item">
                        <Link to="/courses/ss-surgery">SS Surgery</Link>
                      </li>
                      <li className="pl-submenu-item">
                        <Link to="/courses/ss-pediatrics">SS Pediatrics</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={`pl-course-item has-sub ${currentCourse.includes("Residency") ? "active-course" : ""}`}>
                  <div className="pl-course-item-trigger">
                    <span>Residency</span>
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L5 5L1 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {/* Nested Submenu */}
                  <div className="pl-course-submenu">
                    <ul className="pl-submenu-list">
                      <li className="pl-submenu-item">
                        <Link to="/courses/ent-residency">ENT Residency</Link>
                      </li>
                      <li className="pl-submenu-item">
                        <Link to="/courses/psychiatry-residency">Psychiatry Residency</Link>
                      </li>
                      <li className="pl-submenu-item">
                        <Link to="/courses/obs-gyn-residency">OBS-GYN Residency</Link>
                      </li>
                      <li className="pl-submenu-item">
                        <Link to="/courses/radiology-residency">Radiology Residency</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Desktop Nav links & CTAs */}
        <div className="pl-navbar__right">
          <ul className="pl-desktop-nav">
            <li className="pl-nav-item pl-nav-item--subjects">
              <span className="pl-nav-link-standard subjects-link" onMouseEnter={() => setActiveProf(null)}>
                Subjects
                <svg
                  className="pl-arrow-icon"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: '6px' }}
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className={`pl-subjects-dropdown ${activeProf !== null ? "has-active-prof" : ""}`}>
                <div className="pl-subjects-dropdown__profs">
                  <div
                    className={`pl-subjects-dropdown__prof-item ${activeProf === 1 ? "active" : ""}`}
                    onMouseEnter={() => setActiveProf(1)}
                  >
                    <span>Prof 1</span>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div
                    className={`pl-subjects-dropdown__prof-item ${activeProf === 2 ? "active" : ""}`}
                    onMouseEnter={() => setActiveProf(2)}
                  >
                    <span>Prof 2</span>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div
                    className={`pl-subjects-dropdown__prof-item ${activeProf === 3 ? "active" : ""}`}
                    onMouseEnter={() => setActiveProf(3)}
                  >
                    <span>Prof 3</span>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div
                    className={`pl-subjects-dropdown__prof-item ${activeProf === 4 ? "active" : ""}`}
                    onMouseEnter={() => setActiveProf(4)}
                  >
                    <span>Prof 4</span>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="pl-subjects-dropdown__content">
                  {activeProf !== null && subjectsByProf[activeProf].map((subject, idx) => (
                    <Link
                      key={idx}
                      to={subject.path}
                      className="pl-subjects-dropdown__subject-item"
                    >
                      <div className="pl-subjects-dropdown__subject-icon">
                        {subject.icon}
                      </div>
                      <span className="pl-subjects-dropdown__subject-name">
                        {subject.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li className="pl-nav-item">
              <NavLink
                to={`/courses/${currentCourse.toLowerCase().replace(/ /g, "-")}/faculty`}
                className={({ isActive }) =>
                  `pl-nav-link-standard${isActive ? " active" : ""}`
                }
              >
                Faculty
              </NavLink>
            </li>
            <li className="pl-nav-item">
              <NavLink
                to={`/courses/${currentCourse.toLowerCase().replace(/ /g, "-")}/blog`}
                className={({ isActive }) =>
                  `pl-nav-link-standard${isActive ? " active" : ""}`
                }
              >
                Blog
              </NavLink>
            </li>

            {/* Contact Us Hover Menu */}
            <li className="pl-nav-item pl-nav-item--contact">
              <NavLink
                to={`/courses/${currentCourse.toLowerCase().replace(/ /g, "-")}/help-center`}
                className={({ isActive }) =>
                  `pl-nav-link-standard contact-us-link${isActive ? " active" : ""}`
                }
              >
                Contact us
              </NavLink>
              <div className="pl-contact-card">
                <div className="pl-contact-card__item">
                  <span className="pl-contact-label">For Support</span>
                  <a href="tel:+91-9062566666" className="pl-contact-number">+91-9062566666</a>
                </div>
                <div className="pl-contact-card__item">
                  <span className="pl-contact-label">For Sales</span>
                  <a href="tel:+91-7026233333" className="pl-contact-number">+91-7026233333</a>
                </div>
              </div>
            </li>
          </ul>

          {/* CTA Group */}
          <div className="pl-nav-ctas">
            <Link to={`/courses/${currentCourseSlug}/plan`} className="pl-btn-plans">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pl-sparkle-icon"
              >
                <path
                  d="M8 0L10.18 5.82L16 8L10.18 10.18L8 16L5.82 10.18L0 8L5.82 5.82L8 0Z"
                  fill="currentColor"
                />
              </svg>
              Plans
            </Link>
            {localStorage.getItem("pl_is_logged_in") === "true" ? (
              <Link to="/profile" className="pl-btn-login" style={{ backgroundColor: "#F3F4F6", color: "#111827", borderColor: "#E5E7EB" }}>
                My Profile
              </Link>
            ) : (
              <Link to="/login" className="pl-btn-login">
                Signup / Login
              </Link>
            )}
          </div>
        </div>

        {/* Hamburger Trigger for Mobile */}
        <button
          className={`pl-hamburger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div className="pl-mobile-drawer">
          <ul className="pl-mobile-list">
            <li className="pl-mobile-item">
              <span className="pl-mobile-title">Courses</span>
              <ul className="pl-mobile-sub">
                <li><Link to="/courses/medical-pg" onClick={() => setMobileOpen(false)}>Medical PG</Link></li>
                <li><Link to="/courses/fmge" onClick={() => setMobileOpen(false)}>FMGE</Link></li>
                <li>
                  <span className="pl-mobile-sub-title">Super Speciality</span>
                  <ul className="pl-mobile-sub-sub">
                    <li><Link to="/courses/ss-medicine" onClick={() => setMobileOpen(false)}>SS Medicine</Link></li>
                    <li><Link to="/courses/ss-surgery" onClick={() => setMobileOpen(false)}>SS Surgery</Link></li>
                    <li><Link to="/courses/ss-pediatrics" onClick={() => setMobileOpen(false)}>SS Pediatrics</Link></li>
                  </ul>
                </li>
                <li>
                  <span className="pl-mobile-sub-title">Residency</span>
                  <ul className="pl-mobile-sub-sub">
                    <li><Link to="/courses/ent-residency" onClick={() => setMobileOpen(false)}>ENT Residency</Link></li>
                    <li><Link to="/courses/psychiatry-residency" onClick={() => setMobileOpen(false)}>Psychiatry Residency</Link></li>
                    <li><Link to="/courses/obs-gyn-residency" onClick={() => setMobileOpen(false)}>OBS-GYN Residency</Link></li>
                    <li><Link to="/courses/radiology-residency" onClick={() => setMobileOpen(false)}>Radiology Residency</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

             <li className="pl-mobile-item">
               <NavLink to={`/courses/${currentCourseSlug}/faculty`} onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? "active-mobile-link" : ""}>Faculty</NavLink>
             </li>
             <li className="pl-mobile-item">
               <NavLink to={`/courses/${currentCourseSlug}/blog`} onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? "active-mobile-link" : ""}>Blog</NavLink>
             </li>
            <li className="pl-mobile-item">
              <NavLink to={`/courses/${currentCourseSlug}/help-center`} onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? "active-mobile-link" : ""}>Contact us</NavLink>
            </li>
          </ul>
          <div className="pl-mobile-ctas">
            <Link to={`/courses/${currentCourseSlug}/plan`} className="pl-btn-plans" onClick={() => setMobileOpen(false)}>Plans</Link>
            <Link to="/login" className="pl-btn-login" onClick={() => setMobileOpen(false)}>Signup / Login</Link>
          </div>
        </div>
      )}
    </header>
  );
}
