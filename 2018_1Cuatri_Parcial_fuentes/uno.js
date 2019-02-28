
function mostrar()
{
    var ancho, largo, perimetro;

    ancho=parseInt(prompt("escriba el ancho de un rectangulo"));
    largo=parseInt(prompt("escriba el largo de un rectangulo"));

    perimetro= ancho*2 + largo*2;

    alert("el perimetro del rectangulo es de " +perimetro);

}
