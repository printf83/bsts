import { cons, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagOption extends IAttr {
	disabled?: boolean;
	selected?: boolean;
	value?: string;
}

export class option extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagOption);
	constructor(attr: IAttrTagOption, elem: IElem);
	constructor(...arg: any[]) {
		super("option", cons<IAttrTagOption>(arg));
	}
}
