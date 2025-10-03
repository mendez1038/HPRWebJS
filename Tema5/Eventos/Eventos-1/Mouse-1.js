function mostrarCoordenadas(elEvento){
    var coordenadas = document.getElementById("coordenadas").value="X: "+elEvento.clientX+" <br> Y: "+elEvento.clientY;
    document.getElementById("coordenadas").innerHTML=coordenadas;
}

  document.addEventListener('click',mostrarCoordenadas,false);
  