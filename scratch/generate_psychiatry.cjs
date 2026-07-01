const fs = require('fs');
const path = require('path');

const entCssPath = path.join(__dirname, '..', 'src', 'components', 'ENT.css');
const psychCssPath = path.join(__dirname, '..', 'src', 'components', 'Psychiatry.css');

// 1. Generate Psychiatry.css from ENT.css (replacing pl-ent with pl-psychiatry)
let cssContent = fs.readFileSync(entCssPath, 'utf8');
cssContent = cssContent.replace(/pl-ent/g, 'pl-psychiatry');
fs.writeFileSync(psychCssPath, cssContent, 'utf8');
console.log('Psychiatry.css created.');

// 2. Adapt ENT.jsx for Psychiatry
const entJsxPath = path.join(__dirname, '..', 'src', 'components', 'ENT.jsx');
const psychJsxPath = path.join(__dirname, '..', 'src', 'components', 'Psychiatry.jsx');
let jsxContent = fs.readFileSync(entJsxPath, 'utf8');

// Replace stylesheet and component name
jsxContent = jsxContent.replace('import "./ENT.css";', 'import "./Psychiatry.css";');
jsxContent = jsxContent.replace('export default function ENT()', 'export default function Psychiatry()');
jsxContent = jsxContent.replace('className="pl-ent-page"', 'className="pl-psychiatry-page"');
jsxContent = jsxContent.replace(/pl-ent/g, 'pl-psychiatry');

// Replace Hero content
jsxContent = jsxContent.replace("Developed by India's leading specialist Dr. Vyshnavi Bommakanti", "Designed by our Psychiatry Expert — Dr. Ankit Goel");
jsxContent = jsxContent.replace(`India's Best ENT <br />
                Online Course`, `Effective Online Course on <br />
                Psychiatry`);
jsxContent = jsxContent.replace("She a full time ENT surgeon by profession, an educator by passion and researcher by heart.", "A highly experienced and qualified Psychiatry expert who will make learning the subject easy and engaging.");
jsxContent = jsxContent.replace('src="https://image.prepladder.com/content/3UeWMAqScDIuH6Wi18301744870971.png"', 'src="https://image.prepladder.com/content/Lru0sWbMPQFPhzlATuDq1744870932.png"');
jsxContent = jsxContent.replace('alt="Dr. Vyshnavi Bommakanti"', 'alt="Dr. Ankit Goel"');
jsxContent = jsxContent.replace('<span>Dr. Vyshnavi Bommakanti</span>', '<span>Dr. Ankit Goel</span>');

// Replace Features Section subtitle
jsxContent = jsxContent.replace('boost your ENT preparation.', 'Access the most comprehensive and well-structured online course for Psychiatry and elevate your exam preparation.');
jsxContent = jsxContent.replace('Get the best-in-class & comprehensive study material to boost your ENT preparation.', 'Access the most comprehensive and well-structured online course for Psychiatry and elevate your exam preparation.');

// Replace Features List
jsxContent = jsxContent.replace('40+ ENT Video Lectures', '10+ Psychiatry Video Lectures');
jsxContent = jsxContent.replace('30+ ENT Practice Questions', '20+ Psychiatry Practice Questions');
jsxContent = jsxContent.replace('70+ ENT Treasures', '70+ Psychiatry Treasures');
jsxContent = jsxContent.replace('220+ ENT Concept Pages', '130+ Psychiatry Concept Pages');

// Replace Importance heading and content
jsxContent = jsxContent.replace('Why is PSM important?', 'Why is Psychiatry important?');
jsxContent = jsxContent.replace("ENT is one such subject that is not only vast but is also one of the most important from the exam point of view. The subject demands time and regular revision as it makes a major portion of the NEET {showMoreImportance ? (\n                  <span>\n                    PG and other medical licensing exams. A strong foundation in ENT is crucial for understanding clinical subjects like Medicine, Pediatrics, Anesthesia, and Pharmacology. By mastering the physiological systems, regulations, and compensatory mechanisms, aspirants can easily solve clinical scenario-based questions that are frequently asked in the exams.\n                  </span>\n                ) : null}", "Psychiatry is an essential subject for medical entrance exams like NEET PG and INI-CET. Understanding key psychiatric disorders, psychopharmacology, and diagnostic criteria is vital for scoring high in this clinical subject. {showMoreImportance ? (\n                  <span>\n                    A solid base in Psychiatry also helps in general practice and clinical scenario-based questions. By focusing on developmental milestones, mood disorders, schizophrenia, and therapeutic interventions, aspirants can tackle exam questions confidently.\n                  </span>\n                ) : null}");

fs.writeFileSync(psychJsxPath, jsxContent);
console.log('Psychiatry.jsx created.');
