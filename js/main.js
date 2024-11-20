$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });
});


$(document).ready(function () {
    $('.vertical-slider').slick({
        vertical: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true, 
        prevArrow: '<button class="slick-prev"></button>',
        nextArrow: '<button class="slick-next"></button>',
        infinite: false,
        dots: false,
        speed: 500
    });
});

$(document).ready(function () {
    if ($(window).width() <= 768) {
        $('.slider_mobile').slick({
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
        });
    }
});
