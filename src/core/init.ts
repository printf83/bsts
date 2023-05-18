import { UUID } from "./uuid.js";
import { calcTimer } from "./calcTimer.js";
import { tooltip } from "../bootstrap/tooltip.js";
import { popover } from "../bootstrap/popover.js";
import { scrollspy } from "../bootstrap/scrollspy.js";
import { init as carouselInit } from "../bootstrap/carousel/_fn.js";

const runTimer = (elem: Element, delay: number) => {
	const id = elem.getAttribute("id");
	const tv = parseInt(elem.getAttribute("data-bs-timer-run")!);

	setTimeout(
		(id: string, tv: number) => {
			let e = document.getElementById(id);
			if (e) {
				let res = calcTimer(tv);
				e.innerText = res.msg;
				runTimer(e, res.next);
			}
		},
		delay,
		id,
		tv
	);
};

export const init = (container: Element) => {
	initPopover(container);
	initTooltip(container);
	initCarousel(container);
	initScrollSpy(container);
	initTimer(container);
};

export const initTimer = (container: Element) => {
	const elem = container.querySelectorAll("[data-bs-timer]");
	if (elem && elem.length > 0) {
		elem.forEach((i) => {
			i.setAttribute("id", i.getAttribute("id") || UUID());
			i.setAttribute("data-bs-timer-run", i.getAttribute("data-bs-timer")!);
			i.removeAttribute("data-bs-timer");
			runTimer(i, 1000);
		});
	}
};
export const initScrollSpy = (container: Element) => {
	const elem = container.querySelectorAll('[data-bs-spy="scroll"]');
	if (elem && elem.length > 0) {
		elem.forEach((i) => {
			scrollspy.init(i);
		});
	}
};
export const initCarousel = (container: Element) => {
	const elem = container.querySelectorAll('[data-bs-ride="carousel"]');
	if (elem && elem.length > 0) {
		elem.forEach((i) => {
			carouselInit(i);
		});
	}
};
export const initPopover = (container: Element) => {
	const elem = container.querySelectorAll('[data-bs-toggle="popover"]');
	if (elem && elem.length > 0) {
		elem.forEach((i) => {
			popover.init(i);
		});
	}
};
export const initTooltip = (container: Element) => {
	const elem = container.querySelectorAll('[data-bs-toggle="tooltip"]');
	if (elem && elem.length > 0) {
		elem.forEach((i) => {
			tooltip.init(i);
		});
	}
};
