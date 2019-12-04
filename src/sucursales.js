/*
Sucursales (/sucursales)
a. Título​: ​Nuestras Salas.
b. Total de salas​: ​(total de salas)
c. Listados de salas. ​Para cada sala mostrar:
i. Nombre ​(nombre de la sala)
ii. Dirección​ (ubicación de la sala)
iii. Descripción​ (descripción de la sala) */

const contenido = require ('./index');

let respuesta = `Nuestras Salas\n\n\nTotal de Salas: ${contenido.theaters.theaters.map((s) => s.total_rooms).reduce((acum,m) => acum +m ,0)}`;

respuesta += 'Salas:\n\n\n'+ contenido.theaters.theaters.map((s) => s.name +'\nDirección: '+ s.address +'\n'+ s.description + '\n\n').join('');

module.exports = respuesta;