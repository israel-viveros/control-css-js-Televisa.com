 $(document).ready(function() {	
 
 
 	$('.btn_6prog_02 .left2').click(function(e) {
        e.preventDefault();
		if($(window).width() > 960){var $b62_move = 972;}
		if ($.browser.msie && parseInt($.browser.version, 10) <= 9){var $b62_move = 995;}
			
		$(this).parent().parent().parent().siblings('.carrusel').animate({
			'scrollLeft': $(this).parent().parent().parent().siblings('.carrusel').scrollLeft() - $b62_move
		}, 500);		
	});
	
	$('.btn_6prog_02 .right2').click(function(e) {
        e.preventDefault();
		if($(window).width() > 960){var $b62_move = 972;}
		if ($.browser.msie && parseInt($.browser.version, 10) <= 9){var $b62_move = 995;}
		
		$(this).parent().parent().parent().siblings('.carrusel').animate({
			'scrollLeft': $(this).parent().parent().parent().siblings('.carrusel').scrollLeft() + $b62_move
		}, 500);		
	});
	
	
	
	
	if ($(window).width()>624){
		$(".btn_6prog_02 .carrusel, .btn_6prog_05 .carrusel").swipe( {        
        swipe:function(event, direction, distance, duration, fingerCount) {           
           if (direction==="right") {            
            $(this).animate({
                        'scrollLeft': $(this).scrollLeft() - 648
                    }, 500);
           }//
           if (direction==="left") {            
            $(this).animate({
                        'scrollLeft': $(this).scrollLeft() + 648
                    }, 500);
           }
        },        
         threshold:0
      });		
 	}else{
 		$(".btn_6prog_02 .carrusel, .btn_6prog_05 .carrusel").swipe( {        
        swipe:function(event, direction, distance, duration, fingerCount) {           
           if (direction==="right") {            
            $(this).animate({
                        'scrollLeft': $(this).scrollLeft() - 325
                    }, 500);
           }//
           if (direction==="left") {            
            $(this).animate({
                        'scrollLeft': $(this).scrollLeft() + 325
                    }, 500);
           }
        },        
         threshold:0
      }); 		
 	}
	
    var lis = $('.btn_6prog_02 .type1a .carrusel ul li');
    var margin = 0;
    var ulWidth = 0;
    for(var i=0; i<lis.length; i++){
        margin += parseInt($(lis[i]).css("margin-left"));
        ulWidth += $(lis[i]).width();
    }
	$(window).load(function(){
		if($(window).width() < 624){var extra = 12;}else{var extra = 0;}
		ancho = ulWidth + margin + extra;
		$(".btn_6prog_02 .type1a .carrusel ul").width(ancho);
		// Sacamos el ancho total del UL del carrusel
		anchoTotalUL = $(".btn_6prog_02 .type1a .carrusel ul").width(); // 100%
	});

	// sacamos cuantas imagenes
	//var totalImagenes = $(".btn_6prog_02 .type1a .carrusel ul").length;
	
	// Sacamos el ancho total del UL del carrusel
	var anchoTotalUL = $(".btn_6prog_02 .type1a .carrusel ul").width(); // 100%
	
	
	var bulletSelected;
	var scrollLeft;
	
	if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
		var anchoVentna = document.body.offsetWidth;
		//alert($.width());
		//alert(document.body.offsetWidth);
	}
	else{
		var anchoVentna =  $(window).width();
	}
	
	
	$('.btn_6prog_02 .type1a .carrusel').scroll(function(e){
		var $widthT = $('.btn_6prog_02 .type1a .carrusel').scrollLeft() + $('.btn_6prog_02 .type1a .carrusel').width();
		$('.btn_6prog_02 .type1a .carrusel ul').width();
		if($(this).scrollLeft()==0){
			$('.btn_6prog_02 .carouselArrowLeft i').addClass('inactive');
			// $('.btn_6prog_02 .carouselArrowLeft i').removeClass('arrow_active');	
		}
		else{
			$('.btn_6prog_02 .carouselArrowLeft i').removeClass('inactive');
			// $('.btn_6prog_02 .carouselArrowLeft i').addClass('arrow_active');	
		}
		
		
		if($widthT>=$('.btn_6prog_02 .type1a .carrusel ul').width()){
			$('.btn_6prog_02 .carouselArrowRight i').addClass('inactive');
			// $('.btn_6prog_02 .carouselArrowRight i').removeClass('arrow_active');	
		}
		else{
			$('.btn_6prog_02 .carouselArrowRight i').removeClass('inactive');
			// $('.btn_6prog_02 .carouselArrowRight i').addClass('arrow_active');	
		}

		if ($(window).width()<624){
			scrollLeft = $(this).scrollLeft()  + (anchoVentna/2.5) ;
			var porcentaje =  ( scrollLeft * 100) / anchoTotalUL; 
			if( scrollLeft <= 320)
				bulletSelected = 1;
			else if( scrollLeft >= 321 && scrollLeft <= 630)
				bulletSelected = 2;
			else if( scrollLeft >= 630 && scrollLeft <= 940)
				bulletSelected = 3;
			else if( scrollLeft >= 940 && scrollLeft <= 1250)
				bulletSelected = 4;
			else if( scrollLeft >= 1250 && scrollLeft <= 1560)
				bulletSelected = 5;
			else 
				bulletSelected = 6;
			$(this).parents('.type1a').siblings('.bullets').find('li').removeClass('background-color1');
			
			$(this).parents('.type1a').siblings('.bullets').find('li:nth-child('+bulletSelected+')').addClass('background-color1');
		}else{
			scrollLeft = $(this).scrollLeft()  + (anchoVentna/2.5) ;
			var porcentaje =  ( scrollLeft * 100) / anchoTotalUL; 
			if( scrollLeft <= 520)
				bulletSelected = 1;
			else if( scrollLeft >= 520 && scrollLeft <= 980)
				bulletSelected = 2;
			else 
				bulletSelected = 3;
			$(this).parents('.type1a').siblings('.bullets').find('li').removeClass('background-color1');
			
			$(this).parents('.type1a').siblings('.bullets').find('li:nth-child('+bulletSelected+')').addClass('background-color1');
		}
    });

});;jQuery(function($){ 
    (function(T, $) {
		$('.mix_12arts_02 .str_pleca_01 .ocultar a').click(function(event){
			var parent = $(this).closest('.mix_12arts_02');			
			event.preventDefault();			
			$(parent).find(' .type1a_').toggle();
			$(parent).find(' .nav_paginator_01').toggle();
			$(parent).find(' .str_pleca_01 .ocultar').hide();
			$(parent).find(' .str_pleca_01 .mostrar').show();
			//$(parent).find('.str_pleca_01').css('margin-bottom','36px');
			$(parent).css('margin-bottom','36px');
			$(parent).height('33px');
		});
		
		$('.mix_12arts_02 .str_pleca_01 .mostrar a').click(function(event){
			var parent = $(this).closest('.mix_12arts_02');
			event.preventDefault();			
			$(parent).find('.type1a_').toggle();
			$(parent).find('.nav_paginator_01').toggle();
			$(parent).find('.str_pleca_01 .ocultar').show();
			$(parent).find('.str_pleca_01 .mostrar').hide();
			//$(parent).find('.str_pleca_01').css('margin-bottom','24px');
			$(parent).css('margin-bottom','25px');
			$(parent).height('auto');
		});
		/*Versi??n touch*/
		$('.mix_12arts_02 .str_pleca_01 .ocultar a').on('touchstart', 'a', function(e){
			event.preventDefault();
			var parent = $(this).closest('.mix_12arts_02');			
			event.preventDefault();			
			$(parent).find(' .type1a_').toggle();
			$(parent).find(' .nav_paginator_01').toggle();
			$(parent).find(' .str_pleca_01 .ocultar').hide();
			$(parent).find(' .str_pleca_01 .mostrar').show();
			//$(parent).find('.str_pleca_01').css('margin-bottom','36px');
			$(parent).css('margin-bottom','36px');
			$(parent).height('33px');
		});
		$('.mix_12arts_02 .str_pleca_01 .mostrar a').on('touchstart', 'a', function(e){
			event.preventDefault();
			var parent = $(this).closest('.mix_12arts_02');
			event.preventDefault();			
			$(parent).find('.type1a_').toggle();
			$(parent).find('.nav_paginator_01').toggle();
			$(parent).find('.str_pleca_01 .ocultar').show();
			$(parent).find('.str_pleca_01 .mostrar').hide();
			//$(parent).find('.str_pleca_01').css('margin-bottom','24px');
			$(parent).css('margin-bottom','25px');
			$(parent).height('auto');
		});
		$('.mix_12arts_02 .background-color-pleca1').on('touchstart', function(e){
			event.preventDefault();
		});
		if($(window).width()<624){
			$('.mix_12arts_02 .dotted-add').removeClass('dotted-bottom');
		}

		$(window).resize(function() {
   			if($(window).width()<624){
				$('.mix_12arts_02 .dotted-add').removeClass('dotted-bottom');
			}
		});
		
		var start = function(param){
			var parent = $(param).closest('.mix_12arts_02');		
			$(parent).find(' .type1a_').toggle();
			$(parent).find(' .nav_paginator_01').toggle();
			$(parent).find(' .str_pleca_01 .ocultar').hide();
			$(parent).find(' .str_pleca_01 .mostrar').show();
			$(parent).css('margin-bottom','36px');
			$(parent).height('33px');
		}

		start('.mix_12arts_02 .str_pleca_01 .ocultar a');				
			
			
	}(Televisa, jQuery));
});;jQuery(function($){ 
    (function ($, T) {
        var $m = $('.wdg_mix_carrousa div:last-child'),
        animationDelay = 500;
        
        var $w = $('.wdg_mix_carrousa div:last-child ul li');
        var $count = 0;
        
        $w.each(function() {
            $count ++;
        });
        
        $m.each(function() {
            var $total = 160;
            if( $count <= 2){
               $total = 60; 
            }
            var $items = $(this).find('ul li'),
            padding = ($(this).parent().hasClass('wdg_mix_carrousa')) ? 41 : 24,
            Pointer = {
                UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
            },
            $parent = $(this);

           
			/*Anchura........*/
			//alert($(window).width());			
            if( $(window).width() > 960  ){
				$('.carrusel-sizes').width('956px');
			}
			if( $(window).width() >= 624 && $(window).width() <= 960  ){
				$('.carrusel-sizes').width('956px');			
			}
			if( $(window).width() < 624 ){
				$('.carrusel-sizes').width('956px');
				//$('.carrusel-sizes').width($(window).width());
			}
			/*Default*/
			
			
            if (/Android|iPhone|iPod|iPad/.test(navigator.userAgent) && // If it's an iPad, iPod or iPhone
                !(/OS [2-4]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent))) { // And the version of the OS is bigger than 4.x...
                $(this).addClass('iOS');
            } else {
                    
                // Touch devices (non-iOS or iOS < 5)
                var isWinPhone = /Windows Phone/.test(navigator.userAgent);

                if (T.getIsTouchDevice() && !T.isBlackBerryCurve()) {

                    // Hide the arrows if it's not carouseltype1b
                    /*if (!$(this).parent().hasClass('wdg_mix_carrousa')) {
					$(this).parent().find('div:first-child ul').hide();
				}*/

                    $(this).bind('touchstart', function(e) {
                        var clientX = e.originalEvent.changedTouches[0].clientX;

                        $(this).attr('startX', clientX);
                        $(this).attr('down', true);
                        $(this).attr('scrollLeft', $(this).scrollLeft());
                    });

                    $(this).bind('touchend', function(e) {
                        if ($(this).attr('active') === 'true') {
                            e.preventDefault();
                            e.stopPropagation();
                        }

                        $(this).attr('active', false);
                        $(this).attr('down', false);
                    });

                    $(this).bind('touchmove', function(e) {
                                        
                                        
                        var clientX = e.originalEvent.changedTouches[0].clientX,
                        sx = $(this).attr('startX') >> 0,
                        ex = clientX;

                        if (Math.abs(sx - ex) > 10) {
                            $(this).attr('active', true);
                        }

                        if ($(this).attr('active') === 'true') {
                            e.preventDefault();

                            $(this).scrollLeft(($(this).attr('scrollLeft') >> 0) + (sx - ex));
                        }

                        return false;
                    });
                } else {
                    // Force the arrows to show up
                    $(this).parent().addClass('showArrows');
                }
            }

            // Support the click event on arrows
            $parent.parent().find('a.wdg_carousa_left').click(function(e) {
                e.preventDefault();
				if( $(window).width() >= 624 && $(window).width() <= 960  ){
					$parent.animate({
						'scrollLeft': $parent.scrollLeft() - 325
					}, animationDelay);
				}else
				{
					$parent.animate({
						'scrollLeft': $parent.scrollLeft() - 325
					}, animationDelay);
					
				}
                        
            });

            $parent.parent().find('a.wdg_carousa_right').click(function(e) {
                e.preventDefault();
				if( $(window).width() >= 624 && $(window).width() <= 960  ){
					$parent.animate({
						'scrollLeft': $parent.scrollLeft() + 325
					}, 500);
				}else
				{
					$parent.animate({
                    'scrollLeft': $parent.scrollLeft() + 325
                	}, 500);
				}
            });

        });

		/*Diferente ventana*/
		$(window).resize(function() {
			if( $(window).width() > 960  ){
				$('.carrusel-sizes').width('900px');
			}
			if( $(window).width() > 624 && $(window).width() < 960  ){
				$('.carrusel-sizes').width('900px');
			}
			if( $(window).width() < 624 ){
				$('.carrusel-sizes').width('900px');
				//$('.carrusel-sizes').width($(window).width());
			}
		});
		/*Swipe*/

		$(".vid_4vids_04 .wdg_mix_carrousa .general, .vid_4vids_03 .wdg_mix_carrousa .general").swipe( {        
        swipe:function(event, direction, distance, duration, fingerCount) {           
           if (direction==="right") {            
            $(this).animate({
                        'scrollLeft': $(this).scrollLeft() - 320
                    }, 500);
           }//
           if (direction==="left") {            
            $(this).animate({
                        'scrollLeft': $(this).scrollLeft() + 320
                    }, 500);
           }
        },        
         threshold:0
      });

					
		/*Monitoreo scroll*/
	$('.vid_4vids_04 .general').scroll(function() {
		/*Horizontal*/
		var $v43_position = $(this).scrollLeft();
		var $v43_med = $v43_position;
		if($v43_position == 0){
			$(this).siblings('.vid_4vids_04_title').children('.arrows').children().children().children('.tvsa-double-caret-left').addClass('inactive');
				$(this).parents('.vid_4vids_04').children('.bullets').children().removeClass();
				$(this).parents('.vid_4vids_04').children('.bullets').children().eq(0).addClass('background-color1');
		}
		else{
		$(this).siblings('.vid_4vids_04_title').children('.arrows').children().children().children('.tvsa-double-caret-left').removeClass('inactive');
		$(this).siblings('.vid_4vids_04_title').children('.arrows').children().children().children('.tvsa-double-caret-right').removeClass('inactive');
		$(this).parents('.vid_4vids_04').children('.bullets').children().removeClass();
		$(this).parents('.vid_4vids_04').children('.bullets').children().eq(1).addClass('background-color1');
		}
		if($v43_med > 350){
		$(this).siblings('.vid_4vids_04_title').children('.arrows').children().children().children('.tvsa-double-caret-right').addClass('inactive');
		$(this).parents('.vid_4vids_04').children('.bullets').children().removeClass();
		$(this).parents('.vid_4vids_04').children('.bullets').children().eq(2).addClass('background-color1');
		}
		/*Vertical*/
		var $v43_alt = $(this).children('.carrusel-sizes').height();
		var $v43_position2 = $(this).scrollTop();
		var $v43_med2 = $v43_position2 + $(this).height();
		if($v43_med2 == $v43_alt ){
			$(this).parent().siblings('.degraded').css("visibility","hidden");
		}
		else{
			$(this).parent().siblings('.degraded').css("visibility","visible");
		}
		//console.log('Scroll: '+$v43_position2+' suma: '+$v43_med2+' alt_tot: '+$v43_alt);
	});
	
	$('.vid_4vids_04 .general').bind("touchmove",function(event){
    event.preventDefault();
    });
		
		/*Ver m??s modo mobile*/
		/*$('.vid_4vids_04 .vid_4vids_04_verMas').click(function(event){
            event.preventDefault();
			$('.vid_4vids_04 .carrusel-sizes > div').show();
			altura = $('.vid_4vids_04 .carrusel-sizes').height();
			altura = altura + 40;
            $('.vid_4vids_04').css('height',altura);
            $('.vid_4vids_04 .vid_4vids_04_verMas').hide();
		});*/
		
    }(jQuery, Televisa));
});

/**
 * 
 *         @todo add hash to a pages' URL in order to load a specific image upon pageload (so that one can share links)
 *         the structure would need to be '%component% %album% %image%'
 *         %component% is the n-th occurence of the component within a page - must be a unique ID
 *         %album% the number of the album
 *         %image% the number of the image
 *         
 *         @todo autoplay
 *         @todo expand links
 *         @todo swipe implementation based on: @see http://www.awwwards.com/demo/touchSwipe-gallery-demo.html
 *         @todo device tests
 */

var IMG_WIDTH = 465;
var currentImg=0;
var maxImages=2;
var speed=500;
var imgs;


/**
 * all gallery related behavior
 */
function img_galry_04_init() {
	// this function is fired upon resize, so we need to unbind each listener
	// in order not to have multiple listeners per dom element
	
	$("div.img_galry_04").each(function(){
		
		/** general configuration - patterns to be replaced in file names:
	    var rendition;
	    rendition['thumb'] = '64.48';
	    rendition['image'] = '624.450';
	    rendition['album'] = '137.105';
	    **/
	
		var rendition = new Array();
	    rendition['thumb'] = 'thumb';
	    rendition['image'] = 'image';
	    rendition['album'] = 'album';
	
	    
	    $parent = $(this);
	    var carousel = $parent;
	    $parent.attr({'data-album':0,'data-image':0});
	    var data = jQuery.parseJSON($parent.find('span.data').text());
	    
	    $parent.find('span.loading').hide();
	    
	    // if we are in mobile: make sure only 3 thumbs are visible onload
	    if ($(window).width() < 624) {
	    	$parent.find('div.carrusel1 li:gt(2)').hide();
	        $parent.find('div.img_galry_04_verMas a').addClass('hidden');
	    } else {
	    	$parent.find('div.carrusel1 li:gt(2)').show().removeClass('hidden');
	    }
	    
	    // Ver m??s
	    $parent.find('div.img_galry_04_verMas a').unbind();
	    $parent.find('div.img_galry_04_verMas a').click(function(){
	        $parent.find('div.carrusel1 li:gt(2)').toggle();
	        if ($(this).hasClass('hidden')) {
	            $(this).text('Ocultar').removeClass('hidden');
	        } else {
	            $(this).text('Ver m??s').addClass('hidden')
	        }
	        return false;
	    });
	    
	    // click event (only in tablet and desktop)
	    if ($(window).width() > 623) {
	    	$parent.find('ul.ulcarrusel').unbind();
	    	
	    	var swipeOptions={
	    		triggerOnTouchEnd : true,	
	    		swipeStatus : swipeStatus,
	    		allowPageScroll:"vertical",
	    		threshold:75
	    	}
	    	//$parent.find("div.carrusel1 ul.ulcarrusel").swipe(swipeOptions);
	    	//$parent.find("div.carrusel2 ul.ulcarrusel").swipe(swipeOptions);
	    	
	        $parent.find('ul.ulcarrusel').on('click', 'a', function(e){
	            // general
	            var pos = $(this).data('pos');
				var link_img = $(this).attr('href');
				$('.img_galry_04 .expand').attr('href',link_img);
	            if ($(this).hasClass('album')) {
	                // album
	                $parent.find('a.album').removeClass('active');
	                $(this).addClass('active');
	                $parent.find('span.loading').fadeIn(200);
	                
	                var firstimage = data[pos].images[0].path,
	                desc = data[pos].images[0].description;
	                
	                //console.log(firstimage);
	                //console.log(desc);
	                
	                $parent.find("img.mainimage:eq(0)").on('load', function() {
	                    //console.log($parent.find('div.image-container div.overlay > p:eq(0)').text());
	                    
	                	$parent.find('div.image-container div.overlay > p:eq(0)').text(desc);
	                    $parent.attr('data-album', pos).find('span.loading').hide();
	                    // replace carousel1 with the albums' images
	                    var html = '', src, desc;
	                    $parent.find('p.imageDescription').text(desc);
	                    for (var i=0;i<data[pos].images.length;i++) {
	                        var active = '';
	                        if (i===0) {
	                            active=' active';
	                        }

	                        // add the real link to the final page
	                        html += '<li>'+
	                                    '<a href="' + data[pos].images[i].expandurl + '" class="image' + active + '" data-pos="' + i + '">'+
	                                        '<img src="' + data[pos].images[i].path + '" width="64" height="48" alt="" class="" />'+
	                                        '<span class="border"></span>'+
	                                        '<span class="icon"><i class="tvsa-camera"></i></span>'+
	                                        '<span class="title">' + data[pos].images[i].description + '</span>'+
	                                    '</a>'+
	                                '</li>';
	                    }
	                    $parent.find('div.carrusel1 ul.ulcarrusel').html(html);
	                    $parent.find('p.imageDescription').text(data[pos].images[0].description); // update desc to first image
	                    $parent.find('a.expand').attr({
	                    	'href': data[pos].images[0].expandurl,
	                    	'title' : data[pos].images[0].description
	                    }); // update expand link to detail URL
	                }).attr("src", firstimage).each(function() {
	                    if(this.complete) {
	                        $(this).load();
	                    }
	                });
	            } else {
	                // image
	                $parent.find('a.image').removeClass('active');
	                $(this).addClass('active');
	                var src = $(this).find('img:eq(0)').attr('src').replace(rendition['thumb'],rendition['image']),
	                desc = $(this).find('span.title:eq(0)').text();
	                // making sure an image is loaded before showing it
	                $parent.find('span.loading').fadeIn(200);
	                $parent.find("img.mainimage:eq(0)").on('load', function() {
	                    $parent.find('div.image-container div.overlay > p:eq(0)').text(desc);
	                    $parent.find('a.expand').attr({
	                    	'href': $(this).attr('href'),
	                    	'title' : desc
	                    }); // update expand link to detail URL
	                    $parent.attr('data-image', pos).find('span.loading').hide();
	                }).attr("src", src).each(function() {
	                    if(this.complete) {
	                        $(this).load();
	                    }
	                });
	            }
	            return false;
	        });
			/*BEGIN:Evento touch*/
			 $parent.find('ul.ulcarrusel').on('touchstart', 'a', function(e){
				 e.preventDefault();
	            // general
	            var pos = $(this).data('pos');
				var link_img = $(this).attr('href');
				$('.img_galry_04 .expand').attr('href',link_img);
	            if ($(this).hasClass('album')) {
	                // album
	                $parent.find('a.album').removeClass('active');
	                $(this).addClass('active');
	                $parent.find('span.loading').fadeIn(200);
	                
	                var firstimage = data[pos].images[0].path,
	                desc = data[pos].images[0].description;
	                
	                //console.log(firstimage);
	                //console.log(desc);
	                
	                $parent.find("img.mainimage:eq(0)").on('load', function() {
	                    //console.log($parent.find('div.image-container div.overlay > p:eq(0)').text());
	                    
	                	$parent.find('div.image-container div.overlay > p:eq(0)').text(desc);
	                    $parent.attr('data-album', pos).find('span.loading').hide();
	                    // replace carousel1 with the albums' images
	                    var html = '', src, desc;
	                    $parent.find('p.imageDescription').text(desc);
	                    for (var i=0;i<data[pos].images.length;i++) {
	                        var active = '';
	                        if (i===0) {
	                            active=' active';
	                        }

	                        // add the real link to the final page
	                        html += '<li>'+
	                                    '<a href="' + data[pos].images[i].expandurl + '" class="image' + active + '" data-pos="' + i + '">'+
	                                        '<img src="' + data[pos].images[i].path + '" width="64" height="48" alt="" class="" />'+
	                                        '<span class="border"></span>'+
	                                        '<span class="icon"><i class="tvsa-camera"></i></span>'+
	                                        '<span class="title">' + data[pos].images[i].description + '</span>'+
	                                    '</a>'+
	                                '</li>';
	                    }
	                    $parent.find('div.carrusel1 ul.ulcarrusel').html(html);
	                    $parent.find('p.imageDescription').text(data[pos].images[0].description); // update desc to first image
	                    $parent.find('a.expand').attr({
	                    	'href': data[pos].images[0].expandurl,
	                    	'title' : data[pos].images[0].description
	                    }); // update expand link to detail URL
	                }).attr("src", firstimage).each(function() {
	                    if(this.complete) {
	                        $(this).load();
	                    }
	                });
	            } else {
	                // image
	                $parent.find('a.image').removeClass('active');
	                $(this).addClass('active');
	                var src = $(this).find('img:eq(0)').attr('src').replace(rendition['thumb'],rendition['image']),
	                desc = $(this).find('span.title:eq(0)').text();
	                // making sure an image is loaded before showing it
	                $parent.find('span.loading').fadeIn(200);
	                $parent.find("img.mainimage:eq(0)").on('load', function() {
	                    $parent.find('div.image-container div.overlay > p:eq(0)').text(desc);
	                    $parent.find('a.expand').attr({
	                    	'href': $(this).attr('href'),
	                    	'title' : desc
	                    }); // update expand link to detail URL
	                    $parent.attr('data-image', pos).find('span.loading').hide();
	                }).attr("src", src).each(function() {
	                    if(this.complete) {
	                        $(this).load();
	                    }
	                });
	            }
	            return false;
	        });
			/*END:Evento touch*/
			
	        // left-right arrows
	        var carousel = $(this).parents('div:eq(1)').find('ul.ulcarrusel');
	        $parent.find("a.left").click(function(){
				$(this).parent().siblings('carruselcontainer').animate({
						'scrollLeft': $(this).scrollLeft() + 455
					}, 500);
	        });
	        $parent.find("a.right").click(function(){
	        	$(this).parent().siblings('carruselcontainer').animate({
						'scrollLeft': $(this).scrollLeft() - 455
					}, 500);
	        });
			// left-right arrows touch
			 $parent.find("a.left").bind('touchstart',function(e) {
				 event.preventDefault();
				$(this).parent().siblings('.carruselcontainer').animate({
						'scrollLeft': $(this).scrollLeft() - 455
					}, 500);
	        });
	        $parent.find("a.right").bind('touchstart',function(e) {
				event.preventDefault();
	        	$(this).parent().siblings('.carruselcontainer').animate({
						'scrollLeft': $(this).scrollLeft() + 455
					}, 500);
	        });
			
	    } else {
	    	return true;
	    }
		
		//Monitoreo evento touch
		//touchmove "Mientras se mueve"
		//touchstar "Inicia"
		//touchend "Termina"
		$parent.find('.mainimage').bind("touchstart",function(event){
			event.preventDefault();
			$parent.find('.twitter').toggle();
    		$parent.find('.facebook').toggle();
    		$parent.find('.pinterest').toggle();
		});
		
	});
}

/**
* Catch each phase of the swipe.
* move : we drag the div.
* cancel : we animate back to where we were
* end : we animate to the next image
*/			
function swipeStatus(event, phase, direction, distance, carousel) {
	if (currentImg === "undefined") currentImg = 0;
	// If we are moving before swipe, and we are going Lor R in X mode, or U or D in Y mode then drag.
	if( phase=="move" && (direction=="left" || direction=="right") ) {
		var duration=0;
		if (direction == "left") {
			scrollImages((IMG_WIDTH * currentImg) + distance, duration, carousel);
		} else if (direction == "right") {
			scrollImages((IMG_WIDTH * currentImg) - distance, duration, carousel);
		}
	} else if ( phase == "cancel") {
		scrollImages(IMG_WIDTH * currentImg, speed, carousel);
	} else if ( phase =="end" ) {
		if (direction == "right") {
			previousImage(carousel);
		} else if (direction == "left") {
			nextImage(carousel);
		}
	}
}

/**
 * go to next image
 * @param carousel
 */
function previousImage(carousel) {
	if (currentImg === "undefined") currentImg = 0;
	currentImg = Math.max(currentImg-1, 0);
	scrollImages( IMG_WIDTH * currentImg, speed, carousel);
}

/**
 * go to previous image
 * @param carousel
 */
function nextImage(carousel) {
	if (currentImg === "undefined") currentImg = 0;
	currentImg = Math.min(currentImg+1, maxImages-1);
	scrollImages( IMG_WIDTH * currentImg, speed, carousel);
}
function carru_next(run){
	img_f1_delay = 3000;
	findNextImgGallery(1);
}
function carru_stop(){
	run = 0;
	img_f1_delay = 99999999999999999;
}
function ply_mov(){
	$('div.img_galry_04 .image-container a.td_bg.play').hide();
	$('div.img_galry_04 .image-container a.td_bg.pause_mov').css('visibility','visible');
	carru_next();
}
function pause_mov(){
	$('div.img_galry_04 .image-container a.td_bg.pause_mov').css('visibility','hidden');
	$('div.img_galry_04 .image-container a.td_bg.play').show();
	carru_stop();
}
// funciones que encuentra la siguiente y anterior imagen al hacer click tomando en cuenta la que est?? YA seleccionada
function findPrevImgGallery(run){
// Buscamos la imagen anterior
	//Verifico si era el fin del carril...
	$order_list = $('.img_galry_04 a.image.active').parent().index();
	if($order_list != 0)
	{
var txt = $('.img_galry_04 a.image.active').closest('li').prev().find('a').attr('title');
var img_n = $('.img_galry_04 a.image.active').closest('li').prev().find('a').children('img').attr('src');
$('.img_galry_04 a.image.active').addClass('e');
$('.img_galry_04 a.image.active').closest('li').prev().find('a').addClass('active');
$('.img_galry_04 a.image.active.e').removeClass('active e');
img_n = img_n.replace("thumb", "image");
	$('.img_galry_04 p.imageDescription').text(txt);
	$('.img_galry_04 .mainimage').attr('src',img_n);
		//Llamada con autoplay
		if(run == 1){
			setTimeout("findPrevImgGallery(1)", img_f1_delay);	
		}
	}
	else
	{
		if(run == 1){
			setTimeout("findNextImgGallery(2)", img_f1_delay);	
		}
	}
}

function findNextImgGallery(run){
// Buscamos la siguiente imagen
    var txt = null;
	//Move scroll
	$('.img_galry_04 .carruselcontainer').animate({
								'scrollLeft': $('.img_galry_04 .carruselcontainer').scrollLeft() + 77
							}, 1500);
	//Llego al final vuelta al carrusel
	if(run==2){
		$('.img_galry_04 a.image.active').removeClass('active');
		$('.img_galry_04 a.image').eq(0).addClass('active');
		txt = $('.img_galry_04 a.image.active').attr('title');
		var img_n = $('.img_galry_04 a.image.active').children('img').attr('src');
		var img_n = img_n.replace("thumb", "image");
		var link_img = $('.img_galry_04 a.image.active').attr('href');
		$('.img_galry_04 .mainimage').attr('src',img_n);
		setTimeout(function(){
				  $('.img_galry_04 p.imageDescription').text(txt);
				}, 50);
		$('.img_galry_04 .expand').attr('href',link_img);
		$('.img_galry_04 .carruselcontainer').animate({
								'scrollLeft': 0
							}, 500);
		setTimeout("findNextImgGallery(1)", img_f1_delay);
	}
//Verifico si era el fin del carril...
	$large_elements = $('.img_galry_04 ul.ulcarrusel li').size() - 1;
	$order_list = $('.img_galry_04 a.image.active').parent().index();
	if($order_list != $large_elements && run != 2)
	{
var img_n = $('.img_galry_04 a.image.active').closest('li').next().find('a').children('img').attr('src');
var txt = $('.img_galry_04 a.image.active').closest('li').next().find('a').attr('title');
var link_img = $('.img_galry_04 a.image.active').closest('li').next().find('a').attr('href');
$('.img_galry_04 a.image.active').addClass('e');
$('.img_galry_04 a.image.active').closest('li').next().find('a').addClass('active');
$('.img_galry_04 a.image.active.e').removeClass('active e');
img_n = img_n.replace("thumb", "image");
	//alert(img_n);
	$('.img_galry_04 .image-container .mainimage').attr('src',img_n);
	//alert($('.img_galry_04 .image-container .mainimage').attr('src'));
	//alert(txt);
	setTimeout(function(){
				  $('.img_galry_04 p.imageDescription').text(txt);
				}, 50);
	$('.img_galry_04 .expand').attr('href',link_img);
	//$('.img_galry_04 p.imageDescription').text(txt);
	
	
		//Llamada con autoplay
		if(run == 1){
			setTimeout(function(){
				  findNextImgGallery(1);
				}, img_f1_delay);	
		}
	}
	else
	{
		if(run == 1){
			setTimeout("findNextImgGallery(2)", img_f1_delay);	
		}
	}
}




$(document).ready(function(){
    // making sure that this works even if there's two or more of this component in a page...
    img_galry_04_init();
    
    if($(window).width()<431){
        $('div.img_galry_04 .overlay').css('margin-top','-72px')
    }
    $(window).resize(function() {
    	if($(window).width()<431){
     	   $('div.img_galry_04 .overlay').css('margin-top','-72px')
   		}	
   		else{
   			$('div.img_galry_04 .overlay').css('margin-top','-56px')
   		}

    });
    if($(window).width()<624){
        $('.img_galry_04 .txt1').removeClass('dotted-right');
        $('.img_galry_04 .txt1').addClass('dotted-bottom');
    }
	//swipe
			$(this).find('.carruselcontainer').bind('swipeleft',function(){
				$(this).animate({
								'scrollLeft': $(this).scrollLeft() + 455
							}, 500);
			});
			$(this).find('.carruselcontainer').bind('swiperight',function(){
				$(this).animate({
								'scrollLeft': $(this).scrollLeft() - 455
							}, 500);
			});
			
	//swipe principal
		var $list = $('.img_galry_04').find('ul.ulcarrusel li').size();
			$(this).find('.mainimage').bind('swipeleft',function(){
				$order_list2 = $(this).parent().parent().find('a.image.active').parent().index();
				$large_elements2 = $('.img_galry_04 ul.ulcarrusel li').size() - 1;
				if($large_elements2 == $order_list2){$('.img_galry_04 a.right').trigger( "click" );}
				findNextImgGallery(0);
				$('.img_galry_04 .carruselcontainer').animate({
								'scrollLeft': $('.img_galry_04 .carruselcontainer').scrollLeft() + 77
							}, 500);
			});
			$(this).find('.mainimage').bind('swiperight',function(){
				findPrevImgGallery(0);
				$('.img_galry_04 .carruselcontainer').animate({
								'scrollLeft': $('.img_galry_04 .carruselcontainer').scrollLeft() - 77
							}, 500);
			});
	//swipe secundario
			$(this).find('.carruselcontainer').bind('swipeleft',function(){
				$(this).animate({
								'scrollLeft': $(this).scrollLeft() + 455
							}, 500);
			});
			$(this).find('.carruselcontainer').bind('swiperight',function(){
				$(this).animate({
								'scrollLeft': $(this).scrollLeft() - 455
							}, 500);
			});			
	// scroll
	$(this).find('.carruselcontainer').scroll(function() {
		var $ig4_position = $(this).scrollLeft();
		var $id4_med = $ig4_position + $(this).width();
		var $id4_lt = $(this).children().width(); 
		if($ig4_position == 0){
			$(this).siblings('.arrowLeft').children().children('.tvsa-double-caret-left').css('color','#BABABA');
		}
		else{
			$(this).siblings('.arrowLeft').children().children('.tvsa-double-caret-left').css('color','#000000');
		}
		if($id4_med == $id4_lt){
			$(this).siblings('.arrowRight').children().children('.tvsa-double-caret-right').css('color','#BABABA');
		}
		else{
			$(this).siblings('.arrowRight').children().children('.tvsa-double-caret-right').css('color','#000000');
		}
		//console.log('scroll: '+$ig4_position+' suma: '+$id4_med+' large: '+$id4_lt);
	});
    $(window).resize(function() {
    	if($(window).width()<624){
     	   	$('.img_galry_04 .txt1').removeClass('dotted-right');
        	$('.img_galry_04 .txt1').addClass('dotted-bottom');
   		}	
   		else{
        	$('.img_galry_04 .txt1').removeClass('dotted-bottom');
   			$('.img_galry_04 .txt1').addClass('dotted-right');
   		}
    });
	$parent.find('a.play').click(function(e){
	   e.preventDefault();
       ply_mov();
	});
	$parent.find('a.pause_mov').click(function(){
        pause_mov();
	});
});
$(window).load(function(){
//whidth
			var $elements = $('.img_galry_04').find('ul.ulcarrusel li').size();
			var $elements = ($elements * 78) - 16;
			$('.img_galry_04').find('ul.ulcarrusel').addClass('my');
			$('.img_galry_04').find('.my').width($elements); 

});

$(window).resize(function(){
	if ($(window).width() < 624 && $('body:eq(0)').data('viewport') > 623) {
		// mobile reached
//		console.log('firing the init.');
		img_galry_04_init();
	}
	if ($(window).width() >= 624) {
		// tablet and desktop reached
		img_galry_04_init();
	}
	$('body:eq(0)').attr('data-viewport',$(window).width());
});/*$(document).ready(function(e) {
	
	$(window).resize(function() {	
			if( $(window).width() < 624){
				//Nothing
			}
			else
			{
			    $('.collapsable').siblings().show();
			}
	});
	
	$('.collapsable').on('click',function(e){
		e.preventDefault();
		$(this).siblings().slideToggle('slow');
		$(this).find('i').toggleClass('tvsa-caret-down','tvsa-caret-up');
		var add = $(this).parent().attr('class');
		var directo = $('.'+add+' .str_pleca_01').css('margin-bottom');
		//console.log("Margin-bottom antes vale: " +add+ " bottom: " +directo);
		if(directo == "0px")
		{
			$('.'+add+' .str_pleca_01').css('margin-bottom',0);
		}
		else
		{
			$('.'+add+' .str_pleca_01').css('margin-bottom',0);
		}
		//console.log("Margin-bottom despues vale: " +add+ " bottom: " +directo);
	});	
});*/$(document).ready(function() {	

	// Quitamos la imagen que pone el script: http://comentarios.esmas.com/js/communities.js (redes sociales)
	$(window).load(function() {
		$('img[src*="vistas/spacer.gif"]').hide();
		$('#social_mailing').hide();
	});

});$(document).ready(function() {
	var $nav_footer_retorna = 0;
	$('.nav_footer_01 .icon-social').bind('touchstart', function(e) {
		e.preventDefault();
	});
	$('.nav_footer_01 .back').click(function(e) {
        e.preventDefault();
		jQuery('body,html').animate({
					scrollTop: 0
					}, 800);
					return false;
	});
});/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ????????? 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ????????? 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
(function ($) {
    var nav_header = {
        speed : 500,
        init : function() {
            nav_header.initTopNav();
            nav_header.initMainNav();
            nav_header.initSearch();
            nav_header.initResize();
        },
        initResize : function() {
            $(window).resize(function(){
                //console.log('resize.');
            });
        },
        initTopNav : function() {
        	if ($(window).width() < 624) {
	        	var nHeight = $('header.nav_header_01 div.topnav div.inner > nav').show().height();
	    		$('header.nav_header_01 div.topnav div.inner > nav').attr('height',nHeight).hide(); // store height
        	}
        	
	        	$('header.nav_header_01 div.topnav div.inner > a.menu').click(function(){
	        		// @todo show submenu in mobile
	        		if ($(this).hasClass('active')) {
	        			// hide
	        			$('header.nav_header_01 div.topnav div.inner > nav').animate({height:0},250,'easeInOutExpo',function(){$(this).hide();});
	        		} else  {
	        			// show
	        			var h = $('header.nav_header_01 div.topnav div.inner > nav').attr('height');
                        
	        			$('header.nav_header_01 div.topnav div.inner > nav').show().css('height',0).animate({height:h+'px'},250,'easeInOutExpo');
	        		}
	        		$(this).toggleClass('active');
	        	});
        	
        	
        	$('header.nav_header_01 div.collapsable-verticals').show();
            $('header.nav_header_01 div.collapsable-verticals div.inner > div').each(function(){

               if ($.browser.msie && parseInt($.browser.version, 10) == 7)
                    $(this).attr('data-height',$(this).innerHeight()-100);
                else
                    $(this).attr('data-height',$(this).innerHeight());
            });
            $('header.nav_header_01 div.collapsable-verticals').hide();
            
            if ($(window).width() > 623) {
            $("header.nav_header_01 div.topnav nav li a").click(function(e){
                var c = $(this).data('collapsable'); // value of data-collapsable="attribute"
                
                var th = $('header.nav_header_01 div.'+c).data('height'); // content height
                //alert(th);
                var active = $(this).parent().hasClass('active');
                var visible = false;
                if ($('header.nav_header_01 div.collapsable-verticals').height() > 0 && $('header.nav_header_01 div.collapsable-verticals').css('display') !== 'none') {
                    visible = true; // test if collapsable is currently opened
                }
                var open = false;
                if (active && visible) {
                    open = true;
                }
                
                // store dom element(s) in order to reuse them without searching the dom again...
                $collapsable = $('header.nav_header_01 div.collapsable-verticals div.collapsable-content.'+c);
                $collapsables = $('header.nav_header_01 div.collapsable-verticals div.collapsable-content');
                
                $(this).parents('ul').find('li').removeClass('active');
                $(this).parent().addClass('active');
                
                // 3 scenarios:
                if (visible) {
                    if ($('header.nav_header_01 div.collapsable-verticals div.collapsable-content.open').hasClass(c)) {
                        nav_header.closeCollapsible(e, $collapsable, $collapsables, c);
                    } else {
                        // show different collapsible
                        $('header.nav_header_01 div.collapsable-verticals div.collapsable-content.open').animate({height:0},header.speed,'easeInOutExpo', function(){
                            $(this).hide().removeClass('open');
                        });
                        $collapsable.addClass('open').css({height:0}).show().animate({height:th+'px'},header.speed,'easeInOutExpo');
                    }
                } else {
                    // show a collapsible
                    $collapsables.removeClass('open');
                    $('header.nav_header_01 div.collapsable-verticals').show();
                    $('header.nav_header_01 div.collapsable-verticals div.collapsable-content').hide();
                    $('header.nav_header_01 div.collapsable-verticals div.'+c).css({height:0}).show().animate({height:th+'px'},header.speed,'easeInOutExpo').show();
                        $collapsable.addClass('open').css({height:0}).show().animate({height:th+'px'},header.speed,'easeInOutExpo',function(){
                    });
                    $(this).parent().addClass('active');
                }
                return false;
            });
            }
        },
        
        closeCollapsible: function(e, col, cols, c){
            col.animate({height:0},650,'easeInOutExpo', function() {
                $(e).hide();
            });
            $('header.nav_header_01 div.collapsable-verticals div.'+c).animate({height:0},header.speed,'easeInOutExpo', function(){
                $(this).hide();
                cols.removeClass('open');
            });
            $('header.nav_header_01 div.topnav ul li').removeClass('active');
        },
        
        initSearch : function() {
            if ( $.browser.msie ) {
                //alert( 'You are using Internet Exploiter v' + $.browser.version );
                /**
                 * @todo add placeholder text for IE (as value)
                 */
            }
            $("header.nav_header_01 div.topnav button.search_submit").click(function(){
                if ($(this).parent().hasClass('open')) {
                    nav_header.closeSearch();
                } else {
                    nav_header.openSearch();
                }
                return false;
            });
        },
        
        initMainNav : function() {
        	$('header.nav_header_01 a:not(header.nav_header_01 nav.social a)').hover(
                function(){
                    nav_header.closeSocialNav();
                }
            );
            $('header.nav_header_01 li').hover(function(){
                $('.header.nav_header_01 .mas-deportes .tvsa-caret-down').show();
            });
            $('header.nav_header_01 div.mainnav a').click(
                function(){
                    nav_header.closeMoreSportsDropdown();
                    nav_header.closeSearch();
                }
            );
            $('header.nav_header_01 div.mainnav nav li a').each(function(){
                var classname = $(this).data('more');
                $('div.collapsable-mainnav').show();
                $(this).attr('data-height',$('div.collapsable-mainnav > div.'+classname).height());
                $('div.collapsable-mainnav').hide();
            });
            
            $("header.nav_header_01 div.mainnav nav li a").click(function(){
                nav_header.closeSearch();
                $(this).parents('div.mainnav').find('li').removeClass('active');
                $(this).parent().addClass('active');
                if ($(this).attr('data-more')) {
                    var classname = $(this).data('more');
                    var myheight = $(this).data('height');
                    
                    if ($(this).hasClass('open') === false) {
                        $('div.collapsable-mainnav, div.collapsable-mainnav > div').show();
                        $('div.collapsable-mainnav > div').hide();
                        $('header.nav_header_01 div.mainnav nav.main li a').removeClass('open').find('i.tvsa-caret-up').removeClass('tvsa-caret-up').addClass('tvsa-caret-down');
                        $('div.collapsable-mainnav div.'+classname).css({height:0}).show().animate({height:myheight+'px'},header.speed,'easeInOutExpo');
                        $(this).addClass('open').find('i').removeClass('tvsa-caret-down').addClass('tvsa-caret-up');
                    } else {
                        $('div.collapsable-mainnav div.'+classname).animate({myheight:0},header.speed,'easeInOutExpo',function(){
                            $('div.collapsable-mainnav, div.collapsable-mainnav > div').hide();
                            $('header.nav_header_01 div.mainnav nav.main li a i.tvsa-caret-up').removeClass('tvsa-caret-up').addClass('tvsa-caret-down');
                        });
                        $(this).removeClass('open');
                    }
                } else {
                    $('div.collapsable-mainnav > div').hide();
                    $('header.nav_header_01 div.mainnav nav.main li a').removeClass('open').find('i.tvsa-caret-up').removeClass('tvsa-caret-up').addClass('tvsa-caret-down');
                }
                return false;
            });
            
            $("header.nav_header_01 div.mainnav nav.social li a").click(function(){
                $(this).parents('div.mainnav').find('li').removeClass('active');
                $(this).parent().addClass('active');
                //return false;
            });
            
            $('header.nav_header_01 div.mainnav nav.social a.toggle').click(function(){
                nav_header.closeSearch();
                if ($(this).hasClass('open')) {
                    nav_header.closeSocialNav();
                } else {
                    nav_header.openSocialNav(this);
                }
                return false;
            });
            
            $('header.nav_header_01 div.collapsable-mainnav nav.tabs a').click(function(){
                var tab = $(this).data('tab');
                $(this).parents('ul').find('li').removeClass('active'); // remove active state from all
                $(this).parent().addClass('active'); // add active state to current
                $(this).parents("div.dropdown-content").find('div.maintab').hide(); // hide all
                $(this).parents("div.dropdown-content").find("div[data-tab='"+tab+"']").show();
                return false;
            });
            
            $('header.nav_header_01 div.collapsable-mainnav ul.subtabs a').click(function(){
                var tab = $(this).data('subtab');
                $(this).parents('ul.subtabs').find('li').removeClass('active'); // remove active state from all
                $(this).parent().addClass('active'); // add active state to current
                $(this).parents("div.maintab:eq(0)").find('div.subtab').hide(); // hide all
                $(this).parents("div.maintab:eq(0)").find("div.subtab[data-subtab='"+tab+"']").show();
                return false;
            });
        },
        
        openSocialNav : function(e) {
            nav_header.closeSearch();
            $('header.nav_header_01 div.mainnav nav.social ul').show();
            $(e).find('i').removeClass('tvsa-double-caret-down').addClass('tvsa-double-caret-up');
            $(e).addClass('open');
        },
        
        closeSocialNav : function() {
            $('header.nav_header_01 div.mainnav nav.social ul').hide();
            $('header.nav_header_01 div.mainnav nav.social a.toggle').removeClass('open').find('i').removeClass('tvsa-double-caret-up').addClass('tvsa-double-caret-down');
        },
        closeMoreSportsDropdown : function () {
            $('header.nav_header_01 div.mainnav nav.main li').removeClass('active');
        },
        
        openSearch : function() {
        	if ($(window).width() < 624) {
//        		$('form.site_search').addClass('open').find("input.search_term:eq(0)").show().animate({height:'36px'},150,'easeInOutExpo',function(){
//	            }).focus();
        		$('form.site_search').addClass('open').find("input.search_term:eq(0)").show().focus();
        	} else {
	        	$('form.site_search').addClass('open').find("input.search_term:eq(0)").show().animate({width:'180px'},150,'easeInOutExpo',function(){
	            }).focus();
        	}
            nav_header.closeSocialNav();
        },
        
        closeSearch : function() {
        	if ($(window).width() < 624) {
//        		$('form.site_search').removeClass('open').find("input.search_term:eq(0)").animate({height:'0'},150,'easeInOutExpo',function(){
//                    $(this).hide();
//                });
        		$('form.site_search').removeClass('open').find("input.search_term:eq(0)").slideUp(333,'easeInOutExpo').blur();
        	} else {
        		$('form.site_search').removeClass('open').find("input.search_term:eq(0)").animate({width:'0'},150,'easeInOutExpo',function(){
                    $(this).hide();
                });
        	}
        }
    };
    
    $(document).ready(function(){
        nav_header.init();
    });
})(jQuery);

$(document).ready(function() {	
    $(".mejores_fotos").eq(0).fadeIn(400);
    $(".navegacion_fotos").find("ul li ").removeClass("actived");
    $(".navegacion_fotos").find("ul li ").eq(0).addClass("actived");
    $(".navegacion_fotos").find("ul li ").unbind("click").click(function(e){
    	e.preventDefault();
        var op= $(this).attr("rel");

        $(".mejores_fotos").fadeOut(400);
        
        $(".mejores_fotos").eq(op).fadeIn(400);
        
        $(".navegacion_fotos").find("ul li ").removeClass("actived");
        $(this).addClass("actived");
        
        //alert(op);
    })
    
    $(".navegacion_fotos").swipe( {        
		swipe:function(event, direction, distance, duration, fingerCount) {           
			if (direction==="right") {            
				$(this).animate({
							'scrollLeft': $(this).scrollLeft() - 158
						}, 500);
			}//
			if (direction==="left") {            
				$(this).animate({
							'scrollLeft': $(this).scrollLeft() + 158
						}, 500);
			}
		 },        
		 threshold:50
	});	
 
});	

;jQuery(function($){ 
    (function ($, T) {

        var $m = $('.vid_4vids_03 .wdg_mix_carrousa .general'),
        animationDelay = 500;
        
        var $w = $('.wdg_mix_carrousa div:last-child ul li');
        var $count = 0;
        
        $w.each(function() {
            $count ++;
        });
        
		var elem = $('.vid_4vids_03 .carrusel-sizes > div');
		var num = elem.length;
		var tam = Math.ceil(num/4);
		
        $m.each(function() {
            var $total = 160;
            if( $count <= 2){
               $total = 60; 
            }
            var $items = $(this).find('ul li'),
            padding = ($(this).parent().hasClass('wdg_mix_carrousa')) ? 41 : 24,
            Pointer = {
                UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
            },
            $parent = $(this);
			
			if(tam <= 1 )$('.vid_4vids_03 .tvsa-double-caret-right').addClass('inactive');

			if( $(window).width() < 624){
				$(".vid_4vids_03 .izq,.vid_4vids_03 .izq1").css('width',$(window).width()/2+'px').css('text-align','center');
				$('.vid_4vids_03 .carrusel-sizes').width(num*($(window).width()/2) +'px');
			}
			else{
				$('.vid_4vids_03 .carrusel-sizes').width( tam*300 + 'px');
				if(num==5)$(elem[3]).before('<div class="izq" style="width:136px;height:140px;" ></div>');
				if(num==9)$(elem[5]).before('<div class="izq" style="width:136px;height:140px;" ></div>');
			}
			
			
            if (/Android|iPhone|iPod|iPad/.test(navigator.userAgent) && // If it's an iPad, iPod or iPhone
                !(/OS [2-4]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent))) { // And the version of the OS is bigger than 4.x...
                $(this).addClass('iOS');
            } else {
                    
                // Touch devices (non-iOS or iOS < 5)
                var isWinPhone = /Windows Phone/.test(navigator.userAgent);

                if (T.getIsTouchDevice() && !T.isBlackBerryCurve()) {

                    // Hide the arrows if it's not carouseltype1b
                    /*if (!$(this).parent().hasClass('wdg_mix_carrousa')) {
					$(this).parent().find('div:first-child ul').hide();
				}*/

                    $(this).bind('touchstart', function(e) {
                        var clientX = e.originalEvent.changedTouches[0].clientX;

                        $(this).attr('startX', clientX);
                        $(this).attr('down', true);
                        $(this).attr('scrollLeft', $(this).scrollLeft());
                    });

                    $(this).bind('touchend', function(e) {
                        if ($(this).attr('active') === 'true') {
                            e.preventDefault();
                            e.stopPropagation();
                        }

                        $(this).attr('active', false);
                        $(this).attr('down', false);
                    });

                    $(this).bind('touchmove', function(e) {
                                        
                                        
                        var clientX = e.originalEvent.changedTouches[0].clientX,
                        sx = $(this).attr('startX') >> 0,
                        ex = clientX;

                        if (Math.abs(sx - ex) > 10) {
                            $(this).attr('active', true);
                        }

                        if ($(this).attr('active') === 'true') {
                            e.preventDefault();

                            $(this).scrollLeft(($(this).attr('scrollLeft') >> 0) + (sx - ex));
                        }

                        return false;
                    });
                } else {
                    // Force the arrows to show up
                    $(this).parent().addClass('showArrows');
                }
            }

            // Support the click event on arrows
            $parent.parent().find('a.wdg_carousa_left').click(function(e) {
                e.preventDefault();
				if( $(window).width() < 624 && $(window).width() <= 960  ){
					$parent.animate({
						'scrollLeft': $parent.scrollLeft() - 300
					}, animationDelay);
				}else
				{
					$parent.animate({
						'scrollLeft': $parent.scrollLeft() - 300
					}, animationDelay);
					
				}
                        
            });

            $parent.parent().find('a.wdg_carousa_right').click(function(e) {
                e.preventDefault();
				if( $(window).width() >= 624 && $(window).width() <= 960  ){
					$('.vid_4vids_03 .wdg_mix_carrousa .general').animate({
						'scrollLeft': $parent.scrollLeft() + 300
					}, animationDelay);
				}else
				{
					$parent.animate({
                    'scrollLeft': $parent.scrollLeft() + 300
                	}, animationDelay);
				}
            });

        });

			$('.vid_4vids_03 .wdg_mix_carrousa .general').bind('swipeleft',function(){
				if($(window).width() > 624)
					$(this).animate({'scrollLeft': $(this).scrollLeft() + 300}, 500);
				else
					$(this).animate({'scrollLeft': $(this).scrollLeft() + $(window).width() }, 500);
			});
			$('.vid_4vids_03 .wdg_mix_carrousa .general').bind('swiperight',function(){
				if($(window).width() > 624)
					$(this).animate({'scrollLeft': $(this).scrollLeft() - 300}, 500);
				else
					$(this).animate({'scrollLeft': $(this).scrollLeft() - $(window).width() }, 500);
			});
			/*vertical*/
		$('.vid_4vids_03 .wdg_mix_carrousa .general').bind('swipeup',function(){
				 $('body,html').animate({
						'scrollTop': $(window).scrollTop() + 200
					}, 500);
			});
		$('.vid_4vids_03 .wdg_mix_carrousa .general').bind('swipedown',function(){
				$('body,html').animate({
						'scrollTop': $(window).scrollTop() - 200
					}, 500);
			});
		/*Monitoreo scroll*/
	$('.vid_4vids_03 .general').scroll(function() {
		/*Horizontal*/
		var $v43_position = $(this).scrollLeft();
		var $v43_med = $v43_position;

		if($v43_position < 5){
			$(this).siblings('.vid_4vids_03_title').children('.arrows').children().children().children('.tvsa-double-caret-left').addClass('inactive');
				$(this).parents('.vid_4vids_03').children('.bullets').children().removeClass();
				$(this).parents('.vid_4vids_03').children('.bullets').children().eq(0).addClass('background-color1');
		}
		else{
			$(this).siblings('.vid_4vids_03_title').children('.arrows').children().children().children('.tvsa-double-caret-left').removeClass('inactive');
			$(this).siblings('.vid_4vids_03_title').children('.arrows').children().children().children('.tvsa-double-caret-right').removeClass('inactive');
			$(this).parents('.vid_4vids_03').children('.bullets').children().removeClass();
			$(this).parents('.vid_4vids_03').children('.bullets').children().eq(1).addClass('background-color1');
		}
		if($v43_med > 350){
			$(this).siblings('.vid_4vids_03_title').children('.arrows').children().children().children('.tvsa-double-caret-right').addClass('inactive');
			$(this).parents('.vid_4vids_03').children('.bullets').children().removeClass();
			$(this).parents('.vid_4vids_03').children('.bullets').children().eq(2).addClass('background-color1');
		}
		/*Vertical*/
		var $v43_alt = $(this).children('.carrusel-sizes').height();
		var $v43_position2 = $(this).scrollTop();
		var $v43_med2 = $v43_position2 + $(this).height();
		if($v43_med2 == $v43_alt ){
			$(this).parent().siblings('.degraded').css("visibility","hidden");
		}
		else{
			$(this).parent().siblings('.degraded').css("visibility","visible");
		}
		//console.log('Scroll: '+$v43_position2+' suma: '+$v43_med2+' alt_tot: '+$v43_alt);
	});
	
	$('.vid_4vids_03 .general').bind("touchmove",function(event){
    	event.preventDefault();
    });
		
    }(jQuery, Televisa));
});

 $(document).ready(function() {	
 	$('.btn_6prog_05 .left2').click(function(e) {
        e.preventDefault();
		if($(window).width() > 960){var $b62_move = 972;}
		if ($.browser.msie && parseInt($.browser.version, 10) <= 8){var $b62_move = 995;}
		
		$(this).parent().parent().parent().siblings('.carrusel').animate({
                    'scrollLeft': $(this).parent().parent().parent().siblings('.carrusel').scrollLeft() - $b62_move
                }, 500);		
	});
	$('.btn_6prog_05 .right2').click(function(e) {
        e.preventDefault();
		if($(window).width() > 960){var $b62_move = 972;}
		if ($.browser.msie && parseInt($.browser.version, 10) <= 8){var $b62_move = 995;}
		
		$(this).parent().parent().parent().siblings('.carrusel').animate({
                    'scrollLeft': $(this).parent().parent().parent().siblings('.carrusel').scrollLeft() + $b62_move
                }, 500);		
	});
	
	if ($(window).width()>624){
	 	 $('.btn_6prog_05 .carrusel').on('swiperight',function(e) {
	        e.preventDefault();
	        
	        $(this).animate({
	            'scrollLeft': $('.btn_6prog_05 .carrusel').scrollLeft() - 648
	        });    
	    });

	    $('.btn_6prog_05 .carrusel').on('swipeleft',function(e) {
	        e.preventDefault();
	        
	       $(this).animate({
	            'scrollLeft': $('.btn_6prog_05 .carrusel').scrollLeft() + 648
	        });
	    });
 	}else{
	 	 $('.btn_6prog_05 .carrusel').on('swiperight',function(e) {
	        e.preventDefault();
	        if($(window).width() > 624){$b6p2_move = 320;}else{$b6p2_move = 325;}
	        $(this).animate({
	            'scrollLeft': $('.btn_6prog_05 .carrusel').scrollLeft() - $b6p2_move
	        });    
	    });

	    $('.btn_6prog_05 .carrusel').on('swipeleft',function(e) {
	        e.preventDefault();
	        if($(window).width() > 624){$b6p2_move = 320;}else{$b6p2_move = 325;}
	        $(this).animate({
	            'scrollLeft': $('.btn_6prog_05 .carrusel').scrollLeft() + $b6p2_move
	        });
	    });
 	}
	
    var lis = $('.btn_6prog_05 .type1a .carrusel ul li');
    var margin = 0;
    var ulWidth = 0;
    for(var i=0; i<lis.length; i++){
        margin += parseInt($(lis[i]).css("margin-left"));
        ulWidth += $(lis[i]).width();
    }
	$(window).load(function(){
		if($(window).width() < 624){var extra = 12;}else{var extra = 0;}
		ancho = ulWidth + margin + extra;
		$(".btn_6prog_05 .type1a .carrusel ul").width(ancho);
		// Sacamos el ancho total del UL del carrusel
		anchoTotalUL = $(".btn_6prog_05 .type1a .carrusel ul").width(); // 100%
	});

	// sacamos cuantas imagenes
	//var totalImagenes = $(".btn_6prog_05 .type1a .carrusel ul").length;
	
	// Sacamos el ancho total del UL del carrusel
	var anchoTotalUL = $(".btn_6prog_05 .type1a .carrusel ul").width(); // 100%
	
	
	var bulletSelected;
	var scrollLeft;
	
	if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
		var anchoVentna = document.body.offsetWidth;
		//alert($.width());
		//alert(document.body.offsetWidth);
	}
	else{
		var anchoVentna =  $(window).width();
	}
	
	
	$('.btn_6prog_05 .type1a .carrusel').scroll(function(e){
		var $widthT = $('.btn_6prog_05 .type1a .carrusel').scrollLeft() + $('.btn_6prog_05 .type1a .carrusel').width();
		$('.btn_6prog_05 .type1a .carrusel ul').width();
		if($(this).scrollLeft()==0){
			$('.btn_6prog_05 .carouselArrowLeft i').addClass('inactive');
			// $('.btn_6prog_05 .carouselArrowLeft i').removeClass('arrow_active');	
		}
		else{
			$('.btn_6prog_05 .carouselArrowLeft i').removeClass('inactive');
			// $('.btn_6prog_05 .carouselArrowLeft i').addClass('arrow_active');	
		}
		if($widthT==$('.btn_6prog_05 .type1a .carrusel ul').width()){
			$('.btn_6prog_05 .carouselArrowRight i').addClass('inactive');
			// $('.btn_6prog_05 .carouselArrowRight i').removeClass('arrow_active');	
		}
		else{
			$('.btn_6prog_05 .carouselArrowRight i').removeClass('inactive');
			// $('.btn_6prog_05 .carouselArrowRight i').addClass('arrow_active');	
		}

		if ($(window).width()<624){
			scrollLeft = $(this).scrollLeft()  + (anchoVentna/2.5) ;
			var porcentaje =  ( scrollLeft * 100) / anchoTotalUL; 
			if( scrollLeft <= 320)
				bulletSelected = 1;
			else if( scrollLeft >= 321 && scrollLeft <= 630)
				bulletSelected = 2;
			else if( scrollLeft >= 630 && scrollLeft <= 940)
				bulletSelected = 3;
			else if( scrollLeft >= 940 && scrollLeft <= 1250)
				bulletSelected = 4;
			else if( scrollLeft >= 1250 && scrollLeft <= 1560)
				bulletSelected = 5;
			else 
				bulletSelected = 6;
			$(this).parents('.type1a').siblings('.bullets').find('li').removeClass('background-color1');
			
			$(this).parents('.type1a').siblings('.bullets').find('li:nth-child('+bulletSelected+')').addClass('background-color1');
		}else{
			scrollLeft = $(this).scrollLeft()  + (anchoVentna/2.5) ;
			var porcentaje =  ( scrollLeft * 100) / anchoTotalUL; 
			if( scrollLeft <= 520)
				bulletSelected = 1;
			else if( scrollLeft >= 520 && scrollLeft <= 980)
				bulletSelected = 2;
			else 
				bulletSelected = 3;
			$(this).parents('.type1a').siblings('.bullets').find('li').removeClass('background-color1');
			
			$(this).parents('.type1a').siblings('.bullets').find('li:nth-child('+bulletSelected+')').addClass('background-color1');
		}
    });

});


 var LugarSite = new Object();

LugarSite.where = function(){
    var urlActual = document.URL;    
    if(urlActual.indexOf('/videos')!=-1){        
        $(".mainnav ul li").removeClass('active')
        $(".mainnav ul li:nth-child(1), .mobilenav ul li:nth-child(1)").addClass('active');

    }
    if(urlActual.indexOf('/fotos')!=-1){        
        $(".mainnav ul li").removeClass('active')
        $(".mainnav ul li:nth-child(2), .mobilenav ul li:nth-child(2)").addClass('active');
    }

}

$(function() {
    if($(".mainnav").length || $(".mobilenav").length){
        LugarSite.where();
    }    
});
