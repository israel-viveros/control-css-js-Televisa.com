$(window).load(function(){
	/**
	 * @Open firts element mix_12arts_02
	 * @in the html
	 **/
		$val = $('.td_gallery_index_01 .mix_12arts_02:first-child');
		$val.find('.type1a_').toggle();
		$val.find('.str_pleca_01').find('.ocultar').show();
		$val.find('.str_pleca_01').find('.mostrar').hide();
		$val.find('.nav_paginator_01').show();
		$val.css('margin-bottom','25px');
		$val.height('auto');
});