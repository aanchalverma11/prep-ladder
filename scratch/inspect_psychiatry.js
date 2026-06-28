import fs from 'fs';

const fileContent = fs.readFileSync('scratch/next_data_psychiatry_residency.json', 'utf8');
const data = JSON.parse(fileContent);
const schema = data.props.pageProps.funValue.schema;

schema.forEach((block, index) => {
  console.log(`\n--- Block ${index}: ${block.type} ---`);
  if (block.type === 'offerSingleLine') {
    console.log(block.data);
  } else if (block.type === 'bannerHome') {
    console.log(block.data);
  } else if (block.type === 'FeatureList') {
    console.log(JSON.stringify(block.data.features, null, 2));
  } else if (block.type === 'aboutFaculty') {
    console.log(block.data);
  } else if (block.type === 'planFaq') {
    console.log(block.data.faqArr);
  } else if (block.type === 'packPlan') {
    console.log(block.data.homePagePack);
  } else {
    console.log(Object.keys(block.data || {}));
  }
});
