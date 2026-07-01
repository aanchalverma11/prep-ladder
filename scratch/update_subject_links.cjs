const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '..', 'src', 'components');
const files = fs.readdirSync(componentsDir);

files.forEach(file => {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    const pattern = /(id:\s*["']anaesthesia["'],[\s\S]*?link:\s*["'])\/courses\/medical-pg(["'])/g;
    if (content.match(pattern)) {
      content = content.replace(pattern, '$1/courses/medical-pg/anaesthesia-preparation$2');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
});
