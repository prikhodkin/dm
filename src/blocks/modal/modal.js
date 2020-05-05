const showModal = (target, modal) => {
  $(target).on('click', (evt) => {
    evt.preventDefault();
    $('.overlay').fadeIn();
    $(modal).css('top', $(window).scrollTop() + 40);
    $(modal).fadeIn();

  })

  const close = $(modal).find('.modal__close');

  $(close).on('click', (evt) => {
    evt.preventDefault();
    $('.overlay').fadeOut();
    $(modal).fadeOut();
  })

  $('.overlay').on('click', (evt) => {
    evt.preventDefault();
    $('.overlay').fadeOut();
    $(modal).fadeOut();
  })
}

const showThx = () => {
  $('.modal--all').fadeOut();
  $('.modal--clients').fadeOut();
  $('.modal--google').fadeOut();
  $('.modal--yandex').fadeOut();
  $('.overlay').fadeIn();
  $('.modal--thx').css('top', $(window).scrollTop() + 40);
  $('.modal--thx').fadeIn();
  $('.modal--thx').find('.modal__close').on('click', (evt) => {
    evt.preventDefault();
    $('.overlay').fadeOut();
    $('.modal--thx').fadeOut();
  })

  $('.overlay').on('click', (evt) => {
    evt.preventDefault();
    $('.overlay').fadeOut();
    $('.modal--thx').fadeOut();
  })
}

showModal('.promo__button','.modal--yandex');
showModal('.prices__button--yandex','.modal--yandex');
showModal('.prices__button--google','.modal--google');
showModal('.prices__button--all','.modal--all');
