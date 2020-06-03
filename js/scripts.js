$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#webpage").prepend("<li>Bowwwowww!</li>");
    $(".dog-showing").toggle();
  });
  $("button#bark").click(function() {
    $("ul#user").prepend("<li>Meoooooow!</li>");
  });
});


