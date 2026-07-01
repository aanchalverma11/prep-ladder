import fs from 'fs';

const html = fs.readFileSync('scratch/ent_residency.html', 'utf8');

const regex = /<img[^>]*src="([^"]+)"[^>]*>/gi;
let match;
const imgTags = [];

while ((match = regex.exec(html)) !== null) {
  imgTags.push({
    tag: match[0],
    src: match[1]
  });
}

console.log('Image Tags Found:', imgTags.length);
imgTags.forEach((t, i) => {
  console.log(`[${i+1}] Tag:`, t.tag);
});
