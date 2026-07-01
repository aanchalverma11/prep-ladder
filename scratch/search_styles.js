import fs from 'fs';

function main() {
  try {
    const html = fs.readFileSync('scratch/page.html', 'utf8');
    
    // Look for background styles or gradients in classes or style tags
    const styleMatches = html.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || [];
    console.log(`Found ${styleMatches.length} style blocks.`);
    
    const gradMatches = [];
    for (const style of styleMatches) {
      const regex = /[^\{\}]+?\{[^\{\}]*?gradient[^\{\}]*?\}/gi;
      let match;
      while ((match = regex.exec(style)) !== null) {
        gradMatches.push(match[0].trim());
      }
    }
    
    console.log("Found gradient CSS rules:\n", JSON.stringify(gradMatches.slice(0, 30), null, 2));
    
    // Let's also look for inline styles in divs or wrappers
    const inlineMatches = [];
    const inlineRegex = /style="[^"]*?gradient[^"]*?"/gi;
    let match;
    while ((match = inlineRegex.exec(html)) !== null) {
      inlineMatches.push(match[0]);
    }
    console.log("Found inline gradient styles:\n", inlineMatches);
    
  } catch (err) {
    console.error(err);
  }
}
main();
