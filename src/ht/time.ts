import { cons, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagTime extends IAttr {
	datetime?: Date;
}

export class time extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagTime);
	constructor(attr: IAttrTagTime, elem: IElem);
	constructor(...arg: any[]) {
		super("time", cons<IAttrTagTime>(arg));
	}
}
