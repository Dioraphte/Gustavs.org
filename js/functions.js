$(document).ready(function(){
  $("#trigger").click(function(){
    $(".burger-stripes").toggleClass("glyphicon glyphicon-menu-hamburger");
    $(".burger-stripes").toggleClass("glyphicon glyphicon-remove");
  });
  $("#trigger").click(function() {
    $("#menu").toggleClass("active");
    $("#trigger").animate({
      marginLeft: "20vw"
    }, 500);
  });
  $(".slided").click(function() {
    $("#trigger").hide();
  })
});
