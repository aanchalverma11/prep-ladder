import React, { useState } from "react";
import "./OBS_GYN_residency.css";

const FAQ_ITEMS = [
  {
    q: "Can I login from 3 devices?",
    a: "You are allowed to be logged in on a maximum of two devices at the same time. Please note that accessing your account with a third device may lead to it being flagged or permanently blocked."
  },
  {
    q: "What is the OBS-GYN Residency Program?",
    a: "The OBS-GYN Residency Program is a comprehensive course designed specifically for MS/DNB OBS-GYN students in their residency years. Covering all essential topics required for theory and practical exams, this program offers a holistic approach to OBS-GYN exam preparations."
  },
  {
    q: "What is the Course content and Duration?",
    a: "The course covers all key academic and clinical topics in Obstetrics and Gynecology. With a duration of approximately 200+ hours, it provides an in-depth knowledge of the key aspects of OBS-GYN."
  },
  {
    q: "How is this course helpful?",
    a: "This course serves as a one-stop solution for OBS-GYN residents, offering curated content for exam preparation. With a busy schedule, it saves time by consolidating information from various sources into comprehensive lectures. Our dedicated faculty has meticulously compiled all essential information in a manner that fosters concept-building and improves clinical approach."
  },
  {
    q: "Who should join this course?",
    a: "Whether you're a 1st-year, 2nd-year, or 3rd-year resident, this course is tailored to cover the entire three-year residency syllabus. Additionally, it can be utilized for creating content for journal clubs and seminars."
  },
  {
    q: "Can I take screenshots?",
    a: "No, you cannot take screenshots on an Android device. Whereas on iOS, if your account has been observed taking screenshots more than 3 times, your account will be flagged and the content will no longer be available for you for at least 15 days."
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
    q: "What is the KYC process for accessing the PrepLadder app on multiple devices?",
    a: "<p><strong>For Premium Users:</strong></p><ul><li>KYC is mandatory to access the app after becoming a premium user. You will need to complete it immediately after purchasing a plan.</li><li>If you log in on a third device, KYC must be re-verified before access is granted.</li><li>The same document used for the first KYC (e.g., passport or Aadhaar card) must be used for re-KYC on additional devices.</li><li>Once KYC is completed on the third device, the app will automatically log out from the first device to maintain account security.</li></ul><p><strong>For Non-Premium Users:</strong></p><ul><li>Non-premium users can complete KYC through their profile section.</li><li>Logging in on a third device will require contacting support for assistance.</li></ul>"
  },
  {
    q: "Can I access videos on my PC or desktop?",
    a: "No, video content is currently only accessible on mobile and tablet devices. However, all other modules like QBank, tests, Custom Modules, and PrepAI can be accessed on both desktop and mobile devices."
  }
];

export default function OBS_GYN_residency() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="obs-gyn-residency-page">
      {/* Announcement Strip */}
      <div className="gyn-announcement-strip">
        <div className="container text-center">
          <p className="gyn-announcement-text">
            Ease your residency prep with the <strong>OBS-GYN Residency Course</strong> <a href="/courses/obs-gyn-residency/plan" className="gyn-announcement-btn">Enrol Now</a>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="gyn-hero position-relative overflow-hidden">
        {/* Decorative background illustrations */}
        <img 
          src="https://image.prepladder.com/content/Phjew8JTF7MKbCzScrpp1674451660.webp" 
          alt="left illustration" 
          className="gyn-hero-decor-left"
        />
        <img 
          src="https://image.prepladder.com/content/98g93DyiEaTeb11ke0mG1674451705.webp" 
          alt="right doctor illustration" 
          className="gyn-hero-decor-right"
        />
        
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-8 gyn-hero-content-center">
              <a href="/courses/obs-gyn-residency/plan" className="gyn-hero-badge">
                Enrol Now ➔
              </a>
              <h1 className="gyn-hero-heading">
                Focused <span>OBS-GYN Residency Preparation</span> for Demanding Schedules
              </h1>
              <p className="gyn-hero-desc">
                Designed by India’s top OBS-GYN faculty, this is your ultimate time-saving solution for residency prep.
              </p>
              <div className="gyn-hero-action-row">
                <a href="/courses/obs-gyn-residency/plan" className="gyn-hero-btn">Enrol now</a>
              </div>
              <div className="gyn-hero-badges-row">
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

      {/* 1. Conceptual Video Lectures Section */}
      <section className="gyn-feature-section-row">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-12 col-md-6 text-start">
              <div className="gyn-feature-text-block">
                <h2 className="gyn-feature-item-heading">Conceptual Video Lectures</h2>
                <p className="gyn-feature-item-desc">
                  Master core concepts with over 200+ hours of clinically-focused video lectures meticulously crafted by India's premier OBS-GYN faculty.
                </p>
              </div>
            </div>
            {/* Right Image */}
            <div className="col-12 col-md-6 text-center">
              <div className="gyn-feature-media-block">
                <img 
                  src="https://image.prepladder.com/content/QSGBeeJCqLLh20FZSEW81714482582.png" 
                  alt="Conceptual Video Lectures for OBS-GYN Residency" 
                  className="gyn-feature-item-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Meet Faculty Section */}
      <section className="gyn-faculty-section text-center">
        <div className="container">
          <h2 className="gyn-faculty-section-title">Meet Our OBS-GYN Residency Faculty</h2>
          
          <div className="gyn-faculty-card-wrapper">
            <img 
              src="https://image.prepladder.com/content/Faculty-for-OBS-GYN.webp" 
              alt="Introducing Dr. Shonali Chandra - Faculty for OBS-GYN" 
              className="gyn-faculty-large-card-img img-fluid"
            />
          </div>

          <p className="gyn-faculty-desc-below">
            Learn from Dr. Shonali Chandra, a distinguished OBS-GYN specialist, as she combines a decade of cutting-edge clinical practice with exemplary teaching expertise to elevate your residency exam preparation.
          </p>
        </div>
      </section>

      {/* 3. FAQs Section */}
      <section className="gyn-faqs-accordion-section">
        <div className="gyn-faq-container">
          <h2 className="gyn-faq-title text-start text-md-center">Frequently asked questions</h2>
          <h3 className="gyn-faq-category">General</h3>
          
          <div className="gyn-faq-accordion">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`gyn-faq-item ${isOpen ? "open" : ""}`}>
                  <button className="gyn-faq-question-btn" onClick={() => toggleFaq(index)}>
                    <span>{faq.q}</span>
                    <span className="gyn-faq-icon-dot"></span>
                  </button>
                  <div className="gyn-faq-answer-container">
                    <div 
                      className="gyn-faq-answer-content"
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
