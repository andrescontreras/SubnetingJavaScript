// JavaScript source code

function ObtenerDatos() {
    var ip = document.getElementById("network").value;
    var cantSubred = document.getElementById("numsubnets").value;
    var mascara = document.getElementById("mask").value;
    var datosCumple = validarDatos(ip, cantSubred, mascara);
    console.log("Esto es ip " + ip);
    console.log("Esto es cant Subred " + cantSubred);
    console.log("Esto es mascara " + mascara);
    console.log("---------------------------------------------");
    if (datosCumple == true) {
        var nombreSubred2 = GetNombreSubredes(cantSubred);
        var cantHost2 = GetCantHostsSubredes(cantSubred); 
        CalcularSubredes(ip, cantSubred, mascara,nombreSubred2,cantHost2);
    }
}
function validarDatos(ip, cantSubred, mascara) {
    // Revisa que los valores de los usuarios sean correctos
    if (ip.length == 0) {
        alert("Debe colocar algún dato en la casilla del ip");
        return false;
    }
    else if (cantSubred.length == 0) {
        alert("Debe colocar algún dato en la casilla del numero de subredes");
        return false;
    }
    else if (mascara.length == 0) {
        alert("Debe colocar algún dato en la casilla de la mascara");
        return false;
    }
    else
        return true;
}

function GetNombreSubredes(numsubnets) {
    var nombSubredes = [];
    for(var i=0;i<numsubnets;i++)
    {
        var aux = document.getElementById("nomb"+i).value;
        console.log("Atrapando el nombre de la subnet "+aux);
        nombSubredes.push(aux);
    }
    return nombSubredes;
}
function GetCantHostsSubredes(numsubnets) {
    var cantHost = [];
    for(var i=0;i<numsubnets;i++)
    {
        var aux = document.getElementById("subnet"+i).value;
        console.log("Cantidad de la subnet "+aux);
        cantHost.push(aux);
    }
         
    return cantHost;
}