import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface IAttrTagObj extends IAttr {
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
	constructor(attr: IAttrTagObj);
	constructor(attr: IAttrTagObj, elem: IElem);
	constructor(...arg: any[]) {
		super("object", tagConsArg<IAttrTagObj>("elem", arg));
	}
}
