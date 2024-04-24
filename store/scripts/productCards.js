
class Product {
    constructor (images, id, title, description, price, discount, policytax, stock) {
        this.images = images;
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

//Instancias
const prod1 = new Product("./assets/mock1.jpg", "1", "iPhone 13", "Space Gray", 999, "50%", "Incluye impuesto País y percepción AFIP", 10);
const prod2 = new Product("./assets/mock1.jpg", "2", "iPhone 13 Pro", "Space Gray", 1299, "20%", "Incluye impuesto País y percepción AFIP", 8);
const prod3 = new Product("./assets/mock1.jpg", "3", "iPhone 13 Mini", "Space Gray", 699, "10%", "Incluye impuesto País y percepción AFIP", 12);
const prod4 = new Product("./assets/mock1.jpg", "4", "iPad Air", "Space Gray", 599, "25%", "Incluye impuesto País y percepción AFIP", 15);
const prod5 = new Product("./assets/mock1.jpg", "5", "MacBook Air", "Space Gray", 999, "10%", "Incluye impuesto País y percepción AFIP", 10);
const prod6 = new Product("./assets/mock1.jpg", "6", "MacBook Pro", "Space Gray", 1299, "30%", "Incluye impuesto País y percepción AFIP", 8);
const prod7 = new Product("./assets/mock1.jpg", "7", "Apple Watch Series 7", "Space Gray", 399, "00%", "Incluye impuesto País y percepción AFIP", 20);
const prod8 = new Product("./assets/mock1.jpg", "8", "AirPods Pro", "Space Gray", 249, "15%", "Incluye impuesto País y percepción AFIP", 25);

//Array de los productos creados en instancias
const productsArray = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8];


// const productsSelector = document.getElementById("products");
// let productsTemplate = ""; //Reemplaza contenido de la variable productsTemplate con una iteración for of 
// for (let element of productsArray) { //Por cada elemento del array products 
//     productsTemplate = productsTemplate + createCard(element) // el products templtes se le agrega cada create card de cada element del array
// }
// productsSelector.innerHTML = productsTemplate; //Imprime el contenido en el selector

//DE FORMA DINAMICA
function createCard (product) {
    return `
    <a class="product-card" href="./details.html">
        <img class="product-img" src="${product.images}" alt="${product.id}" />
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

function printCards (productsArray, products) { //definir una función que reciba como parámetro el array de products y el id selector
   let productsTemplate = "";   //Definir una variable para concatenar las tarjetas de productos
    for (const element of productsArray) {   // iterar con for of para que cada vuelta cargue unna tarjeta
       productsTemplate = productsTemplate + createCard(element);
    }
    const productsSelector = document.getElementById("products");  // seleccionar el id selector para luego imprimir con innerHTML
    productsSelector.innerHTML = productsTemplate;
}

printCards(productsArray, "products");
