$(document).ready(function () {
  //---------ВЫДЕЛЕНИЕ ПУНКТА МЕНЮ ИСХОДЯ ИЗ АДРЕСНОЙ СТРОКИ НА КОТОРОЙ СЕЙЧАС НАХОДИМСЯ-------
  //

  if (location.toString().indexOf('standart-book') !== -1) {
    $('.header__link').removeClass('active-menu');
    $('.link-book').addClass('active-menu');
  } else if (location.toString().indexOf('standart-fun') !== -1) {
    $('.header__link').removeClass('active-menu');
    $('.link-fun').addClass('active-menu');
  } else if (location.toString().indexOf('standart-bibliography') !== -1) {
    $('.header__link').removeClass('active-menu');
    $('.link-bibliography').addClass('active-menu');
  } else if (location.toString().indexOf('standart-media') !== -1) {
    $('.header__link').removeClass('active-menu');
    $('.link-media').addClass('active-menu');
  } else if (location.toString().indexOf('standart-contacts') !== -1) {
    $('.header__link').removeClass('active-menu');
    $('.link-contacts').addClass('active-menu');
  }
  //
  //
  //
  //
  //
  /*----------------прелоадер----------------*/
  //скрытие прелоадера
  if ($(window).on('load')) {
    setTimeout(function () {
      // $('#wrap_preloader').delay(2000).fadeToggle(300);
      $('body').removeClass('lock');
      $('.preloader').addClass('preloader-none');
      $('.preloader').removeClass('preloader-visible');
    }, 2000);
  }
  //
  //
  //
  //
  //
  //
  /*------скролл страницы вверх-----*/
  $('#back-top').hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });
    $('#back-top a').click(function () {
      $('body,html').animate({ scrollTop: 0 }, 1200);
      return false;
    });
  });
  //
  //
  //
  //---ОТКРЫТИЕ МЕНЮ ХЕАДЕР
  $('.header__btn-navigation-menu').click(function () {
    $('.header__menu').toggleClass('active-block-menu');
  });
  $('main').click(function () {
    $('.header__menu').removeClass('active-block-menu');
  });
  //
  //
  //
  /*-ВСПЛЫВАЮЩИЕ ОКНА-*/
  //-----попап бронь
  $('.header__form').click(function (event) {
    $('body').addClass('lock');
    setTimeout(function () {
      $('.popup-form__wrapper').addClass('visible-popup');
    }, 40);
  });
  $('#popup-form__btn-close').click(function (event) {
    $('.popup-form__wrapper').removeClass('visible-popup');
    setTimeout(function () {
      $('body').removeClass('lock');
    }, 200);
  });
  $(document).on('keyup', function (e) {
    if (e.keyCode == 27) {
      $('.popup-form__wrapper').removeClass('visible-popup');
      setTimeout(function () {
        $('body').removeClass('lock');
      }, 200);
    }
  });
  /*------------------------------------------*/
  //
  //
  //
  //
  //
  //
  /*---------РАБОТА С КНИГАМИ-------*/
  //ДОБАВЛЯЕМ ЛЕЙБЛ ЧТО ЭТО НОВЯ КНИГА ЭЛЕМЕНТАМ С КЛАССОМ new-book
  $('.new-book')
    .find('#book__title')
    .before('<div class="book__new">NEW</div>');
  //
  //
  //
  //
  //
  /*---------ФИЛЬТР КНИГ-------------*/
  /*-- НА СТРАНИЦЕ Фанфики и рассказы---*/
  //ИЗНАЧАЛЬНО ОТОБРАЖАЕМ ВСЕ КНИГИ
  if ($('#all-filter').is(':checked')) {
    console.log('все');
    $('.all-filter').css({ display: 'block', opacity: '1' });
  }
  //-------ОТОБРАЖЕНИЕ НУЖНЫХ КНИГ-------
  //------- при клике на кнопки-------

  //при клике на кнопку жанра
  $('.separate-filter').click(function () {
    //разрешаем кликать на кнопку ВСЕ
    $('#all-filter').prop('disabled', false);
    //плавно прозрачностью скрываем все книги
    $('.all-filter').css({ opacity: '0', transition: 'all 0.5s ease 0s' });
    //убираем скрытые книги из списка
    setTimeout(function () {
      $('.all-filter').css({ display: 'none' });
    }, 600);
    //выполняем дальнейший код с задержкой для плавного отображения

    //проверяем активна ли хоть какая то кнопка жанра
    //если активна
    if ($('.separate-filter').is(':checked')) {
      //снимаем активность с кнопки ВСЕ
      $('#all-filter').prop('checked', false);

      setTimeout(function () {
        //делаем проверку активности кнопок жанров

        //если активна кнопка ФАНФИКИ
        $('.separate-filter').ready(function () {
          if ($('#fun-filter').is(':checked')) {
            //добавляем книги
            $('.fun-filter').css({ display: 'block' });
            //убираем прозрачность у книг
            setTimeout(function () {
              $('.fun-filter').css({ opacity: '1' });
            }, 500);
            console.log('фанфики');
            return false;
          }
        });

        //если активна кнопка РАССКАЗЫ
        $('.separate-filter').ready(function () {
          if ($('#stories-filter').is(':checked')) {
            //добавляем книги
            $('.stories-filter').css({ display: 'block' });
            //убираем прозрачность у книг
            setTimeout(function () {
              $('.stories-filter').css({ opacity: '1' });
            }, 500);
            console.log('рассказы');
            return false;
          }
        });
      }, 700);
    }
    //
    else {
      //Активируем кнопку ВСЕ
      $('#all-filter').prop('checked', true);
      // запрещаем повторное нажатие на кнопку ВСЕ
      $('#all-filter').prop('disabled', true);
      //добавляем книги
      $('.all-filter').css({ display: 'block' });
      //убираем прозрачность у книг
      setTimeout(function () {
        $('.all-filter').css({ opacity: '1' });
      }, 500);
      console.log('все');
    }
  });

  //
  //
  //
  //
  /*-------ОТОБРАЖЕНИЕ ВСЕХ КНИГ--------*/
  //------при клике на кнопку ВСЕ------

  $('#all-filter').click(function () {
    setTimeout(function () {
      $('.all-filter').css({ display: 'none' });
    }, 500);
    $('.all-filter').css({ opacity: '0' });
    //если внопка ВСЕ активна запрещаем повторное нажатие на нее
    $('#all-filter').prop('disabled', true);
    //деактивируем кнопки жанров
    $('.separate-filter').prop('checked', false);
    //если кнопка все активна отображаем все книги
    setTimeout(function () {
      if ($('#all-filter').is(':checked')) {
        //добавляем книги
        $('.all-filter').css({ display: 'block' });
        //убираем прозрачность у книг

        setTimeout(function () {
          $('.all-filter').css({ opacity: '1' });
        }, 600);

        console.log('нажал на все');
      }
    }, 500);
  });

  /*----------------------------------------*/

  //
  //
  //
  /*-----попап Политика конфиденциальности---*/
  //
  //
  /*----------------------------------------*/
});
