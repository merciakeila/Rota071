//Navbar

var collapsibleNavbar = $("#collapsibleNavbar");

$(document).on("scroll", function () {
    if
        ($(document).scrollTop() > 86) {
        $("#banner").addClass("shrink");
        $(".nav-custom").css("color", "#3E3D3D");
        $(".nav-custom").css("font-weight", "500");
        $(".nav-link").css("hover", "#3E3D3D");
        $(".logo-dark").css("display", "block");
        $(".logo-light").css("display", "none");


    }
    else {
        $("#banner").removeClass("shrink");
        $(".nav-custom").css("color", "white");
        $(".nav-link").css("hover", "#3E3D3D");
        $(".logo-dark").css("display", "none");
        $(".logo-light").css("display", "block");
    }
});

$(document).ready(function () {
    console.log("document is ready");
    $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })
});
window.onload = function () {
    console.log("window is loaded");
};

