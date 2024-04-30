// const producto1 = {
//     nombre: "celular",
//     precio: 100000,
//     stock: 2,
// };

// console.log(producto1);

// producto1.id = "id123";
// producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

// console.log(producto1);
// console.log(producto1.nombre);

class Product {
    constructor (id, title, price, stock, images,onsale, supplier, discount, description,imgs) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier;
        this.discount = discount;
        this.description = description;
        this.imgs = imgs;
    }
    //metodos getter y setter del atributo privado
    get getsupplier () {
        return this._supplier;
    }
    set setsupplier (newSupplier) {
        this._supplier = newSupplier;
    }
    sellUnits (units) {
        if (units> this.stock){
            console.log("No hay suficiente stock");
            return;
        }
            this.stock = this.stock - units
    }
}
//define los arrays de imágenes de cada producto creado, esto fue cambiado a este lugar para que pueda ser usado por las instancias
const prod1Imgs = ["https://upload.wikimedia.org/wikipedia/commons/7/7c/Samsung_Galaxy_Note_7.png", "https://example.com/image2.jpg","https://example.com/image3.jpg"];
const prod2Imgs = ["https://tiendasishop.com/media/catalog/product/m/h/mhdj3lz_a.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700","https://example.com/image2.jpg", "https://example.com/image3.jpg"];
const prod3Imgs = ["https://nextlevel.com.bo/cdn/shop/products/nstore_1500x.png?v=1685021675","https://example.com/image2.jpg"];
const prod4Imgs = ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp", "https://example.com/image2.jpg"];
const prod5Imgs = ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp", "https://example.com/image2.jpg"];
const prod6Imgs = ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp", "https://example.com/image2.jpg"];

const prod1 = new Product("001121ab", "celular", 999, 14, "https://upload.wikimedia.org/wikipedia/commons/7/7c/Samsung_Galaxy_Note_7.png", true, "gold", "50%", "Space Gray", prod1Imgs);
const prod2 = new Product("001122abc", "celular1", 1001, 18, "https://tiendasishop.com/media/catalog/product/m/h/mhdj3lz_a.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700", true, "black", "70%", "Space Gray", prod2Imgs);
const prod3 = new Product("0011223abcd", "celular2", 1000, 10, "https://nextlevel.com.bo/cdn/shop/products/nstore_1500x.png?v=1685021675", true, "black", "20%", "Space Gray", prod3Imgs);
const prod4 = new Product("11223344efgh", "celular3", 2000, 16, "https://i.postimg.cc/Jn2C5W84/galaxy1.webp", true, "gold", "0%", "Space Gray", prod4Imgs);
const prod5 = new Product("012345ap5", "telefono", 1500, 12, "https://falabella.scene7.com/is/image/FalabellaPE/gsc_120506985_2697250_1?wid=800&hei=800&qlt=70", true, "black", "10%", "Space Gray", prod5Imgs);
const prod6 = new Product("012345apb6", "telefono", 1500, 12, "https://falabella.scene7.com/is/image/FalabellaPE/gsc_120506985_2697250_1?wid=800&hei=800&qlt=70", true, "black", "25%", "Space Gray", prod6Imgs);

// // modificar el valor de atributo privado
// // prod4.setsupplier = "blank";
// // impresion de consola del getter de prod4
// // console.log(prod4.getsupplier);
// // ejecutar el metodo setunits 1°.10 unidades 2°.5 unidades
// // prod5.sellUnits(10);
// // prod5.sellUnits(6);

// // impresion por consola
// // console.log("Productos: ");
// // console.log(prod1);
// // console.log(prod2);
// // console.log(prod3);
// // console.log(prod4);
// // console.log(prod5);

// // console.log(`Nombre del producto 2: ${prod2.title}`);
// // console.log(`Se encuentra en oferta el producto 3: ${prod3.onsale}`);

// const products = [prod1, prod2, prod3, prod4, prod5, prod6];
// //la impresión en consola del array completo
// console.log(products);
// //la impresión del segundo elemento del array
// console.log(products[1]);
// //la impresión de la propiedad title del último elemento del array
// console.log(products[products.length-1].title);

// //definir nuevas variables-unshift para inicio
// products.unshift(prod5);
// //push para final
// products.push(prod6);

// console.log(products);
// console.log(products[0]);
// console.log(products[products.length-1]);

// //quitar el primer elemento del array
// products.shift();
// //quitar el ultimo elemento del array
// products.pop();

// console.log(products);

// // //define los arrays de imágenes de cada producto creado , esto fue cambiado arriba antes de las instancias para que pueda ser usado por las instancias
// // const prod1Imgs = ["https://upload.wikimedia.org/wikipedia/commons/7/7c/Samsung_Galaxy_Note_7.png", "https://example.com/image2.jpg","https://example.com/image3.jpg"];
// // const prod2Imgs = ["https://tiendasishop.com/media/catalog/product/m/h/mhdj3lz_a.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700","https://example.com/image2.jpg", "https://example.com/image3.jpg"];
// // const prod3Imgs = ["https://nextlevel.com.bo/cdn/shop/products/nstore_1500x.png?v=1685021675","https://example.com/image2.jpg"];
// // const prod4Imgs = [ "https://i.postimg.cc/Jn2C5W84/galaxy1.webp", "https://example.com/image2.jpg"];

// //agregar a cada instancia prodNumberImgs
// console.log(products);
// console.log(prod1.imgs);


//PARA PRACTICAR.....