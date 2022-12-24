/*открытые книги*/

//
var open_book_wrapper = document.querySelector('.open_book_wrapper');
//var open_book = document.querySelector('.open_book');

/*анимируем книгу*/
var flipbook = document.querySelector('.flipbook');
//кнопки
var btn_close_book = document.querySelector('.btn_close_book');
var cover_book_front_btn = document.querySelector('.cover_book_front_btn');

//книга на кресле
var book_new = document.querySelector('.book_new');

//-------область на странице при клике на котору анимируется кнопка закрытия книги
//области
var page_book_btn_wrapper_1 = document.querySelector(
    '.page_book_btn_wrapper_1'
);
var page_book_btn_wrapper_2 = document.querySelector('page_book_btn_wrapper_2');

//лейблы навигации на первой и второй странице
page_book_btn_wrapper_1 = document.querySelector('.page_book_btn_wrapper_1');
page_book_btn_wrapper_2 = document.querySelector('.page_book_btn_wrapper_2');
var btn_book_page_nav_1 = document.querySelector('.btn_book_page_nav_1');
var btn_book_page_nav_2 = document.querySelector('.btn_book_page_nav_2');

//прочие переменные (страницы)

//----обложка-----
var cover_card = document.querySelector('.cover_card');
//лицевая и тыльная стороны обложки
var cover_book_front = document.querySelector('.cover_book_front');
var cover_book_back = document.querySelector('.cover_book_back');

//контейнер для книги
var container = document.querySelector('.container');
//
//
//

//переварачиваем обложку
cover_card.onclick = function() {
    //присваиваем стиль с анимацией открытия
    cover_card.classList.add('cover_card_click');
    //присваиваем пустой класс обложки для определения его позиции в дальнейшем
    cover_card.classList.add('cover_card_click_back');
    cover_book_front_btn.style.display = 'none';
    //если кликнули по обложке и ей присвоили класс открытия она открылась то меняем картинки при переварачивании и позиции листов, и обложки

    if (cover_card.classList.contains('cover_card_click_back')) {
        cover_card.style.zIndex = '1';
        container.style.zIndex = '100';
        //

        setTimeout(function() {
            cover_book_front.style.opacity = ' 0 ';
            cover_book_back.style.opacity = ' 1 ';
            container.style.transition = '0s';
        }, 800);
        setTimeout(function() {
            btn_close_book.style.display = 'block';
        }, 2000);
    } else {
        setTimeout(function() {
            cover_book_front.style.opacity = ' 1 ';
            cover_book_back.style.opacity = ' 0 ';
        }, 800);
    }
};

//
//закрываем книгу при клике на кнопку "на обложке"
btn_close_book.onclick = function() {
    cover_card.style.zIndex = '100';
    container.style.zIndex = '1';
    btn_close_book.style.display = 'none';
    //удаляем стиль с анимацией открытия
    cover_card.classList.remove('cover_card_click');
    //удаляем пустой класс обложки для определения его позиции в дальнейшем
    cover_card.classList.remove('cover_card_click_back');

    setTimeout(function() {
        cover_book_front.style.opacity = ' 1 ';
        cover_book_back.style.opacity = ' 0 ';
    }, 800);

    setTimeout(function() {
        open_book_wrapper.classList.add('all_class_not_active');
        cover_book_front_btn.style.display = 'block';
        //возвращаем книгу на кресло если открыта была она
        book_new.classList.remove('book_new_focus');
        //удаляем контент из книги
        open_book_wrapper.classList.remove('open_book_wrapper_new');
        open_book_wrapper.classList.remove('open_book_wrapper_1');
        open_book_wrapper.classList.remove('open_book_wrapper_2');
        open_book_wrapper.classList.remove('open_book_wrapper_3');
        open_book_wrapper.classList.remove('open_book_wrapper_4');
        open_book_wrapper.classList.remove('open_book_wrapper_5');
        open_book_wrapper.classList.remove('open_book_wrapper_6');
        open_book_wrapper.classList.remove('open_book_wrapper_7');
        open_book_wrapper.classList.remove('open_book_wrapper_8');
        open_book_wrapper.classList.remove('open_book_wrapper_9');
    }, 2500);
};

//скрываем книгу при клике на фронтальную кнопку НАЗАД
cover_book_front_btn.onclick = function() {
    open_book_wrapper.classList.add('all_class_not_active');

    //удаляем контент из книги
    open_book_wrapper.classList.remove('open_book_wrapper_new');
    open_book_wrapper.classList.remove('open_book_wrapper_1');
    open_book_wrapper.classList.remove('open_book_wrapper_2');
    open_book_wrapper.classList.remove('open_book_wrapper_3');
    open_book_wrapper.classList.remove('open_book_wrapper_4');
    open_book_wrapper.classList.remove('open_book_wrapper_5');
    open_book_wrapper.classList.remove('open_book_wrapper_6');
    open_book_wrapper.classList.remove('open_book_wrapper_7');
    open_book_wrapper.classList.remove('open_book_wrapper_8');
    open_book_wrapper.classList.remove('open_book_wrapper_9');
    setTimeout(function() {
        book_new.classList.remove('book_new_focus');
    }, 500);
};

//
//
////если видна третья страница то скрыть кнопку закрытия книги
var page = document.querySelector('.page');
var page_1 = document.querySelector('.page_1');
var page_2 = document.querySelector('.page_2');
var page_3 = document.querySelector('.page_3');
var page_4 = document.querySelector('.page_4');
var page_5 = document.querySelector('.page_5');

page_1.addEventListener('mousemove', function() {
    var page_wrapper_1 = flipbook.querySelector('.page-wrapper-1');
    var style_page_wrapper_1 = getComputedStyle(page_wrapper_1);
    var z_index_p1 = style_page_wrapper_1.getPropertyValue('z-index');
    var z_index_p1_num = Number(z_index_p1);
    if (z_index_p1_num == 7) {
        setTimeout(function() {
            btn_close_book.style.display = 'block';
        }, 1000);
    } else {
        setTimeout(function() {
            btn_close_book.style.display = 'none';
        }, 100);
    }
});
page_2.addEventListener('mousemove', function() {
    var page_wrapper_1 = flipbook.querySelector('.page-wrapper-1');
    var style_page_wrapper_1 = getComputedStyle(page_wrapper_1);
    var z_index_p1 = style_page_wrapper_1.getPropertyValue('z-index');
    var z_index_p1_num = Number(z_index_p1);
    if (z_index_p1_num == 7) {
        setTimeout(function() {
            btn_close_book.style.display = 'block';
        }, 1000);
    } else {
        setTimeout(function() {
            btn_close_book.style.display = 'none';
        }, 100);
    }
});
page_3.addEventListener('mousemove', function() {
    var page_wrapper_1 = flipbook.querySelector('.page-wrapper-1');
    var style_page_wrapper_1 = getComputedStyle(page_wrapper_1);
    var z_index_p1 = style_page_wrapper_1.getPropertyValue('z-index');
    var z_index_p1_num = Number(z_index_p1);
    if (z_index_p1_num == 7) {
        setTimeout(function() {
            btn_close_book.style.display = 'block';
        }, 1000);
    } else {
        setTimeout(function() {
            btn_close_book.style.display = 'none';
        }, 100);
    }
});
page_4.addEventListener('mousemove', function() {
    var page_wrapper_1 = flipbook.querySelector('.page-wrapper-1');
    var style_page_wrapper_1 = getComputedStyle(page_wrapper_1);
    var z_index_p1 = style_page_wrapper_1.getPropertyValue('z-index');
    var z_index_p1_num = Number(z_index_p1);
    if (z_index_p1_num == 7) {
        setTimeout(function() {
            btn_close_book.style.display = 'block';
        }, 1000);
    } else {
        setTimeout(function() {
            btn_close_book.style.display = 'none';
        }, 100);
    }
});
page_5.addEventListener('mousemove', function() {
    var page_wrapper_1 = flipbook.querySelector('.page-wrapper-1');
    var style_page_wrapper_1 = getComputedStyle(page_wrapper_1);
    var z_index_p1 = style_page_wrapper_1.getPropertyValue('z-index');
    var z_index_p1_num = Number(z_index_p1);
    if (z_index_p1_num == 7) {
        setTimeout(function() {
            btn_close_book.style.display = 'block';
        }, 1000);
    } else {
        setTimeout(function() {
            btn_close_book.style.display = 'none';
        }, 100);
    }
});
//
//скрываем кнопку закрытия книги
page_book_btn_wrapper_1.addEventListener('mousedown', function() {
    btn_close_book.style.display = 'none';
});
btn_book_page_nav_1.addEventListener('mousedown', function() {
    btn_close_book.style.display = 'none';
});
//отображаем кнопку закрытия книги
page_book_btn_wrapper_2.addEventListener('mousedown', function() {
    setTimeout(function() {
        btn_close_book.style.display = 'block';
    }, 500);
});
btn_book_page_nav_2.addEventListener('mousedown', function() {
    setTimeout(function() {
        btn_close_book.style.display = 'block';
    }, 600);
});
//
//