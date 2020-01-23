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
	let productOrder = document.getElementsByClassName('product__order');

	for(let i = 0; i < productSize.length; i++) {
		productOrder[i].setAttribute('data-product', `pizza${i}`);

		let productSizeChildren = productSize[i].children

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
		pizza0: {35: 850, 30: 740, 25: 630, currentSize: 35, name: 'Салями'},
		pizza1: {35: 950, 30: 840, 25: 730, currentSize: 35, name: 'Хит'},
		pizza2: {35: 880, 30: 770, 25: 660, currentSize: 35, name: 'Ветчина-грибы'},
		pizza3: {35: 1250, 30: 1130, 25: 1010, currentSize: 35, name: 'Карбонара'},
		pizza4: {35: 890, 30: 780, 25: 670, currentSize: 35, name: 'Фирменная'},
		pizza5: {35: 850, 30: 740, 25: 630, currentSize: 35, name: 'Ассорти'},
		pizza6: {35: 920, 30: 810, 25: 700, currentSize: 35, name: 'Л-01'},
		pizza7: {35: 990, 30: 880, 25: 770, currentSize: 35, name: 'Три сыра'},
		pizza8: {35: 950, 30: 840, 25: 730, currentSize: 35, name: 'Мясная'},
	}
	//===setPizzaPrices===


	//===changePrice===
	function changePrice(event) {
		let product = event.target.getAttribute('data-product');
		let size = event.target.getAttribute('data-size');
		let price = Pizza[product][size];

		Pizza[product].currentSize = size

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


	let sectionTopBtn = document.getElementById('section-top__btn');
	sectionTopBtn.onclick = (event) => {
		event.preventDefault();
		document.querySelector('.catalog').scrollIntoView({block: "start", behavior: "smooth"});
	};
	//===scroll===



	//===popup close===
	let popupContent = document.getElementsByClassName('popup__content');
	for(let i = 0; i < popupContent.length; i++) {
		popupContent[i].onclick = (event) => {
			event.stopPropagation();

			if(event.target.className !== 'btn-inner') {
				return null;
			}

			for(let k = 0; k < popup.length; k++) {
				popup[k].classList.remove('popup_active');
			};
		};
	};

	let popupInner = document.getElementsByClassName('popup__inner');
	let popup = document.getElementsByClassName('popup');

	for(let i = 0; i < popupInner.length; i++) {
		popupInner[i].onclick = () => {
			for(let k = 0; k < popup.length; k++) {
				popup[k].classList.remove('popup_active');
			};
		}
	};
	//===popup close===

	//===order===
	document.getElementById('product__list').onclick = (event) => {
		let target = event.target;

		if(target.className !== 'product__order') {
			return null;
		}

		document.getElementById('order-popup').classList.add('popup_active');


		let product = event.target.getAttribute('data-product');
		let productImg = target.parentNode.parentNode.querySelector('.product__img').getAttribute('src');

		let name = Pizza[product].name;
		let size = Pizza[product].currentSize;
		let price = Pizza[product][size];

		document.querySelector('.popup__price').innerHTML = `${name} ${price} ₽`
		document.querySelector('.popup__pizza-size').innerHTML = size
		document.querySelector('.popup__img').setAttribute('src', productImg)
	};
	//===order===



	//===order btn===
	let popupOrderBtn = document.querySelector('.popup__order-btn');

	popupOrderBtn.onclick = (event) => {
		event.preventDefault();
		let successPopup = document.getElementById('success-popup');

		document.getElementById('order-popup').classList.remove('popup_active');
		successPopup.classList.add('popup_active');
	};
	//===order btn===


	//===product filter===
	let productWrapper = document.getElementsByClassName('product__item');
	for(let i = 0; i < productWrapper.length; i++) {
		productWrapper[i].classList.add('mix');
	};

	var mixer = mixitup('.product__list', {
		"animation": {
			"duration": 500,
			"nudge": true,
			"reverseOut": false,
			"effects": "fade translateZ(-100px)"
		}
	});


	let catalogNavList = document.getElementById('catalog__nav-list');

	catalogNavList.onclick = (event) => {
		let catalogNavItem = document.getElementsByClassName('catalog__nav-item');
		for(let i = 0; i < catalogNavItem.length; i++) {
			catalogNavItem[i].classList.remove('catalog__nav-item_active');
		}

		let target = event.target;

		target.parentNode.classList.add('catalog__nav-item_active');
	};
	//===product filter===
});