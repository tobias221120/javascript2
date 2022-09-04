let numeroIntegrantes=  parseInt(prompt("ingrese la cantidad de miembros de su familia"))
let totalEdades = 0;
 let contador=1;
 
  

while (contador <= numeroIntegrantes){
   edad =parseInt(prompt(`ingrese la edad del integrante `));
 
if(edad<1){
      alert("error no se puede ingresar edades menores a 1 ")
   } 
   
   totalEdades = totalEdades + edad;
   contador++;

}
function resultado(){
    let mediaEdades=totalEdades/numeroIntegrantes;
document.write("la media de las edades de la familia es " + mediaEdades);
}
resultado()

