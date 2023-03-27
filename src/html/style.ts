import { tagConsArg, IAttr, tag } from "../core/tag.js";

export interface IAttrTagStyle extends IAttr {
	media?: string;
	type?: "text/css";
}

export class style extends tag {
	constructor();
	constructor(elem: string);
	constructor(attr: IAttrTagStyle);
	constructor(attr: IAttrTagStyle, elem: string);
	constructor(...arg: any[]) {
		super("style", tagConsArg<IAttrTagStyle>("elem", arg));
	}
}
