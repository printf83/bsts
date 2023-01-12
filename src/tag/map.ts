import { IAttrName, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagMap extends IAttrName {}

export class map extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagMap, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("map");
		} else if (arg.length === 1) {
			super("map", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("map", arg[0], arg[1]);
		}
	}
}
