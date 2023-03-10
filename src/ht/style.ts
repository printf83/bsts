import { cons, IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagStyle extends IAttr {
	media?: string;
	type?: "text/css";
}

export class style extends tag {
	constructor();
	constructor(elem: string);
	constructor(attr: IAttrTagStyle);
	constructor(...arg: any[]) {
		super("style", cons<IAttrTagStyle>(arg));
	}
}
