$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#webpage").prepend("<li>Bowwwowww!</li>");
    $("ul#user").show();
    //$(".dog-hidden").before(<li></li>);
    //$(".dog-showing").toggle();
    // $("ul#user").children("li").first().click(function() {
    //   $(this).remove();
    //   });
    // $("ul#webpage").children("li").first().click(function() {
    //   $(this).remove();
    //   });
    });

  $("button#bark").click(function() {
    $("ul#user").prepend("<li>Meoooooow!</li>");
  });
});