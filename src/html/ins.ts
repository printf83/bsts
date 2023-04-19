import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface ITagIns extends IAttr {
	cite?: string;
	datetime?: string | Date;
}

export class ins extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagIns);
	constructor(attr: ITagIns, elem: IElem);
	constructor(...arg: any[]) {
		super("ins", tagConsArg<ITagIns>("elem", arg));
	}
}
