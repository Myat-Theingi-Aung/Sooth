$(document).ready(function () {

  $('.btn-toggle').on('click', function () {
    let topVal = 0;
    if ($(this).hasClass('hb-open')) {
        topVal = -900;
        $(this).removeClass('hb-open');
    } else {
        $(this).addClass('hb-open');
    }

    $('.header').stop().animate({
        top: topVal
    }, 200);
});

});