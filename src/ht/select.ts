import { cons, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagSelect extends IAttr {
	autofocus?: boolean;
	disabled?: boolean;
	form?: string;
	multiple?: boolean;
	name?: string;
	required?: boolean;
	size?: number;
}

export class select extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagSelect);
	constructor(attr: IAttrTagSelect, elem: IElem);
	constructor(...arg: any[]) {
		super("select", cons<IAttrTagSelect>(arg));
	}
}
