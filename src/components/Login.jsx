import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const SLIDES = [
  {
    title: "Welcome to PrepLadder",
    subtitle: "Your one-stop destination to crack competitive exams like Medical PG, FMGE, NEET SS and INI CET.",
    illustration: (
      <svg width="240" height="200" viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Decorative Grid Lines */}
        <circle cx="120" cy="100" r="80" stroke="#E6F0FF" strokeWidth="2" strokeDasharray="6 6" />
        <circle cx="120" cy="100" r="50" stroke="#F0F6FC" strokeWidth="2" />
        
        {/* Center Main Graphic */}
        <g className="ill-pulse">
          <rect x="70" y="50" width="100" height="90" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="2" />
          <rect x="80" y="65" width="80" height="12" rx="4" fill="#F3F4F6" />
          <rect x="80" y="85" width="60" height="8" rx="3" fill="#F3F4F6" />
          <rect x="80" y="100" width="70" height="8" rx="3" fill="#F3F4F6" />
          {/* Logo representation inside */}
          <rect x="80" y="120" width="20" height="10" rx="3" fill="#007BFF" />
          <rect x="105" y="120" width="40" height="6" rx="3" fill="#E5E7EB" />
        </g>

        {/* Floating Badges */}
        <g className="ill-float" style={{ transform: "translate(15px, 0px)" }}>
          <rect x="30" y="40" width="75" height="28" rx="14" fill="#E6F0FF" stroke="#007BFF" strokeWidth="1" />
          <text x="67.5" y="58" fill="#007BFF" fontSize="9" fontWeight="700" textAnchor="middle">Medical PG</text>
        </g>
        
        <g className="ill-float" style={{ transform: "translate(0px, 30px)" }}>
          <rect x="150" y="45" width="65" height="28" rx="14" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1" />
          <text x="182.5" y="63" fill="#B45309" fontSize="9" fontWeight="700" textAnchor="middle">Super Speciality</text>
        </g>

        <g className="ill-float" style={{ transform: "translate(-20px, 80px)" }}>
          <rect x="25" y="110" width="70" height="28" rx="14" fill="#EEF2F6" stroke="#4B5563" strokeWidth="1" />
          <text x="60" y="128" fill="#374151" fontSize="9" fontWeight="700" textAnchor="middle">Residency</text>
        </g>

        <g className="ill-float" style={{ transform: "translate(10px, 110px)" }}>
          <rect x="160" y="105" width="55" height="28" rx="14" fill="#ECFDF5" stroke="#10B981" strokeWidth="1" />
          <text x="187.5" y="123" fill="#047857" fontSize="9" fontWeight="700" textAnchor="middle">FMGE</text>
        </g>
      </svg>
    )
  },
  {
    title: "QBank & Test Series",
    subtitle: "Authentic pattern with rich explanations that are attempted by more than 90,000 students everyday.",
    illustration: (
      <svg width="240" height="200" viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120" cy="100" r="70" fill="#EEF2F6" opacity="0.5" />
        
        {/* Device Wrapper */}
        <g className="ill-float">
          <rect x="75" y="40" width="90" height="130" rx="12" fill="white" stroke="#1E1B4B" strokeWidth="3" />
          <line x1="110" y1="48" x2="130" y2="48" stroke="#1E1B4B" strokeWidth="3" strokeLinecap="round" />
          <circle cx="120" cy="160" r="5" fill="#1E1B4B" />

          {/* Test Questions Block */}
          <rect x="85" y="60" width="70" height="15" rx="4" fill="#ECFDF5" stroke="#10B981" strokeWidth="1" />
          <circle cx="95" cy="67.5" r="4" fill="#10B981" />
          <rect x="105" y="65" width="40" height="5" rx="2" fill="#10B981" />

          <rect x="85" y="82" width="70" height="15" rx="4" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1" />
          <circle cx="95" cy="89.5" r="4" fill="#EF4444" />
          <rect x="105" y="87" width="40" height="5" rx="2" fill="#EF4444" />

          <rect x="85" y="104" width="70" height="15" rx="4" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1" />
          <circle cx="95" cy="111.5" r="4" fill="#3B82F6" />
          <rect x="105" y="109" width="40" height="5" rx="2" fill="#3B82F6" />

          {/* Answer Stats Info */}
          <rect x="85" y="128" width="70" height="18" rx="4" fill="#F3F4F6" />
          <rect x="92" y="134" width="56" height="6" rx="2" fill="#9CA3AF" />
        </g>
      </svg>
    )
  },
  {
    title: "Video Lectures",
    subtitle: "Learn from the Dream Team with comprehensive clinical lectures and exam-oriented content.",
    illustration: (
      <svg width="240" height="200" viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="180" height="130" rx="16" fill="#1E1B4B" />
        <rect x="35" y="35" width="170" height="100" rx="12" fill="#2A275C" />
        
        {/* Play Icon in center */}
        <g className="ill-pulse">
          <circle cx="120" cy="85" r="22" fill="#007BFF" />
          <path d="M114 74V96L132 85L114 74Z" fill="white" />
        </g>

        {/* Video progress bar */}
        <rect x="45" y="118" width="150" height="4" rx="2" fill="#4B5563" />
        <rect x="45" y="118" width="95" height="4" rx="2" fill="#007BFF" />
        <circle cx="140" cy="120" r="4" fill="#007BFF" />

        {/* Subtitles mockup */}
        <rect x="60" y="145" width="120" height="8" rx="4" fill="#E5E7EB" />
      </svg>
    )
  }
];

const COUNTRIES = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
];

export default function Login() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  
  // OTP logic states
  const [step, setStep] = useState("phone"); // 'phone', 'otp', or 'details'
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Additional details state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [residenceState, setResidenceState] = useState("");

  // Autoplay Slider effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 8) {
      setStep("otp");
    }
  };

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== "" && index < 3) {
      otpRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code === "1234") {
      setOtpError("");
      setStep("details");
    } else {
      setOtpError("Invalid OTP. Enter '1234' for verification demo.");
    }
  };

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("pl_user_name", name);
    localStorage.setItem("pl_user_email", email);
    localStorage.setItem("pl_user_phone", `${selectedCountry.code}${phoneNumber}`);
    localStorage.setItem("pl_user_state", residenceState);
    localStorage.setItem("pl_is_logged_in", "true");
    navigate("/profile");
  };

  return (
    <div className="pl-login-container">
      <div className="pl-login-bg-wave"></div>

      {/* Header with simple branding logo */}
      <header className="pl-login-header">
        <Link to="/" className="pl-login-logo" aria-label="PrepLadder Home">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
            <rect width="40" height="40" rx="8" fill="#007BFF" />
            <path d="M12 28V12H20C23.3137 12 26 14.6863 26 18C26 21.3137 23.3137 24 20 24H16V28H12ZM16 20H20C21.1046 20 22 19.1046 22 18C22 16.8954 21.1046 16 20 16H16V20Z" fill="white" />
            <line x1="16" y1="18" x2="22" y2="18" stroke="white" strokeWidth="2" />
            <line x1="16" y1="21" x2="20" y2="21" stroke="white" strokeWidth="2" />
            <line x1="16" y1="24" x2="20" y2="24" stroke="white" strokeWidth="2" />
          </svg>
          <span>Prep<span className="pl-login-logo-accent">Ladder</span></span>
        </Link>
      </header>

      {/* Main Grid Content */}
      <main className="pl-login-main">
        {/* Left Side: Auto-slide features info */}
        <div className="pl-login-left">
          <div className="pl-login-slider">
            <div className="pl-login-slide-content" key={currentSlide}>
              <div className="pl-login-illustration-container">
                {SLIDES[currentSlide].illustration}
              </div>
              <h2 className="pl-login-title">{SLIDES[currentSlide].title}</h2>
              <p className="pl-login-subtitle">{SLIDES[currentSlide].subtitle}</p>
            </div>

            {/* Pagination dots */}
            <div className="pl-login-dots">
              {SLIDES.map((_, index) => (
                <button
                  key={index}
                  className={`pl-login-dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="pl-login-right">
          <div className="pl-login-card">
            {step === "phone" ? (
              <>
                <div>
                  <h1 className="pl-login-card-title">Let's get started</h1>
                  <p className="pl-login-card-subtitle">
                    Enter your mobile number to Sign up/Sign in to your PrepLadder account
                  </p>
                </div>

                <form onSubmit={handlePhoneSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div className="pl-login-input-group">
                    {/* Country trigger selector */}
                    <button
                      type="button"
                      className="pl-login-country-select"
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    >
                      <span>{selectedCountry.flag}</span>
                      <span>{selectedCountry.code}</span>
                      <svg width="8" height="5" viewBox="0 0 10 6" fill="none" style={{ marginLeft: "2px" }}>
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* Hidden/shown popover */}
                    {showCountryDropdown && (
                      <div className="pl-login-country-dropdown">
                        {COUNTRIES.map((country) => (
                          <div
                            key={country.code}
                            className="pl-login-country-option"
                            onClick={() => {
                              setSelectedCountry(country);
                              setShowCountryDropdown(false);
                            }}
                          >
                            <span>{country.flag} {country.name}</span>
                            <span style={{ color: "#6b7280" }}>{country.code}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <input
                      type="tel"
                      className="pl-login-input"
                      placeholder="Enter phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                      maxLength="12"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="pl-login-btn-submit"
                    disabled={phoneNumber.length < 8}
                  >
                    Continue
                  </button>
                </form>

                <p className="pl-login-terms">
                  By signing up, you agree to <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a> of PrepLadder
                </p>
              </>
            ) : (
              <>
                <div>
                  <h1 className="pl-login-card-title">Verify Mobile Number</h1>
                  <p className="pl-login-card-subtitle">
                    We sent a verification code to {selectedCountry.code} {phoneNumber}. Enter <strong style={{ color: "#007BFF" }}>1234</strong> to verify.
                  </p>
                </div>

                <form onSubmit={handleOtpSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div className="pl-login-otp-row">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={otpRefs[index]}
                        type="text"
                        maxLength="1"
                        className="pl-login-otp-box"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        required
                      />
                    ))}
                  </div>

                  {otpError && (
                    <span style={{ color: "#ef4444", fontSize: "0.85rem", textAlign: "center" }}>
                      {otpError}
                    </span>
                  )}

                  <button type="submit" className="pl-login-btn-submit">
                    Verify OTP & Continue
                  </button>

                  <button
                    type="button"
                    style={{ background: "none", border: "none", color: "#007BFF", fontSize: "0.88rem", fontWeight: "600", cursor: "pointer" }}
                    onClick={() => {
                      setStep("phone");
                      setOtp(["", "", "", ""]);
                      setOtpError("");
                    }}
                  >
                    Change Phone Number
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      {/* App Promotion Footer Bar */}
      <footer className="pl-login-footer">
        <span className="pl-login-footer-text">Experience exclusive content on the app</span>
        <div className="pl-login-apps">
          <a href="#" className="pl-login-app-btn">
            <svg className="pl-login-app-icon" viewBox="0 0 24 24">
              <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.5,12A1.5,1.5 0 0,0 16,10.5H13V12H16V13H14V14.5H16V15.5H13V17H16A1.5,1.5 0 0,0 17.5,15.5V12M8,10.5A1.5,1.5 0 0,0 6.5,12V15.5A1.5,1.5 0 0,0 8,17H10.5V15.5H8V14.5H10V13H8V12H10.5V10.5H8Z" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span style={{ fontSize: "0.6rem", textTransform: "uppercase" }}>Get it on</span>
              <span style={{ fontWeight: "700", fontSize: "0.8rem" }}>Google Play</span>
            </div>
          </a>
          <a href="#" className="pl-login-app-btn">
            <svg className="pl-login-app-icon" viewBox="0 0 24 24">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22C14.32,22.05 13.89,21.24 12.37,21.24C10.84,21.24 10.37,21.97 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span style={{ fontSize: "0.6rem", textTransform: "uppercase" }}>Download on the</span>
              <span style={{ fontWeight: "700", fontSize: "0.8rem" }}>App Store</span>
            </div>
          </a>
        </div>
      </footer>

      {step === "details" && (
        <div className="pl-details-drawer-overlay">
          <div className="pl-details-drawer">
            <button className="pl-details-drawer-close" onClick={() => setStep("otp")} aria-label="Close details">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="pl-details-drawer-content">
              <h1 className="pl-details-title">Additional Details</h1>
              <p className="pl-details-subtitle">Signing up with {selectedCountry.code}{phoneNumber}</p>
              
              <form onSubmit={handleDetailsSubmit} className="pl-details-form">
                <div className="pl-details-field">
                  <label>Name</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter name"
                    required 
                  />
                </div>
                
                <div className="pl-details-field">
                  <label>Email</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter email"
                    required 
                  />
                </div>
                
                <div className="pl-details-field">
                  <label>Current state of residence</label>
                  <select 
                    value={residenceState} 
                    onChange={(e) => setResidenceState(e.target.value)} 
                    required
                  >
                    <option value="">Select state</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className={`pl-details-save-btn ${name && email && residenceState ? 'active' : ''}`}
                >
                  Save details
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
