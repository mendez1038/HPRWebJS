(function() {
  var formulario = document.forms[0],
  elementos = document.forms[0].elements,
  boton = document.querySelector('.submit');
  console.log(formulario,elementos,boton),
  salida = "",
  salidaError = "",
  patronMayus=/^[A-Z]/;

  var $inputAnimation = $(".footer .inputs input");
  
  function validarNombre() {
    salida = "";
    salidaError = "";
    if (formulario.nombre.value) {
      if (formulario.nombre.value.length >= 2) {
        if (formulario.nombre.value.match(patronMayus)) {
          if (formulario.nombre.value.length < 30) {
            salida = salida+"Nombre: "+formulario.nombre.value+"\n";
            limpiar(formulario.nombre);
            return true;
          } else {
            salidaError = salidaError+"Nombre demasiado largo\n";
            resaltarError(formulario.nombre);
            return false;
          }
        }
        salidaError = salidaError+"Nombre en minusculas\n";
        resaltarError(formulario.nombre);
        return false;
      } else {
        salidaError = salidaError+"Nombre demasiado corto\n";
        resaltarError(formulario.nombre);
        return false;
      }
    } else {
      salidaError = salidaError+"Nombre vacio\n";
      resaltarError(formulario.nombre);
      return false;
    }
  } 
  function validarApellido() {
    if (formulario.apellido.value) {
      if (formulario.apellido.value.length >= 2) {
        if (formulario.apellido.value.match(patronMayus)) {
          if (formulario.apellido.value.length < 30) {
            salida = salida+"Apellido: "+formulario.apellido.value+"\n";
            limpiar(formulario.apellido)
            return true;
          } else {
            salidaError = salidaError+"Apellido demasiado largo\n";
            resaltarError(formulario.apellido);
            return false;
          }
        }
        salidaError = salidaError+"Apellido en minusculas\n";
        resaltarError(formulario.apellido);
        return false;
      } else {
        salidaError = salidaError+"Apellido demasiado corto\n";
        resaltarError(formulario.apellido);
        return false;
      }
    } else {
      salidaError = salidaError+"Apellido vacio\n";
      resaltarError(formulario.apellido);
      return false;
    }
  }
  function validarPregunta() {
    if (formulario.respuesta[0].checked) {
      salida = salida+"Respuesta: "+formulario.respuesta[0].value+"\n";
      return true;
    } else if(formulario.respuesta[1].checked){
      salida = salida+"Respuesta: "+formulario.respuesta[1].value+"\n";
      return true;
    } else if(formulario.respuesta[2].checked){
      salida = salida+"Respuesta: "+formulario.respuesta[2].value+"\n";
      return true;
    } else {
      salidaError = salidaError+"Respuesta vacia\n";
      return false;
    }
  }
  function validarEmail() {
    var email = formulario.email.value;
    if (email) {
      salida = salida+"Email: "+email+"\n";
      limpiar(formulario.email);
      return true;
    } else {
      salidaError = salidaError+"Email vacio\n";
      resaltarError(formulario.email);
      return false;
    }
  }
  function validarCheck() {
    if (formulario.check.checked) {
      salida = salida+"Terminos aceptados\n";
      limpiar(formulario.check)
      return true;
    } else{
      salidaError = salidaError+"Terminos no aceptados\n";
      resaltarError(formulario.check);
      return false;
    }
  }
  function validar(e) {
    e.preventDefault();
    if (validarNombre() && validarApellido() && validarEmail() && validarPregunta() && validarCheck()) {
      alert(salida);
      location.reload(true);
    } else{
      alert(salidaError);
    }
  }
  function resaltarError(elemento) {
    elemento.className = "error";
    elemento.focus();
  }
  function limpiar(elemento) {
    elemento.className = "";
  }
  formulario.addEventListener("submit", validar);
  setInterval(function () {
      if (formulario.nombre.value) {   
          $(".footer .inputs input#nombre ~ span").addClass("sta-top");
      } else {
        $(".footer .inputs input#nombre ~ span").removeClass("sta-top");
      }
      if (formulario.apellido.value) {   
        $(".footer .inputs input#apellido ~ span").addClass("sta-top");
      } else {
        $(".footer .inputs input#apellido ~ span").removeClass("sta-top");
      }
      if (formulario.email.value) {   
        $(".footer .inputs input#email ~ span").addClass("sta-top");
      } else {
        $(".footer .inputs input#email ~ span").removeClass("sta-top");
      }
    }
  ),1000;

})();