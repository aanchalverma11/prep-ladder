import fs from 'fs';

function main() {
  try {
    const nextData = fs.readFileSync('scratch/next_data_ss_medicine.json', 'utf8');
    const data = JSON.parse(nextData);
    
    const schema = data.props.pageProps.funValue.schema;
    // Let's find any element containing 'faqArr' or similar list
    schema.forEach((section, idx) => {
      if (section.data && (section.data.faqArr || section.data.faqs)) {
        console.log(`FOUND FAQ SECTION at index ${idx}:`);
        console.log(JSON.stringify(section.data.faqArr || section.data.faqs, null, 2));
      }
    });
  } catch (err) {
    console.error(err);
  }
}
main();
