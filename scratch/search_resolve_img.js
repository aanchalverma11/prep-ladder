import fs from 'fs';

function main() {
  try {
    const html = fs.readFileSync('scratch/fmge.html', 'utf8');
    
    // Look for any image tags or background-images that contain "resolve" or similar
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
    let match;
    const matches = [];
    while ((match = imgRegex.exec(html)) !== null) {
      const src = match[1];
      if (src.toLowerCase().includes('resolve') || src.toLowerCase().includes('calendar') || src.toLowerCase().includes('check')) {
        matches.push(src);
      }
    }
    
    // Let's print out all images around the banner section
    const bannerIndex = html.indexOf('bannerVXI');
    if (bannerIndex !== -1) {
      console.log("Banner section HTML excerpt around bannerVXI:");
      console.log(html.substring(bannerIndex - 1000, bannerIndex + 4000));
    }
    
    console.log("Matching images found:", matches);
  } catch (err) {
    console.error(err);
  }
}
main();
