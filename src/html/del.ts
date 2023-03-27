import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface IAttrTagDel extends IAttr {
	cite?: string;
	datetime?: string | Date;
}

export class del extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagDel);
	constructor(attr: IAttrTagDel, elem: IElem);
	constructor(...arg: any[]) {
		super("del", tagConsArg("elem", arg));
	}
}
