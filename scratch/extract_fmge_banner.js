import fs from 'fs';

function main() {
  try {
    const nextData = fs.readFileSync('scratch/next_data_fmge.json', 'utf8');
    const data = JSON.parse(nextData);
    
    // Find all strings containing .webp or .png or .jpg in the structure
    const imagePaths = [];
    function traverse(obj, path = '') {
      if (!obj) return;
      if (typeof obj === 'string') {
        if (obj.includes('prepladder.com') && (obj.includes('.webp') || obj.includes('.png') || obj.includes('.jpg') || obj.includes('.svg'))) {
          imagePaths.push({ path, url: obj });
        }
      } else if (typeof obj === 'object') {
        for (const key in obj) {
          traverse(obj[key], path ? `${path}.${key}` : key);
        }
      }
    }
    
    traverse(data);
    console.log("Image paths in next_data_fmge.json:");
    console.log(JSON.stringify(imagePaths, null, 2));
  } catch (err) {
    console.error(err);
  }
}
main();
