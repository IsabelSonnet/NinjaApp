
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

$(document).ready(() => {

    $(document).keydown(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '39') {
            $("#copimg").animate({
                left: '+=10px',
            });
    }
});
