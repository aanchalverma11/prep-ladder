import { useState } from "react";
import "./HelpCenter.css";

// --- FAQ data for categories ---
const FAQ_DATA = {
  account: {
    title: "My Account",
    colorClass: "card-account",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    faqs: [
      { q: "How can I change my registered phone number?", a: "To change your registered phone number, please contact our support team at support@prepladder.com or call us at +91-9062566666 with your registered email ID and new phone number." },
      { q: "Can I log in to multiple devices at the same time?", a: "No, PrepLadder account access is limited to a single active login. Logging in to a second device will automatically log you out of the first device to secure your account." },
      { q: "How do I renew my subscription?", a: "You can renew your plan by going to the 'Plans' tab in the app or website, selecting your desired subscription, and completing the payment." }
    ]
  },
  modules: {
    title: "PrepLadder Modules",
    colorClass: "card-modules",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    faqs: [
      { q: "Are PrepLadder video lectures downloadable?", a: "Yes, you can download video lectures within the PrepLadder mobile application for offline viewing. Please note that these videos are saved locally in the app and cannot be exported to your device storage." },
      { q: "How often is the QBank updated?", a: "Our QBank is updated regularly with new pattern questions, clinical cases, and explanation updates matching the latest exam trends." },
      { q: "What are Treasures and how do they help?", a: "Treasures are micro-summaries of key topics designed for rapid revision. They help you quickly recall high-yield facts just before the exam." }
    ]
  },
  technical: {
    title: "Technical Difficulties",
    colorClass: "card-technical",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    faqs: [
      { q: "Why is the video lagging or buffering constantly?", a: "Buffering usually happens due to low internet speeds. You can try changing the video quality in the video settings gear icon, or download the video to watch offline without interruptions." },
      { q: "I made a purchase but my app is still showing free version.", a: "Try logging out and logging back in using your registered credentials. If the issue persists, please send a screenshot of the payment receipt to tech-support@prepladder.com." },
      { q: "Is PrepLadder compatible with iPad or Tablets?", a: "Yes! PrepLadder is fully optimized for iPad, Android tablets, and mobile devices." }
    ]
  },
  delivery: {
    title: "Notes & Delivery",
    colorClass: "card-delivery",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    faqs: [
      { q: "How do I track my PrepLadder printed notes delivery status?", a: "Once your notes are shipped, you will receive an SMS and email with tracking details. You can also track the status in the 'Notes' section under your profile inside the app." },
      { q: "Can I change my delivery address after placing the order?", a: "Address updates are possible within 12 hours of purchase. Please reach out immediately to notes@prepladder.com to update your details." },
      { q: "Are printed notes included in all plans?", a: "Printed notes are included with ELITE packages. Please review individual plan details before purchasing." }
    ]
  },
  payments: {
    title: "Payments",
    colorClass: "card-payments",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    faqs: [
      { q: "What payment methods are supported?", a: "We support UPI, Netbanking, Credit cards, Debit cards, and EMI options through our partnered payment gateways." },
      { q: "Can I pay in monthly installments (EMI)?", a: "Yes, we support cardless EMI and credit card EMI options at checkout. Eligibility is subject to terms set by financial providers." },
      { q: "What is your refund policy?", a: "Subscriptions are generally non-refundable once activated. For details, please consult our Refund Policy at the bottom of the page." }
    ]
  },
  others: {
    title: "Others",
    colorClass: "card-others",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    faqs: [
      { q: "Are there any student ambassador programs available?", a: "Yes! PrepLadder runs a Student Ambassador program. You can find more info on the 'Know your Student Ambassador' link in the footer." },
      { q: "How can I contact Grievance Redressal?", a: "For complaints, reach out to our grievance officer through the Grievance Redressal portal linked in the page footer." },
      { q: "Does PrepLadder offer mock tests?", a: "Yes, we offer National Mock Tests (NMTs) regularly. Check the Test Series section inside the app for dates and results." }
    ]
  }
};

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("account");
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

  // Helper to toggle accordion items
  const toggleFaq = (index) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  // Filter FAQs based on search query
  const getFilteredFaqs = () => {
    if (!searchQuery.trim()) {
      return FAQ_DATA[selectedCategory]?.faqs || [];
    }

    const query = searchQuery.toLowerCase();
    const allMatching = [];
    Object.keys(FAQ_DATA).forEach((key) => {
      FAQ_DATA[key].faqs.forEach((faq) => {
        if (faq.q.toLowerCase().includes(query) || faq.a.toLowerCase().includes(query)) {
          allMatching.push({
            ...faq,
            categoryName: FAQ_DATA[key].title
          });
        }
      });
    });
    return allMatching;
  };

  const filteredFaqs = getFilteredFaqs();

  return (
    <div className="pl-helpcenter">
      {/* Hero / Banner Section */}
      <section className="pl-hc-hero">
        <div className="pl-hc-hero__container">
          <span className="pl-hc-hero__subtitle">Welcome to PrepLadder Help</span>
          <h1 className="pl-hc-hero__title">How can we help you?</h1>

          {/* Premium Search Bar */}
          <div className="pl-search-container">
            <svg
              className="pl-search-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search for articles, queries, troubleshooting..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setExpandedFaqIndex(null); // Reset open states during search
              }}
              className="pl-search-input"
            />
            {searchQuery && (
              <button
                className="pl-search-clear"
                onClick={() => {
                  setSearchQuery("");
                  setExpandedFaqIndex(null);
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="pl-hc-content">
        {/* Contact Support Panel */}
        <section className="pl-hc-contact">
          <div className="pl-hc-contact__left">
            <div className="pl-hc-phone-circle">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <h3>Get in touch</h3>
              <p>Have any questions? We'd love to hear from you.</p>
            </div>
          </div>

          <div className="pl-hc-contact__right">
            <div className="pl-hc-contact-col">
              <span className="pl-contact-sub">For Support</span>
              <a href="tel:+91-9062566666" className="pl-contact-tel">
                +91-9062566666
              </a>
              <span className="pl-contact-hours">10:00 AM to 7:00 PM (Mon-Sun)</span>
            </div>
            <div className="pl-hc-contact-col">
              <span className="pl-contact-sub">For Sales</span>
              <a href="tel:+91-7026233333" className="pl-contact-tel">
                +91-7026233333
              </a>
              <span className="pl-contact-hours">10:00 AM to 7:00 PM (Mon-Sun)</span>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        {!searchQuery && (
          <section className="pl-hc-categories">
            <div className="pl-hc-grid">
              {Object.keys(FAQ_DATA).map((key) => {
                const cat = FAQ_DATA[key];
                const isSelected = selectedCategory === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedCategory(key);
                      setExpandedFaqIndex(null);
                    }}
                    className={`pl-category-card ${cat.colorClass} ${isSelected ? "selected" : ""}`}
                  >
                    <div className="pl-cat-icon-wrapper">{cat.icon}</div>
                    <h2>{cat.title}</h2>
                    <p>
                      {key === "account" && "Queries related to your account, plans, & more."}
                      {key === "modules" && "Queries related to Videos, QBank, Treasures and more."}
                      {key === "technical" && "Video related issues, Account related issues & more."}
                      {key === "delivery" && "Know about how to track your notes."}
                      {key === "payments" && "EMI & other payment related queries."}
                      {key === "others" && "All you want to know about us."}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* Dynamic Accordion Drawer */}
        <section className="pl-faq-accordion-section">
          <h2 className="pl-accordion-title">
            {searchQuery
              ? `Search Results (${filteredFaqs.length})`
              : `${FAQ_DATA[selectedCategory].title} FAQs`}
          </h2>

          <div className="pl-accordion-list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = expandedFaqIndex === index;
                return (
                  <div
                    key={index}
                    className={`pl-accordion-item ${isOpen ? "open" : ""}`}
                  >
                    <button
                      className="pl-accordion-header"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="pl-accordion-qtext">
                        {faq.q}
                        {searchQuery && (
                          <span className="pl-search-badge">{faq.categoryName}</span>
                        )}
                      </span>
                      <span className="pl-accordion-icon">{isOpen ? "−" : "+"}</span>
                    </button>
                    <div className="pl-accordion-body">
                      <div className="pl-accordion-content">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="pl-faq-no-results">
                <h3>No articles found for "{searchQuery}"</h3>
                <p>Try searching different terms or contact our support team above.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
