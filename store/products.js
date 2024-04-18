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
    constructor (id, title, price, stock, images,onsale, supplier) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier;
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

const prod1 = new Product();
const prod2 = new Product("001122abc", "celular1", 1001);
const prod3 = new Product("0011223abcd", "celular2", 1000, 5, "https://nextlevel.com.bo/cdn/shop/products/nstore_1500x.png?v=1685021675", true);
const prod4 = new Product("11223344efgh", "celular3", 2000, 8, "https://i.postimg.cc/Jn2C5W84/galaxy1.webp", true, "gold");
const prod5 = new Product("012345ap", "telefono", 1500, 12, "https://falabella.scene7.com/is/image/FalabellaPE/gsc_120506985_2697250_1?wid=800&hei=800&qlt=70", true, "black")

//modificar el valor de atributo privado
prod4.setsupplier = "blank";
//impresion de consola del getter de prod4
console.log(prod4.getsupplier);
//ejecutar el metodo setunits 1°.10 unidades 2°.5 unidades
prod5.sellUnits(10);
prod5.sellUnits(6);

//impresion por consola
console.log("Productos: ");
console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod4);
console.log(prod5);

console.log(`Nombre del producto 2: ${prod2.title}`);
console.log(`Se encuentra en oferta el producto 3: ${prod3.onsale}`);