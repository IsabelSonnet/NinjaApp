//$(document).ready(() => {
//
//    $("button").click(function () {
//        $("#cop").animate({
//
//$(document).ready(() => {
//
//    $("button").click(function () {
//        $("#cop").animate({
//
//        });
//        $("#robber").animate({
//
//        });
//    });
//});
$(document).keydown(function(event){
     var keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == '39'){
                    $("#cop").animate({
                         left: '+=10px',
                    });
                }
     });
