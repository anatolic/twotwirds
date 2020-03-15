// Scroll smothe function
function gotSmothTo(destination) {
	$('html, body').animate(
		{
			scrollTop: $(destination).offset().top
		},
		1000
	);
	return false;
}
