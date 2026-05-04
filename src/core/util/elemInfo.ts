/**
 * Returns a string describing the given DOM element for debugging purposes.
 *
 * Includes the element's tag name, id, classes, name attribute, and inner text.
 * Omits any attributes that evaluate to empty strings.
 */
export function elemInfo(elem: Element | HTMLElement): string {
	const e = elem as HTMLElement;
	const tagName = e.localName;
	const id = e.id ? `#${e.id}` : "";
	const classes = !id && e.classList.length ? `.${Array.from(e.classList).join(".")}` : "";
	const nameAttr = !id && !classes && "name" in e && e.name ? `[name='${e.name}']` : "";
	const text = !id && !classes && !nameAttr && e.innerText ? ` [${e.innerText}]` : "";

	return `${tagName}${id}${classes}${nameAttr}${text}`;
}
