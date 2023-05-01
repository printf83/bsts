import { a } from "../html/a.js";
import { strong } from "../html/strong.js";
import { b } from "../html/b.js";
import { code } from "../html/code.js";
import { br } from "../html/br.js";
import { hr } from "../html/hr.js";
import { i } from "../html/i.js";
import { kbd } from "../html/kbd.js";
import { span } from "../html/span.js";
import { u } from "../html/u.js";
import { del } from "../html/del.js";
import { mark } from "../html/mark.js";
import { attachAttr } from "./attach/_index.js";
import { IAttr, isTag, tag, strHtml, isHtml } from "./tag.js";
import { removeChildElement } from "./removeChildElement.js";
import { removeElement } from "./removeElement.js";
import { UUID } from "./uuid.js";
import * as modalFn from "../bootstrap/modal/_fn.js";
import * as toastFn from "../bootstrap/toast/_fn.js";

export type buildArg = tag | string | strHtml | (tag | string | strHtml)[];

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

export const removeActiveTooltip = () => {
	const elem = document.querySelectorAll("div.tooltip.show");
	elem.forEach((i) => i.remove());
};
export const removeActivePopover = () => {
	const elem = document.querySelectorAll("div.popover.show");
	elem.forEach((i) => i.remove());
};
export const removeActiveModal = () => {
	const elem = document.querySelectorAll("div.modal.show");
	elem.forEach((i) => {
		modalFn.hide(i);
	});
};
export const removeActiveToast = () => {
	const elem = document.querySelectorAll("div.toast.show");
	elem.forEach((i) => {
		toastFn.hide(i);
	});
};

export const init = (container: Element) => {
	const popoverTriggerList = container.querySelectorAll('[data-bs-toggle="popover"]');
	popoverTriggerList.forEach((i) => {
		// let container = i.getAttribute("data-bs-container");
		// new window.bootstrap.Popover(i, { container: container ? container : "body" });
		new window.bootstrap.Popover(i);
	});
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
	tooltipTriggerList.forEach((i) => {
		// let container = i.getAttribute("data-bs-container");
		// new window.bootstrap.Tooltip(i, { container: container ? container : "body" });
		new window.bootstrap.Tooltip(i);
	});
	const scrollspyTriggerList = document.querySelectorAll('[data-bs-spy="scroll"]');
	scrollspyTriggerList.forEach((i) => window.bootstrap.ScrollSpy.getOrCreateInstance(i).refresh());
	const timerTriggerList = document.querySelectorAll("[data-bs-timer]");
	timerTriggerList.forEach((i) => {
		i.setAttribute("id", i.getAttribute("id") || UUID());
		i.setAttribute("data-bs-timer-run", i.getAttribute("data-bs-timer")!);
		i.removeAttribute("data-bs-timer");
		runTimer(i, 1000);
	});
};

const markupCode = (k: string, str: string) => {
	if (k.match(/^[buickdms]*$/gm)) {
		let res: tag | null = null;
		let ks = k.split("");
		let ksl = ks.length - 1;
		str = escapeMarkup(str);

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
				case "s":
					if (res === null) {
						res = new strong(ix === ksl ? str : "");
					} else {
						res.elem = new strong(ix === ksl ? str : "");
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

const escapeMarkup = (str: string) => {
	return str.replace(/\/{\//g, "{").replace(/\/}\//g, "}").replace(/\/:\//g, ":");
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
						if (d.startsWith("nav:")) {
							return new a(
								{
									href: "#",
									on: {
										click: () => {
											document.dispatchEvent(
												new CustomEvent("bs.navigate", { detail: d.slice(4) })
											);
										},
									},
								},
								escapeMarkup(e)
							);
						} else {
							return new a({ href: d, target: "_blank" }, escapeMarkup(e));
						}
					}
				} else {
					switch (s) {
						case "{{br}}":
							return new br();
						case "{{hr}}":
							return new hr();
						default:
							return new code(escapeMarkup(s.slice(2, -2)));
					}
				}
			} else {
				return s;
			}
		});
	} else {
		return str;
	}
};

const htmlToElement = (strHTML: string) => {
	var template = document.createElement("template");
	strHTML = strHTML.trim(); // Never return a text node of whitespace as the result
	template.innerHTML = strHTML;
	return template.content.firstChild;
};

const processElem = (i: string | tag | strHtml, e: tag, element: Element) => {
	if (i !== null) {
		if (isTag<IAttr>(i)) {
			let t = build(element, i as tag);
			element = t ? t : element;
		} else if (isHtml(i)) {
			let t = build(element, i as strHtml);
			element = t ? t : element;
		} else {
			//only pre is html
			let g = i as string;
			if (e.tag === "pre" || e.tag === "code") {
				element.insertAdjacentText("beforeend", g.replace(/\`/g, "'"));
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
	container: Element,
	arg: buildArg,
	append: boolean = true,
	beforeElem: Element | ChildNode | null = null
): Element => {
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
					} else if (isHtml(h)) {
						let element = htmlToElement(h.elem!);

						if (element) {
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
				}
			});
		}
	}

	return container;
};

export const getNode = (arg: buildArg): Element | Element[] | null => {
	let container = build(document.createElement("template"), arg);
	let childCount = container.childElementCount;
	if (childCount === 0) return null;
	if (childCount === 1) return container.firstChild as Element;
	return Array.from(container.childNodes).map((i) => i as Element);
};

export const getHtml = (arg: buildArg): string => {
	let container = build(document.createElement("template"), arg);
	let result = container.innerHTML;
	removeElement(container);
	return result;
};

export const appendChild = (container: Element, arg: buildArg): Element => {
	container = build(container, arg);
	return container;
};

export const prependChild = (container: Element, arg: buildArg): Element => {
	container = build(container, arg, false);
	return container;
};

export const replaceWith = (elem: Element, arg: buildArg): Element | undefined => {
	let parent = elem.parentNode as Element;
	if (parent) {
		parent = build(parent, arg, true, elem);
		removeElement(elem);
		return parent;
	}
};

export const replaceChild = (container: Element, arg: buildArg): Element => {
	removeChildElement(container);
	container = build(container, arg);
	return container;
};
