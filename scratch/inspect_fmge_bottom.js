import fs from 'fs';

function main() {
  try {
    const nextData = fs.readFileSync('scratch/next_data_fmge.json', 'utf8');
    const data = JSON.parse(nextData);
    
    const schema = data.props.pageProps.funValue.schema;
    // Inspect the last few sections
    for (let i = 10; i < schema.length; i++) {
      console.log(`[Section ${i}] type: ${schema[i].type}`);
      console.log(JSON.stringify(schema[i].data, null, 2));
    }
  } catch (err) {
    console.error(err);
  }
}
main();
