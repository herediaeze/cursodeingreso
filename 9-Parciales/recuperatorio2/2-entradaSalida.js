//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var precioDelProducto;
	var precioMasIva;
	
	precioDelProducto=prompt("ingrese el precio del producto.");
	precioDelProducto=parseInt(precioDelProducto);
	precioMasIva=(precioDelProducto*21)/100;

	document.getElementById("importe").value=precioDelProducto+ precioMasIva;

	alert("Funciona 2-EntradaSalida");
	
}

