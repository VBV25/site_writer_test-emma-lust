//---------------------------------------
//--------Скрипт-2---ФАНФИК-------
//------------СПОР---------
//---------------------------------------

//проверяем адресную строку на наличие в ней названия фанфика и заполняем контент для него
if (urlVariables === 'no-my-tears') {
  console.log(funBookSlideWrapper);

  //ИЗМЕНЕНИЕ ГЛАВНОГО ИЗОБРАЖЕНИЯ
  imgFunSect1.setAttribute('src', '../pages-img/fun-page-source/1.png');
  //-------------

  //----НАЗВАНИЕ произведения
  funBookName.textContent = 'Ты никогда не увидишь моих слез';
  //подзаголовок произведения
  funBooksubtitleBase.textContent = 'по Вселенной Люди Икс';
  //-------------

  //----ВИДИМОСТЬ ГЛАВ и текст в них------
  //1страница
  chapter[0].classList.remove('not-visible');
  chapter[0].textContent = 'Emma Lust';

  //-------------

  //----ТЕКСТ КНИГИ НА СТРАНИЦЕ

  //1стр
  textPage[0].innerHTML =
    '<p class="textEnd  textItalics" ">Чтобы отдать себя целиком, нужно себя уничтожить</p> <p class="textEnd textBold ">Виолетта Ледюк</p><br><br><pre>    </pre>   Теплые лучи утреннего солнца легко коснулись шершавой поверхности асфальта, перепрыгнули через высокие бетонные стены с несколькими камерами слежения и натянутыми, словно струна, электрическими проводами и оказались на территории хорошо защищенного объекта. Охранники в высоких армейских сапогах и с винтовками за плечами прохаживались вдоль большого трехэтажного здания с темными окнами и громоздкими железными дверями, которые также тщательно охранялись.<br><pre>    </pre>';

  //2стр.
  textPage[1].innerHTML = '<pre>    </pre>';

  //3стр.
  textPage[2].innerHTML = '<pre>    </pre>';

  //4стр.
  textPage[3].innerHTML = '<pre>    </pre>';

  //5стр.
  textPage[4].innerHTML = '<pre>    </pre>';

  //6стр.
  textPage[5].innerHTML = '<pre>    </pre>';

  //7стр.
  textPage[6].innerHTML = '<pre>    </pre>';

  //8стр.
  textPage[7].innerHTML = '<pre>    </pre>';

  //9стр.
  textPage[8].innerHTML = '<pre>    </pre>';

  //10стр.
  textPage[9].innerHTML = '<pre>    </pre>';

  //11стр.
  textPage[10].innerHTML = '<pre>    </pre>';

  //12стр.
  textPage[11].innerHTML = '<pre>    </pre>';

  //13стр.
  textPage[12].innerHTML = '<pre>    </pre>';

  //14стр.
  textPage[13].innerHTML = '<pre>    </pre>';

  //15стр.
  textPage[14].innerHTML = '<pre>    </pre>';

  //16стр.
  textPage[15].innerHTML = '<pre>    </pre>';

  //17стр.
  textPage[16].innerHTML = '<pre>    </pre>';

  //18стр.
  textPage[17].innerHTML = '<pre>    </pre>';

  //31стр
  funBookSlide[30].classList.remove('not-visible');
  textPage[30].innerHTML =
    '<pre>    </pre><br><br><br><p class="textEnd textBold textItalics">Ethera</p>';

  /*----------------------------------------*/
  //----скрытие ненужных СЛАЙДОВ(СТРАНИЦ КНИГИ)

  funBookSlideWrapper.removeChild(funBookSlide[18]);
  funBookSlideWrapper.removeChild(funBookSlide[19]);

  //-------------
}
