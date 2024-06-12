$(document).ready(function () {

    $(".container").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,
        nextArrow: '.arrow.next',
        prevArrow: '.arrow.prev',
        dots: true,
    });
});