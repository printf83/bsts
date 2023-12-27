/**
 * Returns a string describing the given DOM element for debugging purposes.
 *
 * Includes the element's tag name, id, classes, name attribute, and inner text.
 * Omits any attributes that evaluate to empty strings.
 */
export function elemInfo(elem: Element | HTMLElement): string {
	const e = elem as HTMLElement;

	let a1 = e.localName;
	let a2 = e.id ? `#${e.id}` : "";
	let a3 = !a2 ? (e.classList && e.classList.length > 0 ? "." + [].slice.apply(e.classList).join(".") : "") : "";
	let a4 = !a2 && !a3 ? ("name" in e ? `[name='${e.name}']` : "") : "";
	let a5 = !a2 && !a3 && !a4 ? (e.innerText ? ` [${e.innerText}]` : "") : "";

	return `${a1}${a2}${a3}${a4}${a5}`;
}
