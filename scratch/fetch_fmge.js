import https from 'https';
import fs from 'fs';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function main() {
  try {
    const url = 'https://www.prepladder.com/courses/fmge';
    console.log("Fetching", url);
    const html = await fetchPage(url);
    fs.writeFileSync('scratch/fmge.html', html);
    console.log("Saved page to scratch/fmge.html");

    // Look for __NEXT_DATA__ JSON script tag
    const nextDataMatch = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
    if (nextDataMatch) {
      const data = JSON.parse(nextDataMatch[1]);
      fs.writeFileSync('scratch/next_data_fmge.json', JSON.stringify(data, null, 2));
      console.log("Extracted __NEXT_DATA__ to scratch/next_data_fmge.json");
    }

    // Also extract all img srcs
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
    let match;
    const srcs = [];
    while ((match = imgRegex.exec(html)) !== null) {
      srcs.push(match[1]);
    }
    console.log("All FMGE Images found:", srcs.filter(s => s.includes('prepladder.com/content')));
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}

main();
