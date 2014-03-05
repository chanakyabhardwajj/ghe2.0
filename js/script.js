window.onload = function(){
    //Load the templates & fix the nav-active
    $('[data-toggle=offcanvas]').click(function () {
        $('.row-offcanvas').toggleClass('active');
        $('#sidebar').removeClass('hide');
    });

    $('#sidebar').load('partials/sidebar.html');

    $('#myUndecidedModal').load('partials/undecidedmodal.html');

    //Cyclically display participant stories
    /*var storiesBox = $("#storiesBox");
    if(storiesBox.length>0){
        var stories = $("#storiesBox .storyBox");
        var i = 0;

        window.setInterval(function(){
            $(stories[i%stories.length]).fadeOut(200, function(){
                $(stories[(i+1)%stories.length]).fadeIn();
                i++;
            });
        }, 5000);
    }*/
};