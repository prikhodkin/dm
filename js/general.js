"use strict";

$('.menu__btn').click(function () {
  $('.menu__hamburger').toggleClass('menu__hamburger--active');
  $('.menu__list').slideToggle();
});

if ($(window).width() < 1260) {
  $('.service__list').slick({
    nextArrow: ".service__arrow--right",
    prevArrow: ".service__arrow--left"
  });
  $('.service__control .count__small').html($(".service__list").slick("getSlick").slideCount);
  $(".service__list").on("afterChange", function (event, slick, currentSlide, nextSlide) {
    $(".service__control .count__big").html(currentSlide + 1);
  });
}

$('.case__list').slick({
  nextArrow: ".case__arrow--right",
  prevArrow: ".case__arrow--left",
  fade: true
});
$('.case__control .count__small').html($(".case__list").slick("getSlick").slideCount);
$(".case__list").on("afterChange", function (event, slick, currentSlide, nextSlide) {
  $(".case__control .count__big").html(currentSlide + 1);
});
$('.stages__list').slick({
  nextArrow: ".stages__arrow--right",
  prevArrow: ".stages__arrow--left",
  fade: true
});
$('.stages .count__small').html($(".stages__list").slick("getSlick").slideCount);
$(".stages__list").on("afterChange", function (event, slick, currentSlide, nextSlide) {
  $(".stages .count__big").html(currentSlide + 1);
});
//# sourceMappingURL=maps/general.js.map
