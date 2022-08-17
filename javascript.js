/*
    Las "llaves" de encriptación que utilizaremos son las siguientes:

    La letra "a" es convertida para "ai"
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"

    **Requisitos:**
    - Debe funcionar solo con letras minúsculas
    - No deben ser utilizados letras con acentos ni caracteres especiales
    - Debe ser posible convertir una palabra para la versión encriptada también         devolver una palabra encriptada para su versión original. 
*/
function encriptacion(){
    var text = document.getElementById("texto-recivido").value.toLowerCase(); //esto transformara el texto a minusculas
    var textEncriptado = text.replace(/e/img,"enter");
    var textEncriptado = textEncriptado.replace(/o/img,"ober");
    var textEncriptado = textEncriptado.replace(/i/img,"imes");
    var textEncriptado = textEncriptado.replace(/a/img,"ai");
    var textEncriptado = textEncriptado.replace(/u/img,"ufat");

    document.getElementById("texto-encriptado").innerHTML = textEncriptado;
    document.getElementById("texto-recivido").value = "";
}

function desencriptar(){
    var text = document.getElementById("texto-recivido").value.toLowerCase(); 

    var textEncriptado = text.replace(/enter/img,"e");
    var textEncriptado = textEncriptado.replace(/ober/img,"o");
    var textEncriptado = textEncriptado.replace(/imes/img,"i");
    var textEncriptado = textEncriptado.replace(/ai/img,"a");
    var textEncriptado = textEncriptado.replace(/ufat/img,"u"); 

    document.getElementById("texto-encriptado").innerHTML = textEncriptado;
}
function copy(){
    var textoAcopiar = document.getElementById("texto-encriptado");
    textoAcopiar.select();
    document.execCommand("copy")
    alert("Texto Copiado");

    
}