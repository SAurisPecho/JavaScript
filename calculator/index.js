/*const numero1 = Number(prompt("Ingrese su primer numero"));
const numero2 = Number(prompt("Ingrese su segundo numero"));
const suma = numero1 + numero2;
const mensajeSuma = "El resultado de la suma es " +suma;
alert(mensajeSuma);*/
/*console.log(mensajeSuma);*/

/*const promedio = suma / 2;
const triple = promedio * 3;
const resultadoMenosDiez = triple - 10;
const mensajeFinal = "El resultado final es " +resultadoMenosDiez;
alert (mensajeFinal);*/

/*PARA DOS NUMEROS*/
let suma = 0;
const cantidad = Number(prompt("¿cuantos numeros desea sumar?"));

for (let i = 1; i <= cantidad; i++) {
    const numeroAsumar = Number(prompt("Ingrese un número a sumar"));
  suma = suma + numeroAsumar;
}

console.log(suma);
alert("El resultado de la suma es :" + suma);

/*PARA SUMA EN BUCLE*/
/*let suma = 0;
const cantidad = Number(prompt("¿cuantos numeros desea sumar?"));

for (let i = 1; i <= cantidad; i++) {
  suma = suma + i;
}

console.log(suma);
alert("El resultado de la suma es :" + suma);*/
