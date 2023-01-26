import { IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagStyle extends IAttr {
	media?: string;
	type?: "text/css";
}

export class style extends tag {
	constructor();
	constructor(elem: string);
	constructor(attr: IAttrTagStyle);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("style");
		} else if (arg.length === 1) {
			super("style", arg[0]);
		} else if (arg.length === 2) {
			super("style", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagStyle[]) => attrs.map((i) => new style(i));
}
