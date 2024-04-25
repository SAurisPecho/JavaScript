const $dProducts = document.getElementById("dProducts");
const $iSearch = document.getElementById("iSearch");

class Product {
    constructor (image, id, title, description, price, discount, policytax, stock) {
        this.image = image;
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discount = discount;
        this.policytax = policytax;
        this.stock = stock;
    }
    sellUnits (units) {
        if (units> this.stock){
            console.log("No hay suficiente stock");
            return;
        }
            this.stock = this.stock - units
    }
}

//DE FORMA DINAMICA
function createCard (product) {
    return `
    <a class="product-card" href="./details.html">
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



//Instancias
const prod1 = new Product("./assets/iphone13.jpg", "1", "iPhone 13", "Space Gray", 999, "50%", "Incluye impuesto País y percepción AFIP", 10);
const prod2 = new Product("./assets/iphone13.jpg", "2", "iPhone 13 Pro", "Space Gray", 1299, "20%", "Incluye impuesto País y percepción AFIP", 8);
const prod3 = new Product("./assets/iphone13.jpg", "3", "iPhone 13 Mini", "Space Gray", 699, "10%", "Incluye impuesto País y percepción AFIP", 12);
const prod4 = new Product("./assets/ipadAir.jpg", "4", "iPad Air", "Space Gray", 599, "25%", "Incluye impuesto País y percepción AFIP", 15);
const prod5 = new Product("./assets/macbookPro.jpg", "5", "MacBook Air", "Space Gray", 999, "10%", "Incluye impuesto País y percepción AFIP", 10);
const prod6 = new Product("./assets/macbookPro.jpg", "6", "MacBook Pro", "Space Gray", 1299, "30%", "Incluye impuesto País y percepción AFIP", 8);
const prod7 = new Product("./assets/appleWatch.jpg", "7", "Apple Watch Series 7", "Space Gray", 399, "00%", "Incluye impuesto País y percepción AFIP", 20);
const prod8 = new Product("./assets/airPods.jpg", "8", "AirPods Pro", "Space Gray", 249, "15%", "Incluye impuesto País y percepción AFIP", 25);
const prod9 = new Product("./assets/airPods.jpg", "8", "AirPods", "Space Gray", 200, "10%", "Incluye impuesto País y percepción AFIP", 30);

//Array de los productos creados en instancias
const productsArray = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9];

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

// //EVENTO 
$iSearch.addEventListener("keyup", (event) => {  //el evento se realizara en el input 
    $dProducts.innerHTML = ""; //para limpiar el contenido del contenedor de productos
    let prodsFilterList = textCapture(event, productsArray); //guardamos en una variable, text capture y su funcion con sus argumentos
    loadProducts(prodsFilterList); //Carga los productos filtrados en el contenedor
    });

//FILTRADO 
let textCapture = (event, productosArray) => {  //guardar en una funcion el event mas la lista de productos, para manejar el evento de búsqueda de producto
 let saveValue = event.target.value.toLowerCase();  //guardar en una variable el valor capturado por el evento, convertir en el valor y en minusculas
 let prodsFilter = productosArray.filter((product) => {  //retornamos la var productsArray que almacena los productos, lo filtramos
    return product.title.toLowerCase().includes(saveValue.toLowerCase());  //dentro del filter retornamos por cada producto el nombre se pasa a minuscula y debe incluir el event ingresado
    });
    return prodsFilter      ////retornamos la lista filtrada de productos
}



