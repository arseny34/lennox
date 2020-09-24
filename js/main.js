$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('.header').addClass('skroll-block');
      $('.header__logo').animate({ padding: '10px 11px 10px 17px' });
      // $('.header__logo').addClass('header__logo-block');
    } else {
      $('.header').removeClass('skroll-block');
      $('.header__logo').animate({ padding: '40px 11px 40px 17px' });
    }
  });
});

// Функция-обработчик, которую навешиваем на событие клика по ссылке
function clickHandler(event) {
  // Убираем стандартное поведение ссылки
  event.preventDefault();
  // Берем элемент, по которому кликнули
  const elem = event.target;
  // Берем значение атрибута 'category' у элемента
  const cat = elem.getAttribute('data-category');
  // Находим все дочерние элементы
  const items = document.querySelectorAll('.activity__title-item');
  // Для каждого дочернего элемента
  items.forEach((item) => {
    // Если атрибут category совпадает с атрибутом элемента, по которому кликнули
    if (item.getAttribute('data-category') === cat) {
      // Добавляем класс active
      // Тут надо заметить что classList не добавляет новый элемент если такой же уже присутствует,
      // т.е. не может быть 2х одинаковых классов. При работе например с массивами тут еще нужна
      // проверка, что такой класс у него отсутствует.
      item.classList.add('activity__title-item--active');
    } else {
      // Если не совпадает - удаляем класс active
      item.classList.remove('activity__title-item--active');
    }
  });
  // Конец функции
}

// Находим все ссылки с нашим классом
document.querySelectorAll('.activity__title-link').forEach((elem) => {
  // Навешиваем на событие клика нашу функцию-обработчик
  elem.addEventListener('click', clickHandler);
});
