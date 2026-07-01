import fs from 'fs';

function main() {
  const jsonText = fs.readFileSync('scratch/next_data_ss_medicine.json', 'utf8');
  const data = JSON.parse(jsonText);
  
  // Recursively search object for these image URLs
  function search(obj, path = '') {
    if (!obj) return;
    if (typeof obj === 'string') {
      if (obj.includes('zTGvSFTfaCnAuBrd1cU61750672440.png') || obj.includes('ygaesZGIqi5gMS6BxGkB1750401502.png')) {
        console.log(`Found URL at path: ${path} = ${obj}`);
      }
    } else if (typeof obj === 'object') {
      for (const key in obj) {
        search(obj[key], path ? `${path}.${key}` : key);
      }
    }
  }
  search(data);
}

main();
