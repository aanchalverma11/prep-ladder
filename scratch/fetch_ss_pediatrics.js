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
    const url = 'https://www.prepladder.com/courses/ss-pediatrics';
    console.log("Fetching", url);
    const html = await fetchPage(url);
    
    // Look for __NEXT_DATA__ JSON script tag
    const nextDataMatch = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
    if (nextDataMatch) {
      const data = JSON.parse(nextDataMatch[1]);
      fs.writeFileSync('scratch/next_data_ss_pediatrics.json', JSON.stringify(data, null, 2));
      console.log("Extracted __NEXT_DATA__ to scratch/next_data_ss_pediatrics.json");
    }
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}

main();
