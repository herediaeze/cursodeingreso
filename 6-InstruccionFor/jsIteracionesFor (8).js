function Mostrar()
{
    var numero =prompt("ingrese un numero");
    var esPrimo="es primo";
    var noEsPrimo="no es primo";
    

    for(i=1;i<=numero;i++){
        
            if(numero==i || i==1){
              alert("el numero " + numero +" "+esPrimo);
              break; 

            } 
            else{
                alert("el numero " + numero +" "+noEsPrimo);
                break;
            }
        
        }

        


}//FIN DE LA FUNCIÓN