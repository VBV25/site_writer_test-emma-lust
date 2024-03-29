/*--------БЛОК-СМЕНЫ-КОНТЕНТА--------/*
/*--- в-зависимости-от-страницы-------*/

//
//---------------------------------------
//---------РАССКАЗ------------
//---------Сердце------------
//-----------------------------
//
//проверяем адресную строку на наличие в ней названия фанфика и заполняем контент для него
if (urlVariables === 'heart') {
    console.log(funBookSlideWrapper);

    //фон страницы картинка
    bgImgMain.style.backgroundImage =
        ' url("../../pages-img/fun-page-source/4.jpg")';

    //ИЗМЕНЕНИЕ ГЛАВНОГО ИЗОБРАЖЕНИЯ
    imgFunSect1.setAttribute('src', '../pages-img/fun-page-source/1.png');
    imgFunSect1.style.opacity = '0.85';
    //-------------

    //----НАЗВАНИЕ произведения
    funBookName.textContent = 'Сердце';
    //подзаголовок произведения
    funBooksubtitleBase.textContent = '';
    //-------------

    //----ВИДИМОСТЬ ГЛАВ и текст в них------
    //1страница
    chapter[0].classList.remove('not-visible');
    chapter[0].textContent = 'Emma Lust';

    //-------------

    //----ТЕКСТ КНИГИ НА СТРАНИЦЕ
    //1стр.
    textPage[0].innerHTML =
        "<p class='textEnd textItalics textBold'>Представьте на мгновение мир,<br>в котором нет места воображению.<br>Мир, буквальный во всех своих проявлениях.<br>И задайтесь вопросом –<br>смогли бы Вы стать в нем счастливым?</p><br><br><pre>    </pre> Для нее все всегда было проще простого. Наверное, потому что она никогда не задумывалась над тем, что делала. Никогда не задавалась вопросом, а что было бы, поступи она иначе. Никогда не изводила себя сомнениями. Просто потому что воображение было ей чуждо. Как и домыслы с беспокойством, которые оно рождало. Безраздумное, мгновенное принятие решений – вот ее кредо, вне зависимости оттого, что по этому поводу думали другие.<br><pre>    </pre>Собственного говоря, его появление в ее жизни ничего в этом механизме не поменяло. Вопрос о том, «а стоит ли вообще?» перед ней даже не стоял. Она просто, без раздумий отдала ему свое сердце, оставив в груди пустую тишину. Сердце, которое, несмотря на всю рациональность ее натуры, было теплым, любящим, бьющимся в такт его прикосновений.<br><br><pre>    </pre>Он никогда не думал, что ему будет нужен кто-то, подобный ей. Что он вообще когда-нибудь будет рядом с ней. Это казалось более чем нерациональным, но ее сердце в его руках говорило об обратном. Она просто не оставила ему времени на раздумья – хотя ему хватило бы доли секунды – и поставила перед фактом. И он принял решение, так же просто, не задумываясь о последствиях, как она. В конце концов, с этим можно было жить. Все просто – ты мне, я тебе – и его сердце из груди перекочевало в ее руки.<br><pre>    </pre>Где-то там, глубоко в своих мыслях, он обрадовался, что смог так удачно избавиться от этой глупой, беспокойной части себя, которой он никогда не мог угодить. Пусть теперь она живет с его сложным сердцем. Что до ее собственного, то он уже знал, что с ним проблем не будет.<br><br><pre>    </pre>Она не оставляла его ни на минуту, подолгу держала в руках, любовалась им перед сном, прижимала к пустующей груди и была абсолютно счастлива. Она не сожалела о том, что не могла заменить свое сердце его сердцем. Ей было достаточно того, что оно было рядом, что она засыпала с ним и просыпалась так же, рядом. Она любила его и дорожила им во много раз сильнее, чем своим собственным сердцем, даже, несмотря на то, что оно было еле теплым и не замирало от ее прикосновений. Можно ли назвать это слепотой? Довольствованием тем, что есть? Самообманом? Или просто отсутствием воображения, которое заставляет требовать большего? Ей было все равно. Потому что сейчас оно принадлежало ей.<br><br><pre>    </pre>Эта маленькая горячая штучка, которую она называла своим сердцем, очень забавляла его. Почти все время он носил его в нагрудном кармане – теплый, ритмично подрагивающий комочек. Но стоило ему дотронуться до него, как ее сердце становилось обжигающе горячим, его биение учащалось и еще долго не могло вернуться к прежнему почти неощутимому беспокойному ритму. Да, иметь такое сердце было определенно лучше, чем свое собственное. Да и карман оно совсем не тянуло.<br><br><pre>    </pre> Почему?<br><pre>    </pre>П_О_Ч_Е_М_У?<br><pre>    </pre>Она не оставила его в руках?<br><pre>    </pre>Не положила в нагрудный карман блузки?<br><pre>    </pre>Почему она положила его в сумочку?<br><pre>    </pre>ПОЧЕМУ?<br><br><pre>    </pre>Вопрос, который впервые терзал ее мозг, разрывал его на части… сожалением, ужасом и страхом. Чуждые эмоции, чуждые размышления – как это могло случиться? Как она допустила это? У нее не было ответа. Впервые не было решения. Но были последствия, яркие образы последствия того, что произошло.<br><pre>    </pre>Она потеряла его сердце. Потому что не смогла догнать вора. Вора, что украл ее сумочку. Сумочку, в которую она его положила.<br><pre>    </pre>Мысли. Хоровод мыслей. Что ему сказать? Как ему сказать? И… что он ответит? Она пыталась заставить себя продумать будущую ситуацию, сама не замечая того, что ломает свои принципы. Но у нее ничего не получилось. Потому что ее миру и людям, в нем живущим, было чуждо воображение. И ей ничего не оставалось, как только поступить так, как она привыкла.<br><br><pre>    </pre>Он был в ярости. Первая, самая яркая эмоция, самое разумное решение – разозлиться. Потому что это логично. И потому, что она этого ждет. Он кричал, а она молчала. Плакала и молчала, от осознания собственной беспомощности и вины. Вины, которую он провоцировал. Да, слушала все это и молчала.<br><pre>    </pre>Выговорившись, он ушел. И она даже не попросила назад свое сердце, понимая, что заслужила все до единого слова.<br><pre>    </pre>А он, захлопывая за собой дверь, вздыхал с облегчением оттого, что она забыла попросить свое сердце назад. Потому что сам уже не помнил, куда его положил.<br><br><pre>    </pre>Зато ОНО помнило, задыхаясь пылью среди старых книг и газет на одной из дальних полок его спальни.";
    //
    //
    //
    /*---------------------------*/
    //----скрытие ненужных СЛАЙДОВ(СТРАНИЦ КНИГИ)
    funBookSlideWrapper.removeChild(funBookSlide[1]);
    funBookSlideWrapper.removeChild(funBookSlide[2]);
    funBookSlideWrapper.removeChild(funBookSlide[3]);
    funBookSlideWrapper.removeChild(funBookSlide[4]);
    funBookSlideWrapper.removeChild(funBookSlide[5]);
    funBookSlideWrapper.removeChild(funBookSlide[6]);
    funBookSlideWrapper.removeChild(funBookSlide[7]);
    funBookSlideWrapper.removeChild(funBookSlide[8]);
    funBookSlideWrapper.removeChild(funBookSlide[9]);
    funBookSlideWrapper.removeChild(funBookSlide[10]);
    funBookSlideWrapper.removeChild(funBookSlide[11]);
    funBookSlideWrapper.removeChild(funBookSlide[12]);
    funBookSlideWrapper.removeChild(funBookSlide[13]);
    funBookSlideWrapper.removeChild(funBookSlide[14]);
    funBookSlideWrapper.removeChild(funBookSlide[15]);
    funBookSlideWrapper.removeChild(funBookSlide[16]);
    funBookSlideWrapper.removeChild(funBookSlide[17]);
    funBookSlideWrapper.removeChild(funBookSlide[18]);
    funBookSlideWrapper.removeChild(funBookSlide[19]);

    //-------------
}