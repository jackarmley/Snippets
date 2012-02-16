$(document).ready(function(){
	var flashversion = "9.0.0"
	var bannercontainer = "banner"
	var bannerurl = "";
	var dimensions = ""
	$("li a").each(function(){
		$(this).click(function(){
			bannerurl = $(this).attr("data-url");
			dimensions = $(this).attr("class").split(/\s+/);
			swfobject.embedSWF(bannerurl, bannercontainer, dimensions[0], dimensions[1], flashversion);
		});
	});
});