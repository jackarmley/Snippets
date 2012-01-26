/*==========
[=1: Load libraries]
===========*/  

/*==========
[=2: Custom functions]
===========*/ 
$(document).ready(function() {

	$(window)._scrollable();

	var firstslideshow = $("#opt_1");
	var firstpos = firstslideshow.position();
	console.log(firstpos.top);

	if(firstpos.top == 0){
		$(firstslideshow).addClass("state-active");
		$("#gl-nav_primary .opt_1 a").addClass("current");
	}

	$("#gl-nav_primary li a").each(function(){

		var slideshow_id = $(this).attr("href");
		var slideshow_offset = ""
		slideshow_offset = $(slideshow_id).offset();

		$(this).click(function(){
			var activenav = $(this);
			slideshow_offset = $(slideshow_id).offset();
			$("article").removeClass("state-active");
			$(window).stop().scrollTo({
				top:slideshow_offset.top, left:0},800,{
					onAfter:function(){
						$("#gl-nav_primary a").removeClass("current");
						$(activenav).addClass("current");
						$(slideshow_id).addClass("state-active");
					}
			});
	
		});

	});		
	 
});