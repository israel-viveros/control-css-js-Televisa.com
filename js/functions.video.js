/*
	Developer: 	Viveros;
	Version: 	1.0.1;
*/

var functionsVideo = new Object;

functionsVideo.getHeight = function(){	
	var relation = 1.777;
	var classObject = $(".GetHeightObject");
	var widthStart = classObject.outerWidth();
	var newHeight = widthStart/relation;
	classObject.css('height', newHeight);
}

//functionsVideo.outVideo = function(){	
//	var parentTag = $(".VideoPlayerTelevisacom");
//	if(parentTag.length){		
//		//var urlVideo = "http://tvolucion.esmas.com/embed/embed_ampp.php?id=";        
//		var urlVideo = "http://tvolucion.esmas.com/embed/embed.php?id=";        
//        var idvideo = parentTag.data("id");        
//        var parametros = "&w=620&h=345&autoplay=false"
//        /* Modificacion para ajustar player en mobile */
//        var relation = 1.777;
//        var widthDoc = $(document).width();
//        var newHeightPlayer;
//        if(widthDoc < 624) {
//               newHeightPlayer = widthDoc / relation ;
//               parametros = "&w="+widthDoc+"&h="+parseInt(newHeightPlayer)+"&autoplay=false";
//        }
//        /* Fin modificacion */
//        parentTag.attr('src', urlVideo+idvideo+parametros);
//	}
//        
//}

functionsVideo.outVideo = function(){        
       var parentTag = $(".VideoPlayerTelevisacom");
       parentTag.css('display', 'none');
       if(parentTag.length){                
               //var urlVideo = "http://tvolucion.esmas.com/embed/embed_ampp.php?id=";        
               var urlVideo = "http://tvolucion.esmas.com/embed/embed.php?id=";        
       var idvideo = parentTag.data("id");        
       //var parametros = "&w=620&h=345&autoplay=false"
               var parametros = "&w=620&h=345&autoplay=true"
       /* Modificacion para ajustar player en mobile */
       var relation = 1.777;
       var widthDoc = $(document).width();
       var newHeightPlayer;
       if(widthDoc < 624) {
              newHeightPlayer = widthDoc / relation ;
              //parametros = "&w="+widthDoc+"&h="+parseInt(newHeightPlayer)+"&autoplay=false";
                          parametros = "&w="+widthDoc+"&h="+parseInt(newHeightPlayer)+"&autoplay=true";
       }
       /* Fin modificacion */
       //parentTag.attr('src', urlVideo+idvideo+parametros);
               $('div.img_galry_04 .image-container a.td_bg.play').click(function() {
                       $('#videostage img').css('display', 'none');
                       $('.img_galry_04 div.vid_player_01_whtbkg').css('display', 'none');
                       parentTag.css('display', 'inline');
                       parentTag.attr('src', urlVideo+idvideo+parametros);
               });
       }
       
}

$(function() {
	functionsVideo.getHeight();
	functionsVideo.outVideo();
	$(window).resize(function() {
		functionsVideo.getHeight();		
	});
});