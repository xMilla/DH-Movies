const http = require('http');
const homePage = require('./src/homePage.js');
const enCartelera = require ('./src/enCartelera');
const masVotadas = require ('./src/masVotadas');
const sucursales = require ('./src/sucursales');
const contacto = require ('./src/contacto');
const preguntas = require ('./src/preguntasFrecuentes');

const ruta = {
 enrutador : (req,res) => {
        switch (req.url){
            case '/': 
                res.end(homePage);
                break;
            case '/en-cartelera' :
                res.end(enCartelera);
                break;
            case '/mas-votadas': 
                res.end(masVotadas);
                break;
            case '/sucursales' :
                res.end(sucursales);
                break;    
            case '/contacto':
                res.end(contacto); 
                break;
            case '/preguntas-frecuentes' :
                res.end(preguntas);
                break;              
            default :
                res.end ('No existe la seccion ingresada');    
        }
 }
};

module.exports = ruta;