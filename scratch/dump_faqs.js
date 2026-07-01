import fs from 'fs';

function main() {
  try {
    const nextData = fs.readFileSync('scratch/next_data.json', 'utf8');
    const data = JSON.parse(nextData);
    
    // Schema element 13 (or let's find the element dynamically which has faqArr)
    const schema = data.props.pageProps.funValue.schema;
    const faqSection = schema.find(item => item.data && item.data.faqArr);
    
    if (faqSection) {
      const faqs = faqSection.data.faqArr.map(faq => ({
        q: faq.name,
        a: faq.text || faq.description || faq.answer
      }));
      console.log("FAQ ITEMS EXTRACTED:");
      console.log(JSON.stringify(faqs, null, 2));
    } else {
      console.log("FAQ section not found in schema");
    }
  } catch (err) {
    console.error(err);
  }
}
main();
