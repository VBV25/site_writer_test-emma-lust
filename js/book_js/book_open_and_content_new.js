/*открытые книги*/

/*закрыти осуществляется в файле 
book_open_animate.js
поэтому придобавлении книги вносим изменения удаления классов туда*/

/*при добавлении книги в каждую функцию открытия книги добавляем код с удалением класса новой добавленной книги*/

//кнопки книги
var book_new = document.querySelector('.book_new');
//

//
var open_book_wrapper = document.querySelector('.open_book_wrapper');

//---------------------------------------------------------
//---------------------отображаем книгу--------------------
//---------------------------------------------------------

//отображаем новую книгу с кресла
book_new.addEventListener('click', function() {
    //удаляем у других книг стиллизацию страниц(контент) в файле book_open_animate.js

    //анимируем книгу с кресла и выводим ее на передний план
    book_new.classList.add('book_new_focus');

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
    book_href_1.href = '#11';
    book_href_1.innerHTML = 'Ссылка на ЛИТРЕС';
    book_href_2.href = '#12';
    book_href_2.innerHTML = 'Ссылка на BOOK';
    book_href_3.href = '#13';
    book_href_3.innerHTML = 'Ссылка на ЛАЛАЛА';
    //остальные страницы
    //заголовок
    list_3_heading.innerHTML = 'Аннотация';
    list_4_heading.innerHTML = 'Аннотация';
    list_5_heading.innerHTML = 'Отрывок';
    list_6_heading.innerHTML = 'Отрывок';

    //тексты
    list_3_text.innerHTML =
        'Муж бросил Веру на по- <br> роге старости, да так, что стыдно кому-либо рассказать. Но не даром говорят, что там где одна дверь закрывается, непременно  открывает-<br>ся другая. И для Веры найдется своя гавань, пусть совершенно не по-<br>хожая на ту, к которой она привыкла.';
    list_4_text.innerHTML = 'Отрывок';
    list_5_text.innerHTML = 'Отрывок';
    list_6_text.innerHTML = 'Отрывок';
    //
    //
    //показываем книгу
    setTimeout(function() {
        open_book_wrapper.classList.remove('all_class_not_active');
    }, 2000);

    //console.log('3333');
});