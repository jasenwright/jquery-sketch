$(document).ready(function() {
	createGrid(16);
	clearCanvas();
	drawCanvas();
	sizeCanvas();
});

function createGrid(size) {
	$("#main").children().remove();
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			var $div = $("<div class='unit'></div>");
			$div.css("height", 100/size + "%");
			$div.css("width", 100/size + "%");
			$div.appendTo('#main');
		}
	}
	drawCanvas();
};

function clearCanvas() {
	$("#clear").click(function() {
		$(".unit").css("background-color", "white");
	});
}

function drawCanvas() {
	$(".unit").hover(function(){
		$(this).css("background-color", "black");
	});
}

function sizeCanvas() {
	$("#resize").click(function() {
		var user = prompt("Select a new size for grid");
		var newSize = parseInt(user);
		createGrid(newSize);
	});
}