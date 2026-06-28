import fs from 'fs';
import path from 'path';

async function main() {
  try {
    const html = fs.readFileSync('scratch/page.html', 'utf8');
    
    // Find all stylesheet links
    const cssRegex = /href="([^"]+?\.css)"/g;
    const cssUrls = [];
    let match;
    while ((match = cssRegex.exec(html)) !== null) {
      cssUrls.push(match[1]);
    }
    
    console.log("Found CSS URLs:", cssUrls);
    
    for (let url of cssUrls) {
      if (url.startsWith('/')) {
        url = 'https://www.prepladder.com' + url;
      }
      
      console.log("Fetching CSS from:", url);
      const res = await fetch(url);
      const cssText = await res.text();
      
      // Let's search for classes like bannerVXI, numbers, faculty in the CSS
      const classes = ['bannerVXI', 'bannerFaculty', 'numbersParent'];
      for (const cls of classes) {
        const regex = new RegExp(`[^\\}]*?${cls}[^\\{]*?\\{[^\\}]*?\\}`, 'gi');
        let m;
        const matchesFound = [];
        while ((m = regex.exec(cssText)) !== null) {
          matchesFound.push(m[0].trim());
        }
        if (matchesFound.length > 0) {
          console.log(`\nMatches for "${cls}" in ${path.basename(url)}:\n`, matchesFound.join('\n\n'));
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
}
main();
