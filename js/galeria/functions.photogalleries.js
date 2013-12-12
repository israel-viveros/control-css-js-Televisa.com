/*
    Developer: Israel Viveros;
    Version: 1.0.0;
*/
           
var photogalleries = new Object;


photogalleries.carrusel = function() {
    var nuevo = $.parseJSON($('span.data').text());
    var carruselBody = "";
    var FlagFirstImg = false;

    $.each(nuevo, function(k, v) {
        $.each(v, function(e, r) {
            $.each(r, function(l, u) {
                if (l === 0 && FlagFirstImg === false) {
                    $("img.mainimage").attr({
                        "src": u.path,
                        "alt": u.description
                    });
                    $(".imageDescription").html(u.description);
                    FlagFirstImg = true;
                };
                carruselBody += '<li>';
                carruselBody += '<a href="#" class="image" data-pos="' + parseInt(l + 1) + '" title="' + u.description + '">';
                carruselBody += '<img src="' + u.path + '" width="64" height="48" alt="' + u.description + '" class="" />';
                carruselBody += '<span class="border"></span>';
                carruselBody += '<span class="icon"><i class="tvsa-camera"></i></span>';
                carruselBody += '<span class="title">' + u.description + '</span>';
                carruselBody += '</a>';
                carruselBody += '</li>';
            });

        });
    });
    $("ul.ulcarrusel").html(carruselBody);
    $("ul.ulcarrusel li:nth-child(1)").children("a").addClass("active");
}

photogalleries.vars = function() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
photogalleries.embed = function() {
    var urlVars = photogalleries.vars();
    /*
    if (urlVars['embed']) {
        $("div#drawHeader, footer, div.content, div.container-right").remove();
    }
    */
}

photogalleries.dostat = function() {
    var pix = new Image();
    pix.src = doStats('return');
}
photogalleries.DisableDoStat = function(){
    var urlVarEnabled = photogalleries.vars();
    if (urlVarEnabled['nostats']) {
        return true;
    }
}

$(function() {    
    photogalleries.carrusel(); 
    photogalleries.embed(); 
});
        