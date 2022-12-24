/*скролл страницы вверх*/
$(document).ready(function() {
    //hide #back-top farst (скрыть #назад-верхний фарст)
    $('#back-top').hide();
    //fade in#back-top (исчезает в#back-top)
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        //scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({ scrollTop: 0 }, 1200);
            return false;
        });
    });
});

/*анимация инструкции бронирования*/

/*var block_show = false;

function scrollTracking() {
    if (block_show) {
        return false;
    }

    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('.manual_wrapper').offset().top;
    var eh = $('.manual_wrapper').outerHeight();
    var dh = $(document).height();

    if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
        block_show = true;

        // Код анимации
        $('.manual_1').css({ transform: 'rotateY(0deg)' });
        //--
        $('.arrow_right_1').css({
            'transition-delay': '1s',
            transform: 'rotateY(0deg)',
        });
        //--
        $('.manual_2').css({
            'transition-delay': '2s',
            transform: 'rotateY(0deg)',
        });
        //--
        $('.arrow_right_2').css({
            'transition-delay': '3s',
            transform: 'rotateY(0deg)',
        });
        //--
        $('.manual_3').css({
            'transition-delay': '4s',
            transform: 'rotateY(0deg)',
        });
        //--
        $('.arrow_right_3').css({
            'transition-delay': '5s',
            transform: 'rotateY(0deg)',
        });
        //--
        $('.manual_4').css({
            'transition-delay': '6s',
            transform: 'rotateY(0deg)',
        });
        //--
        $('.arrow_right_4').css({
            'transition-delay': '7s',
            transform: 'rotateY(0deg)',
        });
        //--
        $('.manual_5').css({
            'transition-delay': '8s',
            transform: 'rotateY(0deg)',
        });
        
    }
}*/
/*
$(window).scroll(function() {
    scrollTracking();
});

$(document).ready(function() {
    scrollTracking();
});
*/
/** */
/*движение листа бумаги*/
$(document).ready(function() {
    $('.paper').click(function() {
        $('.paper').toggleClass('paper_active');
        //ниже делаем отображение контактной информации на листе
        setTimeout(function() {
            $('.paper_contacts').toggleClass('paper_contacts_active');
        }, 1000);
    });

    //активируем книгу на кресле
    /* $('.book_new').click(function() {
          $('.book_new').toggleClass('book_new_focus');
          //
          $('.open_book_wrapper').removeClass('open_book_wrapper_1')
          $('.open_book_wrapper').removeClass('open_book_wrapper_2')
          $('.open_book_wrapper').removeClass('open_book_wrapper_2')
          $('.open_book_wrapper').removeClass('open_book_wrapper_2')
          $('.open_book_wrapper').removeClass('open_book_wrapper_2')
          $('.open_book_wrapper').removeClass('open_book_wrapper_2')
           $('.open_book_wrapper').removeClass('open_book_wrapper_2')
           $('.open_book_wrapper').removeClass('open_book_wrapper_2')
           $('.open_book_wrapper').removeClass('open_book_wrapper_2')
      });*/

    //открываем книжный шкаф
    $('.closet_left').click(function() {
        $('.open_closet_wrapper').css({ display: 'block' });
    });
    $('.note_left').click(function() {
        $('.open_closet_wrapper').css({ display: 'block' });
    });
    //закрываем шкаф
    $('.exit_btn').click(function() {
        $('.open_closet_wrapper').css({ display: 'none' });
    });
});