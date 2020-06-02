$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#webpage").prepend("<li>Bowwow!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
      });
    });

  $("button#bark").click(function() {
    $("ul#user").prepend("<li>Meoooooow!</li>");
  });
});