window.onload = globos;

var alto = window.innerHeight - 100;
var ancho = window.innerWidth;


function creaglobos(n) {
    var i;
    var cadena = "";

    for (i = 0; i < n; i++) {
        var id = "imglobo" + i;
        var random = Math.floor((Math.random() * (ancho - 200)) - 0);
        document.getElementById("body").innerHTML += "<div id='" + id + "' class='globo'><img src='img/globo.png'  class='imglobo' onclick=estoupa('" + id + "');play()></div>";

        document.getElementById(id).style.left = parseInt(random) + parseInt(100) + "px";


        if( i == (n-1)){
            cadena += "mover('"+id+"')" 
        }else {
            cadena += "mover('"+id+"');" 
        }
    }
    
        setInterval(function(){eval(cadena)},70);
    
    

}

function mover(id) {


    var globito = document.getElementById(id);
    var anchoo = document.getElementById(id).style.left;
    anchoo = anchoo.substring(0, anchoo.length - 2);

    var random = Math.floor((Math.random() * 2) - 0);


    if (alto < -90) {
        alto =  window.innerHeight;
        globito.style.top =  alto;

    } else {
        alto--;
        if (random == 1) {
            anchoo = parseInt(anchoo) + 3;
        } else if (random == 0) {
            anchoo = anchoo - 3;
        }

        globito.style.top = alto + "px";
        globito.style.left = anchoo + "px";
    }

}


function play(){
    var x = document.getElementById("myAudio");
    x.play();
}
function estoupa(id) {
    
    document.getElementById(id).innerHTML = "<div id='" + id + "' class='globo'><img src='img/globoexplotado.png'  class='imglobo'></div>";
    
    setTimeout(function () { document.getElementById(id).style.display = "none" }, 500);
}

function globos() {

    var numero = prompt("Cantidad de globos:");

    creaglobos(numero);

}