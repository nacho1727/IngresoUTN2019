function Mostrar()
{
    var edad, estado;
//tomo la edad
    edad=parseInt(document.getElementById("edad").value);
    estado=document.getElementById("estadoCivil").value;
    if(edad<18 && estado!="Soltero"){
        alert("es muy pequeño para No ser soltero");
    }

	


}//FIN DE LA FUNCIÓN