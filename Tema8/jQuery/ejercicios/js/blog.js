$(document).ready(function(){
  $("div#blog ul li:first-of-type a").click(function() {
    $("div#blog ul li:first-of-type p").show(1000);
  });
  $("div#blog ul li:nth-child(even) a").click(function() {
    $("div#blog ul li:nth-child(even) p").show(1000);
  });
  $("div#blog ul li:last-of-type a").click(function() {
    $("div#blog ul li:last-of-type p").show(1000);
  });
  $("h1,h2").click(function () {
    $(".excerpt:visible").hide(1000);
  })
});