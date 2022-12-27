/*открытые книги*/
//
//
//
//------ОБЯЗАТЕЛЬНО----
//------ОБЯЗАТЕЛЬНО----
//------ОБЯЗАТЕЛЬНО----
//
/*в константу вносим количество всех страниц для дальнейшего сравнения чтобы показать или скрыть кнопку закрытия книги*/
const max_number_of_pages = 9;
//
//
//
//
//
//
//
//
/*закрыти осуществляется в файле 
book_open_animate.js
поэтому придобавлении книги вносим изменения удаления классов туда*/

/*при добавлении книги в каждую функцию открытия книги добавляем код с удалением класса новой добавленной книги*/

//кнопки книги

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

//переменные блоки на страницах
//обложка книги
var cover_book_front = document.querySelector('.cover_book_front');
//------1страница
//жанр
var list_1_genre = document.querySelector('.list_1_genre');
//название
var list_1_title = document.querySelector('.list_1_title');
//год
var list_1_year = document.querySelector('.list_1_year');

//-------2страница
//картинка
var img_cover_el = document.querySelector('.img_cover_el');
//ссылки
var book_href_1 = document.querySelector('.book_href_1');
var book_href_2 = document.querySelector('.book_href_2');
var book_href_3 = document.querySelector('.book_href_3');
//-------остальные страницы
//заголовок
var list_3_heading = document.querySelector('.list_3_heading');
var list_4_heading = document.querySelector('.list_4_heading');
var list_5_heading = document.querySelector('.list_5_heading');
var list_6_heading = document.querySelector('.list_6_heading');
var list_7_heading = document.querySelector('.list_7_heading');
var list_8_heading = document.querySelector('.list_8_heading');

//тексты
var list_3_text = document.querySelector('.list_3_text');
var list_4_text = document.querySelector('.list_4_text');
var list_5_text = document.querySelector('.list_5_text');
var list_6_text = document.querySelector('.list_6_text');
var list_7_text = document.querySelector('.list_7_text');
var list_8_text = document.querySelector('.list_8_text');

//--------------------------------------------------
//----------отображаем книги с левого шкафа---------
//--------------------------------------------------

//1книга
book_1_btn.addEventListener('click', function() {
    //удаляем у других книг стиллизацию страниц(контент) в файле book_open_animate.js
    //добавляем в книгу контент
    //добавляем в книгу тексты
    //обложка книги
    cover_book_front.style.backgroundImage =
        'url("pages/book_new/my_woman_2.jpg")';
    //1страница
    list_1_genre.innerHTML = 'роман';
    list_1_title.innerHTML = 'моя <br> женщина';
    list_1_year.innerHTML = '2021';
    //2страница
    img_cover_el.style.backgroundImage = 'url("pages/book_new/my_woman.jpg")';

    book_href_1.innerHTML = 'Ссылка на ЛитМаркет';
    book_href_1.href = 'https://litmarket.ru/books/moya-zhenshchina';

    book_href_2.innerHTML = 'Ссылка на Bookriver';
    book_href_2.href = 'https://bookriver.ru/book/emma-lust-moya-zhenschina';

    book_href_3.innerHTML = 'Ссылка на Литрес';
    book_href_3.href = 'https://www.litres.ru/emmanuel-last/moya-zhenschina/';
    //остальные страницы
    //3
    list_3_heading.innerHTML = 'Аннотация';
    list_3_text.innerHTML =
        'Муж бросил Веру на по- <br> роге старости, да так, что стыдно кому-либо рассказать. Но не даром говорят, что там где одна дверь закрывается, непременно  открывает-<br>ся другая. И для Веры найдется своя гавань, пусть совершенно не по-<br>хожая на ту, к которой она привыкла.';

    //4
    list_4_heading.innerHTML = 'Отрывок';
    list_4_text.innerHTML =
        '<pre>    Боя курантов Вера не<br>дождалась. Как только<br>президент вышел в эфир,<br>выключила телевизор и<br>пошла в спальню. Развя-<br>зала пояс на платье, рас-<br>пустила волосы. В отра-<br>жении мелькнула и ис-<br>чезла кремовая комбина-<br>ция.<br>    Где-то взорвался и рас-<br>сыпался каскадом искр</pre>';
    //5
    list_5_heading.innerHTML = 'Отрывок';
    list_5_text.innerHTML =
        '<pre>первый в новом году са-<br>лют. Вера подошла к ок-<br>ну, выходившему на неза-<br>стеклённый балкон, и по-<br>искала глазами яркие<br>всполохи. Но вместо са-<br>люта увидела барахтаю-<br>щиеся в воздухе ноги в<br>красных штанах и чер-<br>ных сапогах на шнуровке.<br> Вера вскрикнула и рас-<br>пахнула дверь на балкон.</pre>';

    //6
    list_6_heading.innerHTML = 'Отрывок';
    list_6_text.innerHTML =
        '<pre>Ледяной ветер со снегом<br>ударил в лицо, сбив дыха-<br>ние и пробрав до самых<br>костей. Не думая, схва-<br>тила за ноги и закрича-<br>ла:<br> - Держу!<br> Сверху что-то зажуж-<br>жало и Вера почувство-<br>вала, как под тяжестью<br>тела одкосились ноги и<br>она завалилась на бок.</pre>';

    //7
    list_7_heading.innerHTML = 'Отрывок';
    list_7_text.innerHTML = '  ';

    //8
    list_8_heading.innerHTML = 'Отрывок';
    list_8_text.innerHTML = '  ';

    //
    //
    setTimeout(function() {
        open_book_wrapper.classList.remove('all_class_not_active');
    }, 1000);

    //console.log('3333');
});
//

book_2_btn.addEventListener('click', function() {
    //удаляем у других книг стиллизацию страниц(контент) в файле book_open_animate.js

    //добавляем в книгу тексты
    //обложка книги
    cover_book_front.style.backgroundImage = 'url("pages/book_2/demon_2.jpg")';
    //1страница
    list_1_genre.innerHTML = 'роман';
    list_1_title.innerHTML = 'твой<br>личный<br>демон';
    list_1_year.innerHTML = '2021';
    //2страница
    img_cover_el.style.backgroundImage = 'url("pages/book_2/demon.jpg")';
    book_href_1.href = '#21';
    book_href_1.innerHTML = 'Ссылка на ЛИТРЕС';
    book_href_2.href = '#22';
    book_href_2.innerHTML = 'Ссылка на BOOK';
    book_href_3.href = '#23';
    book_href_3.innerHTML = 'Ссылка на ЛАЛАЛА';
    //остальные страницы
    //заголовок
    list_3_heading.innerHTML = 'Аннотация';
    list_4_heading.innerHTML = 'Аннотация';
    list_5_heading.innerHTML = 'Отрывок';
    list_6_heading.innerHTML = 'Отрывок';

    //тексты
    list_3_text.innerHTML = 'Муж бросил ';
    list_4_text.innerHTML = 'Отрывок';
    list_5_text.innerHTML = 'Отрывок';
    list_6_text.innerHTML = 'Отрывок';
    //
    //
    //показываем книгу
    setTimeout(function() {
        open_book_wrapper.classList.remove('all_class_not_active');
    }, 1000);
    //console.log('3333');
});
//
//

book_3_btn.addEventListener('click', function() {
    //удаляем у других книг стиллизацию страниц(контент) в файле book_open_animate.js

    //обложка книги
    cover_book_front.style.backgroundImage =
        'url("pages/book_3/causing_love_2.jpg")';
    //1страница
    list_1_genre.innerHTML = 'роман';
    list_1_title.innerHTML = 'причиняя<br>любовь';
    list_1_year.innerHTML = '2021';
    //2страница
    img_cover_el.style.backgroundImage = 'url("pages/book_3/causing_love.jpg")';
    book_href_1.href = '#31';
    book_href_1.innerHTML = 'Ссылка на ЛИТРЕС';
    book_href_2.href = '#32';
    book_href_2.innerHTML = 'Ссылка на BOOK';
    book_href_3.href = '#33';
    book_href_3.innerHTML = 'Ссылка на ЛАЛАЛА';
    //остальные страницы
    //заголовок
    list_3_heading.innerHTML = 'Аннотация';
    list_4_heading.innerHTML = 'Аннотация';
    list_5_heading.innerHTML = 'Отрывок';
    list_6_heading.innerHTML = 'Отрывок';

    //тексты
    list_3_text.innerHTML = 'Муж бросил ';
    list_4_text.innerHTML = 'Отрывок';
    list_5_text.innerHTML = 'Отрывок';
    list_6_text.innerHTML = 'Отрывок';
    //
    //
    //показываем книгу
    setTimeout(function() {
        open_book_wrapper.classList.remove('all_class_not_active');
    }, 800);
    //console.log('3333');
});

//
//
book_4_btn.addEventListener('click', function() {
    //удаляем у других книг стиллизацию страниц(контент) в файле book_open_animate.js

    //добавляем в книгу контент

    //обложка книги
    cover_book_front.style.backgroundImage =
        'url("pages/book_4/second_chance_2.jpg")';
    //1страница
    list_1_genre.innerHTML = 'роман';
    list_1_title.innerHTML = 'второй<br>шанс';
    list_1_year.innerHTML = '2021';
    //2страница
    img_cover_el.style.backgroundImage = 'url("pages/book_4/second_chance.jpg")';
    book_href_1.href = '#41';
    book_href_1.innerHTML = 'Ссылка на ЛИТРЕС';
    book_href_2.href = '#42';
    book_href_2.innerHTML = 'Ссылка на BOOK';
    book_href_3.href = '#43';
    book_href_3.innerHTML = 'Ссылка на ЛАЛАЛА';
    //остальные страницы
    //заголовок
    list_3_heading.innerHTML = 'Аннотация';
    list_4_heading.innerHTML = 'Аннотация';
    list_5_heading.innerHTML = 'Отрывок';
    list_6_heading.innerHTML = 'Отрывок';

    //тексты
    list_3_text.innerHTML = 'Муж бросил ';
    list_4_text.innerHTML = 'Отрывок';
    list_5_text.innerHTML = 'Отрывок';
    list_6_text.innerHTML = 'Отрывок';
    //
    //
    //показываем книгу
    setTimeout(function() {
        open_book_wrapper.classList.remove('all_class_not_active');
    }, 800);
    //console.log('3333');
});
//
//
book_5_btn.addEventListener('click', function() {
    //удаляем у других книг стиллизацию страниц(контент) в файле book_open_animate.js

    //добавляем в книгу контент

    //обложка книги
    cover_book_front.style.backgroundImage = 'url("pages/book_5/stream_2.jpg")';
    //1страница
    list_1_genre.innerHTML = 'роман';
    list_1_title.innerHTML = 'графиня<br>на<br>стриме';
    list_1_year.innerHTML = '2021';
    //2страница
    img_cover_el.style.backgroundImage = 'url("pages/book_5/stream.jpg")';
    book_href_1.href = '#51';
    book_href_1.innerHTML = 'Ссылка на ЛИТРЕС';
    book_href_2.href = '#52';
    book_href_2.innerHTML = 'Ссылка на BOOK';
    book_href_3.href = '#53';
    book_href_3.innerHTML = 'Ссылка на ЛАЛАЛА';
    //остальные страницы
    //заголовок
    list_3_heading.innerHTML = 'Аннотация';
    list_4_heading.innerHTML = 'Отрывок';
    list_5_heading.innerHTML = 'Отрывок';
    list_6_heading.innerHTML = 'Отрывок';

    //тексты
    list_3_text.innerHTML = 'Муж бросил ';
    list_4_text.innerHTML = 'Отрывок';
    list_5_text.innerHTML = 'Отрывок';
    list_6_text.innerHTML = 'Отрывок';
    //
    //
    //показываем книгу
    setTimeout(function() {
        open_book_wrapper.classList.remove('all_class_not_active');
    }, 800);
    //console.log('3333');
});
//
//
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
//
//
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
//
//
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
//
//

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