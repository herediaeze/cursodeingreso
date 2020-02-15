function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='s';
	var numero;
	
	while(respuesta=="s")
	{
		numero=parseInt(prompt("ingrese numero"));
		while(isNaN(numero))
		{
			numero=parseInt(prompt("error!,ingrese numero"));
		}
		acumulador=acumulador+numero;
		contador++;
		respuesta=prompt("desea continuar? s/n");
		respuesta=respuesta.toLowerCase(respuesta);
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN