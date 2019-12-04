const fs = require ('fs');

let dataMovies = fs.readFileSync( __dirname + "\/" +'movies.json', 'utf8');

let arrayMovies = dataMovies.length == 0 ? [] : JSON.parse(dataMovies);

let movies = arrayMovies;

module.exports = movies