$(document).ready(() => {

$(document).keydown(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '39') {
        $("#ninja").animate({
            left: '+=20px',
        });
    }
});

$(document).keydown(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '37') {
        $("#ninja").animate({
            left: '-=20px',
        });
    }

});$(document).keydown(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '40') {
        $("#ninja").animate({
            top: '+=20px',
        });
    }

});$(document).keydown(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '38') {
        $("#ninja").animate({
            top: '-=20px',
        });
    }
});

});
