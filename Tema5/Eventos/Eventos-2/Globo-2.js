function myMove() {
  var elemento = document.getElementById("globo");   
  var posicionTop = window.innerHeight-90;
  var id = setInterval(frame, 40);
  var posicionLado = 0;
  var ancho = window.innerWidth / 2;
  function frame() {
    if (posicionTop == -10) {
      clearInterval(id);
      elemento.style.display="none";
    } else {
      posicionTop--; 
      posicionLado = Math.floor((Math.random() * 16)-8);
      ancho = ancho + posicionLado;
      elemento.style.top = posicionTop + "px"; 
      elemento.style.left = ancho + "px";
    }
    var coordenadas = "<p>X: "+(ancho+30)+"<br>Y: "+(posicionTop+50)+"</p>";
  document.getElementById("coordenadas").innerHTML=coordenadas;
  }
  
}