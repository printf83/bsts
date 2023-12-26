import { attachAttr } from "./attach/_index.js";
import { isTag, tag } from "./tag.js";
import { html, isHtml } from "./html.js";
import { markup } from "./util/markup.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

/**
 * Converts an HTML string into a DOM element.
 * Trims the HTML string, sets the HTML as the innerHTML of a div element,
 * and returns the first child node of that div.
 */
const htmlToElement = (strHTML: string) => {
	var template = document.createElement("div");
	strHTML = strHTML.trim(); // Never return a text node of whitespace as the result
	template.innerHTML = strHTML;
	return template.firstChild;
};

/**
 * Processes a elem node by recursively building DOM elements.
 *
 * Checks if elem node is a tag or html, calls build() accordingly.
 * Handles other elem types by converting to string and adding as text.
 * Special handling for pre/code tags to add text directly.
 * Calls markup() on strings before adding text.
 * Recursively calls processElem() on any nested elem arrays.
 */
const processElem = (i: elem, e: tag, element: Element) => {
	if (i !== null) {
		if (isTag<attr>(i)) {
			let t = build(element, i as tag);
			element = t ? t : element;
		} else if (isHtml(i)) {
			let t = build(element, i as html);
			element = t ? t : element;
		} else {
			//only pre is html
			let typeofI = typeof i;
			let g: string = "";
			if (typeofI === "number") {
				g = i.toString();
			} else if (typeofI === "string") {
				g = i as string;
			} else {
				throw new Error(`Unsupported element type:${typeofI}`);
			}

			if (e.tag === "pre" || e.tag === "code") {
				element.insertAdjacentText("beforeend", g);
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

/**
 * Builds DOM elements from bst elem and appends/prepends to container.
 * Handles tags, html strings, and other elem types.
 * Recursively processes nested elem arrays.
 * Exported function that is part of the core bst builder API.
 */
export const build = (
	container: Element,
	arg: elem | elem[],
	append: boolean = true,
	beforeElem: Element | ChildNode | null = null
): Element => {
	if (arg) {
		arg = Array.isArray(arg) ? arg : [arg];

		if (arg.length > 0) {
			arg.forEach((h) => {
				if (h !== null) {
					if (isTag<attr>(h)) {
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

/**
 * Gets the first DOM node from the given element(s).
 * If no elements, returns null.
 * If one element, returns it.
 * If multiple elements, returns them in an array.
 */
export const getNode = (arg: elem | elem[]): Element | Element[] | null => {
	let container = build(document.createElement("div"), arg);
	let childCount = container.childElementCount;
	if (childCount === 0) return null;
	if (childCount === 1) return container.firstChild as Element;
	return Array.from(container.childNodes).map((i) => i as Element);
};

/**
 * Gets the HTML string for the given element(s).
 * Builds a temporary div, appends the element(s),
 * gets the innerHTML, then removes the div.
 */
export const getHtml = (arg: elem | elem[]): string => {
	let container = build(document.createElement("div"), arg);
	let result = container.innerHTML;
	removeElement(container);
	return result;
};

/**
 * Appends child element(s) to the given container element.
 * Builds the child elements and appends them to the container.
 * Returns the modified container element.
 */
export const appendChild = (container: Element, arg: elem | elem[]): Element => {
	container = build(container, arg);
	return container;
};

/**
 * Prepends child element(s) to the given container element.
 * Builds the child elements and prepends them to the container.
 * Returns the modified container element.
 */
export const prependChild = (container: Element, arg: elem | elem[]): Element => {
	container = build(container, arg, false);
	return container;
};

/**
 * Removes the given element from the DOM.
 * Checks for any child elements with class "bs-destroy-event"
 * and recursively removes them first.
 * Then removes the element itself.
 */
export const removeElement = (elem: Element) => {
	if (elem.nodeType !== 3) {
		const listOfElem = elem.getElementsByClassName("bs-destroy-event");
		if (listOfElem && listOfElem.length > 0) {
			while (elem.firstChild) {
				removeElement(elem.firstChild as Element);
			}
		}
	}

	elem.remove();
};

/**
 * Replaces the given element with new element(s).
 * Finds the parent of the given element.
 * Builds new element(s) and inserts them in place of the given element.
 * Removes the given element from the DOM.
 * Returns the modified parent element, or undefined if no parent found.
 */
export const replaceWith = (elem: Element, arg: elem | elem[]): Element | undefined => {
	let parent = elem.parentNode as Element;
	if (parent) {
		parent = build(parent, arg, true, elem);
		removeElement(elem);
		return parent;
	}
};

/**
 * Replaces the first child node(s) of the given container element with new node(s).
 * Removes existing child nodes by calling removeElement on each one.
 * Builds new node(s) from the given arg and inserts them into the container.
 * Returns the modified container element.
 */
export const replaceChild = (container: Element, arg: elem | elem[]): Element => {
	while (container.firstChild) {
		removeElement(container.firstChild as Element);
	}

	container = build(container, arg);
	return container;
};
