import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface ITagQ extends IAttr {
	cite?: string;
}

export class q extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagQ);
	constructor(attr: ITagQ, elem: IElem);
	constructor(...arg: any[]) {
		super("q", tagConsArg<ITagQ>("elem", arg));
	}
}
