import fs from 'fs';

const html = fs.readFileSync('scratch/ent_residency.html', 'utf8');
const urls = [];
const regex = /https:\/\/image\.prepladder\.com\/content\/[a-zA-Z0-9_\-\.\/]+/g;

let match;
while ((match = regex.exec(html)) !== null) {
  urls.push(match[0]);
}

const uniqueUrls = [...new Set(urls)];
console.log('Unique Image URLs:', uniqueUrls);
fs.writeFileSync('scratch/ent_residency_images.json', JSON.stringify(uniqueUrls, null, 2));
