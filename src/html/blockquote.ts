import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface IAttrTagBlockquote extends IAttr {
	cite?: string;
}

export class blockquote extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagBlockquote);
	constructor(attr: IAttrTagBlockquote, elem: IElem);
	constructor(...arg: any[]) {
		super("blockquote", tagConsArg<IAttrTagBlockquote>("elem", arg));
	}
}
