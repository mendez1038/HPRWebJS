(function() {
      var managers = ["Kyle", "Leo", "Hugo", "David", "Adri", "Nico"],
      i = 1,
      length = managers.length,
      fechaActual = new Date(),
      diaFechaComienzo,
      mesFechaComienzo,
      anoFechaComienzo,
      horaFechaComienzo,
      minFechaComienzo,
      secFechaComienzo,
      fechaComienzo,
      formulario = document.forms[0],
      results = $('.results'),
      arr = [],
      string = "",
      json = {},
      nombreSorteo,
      variableAlmacenamiento,
      audios = new Array("cl.mp3"),
      timeBtwLottery = (formulario.time.value*1000);
      
      function desvelar() {     
         if (length<1) {           
            string = JSON.stringify(arr);           
            localStorage.setItem(variableAlmacenamiento,string);     
         } else {     
            var j = Math.floor(Math.random() * length);     
            result = managers[j];     
            if (typeof result != 'undefined') {     
               managers.splice(j,1);     
               arr.push("<p>"+i+". "+result+"</p>");     
               results.append("<p>"+i+". "+result+"</p>");     
               i++;     
               length--;     
            }     
         }  
      }  
      
      function contaAtras() {     
         var ano, mes, dia, hora, min, sec,divConta;     
         fechaActual = new Date();     
         $('#fin').html("Fecha comienzo sorteo: " + fechaComienzo.getDate()+"/"+fechaComienzo.getMonth()+"/"+fechaComienzo.getFullYear()+"  "
         +fechaComienzo.getHours()+":"+fechaComienzo.getMinutes()+":"+fechaComienzo.getSeconds());     
         ano = fechaComienzo.getFullYear() - fechaActual.getFullYear();     
         mes = fechaComienzo.getMonth() - fechaActual.getMonth();     
         if (mes < 0) {mes=12+mes;ano=ano-1;};     
         dia = fechaComienzo.getDate() - (fechaActual.getDate());     
         if (dia < 0) {dia=30+dia;mes=mes-1;};     
         hora = fechaComienzo.getHours() - (fechaActual.getHours());     
         if (hora < 0) {hora=23+hora;dia=dia-1};     
         min = fechaComienzo.getMinutes() - (fechaActual.getMinutes());     
         if (min < 0) {min =60+min;hora=hora-1};     
         sec = fechaComienzo.getSeconds() - fechaActual.getSeconds();     
         if (sec < 0) {sec=60+sec;min=min-1;};     
         divConta = document.getElementById("contaAtras");     
         if (ano != 0) divConta.innerHTML = ano + " anos " + mes + " meses " + dia + " dias " + hora + " horas " + min + " minutos " + sec + " segundos";     
         if (ano == 0) divConta.innerHTML = mes + " meses " + dia + " dias " + hora + " horas " + min + " minutos " + sec + " segundos";
         if (ano == 0 && mes == 0) divConta.innerHTML = dia + " dias " + hora + " horas " + min + " minutos " + sec + " segundos";     
         if (ano == 0 && mes == 0 && dia == 0) divConta.innerHTML = hora + " horas " + min + " minutos " + sec + " segundos";     
         if (ano == 0 && mes == 0 && dia == 0 && hora == 0) divConta.innerHTML = min + " minutos " + sec + " segundos";     
         if (ano == 0 && mes == 0 && dia == 0 && hora == 0 && min == 0) divConta.innerHTML = sec + " segundos";     
         if (ano == 0 && mes == 0 && dia == 0 && hora == 0 && min == 0 && sec == 0) {
            $('.tpl-draft').css('display','block');
            if(localStorage.getItem(variableAlmacenamiento)){
               json = JSON.parse(localStorage.getItem(variableAlmacenamiento));
               pintarArray(json);     
            } else {           
               setInterval(desvelar,timeBtwLottery);            
            }  
         }
      }   
      
      function playAudio(x) {
      document.getElementById('myAudio').src = audios[x];
      myAudio.play();
   }

      function pintarArray(array){     
         for(let i=0;i<array.length;i++){           
            results.append(array[i]);     
         }   
      }

      $('#botonCrearSorteo').click( function (e) {
         e.preventDefault();
         $('.tpl-config').css('display','none');
         $('.tpl-draft').css('display','block');
         playAudio(0);         
         diaFechaComienzo = formulario.dia.value;
         mesFechaComienzo = formulario.mes.value;
         anoFechaComienzo = formulario.ano.value;
         horaFechaComienzo = formulario.hora.value;
         minFechaComienzo = formulario.min.value;
         secFechaComienzo = formulario.sec.value;
         fechaComienzo = new Date(anoFechaComienzo,mesFechaComienzo,diaFechaComienzo,horaFechaComienzo,minFechaComienzo,secFechaComienzo, 0);
         //fechaComienzo = new Date(2019, 08, 11, 20, 00, 00, 0);
         nombreSorteo  = formulario.nombre.value;
         $('.tpl-draft h1').text(nombreSorteo);
         if(nombreSorteo) variableAlmacenamiento = nombreSorteo;
         if(fechaActual > fechaComienzo){
            if(localStorage.getItem(variableAlmacenamiento)){
               json = JSON.parse(localStorage.getItem(variableAlmacenamiento));
               pintarArray(json);     
            } else {           
               setInterval(desvelar,timeBtwLottery);            
            }    
         } else {     
            setInterval(contaAtras,timeBtwLottery);   
         }  
      });
      $('#botonVerSorteo').click( function (e) {
         e.preventDefault();
         nombreSorteo  = formulario.vernombre.value;
         variableAlmacenamiento = nombreSorteo;
         if(localStorage.getItem(variableAlmacenamiento)) {
            $('.tpl-config').css('display','none');
            $('.tpl-draft h1').text(nombreSorteo);
            $('.tpl-draft').css('display','block');
            if(localStorage.getItem(variableAlmacenamiento)){
               json = JSON.parse(localStorage.getItem(variableAlmacenamiento)); 
               playAudio(0);          
               pintarArray(json);            
            }  
         } else {
            alert("No se ha realizado este sorteo");
         }   
      });
      
      $('.verConfig').click(function () {
         $('.tpl-config').css('display','block');
         $('.tpl-draft').css('display','none');
         myAudio.stop();
      });    
   })()