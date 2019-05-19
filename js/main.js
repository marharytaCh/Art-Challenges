'use strict';

(function($){
	$(document).ready(function() {
		// Code
		$('.slider').slick({
			centerPadding: '60px',
			slidesToShow: 3,
			centerMode: true,
  			slidesToScroll: 1,               
  			dots: false,
  			arrows:false,
			infinite: true, 
			variableWidth: true,  
			
		});
	});
	$(".button-do").click(function(){
		GoToChallengePage("challenges.html")
	})
})(jQuery);

function GoToChallengePage(adress){
window.open(adress);
}
