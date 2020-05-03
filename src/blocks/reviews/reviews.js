$('[data-fancy]').fancybox({
  padding : 0,
});

$('.reviews__list').slick({
  nextArrow: ".reviews__arrow--right",
  prevArrow: ".reviews__arrow--left",
  fade: true
})

$('.reviews__control .count__small').html($(".reviews__list").slick("getSlick").slideCount)
$(".reviews__list").on("afterChange", function(event, slick, currentSlide, nextSlide){
  $(".reviews__control .count__big").html(currentSlide + 1);
});
