const fs = require('fs');
const path = require('path');

// 1. Read PSM.css and replace 'psm' with 'gyn-obs' (case-insensitive where needed, but classes are lowercase)
const psmCssPath = path.join(__dirname, '..', 'src', 'components', 'PSM.css');
const gynCssPath = path.join(__dirname, '..', 'src', 'components', 'GynaecologyObstetrics.css');
let cssContent = fs.readFileSync(psmCssPath, 'utf8');
cssContent = cssContent.replace(/pl-psm/g, 'pl-gyn-obs');
cssContent = cssContent.replace(/psm/g, 'gyn-obs');
cssContent = cssContent.replace(/PSM/g, 'GynaecologyObstetrics');

// Append Articles styling to GynaecologyObstetrics.css
const articlesCss = `
/* Recent Articles Section */
.pl-gyn-obs-articles {
  padding: 80px 0;
  background-color: #fff;
}

.pl-gyn-obs-articles__header {
  margin-bottom: 40px;
  text-align: left;
}

.pl-gyn-obs-articles__title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1e1b4b;
  margin-bottom: 8px;
}

.pl-gyn-obs-articles__subtitle {
  font-size: 1.1rem;
  color: #6b7280;
}

.pl-gyn-obs-articles__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 991px) {
  .pl-gyn-obs-articles__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .pl-gyn-obs-articles__grid {
    grid-template-columns: 1fr;
  }
}

.pl-gyn-obs-article-card {
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.pl-gyn-obs-article-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e1b4b;
  margin-bottom: 12px;
  line-height: 1.4;
  height: 56px; /* fixed height for alignment */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.pl-gyn-obs-article-card__desc {
  font-size: 0.95rem;
  color: #4b5563;
  margin-bottom: 24px;
  line-height: 1.5;
  flex-grow: 1;
}

.pl-gyn-obs-article-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f3f4f6;
  padding-top: 16px;
  margin-top: auto;
}

.pl-gyn-obs-article-card__readmore {
  font-size: 0.95rem;
  font-weight: 600;
  color: #2563eb;
  text-decoration: none;
}

.pl-gyn-obs-article-card__readmore:hover {
  text-decoration: underline;
}

.pl-gyn-obs-article-card__date {
  font-size: 0.85rem;
  color: #9ca3af;
}
`;
fs.writeFileSync(gynCssPath, cssContent + articlesCss);
console.log('GynaecologyObstetrics.css created.');

// 2. Read PSM.jsx and adapt it for Gynaecology & Obstetrics
const psmJsxPath = path.join(__dirname, '..', 'src', 'components', 'PSM.jsx');
const gynJsxPath = path.join(__dirname, '..', 'src', 'components', 'GynaecologyObstetrics.jsx');
let jsxContent = fs.readFileSync(psmJsxPath, 'utf8');

// Replace stylesheet and component name
jsxContent = jsxContent.replace('import "./PSM.css";', 'import "./GynaecologyObstetrics.css";');
jsxContent = jsxContent.replace('export default function PSM()', 'export default function GynaecologyObstetrics()');
jsxContent = jsxContent.replace('className="pl-psm-page"', 'className="pl-gyn-obs-page"');
jsxContent = jsxContent.replace(/pl-psm/g, 'pl-gyn-obs');

// Replace Hero content
jsxContent = jsxContent.replace("Curated with India's foremost expert - Dr. Neha Taneja", "Crafted by OBG veteran - Dr. Shonali Chandra");
jsxContent = jsxContent.replace(`India's Best PSM <br />
                Online Course`, `India's Best Gynaecology & <br />
                Obstetrics Online Course`);
jsxContent = jsxContent.replace("A highly qualified doctor and medical professional, she is a recipient of the Edward Kennedy Memorial Award for outstanding research work in Cancer Epidemiology.", "Renowned professional with a stellar educational background, she is the ideal faculty to help you ace your Gynaecology & Obstetrics paper.");
jsxContent = jsxContent.replace('src="https://image.prepladder.com/content/g0yvqOpT7zrmA1dnUCcI1744870956.png"', 'src="https://image.prepladder.com/content/7ubEcLj5rcYzIotRcGfY1714296815.png"');
jsxContent = jsxContent.replace('alt="Dr. Neha Taneja"', 'alt="Dr. Shonali Chandra"');
jsxContent = jsxContent.replace('<span>Dr. Neha Taneja</span>', '<span>Dr. Shonali Chandra</span>');

// Replace Stats
jsxContent = jsxContent.replace('Hours Video Playback', 'Hours Videos Watched');
jsxContent = jsxContent.replace('NEET PG 2022 strike rate', 'NEET-PG 2023 Strike Rate');

// Replace "Let the Numbers Do the Talking" section subtitle
jsxContent = jsxContent.replace('boost your PSM preparation.', 'boost your Obstetrics and gynaecology preparation.');

// Replace Features List
jsxContent = jsxContent.replace('70+ PSM Video Lectures', '110+ Gynaecology & Obstetrics Video Lectures');
jsxContent = jsxContent.replace('80+ PSM Practice Questions', '40+ Gynaecology & Obstetrics Practice Questions');
jsxContent = jsxContent.replace('70+ PSM Treasures', '100+ Gynaecology & Obstetrics Treasures');
jsxContent = jsxContent.replace('340+ PSM Concept Pages', '700+ Gynaecology & Obstetrics Concept Pages');

// Replace "Why is PSM important?" section
jsxContent = jsxContent.replace('Why is PSM important?', 'Why is Gynaecology & Obstetrics important?');
jsxContent = jsxContent.replace("PSM is one such subject that is not only vast but is also one of the most important from the exam point of view. The subject demands time and regular revision as it makes a major portion of the NEET {showMoreImportance ? (\n                  <span>\n                    PG and other medical licensing exams. A strong foundation in PSM is crucial for understanding clinical subjects like Medicine, Pediatrics, Anesthesia, and Pharmacology. By mastering the physiological systems, regulations, and compensatory mechanisms, aspirants can easily solve clinical scenario-based questions that are frequently asked in the exams.\n                  </span>\n                ) : null}", "Gynaecology and Obstetrics is a highly scoring subject. In the NEET-PG exam, there are around 15 questions asked from Gynaecology alone. {showMoreImportance ? (\n                  <span>\n                    Students who want to crack this paper will need to work smart w\n                  </span>\n                ) : null}");

// Insert Articles data and rendering logic
const articlesData = `
const ARTICLE_ITEMS = [
  {
    title: "Obstetrics and Gynecology NEET PG - Ultrasound",
    desc: "Key concepts, indications, and important imaging findingsWe will explore a clinica...",
    date: "Jun 06 2026",
    link: "#"
  },
  {
    title: "Vulvodynia: Causes, Symptoms, Diagnosis, Treatment and...",
    desc: "Vulvodynia is the term for persistent pain or discomfort in the area surrounding th...",
    date: "Mar 18 2026",
    link: "#"
  },
  {
    title: "Montgomery Tubercles: Causes, Symptoms, Cyst and Treatment",
    desc: "Montgomery tubercles are the little bumps that you may detect surrounding...",
    date: "Mar 14 2026",
    link: "#"
  }
];
`;

// Insert after imports or variables
jsxContent = jsxContent.replace('const DREAMER_DATA = {', articlesData + '\nconst DREAMER_DATA = {');

// Insert Articles JSX before the importance section
const articlesJsx = `
      {/* Recent Articles Section */}
      <section className="pl-gyn-obs-articles">
        <div className="pl-gyn-obs-container">
          <div className="pl-gyn-obs-articles__header">
            <h2 className="pl-gyn-obs-articles__title">Recent NEET PG Gynaecology & Obstetrics Articles</h2>
            <p className="pl-gyn-obs-articles__subtitle">Stay updated on everything related to NEET PG Gynaecology & Obstetrics preparation</p>
          </div>
          <div className="pl-gyn-obs-articles__grid">
            {ARTICLE_ITEMS.map((article, idx) => (
              <div key={idx} className="pl-gyn-obs-article-card">
                <h3 className="pl-gyn-obs-article-card__title">{article.title}</h3>
                <p className="pl-gyn-obs-article-card__desc">{article.desc}</p>
                <div className="pl-gyn-obs-article-card__footer">
                  <a href={article.link} className="pl-gyn-obs-article-card__readmore">Read More</a>
                  <span className="pl-gyn-obs-article-card__date">{article.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
`;

jsxContent = jsxContent.replace('      {/* Why is Gynaecology & Obstetrics important? */}', articlesJsx + '\n      {/* Why is Gynaecology & Obstetrics important? */}');

fs.writeFileSync(gynJsxPath, jsxContent);
console.log('GynaecologyObstetrics.jsx created.');
