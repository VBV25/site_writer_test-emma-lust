$(document).ready(function () {
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
  /*скролл страницы вверх*/
  //скрыть кнопку в верхней части страницы)
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

  //

  //name
  $('#name').hover(function () {
    var nameText = $('#name').val();
    //
    var nameError1 = 'The field is not filled';
    var nameError2 = 'At least 2 characters';
    var nameError3 = 'Only latin letters';
    //
    if (nameText == nameError1) {
      console.log('yes');
      $('#name').val('');
    } else if (nameText == nameError2) {
      console.log('yes2');
      $('#name').val('');
    } else if (nameText == nameError3) {
      console.log('yes2');
      $('#name').val('');
    }
  });

  //email
  $('#email').hover(function () {
    var emailText = $('#email').val();
    //
    var emailError1 = 'The field is not filled';
    var emailError2 = 'Incorrect email';
    //
    if (emailText == emailError1) {
      console.log('yes');
      $('#email').val('');
    } else if (emailText == emailError2) {
      console.log('yes2');
      $('#email').val('');
    }
  });

  //text
  $('#request').hover(function () {
    var requestText = $('#request').val();
    //
    var requestError1 = 'The field is not filled';
    var requestError2 = 'At least 2 characters';

    //
    if (requestText == requestError1) {
      console.log('yes');
      $('#request').val('');
    } else if (requestText == requestError2) {
      console.log('yes2');
      $('#request').val('');
    }
  });

  //
});
