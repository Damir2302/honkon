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

    $('#success-close').on("click", function(e) {
        $('.is-close').trigger('click')
    })

    // Header scroll::Start
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $('header').height()) {
          $('header').addClass('header-fixed')
        } else if ($(window).scrollTop() == 0) {
          $('header').removeClass('header-fixed')
        }
    })
    // Header scroll::End

    // VIDEO на главной
    $('.play-icon').on('click', function() {
        $(this).parent().addClass('play')
        $('#video')[0].play()
        $('#video')[0].controls = true
    })

    var vid = document.getElementById('video');

    if ($('#video').length) {
    vid.addEventListener('ended', function(e) {
        this.load()
        $('.play-icon').parent().removeClass('play')
        $('#video')[0].controls = false
    }, false);
    }

});