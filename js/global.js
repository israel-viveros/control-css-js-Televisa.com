var PATH = "http://i2.esmas.com/js/rga_televisa_2013/";
head.js(
    PATH+"modernizr.js",
    PATH+"Televisa.js",
    PATH+"respond.js",
    PATH+"nwmatcher-1.2.5.js",
    PATH+"selectivizr.js",
    PATH+"transit.js",
    PATH+"swipe.js",
    PATH+"orientationfix.js",
    PATH+"verticalhero.js",
    PATH+"wdg_carousa.js",
    PATH+"carouseltype1a.js",
    PATH+"dropdown.js",
    PATH+"header.js",
    PATH+"footer.js",
    PATH+"jquery.touchSwipe.js",
    PATH+"swipe2.js"
    );
// Quitamos la imagen que pone el script: http://comentarios.esmas.com/js/communities.js (redes sociales)
$(window).load(function() {
    $('img[src*="vistas/spacer.gif"]').hide();
});


jQuery(function ($) {
    var html = "<div class='noexplore'>Para una mejor experiencia, por favor actualiza tu navegador. &nbsp;&nbsp;&nbsp;<a href='#' class='closepopalert'>x</a><!--<i class='icon-close'>x</i>--></div>",
        $body = $("body");

    if (!$(".tvsa-play").length) {
        return;
    }

    if ($("html").hasClass("ie7") || $("html").hasClass("ie8")) {
        $body.addClass("noexplore").append(html);

        $(".closepopalert").click(function(e) {
            $(this).parent().remove();
            $body.removeClass("noexplore");
            e.preventDefault();
        });
    }
});