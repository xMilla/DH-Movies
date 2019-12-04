const fs = require ('fs');

let dataFaqs = fs.readFileSync( __dirname + "\/" +'faqs.json', 'utf8');

let arrayFaqs = dataFaqs.length == 0 ? [] : JSON.parse(dataFaqs);

let faqs = arrayFaqs;

module.exports = faqs