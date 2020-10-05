$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('.header').addClass('skroll-block');
    } else {
      $('.header').removeClass('skroll-block');
    }
  });

  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('header__burger--active');
    $('body').toggleClass('lock');
  });
});

function clickHandler(event) {
  event.preventDefault();
  const elem = event.target;
  const cat = elem.getAttribute('data-category');
  const items = document.querySelectorAll('.activity__title-item');
  items.forEach((item) => {
    if (item.getAttribute('data-category') === cat) {
      item.classList.add('activity__title-item--active');
    } else {
      item.classList.remove('activity__title-item--active');
    }
  });
}

document.querySelectorAll('.activity__title-link').forEach((elem) => {
  elem.addEventListener('click', clickHandler);
});
