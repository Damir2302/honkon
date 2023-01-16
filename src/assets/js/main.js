$(document).ready(function() {

    // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем вне всплывающего поля, представленных ниже]
    $('html').on('click', function(e) {
        if (!$(e.target).closest('.nav').length &&
            !$(e.target).closest('.header__burger').length) {
            $('body').removeClass('overflow-hidden')
            $('#page').removeClass('bg-overlay')

            $('.nav').removeClass('opened')
            $('.header__burger').removeClass('opened')
        }
    })

    function openMobMenu() {
        $('.header__burger').on('click', function() {
            $('body').toggleClass('overflow-hidden')
            $('#page').toggleClass('bg-overlay')
            $(this).toggleClass('opened')
            $('.nav').toggleClass('opened')
        })
    }

    openMobMenu();
});