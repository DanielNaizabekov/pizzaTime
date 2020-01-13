$(function() {
	document.querySelector('.menu__btn').addEventListener('click', (event) => {
		document.querySelector('.menu__btn').classList.toggle('menu__btn_active');
		document.querySelector('.nav').classList.toggle('nav_active');
	});

	

	if(document.documentElement.clientWidth >= 990 ) {
		document.querySelector('.product__item:last-child').style.marginBottom = '0';
		document.querySelector('.product__item:last-child').previousElementSibling.style.marginBottom = '0';
		document.querySelector('.product__item:last-child').previousElementSibling.previousElementSibling.style.marginBottom = '0';
	} else if(document.documentElement.clientWidth <= 990) {
		document.querySelector('.product__item:last-child').style.marginBottom = '0';
	}
});