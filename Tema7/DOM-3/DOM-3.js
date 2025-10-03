var patronNome = /^[A-Z]{1}\w*[a-zA-ZñÑáéíóúüÁÉÍÓÚ\s]*[a-zA-ZñÑáéíóúüÁÉÍÓÚ]$/;
var patronApelidos = /^[A-Z]{1}\w*[a-zA-ZñÑáéíóúüÁÉÍÓÚ\s]*[a-zA-ZñÑáéíóúüÁÉÍÓÚ]$/;
var patronTelefono = /^\d{9}$/;
var patronFecha = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/,-](?:0?[1-9]|1[0-2])|(?:29|30)[/,-](?:0?[13-9]|1[0-2])|31[/,-](?:0?[13578]|1[02]))[/,-](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/,-]0?2[/,-](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
var patronEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var cadena = "";
var i = 1;
var nome;
var apelidos;
var tel;
var email;
var fecha;

function comprobar() {
    nome = document.getElementById("nombre").value;
    apelidos = document.getElementById("apelidos").value;
    email = document.getElementById("email").value;
    tel = document.getElementById("tel").value;
    fecha = document.getElementById("fecha").value;
    if (nome.match(patronNome)) {
        document.getElementById("nco").innerHTML="Nombre con formato correcto: "+nome;
        document.getElementById("nin").innerHTML=cadena;
    }
    else { if(nome==cadena){
        document.getElementById("nin").innerHTML="Nombre sin rellenar. "+nome;
        document.getElementById("nco").innerHTML=cadena;}
    else{
       document.getElementById("nin").innerHTML="Nombre con formato incorrecto: "+nome;
        document.getElementById("nco").innerHTML=cadena;}
    }


    if (apelidos.match(patronApelidos)) {
        document.getElementById("aco").innerHTML="Apellidos con formato correcto: "+apelidos;
        document.getElementById("ain").innerHTML=cadena;
    }
    else { if(apelidos==cadena){
        document.getElementById("ain").innerHTML="Apellidos sin rellenar. "+apelidos;
        document.getElementById("aco").innerHTML=cadena;}
    else{
       document.getElementById("ain").innerHTML="Apellidos con formato incorrecto: "+apelidos;
        document.getElementById("aco").innerHTML=cadena;}
    }


    if (email.match(patronEmail)) {
        document.getElementById("eco").innerHTML="Email con formato correcto: "+email;
        document.getElementById("ein").innerHTML=cadena;
    }
    else { if(email==cadena){
        document.getElementById("ein").innerHTML="Email sin rellenar. "+email;
        document.getElementById("eco").innerHTML=cadena;}
    else{
       document.getElementById("ein").innerHTML="Email con formato incorrecto: "+email;
        document.getElementById("eco").innerHTML=cadena;}
    }


    if (tel.match(patronTelefono)) {
        document.getElementById("tco").innerHTML="Teléfono con formato correcto: "+tel;
        document.getElementById("tin").innerHTML=cadena;
    }
    else { if(tel==cadena){
        document.getElementById("tin").innerHTML="Teléfono sin rellenar. "+tel;
        document.getElementById("tco").innerHTML=cadena;}
    else{
       document.getElementById("tin").innerHTML="Teléfono con formato incorrecto: "+tel;
        document.getElementById("tco").innerHTML=cadena;}
    }


    if (fecha.match(patronFecha)) {
        document.getElementById("fco").innerHTML="Fecha de nacimiento con formato correcto: "+fecha;
        document.getElementById("fin").innerHTML=cadena;
    }
    else { if(fecha==cadena){
        document.getElementById("fin").innerHTML="Fecha de nacimiento sin rellenar. "+fecha;
        document.getElementById("fco").innerHTML=cadena;}
    else{
       document.getElementById("fin").innerHTML="Fecha de nacimiento con formato incorrecto: "+fecha;
        document.getElementById("fco").innerHTML=cadena;}
    }

}   

