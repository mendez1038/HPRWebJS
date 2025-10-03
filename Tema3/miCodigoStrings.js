/* Mostrar Vertical */
var cadena, saida = "";
function pedirString() {
  cadena = new String;
  cadena = prompt("Introduce la cadena");
}
function mostrarString() {
  document.getElementById("cuadro").innerHTML = "La cadena introducida es: " + cadena;
}
function mostrarString2() {
  alert("La cadena introducida es: " + cadena);
}
function sacarFrase() {
  for (i = 0; i < cadena.length; i++) {
    saida += cadena.charAt(i) + '<br>';
  }
  document.getElementById("cuadros").innerHTML = "Resultado<br>=========<br>" + saida;
}

/* Palindromo */
var palabra = "", i;
function palindromo() {
  palabra = prompt("Escribe una palabra").toLowerCase();
  palabra = palabra.replace(/\s/g, "");
  for (i = 0; i < palabra.length; i++) {
    if (palabra[i] != palabra[palabra.length - i - 1]) {
      return false;
    }
  }
  return true;
}
function esPalindromo() {
  if (palindromo() == true) {
    alert("Es palíndromo");
  } else {
    alert("No es palíndromo")
  }
}

/* ud3_t1_e1 */
var lonxitude, contador, letra, p;
function lonxitude() {
  cadena = cadena.replace(/\s/g, "");
  lonxitude = cadena.length;
  alert("La longitud de la cadena es: " + lonxitude);
}
function numCaracter() {
  letra = prompt("Introduce una palabra o letra");
  contador = 0;
  i=0;
  if (letra.length == 1) {
    for (i = 0; i < cadena.length; i++) {
      if (cadena.charAt(i) == letra) { contador++; }
    }
    alert("A letra (" + letra + ") repítese " + contador + " veces.");
  } else {
    alert("Introduce unha letra")
  }
}
function numPalabra() {
  p = prompt("Introduce una palabra o letra");
  contador = 0;
  i=0;
  j=0;
  for (i = 0; i < cadena.length; i++) {
    if (p[0] == cadena[i]) {
      if ((cadena[i - 1] == ' ' || i == 0) && (cadena[i + p.length] == ' '|| i+p.length == cadena.length)) {
        for (j = 0; j < p.length; j++) {
          if (p[j] == cadena[i + j]) {
            frase = true;
          } else {
            frase = false;
            j = p.length;
          }
        }
        if (frase) {
          contador++;
        }
      }
    }
  }
  alert("A palabra (" + p + ") repítese " + contador + " veces.");
}

/* ud3_t1_e3 */
var x, y, palabraInvertida = "";
function invertir() {
  x = cadena.length;
  y = x - 2;
  while (y >= 0) {
    palabraInvertida = palabraInvertida + cadena.charAt(y);
    y--;
  }
  alert(cadena + palabraInvertida);
}

/* ud3_t1_e5 */
var contador1 = 0;
var contador2 = 0;
var contador3 = 0;
var contador4 = 0;
var j = 0;
var frase;
var ben = true;
var parenteses1 = "(";
var parenteses2 = ")";
var parenteses3 = "(";
var parenteses4 = ")";
function numPar() {
  for (i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) == parenteses1) { contador1++; }
  }
  for (i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) == parenteses2) { contador2++; }
  }
  alert("Hai " + contador1 + " \"" + parenteses1 + "\" e " + contador2 + " \"" + parenteses2 + "\"");
  if (contador2 == contador1) {
    i = 0;
    while (ben && i < cadena.length) {
      if (cadena.charAt(i) == parenteses3) { contador3++; }
      if (cadena.charAt(i) == parenteses4) { contador4++; }
      if (contador4 > contador3) {
        ben = false;
      } else {
        ben = true;
      }
      i++;
    }
    if (ben == true) {
      alert("Abalo das parénteses ben formado.")
    }
    if (ben == false) {
      alert("Abalo das parénteses mal formado.")
    }
  } else {
    alert("Abalo das parénteses mal formado.")
  }
}

/* ud3_t1_e7 */
var cadena, resultado = new String();
var cont = 0;
i = 0;
function maiusculas() {
  while (i < cadena.length) {
    palabra = "";
    while ((cadena.charAt(i) != " ") && (i < cadena.length)) {
      palabra += cadena.charAt(i);
      i++;
    }
    cont++;
    if ((cont % 2) != 0) {
      palabrar = palabra.toUpperCase();
    } else if ((cont % 2) == 0) {
      palabrar = palabra.toLowerCase();
    }
    resultado += palabrar + " ";
    i++;
  }
  alert(resultado);
}
function minusculas() {
  while (i < cadena.length) {
    palabra = "";

    while ((cadena.charAt(i) != " ") && (i < cadena.length)) {
      palabra += cadena.charAt(i);
      i++;

    }
    cont++;

    if ((cont % 2) != 0) {
      palabrar = palabra.toLowerCase();
    } else if ((cont % 2) == 0) {
      palabrar = palabra.toUpperCase();
    }
    resultado += palabrar + " ";
    i++;
  }
  alert(resultado);
}

/* ud3_t1_e9 */
var dni, letraDni;
var letras =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
var letrasDni= ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var result="";
function calcularLetra(ultimaLetra, result) {
    letraDni = letrasDni[result % 23];
    ultimaLetra.toUpperCase();
    if (ultimaLetra != letraDni) {
      result += "-" + ultimaLetra;
      alert("DNI incorrecto: "+result);
    } else {
      result += "-" + ultimaLetra;
      alert("DNI correcto: "+result);
    }
  }
function calcularDni() {
  dni = prompt("Introduce o teu DNI");
  i=0;
  j=0;
  if (dni.length==9) {
    for ( i = 0; i < letras.length; i++) {
      if (dni[dni.length-1]==letras[i]) {
        for ( j = 0; j < dni.length-1; j++) {
          result += dni.charAt(j);
        }
        calcularLetra(dni[dni.length-1], result);
        
      } 
  
    } 
    alert("El ultimo caracter no corresponde a una letra");
  } else {
    alert("Tamaño equivocado, introduce un DNI de 9 caracteres.")
  }
}