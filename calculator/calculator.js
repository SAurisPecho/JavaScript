class Calculator {
  //suma
  add(a, b) {
    return a + b;
  }
  //resta
  subtract(a, b) {
    return a - b;
  }
  //mltplccn
  multiply(a, b) {
    return a * b;
  }
  //dvsn
  divide(a, b) {
    if (b === 0) {
      return "Error: No se puede dividir por cero";
    }
    return a / b;
  }
  //raiz cuadrada
  squareRoot(a) {
    return Math.sqrt(a);
  }
  //raiz cubica
  cubeRoot(a) {
    return Math.cbrt(a);
  }
  //potencia
  power(a, b) {
    return Math.pow(a, b);
  }
}
function startCalculator() {
  const calculator = new Calculator(); // para crear una nueva instancia vacia de la clase Calculator
  const operation = prompt(
    "Elige la operacion: (sumar, restar, multiplicar, dividir, raiz cuadrada, raiz cubica, potencia)"
  ).toLowerCase();//prompt de pregunta de operacion a usar

  if (operation === "sumar") {
    const num1 = parseFloat(prompt(`Ingrese el primer numero: `));
    const num2 = parseFloat(prompt(`Ingrese el segundo numero: `));
    const result = calculator.add(num1, num2);
    alert(`El resultado es : ${result}`);
  } else if (operation === "restar") {
    const num1 = parseFloat(prompt(`Ingrese el primer numero: `));
    const num2 = parseFloat(prompt(`Ingrese el segundo numero: `));
    const result = calculator.subtract(num1, num2);
    alert(`El resultado es : ${result}`);
  } else if (operation === "multiplicar") {
    const num1 = parseFloat(prompt(`Ingrese el primer numero: `));
    const num2 = parseFloat(prompt(`Ingrese el segundo numero: `));
    const result = calculator.multiply(num1, num2);
    alert(`El resultado es: ${result}`);
  } else if (operation === "dividir") {
    const num1 = parseFloat(prompt(`Ingrese el primer numero: `));
    const num2 = parseFloat(prompt(`Ingrese el segundp numero: `));
    const result = calculator.divide(num1, num2);
    alert(`El resultado es: ${result}`);
  } else if (operation === "raiz cuadrada") {
    const num = parseFloat(prompt(`Ingrese el numero: `));
    const result = calculator.squareRoot(num);
    alert(`La raiz cuadrada es: ${result}`);
  } else if (operation === "raiz cubica") {
    const num = parseFloat(prompt(`Ingrese el numero: `));
    const result = calculator.cubeRoot(num);
    alert(`La raiz cubica es: ${result}`);
  } else if (operation === "potencia") {
    const base = parseFloat(prompt(`Ingrese el numero base: `));
    const exponent = parseFloat(prompt(`Ingrese el numero exponente: `));
    const result = calculator.power(base, exponent);
    alert(`El resultado de la potencia es: ${result}`);
  } else {
    alert(`Operacion invalida. Por favor elige una operacion valida.`);
  }
  const rehusar = confirm("¿desea realizar otra operacion?");//para poder volver a usar la calculadora, usar confirm da opciones de true y false
  if (rehusar) {
    startCalculator();
  } else {
    alert("Gracias por usar la calculadora.")
  }
}
startCalculator();//llamar a la funcion starCalculator

