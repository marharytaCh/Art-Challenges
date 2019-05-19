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

// Start Modal Window
var registerBg = document.getElementById('startModalBg');
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
}