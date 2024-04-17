function calcularVelocidad (distancia, tiempo) {
    //const distancia = 10
    //const tiempo = 2
    const velocidad = distancia / tiempo;
    console.log("La velocidad del movil es: " + velocidad);
}

calcularVelocidad(10, 2);
calcularVelocidad(100, 2);
calcularVelocidad(75, 3);

const calcularVelocidadd = (distancia, tiempo) => {
    //const distancia = 10
    //const tiempo = 2
    const velocidad = distancia / tiempo;
    console.log("La velocidad del movil es: " + velocidad);
    return velocidad
}

const velocidad1 = calcularVelocidadd(10, 2);
console.log("La velocidad de Juli es " + velocidad1);
const velocidad2 = calcularVelocidadd(100, 2);
console.log("La velocidad de Vale es " + velocidad2);
const velocidad3 = calcularVelocidadd(75, 3);
console.log("La velocidad de Andy es " + velocidad3);
