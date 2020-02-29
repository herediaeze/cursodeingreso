function mostrar()
{
  var nombre;
  var genero; 
  var edad;
  var peso;
  var acumuladoresDeEdades=0;
  var pesoMinimo=0;
  var personaMenosPesada;
  var contadorDistinto=0;
  var respuesta="."
  var promedio=0;
  var contadorMayores25=0;
  
  for (var i = 0; i <4; i++ ) {

    nombre= prompt("ingrese un nombre");

    genero= prompt("ingrese un genero, masculino/ femenino/ otro");
    while(genero != "femenino" && genero!= "masculino" && genero!= "otro"){  

    edad= parseInt(prompt("ingrese edad entre 18 y 100"))
    while ( edad<=18 || edad>=100){
    edad=(prompt("error ingrese una edad valida"))}

    if (edad>=25){
    acumuladoresDeEdades=acumuladoresDeEdades+edad;
    contadorMayores25++;}
    
    if (peso<pesoMinimo){
    pesoMinimo=peso
    personaMenosPesada=nombre};
    
    if (genero!= "masculino" || peso>80){
    contadorDistinto++;}

    if (contadorMayores25>0){
    promedio=acumuladoresDeEdades/contadorMayores25
    respuesta+= "el promedio de edades es mayor a 25=" + promedio+"bri>"    
    }else {
        respuesta+= "no hay edades mayores a 25" + "br>"
    }
    
    respuesta+= "nombre de la persona menos pesada y su peso:" +personaMenosPesada+ pesoMinimo+ "kg"+ "br>"
    respuesta+= "cantidad personas de genero distinto a masculino o peso mayor a 80: "+contadorDistinto+ "br>"
    
}
  }}
