/*6. Preguntas Frecuentes (/preguntas-frecuentes)
a. Título​: ​Preguntas Frecuentes.
b. Total de preguntas​: ​(total de preguntas)
c. Listados de preguntas. ​Para cada preguntas mostrar:
i. Pregunta ​(título de la pregunta)
ii. Respuesta​ (texto de la respuesta)*/

const contenido = require ('./index');

let respuesta = `Preguntas Frecuentas\n\n\nTotal de preguntas frecuentas: ${contenido.faqs.total_faqs}\n\n♦${contenido.faqs.faqs.map((p) => p.faq_title + '\n' + p.faq_answer).join('\n\n♦')}`;

module.exports = respuesta;


