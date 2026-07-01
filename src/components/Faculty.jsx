import { useState } from "react";
import "./Faculty.css";
import c1 from "../assets/c1.png"; // Dr. Pritesh Singh (Surgery)
import c2 from "../assets/c2.png"; // Dr. Md. Azam (Anatomy)
import c3 from "../assets/c3.png"; // Dr. Neha Taneja (PSM)
import c4 from "../assets/c4.png"; // Dr. Deepak Marwah (Medicine)
import c5 from "../assets/c5.png"; // Dr. Preeti Sharma (Microbiology)

const FACULTIES_BY_PROF = {
  "PROF 1": [
    { name: "Dr. Preeti Sharma", image: c5 },
    { name: "Dr. Deepak Marwah", image: c4 },
    { name: "Dr. Md. Azam", image: c2 },
    { name: "Dr. Neha Taneja", image: c3 },
    { name: "Dr. Pritesh Singh", image: c1 }
  ],
  "PROF 2": [
    { name: "Dr. Deepak Marwah", image: c4 },
    { name: "Dr. Preeti Sharma", image: c5 }
  ],
  "PROF 3": [
    { name: "Dr. Neha Taneja", image: c3 }
  ],
  "PROF 4": [
    { name: "Dr. Pritesh Singh", image: c1 },
    { name: "Dr. Md. Azam", image: c2 }
  ]
};

const DETAIL_FACULTIES_BY_PROF = {
  "PROF 1": [
    {
      name: "Dr. Mohammed Azam",
      subject: "Anatomy",
      image: "https://image.prepladder.com/content/z0DeZUmy830wYBboZVdG1745218430.png",
      bg: "linear-gradient(180deg, #02A4FF 0%, #FDFEFF 100%)",
      tagBg: "#E0F2FE",
      tagText: "#0369A1",
      tagBorder: "#0ea5e9",
      desc: "Dr. Mohammed Azam is a distinguished educator with over 12 years of experience in teaching Anatomy, along with other non-clinical subjects. He is renowned for his unique teaching style that integrates visual, auditory, read/write, and kinesthetic methods, making complex anatomical concepts accessible and engaging."
    },
    {
      name: "Dr. Soumen Manna",
      subject: "Physiology",
      image: "https://image.prepladder.com/content/qskMYRYiOyUtZWU3Om5P1744870969.png",
      bg: "linear-gradient(180deg, #FFB349 0%, #FF438E 100%)",
      tagBg: "#FEF3C7",
      tagText: "#B45309",
      tagBorder: "#f59e0b",
      desc: "Dr. Soumen Manna, MBBS, MD completed his graduation from Nil Ratan Sircar Medical College, Kolkata, and MD in Physiology from All India Institute of Medical Sciences, Delhi in 2012. Dr. Soumen did his Senior Residency from VMMC & Safdarjung Hospital, Delhi and currently working as an associate professor."
    },
    {
      name: "Dr. C Shanmugapriya",
      subject: "Biochemistry",
      image: "https://image.prepladder.com/content/slk8mPhdbhRVJL2T7q2S1744870939.png",
      bg: "linear-gradient(180deg, #FF1FA5 0%, #9740CE 100%)",
      tagBg: "#FDF2F8",
      tagText: "#BE185D",
      tagBorder: "#db2777",
      desc: "Dr. C Shanmugapriya has done her MBBS at Madurai Medical College and MD Biochemistry at Madras Medical College. She is currently the Professor and HOD Biochemistry at Government Thoothukudi Medical College and Hospital, Thoothukudi. She has an experience of 16 years in teaching Biochemistry."
    }
  ],
  "PROF 2": [
    {
      name: "Dr. Preeti Sharma",
      subject: "Pathology & Microbiology",
      image: "https://image.prepladder.com/content/sws2O7dRQpjB7wpqq8qj1744870964.png",
      bg: "linear-gradient(180deg, #1969FF 0%, #25D7AB 100%)",
      tagBg: "#EEF2FF",
      tagText: "#4338CA",
      tagBorder: "#4f46e5",
      desc: "The Patho Mage Dr. Preeti Sharma is a gold medal winner from the renowned Safdarjung hospital in pathology. She has taught numerous batches of students both nationally and internationally. She has over 5 years of experience teaching students preparing for NEET PG, INICET, FMGE, and USMLE."
    },
    {
      name: "Dr. Ankit Kumar",
      subject: "Pharmacology",
      image: "https://image.prepladder.com/content/jMZnFoUq0CcVQaa4LkMA1744870937.png",
      bg: "linear-gradient(180deg, #2ADDA1 0%, #22A7CD 100%)",
      tagBg: "#ECFDF5",
      tagText: "#047857",
      tagBorder: "#10b981",
      desc: "Dr. Ankit Kumar is a seasoned expert in pharmacology having over 12 years of experience in the medical field. With a distinguished academic background including a Gold medal in MBBS from Maulana Azad Medical College and an MD in Pharmacology, Dr. Kumar's journey has been marked by deep research."
    }
  ],
  "PROF 3": [
    {
      name: "Dr. Akhilesh Raj",
      subject: "Forensic Medicine and Toxicology",
      image: "https://image.prepladder.com/content/kgCDTXbBgoJLPBgGPDGS1744870934.png",
      bg: "linear-gradient(180deg, #FFB349 0%, #FF438E 100%)",
      tagBg: "#FEF3C7",
      tagText: "#B45309",
      tagBorder: "#f59e0b",
      desc: "MD (Forensic Medicine), AIIMS - Dr. Akhilesh Raj Jhamad MD (Forensic Medicine) from AIIMS, Delhi is a leading faculty with more than 10 years of teaching experience in India & abroad. He is famous for his made easy offline classes and has many international publications to his credit."
    },
    {
      name: "Dr. Neha Taneja",
      subject: "PSM",
      image: "https://image.prepladder.com/content/g0yvqOpT7zrmA1dnUCcI1744870956.png",
      bg: "linear-gradient(180deg, #FF1FA5 0%, #9740CE 100%)",
      tagBg: "#FDF2F8",
      tagText: "#BE185D",
      tagBorder: "#db2777",
      desc: "Dr. Neha Taneja has done her MBBS from Manipal College of Medical Sciences, DNB in Community Medicine from St Stephen’s Hospital and Senior Residency in Community Medicine from NDMC Medical College. She is a recipient of the Edward Kennedy Memorial Award for outstanding research."
    },
    {
      name: "Dr. Vyshnavi Bommakanti",
      subject: "ENT",
      image: "https://image.prepladder.com/content/3UeWMAqScDIuH6Wi18301744870971.png",
      bg: "linear-gradient(180deg, #1969FF 0%, #25D7AB 100%)",
      tagBg: "#EEF2FF",
      tagText: "#4338CA",
      tagBorder: "#4f46e5",
      desc: "Dr. Vyshnavi Bommakanti is MBBS from Rajiv Gandhi University of Health Sciences Karnataka and DNB in ENT. She has done her Fellowship in skull base surgeries and advanced rhinology from the University of Graz Austria and Bombay Hospital Bombay. She is a full-time ENT surgeon."
    },
    {
      name: "Dr. Manish Chhabra",
      subject: "Ophthalmology",
      image: "https://image.prepladder.com/content/5VrIph9e3AF11cMZeY1L1775898663.png",
      bg: "linear-gradient(180deg, #02A4FF 0%, #FDFEFF 100%)",
      tagBg: "#E0F2FE",
      tagText: "#0369A1",
      tagBorder: "#0ea5e9",
      desc: "Dr. Manish Chhabra is a distinguished Ophthalmology educator and Consultant Ophthalmologist with over 10 years of clinical, surgical, and academic experience. Trained at PGIMER, Chandigarh, he brings advanced expertise in glaucoma and complex anterior segment surgeries."
    }
  ],
  "PROF 4": [
    {
      name: "Dr. Shonali Chandra",
      subject: "Gynaecology & Obstetrics",
      image: "https://image.prepladder.com/content/7ubEcLj5rcYzIotRcGfY1714296815.png",
      bg: "linear-gradient(180deg, #02A4FF 0%, #FDFEFF 100%)",
      tagBg: "#E0F2FE",
      tagText: "#0369A1",
      tagBorder: "#0ea5e9",
      desc: "Dr. Shonali Chandra is a revered Obstetrics and Gynecology specialist, boasting an illustrious academic career with a Postgraduate (MS) degree and Senior Residency from Maulana Azad Medical College. She is deeply committed to education, teaching both residency and nursing students."
    },
    {
      name: "Dr. Meenakshi Bothra",
      subject: "Pediatrics",
      image: "https://image.prepladder.com/content/tykDOCBPyNfPS5YwfiSg1744870949.png",
      bg: "linear-gradient(180deg, #FFB349 0%, #FF438E 100%)",
      tagBg: "#FEF3C7",
      tagText: "#B45309",
      tagBorder: "#f59e0b",
      desc: "Dr. Meenakshi Bothra Gupta has done her MBBS from Medical College, Kolkata. During her MBBS, she received honours in Anatomy, Physiology, Pathology, Forensic & State Medicine, Otorhinolaryngology, Preventive & Social Medicine, General Surgery and Pediatrics, and Gold medals."
    },
    {
      name: "Dr. Pritesh Singh",
      subject: "Surgery",
      image: "https://image.prepladder.com/content/XEApTJfijHYthH1SQ0m41744870930.png",
      bg: "linear-gradient(180deg, #FF1FA5 0%, #9740CE 100%)",
      tagBg: "#FDF2F8",
      tagText: "#BE185D",
      tagBorder: "#db2777",
      desc: "Dr. Pritesh Singh, a graduate from Maulana Azad Medical College and postgraduate from Lady Hardinge Medical College, New Delhi, India, is an excellent teacher and has been taking awe-inspiring classes. He is a renowned educationist and author of Surgery Essence."
    },
    {
      name: "Dr. Deepak Marwah",
      subject: "Medicine",
      image: "https://image.prepladder.com/content/YuUo7aof6Q3zURFVa7qn1744870941.png",
      bg: "linear-gradient(180deg, #1969FF 0%, #25D7AB 100%)",
      tagBg: "#EEF2FF",
      tagText: "#4338CA",
      tagBorder: "#4f46e5",
      desc: "Dr. Deepak Marwah is an author cum clinician acclaimed at a national level by students pan India. His Lectures have simplified the concepts of Internal Medicine for students to have a clear shot at the current pattern of the NEET-PG examination. His book is a national bestseller."
    }
  ]
};

export default function Faculty() {
  const [selectedProf, setSelectedProf] = useState("PROF 1");

  return (
    <div className="pl-fac-page">
      <section className="pl-fac-hero-section">
        {/* Decorative side elements */}
        <div className="pl-fac-decor-left"></div>
        <div className="pl-fac-decor-right"></div>
        
        <div className="pl-fac-hero-container">
          <h1 className="pl-fac-hero-title">
            Get <span>Expert Guidance</span>, Step by Step!
          </h1>
          <p className="pl-fac-hero-subtitle">
            Our Teaching Experts are here to guide you at every step of the preparation, enabling you to run the course well and crack the entrance exam.
          </p>
          
          <button 
            className="pl-fac-hero-btn"
            onClick={() => {
              setSelectedProf("PROF 1");
              const section = document.getElementById("faculty-section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Know more
          </button>
          
          {/* Grid of faculty cards */}
          <div className="pl-fac-hero-grid">
            {FACULTIES_BY_PROF["PROF 1"].map((fac, idx) => (
              <div 
                className="pl-fac-hero-card" 
                key={idx}
              >
                <img src={fac.image} alt={fac.name} className="pl-fac-hero-card-full-img" />
              </div>
            ))}
          </div>

          {/* Interactive tabs */}
          <div className="pl-fac-hero-pills">
            {Object.keys(FACULTIES_BY_PROF).map((prof) => (
              <button
                key={prof}
                className={`pl-fac-hero-pill ${selectedProf === prof ? "active" : ""}`}
                onClick={() => setSelectedProf(prof)}
              >
                {prof}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Detailed List Section */}
      <section className="pl-fac-list-section" id="faculty-section">
        <div className="pl-fac-list-container">
          <h2 className="pl-fac-list-title">
            {selectedProf.charAt(0) + selectedProf.slice(1).toLowerCase()}
          </h2>
          <div className="pl-fac-list-grid">
            {DETAIL_FACULTIES_BY_PROF[selectedProf].map((fac, idx) => (
              <div className="pl-fac-detail-block" key={idx}>
                <div className="pl-fac-detail-left" style={{ background: fac.bg }}>
                  <img src={fac.image} alt={fac.name} />
                </div>
                <div className="pl-fac-detail-right">
                  <div className="pl-fac-tag" style={{
                    borderColor: fac.tagBorder,
                    backgroundColor: fac.tagBg,
                    color: fac.tagText
                  }}>
                    {fac.subject}
                  </div>
                  <h3>{fac.name}</h3>
                  <p>{fac.desc}</p>
                  <button className="pl-fac-know-more-btn">Know more</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
