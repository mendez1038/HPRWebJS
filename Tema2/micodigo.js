/*alert('Bienvenido!');*/

/* Ejercicio ud2_t2_e1 */
function nextPhoto() {
  document.getElementById('imaxe').src = './img/descarga.jfif';
}
function previousPhoto() {
  document.getElementById('imaxe').src = './img/descarga (1).jfif';
}

/* Ejercicio ud2_t2_e2 */
function norte() {
  document.getElementById('myImage').src = './img/04-Brujula.png';
}
function oeste() {
  document.getElementById('myImage').src = './img/04-Brujulaoeste.png';
}
function este() {
  document.getElementById('myImage').src = './img/04-Brujulaeste.png';
}
function sur() {
  document.getElementById('myImage').src = './img/04-Brujulasur.png';
}

/* Ejercicio ud2_t3_e1 */
var dni;
var letra;
var resto;
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var letradni;
function pedirDni() {
  dni = prompt("Dame tu numero de DNI");
}
function pedirLetra() {
  letra = prompt("Dame tu letra de DNI");
  letra = letra.toUpperCase();
}
function calcularLetra() {
  if (dni < 0 || dni > 99999999) {
    alert("Numero incorrecto");
  } else {
    letradni = letras[dni % 23]
    if (letra != letradni) {
      alert("NIF incorrecto");
    } else {
      alert("NIF correcto");
    }
  }
}

/* Ejercicio ud2_t4_e1 */
var audios = new Array("sound/0.mp3", "sound/1.mp3", "sound/2.mp3", "sound/3.mp3", "sound/4.mp3", "sound/5.mp3", "sound/6.mp3", "sound/7.mp3", "sound/8.mp3", "sound/9.mp3")
function playAudio(x) {
  document.getElementById('myAudio').src = audios[x];
  myAudio.play();
}
function desaparecer(x) {
  x.style.display = "none";
  myAudio.pause();
}

/* Ejercicio ud2_t5_e1 */
var num = 0;
var limite = 0;
var multiplo = 0;
var resultado = "";
function calcularMultiplos() {
  num = parseInt(document.getElementById("num").value);
  limite = parseInt(document.getElementById("lim").value);
  multiplo = num;
  if (limite < num || num < 0 || limite < 0) {
    resultado = "Non existen múltiplos";
  } else {
    resultado = "Multiplos atopados:" + "<br>";
    while (multiplo <= limite) {
      resultado = resultado + multiplo + "<br>";
      multiplo = multiplo + num;
    }
  }
  document.getElementById("result").innerHTML = resultado
}

/* Ejercicio ud2_t5_e2 */
var maiores = 0;
var menores = 0;
function calcular5() {
  while (num >= 0 && num < 11) {
    num = prompt("Dame un numero entre 0 y 10, pulsa otro para salir");
    if (num >= 0 && num < 5) {
      menores++;
    } else if (num >= 5 && num < 10) {
      maiores++;
    }
  }
  resultado = "Numeros menores: " + menores + "<br>" + "Numeros maiores: " + maiores;
  document.getElementById("result").innerHTML = resultado
}

/* Ejercicio ud2_t5_e3 */
var media = 0.0;
var i = 0;
function calcular5media() {
  while (num >= 0 && num < 11) {
    num = parseInt(prompt("Dame un numero entre 0 y 10, pulsa otro para salir"));
    i++;
    if (num >= 0 && num < 5) {
      menores = menores + num;
    } else if (num >= 5 && num <= 10) {
      maiores = maiores + num;
    }
  }
  media = (maiores + menores) / (i - 1);
  resultado = "Suma de menores: " + menores + "<br>" + "Suma de maiores: " + maiores + "<br>" + "Media: " + media;
  document.getElementById("result").innerHTML = resultado
}
/* Ejercicio ud2_t5_e4 */
var producto = 0;
var subtotal = 0;
var ticket = 0;
function comprar() {
  producto = parseInt(document.getElementById("importe").value);
  subtotal = subtotal + producto;
  ticket = ticket  + producto + "\n";
  document.getElementById("subtotal").value = subtotal;
}
function obter() {
  ticket = ticket + "=== \n TOTAL " + subtotal;
  alert(ticket);
}
/* Ejercicio ud2_t5_e5 */
var palo= ["copas","espadas","oros","bastos"];
var numero = "";
function amosar() {
  for (j = 0; j < 4; j++) {
    for ( i = 0; i < 12; i++) {
      numero = numero + (i+1) + " de "+palo[j] + "<br>";
    }
    numero = numero + "<br>";
  }
  document.getElementById("result").innerHTML = numero;
}
/* Ejercicio ud2_t5_e6 */
var copas=["./img/cartas/copas/c1.jpg","./img/cartas/copas/c2.jpg","./img/cartas/copas/c3.jpg","./img/cartas/copas/c4.jpg","./img/cartas/copas/c5.jpg","./img/cartas/copas/c6.jpg","./img/cartas/copas/c7.jpg","./img/cartas/copas/c8.jpg","./img/cartas/copas/c9.jpg","./img/cartas/copas/c10.jpg","./img/cartas/copas/c11.jpg","./img/cartas/copas/c12.jpg"];
var bastos=["./img/cartas/bastos/b1.jpg","./img/cartas/bastos/b2.jpg","./img/cartas/bastos/b3.jpg","./img/cartas/bastos/b4.jpg","./img/cartas/bastos/b5.jpg","./img/cartas/bastos/b6.jpg","./img/cartas/bastos/b7.jpg","./img/cartas/bastos/b8.jpg","./img/cartas/bastos/b9.jpg","./img/cartas/bastos/b10.jpg","./img/cartas/bastos/b11.jpg","./img/cartas/bastos/b12.jpg"];
var oros=["./img/cartas/oros/o1.jpg","./img/cartas/oros/o2.jpg","./img/cartas/oros/o3.jpg","./img/cartas/oros/o4.jpg","./img/cartas/oros/o5.jpg","./img/cartas/oros/o6.jpg","./img/cartas/oros/o7.jpg","./img/cartas/oros/o8.jpg","./img/cartas/oros/o9.jpg","./img/cartas/oros/o10.jpg","./img/cartas/oros/o11.jpg","./img/cartas/oros/o12.jpg"];
var espadas=["./img/cartas/espadas/e1.jpg","./img/cartas/espadas/e2.jpg","./img/cartas/espadas/e3.jpg","./img/cartas/espadas/e4.jpg","./img/cartas/espadas/e5.jpg","./img/cartas/espadas/e6.jpg","./img/cartas/espadas/e7.jpg","./img/cartas/espadas/e8.jpg","./img/cartas/espadas/e9.jpg","./img/cartas/espadas/e10.jpg","./img/cartas/espadas/e11.jpg","./img/cartas/espadas/e12.jpg"];
var imaxes="";
var x = 0;
function amosarImaxes() {
  for ( j = 0; j < palo.length; j++) {
    if (palo[j]=="copas") {
      for ( x = 0; x < copas.length; x++) {
        imaxes= imaxes + "<div style='background: url("+'"';
        imaxes = imaxes + copas[x] + '"'+");height:150px;width:110px;background-size:contain;background-repeat:no-repeat;display:inline-block;"+"'"+"></div>";
        
      }
    }
    if (palo[j]=="espadas") {
      for ( x = 0; x < espadas.length; x++) {
        imaxes= imaxes + "<div style='background: url("+'"';
        imaxes = imaxes + espadas[x] + '"'+");height:150px;width:110px;background-size:contain;background-repeat:no-repeat;display:inline-block;"+"'"+"></div>";
        
      }
    }
    if (palo[j]=="oros") {
      for ( x = 0; x < oros.length; x++) {
        imaxes= imaxes + "<div style='background: url("+'"';
        imaxes = imaxes + oros[x] + '"'+");height:150px;width:110px;background-size:contain;background-repeat:no-repeat;display:inline-block;"+"'"+"></div>";
        
      }
    }
    if (palo[j]=="bastos") {
      for ( x = 0; x < bastos.length; x++) {
        imaxes= imaxes + "<div style='background: url("+'"';
        imaxes = imaxes + bastos[x] + '"'+");height:150px;width:110px;background-size:contain;background-repeat:no-repeat;display:inline-block;"+"'"+"></div>";
        
      }
    }
  }
  console.log(imaxes);
  document.getElementById("result").innerHTML = imaxes;
}



/* Ejercicio  e3*/
var nombre;
function pedirNombre() {
  nombre = prompt('Dame tu nombre');
}
function verNombre() {
  alert(nombre);
}

/* Ejercicio  e4*/
var num1, num2, result;
function pedirNumeros() {
  num1 = prompt('Introduce un numero');
  num2 = prompt('Introduce otro numero');
}
function suma() {
  result = parseInt(num1) + parseInt(num2);
  alert('El resultado de la suma es ' + result);
}
function resta() {
  result = parseInt(num1) - parseInt(num2);
  alert('El resultado de la resta es ' + result);
}
function multiplicacion() {
  result = parseInt(num1) * parseInt(num2);
  alert('El resultado de la multiplicacion es ' + result);
}
function division() {
  result = parseInt(num1) / parseInt(num2);
  alert('El resultado de la division es ' + result);
}
function resto() {
  result = parseInt(num1) % parseInt(num2);
  alert('El resto de la operacion es ' + result);
}

/* Ejercicio Calificacion Alumno */
var nota
function pedirNota() {
  nota = prompt("Dame tu nota");
}
function calcularNota() {
  if (nota < 0 || nota > 10) {
    alert("Recarga la pagina");
  } else if (nota >= 0 && nota < 3) {
    alert("Muy deficiente");
  } else if (nota >= 3 && nota < 5) {
    alert("Insuficiente");
  } else if (nota >= 5 && nota < 6) {
    alert("Suficiente");
  } else if (nota >= 6 && nota < 7) {
    alert("Bien");
  } else if (nota >= 7 && nota < 9) {
    alert("Notable");
  }else if (nota >= 9 && nota < 10) {
    alert("Sobresaliente");
  } else {
    alert("Error: Vuelve a intentarlo");
  }
}

/* Ejercicio Semana-Mes*/
var dia
var mes
var printDia
var printMes
function pedirDia() {
  dia = prompt("Introduce el numero del dia de la semana");
  if (dia <= 0 || dia >= 8) {
    alert("Dame otro numero")
  } else if (dia == 1) {
    printDia = "lunes"
  } else if (dia == 2) {
    printDia = "martes"
  } else if (dia == 3) {
    printDia = "miercoles"
  } else if (dia == 4) {
    printDia = "jueves"
  } else if (dia == 5) {
    printDia = "viernes"
  } else if (dia == 6) {
    printDia = "sabado"
  } else {
    printDia = "domingo"
  }
}
function pedirMes() {
  mes = prompt("Introduce el numero del mes del año");
  if (mes <= 0 || mes >= 13) {
    alert("Dame otro numero")
  } else if (mes == 1) {
    printMes = "enero"
  } else if (mes == 2) {
    printMes = "febrero"
  } else if (mes == 3) {
    printMes = "marzo"
  } else if (mes == 4) {
    printMes = "abril"
  } else if (mes == 5) {
    printMes = "mayo"
  } else if (mes == 6) {
    printMes = "junio"
  } else if (mes == 7) {
    printMes = "julio"
  } else if (mes == 8) {
    printMes = "agosto"
  } else if (mes == 9) {
    printMes = "septiembre"
  } else if (mes == 10) {
    printMes = "octubre"
  } else if (mes == 11) {
    printMes = "novimebre"
  } else {
    printMes = "diciembre"
  }
}
function print() {
  alert("Dia " + printDia + ", Mes " + printMes)
}

/*Ejercico Pasarela de Modelos */
var cont = 0;
function siguiente() {
  if (cont == 4) {
  } else {
    document.getElementById("anterior").className = "boton";
    cont++;
  }
  imagen();
}
function anterior() {
  if (cont == 0) {
  } else {
    document.getElementById("siguiente").className = "boton";
    cont--;
  }
  imagen();
}
function imagen() {
  if (cont == 0) {
    document.getElementById("image").src = "./img/1.png";
    document.getElementById("anterior").className = "boton2";
  }
  if (cont == 1) document.getElementById("image").src = "./img/2.png";
  if (cont == 2) document.getElementById("image").src = "./img/3.png";
  if (cont == 3) document.getElementById("image").src = "./img/4.png";
  if (cont == 4) {
    document.getElementById("image").src = "./img/5.jpg";
    document.getElementById("siguiente").className = "boton2";
  }
}


