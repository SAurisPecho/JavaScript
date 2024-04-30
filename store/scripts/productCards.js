const $dProducts = document.getElementById("dProducts");
const $iSearch = document.getElementById("iSearch");

//CARDS DE FORMA DINAMICA
function createCard (product) {
    return `
    <a class="product-card" href="./details.html?id=${product.id}">
        <img class="product-img" src="${product.image}" alt="${product.id}" />
        <div class="product-info">
            <span class="product-title">${product.title}</span>
            <span class="product-description">${product.description}</span>
            <div class="product-price-block">
            <span class="price">$${product.price}</span>
            <span class="discount">${product.discount}</span>
            </div>
            <div class="product-tax-policy">${product.policytax}</div>
            <div class = "product-stock-block">
            <span class="stock">¡Solo quedan ${product.stock} productos!</span>
            </div>
        </div>
    </a>
    `;
}

// Impresion de cards
let loadProducts = (productsArray) => { // guardamos en una variable una función que reciba como parámetro el array de products 
   let productsTemplate = "";   //Definir una variable para concatenar las tarjetas de productos
    for (const product of productsArray) {   // iterar con for of para que cada vuelta cargue unna tarjeta
       productsTemplate += createCard(product); // dentro de for of colocamos products template +create card para cada producto, genera la representación HTML utilizando la plantilla y lo agrega al contenedor
      $dProducts.innerHTML = productsTemplate;
    }
}

    document.addEventListener("DOMContentLoaded", () => { // Evento que se dispara cuando el DOM se ha cargado completamente, se ejecuta la función para cargar los productos 
        if ($dProducts){                                  //si el elemento $dProducts = id dProducts existe 
         loadProducts(productsArray);                     //se llama a la función loadProducts que tiene como argumento productosArray donde estan todos los productos
        }
    })

// // //EVENTO 
// $iSearch.addEventListener("keyup", (event) => {  //el evento se realizara en el input 
//     $dProducts.innerHTML = ""; //para limpiar el contenido del contenedor de productos
//     let prodsFilterList = textCapture(event, productsArray); //guardamos en una variable, text capture y su funcion con sus argumentos
//     loadProducts(prodsFilterList); //Carga los productos filtrados en el contenedor
//     });

// //FILTRADO 
// let textCapture = (event, productosArray) => {  //guardar en una funcion el event mas la lista de productos, para manejar el evento de búsqueda de producto
//  let saveValue = event.target.value.toLowerCase();  //guardar en una variable el valor capturado por el evento, convertir en el valor y en minusculas
//  let prodsFilter = productosArray.filter((product) => {  //retornamos la var productsArray que almacena los productos, lo filtramos
//     return product.title.toLowerCase().includes(saveValue.toLowerCase());  //dentro del filter retornamos por cada producto el nombre se pasa a minuscula y debe incluir el event ingresado
//     });
//     return prodsFilter      ////retornamos la lista filtrada de productos
// }
