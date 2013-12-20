$(window).load( function () {
    
    //inicio
    //
    var num_elem = '8';			
    var cliente = 'televisa_com';
    var site = 'televisa_com';
    var rama=$("#program_envideo").attr("rel");
    var tipo_tag= $("#tipo_envideo").attr("rel");
    var tag=$("#program_envideo").attr("data-exclusivas");
    
    var new_rama="";
    valor = parseInt(tipo_tag); 
        switch (valor){
                case 0:
                    new_rama="site:"+rama+tag;
                break;
                case 1:
                   new_rama="site:"+rama+tag;
                break;
               
                case 2:
                   new_rama="site:"+rama+tag;
                break;
               
                case 3:
                   new_rama="site:"+rama+tag;
                break;
               
        }
   
    loadGsa('videos',new_rama,num_elem,'',cliente,site);
    
    
    // programa
    $("#video_programa").find("li").find("p").unbind("click").click(function(){  
        var rama=$(this).attr("rel");
        var tag0=$(this).attr("data-exclusivas");
        var tag1=$(this).attr("data-enterate");
        var tag2=$(this).attr("data-entrevistas");
        var tag3=$(this).attr("data-revive");
        
        $("#program_envideo").attr("rel",rama);
        $("#program_envideo").attr("data-exclusivas",tag0);
        $("#program_envideo").attr("data-enterate",tag1);
        $("#program_envideo").attr("data-entrevistas",tag2);
        $("#program_envideo").attr("data-revive",tag3);
        var tipo_tag= $("#tipo_envideo").attr("rel");
        
        var new_rama="";
        
        valor = parseInt(tipo_tag); 
        switch (valor){
                case 0:
                    new_rama="site:"+rama+tag0;
                break;
                case 1:
                   new_rama="site:"+rama+tag1;
                break;
               
                case 2:
                   new_rama="site:"+rama+tag2;
                break;
               
                case 3:
                   new_rama="site:"+rama+tag3;
                break;
               
        }
        
        loadGsa('videos',new_rama,num_elem,'',cliente,site);
        
    });
    
    //tipo
    $("#video_tag").find("li").find("p").unbind("click").click(function(){  
        var tipo_tag=$(this).attr("rel");
        $("#tipo_envideo").attr("rel",tipo_tag);
        var rama=$("#program_envideo").attr("rel");
        var tag0=$("#program_envideo").attr("data-exclusivas");
        var tag1=$("#program_envideo").attr("data-enterate");
        var tag2=$("#program_envideo").attr("data-entrevistas");
        var tag3=$("#program_envideo").attr("data-revive");
        var new_rama="";
        new_rama="site:"+rama+tag1;
        
        
        
        valor = parseInt(tipo_tag); 
        switch (valor){
                case 0:
                    new_rama="site:"+rama+tag0;
                    
                break;
                
                case 1:
                   new_rama="site:"+rama+tag1;
                    
                break;
               
                case 2:
                   new_rama="site:"+rama+tag2;
                    
                break;
               
                case 3:
                   new_rama="site:"+rama+tag3;
                    
                break;
               
        }
        
        
        
       
        
        loadGsa('videos',new_rama,num_elem,'',cliente,site);
        
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
                    video_carrusel_1 += '<a title="'+metadata['title']+'" href="'+metadata['URL']+'" class="left" target="_blank"> ';
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
