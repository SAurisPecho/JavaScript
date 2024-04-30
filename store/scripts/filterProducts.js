// function captureText(event) {
//   console.log(event);
//   console.log(event.target);
//   console.log(event.target.id);
//   console.log(event.target.value);
//   console.log(event.key);
// }

// const searchSelector = document.getElementById("search");

// searchSelector.addEventListener("keyup", event => captureText(event)); //la función depende de un objeto con todos los datos del evento

const searchSelector = document.getElementById("iSearch");  //traemose elemento hacia donde se renderizara y lo guardamos en una variable
searchSelector.addEventListener("keyup", (event) => captureText(event));  //a la variable le asignamos un event listener que recibe como evento keyup

let textSearch = ""; //asignamos una variable vacia para el texto buscado

function captureText(event) {     //en una funcion  tendremos como parametro event lo que recibe de entrada
  let textSearch = searchSelector.value.toLowerCase();  //guardamos en una variable el evento recibido, con value solo obtemos el valor ademas de que se convierte en minusculas
  let filterProducts = productsArray.filter((product) => {  //en otra variable filtramos el array, con el parametro prod que es cada valor siendo filtrado
    let productTitle = product.title.toLowerCase().includes(textSearch);  //la funcion que debe realizar con el product filtrado en este caso se uso includes
    return productTitle;
  });
  loadProducts(filterProducts); //pasamos a loadProducts como argumento el resultados de filterProducts para que lo carque en la pagina
  }

textSearch = searchSelector.value //en caso se borre lo buscado , text search que esta vacio igualamos al valor del evento
if (textSearch.length == 0) {   //si esto sucede se caraga la lista normal de prooductsArray
  loadProducts(productsArray);
}

