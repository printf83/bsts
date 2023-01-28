import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagDialog extends IAttr {
	open?: boolean;
}

export class dialog extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagDialog);
	constructor(attr: IAttrTagDialog, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("dialog");
		} else if (arg.length === 1) {
			super("dialog", arg[0]);
		} else if (arg.length === 2) {
			super("dialog", arg[0], arg[1]);
		}
	}
}
