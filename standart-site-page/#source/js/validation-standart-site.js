/*форма отпраки*/

$(document).ready(function () {
  //
  //-------ФОРМА-ОТПРАВКИ-INDEX-страницы---------
  var validName = 1;
  var validSurname = 1;
  var validEmail = 1;
  var validMessage = 1;
  var validCheckbox = 1;

  //ПРОВЕРКА НА ПРАВИЛЬНОСТЬ ЗАПОЛНЕНИЯ
  //
  //
  //
  //
  //
  //
  //
  ///
  //--------------------валидация---------------------------
  //

  //имя
  $('.popup-form__btn-container').mouseover(function () {
    var namePopupForm = $('#popup-form__name').val();
    if (namePopupForm == '') {
      validName = 1;
      $('#popup-form__name').css({ borderColor: 'red', color: 'red' });
      $('#fail-name')
        .text('Поле не заполнено')
        .css({ borderColor: 'red', color: 'red' });
    }
    //
    else {
      $('#popup-form__name').css({ borderColor: 'green', color: 'green' });
      $('#fail-name')
        .text('Заполнено')
        .css({ borderColor: 'green', color: 'green' });
      return (validName = 0);
    }
  });
  //
  //
  //
  //фамилия
  $('.popup-form__btn-container').mouseover(function () {
    //
    var surnamePopupForm = $('#popup-form__surname').val();
    if (surnamePopupForm == '') {
      validSurname = 1;
      $('#popup-form__surname').css({ borderColor: 'red', color: 'red' });
      $('#fail-surname')
        .text('Поле не заполнено')
        .css({ borderColor: 'red', color: 'red' });
    }
    //
    else {
      $('#popup-form__surname').css({ borderColor: 'green', color: 'green' });
      $('#fail-surname')
        .text('Заполнено')
        .css({ borderColor: 'green', color: 'green' });
      return (validSurname = 0);
    }
  });
  //
  //
  //
  //Email
  $('.popup-form__btn-container').mouseover(function () {
    //
    var emailPopupForm = $('#popup-form__email').val();

    var rv_email =
      /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    var emailValid = rv_email.test(emailPopupForm);

    if (emailPopupForm == '') {
      validEmail = 1;
      $('#popup-form__email').css({ borderColor: 'red', color: 'red' });
      $('#fail-email')
        .text('Поле не заполнено')
        .css({ borderColor: 'red', color: 'red' });
    }
    //
    else if (!emailValid) {
      validEmail = 1;
      $('#popup-form__email').css({ borderColor: 'red', color: 'red' });
      $('#fail-email')
        .text('Некорректный Email')
        .css({ borderColor: 'red', color: 'red' });
    }
    //
    else {
      $('#popup-form__email').css({ borderColor: 'green', color: 'green' });
      $('#fail-email')
        .text('Заполнено')
        .css({ borderColor: 'green', color: 'green' });
      return (validEmail = 0);
    }
  });
  //
  //
  //
  //Сообщение
  $('.popup-form__btn-container').mouseover(function () {
    //
    var messagePopupForm = $('#popup-form__comments').val();
    if (messagePopupForm == '') {
      validMessage = 1;
      $('#popup-form__comments').css({ borderColor: 'red', color: 'red' });
      $('#fail-message')
        .text('Поле не заполнено')
        .css({ borderColor: 'red', color: 'red' });
    } else {
      $('#popup-form__comments').css({ borderColor: 'green', color: 'green' });
      $('#fail-message')
        .text('Заполнено')
        .css({ borderColor: 'green', color: 'green' });
      return (validMessage = 0);
    }
  });
  //
  //
  //
  //ЧЕКБОКС
  $('.popup-form__btn-container').mouseover(function () {
    if ($('.checkbox__input').is(':not(:checked)')) {
      $('.checkbox__label').addClass('error');

      return (validCheckbox = 1);
    } else {
      $('.checkbox__label').removeClass('error');

      return (validCheckbox = 0);
    }
  });
  //
  //
  //
  //
  //------ОТПРАВКА В  PHP------
  $('#popup-form__btn').on('click', function () {
    var namePopupForm = $('#popup-form__name').val();
    var surnamePopupForm = $('#popup-form__surname').val();
    var emailPopupForm = $('#popup-form__email').val();
    var messagePopupForm = $('#popup-form__comments').val();

    console.log(validName);
    console.log(validSurname);
    console.log(validEmail);
    console.log(validMessage);
    console.log(validCheckbox);

    if (
      validName == 0 &&
      validSurname == 0 &&
      validEmail == 0 &&
      validMessage == 0 &&
      validCheckbox == 0
    ) {
      console.log('отправлено');
      //кнопка
      $('#popup-form__btn').css({
        boxShadow: '0px 0px 10px 1px green',
      });
      $('#fail-form').text('').css({ color: '$blackColor' });
      //
      $.ajax({
        url: 'php/ajax-popup-form.php',
        type: 'POST',
        cache: false,
        data: {
          namePopupForm: namePopupForm,

          surnamePopupForm: surnamePopupForm,

          emailPopupForm: emailPopupForm,

          messagePopupForm: messagePopupForm,
        },
        dataType: 'html',
        success: function (data) {
          //имя
          $('#popup-form__name')
            .text('')
            .css({ borderColor: '#646464', color: '$blackColor' });
          $('#fail-name')
            .text('')
            .css({ borderColor: '#646464', color: '$blackColor' });
          //фамилия
          $('#popup-form__surname')
            .text('')
            .css({ borderColor: '#646464', color: '$blackColor' });
          $('#fail-surname')
            .text('')
            .css({ borderColor: '#646464', color: '$blackColor' });
          //email
          $('#popup-form__email')
            .text('')
            .css({ borderColor: '#646464', color: '$blackColor' });
          $('#fail-email')
            .text('')
            .css({ borderColor: '#646464', color: '$blackColor' });
          //комментарий
          $('#popup-form__comments')
            .text('')
            .css({ borderColor: '#646464', color: '$blackColor' });
          $('#fail-message')
            .text('')
            .css({ borderColor: '#646464', color: '$blackColor' });

          //

          alert('Сообщение отправлено!');
        },
      });
      return false;
    } else {
      $('#popup-form__btn').css({
        boxShadow: '0px 0px 10px 1px red',
      });

      $('#fail-form').text('Сообщение не отправлено!').css({ color: 'red' });
      console.log('Не отправлено');
      return false;
    }
  });

  //
  //----------закрытие скобок
});
//
//----КОНЕЦ---
//
