import fs from 'fs';

function main() {
  try {
    const nextData = fs.readFileSync('scratch/next_data_fmge.json', 'utf8');
    const data = JSON.parse(nextData);
    
    const schema = data.props.pageProps.funValue.schema;
    const banner = schema.find(s => s.type === 'bannerVXI');
    
    // Find all image URLs in banner.data recursively
    const urls = [];
    function findUrls(obj, path = '') {
      if (!obj) return;
      if (typeof obj === 'string') {
        if (obj.includes('prepladder.com') && (obj.includes('.webp') || obj.includes('.png') || obj.includes('.jpg'))) {
          urls.push({ path, url: obj });
        }
      } else if (typeof obj === 'object') {
        for (const key in obj) {
          findUrls(obj[key], path ? `${path}.${key}` : key);
        }
      }
    }
    findUrls(banner.data);
    console.log("All banner VXI image URLs:", JSON.stringify(urls, null, 2));
  } catch (err) {
    console.error(err);
  }
}
main();
