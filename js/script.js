$(window).load(function(){

$('input').focus(function(){
	$(this).parents('form').addClass('keyboard_visible');
	$('body').animate({scrollTop: $(this).offset().top - 10});
});

$('input').blur(function(){
	$(this).parents('form').removeClass('keyboard_visible');
});

// Enable Phonegap Navigation and same page transition
$.mobile.phonegapNavigationEnabled = true;
$.mobile.changePage.defaults.allowSamePageTransition = true;



});//]]>  
