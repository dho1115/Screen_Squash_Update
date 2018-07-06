

$(".properties").click(function() {
    $(this).css("color","red");      
    $(this).css("animation-play-state","paused");    
    $(this).css("color","red") ? $("#msg").text("SQUASHED!!!") : $("span").text();
});



