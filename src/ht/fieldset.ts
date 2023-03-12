import { tagConsArg, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagFieldset extends IAttr {
	disabled?: boolean;
	form?: string;
	name?: string;
}

export class fieldset extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagFieldset);
	constructor(attr: IAttrTagFieldset, elem: IElem);
	constructor(...arg: any[]) {
		super("fieldset", tagConsArg<IAttrTagFieldset>("elem", arg));
	}
}
