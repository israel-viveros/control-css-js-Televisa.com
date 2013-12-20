var headerFix = new Object();

headerFix.iconsSearch = function(){
    var objLink = $(".mainnav nav ul li.social:nth-child(1) a");
    var clicLink = objLink.attr('href');
    objLink.click(function(event) { 
        window.open(clicLink,'_blank');
    });

    var objLink2 = $(".mainnav nav ul li.social:nth-child(2) a");
    var clicLink2 = objLink2.attr('href');
    objLink2.click(function(event) {    
        window.open(clicLink2,'_blank');
    });

    var inputSearch = $("input.search_term");
    inputSearch.keydown(function(tecla) {   
        if (tecla.keyCode === 13) {     
                window.open('http://result.televisa.com/universal/#'+inputSearch.val(),'_blank');
                inputSearch.val("");
        }
    });

    $("button.search_submit").click(function(event) {
        console.log("cliked");
        if(inputSearch.val() != ""){
            window.open('http://result.televisa.com/universal/#'+inputSearch.val(),'_blank');
            inputSearch.val("");
        }
    });
}

$(function() {    
    headerFix.iconsSearch();

    $("#btn_follow, #btn_like").click(function(event) {
        event.preventDefault();        
        if($(this).attr("id")=== "btn_follow"){
            $("header.nav_header_01 div.mainnav nav.social ul li ul.sub-nav-social-facebook").css("display", "none");    
        }else{
            $("header.nav_header_01 div.mainnav nav.social ul li ul.sub-nav-social-twitter").css("display", "none");    
        }
        $(this).siblings('ul').toggle("slow");        
    });

     $("#btn_mobile_facebook, #btn_mobile_twitter").click(function(event) {
        event.preventDefault();        
        if($(this).attr("id")=== "btn_mobile_twitter"){
            $("header.nav_header_01 div.mobilenav nav ul li ul.sub-nav-social-facebook").css("display", "none");    
        }else{
            $("header.nav_header_01 div.mobilenav nav ul li ul.sub-nav-social-twitter").css("display", "none");    
        }
        $("header.nav_header_01 div.mobilenav").css("height", "80px");
        $(this).siblings('ul').toggle("slow");        
    });
     
});


$(document).ready(function() {
    /****** Inicia contador de notas m?s le?das para RGA_top6_2013 *****/
    var contador = $("#top_6_coporativo .art_latestnews_01_list1").children().size();

    if (contador > 0) {
        for (var i = 1; i <= contador; i++) {
            $("#top_6_coporativo .art_latestnews_01_list1 li:nth-child(" + i + ") div a span").text(i + ".");
        }
        ;
    } else {
        console.log("No existen notas priorizadas");
    }
    ;
    /***** Final contador de notas m?s le?das para RGA_top6_2013 *****/
});



//Funcion para armar el HTML del paginado de los Tweets recuperados
$(window).load( function () {
    var cuentaTw = $("#tweets").children().length;

    if ( cuentaTw === 6 ) {
        var armaHTML = "<li>";

        for (var i = 1; i <= cuentaTw; i++) {
            armaHTML += '<div class="wdg_twitt_02_block one">';
            armaHTML += '<div class="wdg_twitt_02_img">';
            armaHTML += '<a href="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_img a').attr("href") +'" title="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_img a').attr("title") +'"><img src="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_img a img').attr("src") +'" alt="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_img a img').attr("alt") +'"></a></div>';
            armaHTML += '<div class="wdg_twitt_02_txt">';
            armaHTML += '<a href="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt a').attr("href") +'" title="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt a').attr("title") +'">';
            armaHTML += '<span id="s1" class="title textcolor-title2 text-color-corp">'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt a #s1').text() +'</span><span id="s2" class="cta_twitter textcolor-title4">'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt a #s2').text() +'</span>';
            armaHTML += '<p>'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt a p').text() +'</p></a>';
            armaHTML += '<span class="wdg_twitt_02_blue">'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt .wdg_twitt_02_blue span').text();
            armaHTML += '<a href="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt .wdg_twitt_02_blue a:nth-child(1)').attr("href") +'" title="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt .wdg_twitt_02_blue a:nth-child(1)').attr("title") +'">Reply</a> -';
            armaHTML += '<a href="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt .wdg_twitt_02_blue a:nth-child(2)').attr("href") +'" title="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt .wdg_twitt_02_blue a:nth-child(2)').attr("title") +'">Retweet</a> -';
            armaHTML += '<a href="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt .wdg_twitt_02_blue a:nth-child(3)').attr("href") +'" title="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt .wdg_twitt_02_blue a:nth-child(3)').attr("title") +'">Favorito</a></span></div></div>';

            if ( i == 2 || i == 4 ) {
                armaHTML += '</li><li>';
            } else if (i == 6) {
                armaHTML += '</li>';
            };
        };    

        $(".wdg_twitt_02_carousel ul").empty().html(armaHTML);
        
    } else if ( cuentaTw < 6) {
        console.log("No se pudo establecer comunicacion con el servicio de Twitter.");
    }

});

setTimeout(function(){
            $(".StageSliderMundial ul.StageContainterLarge li").find(".descriptionStageContainerLarge").find("a").removeClass("ui-link");
        },3000);
		
$(document).ready(function() {
	 /***** Inicia asignacion de target a hipervinculos *****/
    $('a').attr('target','_blank');
	 /***** asignacion de target a hipervinculos *****/
});