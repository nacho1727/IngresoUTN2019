function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero=Math.floor(Math.random()*10+1);
	alert(numero);
	
	if(numero>=9){
		alert("EXELENTE");
	}else if(numero>=4&&numero<9){
		alert("APROBO");
	}else{
		alert("Vamos, la proxima se puede");
	}
	

}//FIN DE LA FUNCIÓN
