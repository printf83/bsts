import { consProp, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagColgroup extends IAttr {
	span?: number;
}

export class colgroup extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagColgroup);
	constructor(attr: IAttrTagColgroup, elem: IElem);
	constructor(...arg: any[]) {
		super("colgroup", consProp<IAttrTagColgroup>("elem", arg));
	}
}
