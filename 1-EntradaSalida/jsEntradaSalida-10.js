/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
     var sueldo,descuento, resultado;

    sueldo=document.getElementById("importe").value;
    sueldo=parseInt(sueldo);


    descuento=25/100*sueldo;
    resultado=sueldo-descuento;
    document.getElementById("resultado").value=resultado;

    alert("El descuento es de "+descuento); 
	
}
