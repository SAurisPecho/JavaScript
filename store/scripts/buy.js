//Seleccionar al boton de comprar
  const buySelector = document.getElementById("buy");

function comprar() {
  buySelector.addEventListener("click", () => {
    //Borrar los productos del carrito
    localStorage.removeItem("cart");
    //Redirigir a la página de inicio
    window.location.href = "./cart.html";
  });
}

comprar();