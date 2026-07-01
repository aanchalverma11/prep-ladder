const fs = require('fs');

let jsx = fs.readFileSync('src/components/PSM.jsx', 'utf8');
jsx = jsx.replace(/ForensicMedicine/g, 'PSM');
jsx = jsx.replace(/pl-forensic-/g, 'pl-psm-');
jsx = jsx.replace(/docImage from '\.\.\/assets\/spex\.jpg'/g, "docImage from '../assets/lady.jpg'");
jsx = jsx.replace(/Dr\. Akhilesh Raj/g, 'Dr. Neha Taneja');
jsx = jsx.replace(/Dr\.Akhilesh Raj/g, 'Dr. Neha Taneja');
jsx = jsx.replace(/India's Best Forensic Medicine <br \/>\s*Online Course/g, "India's Best PSM <br />\n                Online Course");
jsx = jsx.replace(/He is the author of Review of Forensic Medicine and Toxicology for PGMEE\./g, 'A highly qualified doctor and medical professional, she is a recipient of the Edward Kennedy Memorial Award for outstanding research work in Cancer Epidemiology.');
jsx = jsx.replace(/Curated by our leading expert - Dr\. Neha Taneja/g, "Curated with India's foremost expert - Dr. Neha Taneja");
jsx = jsx.replace(/96% NEET PG 2022 strike rate/g, '96% NEET PG 2023 strike rate');
jsx = jsx.replace(/boost your Forensic Medicine preparation/g, 'boost your PSM preparation');
jsx = jsx.replace(/90\+ Forensic Medicine Video Lectures/g, '70+ PSM Video Lectures');
jsx = jsx.replace(/80\+ Forensic Medicine Practice Questions/g, '80+ PSM Practice Questions');
jsx = jsx.replace(/60\+ Forensic Medicine Treasures/g, '70+ PSM Treasures');
jsx = jsx.replace(/240\+ Forensic Medicine Concept Pages/g, '340+ PSM Concept Pages');

fs.writeFileSync('src/components/PSM.jsx', jsx);

let css = fs.readFileSync('src/components/PSM.css', 'utf8');
css = css.replace(/pl-forensic-/g, 'pl-psm-');
fs.writeFileSync('src/components/PSM.css', css);
