(function() {
   var managers = ["Kyle", "Leo", "Hugo", "David", "Adri", "Nico"],
   i = 1,
   length = managers.length,
   fechaActual = new Date(),
   fechaComienzo = new Date(2019, 08, 11, 20, 00, 00, 0),
   results = $('.results'),
   arr = [],
   string = "",
   json = {},
   variableAlmacenamiento = "sorteobuenoasdñlkfsdñdkhgfhls",
   timeBtwLottery = 30000;
   
   if(fechaActual > fechaComienzo){
      if(localStorage.getItem(variableAlmacenamiento)){
         json = JSON.parse(localStorage.getItem(variableAlmacenamiento));           
         pintarArray(json);     
      } else {           
         setInterval(desvelar,timeBtwLottery);            
      }    
   } else {     
      setInterval(contaAtras, 1000);   
   }  
   
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
      if (ano == 0 && mes == 0 && dia == 0 && hora == 0 && min == 0 && sec == 0) location.reload(true);   
   }   
   
   function pintarArray(array){     
      for(let i=0;i<array.length;i++){           
         results.append(array[i]);     
      }   
   }
})()