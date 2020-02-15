//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numUno=prompt("ingrese un numero");
	numUno=parseInt(numUno);
	var numDos=prompt("ingrese otro numero");
	numDos=parseInt(numDos);
	var resultado;
	if(numUno==numDos){
		resultado=numUno*numDos;
		alert(numUno+ " * "+ numDos+ " = "+resultado);
	}
	else if( numUno > numDos){
		resultado=numUno-numDos;
		alert(numUno+ " - "+ numDos+ " = "+resultado);
	}
	else{
		resultado=numUno+numDos;
		alert(numUno+ " + "+ numDos+ " = "+resultado);
	}
	

	
}

