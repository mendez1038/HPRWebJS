function cambiarcolor2(a, b, c) {
    document.getElementById("th" + a).style.backgroundColor = "orange";
    var d = document.getElementById("th" + a).innerHTML;
    x = 1;
    var enlace = "../../../php//faireserva.php?idHab=" + x + "&fecha=" + c + "-" + b + "-" + d;
    cargarHoroscopo3(enlace)
}
function quitar2(a, b, c) {
    document.getElementById("th" + a).style.backgroundColor = "rgb(157, 194, 219)";
    var d = document.getElementById("th" + a).innerHTML;
    x = 1;
    var enlace = "../../../php//anulareserva.php?idHab=" + x + "&fecha=" + c + "-" + b + "-" + d;
    cargarHoroscopo4(enlace)
}
var conexion3;
function cargarHoroscopo3(enlace) {
    conexion3 = new XMLHttpRequest();
    conexion3.onreadystatechange = procesarEventos3;
    conexion3.open("GET", enlace, true);
    conexion3.send();
}

var conexion4;
function cargarHoroscopo4(enlace) {
    conexion4 = new XMLHttpRequest();
    conexion4.onreadystatechange = procesarEventos4;
    conexion4.open("GET", enlace, true);
    conexion4.send();
}

function procesarEventos3() {
    var detalles3 = document.getElementById("detalles3");
    if (conexion3.readyState == 4) {
        detalles3.innerHTML = conexion3.responseText;
        var cadena = detalles3.innerHTML;

    }
    else {
        detalles3.innerHTML = 'Cargando...';
    }
}
function procesarEventos4() {
    var detalles4 = document.getElementById("detalles4");
    if (conexion4.readyState == 4) {
        detalles4.innerHTML = conexion4.responseText;
        var cadena = detalles4.innerHTML;

    }
    else {
        detalles4.innerHTML = 'Cargando...';
    }
}


window.onload = function insertar2() {
    var url2 = "../../../php/reservas.php"
    cargarHoroscopo2(url2);
}

var conexion2;
function cargarHoroscopo2(url2) {
    conexion2 = new XMLHttpRequest();
    conexion2.onreadystatechange = procesarEventos2;
    conexion2.open("GET", url2, true);
    conexion2.send();
}

function procesarEventos2() {
    var detalles2 = document.getElementById("detalles2");
    if (conexion2.readyState == 4) {
        detalles2.innerHTML = conexion2.responseText;
        var caracteres = detalles2.innerHTML;
        var caracteres2 = caracteres.split(":");
        var i = 0;
        for (i = 0; i <= (caracteres2.length - 2); i++) {
            var color = caracteres2[i];
            var color2 = color.split("-")
            var añoreserva = color2[0];
            var mesreserva = color2[1];
            var diareserva = color2[2];
            pintarreservas(diareserva, mesreserva, añoreserva);
        }

    }
    else {
        detalles2.innerHTML = 'Cargando...';
    }
}
var numero0 = 0;

function pintarreservas(diareserva, mesreserva, añoreserva) {
    if (añoreserva == 2019) {
        if (mesreserva == 01) {
            var k = 0;
            for (k = 43; k <= 73; k++) {
                var dia = document.getElementById("th" + k).innerHTML;
                if (dia.length == 1) {
                    dia = numero0 + dia;
                }
                if (dia == diareserva) {
                    document.getElementById("th" + k).style.backgroundColor = "orange";
                }
            }
        } else if (mesreserva == 02) {
            var k = 0;
            for (k = 74; k <= 102; k++) {
                var dia = document.getElementById("th" + k).innerHTML;
                if (dia.length == 1) {
                    dia = numero0 + dia;
                }
                if (dia == diareserva) {
                    document.getElementById("th" + k).style.backgroundColor = "orange";
                }
            }

        } else if (mesreserva == 03) {
            var k = 0;
            for (k = 103; k <= 133; k++) {
                var dia = document.getElementById("th" + k).innerHTML;
                if (dia.length == 1) {
                    dia = numero0 + dia;
                }
                if (dia == diareserva) {
                    document.getElementById("th" + k).style.backgroundColor = "orange";
                }
            }
        } else if (mesreserva == 04) {
            var k = 0;
            for (k = 134; k <= 163; k++) {
                var dia = document.getElementById("th" + k).innerHTML;
                if (dia.length == 1) {
                    dia = numero0 + dia;
                }
                if (dia == diareserva) {
                    document.getElementById("th" + k).style.backgroundColor = "orange";
                }
            }
        } else if (mesreserva == 05) {
            var k = 0;
            for (k = 164; k <= 194; k++) {
                var dia = document.getElementById("th" + k).innerHTML;
                if (dia.length == 1) {
                    dia = numero0 + dia;
                }
                if (dia == diareserva) {
                    document.getElementById("th" + k).style.backgroundColor = "orange";
                }
            }
        } else if (mesreserva == 05) {
            var k = 0;
            for (k = 195; k <= 224; k++) {
                var dia = document.getElementById("th" + k).innerHTML;
                if (dia.length == 1) {
                    dia = numero0 + dia;
                }
                if (dia == diareserva) {
                    document.getElementById("th" + k).style.backgroundColor = "orange";
                }
            }
        } else if (mesreserva == 07) {
            var k = 0;
            for (k = 225; k <= 255; k++) {
                var dia = document.getElementById("th" + k).innerHTML;
                if (dia.length == 1) {
                    dia = numero0 + dia;
                }
                if (dia == diareserva) {
                    document.getElementById("th" + k).style.backgroundColor = "orange";
                }
            }
        } else if (mesreserva == 08) {
            var k = 0;
            for (k = 256; k <= 286; k++) {
                var dia = document.getElementById("th" + k).innerHTML;
                if (dia.length == 1) {
                    dia = numero0 + dia;
                }
                if (dia == diareserva) {
                    document.getElementById("th" + k).style.backgroundColor = "orange";
                }
            }
        } else if (mesreserva == 09) {
            var k = 0;
            for (k = 287; k <= 316; k++) {
                var dia = document.getElementById("th" + k).innerHTML;
                if (dia.length == 1) {
                    dia = numero0 + dia;
                }
                if (dia == diareserva) {
                    document.getElementById("th" + k).style.backgroundColor = "orange";
                }
            }
        } else if (mesreserva == 10) {
            var k = 0;
            for (k = 317; k <= 347; k++) {
                var dia = document.getElementById("th" + k).innerHTML;
                if (dia.length == 1) {
                    dia = numero0 + dia;
                }
                if (dia == diareserva) {
                    document.getElementById("th" + k).style.backgroundColor = "orange";
                }
            }
        } else if (mesreserva == 11) {
            var k = 0;
            for (k = 348; k <= 377; k++) {
                var dia = document.getElementById("th" + k).innerHTML;
                if (dia.length == 1) {
                    dia = numero0 + dia;
                }
                if (dia == diareserva) {
                    document.getElementById("th" + k).style.backgroundColor = "orange";
                }
            }
        } else if (mesreserva == 12) {
            var k = 0;
            for (k = 378; k <= 408; k++) {
                var dia = document.getElementById("th" + k).innerHTML;
                if (dia.length == 1) {
                    dia = numero0 + dia;
                }
                if (dia == diareserva) {
                    document.getElementById("th" + k).style.backgroundColor = "orange";
                }
            }
        } 
    }
}
