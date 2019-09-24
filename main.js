$(function () {
    $('.menu-toggle, .fa-times').on('click', function () {
        $('nav').toggleClass('active');
        $('overlay').toggleClass('menu-open');
    });

    $('overlay').on('click', function () {
        $('nav').removeClass('active');
        $('overlay').removeClass('menu-open');
    });
});

  function setNewImage() {
      document.getElementById("img1").src = "assets/images/watch-front-copy.png";
  }
  
  function setOldImage() {
    document.getElementById("img1").src = "assets/images/watch.png";
}


/* removes class makeRed, adds class makeBorder on mouseenter
$("button").mouseenter(function(){
    $(this).removeClass("makeRed").addClass("makeBorder");
    });
    
    $("button").mouseleave(function(){
    $("button").removeClass("makeBorder").addClass("makeRed");
    }); */