import { IAttrSpan } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagCol extends IAttrSpan {}

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
