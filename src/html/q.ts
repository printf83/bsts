import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface IAttrTagQ extends IAttr {
	cite?: string;
}

export class q extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagQ);
	constructor(attr: IAttrTagQ, elem: IElem);
	constructor(...arg: any[]) {
		super("q", tagConsArg<IAttrTagQ>("elem", arg));
	}
}
