$(function() {

	//toggle menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		return false;
	});
	// ВЫравнивание блоков по высоте
	$(".box").equalHeights(); 
	$(".box-posts").equalHeights();
	//Слайдер
	var owl = $(".owl-carousel");

	owl.owlCarousel({
		loop: true,
		items: 1, 
	});

	/// плитки
	$(".mixblock").mixItUp();

	//плавный скрол в хроме
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};


});
