function insertar1() {
    document.getElementById("f1").style.visibility = "hidden";
    document.getElementById("f2").style.visibility = "hidden";
}
var idAl = 0;

function primero() {
    idAl = 0;
    var url="alumno.php?idAl="+idAl;
    cargarHoroscopo(url);
    document.getElementById("f1").style.visibility = "hidden";
    document.getElementById("f2").style.visibility = "hidden";
    document.getElementById("f3").style.visibility = "visible";
    document.getElementById("f4").style.visibility = "visible";
    
}
function anterior() {
    idAl = idAl - 1;
    var url="alumno.php?idAl="+idAl;
    cargarHoroscopo(url);
    if (idAl == 0) {
        document.getElementById("f1").style.visibility = "hidden";
        document.getElementById("f2").style.visibility = "hidden";
        document.getElementById("f3").style.visibility = "visible";
        document.getElementById("f4").style.visibility = "visible";

    }else{
        document.getElementById("f1").style.visibility = "visible";
        document.getElementById("f2").style.visibility = "visible";
        document.getElementById("f3").style.visibility = "visible";
        document.getElementById("f4").style.visibility = "visible";
    }
}
function siguiente() {
    idAl = idAl + 1;
    var url="alumno.php?idAl="+idAl;
    cargarHoroscopo(url);
    if (idAl == 9) {
        document.getElementById("f3").style.visibility = "hidden";
        document.getElementById("f4").style.visibility = "hidden";
        document.getElementById("f1").style.visibility = "visible";
        document.getElementById("f2").style.visibility = "visible";
    }else{
        document.getElementById("f1").style.visibility = "visible";
        document.getElementById("f2").style.visibility = "visible";
        document.getElementById("f3").style.visibility = "visible";
        document.getElementById("f4").style.visibility = "visible";
    }

}
function ultimo() {
    idAl = 9;
    var url="alumno.php?idAl="+idAl;
    cargarHoroscopo(url);
    document.getElementById("f3").style.visibility = "hidden";
    document.getElementById("f4").style.visibility = "hidden";
    document.getElementById("f1").style.visibility = "visible";
    document.getElementById("f2").style.visibility = "visible";
}

addEventListener('load',inicializarEventos,false);
    


var conexion1;
function cargarHoroscopo(url) 
{
  conexion1=new XMLHttpRequest();  
  conexion1.onreadystatechange = procesarEventos;
  conexion1.open("GET", url, true);
  conexion1.send();
}

function procesarEventos()
{
  var detalles = document.getElementById("detalles");
  if(conexion1.readyState == 4)
  {
    detalles.innerHTML = conexion1.responseText;
    var cadena = detalles.innerHTML;
    var cadena2 = cadena.split("-");
    var foto = cadena2[0];
    var nombre = cadena2[1];
    var dir = cadena2[2];
    var tel = cadena2[3];
    var foto2 = foto.split("=");
    var nombre2 = nombre.split("=");
    var dir2 = dir.split("=");
    var tel2 = tel.split("=");
    var fotofinal = foto2[1];
    var nombrefinal = nombre2[1];
    var dirfinal = dir2[1];
    var telfinal = tel2[1];
    document.getElementById("nombre").innerHTML = "<div id='nombre' class='borde1'>"+nombrefinal+"</div>";
    document.getElementById("domicilio").innerHTML = "<div id='domicilio' class='borde1'>"+dirfinal+"</div>";
    document.getElementById("tel").innerHTML = "<div id='tel' class='borde1'>"+telfinal+"</div>";
    document.getElementById("imagenfoto").innerHTML = "<img id='img1' src='img/"+fotofinal+"' alt='Foto'>";
    
  } 
  else 
  {
    detalles.innerHTML = 'Cargando...';
  }
}



