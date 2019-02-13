function Mostrar()
{
    var edad;
//tomo la edad
    edad=parseInt(document.getElementById("edad").value);
    if(edad>17){
        alert("es mayor de edad");
    }else if(edad>=13&&edad<=17){
        alert("es un adolescente");
    }else{
        alert("es menor de edad");
    }







}//FIN DE LA FUNCIÓN
