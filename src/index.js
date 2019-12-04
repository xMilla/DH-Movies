const fs = require ('fs');
const PATH = 'C:\/Users\/milla\/OneDrive\/Documentos\/Full Satck\/dh_movies\/data\/';

//console.log(PATH);

let dataFaqs = fs.readFileSync( PATH + 'faqs.json', 'utf8');
let dataMovies = fs.readFileSync(PATH +'movies.json', 'utf8');
let dataTheaters = fs.readFileSync(PATH + 'theaters.json', 'utf8');

let faqs =  JSON.parse(dataFaqs);
let movies =  JSON.parse(dataMovies);
let theaters =  JSON.parse(dataTheaters);


module.exports = {faqs, movies, theaters}