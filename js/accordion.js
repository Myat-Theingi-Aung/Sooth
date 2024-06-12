$(document).ready(function () {

    $(".acc > a").on("click", function () {

        if ($(this).hasClass("active")) {

            $(this).removeClass("active");
            $(this).siblings(".content").slideUp(200);
            $(".acc > a img").attr('src', '../img/product/img_plus.png');
        }
        else {
            $(".acc > a img").attr('src', '../img/product/img_plus.png');
            $(this).find("img").attr('src', '../img/product/img_minus.png');
            $(".acc > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this).siblings(".content").slideDown(200);
        }
    });
});