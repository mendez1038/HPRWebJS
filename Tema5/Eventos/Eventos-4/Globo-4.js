var estado = false;

function myMove() {
  var elem = document.getElementById("globo");
  var posTop = window.innerHeight - 90;
  var id;
  if (estado) {
    clearInterval(id);
    id = setInterval(reventar, 20);

  } else {
    id = setInterval(frame, 20);
  }
  var cont = 0;
  var izquierda = true;
  var control = 0;
  var posLado = window.innerWidth / 2;
  function frame() {
    if (!estado) {
      if (posTop == -90) {
        clearInterval(id);
        elem.style.display = "none";
      } else {
        if (cont == 5) {
          control = Math.floor((Math.random() * 2));
          if (control == 0) {
            izquierda = true;
          } else {
            izquierda = false;
          }
          if (izquierda) {
            posLado -= 9;
          } else
            posLado += 9;

          cont = 0;
        }
        cont++;
        posTop--;
        elem.style.top = posTop + "px";
        elem.style.left = posLado + "px";
      }
    }
  }
  var x = document.getElementById("myAudio"); 
  function reventar() {
    document.getElementById("globo").innerHTML = "<img src='img/globoexplotado.png' alt='globoExplotado'>";
    x.play(); 
    setTimeout(function(){ document.getElementById("globo").innerHTML = "<p></p>"; }, 1000);
       if (posTop >= window.innerHeight-90) {
         clearInterval(id);
         
       } else {
         if (cont == 5) {
           control = Math.floor((Math.random() * 2));
           if (control == 0) {
             izquierda = true;
           } else {
             izquierda = false;
           }
           if (izquierda) {
             posLado -= 5;
           } else
             posLado += 5;

           cont = 0;
         }
         cont++;
         posTop++;
         elem.style.top = posTop + "px";
         elem.style.left = posLado + "px";
       }
     }
  }

function explotar() {
  estado = true;
  myMove();
}
