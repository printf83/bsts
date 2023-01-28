import { IAttr, tag } from "../core/base/tag.js";
import { param } from "./param.js";

export type IElemTagObj = param | param[];

export interface IAttrTagObj extends IAttr {
	dataText?: string;
	form?: string;
	name?: string;
	type?: string;
	typemustmatch?: boolean;
	usemap?: string;

	elem?: IElemTagObj;
}

export class obj extends tag {
	constructor();
	constructor(elem: IElemTagObj);
	constructor(attr: IAttrTagObj);
	constructor(attr: IAttrTagObj, elem: IElemTagObj);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("object");
		} else if (arg.length === 1) {
			super("object", arg[0]);
		} else if (arg.length === 2) {
			super("object", arg[0], arg[1]);
		}
	}
}
