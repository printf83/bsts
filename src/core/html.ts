import { html as IHtml } from "../interface/core/html.js";

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

export const isHtml = <T extends html>(obj: any): obj is T => {
	return typeof obj === "object" && !Array.isArray(obj) && "ishtml" in obj && obj["ishtml"] === true;
};
