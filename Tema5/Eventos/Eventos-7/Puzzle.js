var pieza1 = 0;
var pieza2 = 0;
var pieza3 = 0;
var pieza4 = 0;
var pieza5 = 0;
var pieza6 = 0;
var pieza7 = 0;
var pieza8 = 0;

function coordenadas1() {
    var x = document.getElementById("mydiv1").style.left;
    var y = document.getElementById("mydiv1").style.top;
    x = x.substring(0, x.length - 2);
    y = y.substring(0, y.length - 2);
    document.getElementById("coordenadas1").innerHTML = "<p>Coge una pieza del puzzle:</p>"
    if ((parseInt(x) >= 493) && (parseInt(x) <= 523) && (parseInt(y) >= 69) && (parseInt(y) <= 99)) {
        pieza1 = 1;
        document.getElementById("mydiv1").style.left = "508px";
        document.getElementById("mydiv1").style.top = "84px";
    } else {
        pieza1 = 0;
    }
} setInterval(coordenadas1, 10)
function coordenadas2() {
    var x = document.getElementById("mydiv2").style.left;
    var y = document.getElementById("mydiv2").style.top;
    x = x.substring(0, x.length - 2);
    y = y.substring(0, y.length - 2);
    document.getElementById("coordenadas1").innerHTML = "<p>Coge una pieza del puzzle:</p>"
    if ((parseInt(x) >= 493) && (parseInt(x) <= 523) && (parseInt(y) >= 130) && (parseInt(y) <= 160)) {
        pieza2 = 1;
        document.getElementById("mydiv2").style.left = "508px";
        document.getElementById("mydiv2").style.top = "145px";
    } else {
        pieza2 = 0;
    }
} setInterval(coordenadas2, 10)
function coordenadas3() {
    var x = document.getElementById("mydiv3").style.left;
    var y = document.getElementById("mydiv3").style.top;
    x = x.substring(0, x.length - 2);
    y = y.substring(0, y.length - 2);
    document.getElementById("coordenadas1").innerHTML = "<p>Coge una pieza del puzzle:</p>"
    if ((parseInt(x) >= 543) && (parseInt(x) <= 573) && (parseInt(y) >= 69) && (parseInt(y) <= 99)) {
        pieza3 = 1;
        document.getElementById("mydiv3").style.left = "558px";
        document.getElementById("mydiv3").style.top = "84px";
    } else {
        pieza3 = 0;
    }
} setInterval(coordenadas3, 10)
function coordenadas4() {
    var x = document.getElementById("mydiv4").style.left;
    var y = document.getElementById("mydiv4").style.top;
    x = x.substring(0, x.length - 2);
    y = y.substring(0, y.length - 2);
    document.getElementById("coordenadas1").innerHTML = "<p>Coge una pieza del puzzle:</p>"
    if ((parseInt(x) >= 633) && (parseInt(x) <= 663) && (parseInt(y) >= 130) && (parseInt(y) <= 160)) {
        pieza4 = 1;
        document.getElementById("mydiv4").style.left = "648px";
        document.getElementById("mydiv4").style.top = "145px";
    } else {
        pieza4 = 0;
    }
} setInterval(coordenadas4, 10)
function coordenadas5() {
    var x = document.getElementById("mydiv5").style.left;
    var y = document.getElementById("mydiv5").style.top;
    x = x.substring(0, x.length - 2);
    y = y.substring(0, y.length - 2);
    document.getElementById("coordenadas1").innerHTML = "<p>Coge una pieza del puzzle:</p>"
    if ((parseInt(x) >= 565) && (parseInt(x) <= 595) && (parseInt(y) >= 209) && (parseInt(y) <= 239)) {
        pieza5 = 1;
        document.getElementById("mydiv5").style.left = "580px";
        document.getElementById("mydiv5").style.top = "224px";
    } else {
        pieza5 = 0;
    }
} setInterval(coordenadas5, 10)
function coordenadas6() {
    var x = document.getElementById("mydiv6").style.left;
    var y = document.getElementById("mydiv6").style.top;
    x = x.substring(0, x.length - 2);
    y = y.substring(0, y.length - 2);
    document.getElementById("coordenadas1").innerHTML = "<p>Coge una pieza del puzzle:</p>"
    if ((parseInt(x) >= 633) && (parseInt(x) <= 663) && (parseInt(y) >= 286) && (parseInt(y) <= 314)) {
        pieza6 = 1;
        document.getElementById("mydiv6").style.left = "648px";
        document.getElementById("mydiv6").style.top = "291px";
    } else {
        pieza6 = 0;
    }
} setInterval(coordenadas6, 10)
function coordenadas7() {
    var x = document.getElementById("mydiv7").style.left;
    var y = document.getElementById("mydiv7").style.top;
    x = x.substring(0, x.length - 2);
    y = y.substring(0, y.length - 2);
    document.getElementById("coordenadas1").innerHTML = "<p>Coge una pieza del puzzle:</p>"
    if ((parseInt(x) >= 493) && (parseInt(x) <= 523) && (parseInt(y) >= 209) && (parseInt(y) <= 239)) {
        pieza7 = 1;
        document.getElementById("mydiv7").style.left = "508px";
        document.getElementById("mydiv7").style.top = "224px";
    } else {
        pieza7 = 0;
    }
} setInterval(coordenadas7, 10)
function coordenadas8() {
    var x = document.getElementById("mydiv8").style.left;
    var y = document.getElementById("mydiv8").style.top;
    x = x.substring(0, x.length - 2);
    y = y.substring(0, y.length - 2);
    document.getElementById("coordenadas1").innerHTML = "<p>Coge una pieza del puzzle:</p>"
    if ((parseInt(x) >= 493) && (parseInt(x) <= 523) && (parseInt(y) >= 310) && (parseInt(y) <= 340)) {
        pieza8 = 1;
        document.getElementById("mydiv8").style.left = "508px";
        document.getElementById("mydiv8").style.top = "325px";
    } else {
        pieza8 = 0;
    }
} setInterval(coordenadas8, 10);

function victoria(){
    if(pieza1==1 && pieza2==1 && pieza3==1 && pieza4==1 && pieza5==1 && pieza6==1 && pieza7==1 && pieza8==1){
    document.getElementById("ganador").innerHTML="<h1>HAS GANADO!!</h1>"
    document.body.style.background = "green";
    }else{
        document.getElementById("ganador").innerHTML="<p>Sigue completando el puzzle!!</p>"
        document.body.style.background = "red";
    }
}setInterval(victoria, 10);

function desornados2() {
    var cantidadNumeros = 8;
    var myArray = []
    var cadena="";
    while (myArray.length < cantidadNumeros) {
        var numeroAleatorio = Math.ceil(Math.random() * cantidadNumeros);
        var existe = false;
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] == numeroAleatorio) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            myArray[myArray.length] = numeroAleatorio;
            cadena = "mydivheader"+numeroAleatorio;
            if(i==0){
                document.getElementById("mydivheader1").innerHTML = "<img src='img/"+numeroAleatorio+".png' id='imagens"+numeroAleatorio+"' alt='Real Madrid'>"
                document.getElementById("mydivheader1").id="mydivheader"+numeroAleatorio;
            }else if(i==1){
                document.getElementById("mydivheader2").innerHTML = "<img src='img/"+numeroAleatorio+".png' id='imagens"+numeroAleatorio+"' alt='Real Madrid'>"
                document.getElementById("mydivheader2").id="mydivheader"+numeroAleatorio;
            }else if(i==2){
                document.getElementById("mydivheader3").innerHTML = "<img src='img/"+numeroAleatorio+".png' id='imagens"+numeroAleatorio+"' alt='Real Madrid'>"
                document.getElementById("mydivheader3").id="mydivheader"+numeroAleatorio;
            }else if(i==3){
                document.getElementById("mydivheader4").innerHTML = "<img src='img/"+numeroAleatorio+".png' id='imagens"+numeroAleatorio+"' alt='Real Madrid'>"
                document.getElementById("mydivheader4").id="mydivheader"+numeroAleatorio;
            }else if(i==4){
                document.getElementById("mydivheader5").innerHTML = "<img src='img/"+numeroAleatorio+".png' id='imagens"+numeroAleatorio+"' alt='Real Madrid'>"
                document.getElementById("mydivheader5").id="mydivheader"+numeroAleatorio;
            }else if(i==5){
                document.getElementById("mydivheader6").innerHTML = "<img src='img/"+numeroAleatorio+".png' id='imagens"+numeroAleatorio+"' alt='Real Madrid'>"
                document.getElementById("mydivheader6").id="mydivheader"+numeroAleatorio;
            }else if(i==6){
                document.getElementById("mydivheader7").innerHTML = "<img src='img/"+numeroAleatorio+".png' id='imagens"+numeroAleatorio+"' alt='Real Madrid'>"
                document.getElementById("mydivheader7").id="mydivheader"+numeroAleatorio;
            }else if(7){
                document.getElementById("mydivheader8").innerHTML = "<img src='img/"+numeroAleatorio+".png' id='imagens"+numeroAleatorio+"' alt='Real Madrid'>"
                document.getElementById("mydivheader8").id="mydivheader"+numeroAleatorio;
            }
            
        }

    }
}
window.onload = function iniciar(){
    dragElement(document.getElementById("mydiv1"));
    dragElement(document.getElementById("mydiv2"));
    dragElement(document.getElementById("mydiv3"));
    dragElement(document.getElementById("mydiv4"));
    dragElement(document.getElementById("mydiv5"));
    dragElement(document.getElementById("mydiv6"));
    dragElement(document.getElementById("mydiv7"));
    dragElement(document.getElementById("mydiv8"));
}
    

    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {

        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {

        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
