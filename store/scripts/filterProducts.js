function captureText(event) {
  console.log(event);
  console.log(event.target);
  console.log(event.target.id);
  console.log(event.target.value);
  console.log(event.key);
}

const searchSelector = document.getElementById("search");

searchSelector.addEventListener("keyup", event => captureText(event)); //la función depende de un objeto con todos los datos del evento
