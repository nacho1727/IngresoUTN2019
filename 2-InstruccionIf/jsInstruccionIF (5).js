function Mostrar()
{
    var edad;
//tomo la edad
    edad=parseInt(document.getElementById("edad").value);
    if(edad<13||edad>17){
        alert("no es un adolescente");
    }


}//FIN DE LA FUNCIÓN