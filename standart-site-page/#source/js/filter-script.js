/*---------ФИЛЬТР КНИГ-------------*/
$(document).ready(function () {
  //
  //
  //
  //РАБОТА С ЧЕКБОКСАМИ
  /*если на страницу перешли по ссылке в слайдере на главной активируем чекбоксы исходя из выбранного раздела*/

  //РОМАНЫ
  if (location.toString().indexOf('anchor-novels') !== -1) {
    //убираем checked с кнопки ВСЕ
    $('#all-filter').prop('checked', false);
    //разрешаем кликать на кнопку ВСЕ
    $('#all-filter').prop('disabled', false);
    //Добавляем checked соответствующей кнопке
    $('#novels-filter').prop('checked', true);
    //
    //Скрываем все книги
    $('.all-filter').css({ display: 'none', opacity: '0' });
    //
    //
    //ОТОБРАЖАЕМ НУЖНЫЕ КНИГИ
    $('.novels-filter').css({ display: 'block', opacity: '1' });
  }

  //ФЭНТЕЗИ
  else if (location.toString().indexOf('anchor-fantasy') !== -1) {
    //убираем checked с кнопки ВСЕ
    $('#all-filter').prop('checked', false);
    //разрешаем кликать на кнопку ВСЕ
    $('#all-filter').prop('disabled', false);
    //Добавляем checked соответствующей кнопке
    $('#fantasy-filter').prop('checked', true);
    //
    //Скрываем все книги
    $('.all-filter').css({ display: 'none', opacity: '0' });
    //
    //
    //ОТОБРАЖАЕМ НУЖНЫЕ КНИГИ
    $('.fantasy-filter').css({ display: 'block', opacity: '1' });
  }

  //ФАНФИКИ
  else if (location.toString().indexOf('anchor-fun') !== -1) {
    //убираем checked с кнопки ВСЕ
    $('#all-filter').prop('checked', false);
    //разрешаем кликать на кнопку ВСЕ
    $('#all-filter').prop('disabled', false);
    //Добавляем checked соответствующей кнопке
    $('#fun-filter').prop('checked', true);

    //
    //Скрываем все книги
    $('.all-filter').css({ display: 'none', opacity: '0' });
    //
    //
    //ОТОБРАЖАЕМ НУЖНЫЕ КНИГИ
    $('.fun-filter').css({ display: 'block', opacity: '1' });
  }

  //РАССКАЗЫ
  else if (location.toString().indexOf('anchor-stories') !== -1) {
    //убираем checked с кнопки ВСЕ
    $('#all-filter').prop('checked', false);
    //разрешаем кликать на кнопку ВСЕ
    $('#all-filter').prop('disabled', false);
    //Добавляем checked соответствующей кнопке
    $('#stories-filter').prop('checked', true);

    //
    //Скрываем все книги
    $('.all-filter').css({ display: 'none', opacity: '0' });
    //
    //
    //ОТОБРАЖАЕМ НУЖНЫЕ КНИГИ
    $('.stories-filter').css({ display: 'block', opacity: '1' });
  }

  //ВСЕ
  else {
    //Добавляем checked  кнопке ВСЕ
    $('#all-filter').prop('checked', true);
    $('.all-filter').css({ display: 'block', opacity: '1' });
  }
  //

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
    }, 500);
    //выполняем дальнейший код с задержкой для плавного отображения

    //проверяем активна ли хоть какая то кнопка жанра
    //если активна
    if ($('.separate-filter').is(':checked')) {
      //снимаем активность с кнопки ВСЕ
      $('#all-filter').prop('checked', false);

      setTimeout(function () {
        //делаем проверку активности кнопок жанров

        //если активна кнопка РОМАНЫ
        $('.separate-filter').ready(function () {
          if ($('#novels-filter').is(':checked')) {
            //добавляем книги
            $('.novels-filter').css({ display: 'block' });
            //убираем прозрачность у книг
            setTimeout(function () {
              $('.novels-filter').css({ opacity: '1' });
            }, 500);
            console.log('романы');
            return false;
          }
        });

        //если активна кнопка ФЭНТЕЗИ
        $('.separate-filter').ready(function () {
          if ($('#fantasy-filter').is(':checked')) {
            //добавляем книги
            $('.fantasy-filter').css({ display: 'block' });
            //убираем прозрачность у книг
            setTimeout(function () {
              $('.fantasy-filter').css({ opacity: '1' });
            }, 500);
            console.log('фэнтези');
            return false;
          }
        });

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
      return true;
    }
    //
    else {
      setTimeout(function () {
        //Активируем кнопку ВСЕ
        $('#all-filter').prop('checked', true);
        // запрещаем повторное нажатие на кнопку ВСЕ
        $('#all-filter').prop('disabled', true);
        //добавляем книги

        //убираем прозрачность у книг
        setTimeout(function () {
          $('.all-filter').css({ display: 'block' });
          $('.all-filter').css({ opacity: '1' });
        }, 500);
        console.log('все');
      }, 600);
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

  /*-------- АКТИВНОСТЬ КНОПОК ЕСЛИ НА СТРАНИЦЕ ЕСТЬ КНИГИ НУЖНОГО ЖАНРА ИЛИ НЕТ------*/

  //создаем переменную с книгами жанра Романы
  var novelsFunPageBook =
    document.getElementsByClassName('novels-filter').length;

  //создаем переменную с книгами жанра ФЭНТЕЗИ
  var fantasyFunPageBook =
    document.getElementsByClassName('fantasy-filter').length;

  //-----------------------

  //---ПОЛУЧАЕМ данные из адресной строки и делем ее на переменные--
  var urlPageFilterBook = document.location.href;
  var textUrlPageFilterBook = urlPageFilterBook.split('/').pop();
  console.log(textUrlPageFilterBook);

  /*----------ПРОВЕРКА-НА-СТРАНИЦЕ-РАССКАЗЫ------------*/
  if (textUrlPageFilterBook == 'standart-fun.html') {
    //отключаем кнопку фильтра РОМАНЫ
    if (novelsFunPageBook === 0) {
      $('#novels-filter').prop('disabled', true);
      $('#lable-novels-filter').addClass('disabled');
      console.log('нет романов на странице');
    }
    //отключаем кнопку фильтра ФЭНТЕЗИ
    if (fantasyFunPageBook === 0) {
      $('#fantasy-filter').prop('disabled', true);
      $('#lable-fantasy-filter').addClass('disabled');
      console.log('нет ФЭНТЕЗИ на странице');
    }
  } else if (textUrlPageFilterBook == 'standart-book.html') {
  /*--------------------------------------*/

  /*----------ПРОВЕРКА-НА-СТРАНИЦЕ-КНИГИ------------*/
    //отключаем кнопку фильтра РОМАНЫ
    if (novelsFunPageBook === 0) {
      $('#novels-filter').prop('disabled', true);
      $('#lable-novels-filter').addClass('disabled');
      console.log('нет романов на странице');
    }
    //отключаем кнопку фильтра ФЭНТЕЗИ
    if (fantasyFunPageBook === 0) {
      $('#fantasy-filter').prop('disabled', true);
      $('#lable-fantasy-filter').addClass('disabled');
      console.log('нет ФЭНТЕЗИ на странице');
    }
  }
  /*--------------------------------------*/
});
