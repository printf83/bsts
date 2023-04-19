import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface ITagColgroup extends IAttr {
	span?: number;
}

export class colgroup extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagColgroup);
	constructor(attr: ITagColgroup, elem: IElem);
	constructor(...arg: any[]) {
		super("colgroup", tagConsArg<ITagColgroup>("elem", arg));
	}
}
