window.onload = function(){
    //Load the templates & fix the nav-active
    $('#header').load('partials/header.html', function(){
        var pageURL = window.location.pathname.substr(1,window.location.pathname.length-6);
        if(pageURL){
            if(pageURL==="2013" || pageURL === "2014"){
                $("#header .expeditions").addClass("active");
            }
            else{
                $("#header ." + pageURL).addClass("active");
            }
        }
        else{
            $("#header .index").addClass("active");
        }
    });
    $('#footer').load('partials/footer.html');
    $('#myModal').load('partials/joinmodal.html');
    $('#myUndecidedModal').load('partials/undecidedmodal.html');



    //Cyclically display participant stories
    var storiesBox = $("#storiesBox");
    if(storiesBox.length>0){
        var stories = $("#storiesBox .storyBox");
        var i = 0;

        window.setInterval(function(){
            $(stories[i%stories.length]).fadeOut(200, function(){
                $(stories[(i+1)%stories.length]).fadeIn();
                i++;
            });

        }, 5000);
    }
};