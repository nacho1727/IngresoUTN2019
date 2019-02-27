function Mostrar()
{

	var positivo=0;
	var negativo=1;
	var numero
	var flag=0
	
	var respuesta='si';
	do{
		
		numero=parseInt(prompt("ingrese un numero"));
		while(isNaN(numero)){
			numero=parseInt(prompt("eso no es un numero, porfavor ingrese un numero"));
		}
		if(numero>=0){
			numero=positivo+numero;
		}
		else{
			numero=negativo*numero;
			flag=1
		}
		respuesta=prompt("Desea seguir ingresando datos?");

	}while(respuesta=="si");


document.getElementById('suma').value=positivo;
if(flag==0){
	negativo=0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN