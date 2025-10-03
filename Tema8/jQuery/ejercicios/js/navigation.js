

$(document).ready(function(){
  $("ul#nav li:first-of-type").hover(function () {
    $("ul#nav li:first-of-type ul").show(1000);
  },function(){$("ul#nav li:first-of-type ul").hide(1000)});
  $("ul#nav li:nth-child(2)").hover(function () {
    $("ul#nav li:nth-child(2) ul").show(1000);
  },function(){$("ul#nav li:nth-child(2) ul").hide(1000)});
  $("ul#nav li:last-of-type").hover(function () {
    $("ul#nav li:last-of-type ul").show(1000);
  },function(){$("ul#nav li:last-of-type ul").hide(1000)});
});

