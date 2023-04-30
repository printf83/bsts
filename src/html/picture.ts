import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface Picture extends IAttr {
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
	constructor(attr: Picture);
	constructor(attr: Picture, elem: IElem);
	constructor(...arg: any[]) {
		super("picture", tagConsArg<Picture>("elem", arg));
	}
}

export const Picture = (AttrOrElem?: Picture | IElem, Elem?: IElem) =>
	genTagClass<picture, Picture>(picture, AttrOrElem, Elem);
