
do{
agno = parseInt(window.prompt("Escribe un año"));
  
bisiesto(agno)
? window.alert(`El ${agno} es bisiesto`)   
: window.alert(`El ${agno} no es bisiesto`)   
}
while(agno!==0){
  
  
function bisiesto(agno){
  if ((agno %4) !==0){
    return false
  }
  else if (((agno %4) === 0) && ((agno% 100)!==0)){
    return true
  }
  else if (((agno %4) === 0) && ((agno% 100)===0) && ((agno% 400)===0)){
    return true
  }
  else{
    return false
} 

}
}