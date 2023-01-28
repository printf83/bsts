import { IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagCol extends IAttr {
	span?: number;
	elem?: undefined;
}

export class col extends tag {
	constructor();
	constructor(attr: IAttrTagCol);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("col");
		} else if (arg.length === 1) {
			super("col", arg[0]);
		}
	}
}
