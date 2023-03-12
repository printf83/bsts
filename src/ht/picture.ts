import { tagConsArg, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagPicture extends IAttr {
	dataText?: string;
	form?: string;
	name?: string;
	type?: string;
	typemustmatch?: boolean;
	usemap?: string;
}

export class picture extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagPicture);
	constructor(attr: IAttrTagPicture, elem: IElem);
	constructor(...arg: any[]) {
		super("picture", tagConsArg<IAttrTagPicture>("elem", arg));
	}
}
