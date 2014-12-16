$(document).ready(function(){
  $('#homeCarousal').slick({
    adaptiveHeight : false,
    autoplay : true,
    arrows : true,
    infinite : true,
    pauseOnHover : false
  });

  $('#storiesBox').slick({
    adaptiveHeight : true,
    arrows : true
  });

  $("#notSidebar").click(function(e){
    $('#main').removeClass("sidebar-visible");
  });

  $("#toggleSidebar").click(function(e){
    $('#main').toggleClass("sidebar-visible");
    e.stopPropagation();
  });
});

window.onload = function(){
    $('#sidebar').load('partials/sidebar.html');
};