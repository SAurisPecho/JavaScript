class Product {
    constructor (image, id, title, description, price, discount, policytax, stock, imgs, colors) {
        this.image = image;
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discount = discount;
        this.policytax = policytax;
        this.stock = stock;
        this.imgs = imgs;
        this.colors = colors;
    }
    sellUnits (units) {
        if (units> this.stock){
            console.log("No hay suficiente stock");
            return;
        }
            this.stock = this.stock - units
    }
}

//Arrays de imágenes de cada producto
const prodImgs1 = ["https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg", "https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg"];
const prodImgs2 = ["https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg", "https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg"];
const prodImgs3 = ["https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg", "https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg"];
const prodImgs4 = ["https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg", "https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg"];
const prodImgs5 = ["https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg", "https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg"];
const prodImgs6 = ["https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg", "https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg"];
const prodImgs7 = ["https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg", "https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg"];
const prodImgs8 = ["https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg", "https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg"];
const prodImgs9 = ["https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg", "https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg", "https://img.freepik.com/fotos-premium/smartphone-purpura-pantalla-blanco-pantalla-tactil-moderna-aislada-espacio-blanco_158502-95.jpg?size=626&ext=jpg"];

//Instancias
const prod1 = new Product("./assets/iphone13.jpg", "iph-1", "iPhone 13", "CPU de 8 núcleos <br>con 4 núcleos de rendimiento y <br> 4 núcleos de eficiencia", 999, "50%", "Incluye impuesto País y percepción AFIP", 10, prodImgs1, ["Negro espacial", "Gris espacial"]);
const prod2 = new Product("./assets/iphone13.jpg", "iphPr-2", "iPhone 13 Pro", "CPU de 8 núcleos con 4 núcleos de rendimiento y 4 núcleos de eficiencia", 1299, "20%", "Incluye impuesto País y percepción AFIP", 8, prodImgs2, ["Gris espacial", "Azul acero", "Negro espacial"]);
const prod3 = new Product("./assets/iphone13.jpg", "iphMn-3", "iPhone 13 Mini", "CPU de 8 núcleos con 4 núcleos de rendimiento y 4 núcleos de eficiencia", 699, "10%", "Incluye impuesto País y percepción AFIP", 12, prodImgs3, ["Negro espacial", "Blanco"]);
const prod4 = new Product("./assets/ipadAir.jpg", "ipdAir-4", "iPad Air", "CPU de 8 núcleos con 4 núcleos de rendimiento y 4 núcleos de eficiencia", 599, "25%", "Incluye impuesto País y percepción AFIP", 15, prodImgs4, ["Negro espacial", "Gris espacial"]);
const prod5 = new Product("./assets/macbookPro.jpg", "mcbkAir-5", "MacBook Air", "CPU de 8 núcleos con 4 núcleos de rendimiento y 4 núcleos de eficiencia", 999, "10%", "Incluye impuesto País y percepción AFIP", 10, prodImgs5, ["Gris espacial", "Lila"]);
const prod6 = new Product("./assets/macbookPro.jpg", "mcbkPr-6", "MacBook Pro", "CPU de 8 núcleos con 4 núcleos de rendimiento y 4 núcleos de eficiencia", 1299, "30%", "Incluye impuesto País y percepción AFIP", 8, prodImgs6, ["Negro espacial", "Gris espacial"]);
const prod7 = new Product("./assets/appleWatch.jpg", "aplWtch-7", "Apple Watch Series 7", "CPU de 8 núcleos con 4 núcleos de rendimiento y 4 núcleos de eficiencia", 399, "00%", "Incluye impuesto País y percepción AFIP", 20, prodImgs7, ["Negro espacial", "Gris espacial"]);
const prod8 = new Product("./assets/airPods.jpg", "arpdsPr-8", "AirPods Pro", "CPU de 8 núcleos con 4 núcleos de rendimiento y 4 núcleos de eficiencia", 249, "15%", "Incluye impuesto País y percepción AFIP", 25, prodImgs8,["Negro espacial", "Azul acero", "Lila", "Gris espacial"]);
const prod9 = new Product("./assets/airPods.jpg", "arpds-9", "AirPods", "CPU de 8 núcleos con 4 núcleos de rendimiento y 4 núcleos de eficiencia", 200, "10%", "Incluye impuesto País y percepción AFIP", 30, prodImgs9, ["Negro espacial", "Gris espacial"]);

//Array de los productos creados en instancias
const productsArray = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9];

//Array ofertas de la semana
const ofertsArray = [prod1, prod4, prod6]

