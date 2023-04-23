export function elemInfo(elem: HTMLElement) {
	let a1 = elem.localName;
	let a2 = elem.id ? `#${elem.id}` : "";
	let a3 = !a2
		? elem.classList && elem.classList.length > 0
			? "." + [].slice.apply(elem.classList).join(".")
			: ""
		: "";
	let a4 = !a2 && !a3 ? ("name" in elem ? `[name='${elem.name}']` : "") : "";
	let a5 = !a2 && !a3 && !a4 ? (elem.innerText ? ` [${elem.innerText}]` : "") : "";

	return `${a1}${a2}${a3}${a4}${a5}`;
}
