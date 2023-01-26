import { IAttr, tag } from "../core/base/tag.js";

export class br extends tag {
	constructor();
	constructor(attr: IAttr);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("br");
		} else if (arg.length === 1) {
			super("br", arg[0]);
		}
	}

	static gen = (attrs: IAttr[]) => attrs.map((i) => new br(i));
}
