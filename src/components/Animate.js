import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

const tl = gsap.timeline();

export const hideMenuMobile = (el) => {
	gsap.to(el, {
		duration: 0.3,

		css: { top: '-100%', autoAlpha: 0 },
	});
};

export const showMenuMobile = (el) => {
	gsap.to(el, {
		duration: 0.3,
		css: { top: '0', autoAlpha: 1 },
	});
};

export const mobileHeaderSlide = (el) => {
	gsap.fromTo(
		el,
		{ x: '-=100%' },
		{ delay: 0.3, duration: 0.5, x: '+=100%', ease: 'power4.inOut' }
	);
};
export const staggerLinksMobile = (el1, el2, el3, el4) => {
	gsap.from([el1, el2, el3, el4], {
		duration: 0.8,
		y: 100,
		delay: 0.1,
		ease: 'power4.inOut',
		stagger: {
			amount: 0.3,
		},
	});
};

export const hoverLink = (e) => {
	gsap.to(e.target, {
		duration: 0.4,
		y: 3,
		skewX: 4,
		color: 'green',
		ease: 'power2.inOut',
	});
};
export const hoverExit = (e) => {
	gsap.to(e.target, {
		duration: 0.4,
		y: -3,
		skewX: 0,
		color: '',
		ease: 'power2.inOut',
	});
};

export const mainMenuAnimition = (el1) => {
	gsap.fromTo(el1, { x: '+=200%' }, { duration: 0.4, x: '-=200%' });
};
export const headerLogoAnimition = (el2) => {
	gsap.fromTo(el2, { x: '-=200%' }, { duration: 0.4, x: '+=200%' });
};
