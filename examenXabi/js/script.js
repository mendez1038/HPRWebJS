(function(){

    /** SLIDESHOW */
$("#slideshow_slide > div:gt(0)").hide();

$("#slideshow #button_d").click(function() { 
  $('#slideshow_slide > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow_slide');
});
$("#slideshow #button_i").click(function() { 
    $('#slideshow_slide > div')
    .fadeOut(1000)
    .prev()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow_slide');
  });
  /**BUSCADOR */
  $('#header_buscar').click(function () {
    $('#buscador').css('display','block');
    });
    $('#buscador img').click(function () {
        $('#buscador').css('display','none');
    });

    /**DESPLEGABLE */
  $('button#header_menu').click(function () {
      $('#meusitio #meusitio_max nav #header_der #nav2 li #header_menu #desplegable').addClass("show");
    })
    window.onclick = function(event) {
        if (!event.target.matches('#header_menu img')) {
            var menudes = document.querySelector("#desplegable");
            if (menudes.classList.contains('show')) {
                menudes.classList.remove('show');
            }
        }
        }
  

    /**HOVER */
    $('#header_izq').hover(function(){
        $('#header_izq').fadeIn('#6F7A1C');
    })

    /**COOKIES */
    $('#cookies input').click(function () {
    $('#cookies').css('display','none');
    });
    $('button#cookies_cancelar').click(function () {
        $('#cookies').css('display','none');
    });


var crearGaleria = (function () {
    var posi = 0,
      obj = null;
    var divcreado = function () {
      return $("<div></div>", { class: "sta-gallery_img", style: "background-image: url('" + obj.photos[posi] + "')" });
    };
    var control = function (a) {
      if (a.obj && a.parent && a.photos && a.photos.length) {
        obj = a;
        cargaIniciar();
      } else {
        console.trace("Faltan valores")
      };
    };
    function cargaIniciar() {
      $(obj.parent).append(divcreado);
      if (obj.photos.length > 1) {
        if (obj.scrollbar) {
          $(obj.scrollbar).css("width", (100 / obj.photos.length) + "%");
          eventosBotones()
        }
        $(obj.obj).addClass("sta-moreImages");
      };
    };
    function eventosBotones() {
      //1.- //crear evento left --> llama funcion moverLeft y moverScroll
      //2.- //crear evento rigth --> llama funcion moverRigth y moverScroll
      $(obj.buttonLeft).click(function () { moverLeft()});
      $(obj.buttonRight).click(function () { moverRigth()});
      
    }
    function moverScroll() {
      console.log(posi);
      for (var i = 0; i < obj.photos.length; i++) {
        if (i == posi) {
          $(obj.scrollbar).css("left", (100 / obj.photos.length) * posi + "%");
        }
      }
      //5.-
      //partiendo de la variable posi, posicionar el left del scrollBar mediante una animacion
    }
    function moverLeft() {
      if (posi == 0) { posi = obj.photos.length - 1; } else { posi--; }
      console.log("Posicion Right: " + posi);
      divcreado().css("left", "-100%");
      $(obj.parent).children().animate({ left: "100%" }, 1000, function () { $(obj.parent).children().first().remove(); });
      $(obj.parent).append(divcreado);
      //divcreado.animate({ left: "0px" },1000);
      moverScroll();
      //3.-
      //crear div con imagen siguiente (si la imagen siguiente no existe poner la posicion 0)
      //darle al div creado left 100%
      //animacion sobre el contenido actual a left -100%
      //insertar eL div creado en el html 
      //animacion sobre div creado a left = 0
    }
    function moverRigth() {
      if (posi == obj.photos.length - 1) { posi = 0; } else { posi++; }
      console.log("Posicion Left: " + posi)
      divcreado().css("left", "100%");
      $(obj.parent).children().animate({ left: "-100%" }, 1000, function () { $(obj.parent).children().first().remove(); });
      $(obj.parent).append(divcreado);
      //divcreado.animate({ left: "0px" },1000);
      moverScroll();
      //4.-
      //crear div con imagen anterior (si la imagen anterior no existe poner la ultima posicion)
      //darle al div creado left -100%
      //animacion sobre el contenido actual a left 100%
      //insertar en div creado en el html
      //animacion sobre div creado a left = 0
    }
    return control;
  })();
  var fotos = ["./img/foto1.jpg", "./img/foto2.jpg", "./img/foto3.jpg",
    "./img/foto4.jpg", "./img/foto5.jpg", "./img/foto6.jpg"];
  (function (o, arr, $) {
    if (o && arr) {
      var obj = {
        obj: o,/*esta*/
        parent: o.querySelector(".sta-gallery_width"), /*esta*/
        buttonLeft: o.querySelector(".sta-gallery_left"),
        buttonRight: o.querySelector(".sta-gallery_right"),
        scrollbar: o.querySelector(".sta-gallery_scrollbar"),
        photos: arr // necesaria
      };
      console.log(crearGaleria)
      crearGaleria(obj)
    }
  })(document.querySelector(".tpl-gallery"), fotos, jQuery);

})();
