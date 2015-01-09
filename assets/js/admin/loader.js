$(window).load(function(){
	$('#preloader').fadeOut(100, function() {
		$('body').css('overflow','auto');
		$(this).remove();
	});
});