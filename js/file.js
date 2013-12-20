/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright  2008 George McGinley Smith
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
                $(this).parent().toggleClass('active');
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
//              $('form.site_search').addClass('open').find("input.search_term:eq(0)").show().animate({height:'36px'},150,'easeInOutExpo',function(){
//              }).focus();
                $('form.site_search').addClass('open').find("input.search_term:eq(0)").show().focus();
            } else {
                $('form.site_search').addClass('open').find("input.search_term:eq(0)").show().animate({width:'180px'},150,'easeInOutExpo',function(){
                }).focus();
            }
            nav_header.closeSocialNav();
        },
        
        closeSearch : function() {
            if ($(window).width() < 624) {
//              $('form.site_search').removeClass('open').find("input.search_term:eq(0)").animate({height:'0'},150,'easeInOutExpo',function(){
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
})(jQuery);;jQuery(function($){ 
    (function(T, $) {
        // var $widthF = $('.wdg_matchesresult_01 .wdg_matchesresult_01_list').width() - 5;
        var $x = $('.wdg_matchesresult_01_nav');
        var $y = $('.wdg_matchesresult_01_nav ul li');
        var $z = $('.wdg_matchesresult_01_nav ul li:first-child');
        var $show = $('.wdg_matchesresult_hide');
        var $hide = $('.wdg_matchesresult_show');
        var $totalWidth = 0;
        var $slide = $z.outerWidth(true);
        $y.each(function() {
            $totalWidth += $(this).outerWidth(true);
        });
        var $m = $('.wdg_matchesresult_01_components'),
        animationDelay = 500;
        var $w = $('.wdg_matchesresult_01_components ul li');
        var $count = 0;
        $w.each(function() {
            $count ++;
        });
        var $unitary = $w.outerWidth(true);
        var $unitaryH = $w.outerHeight(true);
        var $round = 1;
        if($.browser.msie && parseFloat($.browser.version) <= 8){
        }
        else{
            $(window).resize(function() {
                var visShow = $show.css('visibility');
                //var visHide = $hide.css('visibility'); 
                $unitary = $w.outerWidth(true);
                $totalWidth = 0;
                $y.each(function() {
                    $totalWidth += $(this).outerWidth(true);
                });
    
                if( $(window).width() > 960  ){
                    $round = Math.round($count/3);
                    if( ($count / 3) > $round )
                        $m.find('ul').width(800);
                    else
                        $m.find('ul').width(800);
                    $m.find('ul').height(575);
                    $m.height(575);
                    $x.find('ul').width(800);
                    if ( visShow == 'hidden' ) {
                        $('.wdg_matchesresult_01').animate({
                            'height': 700
                        }, 0);
                    }
                }
                if( $(window).width() > 623 && $(window).width() <= 960){
                    $round = Math.round($count/2);
                    
                    // Se comentan estas lineas ya que modifican el ancho del ul del carrusel y descuadra en tablet
                    /*if( ($count / 2) > $round )
                        $m.find('ul').width( (($round + 1) * $unitary) - 152);
                    else
                        $m.find('ul').width( ($round * $unitary) - 152);
                    
                    $m.find('ul').height($unitaryH * 2);*/
                    $m.height($unitaryH * 2);
                    //$x.find('ul').width( $totalWidth + 20 );
                    if ( visShow == 'hidden' ) {
                        $('.wdg_matchesresult_01').animate({
                            'height': 460
                        }, 0);
                    }
                }
                if( $(window).width() < 624 ){    
                    $round = Math.round($count);
                    $m.find('ul').width( ($round * $unitary) - 6);
                    $m.height($unitaryH + 28);
                    $m.find('ul').height($unitaryH);
                    /*if ( visShow == 'hidden' ) {

                    }*/
                    $('.wdg_matchesresult_01').animate({
                        'height': 218
                    }, 0);

                }
                $m.animate({
                    'scrollLeft': 0
                }, 0);  


            });
        }
        $m.each(function() {
            var $parent = $(this);
            var $items = $(this).find('ul li');
            $count = 0;
            $items.each(function() {
                $count ++;
            });
            if (T.getDeviceSize() === 'large') {
                $round = Math.round($count/3);
                if( ($count / 3) > $round )
                    $(this).find('ul').width( ($round + 1) * $unitary);
                else
                    $(this).find('ul').width( $round * $unitary);
                $(this).find('ul').height($unitaryH * 3);
                $(this).height($unitaryH * 3);
            }
            if (T.getDeviceSize() === 'medium') {
                $round = Math.round($count/2);
                /*if( ($count / 2) > $round )
                    $(this).find('ul').width( ($round + 1) * $unitary);
                else
                    $(this).find('ul').width( $round * $unitary);*/
                $(this).find('ul').height($unitaryH * 2);
                $(this).height($unitaryH * 2);
            }
            if (T.getDeviceSize() === 'small') {
                $round = Math.round($count);
                $(this).find('ul').width( ($round * $unitary));
                $(this).find('ul').height($unitaryH);
                $(this).height($unitaryH + 28);
            }
            /*Arrows Mobile*/
            $parent.parent().find('.wdg_matchesresult_01_mobileleft a.wdg_matchesresult_left').click(function(e) {
                e.preventDefault();
                $parent.animate({
                    'scrollLeft': $parent.scrollLeft() - 222
                }, animationDelay,"linear",function(){
                    /*Verifico posici??n del scroll*/ 
                    var large_tot = $('.wdg_matchesresult_01 ul.wdg_matchesresult_01_list').width();
                    large_tot = large_tot -220;
                    var position = $parent.scrollLeft();//alert("termine izq " + position +" "+ large_tot);
                    if(position < 222)
                        {
                            //$('.wdg_matchesresult_01 #left').addClass('end');
                            $('.wdg_matchesresult_01 .wdg_matchesresult_left').css('color', '#6C0808');
                        }
                        else
                        {
                            //$('.wdg_matchesresult_01 #left').removeClass('end');
                            $('.wdg_matchesresult_01 .wdg_matchesresult_left').css('color', '#D6A256');
                        }  
                    if(position == large_tot)
                        {
                            $('.wdg_matchesresult_01 .wdg_matchesresult_right').css('color', '#6C0808');
                        }
                        else
                        {
                            $('.wdg_matchesresult_01 .wdg_matchesresult_right').css('color', '#D6A256');
                        }
                    });  
                
            });
                        
            $parent.parent().find('.wdg_matchesresult_01_mobileright a.wdg_matchesresult_right').click(function(e) {
                e.preventDefault();
                $parent.animate({
                    'scrollLeft': $parent.scrollLeft() + 222
                }, animationDelay,"linear",function(){
                    /*Verifico posici??n del scroll*/ 
                    var large_tot = $('.wdg_matchesresult_01 ul.wdg_matchesresult_01_list').width();
                    large_tot = large_tot -220;
                    var position2 = $parent.scrollLeft();//alert("termine der " + position2);
                    if(position2 < 222)
                        {
                            //$('.wdg_matchesresult_01 #left').addClass('end');
                            $('.wdg_matchesresult_01 .wdg_matchesresult_left').css('color', '#6C0808');
                        }
                        else
                        {
                            //$('.wdg_matchesresult_01 #left').removeClass('end');
                            $('.wdg_matchesresult_01 .wdg_matchesresult_left').css('color', '#D6A256');
                        } 
                        if(position2 >= large_tot)
                        {
                            $('.wdg_matchesresult_01 .wdg_matchesresult_right').css('color', '#6C0808');
                        }
                        else
                        {
                            $('.wdg_matchesresult_01 .wdg_matchesresult_right').css('color', '#D6A256');
                        }
                    });
                      
                });
                /*Arrows Tablet*/
                $parent.parent().find('.wdg_matchesresult_01_arrows a.wdg_matchesresult_left').click(function(e) {
                    e.preventDefault();
                    $parent.animate({
                        'scrollLeft': $parent.scrollLeft() - 370
                    }, 500);
                });
                $parent.parent().find('.wdg_matchesresult_01_arrows a.wdg_matchesresult_right').click(function(e) {
                    e.preventDefault();
                    $parent.animate({
                        'scrollLeft': $parent.scrollLeft() + 370
                    }, 500);
                });
            
        });
        $(document).ready(function(){
            if($(window).width()>=948){$_brinca = 888}
            if($(window).width()>=624){$_brinca = 370}
            if($(window).width()<624){$_brinca = 222}   
                $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components').bind('swipeleft',function(){
                        $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components').animate({
                                'scrollLeft': $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components').scrollLeft() + $_brinca
                            }, 500);
                    });
                $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components').bind('swiperight',function(){
                        $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components').animate({
                                'scrollLeft': $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components').scrollLeft() - $_brinca
                            }, 500);
                    }); 
        });

        /*Monitorea scroll*/
        $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components').scroll(function() {

            var $scroll = $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components');
            var $width = $('.wdg_matchesresult_01 .wdg_matchesresult_01_list').width()-5;
            var $widthT = $scroll.scrollLeft() + $scroll.width();
                // var $height = $parent.height();
                $('.wdg_matchesresult_01 .wdg_matchesresult_01_mobileleft .tvsa-double-caret-left').css('color','#D6A256');
                if($scroll.scrollLeft()==0){
                    $('.wdg_matchesresult_01 .wdg_matchesresult_01_mobileleft .tvsa-double-caret-left, .wdg_matchesresult_01 .wdg_matchesresult_01_arrows .tvsa-double-caret-left').css('color','#6C0808');
                } 
                else{
                    $('.wdg_matchesresult_01 .wdg_matchesresult_01_mobileleft .tvsa-double-caret-left, .wdg_matchesresult_01 .wdg_matchesresult_01_arrows .tvsa-double-caret-left').css('color','#D6A256');
                }
                if($width<$widthT){
                    $('.wdg_matchesresult_01 .wdg_matchesresult_01_mobileleft .tvsa-double-caret-right, .wdg_matchesresult_01 .wdg_matchesresult_01_arrows .tvsa-double-caret-right').css('color','#6C0808');
                } 
                else{
                    $('.wdg_matchesresult_01 .wdg_matchesresult_01_mobileleft .tvsa-double-caret-right, .wdg_matchesresult_01 .wdg_matchesresult_01_arrows .tvsa-double-caret-right').css('color','#D6A256');  
                }


            var position3 = $(this).scrollLeft();
            var large_tot = $('.wdg_matchesresult_01 ul.wdg_matchesresult_01_list').width();
                    large_tot = large_tot -220;
            if(position3 < 222)
                        {
                            //$('.wdg_matchesresult_01 #left').addClass('end');
                            $('.wdg_matchesresult_01 .wdg_matchesresult_left').css('color', '#6C0808');
                        }
                        else
                        {
                            //$('.wdg_matchesresult_01 #left').removeClass('end');
                            $('.wdg_matchesresult_01 .wdg_matchesresult_left').css('color', '#D6A256');
                        } 
                        if(position3 >= large_tot)
                        {
                            $('.wdg_matchesresult_01 .wdg_matchesresult_right').css('color', '#6C0808');
                        }
                        else
                        {
                            $('.wdg_matchesresult_01 .wdg_matchesresult_right').css('color', '#D6A256');
                        }
        });

        
        $x.each(function() {

            var $parent = $(this);

            if (T.getDeviceSize() === 'small') {
                $x.find('ul').width( $totalWidth + 20 );
            }
            $p = 0;
            $slide = 0;
            
            
            /*Sub menu principal*/
            $parent.parent().find('a.wdg_matchesresult_navleft').click(function(e) {
                e.preventDefault();
                //calculate move
                /*for($i=1;$i<4;$i++)
                    {
                    $z = $('.wdg_matchesresult_01 ul.wdg_matchesresult_01_theme li:nth-child('+$i+')');
                        $sl = $z.outerWidth(true);
                        $slide = $slide + $sl;
                    }*/
                $parent.stop(true).animate({
                    'scrollLeft': $parent.scrollLeft() - 250
                }, animationDelay,"linear",function(){ 
                /*Verifico posici??n del scroll*/ 
                    var large_tot = $(this).children().width();
                    var position = $parent.scrollLeft();
                    med = position + $(this).parent().width();
                    if(position == 0)
                        {
                        $(this).siblings('.wdg_matchesresult_navarrowleft').children().children().css('color', '#6C0808');
                        }
                        else
                        {
                        $(this).siblings('.wdg_matchesresult_navarrowleft').children().children().css('color', '#D6A256');
                        }  
                    if(position != 0)
                        {
                        $(this).siblings('.wdg_matchesresult_navarrowright').children().children().css('color', '#6C0808');
                        }
                        else
                        {
                        $(this).siblings('.wdg_matchesresult_navarrowright').children().children().css('color', '#D6A256');
                        }
                    });        
            });

            
            $parent.stop(true).parent().find('a.wdg_matchesresult_navright').click(function(e) {
                e.preventDefault();
                //calculate move
                /*for($i=1;$i<4;$i++)
                    {
                    $z = $('.wdg_matchesresult_01 ul.wdg_matchesresult_01_theme li:nth-child('+$i+')');
                        $sl = $z.outerWidth(true);
                        $slide = $slide + $sl;
                    }*/
                $parent.animate({
                    'scrollLeft': $parent.scrollLeft() + 250
                }, animationDelay,"linear",function(){ 
                /*Verifico posici??n del scroll*/ 
                    var large_tot = $(this).children().width();
                    var position = $parent.scrollLeft();
                    med = position + $(this).parent().width();
                    console.log('This es:'+$(this).attr('class')+' position: '+position);   
                    if(position == 0)
                        {
                        $(this).siblings('.wdg_matchesresult_navarrowleft').children().children().css('color', '#6C0808');
                        }
                        else
                        {
                        $(this).siblings('.wdg_matchesresult_navarrowleft').children().children().css('color', '#D6A256');
                        }  
                    if(position != 0)
                        {
                        $(this).siblings('.wdg_matchesresult_navarrowright').children().children().css('color', '#6C0808');
                        }
                        else
                        {
                        $(this).siblings('.wdg_matchesresult_navarrowright').children().children().css('color', '#D6A256');
                        }
                    });    
            });
        });  
        
        /*Monitorea scroll sub menu principal*/
        $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_navcontainer .wdg_matchesresult_01_nav').scroll(function() {
            var position4 = $(this).scrollLeft();
            var large_tot4 = $('.wdg_matchesresult_01 ul.wdg_matchesresult_01_theme').width();
                    large_tot4 = large_tot4 - 245;
            if(position4 < 57)
                        {
                        $(this).siblings('.wdg_matchesresult_navarrowleft').children().children().css('color', '#6C0808');
                        }
                        else
                        {
                        $(this).siblings('.wdg_matchesresult_navarrowleft').children().children().css('color', '#D6A256');
                        }
                        console.log('position: '+position4+' largo: '+large_tot4); 
                        if(position4 >= large_tot4)
                        {
                        $(this).siblings('.wdg_matchesresult_navarrowright').children().children().css('color', '#6C0808');
                        }
                        else
                        {
                        $(this).siblings('.wdg_matchesresult_navarrowright').children().children().css('color', '#D6A256');
                        }
        });      

        $hide.click(function(e) {
            e.preventDefault();
            var $closeElement = $(this).closest('.wdg_matchesresult_01');
            $show = $closeElement.find('.wdg_matchesresult_hide');
            $hide = $closeElement.find('.wdg_matchesresult_show');
            var visShow = $show.css('visibility');
             if (T.getDeviceSize() === 'large') {
             $('.wdg_matchesresult_01 .wdg_matchesresult_01_left .wdg_matchesresult_visible').css('margin-top','32%');
             }
            $closeElement.animate({
                'height': 218
            }, animationDelay);
            $(this).closest('.wdg_matchesresult_01_left').find('.wdg_matchesresult_01_bottom').hide();
            if ( visShow == 'hidden' ) {
                $show.css({
                    visibility: 'visible'      
                });
                $hide.css({
                    visibility: 'hidden'      
                });
                
            } else {
                $show.css({
                    visibility: 'hidden'
                });
                $hide.css({
                    visibility: 'visible'      
                });
            }
        });


        $show.click(function(e) {
            e.preventDefault();
            var $closeElement = $(this).closest('.wdg_matchesresult_01');
            $show = $closeElement.find('.wdg_matchesresult_hide');
            $hide = $closeElement.find('.wdg_matchesresult_show');
            var visHide = $hide.css('visibility'); 

            if (T.getDeviceSize() === 'large') {
                $('.wdg_matchesresult_01 .wdg_matchesresult_01_left .wdg_matchesresult_visible').css('margin-top','95%');
                $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components').css('height','575px');
                $closeElement.animate({
                    'height': 700
                }, animationDelay);
            }
            if (T.getDeviceSize() === 'medium') {
                $closeElement.animate({
                    'height': 460
                }, animationDelay);              
            }
            $(this).closest('.wdg_matchesresult_01_left').find('.wdg_matchesresult_01_bottom').show();
            if ( visHide == 'hidden' ) {
                $hide.css({
                    visibility: 'visible'      
                });
                $show.css({
                    visibility: 'hidden'
                });
                
            } else {
                $show.css({
                    visibility: 'visible'
                });
                $hide.css({
                    visibility: 'hidden'
                });
            }
        });
$(window).load(function(){
            if($(window).width() >= 948){$('.wdg_matchesresult_01 .wdg_matchesresult_01_list').width(800)}
            if($(window).width() < 948 && $(window).width() >= 624){$('.wdg_matchesresult_01 .wdg_matchesresult_01_list').width(1482)}
            if($(window).width() < 624){$('.wdg_matchesresult_01 .wdg_matchesresult_01_list').width(3546)}
});
        

    }(Televisa, jQuery));
});
/*$(document).ready(function(e) {
    
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
});*/;jQuery(function($){ 
    (function($,T){
        //Aggregate on : 16/Jun/2013, 04:02:15 PM
        //Author             : Isaac Aar??n D??az Reveles       
        $('.wdg_goals_carru_01 .deg').scroll(function() {
            if($(this).scrollTop()>=329){
             $('.wdg_goals_carru_01 .degraded').css("visibility","hidden");
            }else{
             $('.wdg_goals_carru_01 .degraded').css("visibility","visible");
            }
        });
        
        /*Swipe*/
        $('.wdg_goals_carru_01 .deg').bind('swipeup',function(){
            $(this).animate({
                    'scrollTop': $(this).scrollTop() + 265
                }, 500);
        });
        $('.wdg_goals_carru_01 .deg').bind('swipedown',function(){
            $(this).animate({
                    'scrollTop': $(this).scrollTop() - 265
                }, 500);
        });
        //----------------
        
        $('.wdg_goals_carru_01').each(function(ix,element){ 
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $wgc1_theUl = $this.find('>ul')
            ;
            
            $this.find('a.prev, a.next, .deportes-prev, .deportes-next').click(function(event){
                event.preventDefault();
            });
            
            $this.find('a.prev, .deportes-prev').bind(Pointer.DOWN,function(){
                $wgc1_theUl.animate({
                    'scrollTop': $wgc1_theUl.scrollTop() - $wgc1_theUl.height()
                }, 500);
            });
            
            $this.find('a.next, .deportes-next').bind(Pointer.DOWN,function(){
                $wgc1_theUl.animate({
                    'scrollTop': $wgc1_theUl.scrollTop() + $wgc1_theUl.height()
                }, 500);
            }); 
        });
        

        $wgc_list = $('.wdg_goals_carru_01 .deg li').size();
        $wgc_altura_li = $('.wdg_goals_carru_01 .deg li').outerHeight();
        $wgc_altura = $wgc_altura_li * $wgc_list;
        $('.wdg_goals_carru_01 .deg').scroll(function() {
            $wgc_scrollTop = parseInt($(this).scrollTop()) + parseInt($(this).height());
            //console.log('Movimiento: '+$wgc_scrollTop+' Altura_tot: '+$wgc_altura +' Elementos: '+ $wgc_list+' Cada uno: '+$wgc_altura_li);
                if($(this).scrollTop() == 0){
                        $(this).siblings('.controls').children('.prev').addClass('bginactive');
                        $(this).siblings('.controls').children('.prev').removeClass('bgactive');
                    }else{
                        $(this).siblings('.controls').children('.prev').removeClass('bginactive');
                        $(this).siblings('.controls').children('.prev').addClass('bgactive');
                    }
                if($wgc_scrollTop == $wgc_altura){
                 $(this).siblings('.degradado').css("visibility","hidden");
                 $(this).siblings('.controls').children('.next').addClass('bginactive');
                 $(this).siblings('.controls').children('.next').removeClass('bgactive');
                }else{
                 $(this).siblings('.degradado').css("visibility","visible");
                 $(this).siblings('.controls').children('.next').removeClass('bginactive');
                 $(this).siblings('.controls').children('.next').addClass('bgactive');
                }
            }); 

        var $parent = $('.wdg_goals_carru_01 ');
        var $dropdownAnchor = $parent.find('.lineaResultado');
        $dropdownAnchor.on('click', function(evt) {
            var $listItems = $(this).find('.wdg_goals_carru_012_dropdownlist');
            var $visibility = $listItems.css('visibility');
            var padre =$(this);
            if ( $visibility == 'hidden' ) 
                $listItems.css({
                    visibility: 'visible',
                    height: 'auto',
                    'max-height' : '156px',
                    'overflow-y': 'scroll',
                    'overflow-x': 'hidden'         
                });
             else 
                 $listItems.css({
                    visibility: 'hidden',
                    height: '0px'
            });
              var $dropdownItems2 = $(this).find('.wdg_goals_carru_012_dropdownlist li');
            $dropdownItems2.bind('click', function(evt) {
                evt.preventDefault();
                padre.find('.wdg_goals_carru_012_dropdowncontent p').html($(this).find('p').html());
            });
           
            $listItems.bind('mouseleave', function(evt) {
                evt.preventDefault();
                var visibilidad = $(this).css('visibility');
                if ( visibilidad == 'visible' ) {
                     $(this).css({
                        visibility: 'hidden',
                        height: '0px'       
                    });
                } 
            });
        });

    })($,Televisa);
});

if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
      $(function() {
        var zIndexNumber = 1000;
        $('.wdg_goals_carru_01 div').each(function() {
            $(this).css('zIndex', zIndexNumber);
            zIndexNumber -= 10;
        });
    });
 }
 
 
 //$(document).ready(function() { //Html esencial y DOM
$(window).load(function() {  //Im??genes y demas HTML


    Carrusel_01();
    Carrusel_02();
    Carrusel_03();


});

function Carrusel_01() {
    if ($(window).width() < 624) {
        $('#stage_carru_01').css('overflow', 'hidden')
        var $height = $('#stage_carru_01 .resize img');
        $height.load(function() {
            var $imageHeight = $(this).width();
            var $totalHeight = $imageHeight * 0.75;
            $height.height($totalHeight);
            $height.parents('.resize').height($totalHeight);
        });
    }

    $(window).resize(function() {
        if ($(window).width() < 624) {
            var $imageHeight = $height.width();
            var $totalHeight = $imageHeight * 0.75;
            $height.height($totalHeight + 10);
            $height.parents('.resize').height($totalHeight);
        }
    });

    $('#stage_carru_01 .resize img').load(function() {
        if ($(window).width() < 624) {
            var $imageHeight = $height.width();
            var $totalHeight = $imageHeight * 0.75;
            $height.height($totalHeight + 10);
            $height.parents('.resize').height($totalHeight);
        }
    });

    var elem = document.getElementById('mix_carru_01b_swipe_01');
    var $time = $('#stage_carru_01 .type2b2_02').attr('data-time');
    window.mySwipe1 = Swipe(elem, {
        startSlide: 0,
        auto: $time,
        continuous: true,
        callback: function(index, element) {
            /** inicia seccion para activar el bullet actual **/
            $("#stage_carru_01 .bullets_02 ul li").each(function() {
                id = $(this).attr("id");
                if ("bullet_" + index == id)
                {
                    $(this).removeClass('background-color4');
                    $(this).addClass('background-color1');
                    $(this).addClass('bg-television');
                }
                else
                {
                    $(this).removeClass('bg-television');
                    $(this).removeClass('background-color1');
                    $(this).addClass('background-color4');
                }
            });
            /** termina seccion para activar el bullet actual **/

            /** inicia seccion para activar el thumb_ actual **/
            $("#stage_carru_01 .galleryThumbs li").each(function() {
                id_thumb = $(this).attr("id");
                if ("stage1thumb_" + index == id_thumb)
                {
                    $("#stage_carru_01 .galleryCaption_02 h2 a").text("");
                    $(this).addClass("active");
                    title_item = $(this).find("a").attr('data-title');
                    url_item = $(this).find("a").attr('data-urltitle');
                    octopico_item = $(this).find("a").attr('data-octopico');
                    octitulo_item = $(this).find("a").attr('data-octitulo');  
                    $("#stage_carru_01 .galleryCaption_02 h2 a").html(title_item);
                    $("#stage_carru_01 .galleryCaption_02 h2 a").attr("href",url_item);
                    topic = $(this).find("a").attr('data-topic');
                    $("#stage_carru_01 .galleryCaption_02 .topic a").text(topic);
                    $("#stage_carru_01 .galleryCaption_02 .topic a").attr("title",title_item);
                    $("#stage_carru_01 .galleryCaption_02 h2 a").attr("title",title_item);
                    $("#stage_carru_01 .galleryCaption_02 .topic a").attr("onclick",octopico_item);
                    $("#stage_carru_01 .galleryCaption_02 h2 a").attr("onclick",octitulo_item);
                }
                else
                {
                    $(this).removeClass("active");
                }
            });
            if ($.browser.msie && $.browser.version <= 9)
            {
                if (index == 0) {
                    $('#stage_carru_01 .galleryImages_02').scrollLeft(0);
                }
                if (index == 1) {
                    $('#stage_carru_01 .galleryImages_02').scrollLeft(624);
                }
                if (index == 2) {
                    $('#stage_carru_01 .galleryImages_02').scrollLeft(1248);
                }
                if (index == 3) {
                    $('#stage_carru_01 .galleryImages_02').scrollLeft(1872);
                }
                if (index == 4) {
                    $('#stage_carru_01 .galleryImages_02').scrollLeft(2496);
                }
                if (index == 5) {
                    $('#stage_carru_01 .galleryImages_02').scrollLeft(3120);
                }
            }
            /** termina seccion para activar el thumb_ actual **/
        },
        transitionEnd: function(index, element) {
        }
    });
    /*Mouse Enter*/
    $('#stage_carru_01 .swipe-wrap')
            .mouseenter(function() {
        //$(this).attr('id');
        $hijo_act = $(this).parent().siblings('.galleryThumbs').children('.active').index();
        window.mySwipe1.slide(parseInt($hijo_act), 0);
    })
            .mouseleave(function() {
        //window.mySwipe1.slide(parseInt($hijo_act), 1);
        window.mySwipe1 = Swipe(elem, {
            startSlide: $hijo_act,
            auto: $time,
            continuous: true,
            callback: function(index, element) {
                /** inicia seccion para activar el bullet actual **/
                $("#stage_carru_01 .bullets_02 ul li").each(function() {
                    id = $(this).attr("id");
                    if ("bullet_" + index == id)
                    {
                        $(this).removeClass('background-color4');
                        $(this).addClass('background-color1');
                        $(this).addClass('bg-television');
                    }
                    else
                    {
                        $(this).removeClass('bg-television');
                        $(this).removeClass('background-color1');
                        $(this).addClass('background-color4');
                    }
                });
                /** termina seccion para activar el bullet actual **/

                /** inicia seccion para activar el thumb_ actual **/
                $("#stage_carru_01 .galleryThumbs li").each(function() {
                    id_thumb = $(this).attr("id");
                    if ("stage1thumb_" + index == id_thumb)
                    {
                        $("#stage_carru_01 .galleryCaption_02 h2 a").text("");
                        //alert(id_thumb);
                        $(this).addClass("active");
                        title_item = $(this).find("a").attr('data-title');
                        url_item = $(this).find("a").attr('data-urltitle');
                        octopico_item = $(this).find("a").attr('data-octopico');
                        octitulo_item = $(this).find("a").attr('data-octitulo');  
                        $("#stage_carru_01 .galleryCaption_02 h2 a").html(title_item);
                        $("#stage_carru_01 .galleryCaption_02 h2 a").attr("href",url_item);
                        topic = $(this).find("a").attr('data-topic');
                        $("#stage_carru_01 .galleryCaption_02 .topic a").text(topic);
                        $("#stage_carru_01 .galleryCaption_02 .topic a").attr("title",title_item);
                        $("#stage_carru_01 .galleryCaption_02 h2 a").attr("title",title_item);
                        $("#stage_carru_01 .galleryCaption_02 .topic a").attr("onclick",octopico_item);
                        $("#stage_carru_01 .galleryCaption_02 h2 a").attr("onclick",octitulo_item);
                    }
                    else
                    {
                        $(this).removeClass("active");
                    }
                });
                /** termina seccion para activar el thumb_ actual **/
            },
            transitionEnd: function(index, element) {
            }
        });
    });
    /*END Mouse Enter*/


    /** Evento click para los thumbs **/
    $("#stage_carru_01 .galleryThumbs li").click(function(e) {
        e.preventDefault();
        if ($.browser.msie && $.browser.version <= 9)
        {
            var id_actual = $(this).attr('id');
            id_actual = id_actual.split("_");
            id_actual = id_actual[1];
            if (id_actual == 0) {
                $('#stage_carru_01 .galleryImages_02').scrollLeft(0);
            }
            if (id_actual == 1) {
                $('#stage_carru_01 .galleryImages_02').scrollLeft(624);
            }
            if (id_actual == 2) {
                $('#stage_carru_01 .galleryImages_02').scrollLeft(1248);
            }
            if (id_actual == 3) {
                $('#stage_carru_01 .galleryImages_02').scrollLeft(1872);
            }
            if (id_actual == 4) {
                $('#stage_carru_01 .galleryImages_02').scrollLeft(2496);
            }
            if (id_actual == 5) {
                $('#stage_carru_01 .galleryImages_02').scrollLeft(3120);
            }
        } else {
            var id_actual = $(this).attr('id');
            id_actual = id_actual.split("_");
            id_actual = id_actual[1];
            window.mySwipe1.slide(parseInt(id_actual), 1);
        }



    });
    /*Tablet*/
    $("#stage_carru_01 .galleryThumbs li").on('touchstart', function(e) {
        event.preventDefault();
        var id_actual = $(this).attr('id');
        id_actual = id_actual.split("_");
        id_actual = id_actual[1];
        window.mySwipe1.slide(parseInt(id_actual), 1);
    });
    var clickEvent = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';
    $("#stage_carru_01 .galleryThumbs li").bind(clickEvent, obtener_foto);

    function obtener_foto()
    {
        var id_actual = $(this).attr('id');
        id_actual = id_actual.split("_");
        id_actual = id_actual[1];
        window.mySwipe1.slide(parseInt(id_actual), 1);
    }
}








function Carrusel_02() {
    if ($(window).width() < 624) {
        $('#stage_carru_02').css('overflow', 'hidden')
        var $height = $('#stage_carru_02 .resize img');
        $height.load(function() {
            var $imageHeight = $(this).width();
            var $totalHeight = $imageHeight * 0.75;
            $height.height($totalHeight);
            $height.parents('.resize').height($totalHeight);
        });
    }

    $(window).resize(function() {
        if ($(window).width() < 624) {
            var $imageHeight = $height.width();
            var $totalHeight = $imageHeight * 0.75;
            $height.height($totalHeight + 10);
            $height.parents('.resize').height($totalHeight);
        }
    });

    $('#stage_carru_02 .resize img').load(function() {
        if ($(window).width() < 624) {
            var $imageHeight = $height.width();
            var $totalHeight = $imageHeight * 0.75;
            $height.height($totalHeight + 10);
            $height.parents('.resize').height($totalHeight);
        }
    });

    var elem = document.getElementById('mix_carru_01b_swipe_02');
    var $time = $('#stage_carru_02 .type2b2_02').attr('data-time');
    window.mySwipe2 = Swipe(elem, {
        startSlide: 0,
        auto: $time,
        continuous: true,
        callback: function(index, element) {
            /** inicia seccion para activar el bullet actual **/
            $("#stage_carru_02 .bullets_02 ul li").each(function() {
                id = $(this).attr("id");
                if ("bullet_" + index == id)
                {
                    $(this).removeClass('background-color4');
                    $(this).addClass('background-color1');
                }
                else
                {
                    $(this).removeClass('background-color1');
                    $(this).addClass('background-color4');
                }
            });
            /** termina seccion para activar el bullet actual **/

            /** inicia seccion para activar el thumb_ actual **/
            $("#stage_carru_02 .galleryThumbs li").each(function() {
                id_thumb = $(this).attr("id");
                if ("thumb_" + index == id_thumb)
                {
                    $("#stage_carru_02 .galleryCaption_02 h2 a").text("");
                    $(this).addClass("active");
                    title_item = $(this).find("a").attr('data-title');
                    url_item = $(this).find("a").attr('data-urltitle');
                    octopico_item = $(this).find("a").attr('data-octopico');
                    octitulo_item = $(this).find("a").attr('data-octitulo');  
                    $("#stage_carru_02 .galleryCaption_02 h2 a").html(title_item);
                    $("#stage_carru_02 .galleryCaption_02 h2 a").attr("href",url_item);
                    topic=$(this).find("a").attr('data-topic');
                    $("#stage_carru_02 .galleryCaption_02 .topic a").text(topic);
                    $("#stage_carru_02 .galleryCaption_02 .topic a").attr("title",title_item);
                    $("#stage_carru_02 .galleryCaption_02 h2 a").attr("title",title_item);
                    $("#stage_carru_02 .galleryCaption_02 .topic a").attr("onclick",octopico_item);
                    $("#stage_carru_02 .galleryCaption_02 h2 a").attr("onclick",octitulo_item);
                }
                else
                {
                    $(this).removeClass("active");
                }
            });
            if ($.browser.msie && $.browser.version <= 9)
            {
                if (index == 0) {
                    $('#stage_carru_02 .galleryImages_02').scrollLeft(0);
                }
                if (index == 1) {
                    $('#stage_carru_02 .galleryImages_02').scrollLeft(624);
                }
                if (index == 2) {
                    $('#stage_carru_02 .galleryImages_02').scrollLeft(1248);
                }
                if (index == 3) {
                    $('#stage_carru_02 .galleryImages_02').scrollLeft(1872);
                }
                if (index == 4) {
                    $('#stage_carru_02 .galleryImages_02').scrollLeft(2496);
                }
                if (index == 5) {
                    $('#stage_carru_02 .galleryImages_02').scrollLeft(3120);
                }
            }
            /** termina seccion para activar el thumb_ actual **/
        },
        transitionEnd: function(index, element) {
        }
    });
    /*Mouse Enter*/
    $('#stage_carru_02 .swipe-wrap')
            .mouseenter(function() {
        //$(this).attr('id');
        $hijo_act = $(this).parent().siblings('.galleryThumbs').children('.active').index();
        window.mySwipe2.slide(parseInt($hijo_act), 0);
    })
            .mouseleave(function() {
        //window.mySwipe2.slide(parseInt($hijo_act), 1);
        window.mySwipe2 = Swipe(elem, {
            startSlide: $hijo_act,
            auto: $time,
            continuous: true,
            callback: function(index, element) {
                /** inicia seccion para activar el bullet actual **/
                $("#stage_carru_02 .bullets_02 ul li").each(function() {
                    id = $(this).attr("id");
                    if ("bullet_" + index == id)
                    {
                        $(this).removeClass('background-color4');
                        $(this).addClass('background-color1');
                    }
                    else
                    {
                        $(this).removeClass('background-color1');
                        $(this).addClass('background-color4');
                    }
                });
                /** termina seccion para activar el bullet actual **/

                /** inicia seccion para activar el thumb_ actual **/
                $("#stage_carru_02 .galleryThumbs li").each(function() {
                    id_thumb = $(this).attr("id");
                    if ("thumb_" + index == id_thumb)
                    {
                        $("#stage_carru_02 .galleryCaption_02 h2 a").text("");
                        $(this).addClass("active");
                        title_item = $(this).find("a").attr('data-title');
                        url_item = $(this).find("a").attr('data-urltitle');
                        octopico_item = $(this).find("a").attr('data-octopico');
                        octitulo_item = $(this).find("a").attr('data-octitulo');  
                        $("#stage_carru_02 .galleryCaption_02 h2 a").html(title_item);
                        $("#stage_carru_02 .galleryCaption_02 h2 a").attr("href",url_item);
                        topic=$(this).find("a").attr('data-topic');
                        $("#stage_carru_02 .galleryCaption_02 .topic a").text(topic);
                        $("#stage_carru_02 .galleryCaption_02 .topic a").attr("title",title_item);
                        $("#stage_carru_02 .galleryCaption_02 h2 a").attr("title",title_item);
                        $("#stage_carru_02 .galleryCaption_02 .topic a").attr("onclick",octopico_item);
                        $("#stage_carru_02 .galleryCaption_02 h2 a").attr("onclick",octitulo_item);
                    }
                    else
                    {
                        $(this).removeClass("active");
                    }
                });
                /** termina seccion para activar el thumb_ actual **/
            },
            transitionEnd: function(index, element) {
            }
        });
    });
    /*END Mouse Enter*/


    /** Evento click para los thumbs **/
    $("#stage_carru_02 .galleryThumbs li").click(function(e) {
        e.preventDefault();
        if ($.browser.msie && $.browser.version <= 9)
        {
            var id_actual = $(this).attr('id');
            id_actual = id_actual.split("_");
            id_actual = id_actual[1];
            if (id_actual == 0) {
                $('#stage_carru_02 .galleryImages_02').scrollLeft(0);
            }
            if (id_actual == 1) {
                $('#stage_carru_02 .galleryImages_02').scrollLeft(624);
            }
            if (id_actual == 2) {
                $('#stage_carru_02 .galleryImages_02').scrollLeft(1248);
            }
            if (id_actual == 3) {
                $('#stage_carru_02 .galleryImages_02').scrollLeft(1872);
            }
            if (id_actual == 4) {
                $('#stage_carru_02 .galleryImages_02').scrollLeft(2496);
            }
            if (id_actual == 5) {
                $('#stage_carru_02 .galleryImages_02').scrollLeft(3120);
            }
        } else {
            var id_actual = $(this).attr('id');
            id_actual = id_actual.split("_");
            id_actual = id_actual[1];
            window.mySwipe2.slide(parseInt(id_actual), 1);
        }



    });
    /*Tablet*/
    $("#stage_carru_02 .galleryThumbs li").on('touchstart', function(e) {
        event.preventDefault();
        var id_actual = $(this).attr('id');
        id_actual = id_actual.split("_");
        id_actual = id_actual[1];
        window.mySwipe2.slide(parseInt(id_actual), 1);
    });
    var clickEvent = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';
    $("#stage_carru_02 .galleryThumbs li").bind(clickEvent, obtener_foto);

    function obtener_foto()
    {
        var id_actual = $(this).attr('id');
        id_actual = id_actual.split("_");
        id_actual = id_actual[1];
        window.mySwipe2.slide(parseInt(id_actual), 1);
    }
}


function Carrusel_03() {
    if ($(window).width() < 624) {
        $('#stage_carru_03').css('overflow', 'hidden')
        var $height = $('#stage_carru_03 .resize img');
        $height.load(function() {
            var $imageHeight = $(this).width();
            var $totalHeight = $imageHeight * 0.75;
            $height.height($totalHeight);
            $height.parents('.resize').height($totalHeight);
        });
    }

    $(window).resize(function() {
        if ($(window).width() < 624) {
            var $imageHeight = $height.width();
            var $totalHeight = $imageHeight * 0.75;
            $height.height($totalHeight + 10);
            $height.parents('.resize').height($totalHeight);
        }
    });

    $('#stage_carru_03 .resize img').load(function() {
        if ($(window).width() < 624) {
            var $imageHeight = $height.width();
            var $totalHeight = $imageHeight * 0.75;
            $height.height($totalHeight + 10);
            $height.parents('.resize').height($totalHeight);
        }
    });

    var elem = document.getElementById('mix_carru_01b_swipe_03');
    var $time = $('#stage_carru_03 .type2b2_02').attr('data-time');
    window.mySwipe3 = Swipe(elem, {
        startSlide: 0,
        auto: $time,
        continuous: true,
        callback: function(index, element) {
            /** inicia seccion para activar el bullet actual **/
            $("#stage_carru_03 .bullets_02 ul li").each(function() {
                id = $(this).attr("id");
                if ("bullet_" + index == id)
                {
                    $(this).removeClass('background-color4');
                    $(this).addClass('background-color1');
                    $(this).addClass('bg-noticieros');
                }
                else
                {
                    $(this).removeClass('bg-noticieros');
                    $(this).removeClass('background-color1');
                    $(this).addClass('background-color4');
                }
            });
            /** termina seccion para activar el bullet actual **/

            /** inicia seccion para activar el thumb_ actual **/
            $("#stage_carru_03 .galleryThumbs li").each(function() {
                id_thumb = $(this).attr("id");
                if ("thumb_" + index == id_thumb)
                {
                    $("#stage_carru_03 .galleryCaption_02 h2 a").text("");
                    $(this).addClass("active");
                    title_item = $(this).find("a").attr('data-title');
                    url_item = $(this).find("a").attr('data-urltitle');
                    octopico_item = $(this).find("a").attr('data-octopico');
                    octitulo_item = $(this).find("a").attr('data-octitulo');  
                    $("#stage_carru_03 .galleryCaption_02 h2 a").html(title_item);
                    $("#stage_carru_03 .galleryCaption_02 h2 a").attr("href",url_item);
                    topic=$(this).find("a").attr('data-topic');
                    $("#stage_carru_03 .galleryCaption_02 .topic a").text(topic);
                    $("#stage_carru_03 .galleryCaption_02 .topic a").attr("title",title_item);
                    $("#stage_carru_03 .galleryCaption_02 h2 a").attr("title",title_item);
                    $("#stage_carru_03 .galleryCaption_02 .topic a").attr("onclick",octopico_item);
                    $("#stage_carru_03 .galleryCaption_02 h2 a").attr("onclick",octitulo_item);
                }
                else
                {
                    $(this).removeClass("active");
                }
            });
            if ($.browser.msie && $.browser.version <= 9)
            {
                if (index == 0) {
                    $('#stage_carru_03 .galleryImages_02').scrollLeft(0);
                }
                if (index == 1) {
                    $('#stage_carru_03 .galleryImages_02').scrollLeft(624);
                }
                if (index == 2) {
                    $('#stage_carru_03 .galleryImages_02').scrollLeft(1248);
                }
                if (index == 3) {
                    $('#stage_carru_03 .galleryImages_02').scrollLeft(1872);
                }
                if (index == 4) {
                    $('#stage_carru_03 .galleryImages_02').scrollLeft(2496);
                }
                if (index == 5) {
                    $('#stage_carru_03 .galleryImages_02').scrollLeft(3120);
                }
            }
            /** termina seccion para activar el thumb_ actual **/
        },
        transitionEnd: function(index, element) {
        }
    });
    /*Mouse Enter*/
    $('#stage_carru_03 .swipe-wrap')
            .mouseenter(function() {
        //$(this).attr('id');
        $hijo_act = $(this).parent().siblings('.galleryThumbs').children('.active').index();
        window.mySwipe3.slide(parseInt($hijo_act), 0);
    })
            .mouseleave(function() {
        //window.mySwipe3.slide(parseInt($hijo_act), 1);
        window.mySwipe3 = Swipe(elem, {
            startSlide: $hijo_act,
            auto: $time,
            continuous: true,
            callback: function(index, element) {
                /** inicia seccion para activar el bullet actual **/
                $("#stage_carru_03 .bullets_02 ul li").each(function() {
                    id = $(this).attr("id");
                    if ("bullet_" + index == id)
                    {
                        $(this).removeClass('background-color4');
                        $(this).addClass('background-color1');
                        $(this).addClass('bg-noticieros');
                    }
                    else
                    {
                        $(this).removeClass('bg-noticieros');
                        $(this).removeClass('background-color1');
                        $(this).addClass('background-color4');
                    }
                });
                /** termina seccion para activar el bullet actual **/

                /** inicia seccion para activar el thumb_ actual **/
                $("#stage_carru_03 .galleryThumbs li").each(function() {
                    id_thumb = $(this).attr("id");
                    if ("thumb_" + index == id_thumb)
                    {
                        $("#stage_carru_03 .galleryCaption_02 h2 a").text("");
                        $(this).addClass("active");
                        title_item = $(this).find("a").attr('data-title');
                        url_item = $(this).find("a").attr('data-urltitle');
                        octopico_item = $(this).find("a").attr('data-octopico');
                        octitulo_item = $(this).find("a").attr('data-octitulo');  
                        $("#stage_carru_03 .galleryCaption_02 h2 a").html(title_item);
                        $("#stage_carru_03 .galleryCaption_02 h2 a").attr("href",url_item);
                        topic=$(this).find("a").attr('data-topic');
                        $("#stage_carru_03 .galleryCaption_02 .topic a").text(topic);
                        $("#stage_carru_03 .galleryCaption_02 .topic a").attr("title",title_item);
                        $("#stage_carru_03 .galleryCaption_02 h2 a").attr("title",title_item);
                        $("#stage_carru_03 .galleryCaption_02 .topic a").attr("onclick",octopico_item);
                        $("#stage_carru_03 .galleryCaption_02 h2 a").attr("onclick",octitulo_item);
                    }
                    else
                    {
                        $(this).removeClass("active");
                    }
                });
                /** termina seccion para activar el thumb_ actual **/
            },
            transitionEnd: function(index, element) {
            }
        });
    });
    /*END Mouse Enter*/


    /** Evento click para los thumbs **/
    $("#stage_carru_03 .galleryThumbs li").click(function(e) {
        e.preventDefault();
        if ($.browser.msie && $.browser.version <= 9)
        {
            var id_actual = $(this).attr('id');
            id_actual = id_actual.split("_");
            id_actual = id_actual[1];
            if (id_actual == 0) {
                $('#stage_carru_03 .galleryImages_02').scrollLeft(0);
            }
            if (id_actual == 1) {
                $('#stage_carru_03 .galleryImages_02').scrollLeft(624);
            }
            if (id_actual == 2) {
                $('#stage_carru_03 .galleryImages_02').scrollLeft(1248);
            }
            if (id_actual == 3) {
                $('#stage_carru_03 .galleryImages_02').scrollLeft(1872);
            }
            if (id_actual == 4) {
                $('#stage_carru_03 .galleryImages_02').scrollLeft(2496);
            }
            if (id_actual == 5) {
                $('#stage_carru_03 .galleryImages_02').scrollLeft(3120);
            }
        } else {
            var id_actual = $(this).attr('id');
            id_actual = id_actual.split("_");
            id_actual = id_actual[1];
            window.mySwipe3.slide(parseInt(id_actual), 1);
        }



    });
    /*Tablet*/
    $("#stage_carru_03 .galleryThumbs li").on('touchstart', function(e) {
        event.preventDefault();
        var id_actual = $(this).attr('id');
        id_actual = id_actual.split("_");
        id_actual = id_actual[1];
        window.mySwipe3.slide(parseInt(id_actual), 1);
    });
    var clickEvent = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';
    $("#stage_carru_03 .galleryThumbs li").bind(clickEvent, obtener_foto);

    function obtener_foto()
    {
        var id_actual = $(this).attr('id');
        id_actual = id_actual.split("_");
        id_actual = id_actual[1];
        window.mySwipe3.slide(parseInt(id_actual), 1);
    }
}




/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/



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

var IMG_WIDTH = 460;
var currentImg=0;
var maxImages=2;
var speed=750;
var imgs;
var total = 0;

/**
 * all gallery related behavior
 */
function vid_4vids_05_init() {
    // this function is fired upon resize, so we need to unbind each listener
    // in order not to have multiple listeners per dom element
    
    $("div.vid_4vids_05").each(function(){
        var rendition = new Array();
        rendition['thumb'] = 'thumb';
        rendition['image'] = 'image';
        rendition['album'] = 'album';
        $parent = $(this);
        var carousel = $parent;
        
        
        var num = 0,
        total = $parent.find('div.carrusel1 ul li').length;

        //////////////////////////////////////////////////////////////////////
        setWidthCarr1(total);
        setWidthCarr2();

        // the autoplay functionality
        if (total > 1) {
            window.setInterval(function() {
                // only if there is a class autoplay
                if ($parent.hasClass('autoplay')) {
                    // increase by num 1, reset to 0 at 3 (or whatever amount of images there are)
                    num = (num + 1) % total;
                    //console.log(num);
                    $parent.find('div.carrusel1 ul li a:eq('+num+')').click();
                    $parent.attr('data-current',num);
                    
                    // move 1st carrusel
                    if(total > 5 && ((num%6)== 0) && num != 0){
                        // Move right
                        $parent.find('.carrusel1 a.right').click();
                        ////console.log('click');
                    }
                    else if(num== 0){
                        // Reset to 0 position
                        $parent.find('.carrusel1 .carruselcontainer').animate({
                            'scrollLeft': 0
                        }, 500);
                    }
                    //console.log(num);
                }
            }, 5000); // repeat forever, polling every n seconds
        }

        // pause, resume of the autoplay (this is the play/pause button)
        $parent.find('div.image-container div.controls a.td_bg:eq(0)').click(function(){
            if ($(this).hasClass('play')) {
                $parent.addClass('autoplay');
                $(this).removeClass('play').addClass('pause').find('i').removeClass('tvsa-play').addClass('tvsa-pause');
            } else {
                $parent.removeClass('autoplay');
                $(this).removeClass('pause').addClass('play').find('i').removeClass('tvsa-pause').addClass('tvsa-play');
                //num= 0;
            }
            return false;
        });

        $parent.attr({'data-album':0,'data-image':0});
        var data = jQuery.parseJSON($parent.find('span.data').text());
        
        $parent.find('span.loading').hide();
        
        // if we are in mobile
        if ($(window).width() < 624) {
            
            // Remove the calculated width of carrusel
            setTimeout(function(){
                $parent.find('.carrusel2 .ulcarrusel').css('width','95%');  
            },200);
            
        }

        /*Swipe*/
        $theUl = $parent.find('.carruselcontainer');
        $theUl.bind('swipeup',function(){
            $(this).animate({
                    'scrollTop': $theUl.scrollTop() + 250
                }, 500);
        });
        $theUl.bind('swipedown',function(){
            $(this).animate({
                    'scrollTop': $theUl.scrollTop() - 250
                }, 500);
        });

        if ($(window).width() > 623) {

            $parent.find('span.laoding').hide();
            $parent.find('ul.ulcarrusel').unbind();
            
            var swipeOptions={
                triggerOnTouchEnd : true,   
                swipeStatus : swipeStatus,
                allowPageScroll:"vertical",
                threshold:75
            }
            
            // Click IMG - Album or Photo
            $parent.find('ul.ulcarrusel').on('click touchstart', 'a', function(ev){
                var pos = $(this).data('pos');

                if ($(this).hasClass('album')) {
                    // album
                    $(this).parents('ul').find('a').removeClass('active');
                    $(this).addClass('active');
                    $parent.find('span.loading').fadeIn(200).show();
                    
                    var firstimage = data[pos].images[0].path,
                    desc = data[pos].images[0].description;
                    
                    $parent.find("img.mainimage:eq(0)").on('load', function() {                    
                        $parent.find('div.image-container div.overlay > p:eq(0)').text(desc);
                        $parent.attr('data-album', pos).find('span.loading').hide();
                        // replace carousel1 with the albums' images
                        var html = '', src, desc;
                        $parent.find('p.imageDescription').text(desc);
                        $parent.find('p.imageDescription').text(data[pos].images[0].description); // update desc to first image
                        
                        // Recalculate first carrusel
                        total = $parent.find('div.carrusel1 ul li').length;
                        setWidthCarr1(total);
                        num=0;
                    }).attr("src", firstimage);
                } else {
                    // image
                    $parent.find('a.image').removeClass('active');
                    $(this).addClass('active');
                    var src = $(this).find('img:eq(0)').attr('src').replace(rendition['thumb'],rendition['image']),
                    href = $(this).attr('href');
                    desc = $(this).find('span.title:eq(0)').text();

                    // making sure an image is loaded before showing it
                    $parent.find('span.loading').fadeIn(200).show();
                    $parent.find("img.mainimage:eq(0)").on('load', function() {
                        $parent.find('div.image-container div.overlay .imageDescription').text(desc);
                        $parent.find('a.expand').attr({
                            'href': href,
                            'title' : desc
                        }); // update expand link to detail URL
                        $parent.attr('data-image', pos).find('span.loading').hide();
                    }).attr("src", '');
                    //$parent.find("img.mainimage").attr("src", src);
                    loadImage(src, 'img.mainimage', desc);
                    if ($parent.hasClass('autoplay')) {
                        num = pos;
                    }
                }
                $parent.find('span.loading').hide();
                return false;
            });
        } else {
            return true;
        }
    });

    if ($(window).width() > 948) {
        // Mouse actions - Display/Hide Social Btns
        $(".vid_4vids_05 .image-container").mouseenter( function(){
            
            $(this).children('.td_bg').fadeIn();
        });
        
        $(".vid_4vids_05 .image-container").mouseleave( function(){
            
            $(this).children('.td_bg').fadeOut();
        });
    } else{
        // Mouse actions - Display/Hide Social Btns
        $(".vid_4vids_05 .image-container").click( function(){
            
            if( $(this).children('.td_bg').is(':visible') )
                $(this).children('.td_bg').fadeOut();
            else
                $(this).children('.td_bg').fadeIn();
        });
        
    }

    
    // ARROW CLICKS
    
    $parent.find("a.left").click(function(){
        
        $(this).parent().siblings('.carruselcontainer').animate({
                'scrollLeft': $(this).scrollLeft() - 477
            }, 500);
    });
    $parent.find("a.right").click(function(){
        
        total = $parent.find('div.carrusel1 ul li').length;
        var total2 = $parent.find('div.carrusel2 ul li').length;
        var quien = $(this).parent().parent();
        // Si es el carrusel 2
        if(
            (total > 6 && $(quien).hasClass( "carrusel1" ) ) 
            ||
            (total2 > 3 && $(quien).hasClass( "carrusel2" ) ) 
        ){
            $(this).parent().siblings('.carruselcontainer').animate({
                'scrollLeft': $(this).scrollLeft() + 477
            }, 500);
        }
        
    });
    // left-right arrows touch
     $parent.find("a.left").bind('touchstart',function(e) {
         
         event.preventDefault();
        $(this).parent().siblings('.carruselcontainer').animate({
            'scrollLeft': $(this).scrollLeft() - 477
        }, 500);
    });
    $parent.find("a.right").bind('touchstart',function(e) {
        event.preventDefault();
        total = $parent.find('div.carrusel1 ul li').length;
        if(total > 6 ){
            $(this).parent().siblings('.carruselcontainer').animate({
                'scrollLeft': $(this).scrollLeft() + 477
            }, 500);
        }
    });
    
    
    $parent.find('.carrusel1 .carruselcontainer').scroll(function() {
        
        var $ig4_position = $(this).scrollLeft();
        var $id4_med = $ig4_position + $(this).width();
        var $id4_lt = $(this).children().width(); 
        
        if($ig4_position == 0){
            $(this).parent().find('.left .tvsa-double-caret-left').removeClass('active');
            $(this).parent().find('.left .tvsa-double-caret-left').addClass('inactive');
        }
        else{
            $(this).parent().find('.left .tvsa-double-caret-left').removeClass('inactive');
            $(this).parent().find('.left .tvsa-double-caret-left').addClass('active');
        }
        
        
        
        if($id4_med == $id4_lt || $parent.find('div.carrusel1 ul.ulcarrusel li').length < 7){
            $(this).parent().find('.right .tvsa-double-caret-right').addClass('inactive');
            $(this).parent().find('.right .tvsa-double-caret-right').removeClass('active');
        }
        else{
            $(this).parent().find('.right .tvsa-double-caret-right').addClass('active');
            $(this).parent().find('.right .tvsa-double-caret-right').removeClass('inactive');
        }
        
        
    });
    
    $parent.find('.carrusel2 .carruselcontainer').scroll(function() {
        
        var $ig4_position = $(this).scrollLeft();
        var $id4_med = $ig4_position + $(this).width();
        var $id4_lt = $(this).children().width(); 
        
        if($ig4_position == 0){
            $(this).parent().find('.left .tvsa-double-caret-left').removeClass('active');
            $(this).parent().find('.left .tvsa-double-caret-left').addClass('inactive');
        }
        else{
            $(this).parent().find('.left .tvsa-double-caret-left').removeClass('inactive');
            $(this).parent().find('.left .tvsa-double-caret-left').addClass('active');
        }
        
        //if($id4_med == $id4_lt){
        if($id4_med > 900){
            $(this).parent().find('.right .tvsa-double-caret-right').addClass('inactive');
            $(this).parent().find('.right .tvsa-double-caret-right').removeClass('active');
        }
        else{
            $(this).parent().find('.right .tvsa-double-caret-right').addClass('active');
            $(this).parent().find('.right .tvsa-double-caret-right').removeClass('inactive');
        }
        ////console.log($id4_med);
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
    
/**
* Manually update the position of the imgs on drag
*/
function scrollImages(distance, duration, carousel) {
}

//$(document).ready(function(){
$(function(){
    // making sure that this works even if there's two or more of this component in a page...
    vid_4vids_05_init();
    if ($.browser.msie && parseInt($.browser.version, 10) <= 8 ){
        $('.vid_4vids_05 .type1a_ .carruselcontainer').attr('overflow', 'hidden');
    }
});


$(window).resize(function(){
    if ($(window).width() < 624 && $('body:eq(0)').data('viewport') > 623) {
        // mobile reached
        vid_4vids_05_init();
    }
    if ($(window).width() >= 624) {
    }
    $('body:eq(0)').attr('data-viewport',$(window).width());
});

function setWidthCarr1(total){
    // 1st carrusel width
    var ancho_li = $parent.find('div.carrusel1 ul li').width()+11;
    var anchoul1 = (total * ancho_li) - 9;
    if ($.browser.msie && parseInt($.browser.version, 10) <= 8){
        anchoul1 += 10;
    }
    $parent.find('div.carrusel1 ul.ulcarrusel').width(anchoul1);
    
    
}

function setWidthCarr2(){
    // 2nd carrusel width
    var total2 = $parent.find('div.carrusel2 ul li').length;
    var ancho_li = $parent.find('div.carrusel2 ul li').width()+22;
    var anchoul2 = (total2 * ancho_li);
    $parent.find('div.carrusel2 ul.ulcarrusel').width(anchoul2);
}
 
function loadImage(path, parent, desc) {
        $parent.find('.image-container .mainimage').remove();
        var img = new Image();
        
        $(img).load(function(){
            
            $('.vid_4vids_05 .image-container .loading').hide();
            $('.vid_4vids_05 .image-container').append($(this));
             $parent.find('div.image-container div.overlay .imageDescription').text(desc);
        }).attr({
          src: path,
          "class": 'mainimage',
          "width" : '624',
          "height" : '468' 
        }).error(function(){
          //do something if image cannot load
        });
}/**
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

var IMG_WIDTH = 460;
var currentImg=0;
var maxImages=2;
var speed=750;
var imgs;
var total = 0;

/**
 * all gallery related behavior
 */
function img_galry_01_init() {
    // this function is fired upon resize, so we need to unbind each listener
    // in order not to have multiple listeners per dom element
    
    $("div.img_galry_01").each(function(){
        var rendition = new Array();
        rendition['thumb'] = 'thumb';
        rendition['image'] = 'image';
        rendition['album'] = 'album';

        $parent = $(this);
        var carousel = $parent;
        
        
        var num = 0,
        total = $parent.find('div.carrusel1 ul li').length;

        //////////////////////////////////////////////////////////////////////
        setWidthCarr1(total);
        setWidthCarr2();

        // the autoplay functionality
        if (total > 1) {
            window.setInterval(function() {
                // only if there is a class autoplay
                if ($parent.hasClass('autoplay')) {
                    // increase by num 1, reset to 0 at 3 (or whatever amount of images there are)
                    num = (num + 1) % total;
                    //console.log(num);
                    $parent.find('div.carrusel1 ul li a:eq('+num+')').click();
                    $parent.attr('data-current',num);
                    
                    // move 1st carrusel
                    if(total > 5 && ((num%6)== 0) && num != 0){
                        // Move right
                        $parent.find('.carrusel1 a.right').click();
                        ////console.log('click');
                    }
                    else if(num== 0){
                        // Reset to 0 position
                        $parent.find('.carrusel1 .carruselcontainer').animate({
                            'scrollLeft': 0
                        }, 500);
                    }
                    ////console.log(num);
                }
            }, 5000); // repeat forever, polling every n seconds
        }

        // pause, resume of the autoplay (this is the play/pause button)
        $parent.find('div.image-container div.controls a.td_bg:eq(0)').click(function(){
            if ($(this).hasClass('play')) {
                $parent.addClass('autoplay');
                $(this).removeClass('play').addClass('pause').find('i').removeClass('tvsa-play').addClass('tvsa-pause');
            } else {
                $parent.removeClass('autoplay');
                $(this).removeClass('pause').addClass('play').find('i').removeClass('tvsa-pause').addClass('tvsa-play');
                //num= 0;
            }
            return false;
        });

        $parent.attr({'data-album':0,'data-image':0});
        var data = jQuery.parseJSON($parent.find('span.data').text());
        
        $parent.find('span.loading').hide();
        
        // if we are in mobile
        if ($(window).width() < 624) {
            
            // Remove the calculated width of carrusel
            setTimeout(function(){
                $parent.find('.carrusel2 .ulcarrusel').css('width','95%');  
            },200);
            
        }

        /*Swipe*/
        $theUl = $parent.find('.carruselcontainer');
        $theUl.bind('swipeup',function(){
            $(this).animate({
                    'scrollTop': $theUl.scrollTop() + 250
                }, 500);
        });
        $theUl.bind('swipedown',function(){
            $(this).animate({
                    'scrollTop': $theUl.scrollTop() - 250
                }, 500);
        });

        if ($(window).width() > 623) {

            $parent.find('span.laoding').hide();
            $parent.find('ul.ulcarrusel').unbind();
            
            var swipeOptions={
                triggerOnTouchEnd : true,   
                swipeStatus : swipeStatus,
                allowPageScroll:"vertical",
                threshold:75
            }

            //$parent.find("div.carrusel1 ul.ulcarrusel").swipe(swipeOptions);
            //$parent.find("div.carrusel2 ul.ulcarrusel").swipe(swipeOptions);
            
            // Click IMG - Album or Photo
            $parent.find('ul.ulcarrusel').on('click touchstart', 'a', function(ev){
                var pos = $(this).data('pos');

                if ($(this).hasClass('album')) {
                    // album

                    $parent.find('a.album').removeClass('active');
                    $(this).addClass('active');
                    $parent.find('span.loading').fadeIn(200).show();
                    
                    var firstimage = data[pos].images[0].path,
                    desc = data[pos].images[0].description;

                    ////console.log(firstimage);
                    ////console.log(desc);
                    
                    $parent.find("img.mainimage:eq(0)").on('load', function() {
                        ////console.log($parent.find('div.image-container div.overlay > p:eq(0)').text());
                        
                        $parent.find('div.image-container div.overlay > p:eq(0)').text(desc);
                        $parent.attr('data-album', pos).find('span.loading').hide();
                        // replace carousel1 with the albums' images
                        var html = '', src, desc;
                        $parent.find('p.imageDescription').text(desc);
                        for (var i=0;i<data[pos].images.length;i++) {
                            var active = '';
                            if (i===0) {
                                active=' active ';
                            }

                            // add the real link to the final page
                            html += '<li>'+
                                        '<a href="' + data[pos].images[i].expandurl + '" class="image' + active + '" data-pos="' + i + '" title="' + data[pos].images[i].description + '">'+
                                            '<img src="' + data[pos].images[i].path + '" width="85" height="66" alt="" class=""  title="' + data[pos].images[i].description + '" />'+
                                            '<span class="border"></span>'+
                                            '<span class="icon"><i class="tvsa-camera"></i></span>'+
                                            '<span class="title">' + data[pos].images[i].description + '</span>'+
                                        '</a>'+
                                    '</li>';
                        }
                        
                        
                        // 1st DELETE
                        $parent.find('div.carrusel1 ul.ulcarrusel li').remove();
                        // Then ADD NEW ONES
                        $parent.find('div.carrusel1 ul.ulcarrusel').append(html);
                        
                        $parent.find('.carrusel1 .carruselcontainer').animate({
                            'scrollLeft': 0
                        }, 500);
                        
                        
                        
                        
                        $parent.find('div.carrusel1 .right .tvsa-double-caret-right').addClass('inactive');
                        $parent.find('div.carrusel1 .right .tvsa-double-caret-right').removeClass('active');    
                        
                        if($parent.find('div.carrusel1 ul.ulcarrusel li').length > 6){
                            
                            $parent.find('div.carrusel1 .right .tvsa-double-caret-right').addClass('active');
                            $parent.find('div.carrusel1 .right .tvsa-double-caret-right').removeClass('inactive');
                        }
                        
                        $parent.find('p.imageDescription').text(data[pos].images[0].description); // update desc to first image
                        $parent.find('a.expand').attr({
                            'href': data[pos].images[0].expandurl,
                            'title' : data[pos].images[0].description
                        }); // update expand link to detail URL
                        
                        // Recalculate first carrusel
                        total = $parent.find('div.carrusel1 ul li').length;
                        setWidthCarr1(total);
                        num=0;
                        ////console.log('recalcular');
                        
                    }).attr("src", firstimage);
                } else {
                    // image
                    
                    $parent.find('a.image').removeClass('active');
                    $(this).addClass('active');

                    var src = $(this).find('img:eq(0)').attr('src').replace(rendition['thumb'],rendition['image']),
                    href = $(this).attr('href');
                    desc = $(this).find('span.title:eq(0)').text();
                    

                    // making sure an image is loaded before showing it
                    $parent.find('span.loading').fadeIn(200).show();
                    $parent.find("img.mainimage:eq(0)").on('load', function() {
                        
                        $parent.find('div.image-container div.overlay .imageDescription').text(desc);
                        $parent.find('a.expand').attr({
                            'href': href,
                            'title' : desc
                        }); // update expand link to detail URL
                        $parent.attr('data-image', pos).find('span.loading').hide();
                        
                        
                        
                    }).attr("src", '');
                    //$parent.find("img.mainimage").attr("src", src);
                    loadImage(src, 'img.mainimage', desc);
                    if ($parent.hasClass('autoplay')) {
                        num = pos;
                    }
                }

                $parent.find('span.loading').hide();
                return false;
            });
        } else {
            return true;
        }
    });

    if ($(window).width() > 948) {
        // Mouse actions - Display/Hide Social Btns
        $(".img_galry_01 .image-container").mouseenter( function(){
            
            $(this).children('.td_bg').fadeIn();
        });
        
        $(".img_galry_01 .image-container").mouseleave( function(){
            
            $(this).children('.td_bg').fadeOut();
        });
    } else{
        // Mouse actions - Display/Hide Social Btns
        $(".img_galry_01 .image-container").click( function(){
            
            if( $(this).children('.td_bg').is(':visible') )
                $(this).children('.td_bg').fadeOut();
            else
                $(this).children('.td_bg').fadeIn();
        });
        
    }

    
    // ARROW CLICKS
    
    $parent.find("a.left").click(function(){
        
        $(this).parent().siblings('.carruselcontainer').animate({
                'scrollLeft': $(this).scrollLeft() - 477
            }, 500);
    });
    $parent.find("a.right").click(function(){
        
        total = $parent.find('div.carrusel1 ul li').length;
        var total2 = $parent.find('div.carrusel2 ul li').length;
        var quien = $(this).parent().parent();
        // Si es el carrusel 2
        if(
            (total > 6 && $(quien).hasClass( "carrusel1" ) ) 
            ||
            (total2 > 3 && $(quien).hasClass( "carrusel2" ) ) 
        ){
            $(this).parent().siblings('.carruselcontainer').animate({
                'scrollLeft': $(this).scrollLeft() + 477
            }, 500);
        }
        
    });
    // left-right arrows touch
     $parent.find("a.left").bind('touchstart',function(e) {
         
         event.preventDefault();
        $(this).parent().siblings('.carruselcontainer').animate({
            'scrollLeft': $(this).scrollLeft() - 477
        }, 500);
    });
    $parent.find("a.right").bind('touchstart',function(e) {
        event.preventDefault();
        total = $parent.find('div.carrusel1 ul li').length;
        if(total > 6 ){
            $(this).parent().siblings('.carruselcontainer').animate({
                'scrollLeft': $(this).scrollLeft() + 477
            }, 500);
        }
    });
    
    
    $parent.find('.carrusel1 .carruselcontainer').scroll(function() {
        
        var $ig4_position = $(this).scrollLeft();
        var $id4_med = $ig4_position + $(this).width();
        var $id4_lt = $(this).children().width(); 
        
        if($ig4_position == 0){
            $(this).parent().find('.left .tvsa-double-caret-left').removeClass('active');
            $(this).parent().find('.left .tvsa-double-caret-left').addClass('inactive');
        }
        else{
            $(this).parent().find('.left .tvsa-double-caret-left').removeClass('inactive');
            $(this).parent().find('.left .tvsa-double-caret-left').addClass('active');
        }
        
        
        
        if($id4_med == $id4_lt || $parent.find('div.carrusel1 ul.ulcarrusel li').length < 7){
            $(this).parent().find('.right .tvsa-double-caret-right').addClass('inactive');
            $(this).parent().find('.right .tvsa-double-caret-right').removeClass('active');
        }
        else{
            $(this).parent().find('.right .tvsa-double-caret-right').addClass('active');
            $(this).parent().find('.right .tvsa-double-caret-right').removeClass('inactive');
        }
        
        
    });
    
    $parent.find('.carrusel2 .carruselcontainer').scroll(function() {
        
        var $ig4_position = $(this).scrollLeft();
        var $id4_med = $ig4_position + $(this).width();
        var $id4_lt = $(this).children().width(); 
        
        if($ig4_position == 0){
            $(this).parent().find('.left .tvsa-double-caret-left').removeClass('active');
            $(this).parent().find('.left .tvsa-double-caret-left').addClass('inactive');
        }
        else{
            $(this).parent().find('.left .tvsa-double-caret-left').removeClass('inactive');
            $(this).parent().find('.left .tvsa-double-caret-left').addClass('active');
        }
        
        //if($id4_med == $id4_lt){
        if($id4_med > 900){
            $(this).parent().find('.right .tvsa-double-caret-right').addClass('inactive');
            $(this).parent().find('.right .tvsa-double-caret-right').removeClass('active');
        }
        else{
            $(this).parent().find('.right .tvsa-double-caret-right').addClass('active');
            $(this).parent().find('.right .tvsa-double-caret-right').removeClass('inactive');
        }
        ////console.log($id4_med);
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
    
/**
* Manually update the position of the imgs on drag
*/
function scrollImages(distance, duration, carousel) {
    //var t = (duration/1000).toFixed(1);
//  carousel.css({
//      "-webkit-transition-duration": t + "s",     /* Chrome 1-25, Safari 3.2+ */
//      "-moz-transition": t + "s",                 /* Firefox 4-15 */
//      "-o-transition": t + "s",                   /* Opera 10.50???12.00 */
//      "transition": t + "s"                       /* Chrome 26, Firefox 16+, IE 10+, Opera 12.10+ */
//  });
//  
//  //inverse the number we set in the css
//  var value = (distance<0 ? "" : "-") + Math.abs(distance).toString();
//  
//  carousel.css({
//      "-webkit-transform": "translate3d("+value +"px,0px,0px)",   
//      "-moz-transform" : "translate3d("+value +"px,0px,0px)",     /* Firefox 3.5-15 */ 
//      "-ms-transform" : "translate3d("+value +"px,0px,0px)",      /* IE 9 */
//      "-o-transform" : "translate3d("+value +"px,0px,0px)",       /* Opera 10.50-12.00 */ 
//      "transform" : "translate3d("+value +"px,0px,0px)"           /* Firefox 16+, IE 10+, Opera 12.10+ */ 
//  });
    ////console.log(value);
//  //console.log(carousel.length);
//  //console.log(duration);
    //carousel.animate({marginLeft:value+'px'}, duration, 'easeInOutExpo');
    
    /*if(distance <= 0){
        carousel.parents('.type1a_').find('.left .tvsa-double-caret-left').addClass('inactive');
        carousel.parents('.type1a_').find('.left .tvsa-double-caret-left').removeClass('active');
        
        carousel.parents('.type1a_').find('.right .tvsa-double-caret-right').addClass('active');
        carousel.parents('.type1a_').find('.right .tvsa-double-caret-right').removeClass('inactive');
    }
    else{
        carousel.parents('.type1a_').find('.left .tvsa-double-caret-left').addClass('active');
        carousel.parents('.type1a_').find('.left .tvsa-double-caret-left').removeClass('inactive');
        
        carousel.parents('.type1a_').find('.right .tvsa-double-caret-right').addClass('inactive');
        carousel.parents('.type1a_').find('.right .tvsa-double-caret-right').removeClass('active');
    }*/
    
    
    // scroll
    
    
}

//$(document).ready(function(){
$(function(){
    // making sure that this works even if there's two or more of this component in a page...
    img_galry_01_init();
    if ($.browser.msie && parseInt($.browser.version, 10) <= 8 ){
        $('.img_galry_01 .type1a_ .carruselcontainer').attr('overflow', 'hidden');
        //alert($('.img_galry_01 .type1a_ .carruselcontainer').attr('overflow'));
    }
});


$(window).resize(function(){
    if ($(window).width() < 624 && $('body:eq(0)').data('viewport') > 623) {
        // mobile reached
//      //console.log('firing the init.');
        img_galry_01_init();
    }
    if ($(window).width() >= 624) {
        // tablet and desktop reached
        //img_galry_01_init();
    }
    $('body:eq(0)').attr('data-viewport',$(window).width());
});

function setWidthCarr1(total){
    // 1st carrusel width
    var ancho_li = $parent.find('div.carrusel1 ul li').width()+11;
    var anchoul1 = (total * ancho_li) - 9;
    if ($.browser.msie && parseInt($.browser.version, 10) <= 8){
        anchoul1 += 10;
    }
    $parent.find('div.carrusel1 ul.ulcarrusel').width(anchoul1);
    
    
}

function setWidthCarr2(){
    // 2nd carrusel width
    var total2 = $parent.find('div.carrusel2 ul li').length;
    var ancho_li = $parent.find('div.carrusel2 ul li').width()+22;
    var anchoul2 = (total2 * ancho_li);
    $parent.find('div.carrusel2 ul.ulcarrusel').width(anchoul2);
}


/*$(document).ready(function(){
        $('.img_galry_01 .carrusel1 .ulcarrusel li a.image').on("click", function(e){
            $parent.find('div.carrusel1 ul.ulcarrusel li a').removeClass('active');
            $(this).addClass('active');

            e.preventDefault();
         });

 });*/
 
 function loadImage(path, parent, desc) {
    
        //$('.image-container .mainimage').remove();
        $parent.find('.image-container .mainimage').remove();
        var img = new Image();
        
        $(img).load(function(){
            
            $('.img_galry_01 .image-container .loading').hide();
            $('.img_galry_01 .image-container').append($(this));
             $parent.find('div.image-container div.overlay .imageDescription').text(desc);
          
        
        }).attr({
        
          src: path,
          "class": 'mainimage',
          "width" : '624',
          "height" : '468' 
        
        }).error(function(){
          //do something if image cannot load
        });
}$(document).ready(function() {
    (function(T, $) {
        var onDocumentReady = function() {
            var $parent = $('#top_6_coporativo');       
            var $clickListA = $parent.find('.art_latestnews_01_lasth');
            var $clickListB = $parent.find('.art_latestnews_01_morev');
            var $overLink = $parent.find('.art_latestnews_01_list1 li');
            var $parent2 = $('#mxmPadre');       
            var $clickListA2 = $parent2.find('.art_latestnews_01_lasth');
            var $clickListB2 = $parent2.find('.art_latestnews_01_morev');
            var $overLink2 = $parent2.find('.art_latestnews_01_list1 li');

            $clickListA.bind('click', function(evt) {
                evt.preventDefault();
                $(this).addClass("selected");
                $('#top_6_coporativo .art_latestnews_01_morev').removeClass("selected");
                $('#top_6_coporativo .art_latestnews_01_list1').show();
                $('#top_6_coporativo .art_latestnews_01_list2').hide();
            });
            $clickListB.bind('click', function(evt) {
                evt.preventDefault();
                $(this).addClass("selected");
                $('#top_6_coporativo .art_latestnews_01_lasth').removeClass("selected");
                $('#top_6_coporativo .art_latestnews_01_list1').hide();
                $('#top_6_coporativo .art_latestnews_01_list2').show();
            });
            $clickListA2.bind('click', function(evt) {
                evt.preventDefault();
                $(this).addClass("selected");
                $('#mxmPadre .art_latestnews_01_morev').removeClass("selected");
                $('#mxmPadre .art_latestnews_01_list1').show();
                $('#mxmPadre .art_latestnews_01_list2').hide();
            });
            $clickListB2.bind('click', function(evt) {
                evt.preventDefault();
                $(this).addClass("selected");
                $('#mxmPadre .art_latestnews_01_lasth').removeClass("selected");
                $('#mxmPadre .art_latestnews_01_list1').hide();
                $('#mxmPadre .art_latestnews_01_list2').show();
            });

            if (T.getDeviceSize() == 'large') {
                $overLink.bind('mouseover', function(evt) {
                    evt.preventDefault();
                    $(this).find('.art_latestnews_01_over').css("display","block");
                });
                $overLink.bind('mouseout', function(evt) {
                    evt.preventDefault();
                    $(this).find('.art_latestnews_01_over').css("display","none");
                });   
                $overLink2.bind('mouseover', function(evt) {
                    evt.preventDefault();
                    $(this).find('.art_latestnews_01_over').css("display","block");
                });
                $overLink2.bind('mouseout', function(evt) {
                    evt.preventDefault();
                    $(this).find('.art_latestnews_01_over').css("display","none");
                });   
            } 
            $(window).resize(function() {
                if( $(window).width() > 960 ){
                    $overLink.bind('mouseover', function(evt) {
                        evt.preventDefault();
                        $(this).find('.art_latestnews_01_over').css("display","block");
                    });
                    $overLink.bind('mouseout', function(evt) {
                        evt.preventDefault();
                        $(this).find('.art_latestnews_01_over').css("display","none");
                    });  
                    $overLink2.bind('mouseover', function(evt) {
                        evt.preventDefault();
                        $(this).find('.art_latestnews_01_over').css("display","block");
                    });
                    $overLink2.bind('mouseout', function(evt) {
                        evt.preventDefault();
                        $(this).find('.art_latestnews_01_over').css("display","none");
                    });   
                }
                if( $(window).width() <= 960 ){
                    $overLink.bind('mouseover', function(evt) {
                        evt.preventDefault();
                        $(this).find('.art_latestnews_01_over').css("display","none");
                    });
                    $overLink2.bind('mouseover', function(evt) {
                        evt.preventDefault();
                        $(this).find('.art_latestnews_01_over').css("display","none");
                    });
                }
            });
        };
        $(onDocumentReady);
    }(Televisa, jQuery));

});;jQuery(function($){ 
    (function($,T){
        $('.wdg_positions_01').each(function(ix,element){
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $wp1_theUl = $('#navigation_list');
            
            $this.find('a.prev, a.next').click(function(event){
                event.preventDefault();
            });
            
            $this.find('a.prev').bind(Pointer.DOWN,function(){
                $('#navigation_list').animate({
                    'scrollTop': $wp1_theUl.scrollTop() - $wp1_theUl.height()
                }, 500);
            });
            
            $this.find('a.next').bind(Pointer.DOWN,function(){
                $('#navigation_list').animate({
                    'scrollTop': $wp1_theUl.scrollTop() + $wp1_theUl.height()
                }, 500);
            });
        });
        
        /*Swipe*/
        $('.wdg_positions_01 .scroll').bind('swipeup',function(){
            $move =  $(this).children().children().children().height();
            $move = $move * 3;
            $(this).animate({
                    'scrollTop': $(this).scrollTop() + $move
                }, 500);
        });
        $('.wdg_positions_01 .scroll').bind('swipedown',function(){
            $(this).animate({
                    'scrollTop': $(this).scrollTop() - $move
                }, 500);
        });
        /*Monitoreo scroll*/
        var wp1_altura = $('.wdg_positions_01 .datos').height();
        $('.wdg_positions_01 .scroll').scroll(function() {
                var $wp1_position = $(this).scrollTop();
                if($(this).scrollTop() + $(this).height() == wp1_altura) {
                 $(this).siblings('.degradado').css("visibility","hidden");
                 //$(this).siblings('.wdg_positions_01_cnt').children().children('.next').css('color','#000');
                 $(this).siblings('.wdg_positions_01_cnt').children().children('.next').addClass('bginactive');
                 $(this).siblings('.wdg_positions_01_cnt').children().children('.next').removeClass('bgactive');
                }else{
                 $(this).siblings('.degradado').css("visibility","visible");
                 //$(this).siblings('.wdg_positions_01_cnt').children().children('.next').css('color','#FFF');
                  $(this).siblings('.wdg_positions_01_cnt').children().children('.next').addClass('bgactive');
                 $(this).siblings('.wdg_positions_01_cnt').children().children('.next').removeClass('bginactive');
                }
                if($wp1_position == 0){
                 //$(this).siblings('.wdg_positions_01_cnt').children().children('.prev').css('color','#000');
                 $(this).siblings('.wdg_positions_01_cnt').children().children('.prev').addClass('bginactive');
                 $(this).siblings('.wdg_positions_01_cnt').children().children('.prev').removeClass('bgactive');
                }
                else
                {
                    //$(this).siblings('.wdg_positions_01_cnt').children().children('.prev').css('color','#FFF');
                    $(this).siblings('.wdg_positions_01_cnt').children().children('.prev').addClass('bgactive');
                    $(this).siblings('.wdg_positions_01_cnt').children().children('.prev').removeClass('bginactive');
                }
            });    
    })($,Televisa);
});
;$(document).ready(function() {
 
    ;(function ($, T) {
    /*Para version ie7*/
    
    var n_bullets_tablet = 0;
    var n_bullets_mobile = 0;
    var anchoTotalUL = $(".btn_carru_prog_02 .carrusel ul").width(); // 100%
    

    var bulletSelected;
    var scrollLeft;
    
    if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
        var anchoVentna = document.body.offsetWidth;
    }
    else{
        var anchoVentna =  $(window).width();
    }

    $('.btn_carru_prog_02 .typecarruse').css('margin-top', '-34px');
    /*Termina ie7*/ 
            var $m = $('.btn_carru_prog_02 .carrusel'),
                    animationDelay = 500;

            $m.each(function() {

                    var $items = $(this).find('ul li'),
                            padding = ($(this).parent().hasClass('type1c')) ? 41 : 0,
                            Pointer = {
                                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'click'
                                    //DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'  // Linea original
                            },
                            $parent = $(this);


                    /* adding new code block to get the width of the elements, 
                    along with left and right padding, border, and optionally margin,
                    in pixels. */
                        
                    var itemsLength = $items.length;
                    //var ulWidth = (itemsLength  * 137) + ((itemsLength - 1) * 25) + 5;
                    // Sacamos el ancho total del UL del carrusel
                    var anchoTotalUL = $(".btn_carru_prog_02 .carrusel ul").width(); // 100%
                    var elements = $(".btn_carru_prog_02 .carrusel li").size();
                    var ulWidth = (elements * 325) - 38;
                    
                    
                    
                    /*calculo n??mero de bullets tablet*/
                    n_bullets_tablet = elements / 2;
                    n_bullets_tablet = Math.ceil(n_bullets_tablet);
                    n_bullets_tablet = n_bullets_tablet;
                    var lis = "";
                    for(n=0;n < n_bullets_tablet;n++){
                            if(n==0){
                                //lis = "<li class='background-color1 bg-corporativo'></li>"+lis;
                                lis = "<li class='background-color1'></li>"+lis;
                            }
                            else{
                                lis = "<li></li>"+lis;
                            }
                            
                    }
                    $('.btn_carru_prog_02 #b_tablet').append("<ul>"+lis+"</ul>");
                    
                    /*calculo n??mero de bullets mobile*/
                    n_bullets_mobile = elements;
                    var lis_m = "";
                    for(n=0;n < n_bullets_mobile;n++){
                            if(n==0)
                            {
                                //lis_m = "<li class='background-color1 bg-corporativo'></li>"+lis_m;
                                lis_m = "<li class='background-color1'></li>"+lis_m;
                            }
                            else
                            {
                                lis_m = "<li></li>"+lis_m;
                            }
                        }
                    $('.btn_carru_prog_02 #b_mobile').append("<ul>"+lis_m+"</ul>");
                    
                    
                    
                    $(this).find('ul').width(ulWidth + padding);
                    
                  

                    // Support the click event on arrows
                    $parent.parent().find('a.left').click(function(e) {
                        e.preventDefault();
                        $parent.animate({
                            'scrollLeft': $parent.scrollLeft() - $parent.width() - 21
                        }, animationDelay,"linear",function(){
                        /*Verifico posici??n del scroll*/ 
                        var large_tot = $(this).children().width();
                        var estoy = $(this).attr('class');
                        var position = $parent.scrollLeft();
                        var med = position + $parent.width();
                        //console.log('scroll: '+position+' med: '+med+' large_tot: '+large_tot+' estoy: '+estoy);
                        
                        if(position == 0)
                        {
                            $(this).siblings('.title').children().children().children().children().css('color', '#BABABA');
                        }
                        else
                        {
                            $(this).siblings('.title').children().children().children().children().css('color', '#000000');
                        }  
                        if(med == large_tot)
                        {
                            $(this).siblings('.title').children().children().siblings().children().children('.tvsa-double-caret-right').css('color', '#BABABA');
                        }
                        else
                        {
                            $(this).siblings('.title').children().children().siblings().children().children('.tvsa-double-caret-right').css('color', '#000000');
                        }
                    });  
                });

                $parent.parent().find('a.right').click(function(e) {
                    e.preventDefault();
                    $parent.animate({
                        'scrollLeft': $parent.scrollLeft() + $parent.width() + 21
                                    
                    }, animationDelay,"linear",function(){
                    /*Verifico posici??n del scroll*/ 
                    var large_tot2 = $(this).children().width();
                    var estoy2 = $(this).attr('class');
                    var position2 = $parent.scrollLeft();
                    var med2 = position2 + $parent.width();
                    //console.log('scroll: '+position2+' med: '+med2+' large_tot: '+large_tot2+' estoy: '+estoy2);
                    if(position2 == 0)
                        {
                            $(this).siblings('.title').children().children().children().children().css('color', '#BABABA');
                        }
                        else
                        {
                            $(this).siblings('.title').children().children().children().children().css('color', '#000000');
                        }  
                    if(med2 == large_tot2)
                        {
                            $(this).siblings('.title').children().children().siblings().children().children('.tvsa-double-caret-right').css('color', '#BABABA');
                        }
                        else
                        {
                            $(this).siblings('.title').children().children().siblings().children().children('.tvsa-double-caret-right').css('color', '#000000');
                        }
                    });  
                });
                
                /*Swipe*/
                //alert($parent.attr('class'));
          
           
                
                
        });
            
        /*Mobile change bullet*/

        /*Verificamos que bullet pintar*/
        $carrusel = $('.btn_carru_prog_02 .carrusel');
        $carrusel.scroll(function(e){
            
            e.preventDefault();
            
        scrollLeft = $(this).scrollLeft() + (anchoVentna/2.5) ;
        
        var porcentaje =  ( scrollLeft * 1000) / anchoTotalUL; 
        
        /*Mobile*/
        
        //armar estructura din??mica seg??n n??mero de bullets
        typem = n_bullets_mobile; 
        if(typem == 8)
        {
        if( scrollLeft < 250)
            bulletSelected = 8;
        else if( scrollLeft >= 251 && scrollLeft <= 540)
            bulletSelected = 7;
        else if( scrollLeft >= 541 && scrollLeft <= 890)
            bulletSelected = 6;
        else if( scrollLeft >= 891 && scrollLeft <= 1230)
            bulletSelected = 5;
        else if( scrollLeft >= 1231 && scrollLeft <= 1540)
            bulletSelected = 4;
        else if( scrollLeft >= 1541 && scrollLeft <= 1900)
            bulletSelected = 3;
        else if( scrollLeft >= 1901 && scrollLeft <= 2190)
            bulletSelected = 2;
        else if( scrollLeft >= 2191 && scrollLeft <= 2500)
            bulletSelected = 1;
        else if( scrollLeft >= 2501)
            bulletSelected = 1;
        }
        if(typem == 9)
        {
        if( scrollLeft < 250)
            bulletSelected = 9;
        else if( scrollLeft >= 251 && scrollLeft <= 540)
            bulletSelected = 8;
        else if( scrollLeft >= 541 && scrollLeft <= 890)
            bulletSelected = 7;
        else if( scrollLeft >= 891 && scrollLeft <= 1230)
            bulletSelected = 6;
        else if( scrollLeft >= 1231 && scrollLeft <= 1540)
            bulletSelected = 5;
        else if( scrollLeft >= 1541 && scrollLeft <= 1900)
            bulletSelected = 4;
        else if( scrollLeft >= 1901 && scrollLeft <= 2190)
            bulletSelected = 3;
        else if( scrollLeft >= 2191 && scrollLeft <= 2500)
            bulletSelected = 2;
        else if( scrollLeft >= 2501)
            bulletSelected = 1;
        }
        $('.btn_carru_prog_02 #b_mobile ul li').removeClass('background-color1');
        $(".btn_carru_prog_02 #b_mobile ul li:nth-child("+bulletSelected+")").addClass('background-color1')
            
            
        /*Tablet*/
        
        //armar estructura din??mica seg??n n??mero de bullets
        type = n_bullets_tablet%2; 
            if(type != 0)
            {
                type = n_bullets_tablet -1;
            }
            else
            {
                type = n_bullets_tablet;
            }
        //console.log("Cantidad de elementos: " + n_bullets_tablet +" Posici??n scroll" + scrollLeft + " type: " + type);
        if(type == 4)
        {
            if( scrollLeft < 625)
                bulletSelected_t = 4;
            else if( scrollLeft >= 626 && scrollLeft <= 1230)
                bulletSelected_t = 3;
            else if( scrollLeft >= 1231 && scrollLeft <= 1900)
                bulletSelected_t = 2;
            else if( scrollLeft >= 1901 && scrollLeft <= 2500)
                bulletSelected_t = 1;
            else if( scrollLeft >= 2501)
                bulletSelected_t = 1;
        }
        if(type == 5)
        {
            if( scrollLeft < 625)
                bulletSelected_t = 5;
            else if( scrollLeft >= 626 && scrollLeft <= 1230)
                bulletSelected_t = 4;
            else if( scrollLeft >= 1231 && scrollLeft <= 1900)
                bulletSelected_t = 3;
            else if( scrollLeft >= 1901 && scrollLeft <= 2500)
                bulletSelected_t = 2;
            else if( scrollLeft >= 2501)
                bulletSelected_t = 1;
        }
        $('.btn_carru_prog_02 #b_tablet ul li').removeClass('background-color1');
        $(".btn_carru_prog_02 #b_tablet ul li:nth-child("+bulletSelected_t+")").addClass('background-color1')
        
        });
        
            $('.btn_carru_prog_02 .wdg_scroll_events').bind('mouseleave', function(evt) {
            evt.preventDefault();
            var $listItems = $('.btn_carru_prog_02 .wdg_scroll_events');
            var visibilidad = $listItems.css('visibility');
            if ( visibilidad == 'visible' ) {
                $listItems.css({
                    visibility: 'hidden',
                    height: '0px'        
                });
            } 
        });
            
                $('.btn_carru_prog_02').bind('mouseleave', function(evt) {
            evt.preventDefault();
            var $listItems = $('.btn_carru_prog_02 .wdg_scroll_events');
            var visibilidad = $listItems.css('visibility');
            if ( visibilidad == 'visible' ) {
                $listItems.css({
                    visibility: 'hidden',
                    height: '0px'        
                });
            } 
        });
    }(jQuery, Televisa)); 
   
 });

$(function() {
    //Fix swipe   |   Viveros
    $(".btn_carru_prog_02 .carrusel").swipe( {        
        swipe:function(event, direction, distance, duration, fingerCount) {           
           if (direction==="right") {            
            $(this).animate({
                        'scrollLeft': $(".btn_carru_prog_02 .carrusel").scrollLeft() - 328
                    }, 500);
           }//
           if (direction==="left") {            
            $(this).animate({
                        'scrollLeft': $(".btn_carru_prog_02 .carrusel").scrollLeft() + 328
                    }, 500);


           }


        },        
         threshold:0
      });


 
});

$(document).ready(function(){
    if( $(window).width() <  624 ){
        var $height = $('.mix_1arts_03 .resize img');
        $height.load(function() {
                var $imageHeight = $(this).width(); 
                var $totalHeight = $imageHeight * 0.75;
                $height.parent().height($totalHeight);
        });
    }
    $(window).resize(function() {
        if( $(window).width() <  624 ){
            var $imageHeight = $height.width(); 
                var $totalHeight = $imageHeight * 0.75;
                $height.parent().height($totalHeight);
        }
    });
});$(document).ready(function(){
    /**
     * @desc make the separator line as high as the higher div that it is separating
     * @todo shouldn't the separator line be a component itself?
     */
     $h1 = $('#higth_1').height();
     $h2 = $('#higth_2').height();
     if($h1 >= $h2)
        {
            $h = $h1;
        }
        else
        {
            $h = $h2;
        }
     $('.mix_2arts_05 .divisor').css('height',$h);
     
});;jQuery(function($){ 
    (function($,T){
        /*Swipe*/
        var altWdgResult01 = 0;
        if ($(window).width() < 978 && $(window).width() > 624){
            altWdgResult01 = 568;
        }
        else{
            altWdgResult01 = 163;       
        } 
        
        $('.wdg_altasbajas_result_01 .deg').bind('swipeup',function(){
            $(this).animate({
                    'scrollTop': $(this).scrollTop() + altWdgResult01
                }, 500);
        });
        $('.wdg_altasbajas_result_01 .deg').bind('swipedown',function(){
            $(this).animate({
                    'scrollTop': $(this).scrollTop() - altWdgResult01
                }, 500);
        });         
        
        
        $('.wdg_altasbajas_result_01').each(function(ix,element){ 
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $theUl = $this.find('>ul')
            ;
            
            $this.find('a.prev, a.next, .deportes-prev, .deportes-next').click(function(event){
                event.preventDefault();
            });
            
            $this.find('a.prev, .deportes-prev').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() - $theUl.height()-7
                }, 500);
            });
            
            $this.find('a.next, .deportes-next').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() + $theUl.height()+7
                }, 500);
            }); 
        });
        

        $list = $('.wdg_altasbajas_result_01 .deg li').size();
        $altura_li = parseInt($('.wdg_altasbajas_result_01 .deg li').height());
        $altura = ($altura_li * $list) + $list;

        var $parent = $('.wdg_altasbajas_result_01 ');
        var $dropdownAnchor = $parent.find('.lineaResultado .filter');
        $dropdownAnchor.on('click', function(evt) {
            var $listItems = $(this).find('.wdg_altasbajas_result_012_dropdownlist');
            var $visibility = $listItems.css('visibility');
            var padre =$(this);
            if ( $visibility == 'hidden' ) 
                $listItems.css({
                    visibility: 'visible',
                    height: 'auto',
                    'max-height' : '156px',
                    'overflow-y': 'scroll',
                    'overflow-x': 'hidden'         
                });
             else 
                 $listItems.css({
                    visibility: 'hidden',
                    height: '0px'
            });
              var $dropdownItems2 = $(this).find('.wdg_altasbajas_result_012_dropdownlist li');
            $dropdownItems2.bind('click', function(evt) {
                evt.preventDefault();
                padre.find('.wdg_altasbajas_result_012_dropdowncontent p').html($(this).find('p').html());
            });
           
            $listItems.bind('mouseleave', function(evt) {
                evt.preventDefault();
                var visibilidad = $(this).css('visibility');
                if ( visibilidad == 'visible' ) {
                     $(this).css({
                        visibility: 'hidden',
                        height: '0px'       
                    });
                } 
            });
        });
        
      /*Monitoreo scroll*/
        $('.wdg_altasbajas_result_01 .deg').scroll(function() {
                var $war1_position = $(this).scrollTop();
                
                //alert($(this).height());
                if($(window).width() < 624 ){$war1_altura = 813;}
                if ($.browser.msie ){$war1_altura = 470;}
                else{$war1_altura = $(this).height()}
                
                
                if($war1_position >= $war1_altura) {
                    $(this).siblings('.degraded').css("visibility","hidden");
                    //$(this).siblings('.controls').children('.next').children('.tvsa-caret-down').css('color','#000');
                    
                    $(this).siblings('.controls').children().children('.tvsa-caret-down').parent().removeClass('bgactive');
                    $(this).siblings('.controls').children().children('.tvsa-caret-down').parent().addClass('bginactive');
                    
                }else{
                    $(this).siblings('.degraded').css("visibility","visible");
                    //$(this).siblings('.controls').children().children('.tvsa-caret-down').css('color','#FFF');
                    $(this).siblings('.controls').children().children('.tvsa-caret-down').parent().removeClass('bginactive');
                    $(this).siblings('.controls').children().children('.tvsa-caret-down').parent().addClass('bgactive');
                }
                
                if($war1_position == 0){
                    //$(this).siblings('.controls').children('.prev').children('.tvsa-caret-up').css('color','#000');
                    $(this).siblings('.controls').children().children('.tvsa-caret-up').parent().removeClass('bgactive');
                    $(this).siblings('.controls').children().children('.tvsa-caret-up').parent().addClass('bginactive');
                }
                else{
                    //$(this).siblings('.controls').children('.prev').children('.tvsa-caret-up').css('color','#FFF');
                    $(this).siblings('.controls').children().children('.tvsa-caret-up').parent().removeClass('bginactive');
                    $(this).siblings('.controls').children().children('.tvsa-caret-up').parent().addClass('bgactive');
                }
                //console.log('Scroll: '+$war1_position+' suma: '+$(this).height());
            });    
        

    })($,Televisa);
});

if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
      $(function() {
        var zIndexNumber = 1000;
        $('.wdg_altasbajas_result_01 div').each(function() {
            $(this).css('zIndex', zIndexNumber);
            zIndexNumber -= 10;
        });
    });
 }
 ;jQuery(function($){ 
    (function($,T){

        $('.wdg_sched_02').each(function(ix,element){ 
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $theUl = $this.find('>ul')
            ;
            
            $this.find('a.prev, a.next, .deportes-prev, .deportes-next').click(function(event){
                event.preventDefault();
            });
            
            $this.find('a.prev, .deportes-prev').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() - $theUl.height()
                }, 900);
            });
            
            $this.find('a.next, .deportes-next').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() + $theUl.height()
                }, 900);
            }); 
        });
        
        /*Swipe*/
        $(document).ready(function(){
            $('.wdg_sched_02 #deg').bind('swipeup',function(){
                $(this).animate({
                        'scrollTop': $('.wdg_sched_02 #deg').scrollTop() + 270
                    }, 500);
            });
            $('.wdg_sched_02 #deg').bind('swipedown',function(){
                $(this).animate({
                        'scrollTop': $('.wdg_sched_02 #deg').scrollTop() - 270
                    }, 500);
            });
        });
        
        //Altura
        $elements = $('.wdg_sched_02 ul#deg li').size() + 1;
        $altura =0;
        
        /*Tama??o de pantalla modificado*/
        $(window).resize(function() {
            if($.browser.msie && $.browser.version < 9){
                if($(window).width()>947){
                    $alt_w = 690;
                }
                else
                {
                    $alt_w = 222;
                }
            }else{
                $alt_w = $('.wdg_sched_02 #deg').height();
            }
        });
        /*Hack < IE8*/
        if ( $.browser.msie && $.browser.version < 9) {
                    $elements = $elements -1;
                    $altura = $altura + $('.wdg_sched_02 ul li').outerHeight();
                    $altura = $altura * $elements;  
                    if ($(window).width()>947){
                            $alt_w = 690;
                        }
                        else
                        {
                            $alt_w = 222;
                        }
        }
        else
        {
            for($i=1;$i<$elements;$i++){
                $altura = $altura + $('.wdg_sched_02 ul#deg li:nth-child('+$i+')').outerHeight();
            }
            $alt_w = $('.wdg_sched_02 #deg').height();
        }
        
        $('.wdg_sched_02 #deg').scroll(function() {
                var $position = $(this).scrollTop();
                var $med = $position + $alt_w; 
                var $down = $(this).siblings('.nav').children().children('.tvsa-caret-down').parent();
                var $up = $(this).siblings('.nav').children().children('.tvsa-caret-up').parent();
                
                console.log($position);
                
                if($med == $altura){
                    // inactivo
                     $(this).siblings('.degraded').css("visibility","hidden");
                     $down
                     .removeClass('bgactive')
                     .addClass('bginactive');
                }
                // Hack IE 7 
                else if ($.browser.msie && parseInt($.browser.version, 10) == 7 && $position >= 740){
                    // inactivo
                     $(this).siblings('.degraded').css("visibility","hidden");
                     $down
                     .removeClass('bgactive')
                     .addClass('bginactive');
                     console.log($position);
                }
                // Hack IE 7 
                else if ($.browser.msie && parseInt($.browser.version, 10) >= 8 && $position >= 680){
                    // inactivo
                     $(this).siblings('.degraded').css("visibility","hidden");
                     $down
                     .removeClass('bgactive')
                     .addClass('bginactive');
                     console.log($position);
                }
                else{
                    // activo
                     $(this).siblings('.degraded').css("visibility","visible");
                     $down
                     .removeClass('bginactive')
                     .addClass('bgactive');
                }
                if($position == 0){
                    $up
                    .removeClass('bgactive')
                    .addClass('bginactive');
                }else{
                    $up
                    .removeClass('bginactive')
                    .addClass('bgactive');
                }
            }); 
    })($,Televisa);
});
;jQuery(function($){ 
    (function($,T){
        $('.wdg_teams_classification_01').each(function(ix,element){
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $theUl = $('.wdg_teams_classification_01 .scroll');
            
            $this.find('a.prev, a.next').click(function(event){
                event.preventDefault();
            });
            
            $this.find('a.prev').bind(Pointer.DOWN,function(){
                $(this).parent().parent().siblings('.scroll').animate({
                    'scrollTop': $theUl.scrollTop() - $theUl.height() - 2
                }, 500);
            });
            
            $this.find('a.next').bind(Pointer.DOWN,function(){
                $(this).parent().parent().siblings('.scroll').animate({
                    'scrollTop': $theUl.scrollTop() + $theUl.height() + 2
                }, 500);
            });
        });
        
        /*Swipe*/
        $(document).ready(function(){
        $wtc =  164;
            $('.wdg_teams_classification_01 .scroll').bind('swipeup',function(){
                $(this).animate({
                        'scrollTop': $(this).scrollTop() + $wtc
                    }, 500);
            });
            $('.wdg_teams_classification_01 .scroll').bind('swipedown',function(){
                $(this).animate({
                        'scrollTop': $(this).scrollTop() - $wtc
                    }, 500);
            }); 
        });
        
        
        /*Monitoreo scroll*/
        var $wtc_altura = $('.wdg_teams_classification_01 .datos').height();
        $('.wdg_teams_classification_01 .scroll').scroll(function() {
                
                
                
                if($(this).scrollTop() + $(this).height() == $wtc_altura) {
                 $(this).siblings('.degraded').css("visibility","hidden");
                 //$(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings().children('.tvsa-caret-down').css('color','#000');
                  $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.next').addClass('bginactive');
                  $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.next').removeClass('bgactive');
                }
                else if ($.browser.msie && parseInt($.browser.version, 10) <= 8 && $(this).scrollTop() >= 475){
                    
                    $(this).siblings('.degraded').css("visibility","hidden");
                    
                    $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.next').addClass('bginactive');
                    $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.next').removeClass('bgactive');
                }
                else{
                 $(this).siblings('.degraded').css("visibility","visible");
                 //$(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings().children('.tvsa-caret-down').css('color','#FFF');
                 $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.next').addClass('bgactive');
                 $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.next').removeClass('bginactive');
                }
                
                if($(this).scrollTop() == 0){
                 //$(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings().children('.tvsa-caret-up').css('color','#000');
                 $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.prev').addClass('bginactive');
                 $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.prev').removeClass('bgactive');
                }
                else
                {
                //$(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings().children('.tvsa-caret-up').css('color','#FFF'); 
                $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.prev').addClass('bgactive');
                 $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.prev').removeClass('bginactive');
                }
            });    
    })($,Televisa);
});
// JavaScript Document
var $large = 0;
$(document).ready(function(e) {
    $('.wdg_twitt_02').each(function(ix, element) {
    $elements = $(this).children().children('.wdg_twitt_02_carousel').children().children().size();
    $large = $(this).children().children('.wdg_twitt_02_carousel').children().children().width();
    $large = $elements * $large + (29 * ($elements - 1));
    
    if (!$.browser.msie){
        window.setTimeout("$('.wdg_twitt_02 .wdg_twitt_02_carousel ul').attr('style', 'width: '+$large+'px !important');",500);
    }
    if ($.browser.msie && parseInt($.browser.version, 10) <= 8){
        //$large += 100;
        $large = 958;
            window.setTimeout("$('.wdg_twitt_02 .wdg_twitt_02_carousel ul').attr('style', 'width: '+$large+'px !important');",2000);
            //alert($large);
        
    }
});
    /*Monitor flechas*/
    $('.wdg_twitt_02 .tvsa-double-caret-left').addClass('inactive');
    $('.wdg_twitt_02 .tvsa-double-caret-left').click(function() {
        /*Verifico posici??n del scroll*/ 
                    var large_tot = $(this).parent().parent().parent().parent().siblings('.wdg_twitt_02_carousel').children().width();
                    var position = $(this).parent().parent().parent().parent().siblings('.wdg_twitt_02_carousel').scrollLeft();
                    med = position + $(this).parent().parent().parent().parent().siblings('.wdg_twitt_02_carousel').width() + 201;
                    if(position == 0 || position <= 329)
                        {
                        $(this).addClass('inactive');
                        $(this).parents('.wdg_twitt_02').children('.bullets').children().removeClass();
                        $(this).parents('.wdg_twitt_02').children('.bullets').children().eq(0).addClass('background-color1');
                        }
                        else
                        {
                        $(this).removeClass('inactive');
                        $(this).parents('.wdg_twitt_02').children('.bullets').children().removeClass();
                        $(this).parents('.wdg_twitt_02').children('.bullets').children().eq(1).addClass('background-color1');
                        }  
                        $(this).parent().parent().siblings('.wt2right').children().children().removeClass('inactive');
        });
        
        $('.wdg_twitt_02 .tvsa-double-caret-right').click(function() {
            //alert($large);
            // Reafirmamos el ancho del UL --- Problemas en IE
            if ($.browser.msie ){
                $('.wdg_twitt_02 .wdg_twitt_02_carousel ul').attr('style', 'width: '+$large+'px !important');
            }
            /*Verifico posici??n del scroll*/ 
                var large_tot = $(this).parent().parent().parent().parent().siblings('.wdg_twitt_02_carousel').children().width();
                var position = $(this).parent().parent().parent().parent().siblings('.wdg_twitt_02_carousel').scrollLeft();
                med = position + $(this).parent().parent().parent().parent().siblings('.wdg_twitt_02_carousel').width() + 329;
                    $(this).parent().parent().siblings('.wt2left').children().children().removeClass('inactive');  
                if(med == large_tot || med > large_tot)
                    {
                    $(this).addClass('inactive');
                    $(this).parents('.wdg_twitt_02').children('.bullets').children().removeClass();
                    $(this).parents('.wdg_twitt_02').children('.bullets').children().eq(2).addClass('background-color1');
                    }
                    else
                    {
                    $(this).removeClass('inactive');
                    $(this).parents('.wdg_twitt_02').children('.bullets').children().removeClass();
                    $(this).parents('.wdg_twitt_02').children('.bullets').children().eq(1).addClass('background-color1');
                }
        
        });
        /*Swipe*/
         $(".wdg_twitt_02 .wdg_carousa .wdg_twitt_02_carousel").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount) {           
           if (direction==="right") {            
            $(this).animate({
                        'scrollLeft': $(this).scrollLeft() - 329
                    }, 500);
           }//
           if (direction==="left") {            
            $(this).animate({
                        'scrollLeft': $(this).scrollLeft() + 329
                    }, 500);


           }


        },        
         threshold:0
      });
        /*Monitoreo scroll*/
    $('.wdg_twitt_02 .wdg_twitt_02_carousel').scroll(function() {
        var $wt2_position = $(this).scrollLeft();
        var $wt2_med = $wt2_position;
        if($wt2_position == 0){
                $(this).parents('.wdg_twitt_02').children('.bullets').children().removeClass('background-color1');
                $(this).parents('.wdg_twitt_02').children('.bullets').children().eq(0).addClass('background-color1');
        }
        else{
        $(this).parents('.wdg_twitt_02').children('.bullets').children().removeClass('background-color1');
        $(this).parents('.wdg_twitt_02').children('.bullets').children().eq(1).addClass('background-color1');
        }
        if($wt2_med > 350){
        $(this).parents('.wdg_twitt_02').children('.bullets').children().removeClass('background-color1');
        $(this).parents('.wdg_twitt_02').children('.bullets').children().eq(2).addClass('background-color1');
        } 
    });
    
    $('.wdg_twitt_02').bind("touchmove",function(event){
    event.preventDefault();
    });
        
});
(function() {
    $(document).ready(function() {
        $('.wdg_poll_01_submitbutton').click(function(){
            $(this).siblings(".wdg_poll_01_results").show();
            $(".wdg_poll_01 form .wdg_poll_01_options").hide();
            $(this).hide();
            $(this).siblings(".wdg_poll_01_total").show();

        });

    }); 
}());

 



$(window).load(function(){
    /**
     * @desc make the separator line as high as the higher div that it is separating
     * @todo shouldn't the separator line be a component itself?
     */
    $('.mix_2arts_03 .separador').each(function(){
        var h = Math.max($(this).prev('div:eq(0)').height(),$(this).next('div:eq(0)').height()); // higher value
        h = h;
        $(this).css({height:h+'px'}); // set separator height
    });
});function hideEmailText(){
    $('.email-txt').val("");
}

function showEmailText(){
    if($('.email-txt').val()==""){
        $('.email-txt').val("Correo electr??nico");
    }
}
$(document).ready(function() {  

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
});

// btn_6prog_03 //

$(document).ready(function() {  

    
    var lis = $('.btn_6prog_03 .type1a .carrusel ul li');
    var margin = 0;
    var ulWidth = 0;
    for(var i=0; i<lis.length; i++){
        margin += parseInt($(lis[i]).css("margin-left"));
        ulWidth += $(lis[i]).width();
    }
    
        if($(window).width() < 624){var extra = 12;}else{var extra = 0;}
        ancho = ulWidth + margin + extra;
        
        if ($.browser.msie){
            ancho -= 22;
            $(".btn_6prog_03 .type1a .carrusel ul").css({width:ancho});
        }
        else{
            $(".btn_6prog_03 .type1a .carrusel ul").width(ancho);
        }
        
        
        // Sacamos el ancho total del UL del carrusel
        anchoTotalUL = $(".btn_6prog_03 .type1a .carrusel ul").width(); // 100%
        //alert(anchoTotalUL);
    
    // sacamos cuantas imagenes
    //var totalImagenes = $(".btn_6prog_03 .type1a .carrusel ul").length;
    
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
    
    
    // checamos si se deben mostrar las flechas del carrusel si hay mas de 6 elementos
    if(anchoVentna > 590){
        
        if($(".btn_6prog_03 .type1a .carrusel ul li").length > 6){
            
            $(".btn_6prog_03 .flechas").show();
        }
        else{
            $(".btn_6prog_03 .flechas").hide();
        }
        
    }
    
    
    $('.btn_6prog_03 .type1a .carrusel').scroll(function(e){
        /*Motion activate-inactivate*/
        var $b6p3_position = $(this).scrollLeft();
        var $b6p3_med =  $(this).scrollLeft() + $(this).width();
        if($b6p3_position == 0){
            $(this).siblings('.title').children('.flechas').children().children('.left2').removeClass('arrow_activate');
            $(this).siblings('.title').children('.flechas').children().children('.left2').addClass('arrow_inactivate');
        }else{
            $(this).siblings('.title').children('.flechas').children().children('.left2').removeClass('arrow_inactivate');
            $(this).siblings('.title').children('.flechas').children().children('.left2').addClass('arrow_activate');
            
        }
        
        
        if($b6p3_med >= anchoTotalUL){
            $(this).siblings('.title').children('.flechas').children().children('.right2').removeClass('arrow_activate');
            $(this).siblings('.title').children('.flechas').children().children('.right2').addClass('arrow_inactivate');
        }else{
            $(this).siblings('.title').children('.flechas').children().children('.right2').removeClass('arrow_inactivate');
            $(this).siblings('.title').children('.flechas').children().children('.right2').addClass('arrow_activate');
        }
        console.log('Scroll esta: '+$b6p3_position+' Suma: '+$b6p3_med+' total alcanzar: '+anchoTotalUL);
        
        scrollLeft = $(this).scrollLeft();
        
        var porcentaje =  ( scrollLeft * 100) / anchoTotalUL; 
        
        if( scrollLeft <= 300)
            bulletSelected = 1;
        else if( scrollLeft >= 310 && scrollLeft <= 600)
            bulletSelected = 2;
        else if( scrollLeft >= 601 && scrollLeft <= 900)
            bulletSelected = 3;
            
        $(this).parents('.type1a').siblings('.bullets').find('li').removeClass('selected');
        
        $(this).parents('.type1a').siblings('.bullets').find('li:nth-child('+bulletSelected+')').addClass('selected');
    });
    
    /*Arrows*/
     $('.btn_6prog_03 .title .flechas a.left2').click(function(event){
                event.preventDefault();
                $(this).parent().parent().parent().siblings('.carrusel').animate({
                        'scrollLeft':$(this).parent().parent().parent().siblings('.carrusel').scrollLeft() - 324
                    }, 500);
            });
     $('.btn_6prog_03 .title .flechas a.right2').click(function(event){
                event.preventDefault();
                $(this).parent().parent().parent().siblings('.carrusel').animate({
                        'scrollLeft':$(this).parent().parent().parent().siblings('.carrusel').scrollLeft() + 324
                    }, 500);
            });
    /*Swipe*/
        /*
        $('.btn_6prog_03 .type1a .carrusel').bind('swipeleft',function(){
                $(this).animate({
                        'scrollLeft': $(this).scrollLeft() + 328
                    }, 500);
            });
        $('.btn_6prog_03 .type1a .carrusel').bind('swiperight',function(){
                $(this).animate({
                        'scrollLeft': $(this).scrollLeft() - 328
                    }, 500);
            }); 


    $('.btn_6prog_03 .carrusel').bind("touchmove",function(event){
    event.preventDefault();
    });

    */

     $(".btn_6prog_03 .type1a .carrusel").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount) {           
           if (direction==="right") {            
            $(this).animate({
                        'scrollLeft': $(this).scrollLeft() - 328
                    }, 500);
           }//
           if (direction==="left") {            
            $(this).animate({
                        'scrollLeft': $(this).scrollLeft() + 328
                    }, 500);


           }


        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:0
      });


});