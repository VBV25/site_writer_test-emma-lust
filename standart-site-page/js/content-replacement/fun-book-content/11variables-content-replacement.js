/*----------------------------------------------*/

//ПОЛУЧАЕМ данные из адресной строки и делем ее на переменные
const urlSearchVariablesAll = String(document.location.href);
var urlSearchVariables = urlSearchVariablesAll.split('#');

//проходим  циклом и присваиваем значение в переменную
for (let i = 0; i < urlSearchVariables.length; i++) {
  var urlVariables = urlSearchVariables[i];
}

/*-----скролим страницу вверх при переключении слайдов----*/
//

function slideTextUp() {
  //Определяем высоту первой секции
  const firstSectHeight = document.getElementById('first-sect').offsetHeight;
  //Скролим вверх на начало страницы слайда(с отступом сверху на высоту первой секции)
  window.scrollTo({
    top: firstSectHeight,
    behavior: 'smooth',
  });
}

//-----при клике на стрелки------
//кликаем на элемент(любой)

this.addEventListener('click', function () {
  //если этот элемент имеет атрибут data-action='swiper-btn'
  if (this.event.target.dataset.action == 'swiper-btn') {
    slideTextUp();
  }
});

//----при клике на принудительную кнопку если слайд перелистан через свайп----
const btnSlideTop = document.getElementById('btn-slide-up');
btnSlideTop.addEventListener('click', function () {
  slideTextUp();
});

/*----------------------------------------------*/
/*----------------------------------------------*/
/*----------------------------------------------*/
/*----------------------------------------------*/
/*----------------------------------------------*/
//---------------------------------------

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

//---------------------------------------
//-----ПЕРЕМЕНЫЕ ДЛЯ СМЕНЫ В НИХ КОНТЕНТА-----

//Изображение в первой секции
const imgFunSect1 = document.getElementById('imgFunSect1');
//НАЗВАНИЕ произведения
const funBookName = document.getElementById('fun-name-book');
//подзаголовок произведения
const funBooksubtitleBase = document.getElementById('fun-subtitle-book');

//
//
//

//--------------------------------------------
//----СЛАЙДЕР со СЛАЙДАМИ(СТРАНИЦАМИ КНИГИ)
const funBookSlideWrapper = document.getElementById('swiper-wrapper-base');
//----СЛАЙЫ(СТРАНИЦЫ КНИГИ)
var funBookSlide = document.querySelectorAll('.text-slider__slide');
//--------------------------------------------

//--НОМЕР СТРАНИЦЫ НА 1 БОЛЬШЕ ЧЕМ ИНДЕКС ЭЛЕМЕНТОВ
//для изменения на 1 страницы каких либо элементов используем у элементов индекс 0

//Нумерация глав на странице(можно отключить если не нужна на какой то странице)
//чтобы включить заголовок с главой используем переменную с индексом пример:chapter[2]
const chapter = document.querySelectorAll('.chapter'); //находим все объекты с классом chapter и добавляем в переменную в виде массива

//
//
//

//Нумерация глав на странице(можно отключить если не нужна на какой то странице)
//чтобы включить заголовок с главой используем переменную с индексом пример:textPage[2]
const textPage = document.querySelectorAll('.slide-text'); //находим все объекты с классом chapter и добавляем в переменную в виде массива
//
//
//
//
//---------------------------------------
//---------------------------------------
//
//
//
//
