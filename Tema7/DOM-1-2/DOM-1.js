function cambiarFondoRojo(){
    document.cookie = "opcion=rojo";
    document.getElementById("video").innerHTML = "";
    document.body.style.background = "red";
  }
  function cambiarFondoVerde(){
    document.cookie = "opcion=verde";
    document.getElementById("video").innerHTML = "";
    document.body.style.background = "green";
  }
  function cambiarFondoAzul(){
    document.cookie = "opcion=azul";
    document.getElementById("video").innerHTML = "";
    document.body.style.background = "blue";
  }
  function cambiarFondoImaxe(){
    document.cookie = "opcion=imaxe";
    document.getElementById("video").innerHTML = "";
    document.body.style.background = "url('Madrid.png')";
    //document.body.style.backgroundRepeat = "no-repeat";
    //document.body.style.backgroundSize = "cover";
    

  }
  function cambiarFondoTextura(){
    document.cookie = "opcion=textura";
    document.getElementById("video").innerHTML = "";
    document.body.style.background = "url('Textura.png')";
  }
  function cambiarFondoDegHorizontal(){
    document.cookie = "opcion=deghor";
    document.getElementById("video").innerHTML = "";
    document.body.style.background= "linear-gradient(to right, blue, yellow, green, red)";
  }
  function cambiarFondoDegRadial(){
    document.cookie = "opcion=degrad";
    document.getElementById("video").innerHTML = "";
    document.body.style.background= "radial-gradient(blue, yellow, green, red)";
  }
  function cambiarFondoDegVertical(){
    document.cookie = "opcion=degver";
    document.getElementById("video").innerHTML = "";
    document.body.style.background= "linear-gradient(blue, yellow, green, red)";
  }
  function cambiarFondoVideo(){
    document.cookie = "opcion=video";
    document.getElementById("video").innerHTML = "<video id='video-background' autoplay preload loop><source src='video.mp4' type='video/mp4' /></video>"; 
  }
  function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie() {
  var opcion=getCookie("opcion");
  if (opcion == "rojo") {
    cambiarFondoRojo();
  } else if(opcion=="verde"){
    cambiarFondoVerde();
  } else if(opcion=="azul"){
    cambiarFondoAzul();
  } else if(opcion=="imaxe"){
    cambiarFondoImaxe();
  } else if(opcion=="textura"){
    cambiarFondoTextura();
  } else if(opcion=="deghor"){
    cambiarFondoDegHorizontal();
  } else if(opcion=="degrad"){
    cambiarFondoDegRadial();
  } else if(opcion=="degver"){
    cambiarFondoDegVertical();
  } else if(opcion=="video"){
    cambiarFondoVideo();
  } else {
     alert("Acepta las cookies de nuestra página:","");
     if (opcion != "" && opcion != null) {
       setCookie("opcion", user, 50);
     }
  }
}
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {

    document.getElementById("header").style.visibility = "hidden";
    document.getElementById("header").style.width = "0px";
    document.getElementById("header").style.height = "0px";
    document.getElementById("header2").style.visibility = "visible";
  } else {
    document.getElementById("header").style.width = "100%";
    document.getElementById("header").style.height = "40px";
    document.getElementById("header").style.visibility = "visible";
    document.getElementById("header2").style.visibility = "hidden";
  }
}
