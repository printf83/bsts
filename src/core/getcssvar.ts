export function getcssvar  (name:string)  {
	let style = getComputedStyle(document.body);
	let result_1 = style.getPropertyValue(`--bs-${name}-rgb`);
	if (result_1) {
		return `rgb(${result_1})`;
	} else {
		let result_2 = style.getPropertyValue(`--bs-${name}`);
		if (result_2) {
			return result_2;
		} else {
			console.error(`Css var --bs-${name} or --bs-${name}-rgb not found`);
			return null;
		}
	}
};