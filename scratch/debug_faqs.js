import fs from 'fs';

function main() {
  try {
    const nextData = fs.readFileSync('scratch/next_data.json', 'utf8');
    const data = JSON.parse(nextData);
    
    const results = [];
    
    function traverse(obj, path = '') {
      if (!obj) return;
      if (typeof obj === 'string') {
        if (obj.includes('Version XI') || obj.includes('FAQ') || obj.includes('What’s new')) {
          results.push({ path, val: obj.substring(0, 100) });
        }
      } else if (typeof obj === 'object') {
        for (const key in obj) {
          traverse(obj[key], path ? `${path}.${key}` : key);
        }
      }
    }
    
    traverse(data);
    console.log("Found matches:", results.length);
    console.log(results.slice(0, 20));
  } catch (err) {
    console.error(err);
  }
}
main();
