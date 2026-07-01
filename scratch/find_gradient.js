import fs from 'fs';

function main() {
  try {
    const nextData = fs.readFileSync('scratch/next_data.json', 'utf8');
    const data = JSON.parse(nextData);
    
    // We can recursively traverse the object to find any object containing "question" and "answer"
    const faqs = [];
    function traverse(obj) {
      if (!obj) return;
      if (typeof obj === 'object') {
        if (obj.question && obj.answer) {
          faqs.push({ q: obj.question, a: obj.answer });
        }
        for (const key in obj) {
          traverse(obj[key]);
        }
      }
    }
    traverse(data);
    
    console.log("Found FAQS: ", JSON.stringify(faqs, null, 2));
  } catch (err) {
    console.error(err);
  }
}
main();
