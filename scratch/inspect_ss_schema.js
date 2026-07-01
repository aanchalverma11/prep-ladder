import fs from 'fs';

function main() {
  try {
    const nextData = fs.readFileSync('scratch/next_data_ss_medicine.json', 'utf8');
    const data = JSON.parse(nextData);
    
    const schema = data.props.pageProps.funValue.schema;
    schema.forEach((section, idx) => {
      console.log(`[Section ${idx}] type: ${section.type}`);
      if (section.data) {
        console.log(`  Keys:`, Object.keys(section.data));
      }
    });
  } catch (err) {
    console.error(err);
  }
}
main();
