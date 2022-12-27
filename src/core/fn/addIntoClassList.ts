import { genClassList } from "./genClassList.js";

export const addIntoClassList = (elem: HTMLElement, value: string | string[]): HTMLElement => {
     try {
		let i = genClassList(value);
		if (i && i.length > 0) {
			elem.classList.add(...i);
		}
	} catch (error) {
		console.error(`Fail to add class ${value}`, error);
	}

	return elem;   
}