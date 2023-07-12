$(document).ready(function () {
  //--
  //--
  //--
  //--
  /*----УВЕЛИЧЕНИЕ ЛИСТА БУМАГИ---*/
  $('#room__contacts-paper-body').click(function () {
    $('.room__contacts-paper-wrapper ').addClass(
      'contacts-paper-wrapper-active'
    );
    //ниже делаем отображение контактной информации на листе
    if (
      $('.room__contacts-paper-wrapper ').hasClass(
        'contacts-paper-wrapper-active'
      )
    ) {
      setTimeout(function () {
        $('.room__contacts-paper-content').removeClass('not-visible');
        $('#btn-close-paper').removeClass('not-visible');
      }, 1000);
    } else {
      $('.room__contacts-paper-content').addClass('not-visible');
      $('#btn-close-paper').addClass('not-visible');
    }
  });
  //--
  //--
  /*---УМЕНЬШЕНИЕ ЛИСТА БУМАГИ----*/
  $('#btn-close-paper').click(function () {
    $('.room__contacts-paper-wrapper ').removeClass(
      'contacts-paper-wrapper-active'
    );
    //ниже делаем отображение контактной информации на листе
    $('.room__contacts-paper-content').addClass('not-visible');
    $('#btn-close-paper').addClass('not-visible');
  });
  //--
  //--
  //--
  //--
  //--
  /*----ОТКРЫТИЕ КОНВЕРТА ЛИСТА БУМАГИ---*/
  $('# room__envelope-body').click(function () {});
  //--
  //--
  /*---УМЕНЬШЕНИЕ ЛИСТА БУМАГИ----*/
  /*
    $('#btn-close-paper').click(function () {
      $('.room__contacts-paper-wrapper ').removeClass(
        'contacts-paper-wrapper-active'
      );
      //ниже делаем отображение контактной информации на листе
      $('.room__contacts-paper-content').addClass('not-visible');
      $('#btn-close-paper').addClass('not-visible');
    });
    */
  //--
  //--
  //--
  //--
  //--

  /*
                                                  //открываем книжный шкаф
                                                  $('.closet_left').click(function () {
                                                    $('.open_closet_wrapper').css({ display: 'block' });
                                                  });
                                                  $('.note_left').click(function () {
                                                    $('.open_closet_wrapper').css({ display: 'block' });
                                                  });
                                                  //закрываем шкаф
                                                  $('.exit_btn_closet').click(function () {
                                                    $('.open_closet_wrapper').css({ display: 'none' });
                                                  });

                                                  //открываем,отправляем письмо и закрываем конверт
                                                  //открыть
                                                  $('.envelope_room_table ').on('click', function () {
                                                    $('.envelope_room_table').addClass('envelope_room_table_open');
                                                    setTimeout(function () {
                                                      $('.envelope_wrapper').addClass('envelope_wrapper_open');
                                                    }, 1600);
                                                  });
                                                  // отправить и закрыть
                                                  $('.envelope_paper_btn').on('click', function (e) {
                                                    $('.envelope_paper').addClass('envelope_paper_close');
                                                    // $('.envelope_top').css({ zIndex: '4' });
                                                    setTimeout(function () {
                                                      // $('.envelope_top').css({ zIndex: '4' });
                                                      $('.envelope_top').addClass('envelope_top_close');
                                                    }, 800);
                                                    setTimeout(function () {
                                                      $('.envelope_print').addClass('envelope_print_close');
                                                    }, 1500);
                                                    setTimeout(function () {
                                                      $('.envelope_wrapper').removeClass('envelope_wrapper_open');
                                                      $('.envelope_room_table').removeClass('envelope_room_table_open');
                                                    }, 3000);
                                                    setTimeout(function () {
                                                      $('.envelope_paper').removeClass('envelope_paper_close');
                                                      $('.envelope_top').removeClass('envelope_top_close');
                                                      $('.envelope_print').removeClass('envelope_print_close');
                                                    }, 3200);
                                                  });
                                                  //закрыть на кнопку
                                                  $('.exit_btn_envelope').on('click', function (e) {
                                                    $('.envelope_paper').addClass('envelope_paper_close');

                                                    setTimeout(function () {
                                                      $('.envelope_top').addClass('envelope_top_close');
                                                    }, 800);
                                                    setTimeout(function () {
                                                      $('.envelope_print').addClass('envelope_print_close');
                                                    }, 1500);
                                                    setTimeout(function () {
                                                      $('.envelope_wrapper').removeClass('envelope_wrapper_open');
                                                      $('.envelope_room_table').removeClass('envelope_room_table_open');
                                                    }, 3000);
                                                    setTimeout(function () {
                                                      $('.envelope_paper').removeClass('envelope_paper_close');
                                                      $('.envelope_top').removeClass('envelope_top_close');
                                                      $('.envelope_print').removeClass('envelope_print_close');
                                                    }, 3200);
                                                  });
                                                  //

                                                  */
});
