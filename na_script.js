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
    });

    $(document).keydown(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '40') {
            $("#ninja").animate({
                top: '+=20px',
            });
        }
    });

    $(document).keydown(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '38') {
            $("#ninja").animate({
                top: '-=20px',
            });
        }
    });

    $(document).keydown(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '68') {
            $("#cop").animate({
                left: '+=20px',
            });
        }
    });

    $(document).keydown(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '65') {
            $("#cop").animate({
                left: '-=20px',
            });
        }
    });

    $(document).keydown(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '87') {
            $("#cop").animate({
                top: '-=20px',
            });
        }
    });

    $(document).keydown(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '83') {
            $("#cop").animate({
                top: '+=20px',
            });
        }
    });

$("#start").click(function () {
    $("p").animate({
      height: 'toggle'
    });
});

});
