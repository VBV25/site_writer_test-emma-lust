<?php
$namePopupForm = htmlspecialchars($_POST['namePopupForm']);
$surnamePopupForm = htmlspecialchars($_POST['surnamePopupForm']);
$emailPopupForm = htmlspecialchars($_POST['emailPopupForm']);
$messagePopupForm = htmlspecialchars($_POST['messagePopupForm']);

//

//ОТПРАВКА 


$subject = "Отзыв со стандартной формы сайта Emma Lust";

$headers = "From: 
Emma Lust отзыв\r\n \r\n 
Site: Стандартная версия сайта Emma Lust \r\n \r\n
 
Отправляя данный отзыв пользователь согласился на обработку персональных данных\r\n \r\n 

Имя: $namePopupForm \r\n 
Фамилия: $surnamePopupForm\r\n 
Email: $messagePopupForm\r\n 

 
Comments:\r\n \r\n 
$commentReserv\r\n \r\n \r\n";


if (mail(
  "ychoba.boec92.92@yandex.ru",
  $subject,
  $headers

))
  echo "<text style='color: rgb(0, 255, 30);'>Отправлено</text>"/*Сообщение отправлено*/;
else
  echo "Не Отправлено!"/*Сообщение не отправлено*/;
