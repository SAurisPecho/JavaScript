function printFavorites() {
    let myFavorite = document.querySelector(".containerMainFavorite");
    myFavorite.innerHTML = ""; // Limpiar el contenido actual
    // Obtener la lista de favoritos del almacenamiento local
    let fav = JSON.parse(localStorage.getItem("fav")) || [];
    // Verificar si hay productos favoritos
    if (fav.length === 0) {
        myFavorite.innerHTML = `
            <article class="product-cart" id="cartproducts">
                <div class="title-product">No tiene productos favoritos</div>
                <a class="inicio" href="index.html">
                <i class="fa-solid fa-heart-circle-plus"></i>
                </a>
            </article>
        `;
    } else {
        // Iterar sobre los productos favoritos y agregarlos al contenedor
        fav.forEach((product) => {
            const productDiv = document.createElement("article");
            productDiv.classList.add("product-cart");
            productDiv.setAttribute("id", "cartproducts");
            productDiv.setAttribute("data-product-id", product.id);
            productDiv.innerHTML = `
                <img class="product-imge" src="${product.image}"/>
                <div class="productdetailsyprice">
                    <div class="product-details">
                        <div class="title-product">${product.title}</div>
                        <div class="description-product">${product.description}</div>
                    </div>    
                    <div class="product-price">
                        <div class="top">
                            <div class="price">P.U. $ ${product.price}.00</div>
                            <button class="btn-dlt" onclick="deleteItem(event)"><i class="fa-solid fa-trash-can"></i></button>
                        </div>    
                    </div>
                </div>
            `;
            myFavorite.appendChild(productDiv);
        });
    }
}
// Llamar a la función para imprimir los favoritos al cargar la página
printFavorites();



function deleteItem(event) {
    if (event) {
        // Obtener el botón que activó la función
        const button = event.target;
        // Obtener el contenedor del producto
        const productDiv = button.closest(".product-cart");
        // Obtener el ID del producto
        const productId = productDiv.getAttribute("data-product-id");

        // Eliminar el producto de los favoritos y actualizar el localStorage
        removeFromFavorites(productId);
        // Volver a imprimir los favoritos para reflejar los cambios
        printFavorites();
    }
}
deleteItem();

function removeFromFavorites(productId) {
    let fav = JSON.parse(localStorage.getItem("fav")) || [];
    // Encontrar el índice del producto en el array de favoritos
    let index = fav.findIndex((favProduct) => favProduct.id === productId);
    // Si se encuentra el producto, eliminarlo del array de favoritos
    if (index !== -1) {
        fav.splice(index, 1);
        // Actualizar el almacenamiento local con la lista modificada de favoritos
        localStorage.setItem("fav", JSON.stringify(fav));
    }
}
removeFromFavorites();


// function toggleFavorite() {
//   const icon = document.querySelector("#heartIcon");
//   let myFavorite = document.querySelector(".containerMainFavorite");
//   // obtener la lista de favoritos del almacenamiento local
//   let fav = JSON.parse(localStorage.getItem("fav")) || [];
//   // verificar si el producto está en la lista de favoritos con findIndex
//   const index = fav.findIndex((favProduct) => favProduct.id === id);
//   // Si el producto esta en la lista de favoritos, lo eliminamos
//   if (index !== -1) {
//     fav.splice(index, 1);
//   // Cambiar el ícono del botón a 'fa-regular' porque ya es favorito
//     icon.classList.replace("fa-solid", "fa-regular");
//   } else { 
//     const addfav = productsArray.find((each) => each.id === id);
//     const newFavProduct = {
//         id: id,
//         title: addfav.title,
//         price: addfav.price,
//         image: addfav.image,
//         policytax: addfav.policytax,
//         description: addfav.description,
//     };
//     // Si el producto no está en la lista de favoritos, lo agregamos
//     fav.push(newFavProduct);
//     // Cambiar el ícono del botón a 'fa-solid' porque es favorito
//     icon.classList.replace("fa-regular", "fa-solid");
//   }
//      localStorage.setItem("fav", JSON.stringify(fav));
//      printFavorites();
// }


// toggleFavorite();

