/*открытые книги*/

//
var open_book_wrapper = document.querySelector('.open_book_wrapper');
//var open_book = document.querySelector('.open_book');

/*анимируем книгу*/
//подсказака

//
var flipbook_viewport = document.querySelector('.flipbook-viewport');
var flipbook = document.querySelector('.flipbook');
//кнопки
//var btn_close_book = document.querySelector('.btn_close_book');
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
    flipbook_viewport.style.opacity = '1';
    //показываем подсказку

    //присваиваем стиль с анимацией открытия
    cover_card.classList.add('cover_card_click');
    //присваиваем пустой класс обложки для определения его позиции в дальнейшем
    cover_card.classList.add('cover_card_click_back');
    //cover_book_front_btn.style.display = 'none';
    //если кликнули по обложке и ей присвоили класс открытия она открылась то меняем картинки при переварачивании и позиции листов, и обложки
    if (cover_card.classList.contains('cover_card_click_back')) {
        //

        flipbook.addEventListener('mouseover', function() {
            var element_1 = document.querySelector('.page-wrapper-1');
            var style_page_wrapper_1 = window.getComputedStyle(element_1);
            var z_index_p1 = style_page_wrapper_1.getPropertyValue('z-index');
            var z_index_p1_num = Number(z_index_p1);
            var num_max_number_of_pages = Number(max_number_of_pages);
            if (z_index_p1_num == num_max_number_of_pages) {
                cover_book_front_btn.style.display = 'block';

                console.log('ghghghghgh');
            } else {
                cover_book_front_btn.style.display = 'none';
            }
        });
        //
        cover_card.style.zIndex = '1';
        container.style.zIndex = '100';
        //
        setTimeout(function() {
            cover_book_front.style.opacity = ' 0 ';
            cover_book_back.style.opacity = ' 1 ';
            container.style.transition = '0s';
        }, 700);
        setTimeout(function() {}, 2000);
    } else {
        setTimeout(function() {
            cover_book_front.style.opacity = ' 1 ';
            cover_book_back.style.opacity = ' 0 ';
        }, 700);
    }
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//закрываем книгу при клике на кнопку "на обложке"

cover_book_front_btn.onclick = function() {
    cover_card.style.zIndex = '100';
    container.style.zIndex = '1';
    //удаляем стиль с анимацией открытия
    cover_card.classList.remove('cover_card_click');
    //удаляем пустой класс обложки для определения его позиции в дальнейшем
    cover_card.classList.remove('cover_card_click_back');

    setTimeout(function() {
        cover_book_front.style.opacity = ' 1 ';
        cover_book_back.style.opacity = ' 0 ';
    }, 700);

    setTimeout(function() {
        open_book_wrapper.classList.add('all_class_not_active');
        cover_book_front_btn.style.display = 'block';
        //возвращаем книгу на кресло если открыта была она
        book_new.classList.remove('book_new_focus');

        //удаляем контент из книги
        //обложка книги
        cover_book_front.style.backgroundImage = 'unset';
        //1страница
        list_1_genre.innerHTML = '';
        list_1_title.innerHTML = '';
        list_1_year.innerHTML = '';
        //2страница
        img_cover_el.style.backgroundImage = 'unset';
        book_href_1.href = '#';
        book_href_1.innerHTML = '';
        book_href_2.href = '#';
        book_href_2.innerHTML = '';
        book_href_3.href = '#';
        book_href_3.innerHTML = '';
        //
        //
        //
        //

        //здесь добавляем строки по порядку при добавлении страниц в книгу

        //остальные страницы
        //заголовок
        list_3_heading.innerHTML = '';
        list_4_heading.innerHTML = '';
        list_5_heading.innerHTML = '';
        list_6_heading.innerHTML = '';
        list_7_heading.innerHTML = '';
        list_8_heading.innerHTML = '';

        //тексты
        list_3_text.innerHTML = '';
        list_4_text.innerHTML = '';
        list_5_text.innerHTML = '';
        list_6_text.innerHTML = '';
        list_7_text.innerHTML = '';
        list_8_text.innerHTML = '';
        //
    }, 2500);
};

//
//