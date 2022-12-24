/*открытые книги*/
/*при добавлении книги в каждую функцию открытия книги добавляем код с удалением класса новой добавленной книги*/
//кнопки книги
var book_new = document.querySelector('.book_new');
//
//
var book_1_btn = document.querySelector('.book_1_btn');
var book_2_btn = document.querySelector('.book_2_btn');
var book_3_btn = document.querySelector('.book_3_btn');
var book_4_btn = document.querySelector('.book_4_btn');
var book_5_btn = document.querySelector('.book_5_btn');
var book_6_btn = document.querySelector('.book_6_btn');
var book_7_btn = document.querySelector('.book_7_btn');
var book_8_btn = document.querySelector('.book_8_btn');
var book_9_btn = document.querySelector('.book_9_btn');

//
var open_book_wrapper = document.querySelector('.open_book_wrapper');
var open_book = document.querySelector('.open_book');

//отображаем книги
//отображаем новую книгу с кресла
book_new.addEventListener('click', function() {
    //удаляем у других книг стиллизацию страниц(контент) в файле book_open_animate.js

    //
    book_new.classList.add('book_new_focus');
    //

    //добавляем в книгу контент
    setTimeout(function() {
        open_book_wrapper.classList.add('open_book_wrapper_new');
    }, 800);
    //показываем книгу
    setTimeout(function() {
        open_book_wrapper.classList.remove('all_class_not_active');
    }, 2000);

    //console.log('3333');
});
//отображаем книги с левого шкафа
book_1_btn.addEventListener('click', function() {
    //удаляем у других книг стиллизацию страниц(контент) в файле book_open_animate.js
    //добавляем в книгу контент

    open_book_wrapper.classList.add('open_book_wrapper_1');
    //показываем книгу
    setTimeout(function() {
        open_book_wrapper.classList.remove('all_class_not_active');
    }, 1000);

    //console.log('3333');
});
//

book_2_btn.addEventListener('click', function() {
    //удаляем у других книг стиллизацию страниц(контент) в файле book_open_animate.js

    //добавляем в книгу контент

    open_book_wrapper.classList.add('open_book_wrapper_2');
    //показываем книгу
    setTimeout(function() {
        open_book_wrapper.classList.remove('all_class_not_active');
    }, 1000);
    //console.log('3333');
});
/****/

book_3_btn.addEventListener('click', function() {
    //удаляем у других книг стиллизацию страниц(контент) в файле book_open_animate.js

    //добавляем в книгу контент

    open_book_wrapper.classList.add('open_book_wrapper_3');
    //показываем книгу
    setTimeout(function() {
        open_book_wrapper.classList.remove('all_class_not_active');
    }, 800);
    //console.log('3333');
});

/**/
book_4_btn.addEventListener('click', function() {
    //удаляем у других книг стиллизацию страниц(контент) в файле book_open_animate.js

    //добавляем в книгу контент

    open_book_wrapper.classList.add('open_book_wrapper_4');
    //показываем книгу
    setTimeout(function() {
        open_book_wrapper.classList.remove('all_class_not_active');
    }, 800);
    //console.log('3333');
});
/* */
book_5_btn.addEventListener('click', function() {
    //удаляем у других книг стиллизацию страниц(контент) в файле book_open_animate.js

    //добавляем в книгу контент

    open_book_wrapper.classList.add('open_book_wrapper_3');
    //показываем книгу
    setTimeout(function() {
        open_book_wrapper.classList.remove('all_class_not_active');
    }, 800);
    //console.log('3333');
});
/** */
book_6_btn.addEventListener('click', function() {
    //удаляем у других книг стиллизацию страниц(контент) в файле book_open_animate.js

    //добавляем в книгу контент

    open_book_wrapper.classList.add('open_book_wrapper_6');
    //показываем книгу
    setTimeout(function() {
        open_book_wrapper.classList.remove('all_class_not_active');
    }, 800);
    //console.log('3333');
});
/** */
book_7_btn.addEventListener('click', function() {
    //удаляем у других книг стиллизацию страниц(контент) в файле book_open_animate.js

    //добавляем в книгу контент

    open_book_wrapper.classList.add('open_book_wrapper_7');
    //показываем книгу
    setTimeout(function() {
        open_book_wrapper.classList.remove('all_class_not_active');
    }, 800);
    //console.log('3333');
});
/** */
book_8_btn.addEventListener('click', function() {
    //удаляем у других книг стиллизацию страниц(контент) в файле book_open_animate.js

    //добавляем в книгу контент

    open_book_wrapper.classList.add('open_book_wrapper_8');
    //показываем книгу
    setTimeout(function() {
        open_book_wrapper.classList.remove('all_class_not_active');
    }, 800);
    //console.log('3333');
});
/** */
/*
book_9_btn.addEventListener('click', function() {
    //удаляем у других книг стиллизацию страниц(контент) в файле book_open_animate.js

    //добавляем в книгу контент

    open_book_wrapper.classList.add('open_book_wrapper_9');
    //показываем книгу
    setTimeout(function() {
        open_book_wrapper.classList.remove('all_class_not_active');
    }, 800);
    //console.log('3333');
});
*/
//
//