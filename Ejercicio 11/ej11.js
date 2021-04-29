
let numero = parseInt(window.prompt(" Indique a qué moneda desea realizar la conversión libras pulsa 1, dolares pulsa 2 o yen pulsa 3."));
let money = parseInt(window.prompt("Escribe la cantidad en euros"));

function convertir(cantidad, moneda){
if(numero===1){
     console.log(money*0.86)
 
}
else if(numero===2){
  function dolar(num2){
    console.log(money*1.28611 )
}
}
else if(numero===3){
  function yen(num2){
    console.log(money*129.852)
}
}
else{
    console.log(`Introduzca un valor correcto`)
}
}
  


