export const elemInfo = (elem: HTMLElement): string => {
	let a1 = elem.localName;
	let a2 = elem.id ? `#${elem.id}` : undefined;
	let a3 = !a2
		? elem.classList && elem.classList.length > 0
			? "." + [].slice.apply(elem.classList).join(".")
			: undefined
		: undefined;

	let elemName = elem.getAttribute("name");

	let a4 = !a2 && !a3 ? (elemName ? `[name='${elemName}']` : undefined) : undefined;
	let a5 = !a2 && !a3 && !a4 ? (elem.innerText ? ` [${elem.innerText}]` : undefined) : undefined;

	return `${a1}${a2}${a3}${a4}${a5}`;
};
