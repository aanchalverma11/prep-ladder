import fs from 'fs';

function main() {
  const jsonText = fs.readFileSync('scratch/next_data_ss_medicine.json', 'utf8');
  const data = JSON.parse(jsonText);
  const schema = data.props.pageProps.funValue.schema;
  console.log("Schema types:");
  schema.forEach((s, idx) => {
    console.log(`Index ${idx}: type = ${s.type}`);
  });
  
  // Print schema index 7 data
  console.log("\nSchema 7 Data:\n", JSON.stringify(schema[7].data, null, 2));
}

main();
