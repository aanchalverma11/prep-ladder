const fs = require('fs');
let jsx = fs.readFileSync('src/components/PSM.jsx', 'utf8');
jsx = jsx.replace(/30\+ Forensic Medicine Practice Questions/g, '80+ PSM Practice Questions');
jsx = jsx.replace(/100\+ Forensic Medicine Treasures/g, '70+ PSM Treasures');
jsx = jsx.replace(/140\+ Forensic Medicine Concept Pages/g, '340+ PSM Concept Pages');
jsx = jsx.replace('<circle cx="12" cy="12" r="10"></circle>', '<rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>');
fs.writeFileSync('src/components/PSM.jsx', jsx);
