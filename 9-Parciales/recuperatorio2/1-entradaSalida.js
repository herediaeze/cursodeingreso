//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var lado=document.getElementById("lado").value;
	var lado=parseInt(lado);
	var perimetro= lado+lado+lado;
	alert("el perimetro es de " + perimetro);
	
}

