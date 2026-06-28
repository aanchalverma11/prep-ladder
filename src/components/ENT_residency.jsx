import React, { useState } from "react";
import "./ENT_residency.css";

const FAQ_ITEMS = [
  {
    q: "Can I login from 3 devices?",
    a: "You are allowed to be logged in on a maximum of two devices at the same time. Please note that accessing your account with a third device may lead to it being flagged or permanently blocked."
  },
  {
    q: "Can I take screenshots?",
    a: "No, you cannot take screenshots on an Android device. Whereas on IOS, if your account has been observed taking screenshots more than 3 times, your account will be flagged and the content will no longer be available for you for at least 15 days."
  },
  {
    q: "How many devices am I allowed to use with my PrepLadder subscription?",
    a: "You can log in only through 2 devices with the same credentials at the same time. If you try to log in from the third device, then you will have to log out from either one of the 2 existing devices. If any unusual login attempts are observed to the 3rd device, your account will be flagged or permanently blocked."
  },
  {
    q: "What happens if I permanently delete my PrepLadder account?",
    a: "By deleting your account permanently-<br/><ul><li>You’ll be logged out of Prepladder & your account will no longer be usable.</li><li>Your active subscription will be canceled.</li><li>You’ll not be able to access your downloaded/saved videos.</li><li>You’ll not be able to access your bookmarked content.</li><li>You’ll not be able to sign in to your account. You’ll have to sign up/register again.</li></ul>"
  },
  {
    q: "Can I share my subscription?",
    a: "No, you cannot share your subscription. Sharing won't be possible, but you can use the same credentials (login information) to log in on 2 different devices. Unfortunately, there is a catch: neither of these devices can play videos at the same time.<br/>Note: We advise you not to disclose your credentials to anyone."
  },
  {
    q: "What is the ENT Residency Program?",
    a: "The ENT Residency Program is a comprehensive course designed specifically for MS ENT students in their residency years. Covering all essential topics required for theory and practical exams, this program offers a holistic approach to ENT exam preparations."
  },
  {
    q: "What is the Course Content and Duration?",
    a: "The course is divided into four major parts, including Basic Sciences, Principles and Practices of ENT, General and Surgical Principles of Head and Neck, and Recent Advances. With a duration of approximately 150+ hours, it provides an in-depth knowledge of the key aspects of ENT."
  },
  {
    q: "How is this course helpful?",
    a: "This course serves as a one-stop solution for MS ENT residents, offering curated content for exam preparation. With a busy schedule, it saves time by consolidating information from various sources into comprehensive lectures. Our dedicated ENT faculty has meticulously compiled all essential information in a manner that fosters concept-building and improves clinical approach."
  },
  {
    q: "Who should join this course?",
    a: "Whether you're a 1st-year, 2nd-year, or 3rd-year resident, this course is tailored to cover the entire three-year residency syllabus. Additionally, it can be utilized for creating content for journal clubs and seminars."
  },
  {
    q: "Is there a free trial of the course?",
    a: "Yes, upon signing up you will get a 24-hour free trial during which you can explore all our premium content."
  },
  {
    q: "What is the KYC process for accessing the PrepLadder app on multiple devices?",
    a: "<p><strong>For Premium Users:</strong></p><ul><li>KYC is mandatory to access the app after becoming a premium user. You will need to complete it immediately after purchasing a plan.</li><li>If you log in on a third device, KYC must be re-verified before access is granted.</li><li>The same document used for the first KYC (e.g., passport or Aadhaar card) must be used for re-KYC on additional devices.</li><li>Once KYC is completed on the third device, the app will automatically log out from the first device to maintain account security.</li></ul><p><strong>For Non-Premium Users:</strong></p><ul><li>Non-premium users can complete KYC through their profile section.</li><li>Logging in on a third device will require contacting support for assistance.</li></ul><p>This process ensures the security of your PrepLadder account and content access across devices.</p>"
  },
  {
    q: "Can I access videos on my PC or desktop?",
    a: "No, video content is currently only accessible on mobile and tablet devices. However, all other modules like QBank, tests, Custom Modules, and PrepAI can be accessed on both desktop and mobile devices."
  }
];

export default function ENT_residency() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="ent-residency-page">
      {/* Announcement Strip */}
      <div className="ent-announcement-strip">
        <div className="container text-center">
          <p className="ent-announcement-text">
            Master ENT residency prep with <strong>PrepLadder's Clinical QBank</strong> <a href="/courses/ent-residency/plan" className="ent-announcement-btn">Enrol now</a>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="ent-hero position-relative overflow-hidden">
        {/* Left background illustration */}
        <img 
          src="https://image.prepladder.com/content/Phjew8JTF7MKbCzScrpp1674451660.webp" 
          alt="left illustration" 
          className="ent-hero-decor-left"
        />
        {/* Right doctor illustration */}
        <img 
          src="https://image.prepladder.com/content/98g93DyiEaTeb11ke0mG1674451705.webp" 
          alt="right doctor illustration" 
          className="ent-hero-decor-right"
        />
        
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-8 ent-hero-content-center">
              <a href="/courses/ent-residency/plan" className="ent-hero-badge">
                Enrol for ENT Residency ELITE Plan Now Now ➔
              </a>
              <h1 className="ent-hero-heading">
                Your One-Stop-Solution for <span>ENT Residency</span> Preparation
              </h1>
              <p className="ent-hero-desc">
                Access comprehensive and well-structured ENT Residency study material curated by India's top ENT faculty.
              </p>
              <div className="ent-hero-action-row">
                <a href="/courses/ent-residency/plan" className="ent-hero-btn">Enrol now</a>
              </div>
              <div className="ent-hero-badges-row">
                <a href="https://play.google.com/store/apps/details?id=com.prepladder.learningapp" target="_blank" rel="noopener noreferrer">
                  <img src="https://image.prepladder.com/content/T7i9PWQC4QLR3YBHLMPI1638965792.svg" alt="Google Play Store" />
                </a>
                <a href="https://itunes.apple.com/us/app/prepladder/id1622337839" target="_blank" rel="noopener noreferrer">
                  <img src="https://image.prepladder.com/content/J43trce1ZMqvIfqRe2zA1638965764.svg" alt="Apple App Store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features List Section */}
      {/* Feature 1: Conceptual Video Lectures */}
      <section className="ent-feature-section-row">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-start">
              <div className="ent-feature-text-block">
                <h2 className="ent-feature-item-heading">Conceptual Video Lectures</h2>
                <p className="ent-feature-item-desc">
                  Study from 150+ hours of in-depth video lectures from India’s top ENT faculty for a strong conceptual foundation of the topics.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center">
              <div className="ent-feature-media-block">
                <img 
                  src="https://image.prepladder.com/content/ent-residency-comprehensive-video-lectures.webp" 
                  alt="Conceptual Video Lectures" 
                  className="ent-feature-item-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: QBank with Detailed Explanations */}
      <section className="ent-feature-section-row">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-12 col-md-6 text-start">
              <div className="ent-feature-text-block">
                <h2 className="ent-feature-item-heading">QBank with Detailed Explanations</h2>
                <p className="ent-feature-item-desc">
                  Elevate your readiness with our 1500+ Clinical QBank questions, thoughtfully categorized by subject and topic, enabling you to assess your understanding and sharpen your diagnostic abilities.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center">
              <div className="ent-feature-media-block">
                <img 
                  src="https://image.prepladder.com/content/ent-residency-Qbank.webp" 
                  alt="QBank with Detailed Explanations" 
                  className="ent-feature-item-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Concise Notes */}
      <section className="ent-feature-section-row">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-start">
              <div className="ent-feature-text-block">
                <h2 className="ent-feature-item-heading">Concise Notes for ENT Residency</h2>
                <p className="ent-feature-item-desc">
                  Access clinically oriented and concise subject-wise ENT Residency notes featuring high-quality images for more immersive learning.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center">
              <div className="ent-feature-media-block">
                <img 
                  src="https://image.prepladder.com/content/ent-residency-NOTES.webp" 
                  alt="Concise Notes for ENT Residency" 
                  className="ent-feature-item-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Faculty Section */}
      <section className="ent-faculty-section text-center">
        <div className="container">
          <h2 className="ent-faculty-section-title">Meet Our ENT Residency Faculty</h2>
          
          <div className="ent-faculty-card-wrapper">
            <div className="ent-faculty-card-inner">
              <img 
                src="https://image.prepladder.com/content/ENT-vyshnavi-bommakanti.webp" 
                alt="Dr. Vyshnavi Bommakanti" 
                className="ent-faculty-img img-fluid"
              />
            </div>
          </div>

          <p className="ent-faculty-desc-below">
            Learn from Dr. Vyshnavi Bommakanti, a practicing ENT surgeon, to elevate your medical journey with her knowledge that blends cutting-edge expertise with real-world clinical experience.
          </p>
        </div>
      </section>
      

      {/* FAQs Section */}
      <section className="ent-faqs-accordion-section">
        <div className="ent-faq-container">
          <h2 className="ent-faq-title text-start text-md-center">Frequently asked questions</h2>
          <h3 className="ent-faq-category">General</h3>
          <div className="ent-faq-accordion">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`ent-faq-item ${isOpen ? "open" : ""}`}>
                  <button className="ent-faq-question-btn" onClick={() => toggleFaq(index)}>
                    <span>{faq.q}</span>
                    <span className="ent-faq-icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div className="ent-faq-answer-container">
                    <div 
                      className="ent-faq-answer-content"
                      dangerouslySetInnerHTML={{ __html: faq.a }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
