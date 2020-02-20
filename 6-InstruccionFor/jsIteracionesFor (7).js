function Mostrar()
{
    var contador=0;
    var numero= prompt("ingrese un numero");
    var numerosDivisibles;
    for(i=1;i<=numero;i++){
        if(numero%i ==0){
            if(i==1){
                numerosDivisibles=i + " ";
            }
            else{

                numerosDivisibles=numerosDivisibles +" - "+ i;
            }
            contador++;
        }


    }
    alert("los numeros divisbles de  "+numero +" son: "+numerosDivisibles);
    alert("se encontrarron "+ contador+" numeros divisibles");

}//FIN DE LA FUNCIÓN