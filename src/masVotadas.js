/*3. Más Votadas (/mas-votadas)
Mostrar todas aquellas películas cuyo rating (​vote_average​) sea mayor o igual a
7.
a. Título​: ​Más Votadas.
b. Total de películas​: ​(total de películas que cumplan la condición)
c. Rating promedio. ​(promedio de rating de estas películas)
d. Listados de películas. ​Para cada película mostrar:
i. Título ​(título de la película)
ii. Rating​ (rating de la película)
iii. Reseña​ (reseña de la película)*/

const contenido = require ('./index');

let mejores = contenido.movies.movies.filter((movie) =>  movie.vote_average > 7);

let promedio = mejores.reduce((acum=0,m) => acum + m.vote_average , 0 ) / mejores.length;
//console.log(promedio);


mejores = mejores.map( (m) => 'Titúlo: ' + m.title + '  -   Rating: ' + m.vote_average + '\nReseña: ' + m.overview + '\n\n');



let respuesta = `Mas Votadas\n\n\nRating Promedio: ${promedio.toFixed(2)}\n\nTotal de peliculas con rating mayor a 7: ${mejores.length}\n\n\n${mejores.join('\n')}`;

//console.log(respuesta);


module.exports = respuesta;
