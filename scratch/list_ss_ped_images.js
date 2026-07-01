import fs from 'fs';

function main() {
  const jsonText = fs.readFileSync('scratch/next_data_ss_pediatrics.json', 'utf8');
  const data = JSON.parse(jsonText);
  const schema = data.props.pageProps.funValue.schema;
  console.log("Schema types in ss-pediatrics:");
  schema.forEach((s, idx) => {
    console.log(`Index ${idx}: type = ${s.type}`);
  });
  
  // Find any images in schema index 5
  if (schema[5]) {
    console.log("\nSchema 5 Data:\n", JSON.stringify(schema[5].data, null, 2));
  }
}

main();
