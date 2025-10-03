
/* DATE 1*/
function reloxo() {
  var fecha = new Date();
  var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  var hora = fecha.getHours();
  if (hora.toString().length == 1) hora = "0" + hora;
  var min = fecha.getMinutes();
  if (min.toString().length == 1) min = "0" + min;
  var sec = fecha.getSeconds();
  if (sec.toString().length == 1) sec = "0" + sec;
  var divHoras = document.getElementById("hora");
  divHoras.innerHTML = hora + " : " + min + " : " + sec;
  var diaSemana = fecha.getDay();
  var diaMes = fecha.getDate();
  var mes = fecha.getMonth();
  var ano = fecha.getFullYear();
  divDia = document.getElementById("dia");
  divDia.innerHTML = dias[diaSemana] + " " + diaMes + " de " + meses[mes] + " " + ano;
}
function date1() {
  setInterval(reloxo, 1000);
}

/* DATE 2*/
function img(ruta) {
  var x = document.createElement("IMG");
  x.setAttribute("src", ruta);
  $('#relojdigital').append(x);
}
function borrar() {
  $('#relojdigital').empty();
}
function relojDigital() {
  var fotos = ["../img/0.png", "../img/1.png", "../img/2.png", "../img/3.png", "../img/4.png", "../img/5.jpg", "../img/6.jpg", "../img/7.jpg", "../img/8.jpg", "../img/9.jpg", "../img/puntos.png"];
  var relojDigital = new Date();
  var hora = relojDigital.getHours();
  var horaString = hora.toString();
  var hora1 = horaString.charAt(0);
  if (horaString.length == 1) {
    img(fotos[0]);
    img(fotos[hora1]);
  } else {
    img(fotos[hora1]);
    var hora2 = horaString.charAt(1);
    img(fotos[hora2])
  }
  img(fotos[10]);
  var min = relojDigital.getMinutes();
  var minString = min.toString();
  var min1 = minString.charAt(0);
  if (minString.length == 1) {
    img(fotos[0]);
    img(fotos[min1]);
  } else {
    img(fotos[min1]);
    var min2 = minString.charAt(1);
    img(fotos[min2])
  }
  img(fotos[10]);
  var sec = relojDigital.getSeconds();
  var secString = sec.toString();
  var sec1 = secString.charAt(0);
  if (secString.length == 1) {
    img(fotos[0]);
    img(fotos[sec1]);
  } else {
    img(fotos[sec1]);
    var sec2 = secString.charAt(1);
    img(fotos[sec2])
  }
}
function date2() {
  setInterval(borrar, 1000);
  setInterval(relojDigital, 1000);
}



