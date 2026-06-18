import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="pl-header">
      <nav className="pl-navbar">
        {/* Left Side: Logo & Course Switcher */}
        <div className="pl-navbar__left">
          <a href="/" className="pl-logo" aria-label="PrepLadder Home">
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
          </a>

          {/* Vertical Separator */}
          <div className="pl-divider"></div>

          {/* Course Dropdown Selector */}
          <div className="pl-course-selector">
            <button className="pl-course-btn">
              Medical PG
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
                <li className="pl-course-item active-course">
                  <a href="#">Medical PG</a>
                </li>
                <li className="pl-course-item">
                  <a href="#">FMGE</a>
                </li>
                <li className="pl-course-item has-sub">
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
                        <a href="#">SS Medicine</a>
                      </li>
                      <li className="pl-submenu-item">
                        <a href="#">SS Surgery</a>
                      </li>
                      <li className="pl-submenu-item">
                        <a href="#">SS Pediatrics</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="pl-course-item has-sub">
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
                        <a href="#">ENT Residency</a>
                      </li>
                      <li className="pl-submenu-item">
                        <a href="#">Psychiatry Residency</a>
                      </li>
                      <li className="pl-submenu-item">
                        <a href="#">OBS-GYN Residency</a>
                      </li>
                      <li className="pl-submenu-item">
                        <a href="#">Radiology Residency</a>
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
            {/* Subjects Dropdown */}
            <li className="pl-nav-item pl-nav-item--subjects">
              <button className="pl-nav-btn">
                Subjects
                <svg
                  className="pl-arrow-icon"
                  width="8"
                  height="5"
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
              <ul className="pl-simple-dropdown">
                <li><a href="#">Anatomy</a></li>
                <li><a href="#">Physiology</a></li>
                <li><a href="#">Biochemistry</a></li>
                <li><a href="#">Pathology</a></li>
                <li><a href="#">Microbiology</a></li>
              </ul>
            </li>

            <li className="pl-nav-item">
              <a href="#" className="pl-nav-link-standard">Faculty</a>
            </li>
            <li className="pl-nav-item">
              <a href="#" className="pl-nav-link-standard">Blog</a>
            </li>

            {/* Contact Us Hover Menu */}
            <li className="pl-nav-item pl-nav-item--contact">
              <a href="/help-center" className="pl-nav-link-standard contact-us-link">
                Contact us
              </a>
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
            <a href="#" className="pl-btn-plans">
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
            </a>
            <a href="#" className="pl-btn-login">
              Signup / Login
            </a>
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
                <li><a href="#">Medical PG</a></li>
                <li><a href="#">FMGE</a></li>
                <li><a href="#">Super Speciality</a></li>
                <li><a href="#">Residency</a></li>
              </ul>
            </li>
            <li className="pl-mobile-item">
              <a href="#">Subjects</a>
            </li>
            <li className="pl-mobile-item">
              <a href="#">Faculty</a>
            </li>
            <li className="pl-mobile-item">
              <a href="#">Blog</a>
            </li>
            <li className="pl-mobile-item">
              <a href="/help-center">Contact us</a>
            </li>
          </ul>
          <div className="pl-mobile-ctas">
            <a href="#" className="pl-btn-plans">Plans</a>
            <a href="#" className="pl-btn-login">Signup / Login</a>
          </div>
        </div>
      )}
    </header>
  );
}

