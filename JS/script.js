$(window).scroll(function() {
    if (window.scrollY >= 51) {
        $("header").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");
    }
});

$("#js-hamburger").click(function() {
    $(this).toggleClass("clicked");
    $(".hnav-container").toggleClass("opened");
    $(".black-screen").toggleClass("displayed");
})