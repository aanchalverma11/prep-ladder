import fs from 'fs';

function main() {
  try {
    const data = JSON.parse(fs.readFileSync('scratch/next_data.json', 'utf8'));
    
    // Recursive search function
    const matches = [];
    function search(obj, path = '') {
      if (!obj) return;
      if (typeof obj === 'string') {
        if (obj.includes('Prof') || obj.toLowerCase().includes('subject') || obj.toLowerCase().includes('plan')) {
          matches.push({ path, val: obj });
        }
        return;
      }
      if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
          search(obj[i], `${path}[${i}]`);
        }
        return;
      }
      if (typeof obj === 'object') {
        for (const k in obj) {
          search(obj[k], `${path}.${k}`);
        }
      }
    }
    search(data);
    console.log("Found matches:\n", JSON.stringify(matches.slice(0, 30), null, 2));
  } catch (err) {
    console.error(err);
  }
}
main();
