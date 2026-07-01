const fs = require('fs');
const path = require('path');

// 1. Read PSM.css and replace 'psm' with 'ent' (case-insensitive where needed, but classes are lowercase)
const psmCssPath = path.join(__dirname, '..', 'src', 'components', 'PSM.css');
const entCssPath = path.join(__dirname, '..', 'src', 'components', 'ENT.css');
let cssContent = fs.readFileSync(psmCssPath, 'utf8');
cssContent = cssContent.replace(/pl-psm/g, 'pl-ent');
cssContent = cssContent.replace(/psm/g, 'ent');
cssContent = cssContent.replace(/PSM/g, 'ENT');
fs.writeFileSync(entCssPath, cssContent);
console.log('ENT.css created.');

// 2. Read PSM.jsx and adapt it for ENT
const psmJsxPath = path.join(__dirname, '..', 'src', 'components', 'PSM.jsx');
const entJsxPath = path.join(__dirname, '..', 'src', 'components', 'ENT.jsx');
let jsxContent = fs.readFileSync(psmJsxPath, 'utf8');

// Replace stylesheet and component name
jsxContent = jsxContent.replace('import "./PSM.css";', 'import "./ENT.css";');
jsxContent = jsxContent.replace('export default function PSM()', 'export default function ENT()');
jsxContent = jsxContent.replace('className="pl-psm-page"', 'className="pl-ent-page"');
jsxContent = jsxContent.replace(/pl-psm/g, 'pl-ent');

// Replace Hero content
jsxContent = jsxContent.replace("Curated with India's foremost expert - Dr. Neha Taneja", "Developed by India's leading specialist Dr. Vyshnavi Bommakanti");
jsxContent = jsxContent.replace("India's Best PSM <br />\n                Online Course", "India's Best ENT <br />\n                Online Course");
jsxContent = jsxContent.replace("A highly qualified doctor and medical professional, she is a recipient of the Edward Kennedy Memorial Award for outstanding research work in Cancer Epidemiology.", "She a full time ENT surgeon by profession, an educator by passion and researcher by heart.");
jsxContent = jsxContent.replace('src="https://image.prepladder.com/content/g0yvqOpT7zrmA1dnUCcI1744870956.png"', 'src="https://image.prepladder.com/content/ENT-vyshnavi-bommakanti.webp"');
jsxContent = jsxContent.replace('alt="Dr. Neha Taneja"', 'alt="Dr. Vyshnavi Bommakanti"');
jsxContent = jsxContent.replace('<span>Dr. Neha Taneja</span>', '<span>Dr. Vyshnavi Bommakanti</span>');

// Replace Stats
jsxContent = jsxContent.replace('Hours Video Playback', 'Hours Videos Watched');
jsxContent = jsxContent.replace('NEET PG 2022 strike rate', 'NEET-PG 2023 Strike Rate');

// Replace "Let the Numbers Do the Talking" section subtitle
jsxContent = jsxContent.replace('boost your PSM preparation.', 'boost your ENT preparation.');

// Replace Features List
jsxContent = jsxContent.replace('70+ PSM Video Lectures', '40+ ENT Video Lectures');
jsxContent = jsxContent.replace('80+ PSM Practice Questions', '30+ ENT Practice Questions');
jsxContent = jsxContent.replace('70+ PSM Treasures', '70+ ENT Treasures');
jsxContent = jsxContent.replace('340+ PSM Concept Pages', '220+ ENT Concept Pages');

// Replace "Why is PSM important?" section
jsxContent = jsxContent.replace('Why is PSM important?', 'Why is ENT important?');
jsxContent = jsxContent.replace("PSM is one such subject that is not only vast but is also one of the most important from the exam point of view. The subject demands time and regular revision as it makes a major portion of the NEET {showMoreImportance ? (\n                  <span>\n                    PG and other medical licensing exams. A strong foundation in PSM is crucial for understanding clinical subjects like Medicine, Pediatrics, Anesthesia, and Pharmacology. By mastering the physiological systems, regulations, and compensatory mechanisms, aspirants can easily solve clinical scenario-based questions that are frequently asked in the exams.\n                  </span>\n                ) : null}", "ENT is one such subject that is not only vast but is also one of the most important from the exam point of view. The subject demands time and regular revision as it makes a major portion of the NEET {showMoreImportance ? (\n                  <span>\n                    PG and other medical licensing exams. A strong foundation in ENT is crucial for understanding clinical subjects like Medicine, Pediatrics, Anesthesia, and Pharmacology. By mastering the physiological systems, regulations, and compensatory mechanisms, aspirants can easily solve clinical scenario-based questions that are frequently asked in the exams.\n                  </span>\n                ) : null}");

fs.writeFileSync(entJsxPath, jsxContent);
console.log('ENT.jsx created.');
