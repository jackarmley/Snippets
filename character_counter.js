// controls character input/counter
//Src: http://coda-clips.com/textarea-character-count-jquery
$('textarea#body').keyup(function() {
	var charLength = $(this).val().length;
	// Displays count
		$('span#charCount').html(charLength + ' of 250 characters used');
	// Alerts when 250 characters is reached
		if($(this).val().length > 250)
		$('span#charCount').html('<strong>You may only have up to 250 characters.</strong>');
});