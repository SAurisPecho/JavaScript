// Definiendo variable cartproducts que traiga el array del localStorage
let cartproducts = JSON.parse(localStorage.getItem("cart"));

//  Renderizar dinámicamente los productos del carrito
function printCart() {
  //Traer el selector del contenedor de productos
  const container = document.querySelector(".containerMain");
  //Limpiar el contenedor
  container.innerHTML = "";

  if (cartproducts === null || cartproducts.length === 0) {
    container.innerHTML = ` 
        <article class ="product-cart" id="cartproducts">
            <div class ="title-product">No hay productos en el carrito</div>
            <a class="inicio" href="index.html"><img src="./assets/vecteezy_compras-carro-icono-compras-cesta-en-transparente_19879190.png" alt="cart" class="cartvacio"></a>
        </article>     
    `;
  } else {
    //Iterar sobre los productos del carrito
    cartproducts.forEach((product) => {
      //Crear un div que contenga la información del producto
      const productDiv = document.createElement("article");
      productDiv.classList.add("product-cart");
      productDiv.setAttribute("id", "cartproducts");
      productDiv.setAttribute("data-product-id", product.id);
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
                <button class="btn-delete"><i class="fa-solid fa-trash-can" data-productid="${product.id}" onclick= "deleteItem(event)"></i></button>
                <button class="btn-favorite"><i class="fa-regular fa-heart" data-productid="${product.id}" id ="addFavorite" ></i></button>
                <div class="price">P.U. $ ${product.price}.00</div>
            </div>
            <div class="bottom">
                <div class ="subtotal">Subtotal $ ${calcularSubtotal(product.price, product.quantity)}.00</div>
            </div>
        </div>
      </div>
      `;
      //Agregar el div al contenedor
      container.appendChild(productDiv);

    });
  }
}

function deleteItem(event) {    //la funcion se activa cuando ocurre el evento
   const id = event.target.dataset.productid;     //Capturamos el evento y accedemos al ID del producto
   if (id != null) {        // verificamos que el ID del producto obtenido del evento no es nulo 
    let cart = JSON.parse(localStorage.getItem("cart"));      //obtenemos los elementos de la clave cart en su formato original y los guardamos en la variable cart
    let indxProduct = cart.findIndex((cartProduct) => cartProduct.id === id);       //buscamos la posición del producto que tiene el mismo ID que el producto que se desea eliminar
    if (indxProduct !== -1) {         //si el producto esta en el localStorage
      cart.splice(indxProduct, 1)     //eliminos un solo elemento de cart, comenzando desde la posición indexProduct
      localStorage.setItem("cart", JSON.stringify(cart));     //actualizamos el localStorage en cadena
      cartproducts = cart;          //cartProducts lo actualizamos al nuevo cart con lo eliminado
      printCart();                    //renderizamos la pantalla llamando a la funcion printCart
    } else {
      console.log("No se encontró ningún producto con el ID especificado en el carrito.");
    }
  }else{
    console.log('No se puedo acceder al ID del producto a eliminar')
  }
}


function toggleFavorite(id, icon) {   //el id es el del producto y icono a cambiar que esta en el elemento i
  let fav = JSON.parse(localStorage.getItem("fav")) || [];    // obtenemos la lista de favoritos del almacenamiento local
  if (fav.length >= 4) {
    alert("¡Ya tienes 4 productos favoritos! No puedes agregar más.");
    return;
}
  const index = fav.findIndex((favProduct) => favProduct.id === id);    // verificar si el producto está en la lista de favoritos con findIndex
  if (index !== -1) {   // Si el producto esta en la lista de favoritos, lo eliminamos
    fav.splice(index, 1);       //con splice eliminamos a partir del index 1 producto, es decir el mismo producto encontrado
     icon.classList.remove("fa-solid");    //quitamos elicno de favorito y añadimos el no favorito
     icon.classList.add("fa-regular");
  } else { // si no esta en favoritos
    const addfav = productsArray.find((each) => each.id === id);      //buscamos en el array el producto que coincide
    const newFavProduct = {           //creamos un nuevo objetocon sus datos
        id: id,
        title: addfav.title,
        price: addfav.price,
        image: addfav.image,
        policytax: addfav.policytax,
        description: addfav.description,
    };
    fav.push(newFavProduct);    //agregamos a fav donde esta la lista, el nuevo producto
      icon.classList.remove("fa-regular");   //quitamos el icono de no favorito y agregamos el de favorito
       icon.classList.add("fa-solid");
      }
    localStorage.setItem("fav", JSON.stringify(fav));     //actualizamos la lista de favoritos en localStorage
}

window.addEventListener("DOMContentLoaded", function() {      //al documento le asignamos el evento cuando este cargado
  const fav = JSON.parse(localStorage.getItem("fav")) || [];      // obtenemos la lista de favoritos del localStorage
  const iconBottons = document.querySelectorAll(".btn-favorite i");       //seleccionammos todos los elemento <i> que almacena la clase btn-favorite
  
  iconBottons.forEach(icon => {        //iteramos y por cada i
    const productId = icon.getAttribute("data-productid");      // obtenemos el id del icono que es el mismo del producto

  if (fav.some((favProduct) => favProduct.id === productId)) {     //si el productoesta en lista con some devolvera true de lo contraio false
    icon.classList.remove("fa-regular");          // al estar en lista al recargo de pagina se quita el icono de no favorito a favorito
    icon.classList.add("fa-solid");
  } else {
    icon.classList.remove("fa-solid");      //si no esta en lista o es false cambiamos el icono a no favorito
    icon.classList.add("fa-regular");
  }

  icon.addEventListener("click", function() {      // a icon le asignamos un escuchador de eventos, click con la funcion toggleFavorite
    toggleFavorite(productId, icon);                 // con parametros : el id del producto y icon
  });
});
})



//Subtotal 
function calcularSubtotal ( price, quantity) {
  return (price * quantity)
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






