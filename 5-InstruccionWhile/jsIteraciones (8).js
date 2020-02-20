function Mostrar()
{

	
	var positivo=0;
	var negativo=1;
	var respuesta=true;
	var numero;
	do
	{
		numero=parseInt(prompt("ingrese numero"));
		while(isNaN(numero))
		{
			numero=parseInt(prompt("error!,ingrese numero"));
		}
		//sumo en positivos, resto en negativos.
		if(numero<0)
		{
			negativo=negativo*numero;
		}
		else
		{
			positivo=positivo+numero;
		}
		
		respuesta=confirm("desea añadir algun numero?");
	}while(respuesta);

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN