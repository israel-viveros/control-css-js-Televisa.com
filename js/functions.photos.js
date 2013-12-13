/*
	Developer: Viveros;
	Version: 1.0;
*/

var functionsPhotos = new Object;

functionsPhotos.getHeight = function(){	
	var relation = 1.18;
	var classObject = $(".GetHeightObject");
	var widthStart = classObject.outerWidth();
	var newHeight = widthStart/relation;
	classObject.css('height', newHeight);
}

$(function() {
	functionsPhotos.getHeight();
	$(window).resize(function(event) {
		functionsPhotos.getHeight();
	});
});