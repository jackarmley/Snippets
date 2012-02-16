$(document).ready(function(){ 
	//Set flash player required version and banner container ID
		var flashversion = "9.0.0"
		var bannercontainer = "banner"      
	//Set the goodies for each banner 	
		var bannerurl = "";
		var bannerdimensions = "";  
		var bannertitle = "";
	//Run the banner swap function	
		$("select").change(function () {
			$("select option:selected").each(function () {
				bannerurl = $(this).attr("value");
				bannerdimensions = $(this).attr("class").split(/\s+/);   
				bannertitle = $(this).text();
				
				swfobject.embedSWF(bannerurl, bannercontainer, bannerdimensions[0], bannerdimensions[1], flashversion); 
				$("section h1").text(bannertitle); 
				$("#banner_wrapper").width(bannerdimensions[0]);
			});
		})
		.change();
});