$('.case__list').slick({
  nextArrow: ".case__arrow--right",
  prevArrow: ".case__arrow--left",
  fade: true
})

$('.case__control .count__small').html($(".case__list").slick("getSlick").slideCount)
$(".case__list").on("afterChange", function(event, slick, currentSlide, nextSlide){
  $(".case__control .count__big").html(currentSlide + 1);
});
