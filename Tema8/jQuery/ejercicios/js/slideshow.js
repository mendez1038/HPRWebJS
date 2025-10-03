$("#slide > div:gt(0)").hide();

setInterval(function() { 
  $('#slide > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slide');
},  3000);