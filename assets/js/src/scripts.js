$(document).ready(function() {
    var swiper = new Swiper('.swiper-container');

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
});