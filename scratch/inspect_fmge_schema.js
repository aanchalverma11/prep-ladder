import fs from 'fs';

function main() {
  try {
    const nextData = fs.readFileSync('scratch/next_data_fmge.json', 'utf8');
    const data = JSON.parse(nextData);
    
    const schema = data.props.pageProps.funValue.schema;
    schema.forEach((section, idx) => {
      console.log(`[Section ${idx}] type: ${section.type}`);
      if (section.data) {
        console.log(`  title/name: ${section.data.title || section.data.name}`);
        if (section.type === 'BannerVXI') {
          console.log(`  Banner data:`, JSON.stringify(section.data, null, 2));
        }
      }
    });
  } catch (err) {
    console.error(err);
  }
}
main();
