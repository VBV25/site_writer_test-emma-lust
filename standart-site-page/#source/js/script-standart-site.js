/*----------------------ВСПЛЫВАЮЩИЕ ОКНА------------------------*/
//
$(document).ready(function () {
  /*----------------прелоадер----------------*/
  //скрытие прелоадера
  if ($(window).on('load')) {
    setTimeout(function () {
      // $('#wrap_preloader').delay(2000).fadeToggle(300);
      $('body').removeClass('lock');
      $('.preloader').addClass('preloader-none');
      $('.preloader').removeClass('preloader-visible');
    }, 2000);
  }
  //
  //
  //
  //
  //
  /*----------------------ВСПЛЫВАЮЩИЕ ОКНА------------------------*/
  //
  /*
                        $('.header__btn-navigation-menu').click(function(event) {
                            $('.header__menu').toggleClass('active-block-menu');
                            $('body').toggleClass('lock');
                        });
                        //


                        //

                        //name
                        $('#name').hover(function() {
                            var nameText = $('#name').val();
                            //
                            var nameError1 = 'The field is not filled';
                            var nameError2 = 'At least 2 characters';
                            var nameError3 = 'Only latin letters';
                            //
                            if (nameText == nameError1) {
                                console.log('yes');
                                $('#name').val('');
                            } else if (nameText == nameError2) {
                                console.log('yes2');
                                $('#name').val('');
                            } else if (nameText == nameError3) {
                                console.log('yes2');
                                $('#name').val('');
                            }
                        });

                        //email
                        $('#email').hover(function() {
                            var emailText = $('#email').val();
                            //
                            var emailError1 = 'The field is not filled';
                            var emailError2 = 'Incorrect email';
                            //
                            if (emailText == emailError1) {
                                console.log('yes');
                                $('#email').val('');
                            } else if (emailText == emailError2) {
                                console.log('yes2');
                                $('#email').val('');
                            }
                        });

                        //text
                        $('#request').hover(function() {
                            var requestText = $('#request').val();
                            //
                            var requestError1 = 'The field is not filled';
                            var requestError2 = 'At least 2 characters';

                            //
                            if (requestText == requestError1) {
                                console.log('yes');
                                $('#request').val('');
                            } else if (requestText == requestError2) {
                                console.log('yes2');
                                $('#request').val('');
                            }
                        });

                        //
                        */
});
