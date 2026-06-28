import fs from 'fs';

function main() {
  try {
    const nextData = fs.readFileSync('scratch/next_data_ss_medicine.json', 'utf8');
    const data = JSON.parse(nextData);
    
    const images = [];
    const strings = [];
    const faqs = [];

    function traverse(obj, path = '') {
      if (!obj) return;
      if (typeof obj === 'string') {
        if (obj.includes('prepladder.com') && (obj.includes('.webp') || obj.includes('.png') || obj.includes('.jpg') || obj.includes('.svg'))) {
          images.push({ path, url: obj });
        }
        if (obj.includes('NEET SS') || obj.includes('Harrison') || obj.includes('Marwah')) {
          strings.push({ path, text: obj });
        }
      } else if (typeof obj === 'object') {
        if (obj.name && obj.text && (obj.name.includes('?') || path.includes('faq'))) {
          faqs.push({ q: obj.name, a: obj.text });
        }
        for (const key in obj) {
          traverse(obj[key], path ? `${path}.${key}` : key);
        }
      }
    }
    
    traverse(data);
    console.log("--- FOUND MATCHES ---");
    console.log("Images:", images.slice(0, 10));
    console.log("\nStrings:", strings.slice(0, 10));
    console.log("\nFAQs:", faqs.slice(0, 10));
  } catch (err) {
    console.error(err);
  }
}
main();
