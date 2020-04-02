
$(document).ready(() => {
$(document).keydown(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '39') {
        $("#cop").animate({
            left: '+=10px',
        });
    }
});

$(document).keydown(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '37') {
        $("#cop").animate({
            right: '+=10px',
        });
    }
});

});
