import { IAttrCite, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagBlockquote extends IAttrCite {}

export class blockquote extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagBlockquote, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 2) {
			super("blockquote", arg[0], arg[1]);
		} else if (arg.length === 1) {
			super("blockquote", undefined, arg[0]);
		} else if (arg.length === 0) {
			super("blockquote");
		}
	}
}
