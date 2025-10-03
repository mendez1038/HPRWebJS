/* Seleccion */

  /* 1 */function s1() { 
    $("div.module").css({"border":"2px solid black","transition":"1s","background":"pink"});
    return console.log("Selecciones, ejercicio 1: ",$("div.module"));
  };
  /* 2 */function s2() { 
    $("#myListItem").css({"border":"2px solid black","transition":"1s","background":"blue"});
    return console.log("Selecciones, ejercicio 2: a)",
    $("#myListItem"),"\n b)",
    $("ul#myList li:nth-child(3)"),"\n c)",
    $("ul#myList li:nth-of-type(3)"));
  };
   /* 3 */function s3() { 
    $("label[for='q']").css({"border":"2px solid black","transition":"1s","background":"green"});
    return console.log("Selecciones, ejercicio 3: ",
    $("label[for='q']"));
  };
  /* 4 */function s4() { 
    return console.log("Selecciones, ejercicio 4: ",
    $("body").find(":hidden").length
    );
  };
  /* 5 */function s5() { 
    return console.log("Selecciones, ejercicio 5: ",
    $("img").attr('alt').length
    );
  };
  /* 6 */function s6() { 
    $("table tbody tr:nth-of-type(odd)").css({"border":"2px solid black","transition":"1s","background":"yellow"});
    return console.log("Selecciones, ejercicio 6: ",
    $("table tbody tr:nth-of-type(odd)")
    );
  };

/* DOM */

/* 1 */function d1() { 
    for (var i = 0; i < $("img").length; i++) {
     console.log("DOM, ejercicio 1: img",i+1,$($("img")[i]).attr("alt"));
    };
  };
/* 2 */function d2() { 
    $('input.input_submit').closest('form').addClass("hola");
    return console.log("DOM, ejercicio 2: ",$('input.input_submit').closest('form'));
   };
/* 3 */function d3() { 
  $(".current").removeClass("current").next("li").addClass("current");
  return console.log("DOM, ejercicio 3: ",$(".current"))
   };
/* 4 */function d4() { 
  return console.log("DOM, ejercicio 4: ",$("#specials select").parent().siblings().children())
   };
/* 5 */function d5() { 
  return console.log("DOM, ejercicio 5: ",$("#slideshow li:nth-child(1)").addClass("current").siblings().addClass("disabled"))
};

/* Manipulacion */

/* 1 */function m1() { 
  for (var j = 0; j < 5; j++) {
    $("#myList").append("<li> Item </li>")
  }
  return console.log("Manipulacion, ejercicio 1: ",$("#myList"))
};
/* 2 */function m2() { 
  var array = $("#myList li");
  for (var i = 0; i < array.length; i++) {
    if (i % 2 != 0) {
      array[i].remove();
    }
  }
  return console.log("Manipulacion, ejercicio 2: ",$("#myList"))
};
/* 3 */function m3() { 
  $("div.module").append("<h2>Hola</h2><p>que tal?</p>");
  return console.log("Manipulacion, ejercicio 3: ",$("div.module"));
};
/* 4 */function m4() { 
  $("select").append("<option>Wednesday</option>");
  return console.log("Manipulacion, ejercicio 4: ",$("select"));
};
/* 5 */function m5() { 
  $("div.module").after("<div class='module'></div>");
  var copia =$('ul#slideshow li:first-child img').clone();
  $("div.module:last-of-type").append(copia);
  return console.log("Manipulacion, ejercicio 5: ",$("div.module:last-of-type"));
};
