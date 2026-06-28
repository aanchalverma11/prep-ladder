import fs from 'fs';

function main() {
  try {
    const nextData = fs.readFileSync('scratch/next_data_fmge.json', 'utf8');
    const data = JSON.parse(nextData);
    
    const schema = data.props.pageProps.funValue.schema;
    const banner = schema.find(s => s.type === 'bannerVXI');
    console.log("FMGE Banner Section Data:", JSON.stringify(banner.data, null, 2));
  } catch (err) {
    console.error(err);
  }
}
main();
