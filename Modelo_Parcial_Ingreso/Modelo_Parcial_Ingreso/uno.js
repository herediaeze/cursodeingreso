
function mostrar()
{
var ladoA= document.getElementById("ladoA").value;
var ladoB= document.getElementById("ladoB").value;
var angulosRectos= document.getElementById("angulosRectos").value;

ladoA=parseInt(ladoA);
ladoB=parseInt(ladoB);

if (angulosRectos == "si") {

if (ladoA == ladoB) {

    //cuadrado
    resultado = ladoA*ladoB;
    
    alert("resultados: lados concatenados:" + ladoA+ladoB + "la superficie es: " + resultado);
 }
 else { 
    // rectangulo
    resultado = ladoA*ladoB;
    alert (" resultado: lados concatenados:" +ladoA+ladoB + "la superficie es:" + resultado);
}
} 
else if (ladoA == ladoB) {
// rombo
resultado = ladoA+ladoB;
alert("resultado: lados concatenados: " +ladoA+ladoB + "la suma de sus lados es:" + resultado); 
}
 else {

    //rombide 
    resultado = (ladoA+ladoB)*2;

    alert("resultado: lados concatenados" +ladoA+ladoB+ "el perimetro es:" + resultado);
 }
}