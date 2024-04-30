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
              ${product.imgs.map(each => `<img class="thumbnail-container" src="${each}" alt="mini" />`).join(" ") }
            </div>
            <img class="main-image" src="${product.image}" alt="descrpcion-imagen${product.id}">
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
              <h2 class="checkout-total-price">$${product.price}</h2>
              <p class="checkout-description">${product.policytax}</p>
              <ul class="checkout-policy-list">
                <li>
                  <span class="policy-icon"><img src="./assets/truck.png" alt="truck"></span>
                  <span class="policy-desc">Agrega el producto al carrito para conocer los costos de envío.</span>
                </li>
                <li>
                  <span class="policy-icon"><img src="./assets/plane.png" alt="plane"></span>
                  <span class="policy-desc">Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal.</span>
                </li>
              </ul>
              <div class="checkout-process">
                <div class="top">
                  <input type="number" value="1"/>
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
 


