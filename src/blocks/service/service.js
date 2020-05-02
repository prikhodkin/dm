if($(window).width() < 1260) {
  $('.service__list').slick({
    nextArrow: ".service__arrow--right",
    prevArrow: ".service__arrow--left"
  })

  $('.service__control .count__small').html($(".service__list").slick("getSlick").slideCount)
  $(".service__list").on("afterChange", function(event, slick, currentSlide, nextSlide){
    $(".service__control .count__big").html(currentSlide + 1);
  });

}
