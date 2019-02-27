function Mostrar()
{
	var numero
	var respuesta=true
	var maximo
	var minimo
	var flag=0
	while(respuesta==true)
	{
		numero=parseInt(prompt("ingrese un numero"));
		while(isNaN(numero)){
			numero=parseInt(prompt("Esto no es un numero, porfavor ingrese un numero"));
		}
		if(flag==0){
			maximo=numero
			minimo=numero
		}
		if(numero>maximo){
			maximo=numero
		}else if(numero<minimo){
			minimo=numero
		}
		flag=1
		respuesta=confirm("desea continuar ingresando datos?");
	}
	document.getElementById("maximo").value=maximo
	document.getElementById("minimo").value=minimo




}//FIN DE LA FUNCIÓN