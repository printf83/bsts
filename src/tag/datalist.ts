import { IAttr, IElem, tag } from "../core/base/tag.js";

export class datalist extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("datalist");
		} else if (arg.length === 1) {
			super("datalist", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("datalist", arg[0], arg[1]);
		}
	}
}
