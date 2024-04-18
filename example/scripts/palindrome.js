function palindrome (texto) {
    //Rebane la cadena (método split)
    let rbnr = texto.split("");
    //Invierta la lista “spliteada” (método reverse)
    let invrtr = rbnr.reverse();
    //Una la lista (método join)
    let lsta = invrtr.join("");
    if (lsta == texto){
        return true
    } else {
        return false
    }
}

console.log(palindrome("seres"));
console.log(palindrome("sarai"));
console.log(palindrome("salas"));