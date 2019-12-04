/*2. En Cartelera (/en-cartelera)
a. Título​: ​En Cartelera.
b. Total de películas​: ​(total de películas)
c. Listados de películas. ​Para cada película mostrar:
i. Título ​(título de la película)
ii. Reseña​ (reseña de la película)
*/

const contenido = require ('./index');

let respuesta = "En Cartelera\n\n";

respuesta += `El total de peliculas es de: ${contenido.movies.total_movies}`;

let listadoCompleto = contenido.movies.movies.map((movie) => {
    return movie.title + ': ' + movie.overview;
});

respuesta += `Listado de Peliculas: \n\n\n♠ ${listadoCompleto.join('\n\n♠ ')}`;

module.exports = respuesta;
