import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface ITagObj extends IAttr {
	dataText?: string;
	form?: string;
	name?: string;
	type?: string;
	typemustmatch?: boolean;
	usemap?: string;
}

export class obj extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagObj);
	constructor(attr: ITagObj, elem: IElem);
	constructor(...arg: any[]) {
		super("object", tagConsArg<ITagObj>("elem", arg));
	}
}
