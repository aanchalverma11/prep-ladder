import fs from 'fs';

function main() {
  const html = fs.readFileSync('scratch/page.html', 'utf8');
  const index = html.indexOf('xfm1TboYanZfgV1SMT6U1775019070.png');
  if (index !== -1) {
    console.log("Found image index:", index);
    const start = Math.max(0, index - 300);
    const end = Math.min(html.length, index + 350);
    console.log(html.substring(start, end).replace(/\s+/g, ' '));
  } else {
    console.log("Image not found in page.html");
  }
}

main();
