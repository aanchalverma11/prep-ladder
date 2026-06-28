import fs from 'fs';

function main() {
  const jsonText = fs.readFileSync('scratch/next_data_ss_medicine.json', 'utf8');
  const imgRegex = /https:\/\/image\.prepladder\.com\/content\/[^"'\s,]+/g;
  const urls = Array.from(new Set(jsonText.match(imgRegex) || []));
  console.log("Image URLs in next_data_ss_medicine.json:");
  urls.forEach(u => console.log(u));
}

main();
