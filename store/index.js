const comprar = ()=> {
let totalApagarCliente = 0;
let totalProductos = Number(prompt("¿cuantos productos desea llevar?"));

for (let index = 1; index <= totalProductos; index++) {
    const nombre = prompt("¿que producto desea llevar?");
    const cantidad = Number(prompt ("¿cuantas unidades?"));
    const precio = Number(prompt("¿cuanto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagarCliente = totalApagarCliente + subtotal;
    console.log("haz llevado " + cantidad +" unidades de " + nombre + " que costaron " + precio);
}
console.log("el total a pagar por los productos es s/." + totalApagarCliente);
//alert("el total a pagar por los productos es s/." + totalApagar); 
return totalApagarCliente;
}
const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
const total = total1 + total2 + total3;
console.log("el total registrado es s/." + total);