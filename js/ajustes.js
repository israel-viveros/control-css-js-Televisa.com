var headerFix = new Object();

headerFix.iconsSearch = function(){
    var objLink = $(".mainnav nav ul li.social:nth-child(1) a");
    var clicLink = objLink.attr('href');
    objLink.click(function(event) { 
        window.open(clicLink,'_self');
    });

    var objLink2 = $(".mainnav nav ul li.social:nth-child(2) a");
    var clicLink2 = objLink2.attr('href');
    objLink2.click(function(event) {    
        window.open(clicLink2,'_self');
    });

    var inputSearch = $("input.search_term");
    inputSearch.keydown(function(tecla) {   
        if (tecla.keyCode === 13) {     
                //window.open('http://result.televisa.com/universal/#'+inputSearch.val(),'_blank');
                //inputSearch.val("");
				$('.site_search').submit();
        }
    });

    $("button.search_submit").click(function(event) {
        console.log("cliked");
        if(inputSearch.val() != ""){
            //window.open('http://result.televisa.com/universal/#'+inputSearch.val(),'_blank');
            //inputSearch.val("");
			$('.site_search').submit();
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
            armaHTML += '<a target="_blank" href="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_img a').attr("href") +'" title="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_img a').attr("title") +'"><img src="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_img a img').attr("src") +'" alt="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_img a img').attr("alt") +'"></a></div>';
            armaHTML += '<div class="wdg_twitt_02_txt">';
            armaHTML += '<a target="_blank" href="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt a').attr("href") +'" title="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt a').attr("title") +'">';
            armaHTML += '<span id="s1" class="title textcolor-title2 text-color-corp">'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt a #s1').text() +'</span><span id="s2" class="cta_twitter textcolor-title4">'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt a #s2').text() +'</span>';
            armaHTML += '<p>'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt a p').text() +'</p></a>';
            armaHTML += '<span class="wdg_twitt_02_blue">'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt .wdg_twitt_02_blue span').text();
            armaHTML += '<a target="_blank" href="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt .wdg_twitt_02_blue a:nth-child(1)').attr("href") +'" title="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt .wdg_twitt_02_blue a:nth-child(1)').attr("title") +'">Reply</a> -';
            armaHTML += '<a target="_blank" href="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt .wdg_twitt_02_blue a:nth-child(2)').attr("href") +'" title="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt .wdg_twitt_02_blue a:nth-child(2)').attr("title") +'">Retweet</a> -';
            armaHTML += '<a target="_blank" href="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt .wdg_twitt_02_blue a:nth-child(3)').attr("href") +'" title="'+ $('#tweets :nth-child(' + i + ') .wdg_twitt_02_txt .wdg_twitt_02_blue a:nth-child(3)').attr("title") +'">Favorito</a></span></div></div>';

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
    $('a').attr('target','_self');
	$('.nav_header_01 .topnav .inner a:first-child').removeAttr('target')
	 /***** asignacion de target a hipervinculos *****/
});

/* Function Hacer pÃƒÂ¡gina de Inicio */
function makeThisHomePage()
{
	var nombre = navigator.userAgent;
	/* alert(nombre); */
	var navInfo = window.navigator.appVersion.toLowerCase();
	/* alert(navInfo); */
	var ch=nombre.indexOf("Chrome");
	var ie=nombre.indexOf("MSIE");
	var op=nombre.indexOf("Opera");
	var ff=nombre.indexOf("Firefox");
	var sa=nombre.indexOf("Safari");
	var caller = 'http://www.televisa.com';

	/* Windows */
	if(ie!=-1){
		caller.style.behavior='url(#default#homepage)';
		caller.setHomePage(caller); 
	}
	
	/* Firefox */
	if(ff!=-1){
		if(navInfo.indexOf('linux') != -1)
		{
			/* Firefox para Linux */
		}else if(navInfo.indexOf('mac') != -1) 
		{
			/* Firefox para MAC */
			alert("1. En el menu FIREFOX selecciona PREFERENCIAS\n2. Da clic en GENERAL\n3. En la secci\u00d3n de p\u00e1gina de inicio escribe: www.televisa.com\n4. Da clic en OK o cierra la pantalla emergente y listo!");
		}else{
			/* if(navInfo.indexOf('win') != -1) // Firefox Windows y otros */
			alert("1. En el menu HERRAMIENTAS selecciona OPCIONES \n2. Da clic en GENERAL\n3. En la secci\u00d3n de p\u00e1gina de inicio escribe: www.televisa.com\n4. Da clic en OK o cierra la pantalla emergente y listo!");
		}
	}

	/* Opera */
	if(op!=-1){
		if(navInfo.indexOf('linux') != -1)
		{
			/* Opera para Linux */
		}else if(navInfo.indexOf('mac') != -1) 
		{
			/* Opera para MAC */
			alert("1. En el menu OPERA selecciona PREFERENCIAS\n2. Da clic en el \u00edcono GENERAL\n3. En la secci\u00d3n de p\u00e1gina de inicio escribe: www.televisa.com\n4. Da clic en OK o cierra la pantalla emergente y listo!");
		}else{
			/* if(navInfo.indexOf('win') != -1) // Opera Windows y otros */
			alert("1. En el MENU selecciona OPCIONES\n2. Da clic en PREFERENCIAS\n3. Da clic en GENERAL\n4. En la secci\u00d3n de p\u00e1gina de inicio escribe: www.televisa.com\n5. Da clic en OK o cierra la pantalla emergente y listo!");
		}
	}

	/* Chrome */
	if(ch!=-1){
		if(navInfo.indexOf('linux') != -1)
		{
			/* Chrome para Linux */
		}else if(navInfo.indexOf('mac') != -1) 
                    //makeThisHomePage()
		{
			/* Chrome para MAC */
			alert("1. En el \u00edcono de PERSONALIZAR selecciona PREFERENCIAS\n2. En la secci\u00d3n de p\u00e1gina de inicio escribe: www.televisa.com\n3. Da clic en OK o cierra la pantalla emergente y listo!");
		}else{
			/* if(navInfo.indexOf('win') != -1) // Chrome Windows y otros */
			alert("1. En el \u00edcono de PERSONALIZAR selecciona OPCIONES\n2. En la secci\u00d3n de p\u00e1gina de inicio escribe: www.televisa.com\n3. Da clic en OK o cierra la pantalla emergente y listo!");
		}
	}

	/* Safari */
	if(sa!=-1&&ch==-1){
		if(navInfo.indexOf('linux') != -1)
		{
			/* Safari para Linux */
		}else if(navInfo.indexOf('mac') != -1) 
		{
			/* Safari para MAC */
			alert("1. En el menu SAFARI selecciona PREFERENCIAS\n2. Da clic en el \u00edcono PRINCIPAL\n3. En la secci\u00f3n de p\u00e1gina de inicio escribe: www.televisa.com\n4. Da clic en OK o cierra la pantalla emergente y listo!");
		}else{
			/* if(navInfo.indexOf('win') != -1) // Safari Windows y otros */
			alert("1. En el menu SAFARI selecciona PREFERENCIAS\n2. Da clic en el \u00edcono GENERAL\n3. En la secci\u00f3n de p\u00e1gina de inicio escribe: www.televisa.com\n4. Da clic en OK o cierra la pantalla emergente y listo!");
		}
	}
	
}