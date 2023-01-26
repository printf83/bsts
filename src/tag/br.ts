import { IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagBr extends IAttr {
	elem?: undefined;
}

export class br extends tag {
	constructor();
	constructor(attr: IAttrTagBr);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("br");
		} else if (arg.length === 1) {
			super("br", arg[0]);
		}
	}

	static gen = (attrs: IAttrTagBr[]) => attrs.map((i) => new br(i));
}
