$(function() {

	//===menu===
	document.querySelector('.menu__btn').addEventListener('click', (event) => {
		document.querySelector('.menu__btn').classList.toggle('menu__btn_active');
		document.querySelector('.nav').classList.toggle('nav_active');
	});
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