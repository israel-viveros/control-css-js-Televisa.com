$(window).load( function () {
    
    //inicio
    //
    var num_elem = '8';			
    var cliente = 'televisa_com';
    var site = 'televisa_com';
    var tag_incio=$("#tipo_envideo").attr("rel");
    
    var ramainicio=$("#program_envideo").attr("rel");
    loadGsa('videos',ramainicio,num_elem,tag_incio,cliente,site);
    
    
    // programa
    $("#video_programa").find("li").find("p").unbind("click").click(function(){  
        var rama=$(this).attr("rel");
        var programa=$("#program_envideo").attr("rel",rama);
        var tag=$("#tipo_envideo").attr("rel");
        //alert(rama);
        
        loadGsa('videos',rama,num_elem,tag,cliente,site);
        
    });
    
    //tipo
    $("#video_tag").find("li").find("p").unbind("click").click(function(){  
        var tag=$(this).attr("rel");
        $("#tipo_envideo").attr("rel",tag);
        var rama=$("#program_envideo").attr("rel");
        
        //alert(rama);
        
        loadGsa('videos',rama,num_elem,tag,cliente,site);
        
    });
    
});





function loadGsa(rama, q, num_elem, field, cliente,site){   
    $.gsa({
        GSA_query: q,
        GSA_num: num_elem,
        GSA_client: cliente,
        GSA_site: site,
        GSA_callback: true,
        GSA_partialfields:field
        //,GSA_debug:1
    }, function(data){
        if(data.RES){           
            var params = $.gsa.params(data.PARAM);
            var realResults = data.RES["@attributes"].EN;           
            var results = $.gsa.results(data);
            var article="";
            var video_carrusel_1 = "",content_c1,
                video_carrusel_2 = "",
                video_carrusel_3 = "",
                video_carrusel_4 = ""               
                foto = "";
            
            
            
            if(rama == 'videos'){                       
                $.each(results, function(key, metadata) {
                    var cadena = metadata['extras'];
                    var extra = "";
                    if( typeof cadena == "undefined" ){
                        extra ="desconocido";
                    }else{
                        var separa_extras = cadena.split("=");
                        extra = separa_extras[1];
                    }               
//                    <li class="color">
//                                    <div class="img_div left">		  		  		  				 		 
//                                        <img src="http://lorempixel.com/84/47/" alt="Image description"/>	
//                                        <span class="wdg_goals_carru_01_sprite video-corner"></span>		  
//                                    </div>
//
//                                    <a title="Link Description" href="#" class="left"> 
//                                        <span class="program">Guadalajara 0 · Tijuana 1</span> 
//                                        <span class="channel textcolor-title4"><span class="textcolor-title2">2T · J17</span> · 12/06/2013</span> 
//                                    </a> 
//                                </li>
                    video_carrusel_1 += '<li class="color">';
                    video_carrusel_1 += '<div class="img_div left">';
                    //video_carrusel_1 += '<img src="'+metadata['84x84']+'" alt="'+metadata['title']+'"/>';
                    //video_carrusel_1 += '<img width="84" height="84" src="'+metadata['150x87']+'" alt="'+metadata['title']+'"/>';
                    if(typeof(metadata['84x84']) != "undefined"){
                            
                            video_carrusel_1 += '<img width="84" height="84" src="'+metadata['84x84']+'" alt="'+metadata['title']+'"/>';
                    }else{
                        //thumbnail_url
                        video_carrusel_1 += '<img width="84" height="84" src="'+metadata['thumbnail_url']+'" alt="'+metadata['title']+'"/>';
                    }
                    video_carrusel_1 += '</div>';
                    video_carrusel_1 += '<a title="'+metadata['title']+'" href="'+metadata['URL']+'" class="left"> ';
                    video_carrusel_1 += '<span class="program">'+metadata['title']+'</span>';
                    video_carrusel_1 += '<span class="channel textcolor-title4">'+metadata['pubDate']+'</span> ';
                    video_carrusel_1 += '</a>';
                    video_carrusel_1 += '</li>';
                    
                });
                $("#GSA_envideo").html(video_carrusel_1);                
            }
                   
        }
    });
}
