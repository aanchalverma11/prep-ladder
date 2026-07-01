const fs = require('fs');
const path = require('path');

const entCssPath = path.join(__dirname, '..', 'src', 'components', 'ENT.css');
const dermCssPath = path.join(__dirname, '..', 'src', 'components', 'Dermatology.css');

// 1. Generate Dermatology.css from ENT.css (replacing pl-ent with pl-dermatology)
let cssContent = fs.readFileSync(entCssPath, 'utf8');
cssContent = cssContent.replace(/pl-ent/g, 'pl-dermatology');
fs.writeFileSync(dermCssPath, cssContent, 'utf8');
console.log('Dermatology.css created.');

// 2. Adapt ENT.jsx for Dermatology
const entJsxPath = path.join(__dirname, '..', 'src', 'components', 'ENT.jsx');
const dermJsxPath = path.join(__dirname, '..', 'src', 'components', 'Dermatology.jsx');
let jsxContent = fs.readFileSync(entJsxPath, 'utf8');

// Replace stylesheet and component name
jsxContent = jsxContent.replace('import "./ENT.css";', 'import "./Dermatology.css";');
jsxContent = jsxContent.replace('export default function ENT()', 'export default function Dermatology()');
jsxContent = jsxContent.replace('className="pl-ent-page"', 'className="pl-dermatology-page"');
jsxContent = jsxContent.replace(/pl-ent/g, 'pl-dermatology');

// Replace Hero content
jsxContent = jsxContent.replace("Developed by India's leading specialist Dr. Vyshnavi Bommakanti", "Designed by our Dermatology Expert - Dr. Khushbu Mahajan");
jsxContent = jsxContent.replace(`India's Best ENT <br />
                Online Course`, `The Finest Dermatology <br />
                Online Course`);
jsxContent = jsxContent.replace("She a full time ENT surgeon by profession, an educator by passion and researcher by heart.", "A renowned Dermatology educator with more than 30 publications and 5 books to her credit.");
jsxContent = jsxContent.replace('src="https://image.prepladder.com/content/3UeWMAqScDIuH6Wi18301744870971.png"', 'src="https://image.prepladder.com/content/W95L8RUXUvN8P1lHruX01744870932.png"');
jsxContent = jsxContent.replace('alt="Dr. Vyshnavi Bommakanti"', 'alt="Dr.Khushbu Mahajan"');
jsxContent = jsxContent.replace('<span>Dr. Vyshnavi Bommakanti</span>', '<span>Dr.Khushbu Mahajan</span>');

// Replace Features Section subtitle
jsxContent = jsxContent.replace('Get the best-in-class & comprehensive study material to boost your ENT preparation.', 'Get the best-in-class & comprehensive study material to boost your Dermatology and Venereology preparation.');

// Replace Features List
jsxContent = jsxContent.replace('40+ ENT Video Lectures', '70+ Dermatology Video Lectures');
jsxContent = jsxContent.replace('30+ ENT Practice Questions', '30+ Dermatology Practice Questions');
jsxContent = jsxContent.replace('70+ ENT Treasures', '80+ Dermatology Treasures');
jsxContent = jsxContent.replace('220+ ENT Concept Pages', '330+ Dermatology Concept Pages');

// Replace Importance heading and content
jsxContent = jsxContent.replace('Why is PSM important?', 'Why is Dermatology important?');
jsxContent = jsxContent.replace("ENT is one such subject that is not only vast but is also one of the most important from the exam point of view. The subject demands time and regular revision as it makes a major portion of the NEET {showMoreImportance ? (\n                  <span>\n                    PG and other medical licensing exams. A strong foundation in ENT is crucial for understanding clinical subjects like Medicine, Pediatrics, Anesthesia, and Pharmacology. By mastering the physiological systems, regulations, and compensatory mechanisms, aspirants can easily solve clinical scenario-based questions that are frequently asked in the exams.\n                  </span>\n                ) : null}", "Dermatology is a highly scoring and relatively concise subject for medical post-graduate exams. Having a strong foundation in dermatology and sexually transmitted infections is crucial for clinical diagnosis and exam preparation. {showMoreImportance ? (\n                  <span>\n                    The subject features high-yield visual questions related to skin lesions, syndromes, and therapeutic modalities. By understanding basic pathology, infectious diseases, and clinical manifestations, aspirants can easily master all related questions.\n                  </span>\n                ) : null}");

fs.writeFileSync(dermJsxPath, jsxContent);
console.log('Dermatology.jsx created.');
