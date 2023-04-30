import { removeEmptyArray } from "./removeEmptyArray.js";

export const manageClass = (value: string | undefined | (string | undefined)[]): string[] => {
	let result: string[] = [];
	let t: (string | undefined)[];
	let i: string[] = [];

	if (Array.isArray(value)) {
		t = value;
	} else {
		t = [value];
	}

	//remove null
	i = removeEmptyArray(t);

	//make sure every class not have whitespace
	if (i && i.length > 0) {
		for (let x = 0; x < i.length; x++) {
			let j = i[x];
			let h: string[] = [];

			if (j.indexOf(" ") > -1) {
				h = j.split(" ");
				h = removeEmptyArray(h);

				if (h && h.length > 0) {
					for (let y = 0; y < h.length; y++) {
						result.push(h[y]);
					}
				}
			} else {
				result.push(j);
			}
		}
	}

	return result && result.length > 0 ? result : [];
};

export const addClassIntoElement = (elem: Element, value: string | undefined | (string | undefined)[]): Element => {
	try {
		let i = manageClass(value);
		if (i && i.length > 0) {
			elem.classList.add(...i);
		}
	} catch (error) {
		console.error(`Fail to add class ${value}`, error);
	}

	return elem;
};
