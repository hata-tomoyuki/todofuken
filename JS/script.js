$(window).scroll(function (){
    if (window.scrollY >= 51) {
        $("header").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");
    }
});