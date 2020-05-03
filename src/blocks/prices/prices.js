if($(window).width() < 1260) {
  $('.prices__list').slick({
    nextArrow: ".prices__arrow--right",
    prevArrow: ".prices__arrow--left",
    fade: true,
    adaptiveHeight: true
  })

  $('.prices .count__small').html($(".prices__list").slick("getSlick").slideCount)
  $(".prices__list").on("afterChange", function (event, slick, currentSlide, nextSlide) {
    $(".prices__control .count__big").html(currentSlide + 1);
  });
}
