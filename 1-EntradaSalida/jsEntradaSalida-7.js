/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numUno;
    var numDos;
    var suma;
        numUno = parseInt(document.getElementById("numeroUno").value);
        numDos = parseInt(document.getElementById("numeroDos").value);
        suma = numUno + numDos;
    alert ("La suma es " + suma);
}

function restar()
{
    var numUno;
    numUno = parseInt(document.getElementById("numeroUno").value);
var numDos;
    numDos = parseInt(document.getElementById("numeroDos").value);
var resta;
    resta = numUno - numDos;
alert ("La resta es "+ resta);
}

function multiplicar()
{ 
    var numUno;
    numUno = parseInt(document.getElementById("numeroUno").value);
var numDos;
    numDos = parseInt(document.getElementById("numeroDos").value);
var multiplicacion;
    multiplicacion = numUno * numDos;
alert ("La multiplicación es " + multiplicacion);
}

function dividir()
{
	var numUno;
        numUno = parseInt(document.getElementById("numeroUno").value);
    var numDos;
        numDos = parseInt(document.getElementById("numeroDos").value);
    var division;
        division = numUno / numDos;
    alert ("La división es " + division);
}

