$(document).ready(function($) {

// The text under "Click for short bio" should not be visible unless the user clicks the flip id. Hint: Google the jQuery slideToggle function
$('#flip').click(function() {
	$('#panel').slideToggle('slow',function() {
		$(this).show();
	});
});
// When hovering over the h4 tags (Objective, Experience, etc..), the inside of the dotted box should turn light blue and remain light blue.
$('h4').mouseenter(function() {
	$(this).css('background', '#8FD8D8');
});

// When one of the project images is clicked, it should expand to 300px wide.
$('.project-image').click(function() {
	$(this).css('width', '300px');
});
// When hovering over the Twitter, Instagram, and LinkedIn buttons, the background behind the buttons should turn #6bd2db. This has not been loaded into a CSS class and must be done within the function. Make sure you get those corners rounded so the color doesn't pop out in the corners! When you leave the image, the background should turn #FFF68F.
$('#social-links a img').mouseenter(function() {
	$(this).css('background-color', '#6bd2db');
	$(this).css('border-radius', '10px');
})
$('#social-links a img').mouseleave(function() {
	$(this).css('background-color', '#FFF68F');
	$(this).css('border-radius', '10px');
});
// When clicking the "Alternate Color Theme" button, it should toggle the "changeTextColors" class. Additionally, the h4 tag hover that you created in #2 should turn white. Also, the background should change to the dark_embroidery.png image located the images directory.
$('#low-vision').click(function() {
	$('html').toggleClass('changeTextColors');
	$('h4').css('background', '#fff');
	$('body').toggleClass('bodyChange');//('background: url("images/dark_embroidery.png")');
});
// Bonus: The contact area contains a span that can be clicked to reveal the contact info. The HTML and CSS have been written for you to enable this functionality with jQuery. The user should click a button next to the person's name to reveal the phone number and email address.
$('#contactButton').click(function() {
	$('.reference-contact').show();
});



});