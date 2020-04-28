"use strict";

$('.menu__btn').click(function () {
  $('.menu__hamburger').toggleClass('menu__hamburger--active');
  $('.menu__list').slideToggle();
});

if ($(window).width() < 1320) {
  $('.service__list').slick({
    nextArrow: ".service__arrow--right",
    prevArrow: ".service__arrow--left"
  });
  $('.count__small').html($(".service__list").slick("getSlick").slideCount);
  $(".service__list").on("afterChange", function (event, slick, currentSlide, nextSlide) {
    $(".count__big").html(currentSlide + 1);
  });
}
//# sourceMappingURL=maps/general.js.map
