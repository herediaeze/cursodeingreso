//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

	var ancho;
	var largo;
	var perimetro;
	var cantDeHilo;

	ancho=document.getElementById("ancho").value;
	ancho=parseInt(ancho);
	largo=document.getElementById("largo").value;
	largo=parseInt(largo);
	perimetro=(ancho*2)+(largo*2);
	cantDeHilo=perimetro*6;

	alert(cantDeHilo);


}

