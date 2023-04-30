export function elemInfo(elem: Element | HTMLElement) {
	const e = elem as HTMLElement;

	let a1 = e.localName;
	let a2 = e.id ? `#${e.id}` : "";
	let a3 = !a2 ? (e.classList && e.classList.length > 0 ? "." + [].slice.apply(e.classList).join(".") : "") : "";
	let a4 = !a2 && !a3 ? ("name" in e ? `[name='${e.name}']` : "") : "";
	let a5 = !a2 && !a3 && !a4 ? (e.innerText ? ` [${e.innerText}]` : "") : "";

	return `${a1}${a2}${a3}${a4}${a5}`;
}
