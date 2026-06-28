import fs from 'fs';

async function main() {
  try {
    const html = fs.readFileSync('scratch/page.html', 'utf8');
    
    // Look for JSON script tag, Next.js page state usually is in <script id="__NEXT_DATA__" type="application/json">...</script>
    const nextDataMatch = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
    if (nextDataMatch) {
      const data = JSON.parse(nextDataMatch[1]);
      fs.writeFileSync('scratch/next_data.json', JSON.stringify(data, null, 2));
      console.log("Extracted __NEXT_DATA__ to scratch/next_data.json");
      
      // Let's search for "features" in the extracted data
      // We can do a deep search in the object
      const found = findKeys(data, 'features');
      console.log("Found features array instances:", found.length);
      if (found.length > 0) {
        fs.writeFileSync('scratch/features.json', JSON.stringify(found[0], null, 2));
        console.log("Written first features array instance to scratch/features.json");
      }
    } else {
      console.log("No __NEXT_DATA__ script found, trying to search via regex");
      // Fallback: search via regex for JSON-like string
      const featuresMatch = html.match(/"features":\s*(\[[\s\S]*?\])/);
      if (featuresMatch) {
        fs.writeFileSync('scratch/features.json', JSON.stringify(JSON.parse(featuresMatch[1]), null, 2));
        console.log("Extracted features from regex to scratch/features.json");
      }
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

function findKeys(obj, keyToFind) {
  const results = [];
  function search(current) {
    if (!current || typeof current !== 'object') return;
    if (Array.isArray(current)) {
      for (const item of current) {
        search(item);
      }
      return;
    }
    if (current[keyToFind]) {
      results.push(current[keyToFind]);
    }
    for (const k in current) {
      if (current.hasOwnProperty(k)) {
        search(current[k]);
      }
    }
  }
  search(obj);
  return results;
}

main();
