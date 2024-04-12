const frase = prompt("Ingrese una palabra o frase");
/*const cantidad = frase.length
const mensajeCantidad = "La frase ingresada tiene "+ cantidad + " caracteres";
console.log(mensajeCantidad);*/

const frasesMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();
const minMay = frasesMinusculas + " " + fraseMayusculas;
console.log(minMay);