const fs = require('fs');
const path = require('path');

const surgeryCssPath = path.join(__dirname, '..', 'src', 'components', 'Surgery.css');
const dermCssPath = path.join(__dirname, '..', 'src', 'components', 'Dermatology.css');

const surgeryCss = fs.readFileSync(surgeryCssPath, 'utf8');
let dermCss = fs.readFileSync(dermCssPath, 'utf8');

const articleStylesStart = surgeryCss.indexOf('/* Recent Articles Section */');
if (articleStylesStart !== -1) {
  let articleStyles = surgeryCss.substring(articleStylesStart);
  articleStyles = articleStyles.replace(/pl-surgery/g, 'pl-dermatology');
  dermCss += '\n\n' + articleStyles;
  fs.writeFileSync(dermCssPath, dermCss, 'utf8');
  console.log('Appended articles styles to Dermatology.css');
} else {
  console.log('Error: Could not find Recent Articles Section in Surgery.css');
}
