/*-----ПЕРЕМЕННЫЕ КНИГИ РЕЛИЗ-------*/
//массив с ссылками на выпущенную книгу
//(изначально все отключены 6 ссылок)
const releaseLink = document.querySelectorAll('.release__link');
//заголовок выпущенной книги
const releaseTitle = document.getElementById('release__title');
//подзаголовок выпущенной книги
const releaseSubtitle = document.getElementById('release__subtitle');
//текст выпущенной книги
const releaseText = document.getElementById('release__text');
//ОБЛОЖКА выпущенной книги
const releaseCover = document.getElementById('release__cover');
/*------------------------------------*/

/*-----ПЕРЕМЕННЫЕ КНИГИ В РАБОТЕ-------*/
//массив с ссылками на книгу в работе
//(изначально все отключены 6 ссылок)
const inWorkLink = document.querySelectorAll('.in-work__link');
//заголовок книги в работе
const inWorkTitle = document.getElementById('in-work__title');
//подзаголовок книги в работе
const inWorkSubtitle = document.getElementById('in-work__subtitle');
//текст книги в работе
const inWorkText = document.getElementById('in-work__text');
//ОБЛОЖКА книги в работе
const inWorkCover = document.getElementById('in-work__cover');
/*------------------------------------*/

/*-----ПЕРЕМЕННЫЕ СЕКЦИИ БЛОГ-------*/
//-----ЗАГОЛОВКИ в блоках-----
//--1 блок--
const postTitle1 = document.getElementById('post-title-1');
//--2 блок--
const postTitle2 = document.getElementById('post-title-2');
//--3 блок--
const postTitle3 = document.getElementById('post-title-3');

//-----ТЕКСТ в блоках-----
//--1 блок--
const postText1 = document.getElementById('post-text-1');
//--2 блок--
const postText2 = document.getElementById('post-text-2');
//--3 блок--
const postText3 = document.getElementById('post-text-3');

//-----ДАТА в блоках-----
//--1 блок--
const postData1 = document.getElementById('post-data-1');
//--2 блок--
const postData2 = document.getElementById('post-data-2');
//--3 блок--
const postData3 = document.getElementById('post-data-3');
/*------------------------------------*/
//
//
//
//
//
//
//
//

/*------БЛОК ЗАМЕНЫ КОНТЕНТА-----*/

/*-----БЛОГ-------*/

//--1 блок--
postTitle1.innerHTML = 'В работе<br>Мне страшно любить тебя';
postText1.innerHTML =
  'Нам нужно сесть с тобою и принять решение: между нами передружба-недоотношения…<br> Она молчала, понимая: это неправильно, я убивал её нецеленаправленно…<br> И снова выходные, пацаны зовут - клубы, тусы, а я соскучился по её губам вкусным…<br> Мчусь я... дороги, полосы... пальцы грубые запустить бы поскорее в её волосы... какие клубы…<br> Не друг ей, не любимый…<br> Кто-то из нас должен был быть немного сильным…<br> Нам нужно сесть с тобою и принять решение: между нами передружба-недоотношения…';
postData1.innerHTML = '26.07.2023';

//--2 блок--
postTitle2.innerHTML = 'Новинка<br>Зойка';
postText2.innerHTML = 'Тихое детство Зойки закончилось, когда она с семьей в начале 60-х переехала из районного центра в большой город, и пришедшая следом Юность принесла с собой счастье первой любви под горьким соусом разочарования. Тогда ей пришлось повзрослеть, ведь только Зрелости под силу вынести груз ошибок прошлого. <br> Это история одной яркой жизни, которую уже не повернуть вспять. <br> Ее история.';
postData2.innerHTML = '13.03.2023';

//--3 блок--
postTitle3.innerHTML = 'Популярное<br>Tinder';
postText3.innerHTML = 'Лика хотела "долго и счастливо", крепкую семью и детей, а муж - отношения без обязательств на стороне (и склеить еe подругу на Тиндер). Ни то, ни другое не выгорело и она осталась одна. Но не потеряла веру в себя. И в любовь! Пусть скептики говорят, что на сайтах знакомств ловить нечего, Лика знает, кто ищет - тот всегда найдет! И эта история посвящается всем "лягушкам", которых ей пришлось перецеловать, прежде чем найти своего принца. Ее история не одного знакомства.';
postData3.innerHTML = '05.01.2023';

//
//
//
//
//
/*-----------БЛОКИ С КНИГАМИ!!!----------*/
//
//
//

/*-------------КНИГА РЕЛИЗ----------*/

//Смена обложки
releaseCover.setAttribute(
  'src',
  '../pages-img/book-page-source/1cover-release-book/1.jpg'
);

//Смена заголовка
releaseTitle.textContent = 'Зойка';

//Смена подзаголовка
releaseSubtitle.textContent = '';

//Смена аннотации
releaseText.innerHTML =
  'Тихое детство Зойки закончилось, когда она с семьей в начале 60-х переехала из районного центра в большой город, и пришедшая следом Юность принесла с собой счастье первой любви под горьким соусом разочарования. Тогда ей пришлось повзрослеть, ведь только Зрелости под силу вынести груз ошибок прошлого. <br> Это история одной яркой жизни, которую уже не повернуть вспять. <br> Ее история.';
//------------------------

//АКТИВАЦИЯ ССЫЛОК, смена адреса ссылок, смена подписи ссылок
//1 ссылка
releaseLink[0].classList.remove('not-visible');
releaseLink[0].textContent = 'Ссылка на ЛитМаркет';
releaseLink[0].setAttribute(
  'href',
  'https://litmarket.ru/books/zoyka'
);
//-----------
//2 ссылка
releaseLink[1].classList.remove('not-visible');
releaseLink[1].textContent = 'Ссылка на Bookriver';
releaseLink[1].setAttribute(
  'href',
  'https://bookriver.ru/book/emma-lust-zoika'
);
//-----------

/*------------------------------------*/
/*------------------------------------*/
/*------------------------------------*/
/*------------------------------------*/
/*------------------------------------*/
/*------------------------------------*/

/*-----КНИГА В РАБОТЕ-------*/

//Смена обложки
inWorkCover.setAttribute(
  'src',
  '../pages-img/book-page-source/1cover-in-work-book/1.jpg'
);
//Смена заголовка
inWorkTitle.textContent = 'Мне страшно любить тебя';

//Смена подзаголовка
inWorkSubtitle.textContent = '';

//Смена аннотации
inWorkText.innerHTML =
  'Нам нужно сесть с тобою и принять решение: между нами передружба-недоотношения…<br> Она молчала, понимая: это неправильно, я убивал её нецеленаправленно…<br> И снова выходные, пацаны зовут - клубы, тусы, а я соскучился по её губам вкусным…<br> Мчусь я... дороги, полосы... пальцы грубые запустить бы поскорее в её волосы... какие клубы…<br> Не друг ей, не любимый…<br> Кто-то из нас должен был быть немного сильным…<br> Нам нужно сесть с тобою и принять решение: между нами передружба-недоотношения…';
//------------------------

//АКТИВАЦИЯ ССЫЛОК, смена адреса ссылок, смена подписи ссылок
//1 ссылка
inWorkLink[0].classList.remove('not-visible');
inWorkLink[0].textContent = 'Ссылка на ЛитМаркет';
inWorkLink[0].setAttribute('href', 'https://litmarket.ru/books/mne-strashno-lyubit-tebya');
//-----------
//2 ссылка
releaseLink[1].classList.remove('not-visible');
releaseLink[1].textContent = 'Ссылка на Bookriver';
releaseLink[1].setAttribute(
  'href',
  'https://bookriver.ru/book/emma-lust-mne-strashno-lyubit-tebya'
);
//-----------

/*------------------------------------*/
