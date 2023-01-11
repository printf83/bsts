import { IAttrSpan, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagColgroup extends IAttrSpan {}

export class colgroup extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagColgroup, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("colgroup");
		} else if (arg.length === 1) {
			super("colgroup", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("colgroup", arg[0], arg[1]);
		}
	}
}
