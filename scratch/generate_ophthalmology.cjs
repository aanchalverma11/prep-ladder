const fs = require('fs');
const path = require('path');

// 1. Read PSM.css and replace 'psm' with 'ophthalmology' (case-insensitive where needed, but classes are lowercase)
const psmCssPath = path.join(__dirname, '..', 'src', 'components', 'PSM.css');
const ophCssPath = path.join(__dirname, '..', 'src', 'components', 'Ophthalmology.css');
let cssContent = fs.readFileSync(psmCssPath, 'utf8');
cssContent = cssContent.replace(/pl-psm/g, 'pl-ophthalmology');
cssContent = cssContent.replace(/psm/g, 'ophthalmology');
cssContent = cssContent.replace(/PSM/g, 'Ophthalmology');
fs.writeFileSync(ophCssPath, cssContent);
console.log('Ophthalmology.css created.');

// 2. Read PSM.jsx and adapt it for Ophthalmology
const psmJsxPath = path.join(__dirname, '..', 'src', 'components', 'PSM.jsx');
const ophJsxPath = path.join(__dirname, '..', 'src', 'components', 'Ophthalmology.jsx');
let jsxContent = fs.readFileSync(psmJsxPath, 'utf8');

// Replace stylesheet and component name
jsxContent = jsxContent.replace('import "./PSM.css";', 'import "./Ophthalmology.css";');
jsxContent = jsxContent.replace('export default function PSM()', 'export default function Ophthalmology()');
jsxContent = jsxContent.replace('className="pl-psm-page"', 'className="pl-ophthalmology-page"');
jsxContent = jsxContent.replace(/pl-psm/g, 'pl-ophthalmology');

// Replace Hero content
jsxContent = jsxContent.replace("Curated with India's foremost expert - Dr. Neha Taneja", "Created by India's leading specialist - Dr. Manish Chhabra");
jsxContent = jsxContent.replace(`India's Best PSM <br />
                Online Course`, `India's Best Ophthalmology <br />
                Online Course`);
jsxContent = jsxContent.replace("A highly qualified doctor and medical professional, she is a recipient of the Edward Kennedy Memorial Award for outstanding research work in Cancer Epidemiology.", "He is the senior faculty for the Department of Ophthalmology at Delhi Academy of Medical Sciences (DAMS) .");
jsxContent = jsxContent.replace('src="https://image.prepladder.com/content/g0yvqOpT7zrmA1dnUCcI1744870956.png"', 'src="https://image.prepladder.com/content/5VrIph9e3AF11cMZeY1L1775898663.png"');
jsxContent = jsxContent.replace('alt="Dr. Neha Taneja"', 'alt="Dr. Manish Chhabra"');
jsxContent = jsxContent.replace('<span>Dr. Neha Taneja</span>', '<span>Dr. Manish Chhabra</span>');

// Replace Stats
jsxContent = jsxContent.replace('Hours Video Playback', 'Hours Videos Watched');
jsxContent = jsxContent.replace('NEET PG 2022 strike rate', 'NEET-PG 2023 Strike Rate');

// Replace "Let the Numbers Do the Talking" section subtitle
jsxContent = jsxContent.replace('boost your PSM preparation.', 'boost your Ophthalmology preparation.');

// Replace Features List
jsxContent = jsxContent.replace('70+ PSM Video Lectures', '60+ Ophthalmology Video Lectures');
jsxContent = jsxContent.replace('80+ PSM Practice Questions', '40+ Ophthalmology Practice Questions');
jsxContent = jsxContent.replace('70+ PSM Treasures', '80+ Ophthalmology Treasures');
jsxContent = jsxContent.replace('340+ PSM Concept Pages', '220+ Ophthalmology Concept Pages');

// Replace "Why is PSM important?" section
jsxContent = jsxContent.replace('Why is PSM important?', 'Why is Ophthalmology important?');
jsxContent = jsxContent.replace("PSM is one such subject that is not only vast but is also one of the most important from the exam point of view. The subject demands time and regular revision as it makes a major portion of the NEET {showMoreImportance ? (\n                  <span>\n                    PG and other medical licensing exams. A strong foundation in PSM is crucial for understanding clinical subjects like Medicine, Pediatrics, Anesthesia, and Pharmacology. By mastering the physiological systems, regulations, and compensatory mechanisms, aspirants can easily solve clinical scenario-based questions that are frequently asked in the exams.\n                  </span>\n                ) : null}", "Ophthalmology is one such subject that is not only vast but is also one of the most important from the exam point of view. The subject demands time and regular revision as it makes a major portion of the NEET {showMoreImportance ? (\n                  <span>\n                    PG and other medical licensing exams. A strong foundation in Ophthalmology is crucial for understanding clinical subjects like Medicine, Pediatrics, Anesthesia, and Pharmacology. By mastering the physiological systems, regulations, and compensatory mechanisms, aspirants can easily solve clinical scenario-based questions that are frequently asked in the exams.\n                  </span>\n                ) : null}");

fs.writeFileSync(ophJsxPath, jsxContent);
console.log('Ophthalmology.jsx created.');
