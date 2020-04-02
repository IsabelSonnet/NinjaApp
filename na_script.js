$(document).ready(() => {
    var $startbutton = $("#start");
    var $cop = $("#cop");
    var $robber = $("#robber");
    var $copimg = $("#copimg");
  $startbutton.click(function () {
    if (clicked == false) {
      $copimg.animate({
        width: "300px",
        height: "300px",
        marginLeft: "150px",
        opacity: 0.5
      });
      clicked = true;
    } else {
      $cop.animate({
        width: "100px",
        height: "100px",
        marginLeft: "0px",
        borderWidth: "2px",
        opacity: 1
      });
      clicked = false;
    }
  });
});

  //      $("#cop").animate({

        });
  //      $("#robber").animate({

        });
