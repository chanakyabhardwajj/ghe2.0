$(document).ready(function(){
  $('.ui.modal').modal();
  $('.ui.dropdown').dropdown();

  $(".ui.card.normal .description").dotdotdot({});

  $('.right.menu.open').on("click",function(e){
    e.preventDefault();
    $('.ui.vertical.menu').toggle();
  });

  // $("#contactMenuItem").click(function(e){
  //   e.preventDefault();
  //   $("#contactModal").modal('show');
  // });


  $('.carousal').slick({
    adaptiveHeight : false,
    autoplay : true,
    arrows : true,
    infinite : true,
    pauseOnHover : false
  });

  $('.smallCarousal').slick({
    adaptiveHeight : true,
    mobileFirst : true,
    autoplay : false,
    arrows : false,
    dots : true,
    slide : ".smallCarousal img",
    infinite : true,
    pauseOnHover : false,
    fade: false
  });

  $('#storiesBox').slick({
    adaptiveHeight : false,
    autoplay : false,
    arrows: false,
    mobileFirst : true
  });

  $('.storyPrevIcon').click(function(){
    $('#storiesBox').slickPrev();  
  });

  $('.storyNextIcon').click(function(){
    $('#storiesBox').slickNext();  
  });

  $("#carousal2014").slick({
    adaptiveHeight : false,
    autoplay : true,
    arrows : true,
    infinite : true,
  });
});