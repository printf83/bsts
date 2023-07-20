import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface Dialog extends IAttr {
	open?: boolean;
}

export class dialog extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Dialog);
	constructor(attr: Dialog, elem: IElem);
	constructor(...arg: any[]) {
		super("dialog", tagConsArg<Dialog>("elem", arg));
	}
}
