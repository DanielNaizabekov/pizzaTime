$(function() {

	//===menu===
	let nav = document.querySelector('.nav');
	let navDecoration = nav.previousElementSibling;
	let menuToggler = false;

	document.querySelector('.menu__btn').onclick = () => {
		document.body.classList.toggle('body_active');

		document.querySelector('.nav-wrap').classList.toggle('nav-wrap_active');

		setTimeout(() => {
			if(!menuToggler) {
				nav.style.transitionDelay = '0s';
				navDecoration.style.transitionDelay = '.1s';

				menuToggler = true;
			} else {
				nav.style.transitionDelay = '.1s';
				navDecoration.style.transitionDelay = '0s';

				menuToggler = false;
			}
		}, 710);
	};
	//===menu===




	//===changeProductItemMargin===
	let productItem = document.querySelector('.product__item:last-child');

	function changeProductItemMargin() {
		if(document.documentElement.clientWidth >= 990 ) {
			productItem.style.marginBottom = '0';
			productItem.previousElementSibling.style.marginBottom = '0';
			productItem.previousElementSibling.previousElementSibling.style.marginBottom = '0';
		} else if(document.documentElement.clientWidth < 990) {
			productItem.style.marginBottom = '0';
		}
	}
	changeProductItemMargin()
	window.onresize = () => {
		changeProductItemMargin()
	}
	//===changeProductItemMargin===
});