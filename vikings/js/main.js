$(function () {

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/left-str.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/right-str.png" alt="next"></button>',
        responsive: [
            {
                breakout: 769,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows: false
    });
});