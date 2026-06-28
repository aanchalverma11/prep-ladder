import { useState } from "react";
import "./Plans.css";

export default function Plans() {
  const [expandedCategories, setExpandedCategories] = useState({
    Videos: true,
    Notes: false,
    QBank: false,
    Tests: false,
    ResolveLive: false,
  });

  const [activeFaqCategory, setActiveFaqCategory] = useState("General");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleCategory = (cat) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // SVGs for Check and Cross
  const CheckIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" className="pl-check-icon">
      <circle cx="12" cy="12" r="10" stroke="#93C5FD" strokeWidth="1.5" />
      <path d="m9 12 2 2 4-4" stroke="#2563EB" strokeWidth="2.5" />
    </svg>
  );

  const CrossIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" className="pl-cross-icon">
      <circle cx="12" cy="12" r="10" stroke="#FCA5A5" strokeWidth="1.5" />
      <path d="m15 9-6 6M9 9l6 6" stroke="#EF4444" strokeWidth="2.5" />
    </svg>
  );

  const faqData = {
    General: [
      {
        q: "Can I take screenshots ?",
        a: "No, you cannot take screenshots on an Android device. Whereas on IOS, if your account has been observed taking screenshots more than 3 times, your account will be flagged and the content will no longer be available for you for at least 15 days.",
      },
      {
        q: "Can I access videos on my PC or desktop?",
        a: "No, video content is currently only accessible on mobile and tablet devices. However, all other modules like QBank, tests, Custom Modules, and PrepAI can be accessed on both desktop and mobile devices.",
      },
      {
        q: "Can I login from 3 devices?",
        a: "You are allowed to be logged in on a maximum of two devices at the same time. Please note that accessing your account with a third device may lead to it being flagged or permanently blocked.",
      },
      {
        q: "If I've subscribed to PrepLadder's Medical PG course, can I switch to FMGE?",
        a: "Yes, you can upgrade/change your course. Please contact our support team at support@prepladder.com or sales at +91-7026233333 to pay the differential amount and update course access.",
      },
      {
        q: "What happens if I permanently delete my PrepLadder account?",
        a: "By deleting your account permanently- You'll be logged out of PrepLadder & your account will no longer be usable. Your active subscription will be canceled. You'll not be able to access your downloaded/saved videos or bookmarked content.",
      },
      {
        q: "What is the KYC process for accessing the PrepLadder app on multiple devices?",
        a: "For Premium Users: KYC is mandatory to access the app after becoming a premium user. You will need to complete it immediately after purchasing a plan. If you log in on a third device, KYC must be re-verified before access is granted. The same document used for the first KYC must be used. For Non-Premium Users: Non-premium users can complete KYC through their profile section. Logging in on a third device will require contacting support for assistance.",
      },
    ],
    "Version XI": [
      {
        q: "What's new in Version XI?",
        a: "Version XI is a complete upgrade focused on high-yield learning and faster recall. It includes: 280+ Hours of entirely new Rapid Revision videos (English & Hinglish), 50+ Hrs of Integrated Essentials for system-wise learning, 20 Hrs of Real cadaver dissection videos, a revamped QBank with 5000+ new questions on missing topics + topper review, Printed Summary Charts for last-minute revision, and SPARK – an intelligent spaced-repetition flashcard system.",
      },
      {
        q: "Who should buy Version XI?",
        a: "Version XI is ideal for NEET PG, INI-CET, and FMGE aspirants who want a more retention-focused, exam-aligned prep system.",
      },
      {
        q: "Why should I switch from Version X to Version XI?",
        a: "Version X helped you cover content. Version XI helps that content convert into recall. You get all-new Rapid Revision (not reused), PYQ-tagged learning to prioritise what repeats, integrated system-wise understanding to reduce overlap, smarter recall tools, and a QBank aligned to the current exam pattern. If your goal is better accuracy and rank improvement, Version XI is the upgrade.",
      },
      {
        q: "Will my progress be maintained if I switch to Version XI?",
        a: "Yes, your overall test performance and QBank progress will be preserved when you upgrade to Version XI. However, since the video content is updated, you may see new videos in the list.",
      },
      {
        q: "Will I get access to live classes with Version XI?",
        a: "Version XI is primarily a recorded, high-yield learning ecosystem. LIVE classes (RESOLVE) are available via the Super ELITE Plan as an add-on.",
      },
      {
        q: "What has changed in the main videos?",
        a: "Main videos in Version XI have been shortened, made more high-yield, include clinical case discussions, integration between subjects, and cadaver anatomy videos.",
      },
      {
        q: "When will I get notes for Version XI?",
        a: "Notes XI will be dispatched within 5-7 working days of your purchase. You can track the status in the app under the delivery tab.",
      },
      {
        q: "When will I get notes for Rapid Revision?",
        a: "Rapid Revision notes are typically dispatched alongside main notes or within 10 days of purchase depending on the publication schedule.",
      },
    ],
  };

  return (
    <div className="pl-plans-page">
      <div className="pl-plans-container">
        <h1 className="pl-plans-title">
          Find the Perfect Plan for <br />
          <span>Your Prep Journey.</span>
        </h1>

        <div className="pl-plans-grid">
          {/* Card 1: PRO Plan */}
          <div className="pl-plan-card">
            <div className="pl-plan-header">
              <div className="pl-plan-badge-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h2>PRO Plan</h2>
              <div className="pl-plan-price">
                <span>Starting at</span>
                <span className="price-num">₹13,999</span>
                <span className="original-price">₹30,000</span>
              </div>
            </div>

            <div className="pl-plan-features">
              <h3>WHAT'S INCLUDED</h3>
              <ul>
                <li>
                  <strong>QBank</strong>
                  <p>18,500+ MCQs, including Audio QBank and Image Bank, aligned with the latest exam pattern.</p>
                </li>
                <li>
                  <strong>Test Series</strong>
                  <p>21 mock tests designed to simulate real exam difficulty and pressure.</p>
                </li>
                <li>
                  <strong>SPARK</strong>
                  <p>Smart in-app recall system that tracks weak areas and personalises your revision.</p>
                </li>
                <li>
                  <strong>Rapid Revision QBank</strong>
                  <p>Covering all high-yield MCQs for revision.</p>
                </li>
                <li>
                  <strong>Treasures</strong>
                  <p>2000+ summary charts for quick revision.</p>
                </li>
              </ul>
            </div>

            <button className="pl-plan-btn" type="button">Enrol Now</button>
          </div>

          {/* Card 2: ELITE Plan */}
          <div className="pl-plan-card pl-plan-card--recommended">
            <div className="pl-recommended-ribbon">RECOMMENDED</div>
            <div className="pl-plan-header">
              <div className="pl-plan-badge-icon star-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h2>ELITE Plan</h2>
              <div className="pl-plan-price">
                <span>Starting at</span>
                <span className="price-num">₹16,999</span>
                <span className="original-price">₹35,000</span>
              </div>
            </div>

            <div className="pl-plan-features">
              <h3>WHAT'S INCLUDED</h3>
              <ul>
                <li>
                  <strong>Video Lectures</strong>
                  <p>Smart video lectures with animations and real patients. Available in English and Hinglish.</p>
                </li>
                <li>
                  <strong>Notes XI</strong>
                  <p>Structured notes in the form of tables, flowcharts and minimaps.</p>
                </li>
                <li>
                  <strong>QBank XI</strong>
                  <p>18,500+ MCQs, including Audio QBank, aligned with the latest exam pattern.</p>
                </li>
                <li>
                  <strong>Test Series</strong>
                  <p>300+ mock tests, including mini and subject tests, designed to simulate real exam difficulty and pressure.</p>
                </li>
                <li>
                  <strong>Rapid Revision</strong>
                  <p>280 hours of high-yield, PYQ-tagged videos built for faster recall and smarter revision.</p>
                </li>
                <li>
                  <strong>Integrated Essentials</strong>
                  <p>50 hours of system-wise integrated learning to eliminate overlap and strengthen conceptual clarity.</p>
                </li>
                <li>
                  <strong>Dissection Videos</strong>
                  <p>20 hours of cadaveric anatomy videos for better visualization and improved image-based question solving.</p>
                </li>
                <li>
                  <strong>Printed Summary Charts</strong>
                  <p>High-yield, single-page topic summaries designed for quick, last-mile revision.</p>
                </li>
                <li>
                  <strong>SPARK</strong>
                  <p>Smart in-app recall system that tracks weak areas and personalises your revision.</p>
                </li>
                <li>
                  <strong>Resolve Lap 2 with Target Plan</strong>
                  <p>Unlock Resolve NEET PG Lap 2 LIVE with Target ELITE Plan.</p>
                </li>
              </ul>
            </div>

            <button className="pl-plan-btn" type="button">Enrol Now</button>
          </div>

          {/* Card 3: Custom Plan */}
          <div className="pl-plan-card">
            <div className="pl-plan-header">
              <div className="pl-plan-badge-icon custom-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h2>Custom</h2>
              <p className="custom-subtitle">Plans suitable for your Prof preparation</p>
            </div>

            <div className="pl-plan-features">
              <h3>WHAT'S INCLUDED</h3>
              <ul>
                <li>
                  <strong>Targeted resources</strong>
                  <p>Access videos, QBank, notes, etc., tailored for your prep.</p>
                </li>
                <li>
                  <strong>Select from expertly crafted plans</strong>
                  <p>Choose the plan that suits for prep needs.</p>
                </li>
              </ul>
              
              <div className="pl-custom-pitch">
                <h4>Pick what works the best</h4>
                <p>Tailored Plans for Your Exam Preparation</p>
              </div>
            </div>

            <button className="pl-plan-btn" type="button">View Customized Plans</button>
          </div>
        </div>

        {/* Footer actions of plans page */}
        <div className="pl-plans-footer">
          <p>Reclaim your energy. Stop searching endlessly - focus on mastering what matters.</p>
          <button className="pl-compare-btn" type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "0.25rem" }}>
              <polyline points="16 3 21 3 21 8" />
              <line x1="4" y1="20" x2="21" y2="3" />
              <polyline points="21 16 21 21 16 21" />
              <line x1="15" y1="15" x2="21" y2="21" />
              <line x1="4" y1="4" x2="9" y2="9" />
            </svg>
            Compare plans
          </button>
          
          <h2 className="pl-compare-title">Compare plans & features</h2>

          {/* Interactive Compare Plans Table */}
          <div className="pl-compare-table-wrapper">
            <table className="pl-compare-table">
              <thead>
                <tr>
                  <th className="pl-table-col-header pl-col-feature-title">Unlock starting price</th>
                  <th className="pl-table-col-header pl-col-plan">
                    <div className="pl-table-plan-cell">
                      <span className="pl-plan-name">ELITE</span>
                      <button className="pl-table-signup-btn">Signup / Login</button>
                    </div>
                  </th>
                  <th className="pl-table-col-header pl-col-plan">
                    <div className="pl-table-plan-cell">
                      <span className="pl-plan-name">PRO</span>
                      <button className="pl-table-signup-btn">Signup / Login</button>
                    </div>
                  </th>
                  <th className="pl-table-col-header pl-col-plan">
                    <div className="pl-table-plan-cell">
                      <span className="pl-plan-name">Super ELITE</span>
                      <button className="pl-table-signup-btn">Signup / Login</button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Category: Videos */}
                <tr className="pl-category-row" onClick={() => toggleCategory("Videos")}>
                  <td colSpan="4">
                    <div className="pl-category-row-content">
                      <span className="pl-category-toggle-icon">
                        {expandedCategories.Videos ? "−" : "+"}
                      </span>
                      <span className="pl-category-name">Videos</span>
                    </div>
                  </td>
                </tr>
                {expandedCategories.Videos && (
                  <>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">Conceptual Video Lectures</td>
                      <td><CheckIcon /></td>
                      <td><CrossIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">Toggle for English & Hinglish</td>
                      <td><CheckIcon /></td>
                      <td><CrossIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">Rapid Revision videos</td>
                      <td><CheckIcon /></td>
                      <td><CrossIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">Last Resort Revision</td>
                      <td><CheckIcon /></td>
                      <td><CrossIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">ProfEdge</td>
                      <td><CheckIcon /></td>
                      <td><CrossIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">Offline Access for Premium Videos</td>
                      <td><CheckIcon /></td>
                      <td><CrossIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                  </>
                )}

                {/* Category: Notes */}
                <tr className="pl-category-row" onClick={() => toggleCategory("Notes")}>
                  <td colSpan="4">
                    <div className="pl-category-row-content">
                      <span className="pl-category-toggle-icon">
                        {expandedCategories.Notes ? "−" : "+"}
                      </span>
                      <span className="pl-category-name">Notes</span>
                    </div>
                  </td>
                </tr>
                {expandedCategories.Notes && (
                  <>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">Detailed Notes</td>
                      <td><CheckIcon /></td>
                      <td><CrossIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">Printed Notes</td>
                      <td><CheckIcon /></td>
                      <td><CrossIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">Revision Notes</td>
                      <td><CheckIcon /></td>
                      <td><CrossIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                  </>
                )}

                {/* Category: QBank */}
                <tr className="pl-category-row" onClick={() => toggleCategory("QBank")}>
                  <td colSpan="4">
                    <div className="pl-category-row-content">
                      <span className="pl-category-toggle-icon">
                        {expandedCategories.QBank ? "−" : "+"}
                      </span>
                      <span className="pl-category-name">QBank</span>
                    </div>
                  </td>
                </tr>
                {expandedCategories.QBank && (
                  <>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">Custom QBank</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">Active Recall QBank</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">High-yield MCQs</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                  </>
                )}

                {/* Category: Tests */}
                <tr className="pl-category-row" onClick={() => toggleCategory("Tests")}>
                  <td colSpan="4">
                    <div className="pl-category-row-content">
                      <span className="pl-category-toggle-icon">
                        {expandedCategories.Tests ? "−" : "+"}
                      </span>
                      <span className="pl-category-name">Tests</span>
                    </div>
                  </td>
                </tr>
                {expandedCategories.Tests && (
                  <>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">Subject Tests</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">Grand Mock Tests</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">All India Rankings</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                  </>
                )}

                {/* Category: Resolve LIVE */}
                <tr className="pl-category-row" onClick={() => toggleCategory("ResolveLive")}>
                  <td colSpan="4">
                    <div className="pl-category-row-content">
                      <span className="pl-category-toggle-icon">
                        {expandedCategories.ResolveLive ? "−" : "+"}
                      </span>
                      <span className="pl-category-name">Resolve LIVE</span>
                    </div>
                  </td>
                </tr>
                {expandedCategories.ResolveLive && (
                  <>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">Live Interactive Classes</td>
                      <td><CrossIcon /></td>
                      <td><CrossIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr className="pl-feature-row">
                      <td className="pl-feature-cell">Doubt Resolution Sessions</td>
                      <td><CrossIcon /></td>
                      <td><CrossIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="pl-faq-section-wrapper">
          <h2 className="pl-faq-title-main">Frequently asked questions</h2>
          
          <div className="pl-faq-container-grid">
            {/* Left sidebar categories */}
            <div className="pl-faq-categories-sidebar">
              <span className="pl-faq-categories-label">CATEGORIES</span>
              <ul className="pl-faq-categories-list">
                <li 
                  className={`pl-faq-category-item ${activeFaqCategory === "General" ? "active" : ""}`}
                  onClick={() => {
                    setActiveFaqCategory("General");
                    setExpandedFaq(null);
                  }}
                >
                  General
                </li>
                <li 
                  className={`pl-faq-category-item ${activeFaqCategory === "Version XI" ? "active" : ""}`}
                  onClick={() => {
                    setActiveFaqCategory("Version XI");
                    setExpandedFaq(null);
                  }}
                >
                  Version XI
                </li>
              </ul>
            </div>

            {/* Right accordion panel */}
            <div className="pl-faq-accordion-panel">
              <h3 className="pl-faq-category-title-sub">{activeFaqCategory}</h3>
              <div className="pl-faq-accordion-list">
                {faqData[activeFaqCategory].map((faq, index) => {
                  const isOpen = expandedFaq === index;
                  return (
                    <div key={index} className={`pl-faq-accordion-item ${isOpen ? "open" : ""}`}>
                      <button className="pl-faq-accordion-header" onClick={() => toggleFaq(index)}>
                        <span className="pl-faq-question-text">{faq.q}</span>
                        <span className="pl-faq-toggle-btn">{isOpen ? "−" : "+"}</span>
                      </button>
                      {isOpen && (
                        <div className="pl-faq-accordion-body">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
