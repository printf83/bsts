import { IAttr } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagStyle extends IAttr {
	media?: string;
	type?: "text/css";
}

export class style extends tag {
	constructor();
	constructor(css: string);
	constructor(attr: IAttrTagStyle);
	constructor(css: string, attr: IAttrTagStyle);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("style");
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				super("style", undefined, arg[0]);
			} else {
				super("style", arg[0], undefined);
			}
		} else if (arg.length === 2) {
			super("style", arg[1], arg[0]);
		}
	}
}
