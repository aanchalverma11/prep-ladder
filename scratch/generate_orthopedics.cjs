const fs = require('fs');
const path = require('path');

const entCssPath = path.join(__dirname, '..', 'src', 'components', 'ENT.css');
const surgeryCssPath = path.join(__dirname, '..', 'src', 'components', 'Surgery.css');
const orthoCssPath = path.join(__dirname, '..', 'src', 'components', 'Orthopedics.css');

// 1. Generate Orthopedics.css from ENT.css (replacing pl-ent with pl-orthopedics)
let cssContent = fs.readFileSync(entCssPath, 'utf8');
cssContent = cssContent.replace(/pl-ent/g, 'pl-orthopedics');

// Appending Recent Articles Section styles from Surgery.css
const surgeryCss = fs.readFileSync(surgeryCssPath, 'utf8');
const articleStylesStart = surgeryCss.indexOf('/* Recent Articles Section */');
if (articleStylesStart !== -1) {
  let articleStyles = surgeryCss.substring(articleStylesStart);
  articleStyles = articleStyles.replace(/pl-surgery/g, 'pl-orthopedics');
  cssContent += '\n\n' + articleStyles;
}
fs.writeFileSync(orthoCssPath, cssContent, 'utf8');
console.log('Orthopedics.css created.');

// 2. Adapt ENT.jsx for Orthopedics
const entJsxPath = path.join(__dirname, '..', 'src', 'components', 'ENT.jsx');
const orthoJsxPath = path.join(__dirname, '..', 'src', 'components', 'Orthopedics.jsx');
let jsxContent = fs.readFileSync(entJsxPath, 'utf8');

// Replace stylesheet and component name
jsxContent = jsxContent.replace('import "./ENT.css";', 'import "./Orthopedics.css";');
jsxContent = jsxContent.replace('export default function ENT()', 'export default function Orthopedics()');
jsxContent = jsxContent.replace('className="pl-ent-page"', 'className="pl-orthopedics-page"');
jsxContent = jsxContent.replace(/pl-ent/g, 'pl-orthopedics');

// Insert ARTICLE_ITEMS at the top before DREAMER_DATA
const articleItemsDef = `const ARTICLE_ITEMS = [
  {
    title: "Orthopedics NEET PG Image-Based Preparation",
    desc: "Greenstick FractureGreenstick fracture-only seen in children before epiphysial...",
    date: "Jun 24 2026",
    link: "#"
  },
  {
    title: "Volkmann's Ischemia : Clinical Features, Classification &...",
    desc: "Get ready to boost your Orthopedics preparation by learning everything abou...",
    date: "Mar 19 2026",
    link: "#"
  },
  {
    title: "Important Topics in Orthopedics for NEET-PG 2026",
    desc: "After sharing the important topics for various subjects like...",
    date: "Feb 03 2026",
    link: "#"
  }
];

const DREAMER_DATA = {`;

jsxContent = jsxContent.replace('const DREAMER_DATA = {', articleItemsDef);

// Replace Hero content
jsxContent = jsxContent.replace("Developed by India's leading specialist Dr. Vyshnavi Bommakanti", "Crafted by the Orthopedics guru - Dr. P.S.T. Jambukeswaran");
jsxContent = jsxContent.replace(`India's Best ENT <br />
                Online Course`, `India's Best Orthopedics <br />
                Online Course`);
jsxContent = jsxContent.replace("She a full time ENT surgeon by profession, an educator by passion and researcher by heart.", "He is currently serving as the Senior Assistant professor for the department of Orthopedics, GMC and ESI Hospital, Coimbatore, Tamil Nadu.");
jsxContent = jsxContent.replace('src="https://image.prepladder.com/content/3UeWMAqScDIuH6Wi18301744870971.png"', 'src="https://image.prepladder.com/content/5xgCRfx0yF3VxZTx5kSx1744870944.png"');
jsxContent = jsxContent.replace('alt="Dr. Vyshnavi Bommakanti"', 'alt="Dr. Jambukeswaran"');
jsxContent = jsxContent.replace('<span>Dr. Vyshnavi Bommakanti</span>', '<span>Dr. Jambukeswaran</span>');

// Replace Features Section subtitle
jsxContent = jsxContent.replace('boost your ENT preparation.', 'boost your Orthopedics preparation.');

// Replace Features List
jsxContent = jsxContent.replace('40+ ENT Video Lectures', '10+ Orthopedics Video Lectures');
jsxContent = jsxContent.replace('30+ ENT Practice Questions', '20+ Orthopedics Practice Questions');
jsxContent = jsxContent.replace('70+ ENT Treasures', '110+ Orthopedics Treasures');
jsxContent = jsxContent.replace('220+ ENT Concept Pages', '180+ Orthopedics Concept Pages');

// Insert Recent Articles Section before Importance section
const articlesHtml = `      {/* Recent Articles Section */}
      <section className="pl-orthopedics-articles">
        <div className="pl-orthopedics-container">
          <div className="pl-orthopedics-articles__header">
            <h2 className="pl-orthopedics-articles__title">Recent NEET PG Anesthesia Articles</h2>
            <p className="pl-orthopedics-articles__subtitle">Stay updated on everything related to NEET PG Orthopedics preparation</p>
          </div>
          <div className="pl-orthopedics-articles__grid">
            {ARTICLE_ITEMS.map((article, idx) => (
              <div key={idx} className="pl-orthopedics-article-card">
                <h3 className="pl-orthopedics-article-card__title">{article.title}</h3>
                <p className="pl-orthopedics-article-card__desc">{article.desc}</p>
                <div className="pl-orthopedics-article-card__footer">
                  <a href={article.link} className="pl-orthopedics-article-card__readmore">Read More</a>
                  <span className="pl-orthopedics-article-card__date">{article.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why is ENT important? */}
      <section className="pl-orthopedics-importance">`;

jsxContent = jsxContent.replace(`      {/* Why is ENT important? */}
      <section className="pl-orthopedics-importance">`, articlesHtml);

// Replace Importance heading and content
jsxContent = jsxContent.replace('Why is PSM important?', 'Why is Orthopedics important?');
jsxContent = jsxContent.replace("ENT is one such subject that is not only vast but is also one of the most important from the exam point of view. The subject demands time and regular revision as it makes a major portion of the NEET {showMoreImportance ? (\n                  <span>\n                    PG and other medical licensing exams. A strong foundation in ENT is crucial for understanding clinical subjects like Medicine, Pediatrics, Anesthesia, and Pharmacology. By mastering the physiological systems, regulations, and compensatory mechanisms, aspirants can easily solve clinical scenario-based questions that are frequently asked in the exams.\n                  </span>\n                ) : null}", "With effective time management and a well-thought-out preparation strategy students can score high marks in this subject. Orthopedics is considered one of the shorter subjects and usually has 5-8 mark {showMoreImportance ? (\n                  <span>\n                    questions in the exam. A strong foundation in Orthopedics is crucial for understanding clinical subjects like surgery and physical medicine. By mastering the diagnostic principles, fracture classifications, and management approaches, aspirants can easily solve clinical scenario-based questions.\n                  </span>\n                ) : null}");

fs.writeFileSync(orthoJsxPath, jsxContent);
console.log('Orthopedics.jsx created.');
