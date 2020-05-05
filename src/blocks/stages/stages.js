$('.stages__list').slick({
  nextArrow: ".stages__arrow--right",
  prevArrow: ".stages__arrow--left",
  fade: true,
  adaptiveHeight: true
})

$('.stages .count__small').html($(".stages__list").slick("getSlick").slideCount)
$(".stages__list").on("afterChange", function(event, slick, currentSlide, nextSlide){
  $(".stages .count__big").html(currentSlide + 1);
});
