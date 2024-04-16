/*let totalApagar = 0;
let totalProductos = Number(prompt("¿cuantos productos desea llevar?"));

for (let index = 1; index <= totalProductos; index++) {
    const nombre = prompt("¿que producto desea llevar?");
    const cantidad = Number(prompt ("¿cuantas unidades?"));
    const precio = Number(prompt("¿cuanto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;
    console.log("haz llevado " + cantidad +" unidades de " + nombre + " que costaron " + precio);
}
console.log("el total a pagar por los productos es s/." + totalApagar);
alert("el total a pagar por los productos es s/." + totalApagar); */

let totalApagar = 0;
let totalProductos = Number(prompt("¿cuantos productos desea llevar?"))

for (let index = 1; index <= 3; index++) {
    const nombre = prompt("¿que producto desea llevar?");
    const cantidad = Number(prompt("¿cuantas unidades?"));
    const precio = Number(prompt("¿cuanto sale cada unidad?"));

    const subtotal = cantidad * precio;
    totalApagar = subtotal + totalApagar;
    console.log("haz llevado " + cantidad + "unidades de " + nombre + " que costaron s/" + precio);
}
console.log("el total a pagar por los productos es s/" + totalApagar);
alert("el total a pagar por los productos es s/" + totalApagar);