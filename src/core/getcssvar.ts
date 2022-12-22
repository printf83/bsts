export function getcssvar  (name:string) :string | null {
	let style = getComputedStyle(document.body);
	let bs_rgb = style.getPropertyValue(`--bs-${name}-rgb`);
	if (bs_rgb) {
		return `rgb(${bs_rgb})`;
	} else {
		let bs_normal = style.getPropertyValue(`--bs-${name}`);
		if (bs_normal) {
			return bs_normal;
		} else {
			console.error(`Css var --bs-${name} or --bs-${name}-rgb not found`);
			return null;
		}
	}
};