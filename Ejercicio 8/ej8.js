

let numero1 = parseInt(window.prompt("Escribe un número"));

function factorial(num1) {
let suma=1
for (i= num1; i>1; i--){
suma=suma*i;

}
return suma;

}

window.alert(`El factorial es ${factorial(numero1)}`)


