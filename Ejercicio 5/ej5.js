
let numero1 = parseInt(window.prompt("Escribe un número"));
let numero2 = parseInt(window.prompt("Escribe un número"));

function compara(num1, nuum2) {
  let resultado = num1 > nuum2;
  if(resultado){
    console.log(`${num1} es el número mayor`);
}
else{
  console.log(`${num1} no es el número mayor`);

}
}


compara(numero1, numero2);