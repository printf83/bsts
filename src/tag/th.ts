import { IAttrColspan, IAttrHeaders, IAttrRowspan, IAttrScope, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagTh extends IAttrColspan, IAttrHeaders, IAttrRowspan, IAttrScope {}

export class th extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagTh, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("th");
		} else if (arg.length === 1) {
			super("th", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("th", arg[0], arg[1]);
		}
	}
}
