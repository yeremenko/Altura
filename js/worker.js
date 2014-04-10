$(document).ready(function() {
  var adjustHeight   = function () {
    var $huge        = $("#huge"),
        windowHeight = $(window).height();

    if(windowHeight > 600){
      $huge.height(windowHeight);
    } else {
    
    $huge.height(600);
    };
  };

  adjustHeight(); 

  $(window).on('resize', adjustHeight);

});    