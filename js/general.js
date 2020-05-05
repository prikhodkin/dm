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
  fade: true,
  adaptiveHeight: true
});
$('.stages .count__small').html($(".stages__list").slick("getSlick").slideCount);
$(".stages__list").on("afterChange", function (event, slick, currentSlide, nextSlide) {
  $(".stages .count__big").html(currentSlide + 1);
});

if ($(window).width() < 1260) {
  $('.prices__list').slick({
    nextArrow: ".prices__arrow--right",
    prevArrow: ".prices__arrow--left",
    fade: true,
    adaptiveHeight: true
  });
  $('.prices .count__small').html($(".prices__list").slick("getSlick").slideCount);
  $(".prices__list").on("afterChange", function (event, slick, currentSlide, nextSlide) {
    $(".prices__control .count__big").html(currentSlide + 1);
  });
}

if ($(window).width() < 760) {
  $('.include__list').slick({
    nextArrow: ".include__arrow--right",
    prevArrow: ".include__arrow--left",
    adaptiveHeight: true,
    fade: true
  });
  $('.include__control .count__small').html($(".include__list").slick("getSlick").slideCount);
  $(".include__list").on("afterChange", function (event, slick, currentSlide, nextSlide) {
    $(".include__control .count__big").html(currentSlide + 1);
  });
}

$('[data-fancy]').fancybox({
  padding: 0
});
$('.reviews__list').slick({
  nextArrow: ".reviews__arrow--right",
  prevArrow: ".reviews__arrow--left",
  fade: true
});
$('.reviews__control .count__small').html($(".reviews__list").slick("getSlick").slideCount);
$(".reviews__list").on("afterChange", function (event, slick, currentSlide, nextSlide) {
  $(".reviews__control .count__big").html(currentSlide + 1);
});
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 60) {
    $('.header').addClass('header--fixed');
  } else {
    $('.header').removeClass('header--fixed');
  }
});
$("a[href^='#']").click(function () {
  var _href = $(this).attr("href");

  $("html, body").animate({
    scrollTop: $(_href).offset().top + "px"
  });
  return false;
});
$("form").submit(function () {
  //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php",
    //Change
    data: th.serialize()
  }).done(function () {
    showThx();
    setTimeout(function () {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});

var showModal = function showModal(target, modal) {
  $(target).on('click', function (evt) {
    evt.preventDefault();
    $('.overlay').fadeIn();
    $(modal).css('top', $(window).scrollTop() + 40);
    $(modal).fadeIn();
  });
  var close = $(modal).find('.modal__close');
  $(close).on('click', function (evt) {
    evt.preventDefault();
    $('.overlay').fadeOut();
    $(modal).fadeOut();
  });
  $('.overlay').on('click', function (evt) {
    evt.preventDefault();
    $('.overlay').fadeOut();
    $(modal).fadeOut();
  });
};

var showThx = function showThx() {
  $('.modal--all').fadeOut();
  $('.modal--clients').fadeOut();
  $('.modal--google').fadeOut();
  $('.modal--yandex').fadeOut();
  $('.overlay').fadeIn();
  $('.modal--thx').css('top', $(window).scrollTop() + 40);
  $('.modal--thx').fadeIn();
  $('.modal--thx').find('.modal__close').on('click', function (evt) {
    evt.preventDefault();
    $('.overlay').fadeOut();
    $('.modal--thx').fadeOut();
  });
  $('.overlay').on('click', function (evt) {
    evt.preventDefault();
    $('.overlay').fadeOut();
    $('.modal--thx').fadeOut();
  });
};

showModal('.promo__button', '.modal--yandex');
showModal('.prices__button--yandex', '.modal--yandex');
showModal('.prices__button--google', '.modal--google');
showModal('.prices__button--all', '.modal--all');
//# sourceMappingURL=maps/general.js.map
