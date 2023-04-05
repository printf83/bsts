import { a } from "../html/a.js";
import { b } from "../html/b.js";
import { code } from "../html/code.js";
import { i } from "../html/i.js";
import { kbd } from "../html/kbd.js";
import { span } from "../html/span.js";
import { u } from "../html/u.js";
import { del } from "../html/del.js";
import { mark } from "../html/mark.js";
import { attachAttr } from "./attach/_index.js";
import { IAttr, isTag, tag } from "./tag.js";
import { removeChildElement } from "./removeChildElement.js";
import { removeElement } from "./removeElement.js";
import { UUID } from "./uuid.js";

export type buildArg = tag | string | (tag | string)[];

const calcTimer = (datevalue: number) => {
	var t1 = new Date().getTime();
	var t2 = datevalue;
	var next = -1;
	var msg = `Just now`;

	if (t1 > t2) {
		var diff = t1 - t2;
		var sec = parseInt((diff / 1000).toString(), 10);

		if (sec < 1) {
			next = 1000;
			msg = `Just now`;
		} else if (sec >= 1 && sec < 60) {
			//second
			next = 1000;
			msg = `${sec} second${sec > 1 ? "s" : ""} ago`;
		} else if (sec >= 60 && sec < 3600) {
			//minute
			next = 60000;
			let t = parseInt((sec / 60).toString(), 10);
			msg = `${t} minute${t > 1 ? "s" : ""} ago`;
		} else if (sec >= 3600 && sec < 86400) {
			//hour
			next = 3600000;
			let t = parseInt((sec / 3600).toString(), 10);
			msg = `${t} hour${t > 1 ? "s" : ""} ago`;
		} else {
			//do not on timer
			next = -1;
			let t = parseInt((sec / 86400).toString(), 10);
			msg = `${t} day${t > 1 ? "s" : ""} ago`;
		}
	}

	return {
		next: next,
		msg: msg,
	};
};

const runTimer = (elem: HTMLElement, delay: number) => {
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

export const init = (container: HTMLElement) => {
	const popoverTriggerList = container.querySelectorAll('[data-bs-toggle="popover"]');
	popoverTriggerList.forEach((i) => new window.bootstrap.Popover(i));
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
	tooltipTriggerList.forEach((i) => new window.bootstrap.Tooltip(i));
	const scrollspyTriggerList = document.querySelectorAll('[data-bs-spy="scroll"]');
	scrollspyTriggerList.forEach((i) => window.bootstrap.ScrollSpy.getOrCreateInstance(i).refresh());
	const timerTriggerList = document.querySelectorAll("[data-bs-timer]");
	timerTriggerList.forEach((i) => {
		i.setAttribute("id", i.getAttribute("id") || UUID());
		i.setAttribute("data-bs-timer-run", i.getAttribute("data-bs-timer")!);
		i.removeAttribute("data-bs-timer");
		runTimer(i as HTMLElement, 1000);
	});
};

const markupCode = (k: string, str: string) => {
	if (k.match(/^[buickdm]*$/gm)) {
		let res: tag | null = null;
		let ks = k.split("");
		let ksl = ks.length - 1;

		ks.forEach((x, ix) => {
			switch (x) {
				case "d":
					if (res === null) {
						res = new del(ix === ksl ? str : "");
					} else {
						res.elem = new del(ix === ksl ? str : "");
					}
					break;
				case "m":
					if (res === null) {
						res = new mark(ix === ksl ? str : "");
					} else {
						res.elem = new mark(ix === ksl ? str : "");
					}
					break;
				case "b":
					if (res === null) {
						res = new b(ix === ksl ? str : "");
					} else {
						res.elem = new b(ix === ksl ? str : "");
					}
					break;
				case "u":
					if (res === null) {
						res = new u(ix === ksl ? str : "");
					} else {
						res.elem = new u(ix === ksl ? str : "");
					}
					break;
				case "i":
					if (res === null) {
						res = new i(ix === ksl ? str : "");
					} else {
						res.elem = new i(ix === ksl ? str : "");
					}
					break;
				case "k":
					if (res === null) {
						res = new kbd(ix === ksl ? str : "");
					} else {
						res.elem = new kbd(ix === ksl ? str : "");
					}
					break;
				case "c":
					if (res === null) {
						res = new code(ix === ksl ? str : "");
					} else {
						res.elem = new code(ix === ksl ? str : "");
					}
					break;
				default:
					if (res === null) {
						res = new span(ix === ksl ? str : "");
					} else {
						res.elem = new span(ix === ksl ? str : "");
					}
			}
		});

		return res;
	}

	return null;
};

const markup = (str: string) => {
	let reg = /\{\{(.*?)}\}/gm;

	if (str.match(reg)) {
		let matchResult: RegExpExecArray | null;
		let result: string[] = [];
		let lastIndex: number = 0;

		while ((matchResult = reg.exec(str)) !== null) {
			result.push(str.slice(lastIndex, matchResult.index));
			result.push(str.slice(matchResult.index, reg.lastIndex));
			lastIndex = reg.lastIndex;
		}

		result.push(str.slice(lastIndex));

		return result.map((s) => {
			if (s.startsWith("{{")) {
				let c = s.indexOf("::");
				if (c > 0) {
					let d = s.slice(2, c);
					let e = s.slice(c + 2, s.length - 2);

					let m = markupCode(d, e);
					if (m) {
						return m;
					} else {
						return new a({ href: d }, e);
					}
				} else {
					return new code(s.slice(2, -2));
				}
			} else {
				return s;
			}
		});
	} else {
		return str;
	}
};

const processElem = (i: string | tag, e: tag, element: HTMLElement) => {
	if (i !== null) {
		if (isTag<IAttr>(i)) {
			let t = build(element, i as tag);
			element = t ? t : element;
		} else {
			//all text treat as html

			//only pre is html
			let g = i as string;
			if (e.tag === "pre") {
				element.insertAdjacentHTML("beforeend", g);
			} else {
				let m = markup(g);
				if (typeof m === "string") {
					element.appendChild(document.createTextNode(g));
				} else {
					m.forEach((j) => {
						element = processElem(j, e, element);
					});
				}
			}
		}
	}

	return element;
};

export const build = (
	container: HTMLElement | HTMLBodyElement,
	arg: buildArg,
	append: boolean = true,
	beforeElem: HTMLElement | null = null
): HTMLElement | HTMLBodyElement => {
	if (arg) {
		arg = Array.isArray(arg) ? arg : [arg];

		if (arg.length > 0) {
			arg.forEach((h) => {
				if (h !== null) {
					if (isTag<IAttr>(h)) {
						let e = h as tag;
						let element = e.attr
							? attachAttr(document.createElement(e.tag), e.attr!)
							: document.createElement(e.tag);

						if (e.elem) {
							e.elem = Array.isArray(e.elem) ? e.elem : [e.elem];
							e.elem.forEach((i) => {
								element = processElem(i, e, element);
							});
						}

						// e.dom = element;

						if (append) {
							if (beforeElem) {
								container.insertBefore(element, beforeElem);
							} else {
								container.appendChild(element);
							}
						} else {
							if (container.childElementCount > 0) {
								if (beforeElem) {
									container.insertBefore(element, beforeElem);
									beforeElem = element;
								} else {
									container.insertBefore(element, container.firstChild);
								}
							} else {
								container.appendChild(element);
							}
						}
					}
				}
			});
		}
	}

	return container;
};

export const node = (arg: buildArg): HTMLElement | HTMLElement[] | null => {
	let container = build(document.createElement("div"), arg);
	let childCount = container.childElementCount;
	if (childCount === 0) return null;
	if (childCount === 1) return container.firstChild as HTMLElement;
	return Array.from(container.childNodes).map((i) => i as HTMLElement);
};

export const html = (arg: buildArg): string => {
	let container = build(document.createElement("div"), arg);
	let result = container.innerHTML;
	removeElement(container);
	return result;
};

export const appendChild = (container: HTMLElement | HTMLBodyElement, arg: buildArg): HTMLElement | HTMLBodyElement => {
	container = build(container, arg);
	return container;
};

export const prependChild = (
	container: HTMLElement | HTMLBodyElement,
	arg: buildArg
): HTMLElement | HTMLBodyElement => {
	container = build(container, arg, false);
	return container;
};

export const replaceWith = (elem: HTMLElement | HTMLBodyElement, arg: buildArg): HTMLElement | HTMLBodyElement => {
	let parent = elem.parentNode as HTMLElement;
	parent = build(parent, arg, true, elem);
	removeElement(elem);
	return parent;
};

export const replaceChild = (
	container: HTMLElement | HTMLBodyElement,
	arg: buildArg
): HTMLElement | HTMLBodyElement => {
	removeChildElement(container);
	container = build(container, arg);
	return container;
};
