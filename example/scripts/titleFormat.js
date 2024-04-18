function titleFormat (texto) {
    // para verificar si la cadena de texto no está vacía
    if (texto !== "") {
    //Corte la cadena en: primera letra y resto del título let cambioLetras = texto.charAt(0) + texto.slice(1)
    let cambioLetras = texto.charAt(0).toUpperCase()+texto.slice(1, texto.length).toLowerCase();
    //Para mostrar la longitud de la cadena
    console.log(cambioLetras);
    //Retorne la longitud de la cadena
    return cambioLetras.length;
} else { 
    //Si la cadena esta vacia se muestra el mensaje y retorno de 0
    console.log("Invalid input");
    return 0;
    }
}

console.log(titleFormat("hello world"));
console.log(titleFormat("HELLO world"));
console.log(titleFormat("HellO WOrLd"));
console.log(titleFormat(""));
console.log(titleFormat("abc"));
