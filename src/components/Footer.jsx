import { useState } from "react";
import "./Footer.css";

export default function Footer() {
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
          </div>

          {/* Popular Goals */}
          <div className="pl-footer-card">
            <h4 className="pl-footer-heading">POPULAR GOALS</h4>
            <ul className="pl-footer-links">
              <li><a href="#">Medical PG</a></li>
              <li><a href="#">FMGE</a></li>
              <li><a href="#">SS Medicine</a></li>
              <li><a href="#">SS Surgery</a></li>
              <li><a href="#">SS Pediatrics</a></li>
              <li><a href="#">ENT Residency</a></li>
              <li><a href="#">Radiology Residency</a></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="pl-footer-card">
            <h4 className="pl-footer-heading">HELP & SUPPORT</h4>
            <ul className="pl-footer-links">
              <li><a href="/help-center">Contact us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Grievance Redressal</a></li>
            </ul>
          </div>

          {/* Other Links */}
          <div className="pl-footer-card">
            <h4 className="pl-footer-heading">OTHER LINKS</h4>
            <ul className="pl-footer-links">
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Student Ambassador</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">About us</a></li>
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
                <span className="pl-input-prefix">+91</span>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
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
