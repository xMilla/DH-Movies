/*1. Home (/)
a. Título​: ​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores
películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.
b. Total de películas en cartelera​: ​(total de películas)
c. Listados de películas
i. Mostrar el listado de películas organizadas alfabéticamente por
título.

d. Pié de página​: ​Recordá que podés visitar las secciones:
i. En Cartelera
ii. Más Votadas
iii. Sucursales
iv. Contacto
v. Preguntas Frecuentes*/

const contenido = require ('./index');


let respuesta = '​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​. \n';

let total = contenido.movies.total_movies;
//console.log(total);

let listaPelis = contenido.movies.movies.map((movie) => {
    return movie.title + '\n';
});

listaPelis.sort();

respuesta +='\n\nTotal de peliculas en cartelera: ' + total;

respuesta += '\n\n Listado de Peliculas:\n\n' + '♦ ' + listaPelis.join('♦ ');

respuesta += "​\n\nRecordá que podés visitar las secciones: \n ☺ En Cartelera \n ☺ Más Votadas \n ☺ Sucursales\n ☺ Contacto\n ☺ Preguntas Frecuentes";


module.exports = respuesta;