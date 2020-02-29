function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
while(contador<5)
{
	numero=parseInt(prompt("ingrese numero:"));
	while(isNaN(numero))
	{
		numero=parseInt(prompt("errror!,ingrese un numero"));
	}
	contador++;
	acumulador=acumulador+numero;
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN