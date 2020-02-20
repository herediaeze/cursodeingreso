function Mostrar()
{

    var importe;
    var iva;
    var precioTotal;
    importe=prompt("ingrese un importe");
    importe=parseInt(importe);
    iva=(importe*21)/100;
    precioTotal=importe+iva;
    document.getElementById("importeFinal").value=precioTotal;
    
}
