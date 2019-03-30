$(document).ready(function () {
    $('.slider').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        dots: true,
        dotsClass: 'dots'
    });

    $('.slider-team').slick({
        slidesToShow: 3,
        prevArrow: $('.prev-team'),
        nextArrow: $('.next-team'),
        responsive: [
            {
                breakpoint: 855,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 585,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});