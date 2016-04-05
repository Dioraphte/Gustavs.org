$(document).ready(function() {
  $("#trigger").click(function() {
    $(".burger-stripes").toggleClass("glyphicon glyphicon-menu-hamburger");
    $(".burger-stripes").toggleClass("glyphicon glyphicon-remove");
  });
  // $("#trigger").click(function() {
  //   $("#menu").toggleClass("active");
  // });
  $("#trigger").click(function() {
    if ( $("#menu").hasClass("menued") === false) {
      $("#menu").animate({marginLeft: "0"});
      $("#menu").addClass("menued");
      $("#menu").css("box-shadow", "5px 0 20px black");
    } else {
      $("#menu").animate({marginLeft: "-18vw"});
      $("#menu").removeClass("menued");
      $("#menu").css("box-shadow", "0 0 0 #fff");
    }
  });

  $(function() {
    $("#trigger").click(function() {
      if ( $("#trigger").hasClass("triggered") === false) {
        $("#trigger").animate({marginLeft: "21vw"});
        $("#trigger").addClass("triggered");
      } else {
        $("#trigger").animate({marginLeft: "1.5vw"}, 500);
        $("#trigger").removeClass("triggered");
      }
    });
  });
});
