class Product {
  constructor(
    image,
    id,
    title,
    description,
    price,
    discount,
    policytax,
    stock,
    imgs,
    colors,
    shippingcosts,
    shippingtime
  ) {
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
    this.shippingcosts = shippingcosts;
    this.shippingtime = shippingtime
  }
  sellUnits(units) {
    if (units > this.stock) {
      console.log("No hay suficiente stock");
      return;
    }
    this.stock = this.stock - units;
  }
}

//Arrays de imágenes de cada producto
const prodImgs1 = [
  "https://plazavea.vteximg.com.br/arquivos/ids/27190807-450-450/image-594539176f914be19980fdc4f69f0389.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/27190805-450-450/image-434a2a8d77374f50993778f66ac1807a.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/27190803-450-450/image-b6904c6e4be7407d8f44d5de4652c204.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/27190808-450-450/image-2e89160c85ba4cb5b041acbf2547bc1c.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/27190815-450-450/image-8ebc9b50f8ae4ee9ae061d07d474fe93.jpg",
];
const prodImgs2 = [
  "https://plazavea.vteximg.com.br/arquivos/ids/27190792-450-450/image-4df485e6332b4970ae243377e398fc36.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/27190793-450-450/image-b59d760382fd464994668f7b81fa81ea.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/27190797-450-450/image-c50149f994a34c7b9d0a99639863da4f.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/27190788-450-450/image-e9f380b0c8a7454faef318f2149f0e90.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/27190790-450-450/image-8640aa351e5d4511b291c4bf7a9549c2.jpg"
];
const prodImgs3 = [
  "https://plazavea.vteximg.com.br/arquivos/ids/27190850-450-450/image-529964975e144f5283df999e867efaf5.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/731679-450-450/image-2044146c59604e6f9fb559939322a441.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/731680-450-450/image-072c322a81284530a13a7a9463a92ff2.jpg"
];
const prodImgs4 = [
  "https://plazavea.vteximg.com.br/arquivos/ids/26947122-450-450/image-32643abfc0d5411b8108985cf3113d2a.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/26947119-450-450/image-a9df09bab04147769beac2d448b0afc3.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/26947120-450-450/image-01942077624645138798cbb0aca51792.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/26947126-450-450/image-76d9e33bb4a849eeb6154af9907e1744.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/26947118-450-450/image-6183a06fc2eb4c5aa6edd488571c5616.jpg"
];
const prodImgs5 = [
    "https://plazavea.vteximg.com.br/arquivos/ids/19883900-450-450/imageUrl_2.jpg",
    "https://plazavea.vteximg.com.br/arquivos/ids/19883903-450-450/imageUrl_4.jpg",
    "https://plazavea.vteximg.com.br/arquivos/ids/19883902-450-450/imageUrl_3.jpg"
];
const prodImgs6 = [
  "https://plazavea.vteximg.com.br/arquivos/ids/24820722-450-450/image-3df77da2f3a74d9ca5d9bb8476bbe5e2.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/24820723-450-450/image-117baca95c2d4bbcb88249d7ee39bebd.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/24820736-450-450/image-5d023d837b3e481792a2da940b3488a5.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/24820720-450-450/image-b0c7ca915b0d48769cd57b977643bc34.jpg"
];
const prodImgs7 = [
  "https://plazavea.vteximg.com.br/arquivos/ids/28813838-450-450/image-bbb9d6f797a0417f9c8ab1b3d2066d8e.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/28813862-450-450/image-39a9d4ac88394fad9d750e3fde98686e.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/28813815-450-450/image-1a4cf5ceea8c4b55afc060d0666874a3.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/28813877-450-450/image-719ea86f7cd049d9b69612be24020269.jpg"

];
const prodImgs8 = [
  "https://plazavea.vteximg.com.br/arquivos/ids/28683714-450-450/image-db49e6c2d0fb4f48b67272d628d4e46b.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/28683772-450-450/image-6fb84d7ac6be4964ab20196431259136.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/28683733-450-450/image-00d2deda102140b5b3f632850381f66a.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/28683777-450-450/image-dbcd98ff21bf4d88801ba28bd47d2469.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/28683769-450-450/image-ad3fe0afa0864917b4a755561ebd7301.jpg"
];
const prodImgs9 = [
  "https://plazavea.vteximg.com.br/arquivos/ids/28663872-450-450/imageUrl_2.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/28663871-450-450/imageUrl_1.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/28663869-450-450/imageUrl_3.jpg",
  "https://plazavea.vteximg.com.br/arquivos/ids/28663870-450-450/imageUrl_4.jpg"
];

//Instancias
const prod1 = new Product(
  "https://plazavea.vteximg.com.br/arquivos/ids/27190807-450-450/image-594539176f914be19980fdc4f69f0389.jpg",
  "iph-1",
  "iPhone 13",
  "Pantalla:6.1 <br> Memoria interna:128GB <br> Tecnología:5G",
  999,
  "50%",
  "Incluye impuesto País y percepción AFIP",
  10,
  prodImgs1,
  ["Negro espacial", "Gris espacial"],
  "Agrega el producto al carrito para conocer los costos de envío.",
  "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal"
);
const prod2 = new Product(
  "https://plazavea.vteximg.com.br/arquivos/ids/27190792-450-450/image-4df485e6332b4970ae243377e398fc36.jpg",
  "iphPr-2",
  "iPhone 13 Pro",
  "Pantalla:6.1 <br> Memoria interna:128GB <br> Tecnología:5G",
  1299,
  "20%",
  "Incluye impuesto País y percepción AFIP",
  8,
  prodImgs2,
  ["Gris espacial", "Azul acero", "Negro espacial"],
  "Agrega el producto al carrito para conocer los costos de envío.",
  "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal"
);
const prod3 = new Product(
  "https://plazavea.vteximg.com.br/arquivos/ids/27190850-450-450/image-529964975e144f5283df999e867efaf5.jpg",
  "iphMn-3",
  "iPhone 13 Mini",
  "Cámara frontal:12+12MPx <br> Características: 64GB 4GB 12+12MPx Blanco <br> Cámara posterior:12MPx",
  699,
  "10%",
  "Incluye impuesto País y percepción AFIP",
  12,
  prodImgs3,
  ["Negro espacial", "Blanco"],
  "Agrega el producto al carrito para conocer los costos de envío.",
  "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal"
);
const prod4 = new Product(
  "https://plazavea.vteximg.com.br/arquivos/ids/26947122-450-450/image-32643abfc0d5411b8108985cf3113d2a.jpg",
  "ipdAir-4",
  "iPad Air",
  "Alto	24.76 cm <br> Ancho	17.85 cm <br> Memoria interna:64GB",
  599,
  "25%",
  "Incluye impuesto País y percepción AFIP",
  15,
  prodImgs4,
  ["Negro espacial", "Gris espacial"],
  "Agrega el producto al carrito para conocer los costos de envío.",
  "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal"
);
const prod5 = new Product(
  "https://plazavea.vteximg.com.br/arquivos/ids/19883900-450-450/imageUrl_2.jpg",
  "mcbkAir-5",
  "MacBook Air",
  "Pantalla:13.4 <br> Memoria RAM:8GB <br> Capacidad del disco duro:256GB SSD",
  999,
  "10%",
  "Incluye impuesto País y percepción AFIP",
  10,
  prodImgs5,
  ["Gris espacial", "Lila"],
  "Agrega el producto al carrito para conocer los costos de envío.",
  "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal"
);
const prod6 = new Product(
  "https://plazavea.vteximg.com.br/arquivos/ids/24820722-450-450/image-3df77da2f3a74d9ca5d9bb8476bbe5e2.jpg",
  "mcbkPr-6",
  "MacBook Pro",
  "Pantalla:13.4 <br> Memoria RAM:8GB <br> Capacidad del disco duro:520GB SSD",
  1299,
  "30%",
  "Incluye impuesto País y percepción AFIP",
  8,
  prodImgs6,
  ["Negro espacial", "Gris espacial"],
  "Agrega el producto al carrito para conocer los costos de envío.",
  "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal"
);
const prod7 = new Product(
  "https://plazavea.vteximg.com.br/arquivos/ids/28813838-450-450/image-bbb9d6f797a0417f9c8ab1b3d2066d8e.jpg",
  "aplWtch-7",
  "Apple Watch Series 7",
  "Alto	4.0 cm <br> Ancho 3.4 cm <br> Color: Medianoche",
  399,
  "00%",
  "Incluye impuesto País y percepción AFIP",
  20,
  prodImgs7,
  ["Negro espacial", "Gris espacial"],
  "Agrega el producto al carrito para conocer los costos de envío.",
  "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal"
);
const prod8 = new Product(
  "https://plazavea.vteximg.com.br/arquivos/ids/28683714-450-450/image-db49e6c2d0fb4f48b67272d628d4e46b.jpg",
  "arpdsPr-8",
  "AirPods Pro",
  "Color	Blanco <br> Compatibilidad	Apple <br> Garantía	1 año",
  249,
  "15%",
  "Incluye impuesto País y percepción AFIP",
  25,
  prodImgs8,
  ["Negro espacial", "Azul acero", "Lila", "Gris espacial"],
  "Agrega el producto al carrito para conocer los costos de envío.",
  "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal"
);
const prod9 = new Product(
  "https://plazavea.vteximg.com.br/arquivos/ids/28663871-450-450/imageUrl_1.jpg",
  "arpds-9",
  "AirPods",
  "Incluye:Cable de conector <br> Potencia:100 mW <br> Características:Diseño over-ear",
  500,
  "10%",
  "Incluye impuesto País y percepción AFIP",
  30,
  prodImgs9,
  ["Negro espacial", "Gris espacial"],
  "Agrega el producto al carrito para conocer los costos de envío.",
  "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal"
);

//Array de los productos creados en instancias
const productsArray = [
  prod1,
  prod2,
  prod3,
  prod4,
  prod5,
  prod6,
  prod7,
  prod8,
  prod9,
];

//Array ofertas de la semana
const ofertsArray = [prod1, prod4, prod6];
