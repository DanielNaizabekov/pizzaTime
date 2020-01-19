$(function() {

	//===menu===
	let nav = document.querySelector('.nav');
	let navDecoration = nav.previousElementSibling;
	let menuToggler = false;

	document.querySelector('.menu__btn').onclick = () => {
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



	//===size button===
	//===create btnCover===
	let productSize = document.getElementsByClassName('product__size');
	for(let i = 0; i < productSize.length; i++) {
		let btnCover = document.createElement('div');
		btnCover.className = "btn-cover";

		productSize[i].append(btnCover);
	};
	//===create btnCover===


	//===changeBtnPosition===
	let productSizeBtn = document.getElementsByClassName('product__size-btn');
	for(let i = 0; i < productSizeBtn.length; i++) {
		productSizeBtn[i].onclick = changeBtnPosition;
	};

	function changeBtnPosition(event) {
		let offset = event.target.offsetLeft;
		let btnCover = event.target.parentElement.querySelector('.btn-cover');
		btnCover.style.left = offset + 'px';

		let productSizeBtn = event.target.parentElement.querySelectorAll('.product__size-btn');
		for(let i = 0; i < productSizeBtn.length; i++) {
			productSizeBtn[i].classList.remove('product__size-btn_active');
		}
		event.target.classList.add('product__size-btn_active')

		changePrice(event);
	};


	//===setAttrbuteToBtns===
	let productSize2 = document.getElementsByClassName('product__size');
	for(let i = 0; i < productSize2.length; i++) {
		let productSizeChildren = productSize2[i].children

		let size = 35
		for(let k = 0; k < productSizeChildren.length; k++) {
			productSizeChildren[k].setAttribute('data-product', `pizza${i}`)
			productSizeChildren[k].setAttribute('data-size', size)

			size = size - 5
		};
	};
	//===setAttrbuteToBtns===
	

	//===setPizzaPrices===
	let Pizza = {
		pizza0: {35: 850, 30: 740, 25: 630},
		pizza1: {35: 950, 30: 840, 25: 730},
		pizza2: {35: 880, 30: 770, 25: 660},
		pizza3: {35: 1250, 30: 1130, 25: 1010},
		pizza4: {35: 890, 30: 780, 25: 670},
		pizza5: {35: 850, 30: 740, 25: 630},
		pizza6: {35: 920, 30: 810, 25: 700},
		pizza7: {35: 990, 30: 880, 25: 770},
		pizza8: {35: 950, 30: 840, 25: 730},
	}
	//===setPizzaPrices===


	//===changePrice===
	function changePrice(event) {
		let product = event.target.getAttribute('data-product');
		let size = event.target.getAttribute('data-size');
		let price = Pizza[product][size];

		event.target.parentNode.parentNode.querySelector('.product__price').innerHTML = price + ' ' + '₽';
	};
	//===changePrice===


	//===changeBtnPosition===
	//===size button===



	//===scroll===
	let linkBtn = document.getElementsByClassName('nav__link');

	for(let i = 0; i < linkBtn.length; i++) {
		linkBtn[i].onclick = (event) => {
			event.preventDefault();
			startScroll(event);
		};
	};

	function startScroll(event) {
		let attribute = event.target.getAttribute('href');

		document.querySelector(attribute).scrollIntoView({block: "start", behavior: "smooth"});
	};
	//===scroll===
});