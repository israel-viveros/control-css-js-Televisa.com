

function loadGsa_(rama, q, num_elem, field, cliente,site){   
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
            
            
            
            if(rama == 'television'){                       
                $.each(results, function(key, metadata) {
                    var cadena = metadata['extras'];
                    var extra = "";
                    if( typeof cadena == "undefined" ){
                        extra ="desconocido";
                    }else{
                        var separa_extras = cadena.split("=");
                        extra = separa_extras[1];
                    }               
//                    <li>
//                                                    <a href="http://www.televisa.com/#1" title="Link Description"><img src="http://lorempixel.com/136/102/people/1/" alt="Image Description" ></a>
//                                                    <h4><a href="http://www.televisa.com/" title="Link Description">1 3 Televisa deportes presenta Televisa deportes presenta</a></h4>
//
//                                                </li>
                    video_carrusel_1 += '<li>';
                    video_carrusel_1 += '<a href="'+metadata['URL']+'" title="'+metadata['title']+'">';
                    if(typeof(metadata['136x102']) != "undefined"){
                        video_carrusel_1 += '<img src="'+metadata['136x102']+'" alt="'+metadata['title']+'" >';
                    }else{
                        video_carrusel_1 += '<img src="'+metadata['thumbnail_url']+'" alt="'+metadata['title']+'" >';
                    }
                    video_carrusel_1 += '</a>';
                    video_carrusel_1 += '<h4><a href="'+metadata['URL']+'" title="'+metadata['title']+'">'+metadata['title']+'</a></h4>';
                    video_carrusel_1 += '</li>';
                   
                    
                });
                $("#gsa_television").html(video_carrusel_1);                
            }
                   
            if(rama == 'deportes'){                       
                $.each(results, function(key, metadata) {
                    var cadena = metadata['extras'];
                    var extra = "";
                    if( typeof cadena == "undefined" ){
                        extra ="desconocido";
                    }else{
                        var separa_extras = cadena.split("=");
                        extra = separa_extras[1];
                    }               
//                    <li>
//                                                    <a href="http://www.televisa.com/#1" title="Link Description"><img src="http://lorempixel.com/136/102/people/1/" alt="Image Description" ></a>
//                                                    <h4><a href="http://www.televisa.com/" title="Link Description">1 3 Televisa deportes presenta Televisa deportes presenta</a></h4>
//
//                                                </li>
                    video_carrusel_1 += '<li>';
                    video_carrusel_1 += '<a href="'+metadata['URL']+'" title="'+metadata['title']+'">';
                    if(typeof(metadata['136x102']) != "undefined"){
                        video_carrusel_1 += '<img src="'+metadata['136x102']+'" alt="'+metadata['title']+'" >';
                    }else{
                        video_carrusel_1 += '<img src="'+metadata['thumbnail_url']+'" alt="'+metadata['title']+'" >';
                    }
                    video_carrusel_1 += '</a>';
                    video_carrusel_1 += '<h4><a href="'+metadata['URL']+'" title="'+metadata['title']+'">'+metadata['title']+'</a></h4>';
                    video_carrusel_1 += '</li>';
                   
                    
                });
                $("#gsa_deportes").html(video_carrusel_1);                
            }
                   
            if(rama == 'noticieros'){                       
                $.each(results, function(key, metadata) {
                    var cadena = metadata['extras'];
                    var extra = "";
                    if( typeof cadena == "undefined" ){
                        extra ="desconocido";
                    }else{
                        var separa_extras = cadena.split("=");
                        extra = separa_extras[1];
                    }               
//                    <li>
//                                                    <a href="http://www.televisa.com/#1" title="Link Description"><img src="http://lorempixel.com/136/102/people/1/" alt="Image Description" ></a>
//                                                    <h4><a href="http://www.televisa.com/" title="Link Description">1 3 Televisa deportes presenta Televisa deportes presenta</a></h4>
//
//                                                </li>
                    video_carrusel_1 += '<li>';
                    video_carrusel_1 += '<a href="'+metadata['URL']+'" title="'+metadata['title']+'">';
                    if(typeof(metadata['136x102']) != "undefined"){
                        video_carrusel_1 += '<img src="'+metadata['136x102']+'" alt="'+metadata['title']+'" >';
                    }else{
                        video_carrusel_1 += '<img src="'+metadata['thumbnail_url']+'" alt="'+metadata['title']+'" >';
                    }
                    video_carrusel_1 += '</a>';
                    video_carrusel_1 += '<h4><a href="'+metadata['URL']+'" title="'+metadata['title']+'">'+metadata['title']+'</a></h4>';
                    video_carrusel_1 += '</li>';
                   
                    
                });
                $("#gsa_noticieros").html(video_carrusel_1);                
            }
            if(rama == 'entretenimiento'){                       
                $.each(results, function(key, metadata) {
                    var cadena = metadata['extras'];
                    var extra = "";
                    if( typeof cadena == "undefined" ){
                        extra ="desconocido";
                    }else{
                        var separa_extras = cadena.split("=");
                        extra = separa_extras[1];
                    }               
//                    <li>
//                                                    <a href="http://www.televisa.com/#1" title="Link Description"><img src="http://lorempixel.com/136/102/people/1/" alt="Image Description" ></a>
//                                                    <h4><a href="http://www.televisa.com/" title="Link Description">1 3 Televisa deportes presenta Televisa deportes presenta</a></h4>
//
//                                                </li>
                    video_carrusel_1 += '<li>';
                    video_carrusel_1 += '<a href="'+metadata['URL']+'" title="'+metadata['title']+'">';
                    if(typeof(metadata['136x102']) != "undefined"){
                        video_carrusel_1 += '<img src="'+metadata['136x102']+'" alt="'+metadata['title']+'" >';
                    }else{
                        video_carrusel_1 += '<img src="'+metadata['thumbnail_url']+'" alt="'+metadata['title']+'" >';
                    }
                    video_carrusel_1 += '</a>';
                    video_carrusel_1 += '<h4><a href="'+metadata['URL']+'" title="'+metadata['title']+'">'+metadata['title']+'</a></h4>';
                    video_carrusel_1 += '</li>';
                   
                    
                });
                $("#gsa_entretenimiento").html(video_carrusel_1);                
            }
            if(rama == 'esmas'){                       
                $.each(results, function(key, metadata) {
                    var cadena = metadata['extras'];
                    var extra = "";
                    if( typeof cadena == "undefined" ){
                        extra ="desconocido";
                    }else{
                        var separa_extras = cadena.split("=");
                        extra = separa_extras[1];
                    }               
//                    <li>
//                                                    <a href="http://www.televisa.com/#1" title="Link Description"><img src="http://lorempixel.com/136/102/people/1/" alt="Image Description" ></a>
//                                                    <h4><a href="http://www.televisa.com/" title="Link Description">1 3 Televisa deportes presenta Televisa deportes presenta</a></h4>
//
//                                                </li>
                    video_carrusel_1 += '<li>';
                    video_carrusel_1 += '<a href="'+metadata['URL']+'" title="'+metadata['title']+'">';
                    if(typeof(metadata['136x102']) != "undefined"){
                        video_carrusel_1 += '<img src="'+metadata['136x102']+'" alt="'+metadata['title']+'" >';
                    }else{
                        video_carrusel_1 += '<img src="'+metadata['thumbnail_url']+'" alt="'+metadata['title']+'" >';
                    }
                    video_carrusel_1 += '</a>';
                    video_carrusel_1 += '<h4><a href="'+metadata['URL']+'" title="'+metadata['title']+'">'+metadata['title']+'</a></h4>';
                    video_carrusel_1 += '</li>';
                   
                    
                });
                $("#gsa_esmas").html(video_carrusel_1);                
            }
            if(rama == 'ninos'){                       
                $.each(results, function(key, metadata) {
                    var cadena = metadata['extras'];
                    var extra = "";
                    if( typeof cadena == "undefined" ){
                        extra ="desconocido";
                    }else{
                        var separa_extras = cadena.split("=");
                        extra = separa_extras[1];
                    }               
//                    <li>
//                                                    <a href="http://www.televisa.com/#1" title="Link Description"><img src="http://lorempixel.com/136/102/people/1/" alt="Image Description" ></a>
//                                                    <h4><a href="http://www.televisa.com/" title="Link Description">1 3 Televisa deportes presenta Televisa deportes presenta</a></h4>
//
//                                                </li>
                    video_carrusel_1 += '<li>';
                    video_carrusel_1 += '<a href="'+metadata['URL']+'" title="'+metadata['title']+'">';
                    if(typeof(metadata['136x102']) != "undefined"){
                        video_carrusel_1 += '<img src="'+metadata['136x102']+'" alt="'+metadata['title']+'" >';
                    }else{
                        video_carrusel_1 += '<img src="'+metadata['thumbnail_url']+'" alt="'+metadata['title']+'" >';
                    }
                    video_carrusel_1 += '</a>';
                    video_carrusel_1 += '<h4><a href="'+metadata['URL']+'" title="'+metadata['title']+'">'+metadata['title']+'</a></h4>';
                    video_carrusel_1 += '</li>';
                   
                    
                });
                $("#gsa_ninos").html(video_carrusel_1);                
            }
                   
        }
    });
}
