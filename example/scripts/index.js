/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");
/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";

/*prompt("Preguntar algo");
console.log("Imprimir algo");*/

const nombre = prompt("¿cual es su nombre?");
const mensaje = "Bienvenid@ " + nombre + "!";
console.log(mensaje);
alert(mensaje);
