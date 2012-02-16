$(document).ready(function(){
	var flashversion = "9.0.0"
	var bannercontainer = "banner"
	
	$("#banner_1").click(function(){
		swfobject.embedSWF("http://files.bannersnack.net/site/examples/31.swf", bannercontainer, "250", "250", flashversion);
	});
	$("#banner_2").click(function(){
		swfobject.embedSWF("http://files.bannersnack.net/site/examples/37.swf", bannercontainer, "336", "280", flashversion);
	});
	$("#banner_3").click(function(){
		swfobject.embedSWF("http://files.bannersnack.net/site/examples/35.swf", bannercontainer, "160", "600", flashversion);
	});
});