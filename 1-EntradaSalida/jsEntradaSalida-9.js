/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo,aumento, resultado;

    sueldo=document.getElementById("sueldo").value;
    sueldo=parseInt(sueldo);


    aumento=10/100*sueldo;
    resultado=sueldo+aumento
    document.getElementById("resultado").value=resultado;

    alert("El aumento es de "+aumento); 
}
