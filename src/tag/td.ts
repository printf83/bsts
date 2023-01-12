import { IAttrColspan, IAttrHeaders, IAttrRowspan, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagTd extends IAttrColspan, IAttrHeaders, IAttrRowspan {}

export class td extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagTd, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("td");
		} else if (arg.length === 1) {
			super("td", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("td", arg[0], arg[1]);
		}
	}
}
