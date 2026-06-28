const fs = require('fs');
let js = fs.readFileSync('Microbiology.jsx', 'utf8');

js = js.replace(/pl-microbiology-/g, 'pl-pathology-')
  .replace(/Microbiology\.css/g, 'Pathology.css')
  .replace(/function Microbiology/g, 'function Pathology')
  .replace(/India's Best Microbiology/g, "India's Best Pathology")
  .replace(/Microbiology expert Dr\. Preeti Sharma/g, 'the Patho Mage - Dr. Preeti Sharma')
  .replace(/A leading academician and experienced teacher, She has helped many students crack Medical PG exams and achieve their dreams\./g, 'She is gold medal winner from the renowned Safdarjung Hospital for Pathology.')
  .replace(/Hours Videos Watched/g, 'Hours Video Playback')
  .replace(/NEET-PG 2023 Strike Rate/g, 'NEET PG 2023 strike rate')
  .replace(/comprehensive study material to boost your Microbiology preparation\./g, 'Get the best-in-class & comprehensive study material to boost your Pathology preparation.')
  .replace(/80\+ Microbiology Video Lectures/g, '60+ Pathology Video Lectures')
  .replace(/30\+ Microbiology Practice Questions/g, '120+ Pathology Practice Questions')
  .replace(/120\+ Microbiology Treasures/g, '120+ Pathology Treasures')
  .replace(/280\+ Microbiology Concept Pages/g, '360+ Pathology Concept Pages')
  .replace(/Microbiology Features/g, 'Pathology Features')
  .replace(/Microbiology/g, 'Pathology');

fs.writeFileSync('Pathology.jsx', js);

let css = fs.readFileSync('Microbiology.css', 'utf8');
css = css.replace(/pl-microbiology-/g, 'pl-pathology-')
  .replace(/Microbiology/g, 'Pathology');
fs.writeFileSync('Pathology.css', css);
