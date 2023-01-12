import { IAttr, tag } from "../core/attach/_index.js";

export interface IAttrTagCol extends IAttr {
	span?: number;
}

export class col extends tag {
	constructor();
	constructor(attr: IAttrTagCol);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("col");
		} else if (arg.length === 1) {
			super("col", arg[0], undefined);
		}
	}
}
