$(window).scroll(function () {
  if ($(window).scrollTop()) {
    $("#navigation").removeClass("navbar-transparent");
    $("#navigation").addClass("navbar-white");
  } else {
    $("#navigation").removeClass("navbar-white");
    $("#navigation").addClass("navbar-transparent");
  }
});
