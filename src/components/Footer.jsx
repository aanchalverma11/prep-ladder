import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer({ currentCourse = "Medical PG" }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleSendLink = (e) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.trim().length < 10) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setPhoneNumber("");
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <footer className="pl-footer-new">
      <div className="pl-footer-container">
        <div className="pl-footer-grid">
          {/* Brand Card */}
          <div className="pl-footer-card pl-footer-card--brand">
            <div className="pl-footer-logo">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
              >
                <rect width="40" height="40" rx="8" fill="#FFFFFF" />
                <path
                  d="M12 28V12H20C23.3137 12 26 14.6863 26 18C26 21.3137 23.3137 24 20 24H16V28H12ZM16 20H20C21.1046 20 22 19.1046 22 18C22 16.8954 21.1046 16 20 16H16V20Z"
                  fill="#007BFF"
                />
                <line x1="16" y1="18" x2="22" y2="18" stroke="#007BFF" strokeWidth="2" />
                <line x1="16" y1="21" x2="20" y2="21" stroke="#007BFF" strokeWidth="2" />
                <line x1="16" y1="24" x2="20" y2="24" stroke="#007BFF" strokeWidth="2" />
              </svg>
              <span className="pl-footer-logo-text">
                Prep<span className="pl-footer-logo-accent">Ladder</span>
              </span>
            </div>
            <p className="pl-footer-tagline">
              Why wait more? Start your learning <br />
              journey now.
            </p>
            <div className="pl-app-links">
              <a href="#" className="pl-app-badge" aria-label="Get it on Google Play">
                <img
                  src="https://image.prepladder.com/content/8zMKe2Fq0NSMm9pmKP281667196943.png"
                  alt="Play Store"
                  loading="lazy"
                />
              </a>
              <a href="#" className="pl-app-badge" aria-label="Download on the App Store">
                <img
                  src="https://image.prepladder.com/content/iIsvFCMxy7oVkICOgFyC1667196959.png"
                  alt="App Store"
                  loading="lazy"
                />
              </a>
              <a href="#" className="pl-app-badge" aria-label="Download for Laptop/PC">
                <img
                  src="https://image.prepladder.com/content/xskEErUcWGJss3KBzXWj1667196972.png"
                  alt="Laptop/PC App"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="pl-social-links">
              <a href="#" className="pl-social-icon" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="pl-social-icon" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="pl-social-icon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="pl-social-icon" aria-label="Telegram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </a>
            </div>
          </div>

          {/* Popular Goals */}
          <div className="pl-footer-card">
            <h4 className="pl-footer-heading">POPULAR GOALS</h4>
            <ul className="pl-footer-links">
              <li><Link to="/courses/medical-pg">Medical PG</Link></li>
              <li><Link to="/courses/ss-medicine">SS Medicine</Link></li>
              <li><Link to="/courses/ss-surgery">SS Surgery</Link></li>
              <li><Link to="/courses/ss-pediatrics">SS Pediatrics</Link></li>
              <li><Link to="/courses/ent-residency">ENT Residency</Link></li>
              <li><Link to="/courses/psychiatry-residency">Psychiatry Residency</Link></li>
              <li><Link to="/courses/obs-gyn-residency">OBS-GYN Residency</Link></li>
              <li><Link to="/courses/radiology-residency">Radiology Residency</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="pl-footer-card">
            <h4 className="pl-footer-heading">HELP & SUPPORT</h4>
            <ul className="pl-footer-links">
              <li>
                <Link
                  to={`/courses/${currentCourse.toLowerCase().replace(/\s+/g, "-")}/help-center`}
                >
                  Contact us
                </Link>
              </li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Grievance Redressal</a></li>
            </ul>
          </div>

          {/* Other Links */}
          <div className="pl-footer-card">
            <h4 className="pl-footer-heading">OTHER LINKS</h4>
            <ul className="pl-footer-links">
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Know your Student Ambassador</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Download Input Card */}
          <div className="pl-footer-card pl-footer-card--download">
            <h4 className="pl-footer-heading">DOWNLOAD THE APP</h4>
            <p className="pl-download-desc">
              Enter your phone number to get the download link of our mobile app.
            </p>
            <form onSubmit={handleSendLink} className="pl-download-form">
              <div className="pl-input-wrapper">
                <span className="pl-input-prefix">
                  <span className="pl-flag-icon">
                    <svg width="18" height="12" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg">
                      <rect width="9" height="2" fill="#FF9933"/>
                      <rect y="2" width="9" height="2" fill="#FFFFFF"/>
                      <rect y="4" width="9" height="2" fill="#138808"/>
                      <circle cx="4.5" cy="3" r="0.8" fill="#000080"/>
                      <circle cx="4.5" cy="3" r="0.6" fill="#FFFFFF"/>
                      <circle cx="4.5" cy="3" r="0.3" fill="#000080"/>
                    </svg>
                  </span>
                  <span className="pl-country-code">+91</span>
                  <svg className="pl-caret-down" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="pl-download-input"
                  disabled={status === "sending" || status === "success"}
                />
              </div>

              {status === "error" && (
                <p className="pl-form-msg error">Please enter a valid 10-digit phone number.</p>
              )}
              {status === "success" && (
                <p className="pl-form-msg success">✓ Download link has been sent to your phone!</p>
              )}

              <button
                type="submit"
                className={`pl-btn-submit ${status}`}
                disabled={status === "sending" || status === "success"}
              >
                {status === "sending" ? "Sending..." : "Send link"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pl-footer-bottom">
          <p className="pl-copyright">© 2026 PrepLadder Private Limited</p>
          <ul className="pl-bottom-policies">
            <li><a href="#">About us</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
