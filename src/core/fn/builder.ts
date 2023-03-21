import { a } from "../../html/a.js";
import { b } from "../../html/b.js";
import { code } from "../../html/code.js";
import { i } from "../../html/i.js";
import { u } from "../../html/u.js";
import { attachAttr } from "../attach/_index.js";
import { IAttr, isTag, tag } from "../base/tag.js";
import { removeChildElement } from "./removeChildElement.js";
import { removeElement } from "./removeElement.js";
import { setting } from "./setting.js";

export type buildArg = tag | string | (tag | string)[];

export const init = (container: HTMLElement) => {
	const popoverTriggerList = container.querySelectorAll('[data-bs-toggle="popover"]');
	[...popoverTriggerList].map((popoverTriggerEl) => new window.bootstrap.Popover(popoverTriggerEl));

	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
	[...tooltipTriggerList].map((tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl));
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

					switch (d) {
						case "b":
							return new b(e);
						case "i":
							return new i(e);
						case "u":
							return new u(e);
						default:
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
	container: HTMLElement,
	arg: buildArg,
	append: boolean = true,
	beforeElem: HTMLElement | null = null
): HTMLElement => {
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

						e.dom = element;

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

export const appendChild = (container: HTMLElement, arg: buildArg): HTMLElement => {
	if (setting.DEBUG) console.time("appendChild");
	container = build(container, arg);
	if (setting.DEBUG) console.timeEnd("appendChild");
	return container;
};

export const prependChild = (container: HTMLElement, arg: buildArg): HTMLElement => {
	if (setting.DEBUG) console.time("prependChild");
	container = build(container, arg, false);
	if (setting.DEBUG) console.timeEnd("prependChild");
	return container;
};

export const replaceWith = (elem: HTMLElement, arg: buildArg): HTMLElement => {
	if (setting.DEBUG) console.time("replaceWith");
	let parent = elem.parentNode as HTMLElement;
	parent = build(parent, arg, true, elem);
	removeElement(elem);
	if (setting.DEBUG) console.timeEnd("replaceWith");
	return parent;
};

export const replaceChild = (container: HTMLElement, arg: buildArg): HTMLElement => {
	if (setting.DEBUG) console.time("replaceChild");
	removeChildElement(container);
	container = build(container, arg);
	if (setting.DEBUG) console.timeEnd("replaceChild");
	return container;
};
