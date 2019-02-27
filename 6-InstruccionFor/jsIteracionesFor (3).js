function Mostrar()
{

var repetciones =parseInt(prompt("ingrese el número de repeticiones"));
    while(isNaN(repetciones)){
        repetciones=parseInt(prompt("eso no es un numero ingrese un numero nuevamente"));
    }
for(var i=0;i<repetciones;i++){
    console.log("hola utn");
}



}//FIN DE LA FUNCIÓN