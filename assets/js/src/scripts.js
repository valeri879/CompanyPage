$(document).ready(function() {
    var swiper = new Swiper('.swiper-container');

    //partners slider initialize
    var swiper = new Swiper('.partners-slider', {
        paginationClickable: true,
        slidesPerView: 3,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            420: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });

    //header fixed
    function HeaderMenu() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('active');
            console.log('window scrolltop > 50');
        } else {
            $('.navbar').removeClass('active');
        }
        $(window).scroll(function() {
            if ($(window).scrollTop() > 50) {
                $('.navbar').addClass('active');
                console.log('window scrolltop > 50');
            } else {
                $('.navbar').removeClass('active');
            }
        });
    }
    HeaderMenu();

});