// JavaScript source code
var variables = {
    nombreSubred : [],
    cantHost: []
};
function Red(ip, cantSubred, mascara) {
    this.ip = ip;
    this.subredes = [];
    this.cantSubred = cantSubred;
    this.mascara = mascara;
}
function CalcularSubredes(ip,cantSubred,mascara,nombreSubred2,cantHost2) {
    // Recibe los datos calculados por los Controles
    // Crea un objeto de la clase Fourier dando como 
    // parámetro los valores enviados por Controles
	organizarSubredes(cantHost2, nombreSubred2);
        var red = new Red(ip, cantSubred, mascara);
        var ipOrigen = convertQuartetToBinaryString(ip);
        var cont = 0;
        for (var i = 0; i < cantSubred; i++) {
            var nomb = variables.nombreSubred[i];
            var cantH = variables.cantHost[i];
            console.log("*************************************************************************");
            console.log("Nombre de subred " + nomb + " Cantidad de host " + cantH);
            if (i == 0) {
                var sub = new Subred(nomb, cantH, ipOrigen, mascara);
                red.subredes[i] = sub;
            }
            else {
                console.log("En Red "+red.subredes[cont].actualIp);
                var sub = new Subred(nomb, cantH, red.subredes[cont].actualIp, red.subredes[cont].mascara);
                cont = cont + 1;
                red.subredes[i] = sub;
            }
            
        }
        colocarDatos(red);
    
}
function organizarSubredes(arreglo, arreglo2) {
    var i, j;
    var temp1,temp2;
    for (i = 0; i < arreglo.length; i++)//Ordenamiento por burbuja de mayor a menor
    {
        for (j = 0; j < arreglo.length - 1; j++) {
            console.log("var1 "+arreglo[j]+" var2 "+arreglo[j+1]);
            if (parseInt(arreglo[j]) < parseInt(arreglo[j + 1])) {
                
                temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
                //console.log("TEMP "+temp+" ARREGLO[J] "+arreglo[j]+" ARREGLO[J+1] "+arreglo[j+1]);
                temp2 = arreglo2[j];
                arreglo2[j] = arreglo2[j + 1];
                arreglo2[j + 1] = temp2;
            }
        }
    }
    variables.nombreSubred = arreglo2;
    variables.cantHost = arreglo;
    /*
    for(var z=0;z< arreglo.length;z++){
        console.log("NOMBRES ORGANIZADOS "+arreglo[z]+" CANTIDAD ORGANIZADA "+arreglo2[z]);
    }  
    for(var z=0;z< variables.nombreSubred.length;z++){
        console.log("NOMBRES EN VARIABLES "+variables.nombreSubred[z]+" CANTIDAD EN VARIABLES "+variables.cantHost[z]);
    }
    */
}
function colocarDatos(red) {
    for (var i = 0; i < red.cantSubred; i++){
        if (red.mascara > red.subredes[i].mascara) {
            //Se podria colocar en un alert o en una casilla que el Subnetting no se realizo correctamente por la cantidad de hosts en alguna subred
        	var fila='<tr class="selected" id="fila'+cont+'" onclick="seleccionar(this.id);"><td>'+red.subredes[i].nombre+'</td><td>'+red.subredes[i].cantHost+'</td><td>'+red.subredes[i].red+'</td><td>'+red.subredes[i].mascara+'</td><td>'+red.subredes[i].broadcast+'</td></tr>';
    		$('#tabla').append(fila);
            alert("No se realizo correctamente el subnetting, ingrese una cantidad menor de hosts en las subredes");
            break;
            //preguntar a andres como cambiar el color de la fila en caso tal de que este exceda la mascara de red.
        }
        //En caso de que la mascara de la red sea menor que la de la subred, entonces se colocan los datos
        var fila='<tr class="selected" id="fila'+cont+'" onclick="seleccionar(this.id);"><td>'+red.subredes[i].nombre+'</td><td>'+red.subredes[i].cantHost+'</td><td>'+red.subredes[i].red+'</td><td>'+red.subredes[i].mascara+'</td><td>'+red.subredes[i].broadcast+'</td></tr>';
		$('#tabla').append(fila);
    }
    
}
function convertQuartetToBinaryString(ipAddress) {
    //var ipAddress = "192.168.1.0";
    console.log(ipAddress);
    var ip = ipAddress.split(".");

    var octet1 = parseInt(ip[0]);
    var octet2 = parseInt(ip[1]);
    var octet3 = parseInt(ip[2]);
    var octet4 = parseInt(ip[3]);

    var output = octet1;
    output = (output << 8) + octet2;
    output = (output << 8) + octet3;
    output = (output << 8) + octet4;
    console.log(output);
    return output;
}