import fs from 'fs';
import path from 'path';

async function main() {
  try {
    const html = fs.readFileSync('scratch/page.html', 'utf8');
    const cssRegex = /href="([^"]+?\.css)"/g;
    const cssUrls = [];
    let match;
    while ((match = cssRegex.exec(html)) !== null) {
      cssUrls.push(match[1]);
    }
    
    for (let url of cssUrls) {
      if (url.startsWith('/')) {
        url = 'https://www.prepladder.com' + url;
      }
      
      const res = await fetch(url);
      const cssText = await res.text();
      
      // Search for rules containing "sticky"
      const regex = /[^\{\}]+?\{[^\{\}]*?sticky[^\{\}]*?\}/gi;
      let m;
      const matches = [];
      while ((m = regex.exec(cssText)) !== null) {
        matches.push(m[0].trim());
      }
      if (matches.length > 0) {
        console.log(`\nFound "sticky" selectors in ${path.basename(url)}:\n`, matches.join('\n\n'));
      }
    }
  } catch (err) {
    console.error(err);
  }
}
main();
