import { consProp, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagIns extends IAttr {
	cite?: string;
	datetime?: string | Date;
}

export class ins extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagIns);
	constructor(attr: IAttrTagIns, elem: IElem);
	constructor(...arg: any[]) {
		super("ins", consProp<IAttrTagIns>("elem", arg));
	}
}
