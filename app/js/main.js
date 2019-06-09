'use strict';

(function($){
	$(document).ready(function() {
		// Code
		if($(window).width() < 576) {
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
		} else {
			$('.slider').slick({

				// centerPadding: '60px',
				infinite: true,
				slidesToShow: 6,
				slidesToScroll: 1,              
				dots: false,
				arrows:false,
				infinite: true, 
				// variableWidth: true,  

			});
		}
		
		$('.multiple-items').slick({
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
	$(".go-to-challenge").click(function(){
		GoToChallengePage("challenges.html")
	})
	/*$(".button-do").click(function(){
		GoToChallengePage("challenges.html")
	})*/
	$('.about-item').click(function(){
		GoToChallengePage('about.html')
	})
	/*$('.startpage__button').click(function(){
		GoToChallengePage("challenges.html")
	})*/
})(jQuery);

function GoToChallengePage(adress){
	window.open(adress);
}

//SHOW MODAL WINDOS
$('.accountBtn').click(function(){
	// var startModalBg = document.getElementsByClassName('startModalBg')[0];
	menuBg.style.display = 'none';
	startModalBg.style.display = 'block';

})

$('.menuBtn').click(function(){
	menuBg.style.display = 'block'; 
})

$('.startModalContent__enter').click(function(){
	enterModalBg.style.display = 'block';
})

$('.startModalContent__register').click(function(){
	registerModalBg.style.display = 'block';
})

$('.homepage-main__text--btn').click(function(){
	modal_bg.style.display = 'block';
})

//CLOSE MODAL WINDOWS
$('.content__close').click(function(){
	startModalBg.style.display = 'none';
	menuBg.style.display = 'none';
	enterModalBg.style.display = 'none';
	registerModalBg.style.display = 'none';
})

$('.homepage-main__works').click(function(){
	modal_bg.style.display = 'none';
})


/*var registerBg = document.getElementsByClassName('startModalBg')[0];
var accountBtn = document.getElementById('accountBtn');
var registerClose = document.getElementsByClassName('startModalContent__close')[0];
var startModalContent = document.getElementsByClassName('startModalContent')[0];

accountBtn.onclick = function() { 
	startModalBg.style.display = 'block'; 
}

registerClose.onclick = function() { 
	startModalBg.style.display = 'none';
}

// registerBg.onclick = function() { 

// 	registerBg.style.display = 'none';

// }

// Enter Modal Window
var enterBg = document.getElementById('enterModalBg');
var enterBtn = document.getElementsByClassName('startModalContent__enter')[0];
var enterClose = document.getElementsByClassName('enterModalContent__close')[0];

enterBtn.onclick = function() { 
	registerBg.style.display = 'none'; 
	enterBg.style.display = 'block';

}

enterClose.onclick = function() { 
	enterModalBg.style.display = 'none';
}

window.onclick = function(event) { 
	if (event.target == enterModalBg) { 
		enterModalBg.style.display = 'none';
	}
}

// Register Modal Window

var menuBg = document.getElementById('menuBg');
var menuBtn = document.getElementById('menuBtn');
var menuClose = document.getElementsByClassName('menu__close')[0];

menuBtn.onclick = function() { 
	menuBg.style.display = 'block'; 
}

menuClose.onclick = function() { 
	menuBg.style.display = 'none';
}

window.onclick = function(event) { 
	if (event.target == menuBg) { 
		menuBg.style.display = 'none';
	}
}*/