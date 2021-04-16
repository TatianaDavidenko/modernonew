$(function () {

  $('.rate-star').rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  $('.js-range-slider').ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });

  $('.icon-th-list').on('click', function () {/// нажимаем на кнопку и появляется класс лист
    $('.product-page__items .products__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active')
  });

  $('.icon-th-large').on('click', function () {
    $('.product-page__items .products__item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active')
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle(); //показывает существующий класс
  });

  $('.header__btn-menu').on('click', function () {
    $('.header__box').toggleClass('active'); // добавляется новый класс актив
  });
  var mixer = mixitup('.products__inner-box');

});