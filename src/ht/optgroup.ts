import { consProp, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagOptgroup extends IAttr {
	disabled?: boolean;
	label?: string;
}

export class optgroup extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagOptgroup);
	constructor(attr: IAttrTagOptgroup, elem: IElem);
	constructor(...arg: any[]) {
		super("optgroup", consProp<IAttrTagOptgroup>("elem", arg));
	}
}
