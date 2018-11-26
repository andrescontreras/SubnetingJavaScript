// JavaScript source code
function Subred(nombre, cantHost, ip,mask) {
    this.nombre = nombre;
    this.cantHost = cantHost;
    this.mascara = calcMascara(cantHost);
    this.mascaraCuarteto = DecMascara(this.mascara);
    this.maxHost = MaxHosts(this.mascara);
    this.red = convertirIpACuarteto(ip) ;
    this.broadcast = convertirIpACuarteto(ip + this.maxHost + 1);
    this.actualIp = ip + this.maxHost + 2;
    console.log("Red " + this.red);
    console.log("Mascara " + this.mascara);
    console.log("Mascara cuarteto " + this.mascaraCuarteto);
    console.log("Max Hosts " + this.maxHost);
    console.log("Broadcast " + this.broadcast);
    console.log("actualIP, lo que se va a pasar como IP en el proximo ciclo " + this.actualIp);

}

function DecMascara(mascara) {
    if (mascara == 0) {
        return "0.0.0.0";
    }
    var allOne = -1;    // '255.255.255.255'
    var shifted = allOne << (32 - mascara);

    return convertirIpACuarteto(shifted);
}
function convertirIpACuarteto(ipAddress) {
    var octet1 = (ipAddress >> 24) & 255;
    var octet2 = (ipAddress >> 16) & 255;
    var octet3 = (ipAddress >> 8) & 255;
    var octet4 = ipAddress & 255;

    return octet1 + "." + octet2 + "." + octet3 + "." + octet4;
}
function MaxHosts(mask) {
    var mascara = parseInt(mask);
    return parseInt(Math.pow(2, 32 - mascara) - 2);
}
function calcMascara(numHost) {
    var numHost2=parseInt(numHost);
    var numHostAlt= numHost2+2; 
    var highestBit=0;
    var i = 0;
    while (numHostAlt > highestBit) {
        highestBit = Math.pow(2, i);
        i = i + 1;
    }
    console.log("Tamano necesario " + numHostAlt);
    console.log("Highest bit " + highestBit);
    //console.log("*******************************");
    var posicion = parseInt((Math.log(highestBit) / Math.log(2)));
    console.log("Esta es la posicion "+posicion);
    console.log("32 - posicion "+ 32 -posicion);
    return 32 - posicion ; 
}
