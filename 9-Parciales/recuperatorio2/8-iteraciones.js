function Mostrar()
{
	var numero;
	var contador=0;
	var suma=0;
	var numeroMax=0;
	var numeroMinimo=0;
	var cantPares=0;
	var promedio=0;
	var respuesta=true;
	while(respuesta==true){
		do{
			numero=prompt("ingrese un numero positivo");
			numero=parseInt(numero);
		}while(numero<=0);
		suma=suma+numero;
		if(numero%2==0){
			cantPares++
		}

		if(numeroMax==0 && numeroMinimo==0){
			numeroMax=numero;
			numeroMinimo=numero;
		}

		if(numero>numeroMax){
			numeroMax=numero;
		}
		if(numero<numeroMinimo){
			numeroMinimo=numero;
		}


		contador++;
		respuesta=confirm("Quiere seguir ingresando numero");




	}
	promedio=suma/contador;
	document.write("la cantidad de numeros pares que ingresaste fue de : "+ cantPares+ ". el promedio de todos los numeros es de : "+ promedio + ". la suma de todos los numeros es de : "+suma+ ". el numero mas grande que ingresaste fue el :  "+ numeroMax + " . el numero minimo fue : "+ numeroMinimo);	
}

