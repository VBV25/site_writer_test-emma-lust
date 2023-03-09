/*--------------------SWIPER----------------------------------*/

new Swiper('.text-slider', {
  //настройки слайдера
  //все настройки разделяем запятой
  navigation: {
    //Включаем работоспособность стрелок и задаем какие именно объекты выполняют функцию стрелок
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //НАВИГАЦИЯ
  //Буллеты,
  pagination: {
    //включение пагинации
    el: '.swiper-pagination',

    /*--------------------БУЛЛЕТЫ------------------------*/

    //БУЛЛЕТЫ ---точки внизу фото
    //(данная команда включает кликабельность буллетов)
    clickable: true,
    //динамические буллеты
    dynamicBullets: true,
  },
  /*------------------КОНЕЦ ПАГИНАЦИИ--------------------------*/
  /*--------------------------------------------*/
  /*--------------------------------------------*/
  /*--------------------------------------------*/
  /*--------------------------------------------*/
  /*--------------------------------------------*/
  /*--------------------СКРОЛЛ------------------------*/
  scrollbar: {
    el: '.swiper-scrollbar',
    //Возможность перетаскивать скролл
    draggable: true,
  },
  //Включение/отключение
  //Перетаскивание мышью на ПК
  simulateTouch: true,
  //Чувствительность свайпа
  touchRatio: 1, //(0 отключит перетаскивание)
  //Угол срабатывания свайпа/перетаскивания
  touchAngle: 45,
  //Курор перетаскивания
  grabCursor: true,

  //
  //

  //--------Переключение при клике на слайд------
  //
  slideToClickedSlide: false,
  //Управление клавиатурой
  keyboard: {
    //Включить/отключить
    enabled: true,
    //включить / отключить
    //тоько когда слайдер
    //в пределах вьюпорта(в зоне видимости)
    onlyInViewport: true,
    //включить / отключить
    //управление клавишами
    //pageUp, pageDown
    pageUpDown: true,
  },
  //

  /*--------------------------------------------*/
  /*--------------------------------------------*/
  /*--------------------------------------------*/
  /*--------------------------------------------*/
  /*--------------------------------------------*/
  /*--------------------------------------------*/
  /*--------------------------------------------*/
  /*--------------------------------------------*/
  /*--------------------------------------------*/
  /*-----------------РАБОТА-СО-СЛАЙДАМИ------------------------*/

  //КОЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА
  slidesPerView: 1, //для значения авто добавляем стили в CSS
  //
  //

  //ОТСТУПЫ МЕЖДУ СЛАЙДАМИ
  spaceBetween: 60,
  //
  //
  //КОЛИЧЕСТВО ПРОЛИСТЫВАЕМЫХ СЛАЙДОВ
  slidesPerGroup: 1,
  //
  //
  //АКТИВНЫЙ СЛАЙД ПО ЦЕНТРУ
  centeredSlides: true,
  //---------БЕСКОНЕЧНОСТЬ-------!!!!!!
  loop: true, //отключить скролл, мультирядность только 1, если количество для вывода сладов равно AUTO то нужно указать количество дублирующих слайдов
  //Коичество дублирующих слайдов
  loopedSlides: 6,
  //
  //
  //
  //
  //
  //
  //-------------ЭФФЕКТЫ-ПЕРЕКЛЮЧЕНИЯ-СДАЙДОВ---------
  //
  //----------ЭФФЕКТ ПОТОКА------

  //
  //
  //
  //
  //
  //
  //
  //
  /*--------------------------------------------*/
  /*--------------АДАПТИВНОСТЬ----------------*/
  /*--------------------------------------------*/
  //
  //Брейк поинты(адаптив)
  //Ширина экрана

  breakpoints: {
    150: { slidesPerView: 1, spaceBetween: 20 },

    770: {
      slidesPerView: 2,
    },
    841: { slidesPerView: 3 }, //так же можно менять мультирядность, отступы между слайдами и т.д.
  },
});

/*--------------------------------------------------------------*/
