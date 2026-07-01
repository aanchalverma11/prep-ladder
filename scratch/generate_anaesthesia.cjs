const fs = require('fs');
const path = require('path');

// 1. Read ENT.css and replace 'pl-ent' with 'pl-anaesthesia' (case-insensitive where needed)
const entCssPath = path.join(__dirname, '..', 'src', 'components', 'ENT.css');
const anaCssPath = path.join(__dirname, '..', 'src', 'components', 'Anaesthesia.css');
let cssContent = fs.readFileSync(entCssPath, 'utf8');
cssContent = cssContent.replace(/pl-ent/g, 'pl-anaesthesia');
cssContent = cssContent.replace(/ent/g, 'anaesthesia');
cssContent = cssContent.replace(/ENT/g, 'Anaesthesia');
fs.writeFileSync(anaCssPath, cssContent);
console.log('Anaesthesia.css created.');

// 2. Read ENT.jsx and adapt it for Anaesthesia
const entJsxPath = path.join(__dirname, '..', 'src', 'components', 'ENT.jsx');
const anaJsxPath = path.join(__dirname, '..', 'src', 'components', 'Anaesthesia.jsx');
let jsxContent = fs.readFileSync(entJsxPath, 'utf8');

// Replace stylesheet and component name
jsxContent = jsxContent.replace('import "./ENT.css";', 'import "./Anaesthesia.css";');
jsxContent = jsxContent.replace('export default function ENT()', 'export default function Anaesthesia()');
jsxContent = jsxContent.replace('className="pl-ent-page"', 'className="pl-anaesthesia-page"');
jsxContent = jsxContent.replace(/pl-ent/g, 'pl-anaesthesia');

// Replace Hero content
jsxContent = jsxContent.replace("Developed by India's leading specialist Dr. Vyshnavi Bommakanti", "Crafted by India’s Leading Faculty - Dr. Mohammed Wajid Ali");
jsxContent = jsxContent.replace(`India's Best ENT <br />
                Online Course`, `India’s Best Anaesthesia <br />
                Online Course`);
jsxContent = jsxContent.replace("She a full time ENT surgeon by profession, an educator by passion and researcher by heart.", "Transforming the educational journey of anesthesia, Dr. Wajid Khan has helped countless aspirants achieve their dreams.");
jsxContent = jsxContent.replace('src="https://image.prepladder.com/content/3UeWMAqScDIuH6Wi18301744870971.png"', 'src="https://image.prepladder.com/content/UpkERpmR7Faa0pcwlFu91745218616.png"');
jsxContent = jsxContent.replace('alt="Dr. Vyshnavi Bommakanti"', 'alt="Dr. Mohammed Wajid Ali"');
jsxContent = jsxContent.replace('<span>Dr. Vyshnavi Bommakanti</span>', '<span>Dr. Mohammed Wajid Ali</span>');

// Replace Features Section subtitle
jsxContent = jsxContent.replace('boost your ENT preparation.', 'boost your Anaesthesia preparation.');

// Replace Features List
jsxContent = jsxContent.replace('40+ ENT Video Lectures', '-5+ Anaesthesia Video Lectures');
jsxContent = jsxContent.replace('30+ ENT Practice Questions', '205+ Anaesthesia Practice Questions');
jsxContent = jsxContent.replace('70+ ENT Treasures', '110+ Anaesthesia Treasures');
jsxContent = jsxContent.replace('220+ ENT Concept Pages', '-5+ Anaesthesia Concept Pages');

// Replace Importance section
jsxContent = jsxContent.replace('Why is PSM important?', 'Why is Anaesthesia important?');
jsxContent = jsxContent.replace("ENT is one such subject that is not only vast but is also one of the most important from the exam point of view. The subject demands time and regular revision as it makes a major portion of the NEET {showMoreImportance ? (\n                  <span>\n                    PG and other medical licensing exams. A strong foundation in ENT is crucial for understanding clinical subjects like Medicine, Pediatrics, Anesthesia, and Pharmacology. By mastering the physiological systems, regulations, and compensatory mechanisms, aspirants can easily solve clinical scenario-based questions that are frequently asked in the exams.\n                  </span>\n                ) : null}", "Anaesthesia is one such subject that is not only vast but is also one of the most important from the exam point of view. The subject demands time and regular revision as it makes a major portion of the NEET {showMoreImportance ? (\n                  <span>\n                    PG and other medical licensing exams. A strong foundation in Anaesthesia is crucial for understanding clinical subjects like Medicine, Pediatrics, and Pharmacology. By mastering the physiological systems, regulations, and compensatory mechanisms, aspirants can easily solve clinical scenario-based questions that are frequently asked in the exams.\n                  </span>\n                ) : null}");

fs.writeFileSync(anaJsxPath, jsxContent);
console.log('Anaesthesia.jsx created.');
