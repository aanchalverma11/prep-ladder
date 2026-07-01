import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  
  // Read details from localStorage with fallback defaults to match screenshot
  const [name, setName] = useState(localStorage.getItem("pl_user_name") || "Aanchal");
  const [email, setEmail] = useState(localStorage.getItem("pl_user_email") || "aanchalv201@gmail.com");
  const [phone, setPhone] = useState(localStorage.getItem("pl_user_phone") || "+919877618752");
  const [state, setState] = useState(localStorage.getItem("pl_user_state") || "Delhi");
  
  const [whatsapp, setWhatsapp] = useState(localStorage.getItem("pl_user_whatsapp") || "");
  const [showWhatsappInput, setShowWhatsappInput] = useState(false);
  const [tempWhatsapp, setTempWhatsapp] = useState(whatsapp);

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);

  const handleLogout = () => {
    localStorage.removeItem("pl_is_logged_in");
    localStorage.removeItem("pl_user_name");
    localStorage.removeItem("pl_user_email");
    localStorage.removeItem("pl_user_phone");
    localStorage.removeItem("pl_user_state");
    localStorage.removeItem("pl_user_whatsapp");
    navigate("/login");
  };

  const handleSavePersonalDetails = (e) => {
    e.preventDefault();
    setName(editName);
    setEmail(editEmail);
    localStorage.setItem("pl_user_name", editName);
    localStorage.setItem("pl_user_email", editEmail);
    setIsEditing(false);
  };

  const handleSaveWhatsapp = () => {
    setWhatsapp(tempWhatsapp);
    localStorage.setItem("pl_user_whatsapp", tempWhatsapp);
    setShowWhatsappInput(false);
  };

  return (
    <div className="pl-profile-page">
      {/* 1. Top Banner Promotion Strip */}
      <div className="pl-profile-strip">
        <div className="pl-profile-strip__container">
          <p className="pl-profile-strip__text">
            Give your learning an extra edge with our premium content, curated exclusively for you!
          </p>
          <Link to="/courses/medical-pg/plan" className="pl-profile-strip__btn">
            Enrol now
          </Link>
        </div>
      </div>

      {/* 2. Main Dashboard Layout Container */}
      <div className="pl-profile-container">
        {/* Left Column: Navigation Sidebar */}
        <aside className="pl-profile-sidebar">
          <Link to="/courses/medical-pg" className="pl-profile-back-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Home</span>
          </Link>

          <nav className="pl-profile-nav">
            <button className="pl-profile-nav-item active">
              My profile
            </button>
            <button className="pl-profile-nav-item" onClick={() => alert("Settings configuration coming soon!")}>
              Settings
            </button>
            <button className="pl-profile-nav-item pl-profile-nav-logout" onClick={handleLogout}>
              Logout
            </button>
          </nav>
        </aside>

        {/* Right Column: Dashboard Main Panel */}
        <main className="pl-profile-content">
          {/* Header Card (Name, Avatar, Edit pic) */}
          <section className="pl-profile-card pl-profile-header-card">
            <div className="pl-profile-header-left">
              <div className="pl-profile-avatar">
                {/* Custom avatar placeholder representation matching layout */}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <div className="pl-profile-header-info">
                <h2>{name}</h2>
                <p>{phone}</p>
              </div>
            </div>
            <button className="pl-profile-btn-edit-pic" onClick={() => alert("Image uploading functionality is mock only.")}>
              Edit profile picture
            </button>
          </section>

          {/* Personal Details Card */}
          <section className="pl-profile-card">
            <div className="pl-profile-card-header">
              <h3>Personal details</h3>
              {!isEditing ? (
                <button className="pl-profile-edit-trigger" onClick={() => setIsEditing(true)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                  <span>Edit</span>
                </button>
              ) : (
                <button className="pl-profile-edit-trigger" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              )}
            </div>

            {!isEditing ? (
              <div className="pl-profile-details-grid">
                <div className="pl-profile-detail-item">
                  <span className="pl-profile-label">NAME</span>
                  <span className="pl-profile-val">{name}</span>
                </div>

                <div className="pl-profile-detail-item">
                  <span className="pl-profile-label">EMAIL ADDRESS</span>
                  <div className="pl-profile-val-with-badge">
                    <span className="pl-profile-val">{email}</span>
                    <span className="pl-profile-badge pl-profile-badge--unverified">UNVERIFIED</span>
                  </div>
                </div>

                <div className="pl-profile-detail-item">
                  <span className="pl-profile-label">MOBILE NUMBER</span>
                  <div className="pl-profile-val-with-badge">
                    <span className="pl-profile-val">{phone}</span>
                    <span className="pl-profile-badge pl-profile-badge--verified">VERIFIED</span>
                  </div>
                </div>

                <div className="pl-profile-detail-item">
                  <span className="pl-profile-label">WHATSAPP NUMBER</span>
                  {whatsapp ? (
                    <div className="pl-profile-val-with-badge">
                      <span className="pl-profile-val">{whatsapp}</span>
                      <button className="pl-profile-link-btn" onClick={() => { setTempWhatsapp(whatsapp); setShowWhatsappInput(true); }}>Change</button>
                    </div>
                  ) : (
                    !showWhatsappInput ? (
                      <button className="pl-profile-link-btn" onClick={() => setShowWhatsappInput(true)}>Add WhatsApp number</button>
                    ) : (
                      <div className="pl-profile-input-inline">
                        <input 
                          type="tel" 
                          value={tempWhatsapp} 
                          onChange={(e) => setTempWhatsapp(e.target.value)} 
                          placeholder="WhatsApp number"
                          maxLength="15"
                        />
                        <button className="pl-profile-inline-save" onClick={handleSaveWhatsapp}>Save</button>
                        <button className="pl-profile-inline-cancel" onClick={() => setShowWhatsappInput(false)}>Cancel</button>
                      </div>
                    )
                  )}
                </div>

                <div className="pl-profile-detail-item pl-profile-detail-item--full">
                  <span className="pl-profile-label">COURSE</span>
                  <span className="pl-profile-val pl-profile-val--grey">No active plan</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSavePersonalDetails} className="pl-profile-edit-form">
                <div className="pl-profile-form-field">
                  <label>Name</label>
                  <input 
                    type="text" 
                    value={editName} 
                    onChange={(e) => setEditName(e.target.value)} 
                    required 
                  />
                </div>
                <div className="pl-profile-form-field">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    value={editEmail} 
                    onChange={(e) => setEditEmail(e.target.value)} 
                    required 
                  />
                </div>
                <button type="submit" className="pl-profile-submit-btn">Save Changes</button>
              </form>
            )}
          </section>

          {/* Education Details Card */}
          <section className="pl-profile-card">
            <div className="pl-profile-card-header">
              <h3>Education details</h3>
              <button className="pl-profile-add-edu-btn" onClick={() => alert("Education configuration details modal coming soon!")}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>Add Education details</span>
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
