//ДОБАВЛЯЕМ ЛЕЙБЛ ЧТО ЭТО НОВЯ КНИГА ЭЛЕМЕНТАМ С КЛАССОМ new-book
$(document).ready(function () {
  $('.new-book')
    .find('#book__title')
    .before('<div class="book__new">NEW</div>');
});
