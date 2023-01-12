import { IAttrFor, IAttrForm, IAttrName, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagOutput extends IAttrFor, IAttrForm, IAttrName {}

export class output extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagOutput, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("output");
		} else if (arg.length === 1) {
			super("output", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("output", arg[0], arg[1]);
		}
	}
}