$(document).ready(function() {
    /*----------------прелоадер----------------*/
    //скрытие прелоадера
    if ($(window).on('load')) {
        setTimeout(function() {
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

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        $('#back-top a').click(function() {
            $('body,html').animate({ scrollTop: 0 }, 1200);
            return false;
        });
    });
    //
    //
    //
    //---ОТКРЫТИЕ МЕНЮ ХЕАДЕР
    $('.header__btn-navigation-menu').click(function() {
        $('.header__menu').toggleClass('active-block-menu');
    });
    $('main').click(function() {
        $('.header__menu').removeClass('active-block-menu');
    });
    //
    //
    //
    /*-ВСПЛЫВАЮЩИЕ ОКНА-*/
    //-----попап бронь
    $('.header__form').click(function(event) {
        $('body').addClass('lock');
        setTimeout(function() {
            $('.popup-form__wrapper').addClass('visible-popup');
        }, 40);
    });
    $('#popup-form__btn-close').click(function(event) {
        $('.popup-form__wrapper').removeClass('visible-popup');
        setTimeout(function() {
            $('body').removeClass('lock');
        }, 200);
    });
    $(document).on('keyup', function(e) {
        if (e.keyCode == 27) {
            $('.popup-form__wrapper').removeClass('visible-popup');
            setTimeout(function() {
                $('body').removeClass('lock');
            }, 200);
        }
    });

    //
    //
    //
    //-----попап Политика конфиденциальности
});