import fs from 'fs';

const fileContent = fs.readFileSync('scratch/next_data_radiology_residency.json', 'utf8');
const data = JSON.parse(fileContent);
const schema = data.props.pageProps.funValue.schema;

schema.forEach((block, index) => {
  if (['bannerTwo', 'featureRadiology', 'download', 'faq'].includes(block.type)) {
    console.log(`\n--- Block ${index}: ${block.type} ---`);
    console.log(JSON.stringify(block.data, null, 2));
  }
});
