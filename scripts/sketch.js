$(document).ready(function() {
	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 16; j++) {
			var $div = $("<div class='unit'></div>");
			$div.hover(function(){
				$(this).addClass('hov');
			});
			$div.appendTo('#main');
		}
	}
});