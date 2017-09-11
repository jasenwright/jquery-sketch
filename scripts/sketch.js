$(document).ready(function() {
	clearCanvas();
	createGrid(16);
	$('.container').on('mouseenter', '.unit', function() {
		if ($('#pen').is(':checked')) {
			$(this).css({'background-color': 'black', 'opacity': '1'});
		} else if ($('#rainbow').is(':checked')) {
			$(this).css({'background-color': random(), 'opacity': '1'});
		} else if ($('#gradient').is(':checked')) {
			$(this).css({'background-color': 'black', 'opacity': '+=0.1'});
		}
   });
	sizeCanvas();
});

function createGrid(size) {
	$(".container").children().remove();
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			var $div = $("<div class='unit'></div>");
			$div.css("height", 100/size + "%");
			$div.css("width", 100/size + "%");
			$div.appendTo('.container');
		}
	}
};

function clearCanvas() {
	$("#clear").click(function() {
		$(".unit").css({'background-color': 'white', 'opacity': '0'});
	});
}

function sizeCanvas() {
	$("#resize").click(function() {
		var user = prompt("Select a new size for grid");
		var newSize = parseInt(user);
		createGrid(newSize);
	});
}

function random() {
	return 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
}
