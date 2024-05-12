const query = location.search; //para capturar la cadena de consulta
const params = new URLSearchParams(query); //Creamos una nueva URLSearchParams con la cadena de consulta
const id = params.get("id"); //usamos get para obtener el valor de id

function printDetails(id) {
  //la funcion va a tener como parametro el id de la url actual
  const product = productsArray.find((product) => product.id === id); //en la variable guardamos el array y buscamos por cada elemento el id el que debe coincidar con el parametro
  const detailsTemplate = `
    <div class="product-images-block">
            <div class="thumbnail-images">
              ${product.imgs.map(each => `<img class="thumbnail-container" src="${each}" alt="mini" onclick="changeMini(event)"/>`).join(" ") } 
            </div>
            <img class="main-image" id="bigImg" src="${product.image}" alt="descrpcion-imagen${product.id}">
          </div>
          <div class="product-description-block">
            <h1 class="title">${product.title}</h1>
            <form class="selector">
              <fieldset>
                <label class="label" for="color">Color</label>
                <select id="color" type="text" class="cuadro" placeholder="Selecciona un color">
                  ${product.colors.map((each) => `<option value=${each}>${each}</option>`).join(" ")};
                </select>
              </fieldset>
            </form>
            <div class="descrip-details">
              <span>Descripción:</span>
              <p>${product.description}</p>
            </div>
          </div>
          <div class="product-checkout-block">
            <div class="checkout-container">
              <div class="part1">
                <span class="checkout-total-label">Total:</span>
                <button class="btn-favorite" id="favoriteButton" onclick="toggleFavorite('${product.id}')"><i class="fa-regular fa-heart" id="heartIcon"></i></button>
              </div>
              <h2 class="checkout-total-price" id= "price" >$${product.price}</h2>
              <p class="checkout-description">${product.policytax}</p>
              <ul class="checkout-policy-list">
                <li>
                  <span class="policy-icon"><img src="./assets/truck.png" alt="truck"></span>
                  <span class="policy-desc">${product.shippingcosts}</span>
                </li>
                <li>
                  <span class="policy-icon"><img src="./assets/plane.png" alt="plane"></span>
                  <span class="policy-desc">${product.shippingtime}.</span>
                </li>
              </ul>
              <div class="checkout-process">
                <div class="top">
                  <input type="number" id="quanty" value="1" min="1" onchange="changeSubtotal(event)"/>
                  <button class="btn-primary">Comprar</button>
                </div>
                <div class="bottom">
                  <button class="btn-outline" onclick="saveProduct('${product.id}')" >Añadir al Carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    `
  const detailsSelector = document.querySelector("#columnsContainerDetails");
  detailsSelector.innerHTML = detailsTemplate;
}

printDetails(id);

//PARA EL EVENTO DE CLICK DE LAS MINIATURAS
function changeMini(click) {    //definir la funcion para que dependa del event en linea de las miniaturas
    const selectedSrc = click.target.src;   //guardar la ruta de la imagen de la miniatura
    const bigSelector = document.getElementById("bigImg");        //seleccionar el id de la imagen agrandada
    bigSelector.src = selectedSrc;                // cambia la ruta src de la imagen grande por la ruta de la miniatura en la que se hizo clic.
    document.querySelector(".thumbnail-container").addEventListener("click", changeMini);     //agrega un event listener al contenedor de miniaturas, Cuando se hace clic en cualquier miniatura dentro de este contenedor, la función changeMini se ejecutará.
  }

//PARA EL EVENTODE CAMBIO/CHANGE PARA EL SUBTOTAL
function changeSubtotal(event) {   //definir la funcion con el evento onchange como parametro para que dependa segun su cambio
  const quantity = event.target.value;   // en una variable guardar el valor de productos a comprar
  const proDuct = productsArray.find(product => product.id === id);    //buscar el producto segun el id de la url con el metodo find
  const subTotal = quantity * proDuct.price     //calcular el sub total
  const priceSelector = document.querySelector("#price");       //seleccionar la etiqueta a donde se renderizara
  priceSelector.innerHTML = `$${subTotal}`;     // imprimir en el HTML
}

//PARA AGREGAR UN PRODUCTO AL CARRITO
function saveProduct(id) {    //la función saveProduct depende del id del producto, importante en el evento onclick en linea hay que asignar como argumento product.id
  let containerCart = "";     // creamos una variable vacia
  const found = productsArray.find(each => each.id === id);     //definir una variable para que busque un producto con el mismo id del argumento 
  const newObjectProduct = {                               //definir un objeto con las propiedades  especificas del producto
    id: id,     
    title: found.title,
    price: found.price,
    image: found.image,
    policytax: found.policytax,
    description: found.description,
    color: document.getElementById("color").value,
    quantity: document.getElementById("quanty").value,
  };
    let cart = JSON.parse(localStorage.getItem("cart"));      //obtener la clave cart de el LS y a el contenido conviertirlo a su formato original con JSON.parse()
  if (!cart) {     // Verificar si la clave 'cart' es nula o vacia
    containerCart = [newObjectProduct]  // si cart esta vacia a containerCart qle asignamos el nuevo producto
  } else {      // si el carrito no esta vacio
    let indxProduct = cart.findIndex((cartProduct) => cartProduct.id === id) //Buscar si el index del producto ha agregar está en carrito
      if (indxProduct > -1) {   // si esta en el carrito 
        cart[indxProduct].quantity = Number(cart[indxProduct].quantity) + Number (newObjectProduct.quantity); // accdemos a la pocision del producto en cart con [indxProduct] y a su cantidad , adems sumamos la cantidad del nuevo objeto a agregar
      } else {  //si no esta en carrito
     cart.push(newObjectProduct);     // lo guardamos en la variable cart que tiene el localStorage en sus valor original
      }
    containerCart = cart;   //asignamos el valor de la variable cart a la variable containerCart
  }
  localStorage.setItem("cart", JSON.stringify(containerCart));  //Guardamos en localStorage 
}

function toggleFavorite(id) {
  const icon = document.querySelector("#heartIcon");
  // obtener la lista de favoritos del almacenamiento local
  let fav = JSON.parse(localStorage.getItem("fav")) || [];
  if (fav.length >= 4) {        //si fav ya tiene mas de 4 productos muestra la alerta y con return detiene la funcion toggleFavorite 
    alert("¡Ya tienes 4 productos favoritos! No puedes agregar más.");
    return;
}
  const index = fav.findIndex((favProduct) => favProduct.id === id);  // verificar si el producto está en la lista de favoritos con findIndex
  if (index !== -1) {       // Si el producto esta en la lista de favoritos, lo eliminamos
    fav.splice(index, 1);
    if (index !== -1) {
      icon.classList.replace("fa-solid", "fa-regular")
    }
  } else { 
    const addfav = productsArray.find((each) => each.id === id);
    const newFavProduct = {
        id: id,
        title: addfav.title,
        price: addfav.price,
        image: addfav.image,
        policytax: addfav.policytax,
        description: addfav.description,
    };
    fav.push(newFavProduct);    // Si el producto no está en la lista de favoritos, lo agregamos
      if(index === -1) {
      icon.classList.replace("fa-regular", "fa-solid");
      }
    }
    localStorage.setItem("fav", JSON.stringify(fav));  
}

window.addEventListener("DOMContentLoaded", function() {
  const fav = JSON.parse(localStorage.getItem("fav")) || [];
  const icon = document.querySelector("#heartIcon");
  const productId = params.get("id"); // Obtener el ID del producto de la URL

  if (fav.some((favProduct) => favProduct.id === productId)) {  // verificar si hay un elemento en fav que tenga el mismo d del productoactual
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  } else {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
  }
});


//CARDS DE FORMA DINAMICA

const $salesBlockCards = document.querySelector(".salesBlockCards")

function cardOferts (ofertArray) {
    return `
    <h2>Ofertas de la semana</h2>
    <a class="product-card" href="./details.html?id=${ofertArray.id}">
        <img class="product-img" src="${ofertArray.image}" alt="${ofertArray.id}" />
        <div class="product-info">
            <span class="product-title">${ofertArray.title}</span>
            <span class="product-description">${ofertArray.description}</span>
            <div class="product-price-block">
            <span class="price">$${ofertArray.price}</span>
            <span class="discount">${ofertArray.discount}</span>
            </div>
            <div class="product-tax-policy">${ofertArray.policytax}</div>
            <div class = "product-stock-block">
            <span class="stock">¡Solo quedan ${ofertArray.stock} productos!</span>
            </div>
        </div>
    </a>
    `;
}
// Impresion de cards
let loadOferts = (ofertsArray) => { // guardamos en una variable una función que reciba como parámetro el array de oferts 
    let ofertsTemplate = "";   //Definir una variable para concatenar las tarjetas de productos
     for (const ofertArray of ofertsArray) {   // iterar con for of para que cada vuelta cargue una tarjeta
        ofertsTemplate += cardOferts(ofertArray); // dentro de for of colocamos ofertstemplate +create card para cada producto, genera la representación HTML utilizando la plantilla y lo agrega al contenedor
       $salesBlockCards.innerHTML = ofertsTemplate;
     }
 }
 
     document.addEventListener("DOMContentLoaded", () => { // Evento que se dispara cuando el DOM se ha cargado completamente, se ejecuta la función para cargar los productos 
         if ($salesBlockCards){                                  //si el elemento $salesBlockCards = id salesBlockCards esta definida 
          loadOferts(ofertsArray);                     //se llama a la función loadProducts que tiene como argumento ofertsArray donde estan todos los productos en oferta
         }
     });