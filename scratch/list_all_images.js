import fs from 'fs';

function main() {
  const html = fs.readFileSync('scratch/page.html', 'utf8');
  const imgRegex = /https:\/\/image\.prepladder\.com\/content\/[^"'\s>]+/g;
  const urls = Array.from(new Set(html.match(imgRegex) || []));
  console.log("All unique PrepLadder image URLs:");
  urls.forEach(u => console.log(u));
}

main();
