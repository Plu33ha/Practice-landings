$(document).ready(function(){
	$('.choice__slider').slick({
		arrows:true,
		dots:false,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:3,
		speed:1000,
		easing:'ease',
		infinite:true,
		initialSlide:0,
		// autoplay
		autoplay:false,
		autoplaySpeed:800,
		pauseOnFocus:true,
		pauseOnHover:false,
		pauseOnDotsHover:true,
		// ---
		draggable: true,
		swipe:true,
		touchThreshold:5,
		touchMove:true,
		waitForAnimate:false,
		centerMode:true,
	});
});
$('.reviews__slider').slick();