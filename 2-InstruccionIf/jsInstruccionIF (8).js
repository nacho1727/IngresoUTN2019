function Mostrar()
{
    var edad,estado;

    edad=parseInt(document.getElementById("edad").value);
    estado=document.getElementById("estadoCivil").value;

    if(edad>17&&estado=="Soltero"){
        alert("Esta soltero y no es menor ");

    }

	


}//FIN DE LA FUNCIÓN