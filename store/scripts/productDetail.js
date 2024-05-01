const query = location.search; //para capturar la cadena de consulta
const params = new URLSearchParams(query); //Creamos una nueva URLSearchParams con la cadena de consulta
const id = params.get("id"); //usamos get para obtener el valor de id

console.log(id);

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
                <select type="text" class="cuadro" placeholder="Selecciona un color">
                  ${product.colors.map(
                    (each) => `<option value = ${each}>${each}</option>`
                  ).join(" ")};
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
              <span class="checkout-total-label">Total:</span>
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
                  <input type="number" value="1" min="1" onchange="changeSubtotal(event)"/>
                  <button class="btn-primary">Comprar</button>
                </div>
                <div class="bottom">
                  <button class="btn-outline">Añadir al Carrito</button>
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
function changeSubtotal(onchange) {   //definir la funcion con el evento onchange como parametro para que dependa segun su cambio
  const quanty = onchange.target.value;   // en una variable guardar el valor de productos a comprar
  const proDuct = productsArray.find(product => product.id == id);    //buscar el producto segun el id de la url con el metodo find
  const subTotal = quanty * proDuct.price     //calcular el sub total
  const priceSelector = document.querySelector("#price");       //seleccionar la etiqueta a donde se renderizara
  priceSelector.innerHTML = `$${subTotal}`;     // imprimir en el HTML
}


//CARDS DE OFERTAS
const $salesBlockCards = document.getElementById("salesBlockCards");

//CARDS DE FORMA DINAMICA
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
     })
 


