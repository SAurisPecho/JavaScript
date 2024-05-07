// Definiendo variable cartproducts que traiga el array del localStorage
let cartproducts = JSON.parse(localStorage.getItem("cart"));

//  Renderizar dinámicamente los productos del carrito
function printCart() {
  //Traer el selector del contenedor de productos
  const container = document.querySelector(".containerMain");
  //Limpiar el contenedor
  container.innerHTML = "";

  if (cartproducts === null || cartproducts.lenght === 0) {
    container.innerHTML = ` 
        <article class ="product-cart" id="cartproducts">
            <div class ="title-product">No hay productos en el carrito</div>
        </article>
    `;
  } else {
    //Iterar sobre los productos del carrito
    cartproducts.forEach((product) => {
      //Crear un div que contenga la información del producto
      const productDiv = document.createElement("article");
      productDiv.classList.add("product-cart");
      productDiv.setAttribute("id", "cartproducts");
      productDiv.innerHTML = `
      <img class="product-imge" src="${product.image}"/>
      <div class = "productdetailsyprice">
        <div class ="product-details">
            <div class ="title-product">${product.title}</div>
            <div class ="color-product">- ${product.color}</div>
            <div class ="description-product">${product.description}</div>
        </div>    
         <div class="product-price">
            <!--Mostrar la cantidad a comprar-->
            <div class ="top">
                <input class ="product-input" type="number" name="quantity" min="1" id="${product.id}_${product.color}" value="${product.quantity}" onchange="changeQuantity(event)" >
                <div class="price">P.U. $ ${product.price}.00</div>
            </div>
            <div class="bottom">
                <div class ="subtotal">Subtotal $ ${product.price * product.quantity}.00</div>
            </div>
        </div>
      </div>
      `;
      //Agregar el div al contenedor
      container.appendChild(productDiv);
    });
  }
}

// Renderizar el total a pagar

//Definir función printTotal
function printTotal() {
  //Definir variable para almacenar el precio total
  let totalPrice = 0;
  if (cartproducts !== null) {
    //Iterar sobre los productos del carrito
    cartproducts.forEach((product) => {
      //Sumar el precio de cada producto al total
      totalPrice += product.price * product.quantity;
    });
  }

  //Traer el selector del contenedor del total
  const totalContainer = document.querySelector("#total");
  //Limpiar el contenedor
  totalContainer.innerHTML = "";
  //Agregar el html
  totalContainer.innerHTML = `
    <h1 class="cart-title">Resumen del pedido</h1>
    <div class="cart-total">
        <p class="cart-total-title"> Total    </p>
        <P class="cart-total-price">USD $${totalPrice !== null || totalPrice !== 0 ? totalPrice : 0}</p>
    </div>
    <p class="cart-tax">Incluye impuesto País y percepción AFIP</p>
    <button class="cart-btn" id="buy" type="button">COMPRAR</button>
`;
}

//funcion changeQuantity(event) para cambiar la cantidad de productos en el carrito

//Definir función changeQuantity
function changeQuantity(event) {
  //Traer el id del producto
  const id = event.target.id.split("_");
  //Traer el valor de la cantidad
  const quantity = event.target.value;
  //Iterar sobre los productos del carrito
  cartproducts.forEach((product) => {
    //Verificar si el id del producto es igual al id del producto seleccionado
    if (product.id === id[0] && product.color == id[1]) {
      //Cambiar la cantidad del producto
      product.quantity = quantity;
    }
  });
  //Guardar el carrito en localStorage
  localStorage.setItem("cart", JSON.stringify(cartproducts));
  printCart();
  printTotal();
}

printCart();
printTotal();
