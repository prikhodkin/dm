if($(window).width() < 760) {
  $('.include__list').slick({
    nextArrow: ".include__arrow--right",
    prevArrow: ".include__arrow--left",
    adaptiveHeight: true,
    fade: true
  })

  $('.include__control .count__small').html($(".include__list").slick("getSlick").slideCount)
  $(".include__list").on("afterChange", function(event, slick, currentSlide, nextSlide){
    $(".include__control .count__big").html(currentSlide + 1);
  });

}
