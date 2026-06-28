import fs from 'fs';

function main() {
  try {
    const html = fs.readFileSync('scratch/page.html', 'utf8');
    
    // Look for image source or alt containing faculty
    const regex = /<img[^>]+?(?:faculty|medical_faculty)[^>]*?>/gi;
    let match;
    const matches = [];
    while ((match = regex.exec(html)) !== null) {
      const index = match.index;
      const start = Math.max(0, index - 300);
      const end = Math.min(html.length, index + match[0].length + 300);
      matches.push({
        tag: match[0],
        context: html.substring(start, end).replace(/\s+/g, ' ')
      });
    }
    
    console.log("Found matches:\n", JSON.stringify(matches, null, 2));
  } catch (err) {
    console.error(err);
  }
}
main();
