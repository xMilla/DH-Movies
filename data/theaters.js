const fs = require ('fs');

let dataTheaters = fs.readFileSync( __dirname + "\/" +'theaters.json', 'utf8');

let arrayTheaters = dataTheaters.length == 0 ? [] : JSON.parse(dataTheaters);

let theaters = arrayTheaters;

module.exports = theaters