$(document).ready(function() {
  $("#trigger").click(function() {
    $(".burger-stripes").toggleClass("glyphicon glyphicon-menu-hamburger");
    $(".burger-stripes").toggleClass("glyphicon glyphicon-remove");
  });
  $("#trigger").click(function() {
    $("#menu").toggleClass("active");
  });
  $(function() {
    $("#trigger").click(function() {
      if ( $("#trigger").hasClass("triggered") === false) {
        $("#trigger").animate({marginLeft: "22vw"});
        $("#trigger").toggleClass("triggered");
      } else {
        $("#trigger").animate({marginLeft: "1.5vw"}, 500);
        $("#trigger").removeClass("triggered");
      }
    });
  });
  if ($(".carousel-image").attr("src") === "placeholder.png") {
    setInterval(function() {
      $(".carousel-image").fadeOut(1000);
    }, 5000);
    setInterval(function() {
      $(".carousel-image").fadeIn(1000);
    }, 5950);
    setInterval(function() {
      $(".carousel-image").attr("src", "placeholder1.png");
    }, 5951);
  }
  setInterval(function() {
    $(".carousel-image").fadeOut(1000);
  }, 8951);
  setInterval(function() {
    $(".carousel-image").fadeIn(1000);
  }, 9901);
  setInterval(function() {
    $(".carousel-image").attr("src", "placeholder.png");
  }, 9902);
});
