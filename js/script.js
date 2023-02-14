"use strict"

// document.addEventListener('DOMContentLoaded', function () { //проверка док-т уже загружен

// };


window.addEventListener('load', windowLoad);

function windowLoad() {

	document.body.classList.add('loaded');

	if (document.querySelector('.main-slider')) {
		new Swiper('.main-slider', {
			speed: 2000,
			effect: "fade",
			autoplay: {
				delay: 3000
			},
			pagination: {
				el: '.bullets__items',
				type: 'bullets',
				clickable: true
			},
		});
	}
};



$(document).ready(function () {
	$('.slider').slick({
		arrows: false, //стрелка tru false
		dots: true,    // точки
		adaptiveHeight: true,   //высота адаптив
		slidesToShow: 4,       //колич слаидов на экране
		slidesToScroll: 1,      //колич слаидов за один клик
		/*speed: 1000,
		easing: 'ease',
		infinite: true,     //безконечность
		initialSlide: 0,     // старт с какого

		autoplay: false,
		autoplaySpeed: 1500,    //время за ...по умолч 3000
		pauseOnFocus: false,      //пауза при клику
		pauseOnHover: false,     //пауза наведении
		pauseOnDotsHover: false,  //пауза наведении на кнопки

		draggable: true,       // на телефоне
		swipe: true,           //мышкой на комп
		waitForAnimate: false,   //чем чаще кликаеш...
		centerMode: false,        //выдел центр*/
		/*variableWidth: false,      //сливает в едино
		rows: 1,
		slidesPerRow: 2,*/
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});


});
