

let numero = parseInt(window.prompt("Para calcular el área de un círculo pulsa 1, cuadrado pulsa 2 o triángulo pulsa 3."));

if(numero===1){
  let radio = parseInt(window.prompt("Di el radio del círculo"));
  function radcirc(num1){
    resultado= (num1*num1)*Math.PI
    console.log(`El área del cículo es ${radio(numero)}`)

  }
}

else if(numero===2){
  let areacuadr1 = parseInt(window.prompt("Di la base del cuadrado"));
  let areacuadr2 = parseInt(window.prompt("Di la altura del cuadrado"));

  function areacuad(num1,num2){
    resultado= (num1*num1)/2
    console.log(`El área del cículo es ${areacuad(areacuadr1, areacuadr2)}`)

}

}

else if(numero===3){
  let areatri = parseInt(window.prompt("Di el lado del triángulo"));

  function areatria(num1){
    resultado= num1*num1
    console.log(`El área del cículo es ${areatria(numero)}`)

}

}
else{

    console.log(`Introduzca un valor correcto`)

}


  


