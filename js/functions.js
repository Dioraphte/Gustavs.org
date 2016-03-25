$(document).ready(function(){
  $("#trigger").click(function(){
    $(".burger-stripes").toggleClass("glyphicon glyphicon-menu-hamburger");
    $(".burger-stripes").toggleClass("glyphicon glyphicon-remove");
  });
  $("#trigger").click(function() {
    $("#menu").toggleClass("active");
  });
  $(function() {
    $("#trigger").click(function() {
      if ( $("#trigger").hasClass("triggered") === false) {
        $("#trigger").animate({marginLeft: "18vw"});
        $("#trigger").toggleClass("triggered");
      } else {
        $("#trigger").animate({marginLeft: "1.5vw"}, 500);
        $("#trigger").removeClass("triggered");
      }
    });
  });
});
