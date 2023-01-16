$(document).ready(function() {

    let comeySlider = new Swiper('.comey-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,

        pagination: {
            el: '.comey-slider-pagination',
            clickable: true
          },

        breakpoints: {
            768: {
                slidesPerView: 3,
            }
        }
    })

})