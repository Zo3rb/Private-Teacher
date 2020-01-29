// Instance of WoW.js
new WOW().init();


// Jquery Plugins
$(function() {
    // Click to Scroll
    $(".navbar a").click(function(e) {
        e.preventDefault();
        $("html").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top + 1
        }, 1000);
        $(".navbar a").removeClass("active");
        $(this).addClass("active");
    });

    // Sync Navbar with Scroll 
    $(window).scroll(function() {
        $(".block").each(function() {
            if ($(window).scrollTop() > $(this).offset().top) {
                let blockID = $(this).attr("id");
                $(".navbar a").removeClass("active");
                $(".navbar a[data-scroll='" + blockID + "']").addClass("active");
            }
        });
        if ($(window).scrollTop() >= 500) {
            if ($(".goTop").is(":hidden")) {
                $(".goTop").fadeIn();
            }
        } else {
            $(".goTop").fadeOut();
        }
    });

    // Go To Top Button 
    $(".goTop").click(function() {
        $("html").animate({
            scrollTop: 0
        }, 1000);
    });

});