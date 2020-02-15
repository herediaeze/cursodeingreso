function Mostrar()
{
    var alto;
    var ancho;
    var alambreTotal;
    var perimetro;

    alto=document.getElementById("largo").value;
    ancho=document.getElementById("ancho").value;
    
    perimetro=(alto*2) + (ancho*2);

    alambreTotal=perimetro*3;

    alert(alambreTotal);

}
