/*==========
[=1: Load libraries]
===========*/  

/*==========
[=2: Custom functions]
===========*/ 

(function(window,undefined ) {
	var sitescripts = {
		grid:{
			setgrid: function(){
				var setHeight=$(document).height(); 
				var setWidth=$(document).width(); 
				$("body")
					.prepend("<p id='grid-toggle'>Toggle grid</p>")
					.prepend("<div id='grid-annotations'></div>")    
					.prepend("<div id='grid-overlay'></div>")
					.prepend("<canvas id='grid-overlay_horz' width='"+setWidth+"' height='"+setHeight+"'></canvas>");  
				$("#grid-overlay")   
					.height(setHeight)
					.hide();
				$("#grid-annotations,#grid-overlay_horz").hide();   
				$("#grid-toggle").click(function () {
					$("#grid-overlay,#grid-overlay_horz,#grid-annotations").fadeToggle("fast");
				});    

				var c_canvas = document.getElementById("grid-overlay_horz");
				var context = c_canvas.getContext("2d");
				for (var y = 0.5; y < setHeight; y += 5) {
				  context.moveTo(0, y);
				  context.lineTo(setWidth, y);
				}  
				context.strokeStyle = "#83CCDC";
				context.stroke(); 	
			}
		},
		mobile:{
			hideurlbar: function(){
				window.scrollTo(0,1);
			}
		},
		pagespecific:{
			home_page: function(){
				//Set positions of featured labs person details and quote
					var detailspos = $("section[role='main']").height();
					var quotespos = $("#content-primary").height();
					$("aside[role='complementary'] hgroup").css("top",detailspos-20+"px"); 
					$("aside[role='complementary'] blockquote").css("top",quotespos+65+"px"); 
			}
		}
	} 
window.sitescripts = sitescripts;
})(window);	  
	

$(document).ready(function() {
	//Set variables
		//Device detect
			var deviceAgent = navigator.userAgent.toLowerCase();
		    var agentID = deviceAgent.match(/(ipad)/);  
		//Get page ID
			var page_id = $("html").attr("id");
	//Set grid       
		sitescripts.grid.setgrid()
	//Hide URL bar	
		addEventListener("load", function() { setTimeout(sitescripts.mobile.hideurlbar, 0); }, false);   
	//Page-specific functions
		if(page_id == "pg-home"){
			sitescripts.pagespecific.home_page()
		}
		 
});