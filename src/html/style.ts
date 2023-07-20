import { tagConsArg, IAttr, tag } from "../core/tag.js";

export interface Style extends IAttr {
	media?: string;
	type?: "text/css";
}

export class style extends tag {
	constructor();
	constructor(elem: string);
	constructor(attr: Style);
	constructor(attr: Style, elem: string);
	constructor(...arg: any[]) {
		super("style", tagConsArg<Style>("elem", arg));
	}
}
