var i, j;
var imgoro = new Array('cartas/oros/o1.jpg', 'cartas/oros/o2.jpg', 'cartas/oros/o3.jpg', 'cartas/oros/o4.jpg', 'cartas/oros/o5.jpg', 'cartas/oros/o6.jpg', 'cartas/oros/o7.jpg', 'cartas/oros/o8.jpg', 'cartas/oros/o9.jpg', 'cartas/oros/o10.jpg', 'cartas/oros/o11.jpg', 'cartas/oros/o12.jpg')
var imgcopa = new Array('cartas/copas/c1.jpg', 'cartas/copas/c2.jpg', 'cartas/copas/c3.jpg', 'cartas/copas/c4.jpg', 'cartas/copas/c5.jpg', 'cartas/copas/c6.jpg', 'cartas/copas/c7.jpg', 'cartas/copas/c8.jpg', 'cartas/copas/c9.jpg', 'cartas/copas/c10.jpg', 'cartas/copas/c11.jpg', 'cartas/copas/c12.jpg')
var imgbasto = new Array('cartas/bastos/b1.jpg', 'cartas/bastos/b2.jpg', 'cartas/bastos/b3.jpg', 'cartas/bastos/b4.jpg', 'cartas/bastos/b5.jpg', 'cartas/bastos/b6.jpg', 'cartas/bastos/b7.jpg', 'cartas/bastos/b8.jpg', 'cartas/bastos/b9.jpg', 'cartas/bastos/b10.jpg', 'cartas/bastos/b11.jpg', 'cartas/bastos/b12.jpg')
var imgespada = new Array('cartas/espadas/e1.jpg', 'cartas/espadas/e2.jpg', 'cartas/espadas/e3.jpg', 'cartas/espadas/e4.jpg', 'cartas/espadas/e5.jpg', 'cartas/espadas/e6.jpg', 'cartas/espadas/e7.jpg', 'cartas/espadas/e8.jpg', 'cartas/espadas/e9.jpg', 'cartas/espadas/e10.jpg', 'cartas/espadas/e11.jpg', 'cartas/espadas/e12.jpg')

var imgoros = new Array('cartas/oros/o1.jpg', 'cartas/oros/o2.jpg', 'cartas/oros/o3.jpg', 'cartas/oros/o4.jpg', 'cartas/oros/o5.jpg', 'cartas/oros/o6.jpg', 'cartas/oros/o7.jpg', 'cartas/oros/o8.jpg', 'cartas/oros/o9.jpg', 'cartas/oros/o10.jpg', 'cartas/oros/o11.jpg', 'cartas/oros/o12.jpg')
var imgcopas = new Array('cartas/copas/c1.jpg', 'cartas/copas/c2.jpg', 'cartas/copas/c3.jpg', 'cartas/copas/c4.jpg', 'cartas/copas/c5.jpg', 'cartas/copas/c6.jpg', 'cartas/copas/c7.jpg', 'cartas/copas/c8.jpg', 'cartas/copas/c9.jpg', 'cartas/copas/c10.jpg', 'cartas/copas/c11.jpg', 'cartas/copas/c12.jpg')
var imgbastos = new Array('cartas/bastos/b1.jpg', 'cartas/bastos/b2.jpg', 'cartas/bastos/b3.jpg', 'cartas/bastos/b4.jpg', 'cartas/bastos/b5.jpg', 'cartas/bastos/b6.jpg', 'cartas/bastos/b7.jpg', 'cartas/bastos/b8.jpg', 'cartas/bastos/b9.jpg', 'cartas/bastos/b10.jpg', 'cartas/bastos/b11.jpg', 'cartas/bastos/b12.jpg')
var imgespadas = new Array('cartas/espadas/e1.jpg', 'cartas/espadas/e2.jpg', 'cartas/espadas/e3.jpg', 'cartas/espadas/e4.jpg', 'cartas/espadas/e5.jpg', 'cartas/espadas/e6.jpg', 'cartas/espadas/e7.jpg', 'cartas/espadas/e8.jpg', 'cartas/espadas/e9.jpg', 'cartas/espadas/e10.jpg', 'cartas/espadas/e11.jpg', 'cartas/espadas/e12.jpg')


var jugador1 = new Array('');
var jugador2 = new Array('');
var jugador3 = new Array('');
var jugador4 = new Array('');


var cadena = "";
var aux = "", palo = "";
var num, randompalos1, randompalos2, randomcartas1, randomcartas2;
var i, j;

function mostrarBaraja() {
    cadena = "";
    for (i = 0; i < 4; i++) {

        for (j = 0; j < 12; j++) {

            if (i == 0) {

                cadena += "<img  src='" + imgoros[j] + "'/>" + " ";

            } else if (i == 1) {

                cadena += "<img  src='" + imgcopas[j] + "'/>" + " ";
            } else if (i == 2) {

                cadena += "<img  src='" + imgbastos[j] + "'/>" + " ";
            } else if (i == 3) {

                cadena += "<img  src='" + imgespadas[j] + "'/>" + " ";

            }

        }
        cadena = cadena + "<br>";

    }
    document.getElementById("cartas").innerHTML = cadena;
}

function barajarBaraja() {
    document.getElementById("cartas").innerHTML = "";
    cadena = "";
    for (i = 0; i <= 100; i++) {
        randompalos1 = Math.floor(Math.random() * (4 - 0)) + 0;
        randompalos2 = Math.floor(Math.random() * (4 - 0)) + 0;
        randomcartas1 = Math.floor(Math.random() * (12 - 0)) + 0;
        randomcartas2 = Math.floor(Math.random() * (12 - 0)) + 0;

        if (randompalos1 == 0) {
            aux = imgoros[randomcartas1];
            if (randompalos2 == 0) {
                imgoros[randomcartas1] = imgoros[randomcartas2];
                imgoros[randomcartas2] = aux;

            } else if (randompalos2 == 1) {
                imgoros[randomcartas1] = imgcopas[randomcartas2];
                imgcopas[randomcartas2] = aux;

            } else if (randompalos2 == 2) {
                imgoros[randomcartas1] = imgbastos[randomcartas2];
                imgbastos[randomcartas2] = aux;

            } else if (randompalos2 == 3) {
                imgoros[randomcartas1] = imgespadas[randomcartas2];
                imgespadas[randomcartas2] = aux;
            }
        } else if (randompalos1 == 1) {
            aux = imgcopas[randomcartas1];
            if (randompalos2 == 0) {
                imgcopas[randomcartas1] = imgoros[randomcartas2];
                imgoros[randomcartas2] = aux;

            } else if (randompalos2 == 1) {
                imgcopas[randomcartas1] = imgcopas[randomcartas2];
                imgcopas[randomcartas2] = aux;

            } else if (randompalos2 == 2) {
                imgcopas[randomcartas1] = imgbastos[randomcartas2];
                imgbastos[randomcartas2] = aux;

            } else if (randompalos2 == 3) {
                imgcopas[randomcartas1] = imgespadas[randomcartas2];
                imgespadas[randomcartas2] = aux;

            }
        } else if (randompalos1 == 2) {
            aux = imgbastos[randomcartas1];
            if (randompalos2 == 0) {
                imgbastos[randomcartas1] = imgoros[randomcartas2];
                imgoros[randomcartas2] = aux;

            } else if (randompalos2 == 1) {
                imgbastos[randomcartas1] = imgcopas[randomcartas2];
                imgcopas[randomcartas2] = aux;

            } else if (randompalos2 == 2) {
                imgbastos[randomcartas1] = imgbastos[randomcartas2];
                imgbastos[randomcartas2] = aux;

            } else if (randompalos2 == 3) {
                imgbastos[randomcartas1] = imgespadas[randomcartas2];
                imgespadas[randomcartas2] = aux;

            }

        } else if (randompalos1 == 3) {
            aux = imgespadas[randomcartas1];
            if (randompalos2 == 0) {
                imgespadas[randomcartas1] = imgoros[randomcartas2];
                imgoros[randomcartas2] = aux;

            } else if (randompalos2 == 1) {
                imgespadas[randomcartas1] = imgcopas[randomcartas2];
                imgcopas[randomcartas2] = aux;

            } else if (randompalos2 == 2) {
                imgespadas[randomcartas1] = imgbastos[randomcartas2];
                imgbastos[randomcartas2] = aux;

            } else if (randompalos2 == 3) {
                imgespadas[randomcartas1] = imgespadas[randomcartas2];
                imgespadas[randomcartas2] = aux;

            }
        }



    }


}

function mostrarPalo() {
    palo = "";
    cadena = "";
    palo = prompt("Palo: (1.- Oros; 2.- Copas; 3.- Bastos; 4.- Espadas)");

    switch (palo) {
        case '1':
            for (i = 0; i < imgoro.length; i++) {
                cadena += "<img  src='" + imgoro[i] + "'/>" + " ";
            }
            break;

        case '2':
            for (i = 0; i < imgcopa.length; i++) {
                cadena += "<img  src='" + imgcopa[i] + "'/>" + " ";
            }
            break;

        case '3':
            for (i = 0; i < imgbasto.length; i++) {
                cadena += "<img  src='" + imgbasto[i] + "'/>" + " ";
            }
            break;

        case '4':
            for (i = 0; i < imgespada.length; i++) {
                cadena += "<img  src='" + imgespada[i] + "'/>" + " ";
            }
            break;

        default:
            alert("Incorrecto!");
            break;


    }
    document.getElementById("cartas").innerHTML = cadena;

}

function repartirBaraja() {
    document.getElementById("cartas").innerHTML = "";

    for (i = 0; i < 12; i++) {

        for (j = 0; j < 4; j++) {

            if (j == 0) {

                jugador1[i] = imgoros[i];

            } else if (j == 1) {
                jugador2[i] = imgcopas[i];

            } else if (j == 2) {
                jugador3[i] = imgbastos[i];

            } else if (j == 3) {
                jugador4[i] = imgespadas[i];

            }

        }
    }


}


function mostrarMano() {
    mano = "";
    cadena = "";
    mano = prompt("Jugador: 1, 2, 3 o 4");

    switch (mano) {
        case '1':
            for (i = 0; i < jugador1.length; i++) {
                cadena += "<img  src='" + jugador1[i] + "'/>" + " ";
            }
            break;

        case '2':
            for (i = 0; i < jugador2.length; i++) {
                cadena += "<img  src='" + jugador2[i] + "'/>" + " ";
            }
            break;

        case '3':
            for (i = 0; i < jugador3.length; i++) {
                cadena += "<img  src='" + jugador3[i] + "'/>" + " ";
            }
            break;

        case '4':
            for (i = 0; i < jugador4.length; i++) {
                cadena += "<img  src='" + jugador4[i] + "'/>" + " ";
            }
            break;

        default:
            alert("Incorecto!");
            break;


    }
    document.getElementById("cartas").innerHTML = cadena;

}


function mostrarJugada() {
    cadena = "";
    for (i = 0; i < 4; i++) {

        for (j = 0; j < 13; j++) {

            if (i == 0) {
                if (j == 0) {

                    cadena += "<h3>Jugador 1</h3> " + " ";
                }
                else {

                    cadena += "<img  src='" + imgoros[j - 1] + "'/>" + " ";
                }

            } else if (i == 1) {
                if (j == 0) {

                    cadena += "<h3>Jugador 2</h3> " + " ";
                }
                else {
                    cadena += "<img  src='" + imgcopas[j - 1] + "'/>" + " ";
                }
            } else if (i == 2) {
                if (j == 0) {

                    cadena += "<h3>Jugador 3</h3> " + " ";
                }
                else {
                    cadena += "<img  src='" + imgbastos[j - 1] + "'/>" + " ";
                }
            } else if (i == 3) {
                if (j == 0) {

                    cadena += "<h3>Jugador 4</h3> " + " ";
                }
                else {
                    cadena += "<img  src='" + imgespadas[j - 1] + "'/>" + " ";
                }

            }

        }
        cadena = cadena + "<br>";

    }
    document.getElementById("cartas").innerHTML = cadena;
}