import { attachAttr } from "./attach/_index.js";
import { IAttr, isTag, tag, strHtml, isHtml } from "./tag.js";
import { removeChildElement } from "./removeChildElement.js";
import { removeElement } from "./removeElement.js";

import { markup } from "./markup.js";

export type buildArg = tag | string | strHtml | (tag | string | strHtml)[];

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
