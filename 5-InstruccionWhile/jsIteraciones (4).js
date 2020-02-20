function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	
	while (isNaN(numero)){ 
	
		prompt("ingrese un número entre 0 y 10.");
	}
	numero= parseInt(numero) || numero>10 || numero<0) { 
		numero = parseInt ("reingrese un numero");
		numero= parseInt(numero);
	}

	document.getElementById("numero").value=numero;

}
//FIN DE LA FUNCIÓN