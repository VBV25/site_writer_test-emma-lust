var test = document.querySelector('.test');
//заголовок
var list_3_heading = document.querySelector('.list_3_heading');
//тексты
var list_3_text = document.querySelector('.list_3_text');
//блок с количеством символов в тексте
const kolBukv = document.getElementById('kolBukv');
//

//
//
//
//
//
//
//текст для проверки количества символов
list_3_text.innerHTML =
  '<pre>Ледяной ветер со снегом<br>ударил в лицо, сбив дыха-<br>ние и пробрав до самых<br>костей. Не думая, схва-<br>тила за ноги и закрича-<br>ла:<br> - Держу!<br> Сверху что-то зажуж-<br>жало и Вера почувство-<br>вала, как под тяжестью<br>тела одкосились ноги и<br>она завалилась на бок.</pre>';
//
//
//
//
//
//
//
//
test.addEventListener('click', function () {
  var testText = list_3_text.textContent;
  kolBukv.innerHTML = 'результат в консоле';
  console.log(Array.from(testText));
});
