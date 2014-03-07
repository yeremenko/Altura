$(document).ready(function() {
  var adjustHeight   = function () {
    var $huge        = $("#huge"),
        windowHeight = $(window).height();

    if(windowHeight >=400){
      $huge.height(windowHeight);
    } else {
    
    $huge.height(400);
    };
  };

  adjustHeight(); 

  $(window).on('resize', adjustHeight);

});    