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
    autoplay : false,
    arrows: false
  });

  $('.storyPrevIcon').click(function(){
    $('#storiesBox').slickPrev();  
  });

  $('.storyNextIcon').click(function(){
    $('#storiesBox').slickNext();  
  });

  $("#carousal2013").slick({
    adaptiveHeight : false,
    autoplay : true,
    arrows : true,
    infinite : true,
  });

  $("#carousal2014").slick({
    adaptiveHeight : false,
    autoplay : true,
    arrows : true,
    infinite : true,
  });

  

  $("#notSidebar").click(function(e){
    $('#main').removeClass("sidebar-visible");
  });

  $("#toggleSidebar").click(function(e){
    $('#main').toggleClass("sidebar-visible");
    e.stopPropagation();
  });
});