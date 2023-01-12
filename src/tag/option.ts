import { IAttrDisabled, IAttrLabel, IAttrSelected, IAttrValue, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagOption extends IAttrDisabled, IAttrLabel, IAttrSelected, IAttrValue {}

export class option extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagOption, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("option");
		} else if (arg.length === 1) {
			super("option", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("option", arg[0], arg[1]);
		}
	}
}
