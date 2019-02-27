function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true; 
	var numero
while(respuesta==true){
	contador++;
	numero=parseInt(prompt("Escriba un numero "));
	while(isNaN(numero)){
		numero=parseInt(prompt("Eso no es un numero, ingrese un numero"));
	}
	acumulador=acumulador+numero;

	respuesta=confirm("Desea seguir ingresando datos? ")
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN