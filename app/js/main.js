'use strict';

(function($){
	$(document).ready(function() {
		// Code
		$('.slider').slick({
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 2,
			dots: false,
			arrows:false,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '80px',
					slidesToShow: 1,
					variableWidth: true,
				}
			}
		]
		});
		/*if ($(window).innerWidth() < 576){
			$('.slider').slick({
				centerMode: true,
				centerPadding: '60px',
				slidesToShow: 1,

			});
		} else {
			$('.slider').slick({

				// centerPadding: '60px',
				infinite: true,
				slidesToShow: 6,
				slidesToScroll: 2,              
				dots: false,
				arrows:false,
				//infinite: true,
				// variableWidth: true,

			});
		}*/
		
		$('.challenges-slider').slick({
			centerMode: true,
			centerPadding: '370px',
			slidesToShow: 1,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 3
					}
				},
				{
					breakpoint: 480,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 1
					}
				}
			]
		});
		//setTimeout("document.getElementsByClassName('hey')[0].style.display='block'", 3000);
	});
	$(".go-to-challenge").click(function(){
		GoToChallengePage("challenges.html")
	})
	/*$(".button-do").click(function(){
		GoToChallengePage("challenges.html")
	})*/
	/*$('.about-item').click(function(){
		GoToChallengePage('about.html')
	})*/
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

//TIMER
	//first
function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		var t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}

var deadlineFirst = new Date(Date.parse(new Date()) + 20 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('clockdivOne', deadlineFirst);

var deadlineSecond = new Date(Date.parse(new Date()) + 17 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('clockdivSecond', deadlineSecond);

var deadlineThird = new Date(Date.parse(new Date()) + 13 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('clockdivThird', deadlineThird);

var deadlineFouth = new Date(Date.parse(new Date()) + 27 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('clockdivFouth', deadlineFouth);

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
