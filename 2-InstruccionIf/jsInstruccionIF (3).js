function Mostrar()
{
    var edad;
//tomo la edad
    edad=parseInt(document.getElementById("edad").value);
    if(edad>=18){
        alert("es mayor de edad");
    }else{
        alert("es menor de edad");
    }


}//FIN DE LA FUNCIÓN