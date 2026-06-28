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
    for (let i = lines.length - 1; i >= 0; i--) {
      const line = lines[i].trim();
      if (!line) continue;
      
      const step = JSON.parse(line);
      if (step.type === 'BROWSER_SUBAGENT' && step.content && step.content.includes('verify_new_hero')) {
        console.log(`--- FOUND BROWSER SUBAGENT RESPONSE (Step ${step.step_index}) ---`);
        console.log(step.content);
        console.log("-----------------------------------------------------------------");
        break;
      }
    }
  } catch (err) {
    console.error(err);
  }
}
main();
