// Плавный скролл и класс pageup
$(window).scroll(function () {
    /* console.log($(this).scrollTop()) */
    if ($(this).scrollTop() > 700) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href^='#up']").click(function () { // При клике на ссылку, в которой значение атрибута href начинается с #:
    var _href = $(this).attr("href");  // создаём переменную _href
    // и записываем в неё значение аттрибута href из кликнутой ссылки
    $("html, body").animate({scrollTop: '0'});
    /* КАК РАБОТАЕТ ФУНКЦИЯ НИЖЕ - ПОКА НЕ ПОНЯЛ..
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}); */
    return false;
});



