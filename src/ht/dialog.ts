import { cons, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagDialog extends IAttr {
	open?: boolean;
}

export class dialog extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagDialog);
	constructor(attr: IAttrTagDialog, elem: IElem);
	constructor(...arg: any[]) {
		super("dialog", cons<IAttrTagDialog>(arg));
	}
}
