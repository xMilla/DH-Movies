/*
Sucursales (/sucursales)
a. Título​: ​Nuestras Salas.
b. Total de salas​: ​(total de salas)
c. Listados de salas. ​Para cada sala mostrar:
i. Nombre ​(nombre de la sala)
ii. Dirección​ (ubicación de la sala)
iii. Descripción​ (descripción de la sala) */

const contenido = require ('./index');

let respuesta = `Nuestras Salas\n\n\n${contenido.theaters.total_theaters}`;

module.exports = respuesta;