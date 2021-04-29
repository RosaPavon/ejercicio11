
let num1=parseInt(window.prompt("Escribe un número"))

function numerillo(numero) {

  if(numero<0){
    alert("por favor introduzca un valor no negativo")

  }
  else{
    let dato = numero.tostring()
    let datonum = dato.length
    window.alert(`El número ${num1} tiene ${datonum}`);

  }

}

    




