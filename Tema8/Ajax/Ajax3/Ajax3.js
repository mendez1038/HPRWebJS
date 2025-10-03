//Arrays de datos:
meses=["Xaneiro","Febreiro","Marzo","Abril","Maio","Xuño","Xullo","Agosto","Setembro","Outubro","Novembro","Decembro"];
lasemana=["Domingo","Luns","Martes","Mércores","Xoves","Venres","Sábado"]
diassemana=["L","M","M","X","V","S","D"];
//Tras cargarse la página ...
window.onload = function() {
//fecha actual
hoy=new Date(); //objeto fecha actual
diasemhoy=hoy.getDay(); //dia semana actual
diahoy=hoy.getDate(); //dia mes actual
meshoy=hoy.getMonth(); //mes actual
annohoy=hoy.getFullYear(); //año actual
// Elementos del DOM: en cabecera de calendario 
tit=document.getElementById("titulos"); //cabecera del calendario
ant=document.getElementById("anterior"); //mes anterior
pos=document.getElementById("posterior"); //mes posterior
// Elementos del DOM en primera fila
f0=document.getElementById("fila0");
//Pie de calendario
pie=document.getElementById("fechaactual");
pie.innerHTML+=lasemana[diasemhoy]+", "+diahoy+" de "+meses[meshoy]+" de "+annohoy;
//formulario: datos iniciales:
document.buscar.buscaanno.value=annohoy;
// Definir elementos iniciales:
mescal = meshoy; //mes principal
annocal = annohoy //año principal
//iniciar calendario:
cabecera() 
primeralinea()
escribirdias()
}
//FUNCIONES de creación del calendario:
//cabecera del calendario
function cabecera() {
         tit.innerHTML=meses[mescal]+" de "+annocal;
         mesant=mescal-1; //mes anterior
         mespos=mescal+1; //mes posterior
         if (mesant<0) {mesant=11;}
         if (mespos>11) {mespos=0;}
         ant.innerHTML=meses[mesant]
         pos.innerHTML=meses[mespos]
         } 
//primera línea de tabla: días de la semana.
function primeralinea() {
         for (i=0;i<7;i++) {
             celda0=f0.getElementsByTagName("th")[i];
             celda0.innerHTML=diassemana[i]
             celda0.style.border = "solid 1px black";
             }
         }
//rellenar celdas con los días
function escribirdias() {
         //Buscar dia de la semana del dia 1 del mes:
         primeromes=new Date(annocal,mescal,"1") //buscar primer día del mes
         prsem=primeromes.getDay() //buscar día de la semana del día 1
         prsem--; //adaptar al calendario español (empezar por lunes)
         if (prsem==-1) {prsem=6;}
         //buscar fecha para primera celda:
         diaprmes=primeromes.getDate() 
         prcelda=diaprmes-prsem; //restar días que sobran de la semana
         empezar=primeromes.setDate(prcelda) //empezar= tiempo UNIX 1ª celda
         diames=new Date() //convertir en fecha
         diames.setTime(empezar); //diames=fecha primera celda.
         //Recorrer las celdas para escribir el día:
         for (i=1;i<7;i++) { //localizar fila
             fila=document.getElementById("fila"+i);
             for (j=0;j<7;j++) {
                 midia=diames.getDate() 
                 mimes=diames.getMonth()
                 mianno=diames.getFullYear()
                 celda=fila.getElementsByTagName("td")[j];
                 celda.innerHTML=midia;
                 
                 //Recuperar estado inicial al cambiar de mes:
                 celda.style.backgroundColor="#dcffc5";
                 celda.style.color="#492736";
                 //domingos en rojo
                 if (j==6 || j==5) { 
                    celda.style.color="#f11445";
                    }
                 //dias restantes del mes en gris
                 if (mimes!=mescal) { 
                    celda.style.backgroundColor="#fffacd";
                    celda.innerHTML="";
                    }
                 //destacar la fecha actual
                 if (mimes==meshoy && midia==diahoy && mianno==annohoy ) { 
                  if (mimes==mescal) { 
                    celda.style.backgroundColor="#6cb43c";
                    celda.innerHTML="<cite title='Fecha Actual'>"+midia+"</cite>";

                      }
                    }
                 //pasar al siguiente día
                 midia=midia+1;
                 diames.setDate(midia);
                 }
             }
             insertar2();
         }
//Ver mes anterior
function mesantes() {
         nuevomes=new Date() //nuevo objeto de fecha
         primeromes--; //Restamos un día al 1 del mes visualizado
         nuevomes.setTime(primeromes) //cambiamos fecha al mes anterior 
         mescal=nuevomes.getMonth() //cambiamos las variables que usarán las funciones
         annocal=nuevomes.getFullYear()
         cabecera() //llamada a funcion de cambio de cabecera
         escribirdias() //llamada a funcion de cambio de tabla.
         insertar2();
         }
//ver mes posterior
function mesdespues() {
         nuevomes=new Date() //nuevo obejto fecha
         tiempounix=primeromes.getTime() //tiempo de primero mes visible
         tiempounix=tiempounix+(45*24*60*60*1000) //le añadimos 45 días 
         nuevomes.setTime(tiempounix) //fecha con mes posterior.
         mescal=nuevomes.getMonth() //cambiamos variables 
         annocal=nuevomes.getFullYear()
         cabecera() //escribir la cabecera 
         escribirdias() //escribir la tabla
         insertar2();
         }
//volver al mes actual
function actualizar() {
         mescal=hoy.getMonth(); //cambiar a mes actual
         annocal=hoy.getFullYear(); //cambiar a año actual 
         cabecera() //escribir la cabecera
         escribirdias() //escribir la tabla
         }
//ir al mes buscado
function mifecha() {
         //Recoger dato del año en el formulario
         mianno=document.buscar.buscaanno.value; 
         //recoger dato del mes en el formulario
         listameses=document.buscar.buscames;
         opciones=listameses.options;
         num=listameses.selectedIndex
         mimes=opciones[num].value;
         //Comprobar si el año está bien escrito
         if (isNaN(mianno) || mianno<1) {
            //año mal escrito: mensaje de error
            alert("El año no es válido:\n debe ser un número mayor que 0")
            }
         else { //año bien escrito: ver mes en calendario:
              mife=new Date(); //nueva fecha
              mife.setMonth(mimes); //añadir mes y año a nueva fecha
              mife.setFullYear(mianno);
              mescal=mife.getMonth(); //cambiar a mes y año indicados
              annocal=mife.getFullYear();
              cabecera() //escribir cabecera
              escribirdias() //escribir tabla
              }
              insertar2();
         }

function insertar(){
   var url="../../../php/habitacion.php"
    cargarHoroscopo(url);
}setInterval(insertar(),10);

var conexion2;
function cargarHoroscopo(url) 
{
  conexion2=new XMLHttpRequest();  
  conexion2.onreadystatechange = procesarEventos;
  conexion2.open("GET", url, true);
  conexion2.send();
}

function procesarEventos()
{
  var detalles = document.getElementById("detalles");
  if(conexion2.readyState == 4)
  {
    detalles.innerHTML = conexion2.responseText;
    var cadena = detalles.innerHTML;
    var cadena2 = cadena.split("-");
    var elemento1 = cadena2[0];
    var elemento2 = cadena2[1];
    var elemento3 = cadena2[2];
    document.getElementById("nome2").innerHTML = "<p>"+elemento1+"</p>";
    document.getElementById("prezo2").innerHTML = "<p>"+elemento2+"</p>";
    document.getElementById("img").innerHTML = "<img src='"+elemento3+"' alt='Habitacion'>";
    
  } 
  else 
  {
    detalles.innerHTML = 'Cargando...';
  }
}

function cambiarcolor(n){
  var asd = document.getElementById("th"+n).innerHTML;
  
  if(asd!=""){

 
    document.getElementById("th"+n).style.backgroundColor="orange";
    var dia = document.getElementById("th"+n).innerHTML;
    var frase = document.getElementById("titulos").innerHTML;
    var frase2 = frase.split(" ");
    var mes = frase2[0];
    var año = frase2[2];

    var numero0 = 0;

    if(dia.length==1){               
      dia = numero0 + dia;

    }

    if(mes=="Xaneiro"){
      var mesfinal=01;
    }else if(mes=="Febreiro"){
      var mesfinal=02;
    }else if(mes=="Marzo"){
      var mesfinal=03;
    }else if(mes=="Abril"){
      var mesfinal=04;
    }else if(mes=="Maio"){
      var mesfinal=05;
    }else if(mes=="Xuño"){
      var mesfinal=06;
    }else if(mes=="Xullo"){
      var mesfinal=07;
    }else if(mes=="Agosto"){
      var mesfinal=08;
    }else if(mes=="Setembro"){
      var mesfinal=09;
    }else if(mes=="Outubro"){
      var mesfinal=10;
    }else if(mes=="Novembro"){
      var mesfinal=11;
    }else{
      var mesfinal=12;
    }
    var DD = dia;
    var D = dia;
    var MM = mesfinal;
    var AAAA = año;
    var x = 1;
    
    
    var enlace="../../../php/faireserva.php?idHab="+x+"&fecha="+AAAA+"-"+MM+"-"+DD;

    
    cargarHoroscopo3(enlace)
  }
    
}
function quitar(n){

  var asd = document.getElementById("th"+n).innerHTML;
  
  if(asd!=""){
  document.getElementById("th"+n).style.backgroundColor="#dcffc5";
  var dia = document.getElementById("th"+n).innerHTML;
  var frase = document.getElementById("titulos").innerHTML;
  var frase2 = frase.split(" ");
  var mes = frase2[0];
  var año = frase2[2];

  var numero0 = 0;

    if(dia.length==1){
      dia = numero0 + dia;
    }
  
  if(mes=="Xaneiro"){
    var mesfinal=01;
  }else if(mes=="Febreiro"){
    var mesfinal=02;
  }else if(mes=="Marzo"){
    var mesfinal=03;
  }else if(mes=="Abril"){
    var mesfinal=04;
  }else if(mes=="Maio"){
    var mesfinal=05;
  }else if(mes=="Xuño"){
    var mesfinal=06;
  }else if(mes=="Xullo"){
    var mesfinal=07;
  }else if(mes=="Agosto"){
    var mesfinal=08;
  }else if(mes=="Setembro"){
    var mesfinal=09;
  }else if(mes=="Outubro"){
    var mesfinal=10;
  }else if(mes=="Novembro"){
    var mesfinal=11;
  }else{
    var mesfinal=12;
  }

    var DD = dia;
    var MM = mesfinal;
    var AAAA = año;
    var x = 1;
    var enlace="../../../php/anulareserva.php?idHab="+x+"&fecha="+AAAA+"-"+MM+"-"+DD;
    cargarHoroscopo4(enlace)
 }
}

function insertar2(){
  var url2="../../../php/reservas.php"
   cargarHoroscopo2(url2);
}


var conexion2;
function cargarHoroscopo2(url2) 
{
  conexion2=new XMLHttpRequest();  
  conexion2.onreadystatechange = procesarEventos2;
  conexion2.open("GET", url2, true);
  conexion2.send();
}

function procesarEventos2()
{
  var detalles2 = document.getElementById("detalles2");
  if(conexion2.readyState == 4)
  {
    detalles2.innerHTML = conexion2.responseText;
    var caracteres = detalles2.innerHTML;
    var caracteres2 = caracteres.split(":");
    var i = 0;
    for(i = 0; i<=(caracteres2.length-2); i++){
      var color = caracteres2[i];
      var color2 = color.split("-")
      var añoreserva = color2[0];
      var mesreserva = color2[1];
      var diareserva = color2[2];
      pintarreservas(diareserva, mesreserva, añoreserva);
    }
    
  } 
  else 
  {
    detalles2.innerHTML = 'Cargando...';
  }
}

function pintarreservas(diareserva, mesreserva, añoreserva){
  var frase = document.getElementById("titulos").innerHTML;
  var frase2 = frase.split(" ");
  var mes = frase2[0];
  var año = frase2[2];

  if(mes=="Xaneiro"){
    var mesfinal=1;
  }else if(mes=="Febreiro"){
    var mesfinal=2;
  }else if(mes=="Marzo"){
    var mesfinal=3;
  }else if(mes=="Abril"){
    var mesfinal=4;
  }else if(mes=="Maio"){
    var mesfinal=5;
  }else if(mes=="Xuño"){
    var mesfinal=6;
  }else if(mes=="Xullo"){
    var mesfinal=7;
  }else if(mes=="Agosto"){
    var mesfinal=8;
  }else if(mes=="Setembro"){
    var mesfinal=9;
  }else if(mes=="Outubro"){
    var mesfinal=10;
  }else if(mes=="Novembro"){
    var mesfinal=11;
  }else{
    var mesfinal=12;
  }

  var numero0 = 0;

  
  if(diareserva.length==1){              
    diareserva = numero0 + diareserva;

  }

  if(mesreserva == mesfinal && añoreserva == año){
    var j;
    for(j = 1;j<=42;j++){
      var dia = document.getElementById("th"+j).innerHTML;

      if(dia.length==1){              
        dia = numero0 + dia;
      }
      if(dia==diareserva){
        document.getElementById("th"+j).style.backgroundColor="orange";
      }
    }
  }
}

var conexion3;
function cargarHoroscopo3(enlace) 
{
  conexion3=new XMLHttpRequest();  
  conexion3.onreadystatechange = procesarEventos3;
  conexion3.open("GET", enlace, true);
  conexion3.send();
}

var conexion4;
function cargarHoroscopo4(enlace) 
{
  conexion4=new XMLHttpRequest();  
  conexion4.onreadystatechange = procesarEventos4;
  conexion4.open("GET", enlace, true);
  conexion4.send();
}

function procesarEventos3()
{
  var detalles3 = document.getElementById("detalles3");
  if(conexion3.readyState == 4)
  {
    detalles3.innerHTML = conexion3.responseText;
    var cadena = detalles3.innerHTML;

  } 
  else 
  {
    detalles3.innerHTML = 'Cargando...';
  }
}
  function procesarEventos4()
{
  var detalles4 = document.getElementById("detalles4");
  if(conexion4.readyState == 4)
  {
    detalles4.innerHTML = conexion4.responseText;
    var cadena = detalles4.innerHTML;

  } 
  else 
  {
    detalles4.innerHTML = 'Cargando...';
  }
}



function pintarreservas2(diareserva, mesreserva, añoreserva){
    if(añoreserva==2019){
      alert("entra")
      if(mesreserva == 01){
        alert("entra")
        var k;
        for(k = 42;k<=73;k++){
  
        var dia = document.getElementById("th"+k).innerHTML;
        if(dia==diareserva){
          alert("entra")
          document.getElementById("th"+k).style.backgroundColor="orange";
        }
        }
        
        }
  
      }
    }
