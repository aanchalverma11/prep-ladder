import fs from 'fs';
import https from 'https';

const url = 'https://www.prepladder.com/courses/obs-gyn-residency';

https.get(url, (res) => {
  let html = '';
  res.on('data', (chunk) => {
    html += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('scratch/obs_gyn_residency.html', html);
    console.log('Saved HTML to scratch/obs_gyn_residency.html');
    
    const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
    if (match) {
      const data = JSON.parse(match[1]);
      fs.writeFileSync('scratch/next_data_obs_gyn_residency.json', JSON.stringify(data, null, 2));
      console.log('Saved JSON to scratch/next_data_obs_gyn_residency.json');
    } else {
      console.log('__NEXT_DATA__ not found');
    }
  });
}).on('error', (e) => {
  console.error('Error fetching page:', e);
});
