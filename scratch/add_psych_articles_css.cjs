const fs = require('fs');
const path = require('path');

const surgeryCssPath = path.join(__dirname, '..', 'src', 'components', 'Surgery.css');
const psychCssPath = path.join(__dirname, '..', 'src', 'components', 'Psychiatry.css');

const surgeryCss = fs.readFileSync(surgeryCssPath, 'utf8');
let psychCss = fs.readFileSync(psychCssPath, 'utf8');

const articleStylesStart = surgeryCss.indexOf('/* Recent Articles Section */');
if (articleStylesStart !== -1) {
  let articleStyles = surgeryCss.substring(articleStylesStart);
  articleStyles = articleStyles.replace(/pl-surgery/g, 'pl-psychiatry');
  psychCss += '\n\n' + articleStyles;
  fs.writeFileSync(psychCssPath, psychCss, 'utf8');
  console.log('Appended articles styles to Psychiatry.css');
} else {
  console.log('Error: Could not find Recent Articles Section in Surgery.css');
}
