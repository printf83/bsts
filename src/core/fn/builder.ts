import { attachAttr } from "../attach/_index.js";
import { IAttr, isTag, tag } from "../base/tag.js";
import { isHTML } from "./isHTML.js";
import { removeChildElement } from "./removeChildElement.js";
import { removeElement } from "./removeElement.js";
import { setting } from "./setting.js";

export type buildArg = tag | string | (tag | string)[];

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
								if (i !== null) {
									if (isTag<IAttr>(i)) {
										let t = build(element, i as tag);
										element = t ? t : element;
									} else {
										let g = i as string;
										if (e.tag === "pre" && isHTML(g)) {
											element.insertAdjacentHTML("beforeend", g);
										} else if (Array.isArray(i)) {
											console.error(
												"i is array. This happen when you set elem: [[tag],tag]. It should be elem:[tag,tag]",
												i
											);
										} else {
											if (isHTML(g)) {
												element.insertAdjacentHTML("beforeend", g);
											} else {
												element.appendChild(document.createTextNode(g));
											}
										}
									}
								}
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
