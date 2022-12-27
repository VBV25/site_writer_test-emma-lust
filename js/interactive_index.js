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

    //открываем книжный шкаф
    $('.closet_left').click(function() {
        $('.open_closet_wrapper').css({ display: 'block' });
    });
    $('.note_left').click(function() {
        $('.open_closet_wrapper').css({ display: 'block' });
    });
    //закрываем шкаф
    $('.exit_btn_closet').click(function() {
        $('.open_closet_wrapper').css({ display: 'none' });
    });

    //открываем,отправляем письмо и закрываем конверт
    //открыть
    $('.envelope_room_table ').on('click', function() {
        $('.envelope_room_table').addClass('envelope_room_table_open');
        setTimeout(function() {
            $('.envelope_wrapper').addClass('envelope_wrapper_open');
        }, 1600);
    });
    // отправить и закрыть
    $('.envelope_paper_btn').on('click', function(e) {
        $('.envelope_paper').addClass('envelope_paper_close');
        // $('.envelope_top').css({ zIndex: '4' });
        setTimeout(function() {
            // $('.envelope_top').css({ zIndex: '4' });
            $('.envelope_top').addClass('envelope_top_close');
        }, 800);
        setTimeout(function() {
            $('.envelope_print').addClass('envelope_print_close');
        }, 1500);
        setTimeout(function() {
            $('.envelope_wrapper').removeClass('envelope_wrapper_open');
            $('.envelope_room_table').removeClass('envelope_room_table_open');
        }, 3000);
        setTimeout(function() {
            $('.envelope_paper').removeClass('envelope_paper_close');
            $('.envelope_top').removeClass('envelope_top_close');
            $('.envelope_print').removeClass('envelope_print_close');
        }, 3200);
    });
    //закрыть на кнопку
    $('.exit_btn_envelope').on('click', function(e) {
        $('.envelope_paper').addClass('envelope_paper_close');

        setTimeout(function() {
            $('.envelope_top').addClass('envelope_top_close');
        }, 800);
        setTimeout(function() {
            $('.envelope_print').addClass('envelope_print_close');
        }, 1500);
        setTimeout(function() {
            $('.envelope_wrapper').removeClass('envelope_wrapper_open');
            $('.envelope_room_table').removeClass('envelope_room_table_open');
        }, 3000);
        setTimeout(function() {
            $('.envelope_paper').removeClass('envelope_paper_close');
            $('.envelope_top').removeClass('envelope_top_close');
            $('.envelope_print').removeClass('envelope_print_close');
        }, 3200);
    });
    //
});