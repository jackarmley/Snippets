$(document).ready(function() {
	var setHeight=$(document).height(); 
	var setWidth=$(document).width(); 
	$("body")
		.prepend("<canvas id='grid-overlay_horz' width='"+setWidth+"' height='"+setHeight+"'></canvas>");  
	var c_canvas = document.getElementById("grid-overlay_horz");
	var context = c_canvas.getContext("2d");
	for (var y = 0.5; y < setHeight; y += 15) {
	  context.moveTo(0, y);
	  context.lineTo(setWidth, y);
	}  
	context.strokeStyle = "#666";
	context.stroke();
});