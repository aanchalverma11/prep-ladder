import { useState } from "react";
import "./Navbar.css";

// ─── Data: Nav links with optional dropdown items ───────────────────────────
const NAV_LINKS = [
  {
    label: "Courses",
    dropdown: [
      { label: "NEET-PG", href: "#" },
      { label: "FMGE / MCI Screening", href: "#" },
      { label: "INI-CET", href: "#" },
      { label: "NEET-SS", href: "#" },
      { label: "USMLE", href: "#" },
    ],
  },
  { label: "Test Series", href: "#" },
  { label: "Performance", href: "#" },
  { label: "Blog", href: "#" },
  { label: "App", href: "#" },
];

// ─── Dropdown Menu ───────────────────────────────────────────────────────────
function DropdownMenu({ items }) {
  return (
    <ul className="pl-dropdown">
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href} className="pl-dropdown__item">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

// ─── Single Nav Link (with or without dropdown) ──────────────────────────────
function NavLink({ link }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (link.dropdown) {
    return (
      <li
        className="pl-nav__item pl-nav__item--has-dropdown"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <button className="pl-nav__link pl-nav__link--dropdown-trigger">
          {link.label}
          <span className="pl-nav__arrow" aria-hidden="true">
            ▾
          </span>
        </button>
        {dropdownOpen && <DropdownMenu items={link.dropdown} />}
      </li>
    );
  }

  return (
    <li className="pl-nav__item">
      <a href={link.href} className="pl-nav__link">
        {link.label}
      </a>
    </li>
  );
}

// ─── Mobile Menu ─────────────────────────────────────────────────────────────
function MobileMenu({ isOpen }) {
  return (
    <div className={`pl-mobile-menu ${isOpen ? "pl-mobile-menu--open" : ""}`}>
      <ul className="pl-mobile-menu__list">
        {NAV_LINKS.map((link) => (
          <li key={link.label} className="pl-mobile-menu__item">
            <a href={link.href || "#"} className="pl-mobile-menu__link">
              {link.label}
            </a>
            {/* Show dropdown items inline on mobile */}
            {link.dropdown && (
              <ul className="pl-mobile-menu__sub">
                {link.dropdown.map((sub) => (
                  <li key={sub.label}>
                    <a href={sub.href} className="pl-mobile-menu__sublink">
                      {sub.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="pl-mobile-menu__ctas">
        <a href="#" className="pl-btn pl-btn--outline">
          Log in
        </a>
        <a href="#" className="pl-btn pl-btn--primary">
          Start Free Trial
        </a>
      </div>
    </div>
  );
}

// ─── Main Navbar ─────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="pl-header">
      <nav className="pl-navbar">

        {/* Logo */}
        <a href="/" className="pl-logo" aria-label="PrepLadder Home">
          Prep<span className="pl-logo__accent">Ladder</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="pl-nav__list">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.label} link={link} />
          ))}
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="pl-ctas">
          <a href="#" className="pl-btn pl-btn--outline">
            Log in
          </a>
          <a href="#" className="pl-btn pl-btn--primary">
            Start Free Trial
          </a>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className={`pl-hamburger ${mobileOpen ? "pl-hamburger--open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className="pl-hamburger__bar" />
          <span className="pl-hamburger__bar" />
          <span className="pl-hamburger__bar" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} />
    </header>
  );
}
