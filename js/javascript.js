$(document).ready(function() {
    $(".step__item-anchor").on("click", function (e) {
      e.preventDefault();
      var plansOffSet = $("#anchor").offset().top;

      $("html, body").animate({
        scrollTop: plansOffSet
      }, 500);
    });
});
