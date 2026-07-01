import fs from 'fs';
import path from 'path';

function main() {
  try {
    const logDir = 'C:\\Users\\chouh\\.gemini\\antigravity-ide\\brain\\c5e9e8c2-7cf4-41d5-8f5b-934f60083c5a\\.system_generated\\logs';
    const transcriptPath = path.join(logDir, 'transcript.jsonl');
    
    if (!fs.existsSync(transcriptPath)) {
      console.log("No transcript.jsonl found.");
      return;
    }
    
    const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');
    const obj = JSON.parse(lines[30].trim());
    console.log("--- BROWSER SUBAGENT DETAILED REPORT ---");
    console.log(obj.content);
    console.log("-----------------------------------------");
  } catch (err) {
    console.error(err);
  }
}
main();
