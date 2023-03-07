const popuptLinks = document.querySelectorAll('.popupt-link'); //находим все объекты с классом popupt-link чтобы открывались попапы при нажатии на этот объек
const body = document.querySelector('body'); //для блокирования скролла
const lockPadding = document.querySelectorAll('.lock-padding'); //все объекты с этим классом для

let unlock = true; // чтобы небыло двойных нажатий

const timeout = 500; //цифра в транзишн для блокировки скролла
if (popuptLinks.length > 0) {
  //проверка существования данных ссылок на странице
  for (
    let index = 0;
    index < popuptLinks.length;
    index++ //перебираем все объекты с классом линк
  ) {
    const popuptLink = popuptLinks[index]; //и присваиваем их в переменную
    /** */
    //событие при нажатии на любой из этих эллементов
    popuptLink.addEventListener('click', function (e) {
      const popuptName = popuptLink.getAttribute('href').replace('#', ''); //убираем из атрибута ссылки значек хеша и оставляем чистое имя
      const curentpopupt = document.getElementById(popuptName); //получаем объект попапа с этим айди в переменную
      popuptOpen(curentpopupt); //отправляем этот объект в функцию
      e.preventDefault(); //запрещаем работу элемента ссылки(не перезагружать страницу)
    });
  }
}
const popuptCloseIcon = document.querySelectorAll('.close-popupt'); //находим все закрывающие элеменнты с данным классом
if (popuptCloseIcon.length > 0) {
  //проверяем есть ли они на странице
  /**/
  //перебираем данные элементы циклом
  for (let index = 0; index < popuptCloseIcon.length; index++) {
    const el = popuptCloseIcon[index]; //и присваиваем их в переенную
    /**/
    //событие при нажатии на любой из этих эллементов
    el.addEventListener('click', function (e) {
      popuptClose(el.closest('.popupt')); //отправляем в функцию попап клосе обект который является БЛИЖАЙШИМ РОДИТЕЛЕМ
      e.preventDefault(); //запрещаем работу элемента ссылки(не перезагружать страницу)
    });
  }
}

function popuptOpen(currentpopupt) {
  //передаем готовый объект
  if (currentpopupt && unlock) {
    // проверяем есть ли такой объект и открыта ли переменная unlock(значение true)

    const popuptActive = document.querySelector('.popupt.open'); //ищем есть ли объект открытый(попап) с классом OPEN и если ест выполняем следующий оператор если
    if (popuptActive) {
      //если открыты попапы есть
      popuptClose(popuptActive, false); //закрываем попапы и переменную unlock закрываем
    } else {
      bodyLock(); //иначе блокируем скролл страницы
    }
    currentpopupt.classList.add('open'); // добавляем попапу класс опен и он открывается
    /**/
    //вешаем открытому попапу событие при клике
    currentpopupt.addEventListener('click', function (e) {
      //даной записью отсекаем все кроме темной области(фона(боди))
      //если у нажатого объекта нет в родителях тега с классом popupt__content
      if (!e.target.closest('.popupt__content')) {
        popuptClose(e.target.closest('.popupt')); //тогда закрываем попап(передаем его в функцию закрытия) ближайший объект с данным классом
      }
    });
  }
}
//
//ма передаем сюда открытый объект активный и передаем значение стоит ли нам использовать блокировку скролла( для открытия второго попапа)
function popuptClose(popuptActive, doUnlock = true) {
  if (unlock) {
    //прячем активный попап при открытии второго
    popuptActive.classList.remove('open');
    /** */
    //запрещаем выполнять блокировку скролла(бодиАнлок) если у нас уже есть какой то открытый попап(для попапа внутри попапа)
    if (doUnlock) {
      bodyUnLock();
    }
  }
}
//
function bodyLock() {
  //в бодилок высчитываем разницу между окна(вьюпорта) и блоком контента(высчитываем тем самым ширину скролла чтобы когда его скрываем не ехал в право контент для дальнейшего паддинга на эту ширину)
  const lockPaddingValue =
    window.innerWidth - document.querySelector('.main').offsetWidth + 'px';
  //перебираем циклом все объекты с классом lock-padding (для тех которые имеют позицию абсолют, фиксед)
  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      //присваиваем в переменную все эти значения
      const el = lockPadding[index];
      //добавляем правый паддинг на ширину скролла для элементов с классом lock-padding
      el.style.paddingRight = lockPaddingValue;
    }
  }
  //добавляем правый паддинг на ширину скролла боди блоку
  body.style.paddingRight = lockPaddingValue;
  //скрываем скролл у боди и блокируем прокрутку страницы(остается только скролл попапа)
  body.classList.add('lock');

  unlock = false; //временно блокируем переменную unlock для того чтобы исключить двойной клик при открытии
  setTimeout(function () {
    //через время указанное в переменной timeout возвращаем переменную обратно в открытое положение
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        //убираем отступ справа у фиксированных и абсолютных элементов
        el.style.paddingRight = '0px';
      }
    }
    //убираем отступ справа в боди
    body.style.paddingRight = '0px';
    //возвращаем скролл
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

//закрытие при esc
document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popuptActive = document.querySelector('.popupt.open');
    popuptClose(popuptActive);
  }
});
//закрытие при клике на тело письма
const popupPolicyBody = document.getElementById('popupt_policy-body');
popupPolicyBody.addEventListener('click', function (e) {
  const popuptActive = document.querySelector('.popupt.open');
  popuptClose(popuptActive);
});
const popupTermuseBody = document.getElementById('popupt_terms-use-body');
popupTermuseBody.addEventListener('click', function (e) {
  const popuptActive = document.querySelector('.popupt.open');
  popuptClose(popuptActive);
})(
  //
  //
  //
  //
  //
  //полифилы
  function () {
    if (!Element.prototype.closest) {
      Element.prototype.closest = function (css) {
        var node = this;
        while (node) {
          if (node.matches(css)) return node;
          else node = node.parentElement;
        }
        return null;
      };
    }
  }
)();
(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();
