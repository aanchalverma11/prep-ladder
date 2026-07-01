const fs = require('fs');
const path = require('path');

const entCssPath = path.join(__dirname, '..', 'src', 'components', 'ENT.css');
const surgeryCssPath = path.join(__dirname, '..', 'src', 'components', 'Surgery.css');
const anaCssPath = path.join(__dirname, '..', 'src', 'components', 'Anaesthesia.css');

// 1. Read ENT.css and replace only "pl-ent" with "pl-anaesthesia"
let cssContent = fs.readFileSync(entCssPath, 'utf8');
cssContent = cssContent.replace(/pl-ent/g, 'pl-anaesthesia');

// 2. Read Surgery.css and extract the Recent Articles Section styles
const surgeryCss = fs.readFileSync(surgeryCssPath, 'utf8');
const articleStylesStart = surgeryCss.indexOf('/* Recent Articles Section */');
if (articleStylesStart !== -1) {
  let articleStyles = surgeryCss.substring(articleStylesStart);
  // Replace pl-surgery with pl-anaesthesia
  articleStyles = articleStyles.replace(/pl-surgery/g, 'pl-anaesthesia');
  cssContent += '\n\n' + articleStyles;
  console.log('Appended articles styles from Surgery.css');
} else {
  console.log('Error: Could not find Recent Articles Section in Surgery.css');
}

// 3. Write back to Anaesthesia.css
fs.writeFileSync(anaCssPath, cssContent, 'utf8');
console.log('Anaesthesia.css successfully regenerated and written.');
