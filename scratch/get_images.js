import fs from 'fs';

async function main() {
  try {
    const html = fs.readFileSync('scratch/page.html', 'utf8');
    
    // Find all occurrences of webp and print context around them (100 characters before and after)
    const regex = /[^"]+?\.webp/g;
    let match;
    const matches = [];
    while ((match = regex.exec(html)) !== null) {
      const index = match.index;
      const start = Math.max(0, index - 200);
      const end = Math.min(html.length, index + match[0].length + 200);
      const snippet = html.substring(start, end).replace(/\s+/g, ' ');
      matches.push({
        url: match[0],
        snippet: snippet
      });
    }
    
    console.log("Found WebP references:\n", JSON.stringify(matches, null, 2));
  } catch (err) {
    console.error(err);
  }
}
main();
