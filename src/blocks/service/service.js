if($(window).width() < 1320) {
  $('.service__list').slick({
    nextArrow: ".service__arrow--right",
    prevArrow: ".service__arrow--left"
  })

  $('.count__small').html($(".service__list").slick("getSlick").slideCount)
  $(".service__list").on("afterChange", function(event, slick, currentSlide, nextSlide){
    $(".count__big").html(currentSlide + 1);
  });

}
