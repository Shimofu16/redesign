$(document).ready(function(){
    /* only use this code when rotue is */
    $(window).scroll(function () {
      if ($(window).scrollTop()) {
        $("#navigation").removeClass("navbar-transparent");
        $("#navigation").addClass("navbar-white");
      } else {
        $("#navigation").removeClass("navbar-white");
        $("#navigation").addClass("navbar-transparent");
      }
    });
  
  
  /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  $("#academicsbtn").click(function () {
    if ($("#academicsdd").hasClass("show")) {
      $("#academicsdd").removeClass("show");
    } else {
      $("#academicsdd").addClass("show"); 
    }
  });
  $("#academics").hover(function () {
    if ($("#academicsdd").hasClass("show")) {
      $("#academicsdd").removeClass("show");
    } else {
      $("#academicsdd").addClass("show"); 
    }
  });
  $("#servicesbtn").click(function () {
    if ($("#servicesdd").hasClass("show")) {
      $("#servicesdd").removeClass("show");
    } else {
      $("#servicesdd").addClass("show"); 
    }
  });
  $('#services').hover(function(){
    if ($("#servicesdd").hasClass("show")) {
      $("#servicesdd").removeClass("show");
    } else {
      $("#servicesdd").addClass("show"); 
    }
  });
});

// Close the dropdown if the user clicks outside of it
/* window.onclick = function(e) {
  if (!e.target.matches('.dropdown-btn')) {
  var dd = document.getElementById("academicsdd");
    if (dd.classList.contains('show')) {
      dd.classList.remove('show');
    }
  }
} */
