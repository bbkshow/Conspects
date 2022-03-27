const frontendSkills = [
	['html', '60%'],
	['css', '80%'],
	['javascript', '90%'],
];

const backendSkills = [
	['java', '60%'],
	['nodejs', '80%'],
	['sql', '90%'],
];

const designerSkills = [
	['figma', '60%'],
	['photoshop', '80%'],
	['canva', '90%'],
];

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

//! MENU SHOW
//* Validate if constant exist
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

//! MENU HIDDEN
//* Validate if constant exist
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

//! REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
	navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction));

//! Skills Percentage
const fillPercentages = (data) => {
	for (let i = 0; i < data.length; i++) {
		const element = document.querySelector('.skills__' + data[i][0]);
		element.style.width = `${data[i][1]}`;
	}
};

fillPercentages(frontendSkills);
fillPercentages(backendSkills);
fillPercentages(designerSkills);

//! Accordion Skills
const skillsList = document.getElementsByClassName('skills__list');
const skillsHeader = document.getElementsByClassName('skills__header');

const toggleSkills = (skillList) => {
	skillList.classList.toggle('skills__open');
	skillList.classList.toggle('skills__close');

	skillList.classList.toggle('fadein');
	skillList.classList.toggle('fadeout');
};

for (let i = 0; i < skillsList.length; i++) {
	skillsHeader[i].addEventListener('click', () => {
		toggleSkills(skillsList[i]);
	});
}

//! Qualification Tabs
const btnWork = document.getElementById('work-btn');
const btnEducation = document.getElementById('education-btn');

const contentWork = document.getElementById('work-content');
const contentEducation = document.getElementById('education-content');

const toggleContent = (element1, element2, toggleClass) => {
	element1.classList.toggle(toggleClass);
	element1.classList.toggle('fadein');
	element1.classList.toggle('fadeout');

	element2.classList.toggle(toggleClass);
	element2.classList.toggle('fadein');
	element2.classList.toggle('fadeout');
};

btnWork.addEventListener('click', () => {
	if (contentWork.classList.contains('qualification__hidden')) {
		toggleContent(contentWork, contentEducation, 'qualification__hidden');
	}
});

btnEducation.addEventListener('click', () => {
	if (contentEducation.classList.contains('qualification__hidden')) {
		toggleContent(contentWork, contentEducation, 'qualification__hidden');
	}
});

//! Services Modal
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = (modalClick) => {
	modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () => {
		modal(i);
	});
});

modalCloses.forEach((modalClose) => {
	modalClose.addEventListener('click', () => {
		modalViews.forEach((modalView) => {
			modalView.classList.remove('active-modal');
		});
	});
});

//! Portfolio
let swiperPortfolio = new Swiper('.portfolio__container', {
	cssMode: true,
	loop: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

//! Testimonial
let swiperTestimonial = new Swiper('.testimonial__container', {
	loop: true,
	grabCursor: true,
	spaceBetween: 48,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		568: {
			slidesPerView: 2,
		},
	},
});

//! Scroll sections active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.add('active-link');
		} else {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.remove('active-link');
		}
	});
}
window.addEventListener('scroll', scrollActive);

//! Change Background Header
function scrollHeader() {
	const nav = document.getElementById('header');
	// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 80) nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

//! Show Scroll Up
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
