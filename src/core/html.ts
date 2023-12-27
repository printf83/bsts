import { html as IHtml } from "../interface/core/html.js";

/**
 * The html class implements the IHtml interface.
 * It has an ishtml property set to true to indicate it is an HTML element.
 * The elem property stores the HTML tag name for the element.
 * The constructor accepts an optional elem string to set the tag name.
 */
export class html implements IHtml {
	public ishtml = true;
	public elem?: string;

	constructor();
	constructor(elem: string);
	constructor(...arg: any[]) {
		if (arg) {
			this.elem = arg[0];
		} else {
			this.elem = "";
		}
	}
}

/**
 * Checks if the given object is an HTML element.
 * Returns true if obj is an object, not an array,
 * has an ishtml property set to true, and matches
 * the generic type T extending html.
 */
export const isHtml = <T extends html>(obj: any): obj is T => {
	return typeof obj === "object" && !Array.isArray(obj) && "ishtml" in obj && obj["ishtml"] === true;
};
